// The site's editable content: buildings (ready to move / new commercial) and the option cards on the
// retail, hostel and hotel pages. Kept in one JSON file under DATA_DIR (outside the code, so a code
// update never touches it). Every save keeps the previous file in DATA_DIR/history and a line in
// DATA_DIR/audit.log. The app runs as one process, so writes are queued one after another.
import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import seed from "@/data/seed.json";
import { slugify } from "./slug";

export { slugify };

export const DATA_DIR = process.env.DATA_DIR ? path.resolve(process.env.DATA_DIR) : path.join(process.cwd(), "data");
const FILE = path.join(DATA_DIR, "content.json");
const HISTORY_DIR = path.join(DATA_DIR, "history");
const AUDIT_FILE = path.join(DATA_DIR, "audit.log");
const KEEP_HISTORY = 200;

export const BUILDING_CATEGORIES = {
  "ready-to-move": { label: "Ready to Move", plural: "Ready to Move Offices", badge: "Ready to Move", crumb: "Ready to Move" },
  "new-commercial-building": { label: "New Commercial", plural: "New Commercial Buildings", badge: "New Commercial", crumb: "New Commercial" },
};
export const OPTION_CATEGORIES = {
  "retail-shops-showrooms": { label: "Retail Shops / Showrooms" },
  hostels: { label: "Hostels" },
  hotels: { label: "Hotels" },
};
export const SECTION_TYPES = ["list", "price", "checks"];

let cache = null; // { mtimeMs, data }
let queue = Promise.resolve();

async function ensureFile() {
  try {
    await fs.access(FILE);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.writeFile(FILE, JSON.stringify(seed, null, 1));
  }
}

export async function readContent() {
  await ensureFile();
  const stat = await fs.stat(FILE);
  if (cache && cache.mtimeMs === stat.mtimeMs) return cache.data;
  const data = JSON.parse(await fs.readFile(FILE, "utf8"));
  cache = { mtimeMs: stat.mtimeMs, data };
  return data;
}

async function audit(actor, action, detail) {
  const line = JSON.stringify({ at: new Date().toISOString(), by: actor || "system", action, ...detail });
  await fs.appendFile(AUDIT_FILE, `${line}\n`);
}

async function pruneHistory() {
  const files = (await fs.readdir(HISTORY_DIR)).filter((name) => name.endsWith(".json")).sort();
  for (const name of files.slice(0, Math.max(0, files.length - KEEP_HISTORY))) {
    await fs.unlink(path.join(HISTORY_DIR, name)).catch(() => {});
  }
}

/** Applies `change(data)` to a copy of the content and saves it atomically. Returns change's result. */
function mutate(actor, action, change) {
  const run = queue.then(async () => {
    const current = await readContent();
    const next = structuredClone(current);
    const result = await change(next);
    await fs.mkdir(HISTORY_DIR, { recursive: true });
    const stamp = new Date().toISOString().replace(/[:.]/g, "-");
    await fs.copyFile(FILE, path.join(HISTORY_DIR, `content-${stamp}.json`));
    const tmp = `${FILE}.${process.pid}.tmp`;
    await fs.writeFile(tmp, JSON.stringify(next, null, 1));
    await fs.rename(tmp, FILE);
    cache = null;
    await audit(actor, action, result?.audit || {});
    await pruneHistory();
    return result;
  });
  queue = run.catch(() => {});
  return run;
}

// ---------------------------------------------------------------- reading

const byOrder = (a, b) => (a.order ?? 0) - (b.order ?? 0) || a.name.localeCompare(b.name);

export async function listBuildings(category, { includeHidden = false } = {}) {
  const { buildings } = await readContent();
  return buildings.filter((b) => (!category || b.category === category) && (includeHidden || b.published)).sort(byOrder);
}

export async function getBuilding(category, slug, { includeHidden = false } = {}) {
  const { buildings } = await readContent();
  return buildings.find((b) => b.category === category && b.slug === slug && (includeHidden || b.published)) || null;
}

export async function getBuildingById(id) {
  const { buildings } = await readContent();
  return buildings.find((b) => b.id === id) || null;
}

