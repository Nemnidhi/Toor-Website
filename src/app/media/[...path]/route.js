import fs from "node:fs/promises";
import { uploadFile } from "@/lib/uploads";

export const dynamic = "force-dynamic";

/** Serves photos uploaded in /admin. Names are random and never reused, so they cache for a year. */
export async function GET(_request, { params }) {
  const { path: segments } = await params;
  const file = uploadFile(segments);
  if (!file) return new Response("Not found", { status: 404 });
  try {
    const data = await fs.readFile(file);
    return new Response(data, {
      headers: {
        "content-type": "image/webp",
        "content-length": String(data.length),
        "cache-control": "public, max-age=31536000, immutable",
        "x-content-type-options": "nosniff",
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
