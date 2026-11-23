import { currentAdmin } from "@/lib/auth";
import { MAX_UPLOAD_BYTES, saveUpload, UploadError } from "@/lib/uploads";

export const dynamic = "force-dynamic";

function sameOrigin(request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  const host = request.headers.get("x-forwarded-host") || request.headers.get("host");
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

/** One photo per request, from the admin editors. Answers { path } to put in the item's photos. */
export async function POST(request) {
  // The session cookie is SameSite=Strict; the origin check and the custom header are a second lock.
  if (!sameOrigin(request) || request.headers.get("x-oor-upload") !== "1") return Response.json({ error: "Not allowed" }, { status: 403 });
  const admin = await currentAdmin();
  if (!admin) return Response.json({ error: "Signed out: sign in again" }, { status: 401 });
  const declared = Number(request.headers.get("content-length") || 0);
  if (declared > MAX_UPLOAD_BYTES + 64 * 1024) return Response.json({ error: "Photo is larger than 10 MB" }, { status: 413 });
  try {
    const form = await request.formData();
    const file = form.get("file");
    if (!file || typeof file === "string") return Response.json({ error: "No photo in the request" }, { status: 400 });
    if (file.size > MAX_UPLOAD_BYTES) return Response.json({ error: "Photo is larger than 10 MB" }, { status: 413 });
    const saved = await saveUpload(Buffer.from(await file.arrayBuffer()));
    console.log(`[admin] ${admin.username} uploaded ${saved.path} (${saved.width}x${saved.height})`);
    return Response.json(saved);
  } catch (error) {
    if (error instanceof UploadError) return Response.json({ error: error.message }, { status: 400 });
    console.error("[admin] upload failed", error);
    return Response.json({ error: "Upload failed" }, { status: 500 });
  }
}
