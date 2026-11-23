// Sessions for /admin: a cookie holding the username and expiry, signed with the session key.
// It also carries a fingerprint of the user's password hash, so changing or resetting a password
// signs out every other browser of that user. Removing the user ends their sessions at once.
import crypto from "node:crypto";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { findAdmin, getSessionKey } from "./adminStore.mjs";

export const COOKIE = "oor_admin";
const HOURS = 12;

const fingerprint = (hash) => crypto.createHash("sha256").update(String(hash)).digest("base64url").slice(0, 16);

function sign(key, payload) {
  return crypto.createHmac("sha256", key).update(payload).digest("base64url");
}

async function secureCookies() {
  if (process.env.ADMIN_COOKIE_SECURE === "false") return false;
  if (process.env.ADMIN_COOKIE_SECURE === "true") return true;
  const list = await headers();
  return list.get("x-forwarded-proto") === "https" || process.env.NODE_ENV === "production";
}

export async function startSession(user) {
  const key = await getSessionKey();
  const payload = Buffer.from(JSON.stringify({ u: user.username, exp: Date.now() + HOURS * 3600_000, v: fingerprint(user.hash) })).toString("base64url");
  const store = await cookies();
  store.set(COOKIE, `${payload}.${sign(key, payload)}`, {
    httpOnly: true,
    sameSite: "strict",
    secure: await secureCookies(),
    path: "/admin",
    maxAge: HOURS * 3600,
  });
}

export async function endSession() {
  const store = await cookies();
  store.delete({ name: COOKIE, path: "/admin" });
}

/** The signed-in admin, or null. */
export async function currentAdmin() {
  const raw = (await cookies()).get(COOKIE)?.value;
  if (!raw || !raw.includes(".")) return null;
  const [payload, signature] = raw.split(".");
  const key = await getSessionKey();
  const expected = sign(key, payload);
  if (!signature || signature.length !== expected.length || !crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return null;
  let data;
  try {
    data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
  } catch {
    return null;
  }
  if (!data?.u || !(data.exp > Date.now())) return null;
  const user = await findAdmin(data.u);
  if (!user || fingerprint(user.hash) !== data.v) return null;
  return { username: user.username, name: user.name || user.username };
}

/** For admin pages and actions: the admin, or off to the login page. */
export async function requireAdmin() {
  const admin = await currentAdmin();
  if (!admin) redirect("/admin/login");
  return admin;
}
