// Photos added in /admin. Each upload is checked (JPEG / PNG / WebP, at most 10 MB, a real image),
// turned upright, shrunk to 2000 px on the long side, re-encoded as WebP (which drops camera / GPS
// metadata) and kept under DATA_DIR/uploads/<year>/<month>/<random>.webp. The site serves them at
// /media/<year>/<month>/<random>.webp.
import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import sharp from "sharp";
import { DATA_DIR } from "./content";

export const UPLOAD_DIR = path.join(DATA_DIR, "uploads");
export const MAX_UPLOAD_BYTES = 10 * 1024 * 1024;
const TYPES = new Set(["jpeg", "png", "webp"]);

export class UploadError extends Error {}

export async function saveUpload(buffer) {
  if (!buffer?.length) throw new UploadError("Empty file");
  if (buffer.length > MAX_UPLOAD_BYTES) throw new UploadError("Photo is larger than 10 MB");
  let meta;
  try {
    meta = await sharp(buffer, { limitInputPixels: 80_000_000 }).metadata();
  } catch {
    throw new UploadError("Not a photo this site can use (JPEG, PNG or WebP)");
  }
  if (!TYPES.has(meta.format)) throw new UploadError("Use a JPEG, PNG or WebP photo");
  const now = new Date();
  const folder = path.join(String(now.getFullYear()), String(now.getMonth() + 1).padStart(2, "0"));
  const name = `${crypto.randomBytes(8).toString("hex")}.webp`;
  await fs.mkdir(path.join(UPLOAD_DIR, folder), { recursive: true });
  const output = await sharp(buffer, { limitInputPixels: 80_000_000 })
    .rotate()
    .resize({ width: 2000, height: 2000, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 84 })
    .toBuffer({ resolveWithObject: true });
  await fs.writeFile(path.join(UPLOAD_DIR, folder, name), output.data);
  return { path: `/media/${folder.replace(/\\/g, "/")}/${name}`, width: output.info.width, height: output.info.height, bytes: output.info.size };
}

/** The file for a /media path, or null when the path is not a stored upload. */
export function uploadFile(segments) {
  if (!Array.isArray(segments) || segments.length !== 3) return null;
  const [year, month, name] = segments;
  if (!/^\d{4}$/.test(year) || !/^\d{2}$/.test(month) || !/^[a-f0-9]{16}\.webp$/.test(name)) return null;
  return path.join(UPLOAD_DIR, year, month, name);
}
