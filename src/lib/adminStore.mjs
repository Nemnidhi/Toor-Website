// Admin users for /admin: DATA_DIR/admins.json, passwords as scrypt hashes (never stored in plain).
// Plain Node (no Next imports) so scripts/admin.mjs can use it on the server to add or reset users.
import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";

export const DATA_DIR = process.env.DATA_DIR ? path.resolve(process.env.DATA_DIR) : path.join(process.cwd(), "data");
const FILE = path.join(DATA_DIR, "admins.json");
const KEY_FILE = path.join(DATA_DIR, "session.key");
const SCRYPT = { N: 16384, r: 8, p: 1, keylen: 64 };
export const MIN_PASSWORD = 10;

export class AdminError extends Error {}

export function cleanUsername(value) {
  const name = String(value || "").trim().toLowerCase();
  if (!/^[a-z0-9._-]{3,32}$/.test(name)) throw new AdminError("Username: 3-32 letters, numbers, dot, dash or underscore");
  return name;
}

export function checkPasswordRules(password) {
  const value = String(password || "");
  if (value.length < MIN_PASSWORD) throw new AdminError(`Password needs at least ${MIN_PASSWORD} characters`);
  if (value.length > 200) throw new AdminError("Password is too long");
  return value;
}

function scrypt(password, salt) {
  return new Promise((resolve, reject) =>
    crypto.scrypt(password, salt, SCRYPT.keylen, { N: SCRYPT.N, r: SCRYPT.r, p: SCRYPT.p, maxmem: 64 * 1024 * 1024 }, (error, key) => (error ? reject(error) : resolve(key))),
  );
}

export async function hashPassword(password) {
  const salt = crypto.randomBytes(16);
  const key = await scrypt(String(password), salt);
  return `scrypt$${SCRYPT.N}$${salt.toString("base64")}$${key.toString("base64")}`;
}

export async function verifyPassword(password, stored) {
  const [kind, , saltB64, keyB64] = String(stored || "").split("$");
  if (kind !== "scrypt" || !saltB64 || !keyB64) return false;
  const expected = Buffer.from(keyB64, "base64");
  const actual = await scrypt(String(password), Buffer.from(saltB64, "base64"));
  return actual.length === expected.length && crypto.timingSafeEqual(actual, expected);
}

/** A dummy hash so a wrong username takes as long as a wrong password. */
let dummyHash = null;
export async function burnTime(password) {
  dummyHash ||= await hashPassword("not-a-real-password");
  await verifyPassword(password, dummyHash);
}

export async function readAdmins() {
  try {
    const data = JSON.parse(await fs.readFile(FILE, "utf8"));
    return Array.isArray(data.users) ? data.users : [];
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}

async function writeAdmins(users) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  const tmp = `${FILE}.${process.pid}.tmp`;
  await fs.writeFile(tmp, JSON.stringify({ users }, null, 1), { mode: 0o600 });
  await fs.rename(tmp, FILE);
}

export async function findAdmin(username) {
  const name = String(username || "").trim().toLowerCase();
  return (await readAdmins()).find((user) => user.username === name) || null;
}

export async function addAdmin(username, displayName, password) {
  const name = cleanUsername(username);
  checkPasswordRules(password);
  const users = await readAdmins();
  if (users.some((user) => user.username === name)) throw new AdminError(`${name} already exists`);
  users.push({ username: name, name: String(displayName || name).trim().slice(0, 60), hash: await hashPassword(password), createdAt: new Date().toISOString(), passwordChangedAt: new Date().toISOString() });
  await writeAdmins(users);
}

export async function setPassword(username, password) {
  checkPasswordRules(password);
  const users = await readAdmins();
  const user = users.find((u) => u.username === String(username || "").trim().toLowerCase());
  if (!user) throw new AdminError("No such user");
  user.hash = await hashPassword(password);
  user.passwordChangedAt = new Date().toISOString();
  await writeAdmins(users);
}

export async function removeAdmin(username) {
  const users = await readAdmins();
  const left = users.filter((u) => u.username !== String(username || "").trim().toLowerCase());
  if (left.length === users.length) throw new AdminError("No such user");
  await writeAdmins(left);
}

/** The key that signs session cookies: SESSION_SECRET if set, else a random key kept in DATA_DIR. */
let sessionKey = null;
export async function getSessionKey() {
  if (sessionKey) return sessionKey;
  const fromEnv = String(process.env.SESSION_SECRET || "").trim();
  if (fromEnv) {
    if (fromEnv.length < 32) throw new Error("SESSION_SECRET must be at least 32 characters");
    sessionKey = fromEnv;
    return sessionKey;
  }
  try {
    sessionKey = (await fs.readFile(KEY_FILE, "utf8")).trim();
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
    const fresh = crypto.randomBytes(48).toString("base64url");
    await fs.writeFile(KEY_FILE, fresh, { mode: 0o600, flag: "wx" }).catch(() => {});
    sessionKey = (await fs.readFile(KEY_FILE, "utf8")).trim();
  }
  return sessionKey;
}