export async function listOptions(category, { includeHidden = false } = {}) {
  const { options } = await readContent();
  return options.filter((o) => (!category || o.category === category) && (includeHidden || o.published)).sort(byOrder);
}

export async function getOptionById(id) {
  const { options } = await readContent();
  return options.find((o) => o.id === id) || null;
}

/** The latest lines of the change log, newest first (for the admin overview). */
export async function recentChanges(limit = 12) {
  try {
    const lines = (await fs.readFile(AUDIT_FILE, "utf8")).trim().split("\n").slice(-limit).reverse();
    return lines.map((line) => {
      try {
        return JSON.parse(line);
      } catch {
        return null;
      }
    }).filter(Boolean);
  } catch {
    return [];
  }
}

// ---------------------------------------------------------------- checking input

export class ContentError extends Error {}

const text = (value, max, label, { required = false } = {}) => {
  const clean = String(value ?? "").replace(/\s+/g, " ").trim();
  if (required && !clean) throw new ContentError(`${label} is required`);
  if (clean.length > max) throw new ContentError(`${label} is too long (${max} characters at most)`);
  return clean;
};
const longText = (value, max, label) => {
  const clean = String(value ?? "").replace(/\r\n/g, "\n").trim();
  if (clean.length > max) throw new ContentError(`${label} is too long (${max} characters at most)`);
  return clean;
};


/** Only photos this site serves: the original ones (/assets/...) or uploads (/media/...). */
function imagePath(value) {
  const clean = String(value || "").trim();
  if (!/^\/(assets|media)\/[A-Za-z0-9._\-/]+$/.test(clean) || clean.includes("..")) {
    throw new ContentError(`Photo ${clean || "(empty)"} is not a photo on this site`);
  }
  return clean;
}

export function cleanBuilding(input, existing) {
  const category = String(input.category || existing?.category || "");
  if (!BUILDING_CATEGORIES[category]) throw new ContentError("Choose a category");
  const name = text(input.name, 120, "Name", { required: true });
  const slug = slugify(input.slug || name);
  if (slug.length < 2) throw new ContentError("The web address (slug) needs at least 2 letters or numbers");
  const images = (Array.isArray(input.images) ? input.images : []).slice(0, 30).map(imagePath);
  const sections = (Array.isArray(input.sections) ? input.sections : []).slice(0, 12).map((section, index) => {
    const type = SECTION_TYPES.includes(section?.type) ? section.type : "list";
    const rows = (Array.isArray(section?.rows) ? section.rows : [])
      .slice(0, 40)
      .map((row) => ({ label: type === "checks" ? "" : text(row?.label, 120, "Row label"), value: text(row?.value, 400, "Row value") }))
      .filter((row) => row.label || row.value);
    return { title: text(section?.title, 80, `Section ${index + 1} title`, { required: true }), type, rows };
  });
  const area = text(input.area, 200, "Area");
  return {
    id: existing?.id || crypto.randomUUID().replace(/-/g, "").slice(0, 12),
    category,
    slug,
    name,
    headline: text(input.headline, 200, "Headline") || area,
    floors: text(input.floors, 200, "Floors"),
    area,
    parking: text(input.parking, 300, "Parking"),
    powerBackup: text(input.powerBackup, 300, "Power backup"),
    liftAccess: text(input.liftAccess, 300, "Lift access"),
    maintenance: text(input.maintenance, 300, "Maintenance"),
    description: longText(input.description, 4000, "About this building"),
    images,
    sections,
    published: Boolean(input.published),
    order: Number.isFinite(Number(existing?.order)) ? Number(existing.order) : 0,
    updatedAt: new Date().toISOString(),
  };
}

