// Website enquiries. Each one is written to disk first (DATA_DIR/leads/pending/<id>.json) and only
// moved to leads/sent once the CRM has answered that it has the lead, so an enquiry survives a CRM
// outage, a restart or a bad setting: the sender retries every minute until it gets through.
//
// The CRM call is signed like the WhatsApp desk's: HMAC-SHA256 of "<timestamp>.<raw body>" with
// CRM_LEADS_SECRET, sent as x-oor-timestamp / x-oor-signature. The enquiry id lets the CRM ignore a
// retry it has already saved.
import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { DATA_DIR } from "./content";
import { departmentFor, TEAM_SIZES, TIMELINES, WORKSPACE_TYPES } from "./leadOptions";

const LEADS_DIR = path.join(DATA_DIR, "leads");
const PENDING = path.join(LEADS_DIR, "pending");
const SENT = path.join(LEADS_DIR, "sent");
const SEND_TIMEOUT_MS = 15_000;

export class LeadError extends Error {}

const text = (value, max) => String(value ?? "").replace(/\s+/g, " ").trim().slice(0, max);

/** A 10-digit Indian mobile, or a number with country code (11-15 digits). "" if neither. */
export function cleanPhone(value) {
  let digits = String(value || "").replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("0")) digits = digits.slice(1);
  if (digits.length === 10) return /^[6-9]/.test(digits) ? `91${digits}` : "";
  if (digits.length === 12 && digits.startsWith("91")) return /^91[6-9]/.test(digits) ? digits : "";
  return /^\d{11,15}$/.test(digits) && !digits.startsWith("91") ? digits : "";
}

/** Checks the form; throws LeadError with a message the visitor can act on. */
export function cleanEnquiry(body) {
  const name = text(body?.name, 120);
  if (name.length < 2) throw new LeadError("Please enter your name.");
  const phone = cleanPhone(body?.phone);
  if (!phone) throw new LeadError("Please enter a valid 10-digit mobile number.");
  const email = text(body?.email, 160).toLowerCase();
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new LeadError("Please check the email address.");
  const workspaceType = text(body?.workspaceType, 80);
  if (workspaceType && !WORKSPACE_TYPES.some((option) => option.label === workspaceType)) throw new LeadError("Please choose a workspace type.");
  const teamSize = text(body?.teamSize, 20);
  const timeline = text(body?.timeline, 40);
  return {
    name,
    phone,
    email,
    workspaceType,
    department: departmentFor(workspaceType),
    teamSize: TEAM_SIZES.includes(teamSize) ? teamSize : "",
    timeline: TIMELINES.includes(timeline) ? timeline : "",
    message: String(body?.requirements ?? body?.message ?? "").replace(/\r\n/g, "\n").trim().slice(0, 1000),
    page: text(body?.page, 200).startsWith("/") ? text(body?.page, 200) : "",
    property: text(body?.property, 160),
    // Only an explicit tick counts (the box starts unticked).
    whatsappConsent: body?.whatsappConsent === true,
  };
}

function newId() {
  const stamp = new Date().toISOString().replace(/[-:TZ.]/g, "").slice(0, 14);
  return `web_${stamp}_${crypto.randomBytes(6).toString("hex")}`;
}

async function writeJson(file, data) {
  const tmp = `${file}.${process.pid}.tmp`;
  await fs.writeFile(tmp, JSON.stringify(data, null, 1));
  await fs.rename(tmp, file);
}

/** Saves the enquiry to disk (the moment it is safe) and returns its id. */
export async function saveEnquiry(enquiry, meta = {}) {
  await fs.mkdir(PENDING, { recursive: true });
  const id = newId();
  const record = { id, receivedAt: new Date().toISOString(), enquiry, meta, attempts: 0, lastAttemptAt: null, lastError: null };
  await writeJson(path.join(PENDING, `${id}.json`), record);
  return id;
}

function crmSettings() {
  return {
    url: String(process.env.CRM_LEADS_URL || "").trim(),
    secret: String(process.env.CRM_LEADS_SECRET || "").trim(),
  };
}

export function signBody(secret, timestamp, body) {
  return crypto.createHmac("sha256", secret).update(`${timestamp}.${body}`).digest("hex");
}

async function sendOne(record) {
  const { url, secret } = crmSettings();
  if (!url || !secret) throw new Error("CRM link not set up (CRM_LEADS_URL / CRM_LEADS_SECRET)");
  const body = JSON.stringify({ enquiryId: record.id, ...record.enquiry });
  const timestamp = String(Date.now());
  const response = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json", "x-oor-timestamp": timestamp, "x-oor-signature": signBody(secret, timestamp, body) },
    body,
    signal: AbortSignal.timeout(SEND_TIMEOUT_MS),
  });
  const data = await response.json().catch(() => null);
  if (!response.ok) throw new Error(`CRM answered ${response.status}${data?.message ? `: ${data.message}` : ""}`);
  return data;
}

let running = null;

/** Sends every pending enquiry, oldest first. Never runs twice at once; never throws. */
export function deliverPending() {
  if (running) return running;
  running = (async () => {
    const result = { sent: 0, failed: 0 };
    let files = [];
    try {
      files = (await fs.readdir(PENDING)).filter((name) => name.endsWith(".json")).sort();
    } catch {
      return result;
    }
    await fs.mkdir(SENT, { recursive: true });
    for (const name of files) {
      const file = path.join(PENDING, name);
      let record;
      try {
        record = JSON.parse(await fs.readFile(file, "utf8"));
      } catch {
        continue; // half-written or already moved
      }
      record.attempts = (record.attempts || 0) + 1;
      record.lastAttemptAt = new Date().toISOString();
      try {
        const crm = await sendOne(record);
        record.sentAt = new Date().toISOString();
        record.lastError = null;
        record.crm = { leadId: crm?.leadId ?? null, created: Boolean(crm?.created), duplicate: Boolean(crm?.duplicate), brokerBlocked: Boolean(crm?.brokerBlocked), assignee: crm?.assignee?.name || null };
        await writeJson(path.join(SENT, name), record);
        await fs.unlink(file);
        result.sent += 1;
      } catch (error) {
        record.lastError = error?.message || String(error);
        await writeJson(file, record);
        result.failed += 1;
        console.error(`[leads] ${record.id} not delivered (attempt ${record.attempts}): ${record.lastError}`);
      }
    }
    return result;
  })().finally(() => {
    running = null;
  });
  return running;
}

/** For the admin page: pending (oldest first) and the latest sent enquiries. */
export async function listEnquiries({ sentLimit = 100 } = {}) {
  const read = async (dir) => {
    try {
      const names = (await fs.readdir(dir)).filter((name) => name.endsWith(".json")).sort();
      return names;
    } catch {
      return [];
    }
  };
  const load = async (dir, names) => (await Promise.all(names.map((n) => fs.readFile(path.join(dir, n), "utf8").then(JSON.parse).catch(() => null)))).filter(Boolean);
  const pendingNames = await read(PENDING);
  const sentNames = (await read(SENT)).slice(-sentLimit).reverse();
  return { pending: await load(PENDING, pendingNames), sent: await load(SENT, sentNames), sentTotal: (await read(SENT)).length, crmConfigured: Boolean(crmSettings().url && crmSettings().secret) };
}