export function cleanOption(input, existing) {
  const category = String(input.category || existing?.category || "");
  if (!OPTION_CATEGORIES[category]) throw new ContentError("Choose a category");
  const stats = (Array.isArray(input.stats) ? input.stats : []).slice(0, 2).map((stat) => ({ label: text(stat?.label, 40, "Detail label"), value: text(stat?.value, 80, "Detail value") }));
  while (stats.length < 2) stats.push({ label: "", value: "" });
  return {
    id: existing?.id || crypto.randomUUID().replace(/-/g, "").slice(0, 12),
    category,
    name: text(input.name, 120, "Name", { required: true }),
    subtitle: text(input.subtitle, 240, "Best for"),
    badge: text(input.badge, 40, "Status badge"),
    priceLabel: text(input.priceLabel, 40, "Price badge"),
    image: input.image ? imagePath(input.image) : "",
    stats,
    features: (Array.isArray(input.features) ? input.features : []).map((f) => text(f, 120, "Feature")).filter(Boolean).slice(0, 8),
    published: Boolean(input.published),
    order: Number.isFinite(Number(existing?.order)) ? Number(existing.order) : 0,
    updatedAt: new Date().toISOString(),
  };
}

// ---------------------------------------------------------------- saving

function placeLast(list, item, category) {
  const same = list.filter((x) => x.category === category && x.id !== item.id);
  item.order = same.length ? Math.max(...same.map((x) => x.order || 0)) + 1 : 1;
}

export function saveBuilding(input, actor) {
  return mutate(actor, "building.save", async (data) => {
    const existing = input.id ? data.buildings.find((b) => b.id === input.id) : null;
    if (input.id && !existing) throw new ContentError("This building no longer exists (deleted in another window?)");
    const building = cleanBuilding(input, existing);
    const clash = data.buildings.find((b) => b.category === building.category && b.slug === building.slug && b.id !== building.id);
    if (clash) throw new ContentError(`The web address /${building.category}/${building.slug} is already used by ${clash.name}`);
    if (!existing || existing.category !== building.category) placeLast(data.buildings, building, building.category);
    if (existing) data.buildings[data.buildings.indexOf(existing)] = building;
    else data.buildings.push(building);
    return { building, audit: { id: building.id, name: building.name, created: !existing } };
  });
}

export function saveOption(input, actor) {
  return mutate(actor, "option.save", async (data) => {
    const existing = input.id ? data.options.find((o) => o.id === input.id) : null;
    if (input.id && !existing) throw new ContentError("This card no longer exists (deleted in another window?)");
    const option = cleanOption(input, existing);
    if (!existing || existing.category !== option.category) placeLast(data.options, option, option.category);
    if (existing) data.options[data.options.indexOf(existing)] = option;
    else data.options.push(option);
    return { option, audit: { id: option.id, name: option.name, created: !existing } };
  });
}

function listKey(kind) {
  if (kind !== "buildings" && kind !== "options") throw new ContentError("Unknown list");
  return kind;
}

export function deleteItem(kind, id, actor) {
  return mutate(actor, `${kind}.delete`, async (data) => {
    const list = data[listKey(kind)];
    const index = list.findIndex((x) => x.id === id);
    if (index < 0) throw new ContentError("Already deleted");
    const [removed] = list.splice(index, 1);
    return { removed, audit: { id, name: removed.name } };
  });
}

export function setPublished(kind, id, published, actor) {
  return mutate(actor, `${kind}.${published ? "show" : "hide"}`, async (data) => {
    const item = data[listKey(kind)].find((x) => x.id === id);
    if (!item) throw new ContentError("Not found");
    item.published = Boolean(published);
    return { audit: { id, name: item.name } };
  });
}

/** Moves an item one place up (-1) or down (+1) among its category. */
export function moveItem(kind, id, direction, actor) {
  return mutate(actor, `${kind}.move`, async (data) => {
    const list = data[listKey(kind)];
    const item = list.find((x) => x.id === id);
    if (!item) throw new ContentError("Not found");
    const siblings = list.filter((x) => x.category === item.category).sort(byOrder);
    siblings.forEach((x, i) => (x.order = i + 1));
    const at = siblings.indexOf(item);
    const other = siblings[at + (direction < 0 ? -1 : 1)];
    if (other) [item.order, other.order] = [other.order, item.order];
    return { audit: { id, name: item.name, direction } };
  });
}
