import { NextResponse } from "next/server";
import { cleanEnquiry, deliverPending, LeadError, saveEnquiry } from "@/lib/leads";
import { clientIp, rateLimit } from "@/lib/rateLimit";

const MAX_BODY = 16 * 1024;

/** The enquiry form. Saved to disk before answering; the CRM gets it right after (and on every retry). */
export async function POST(request) {
  const ip = clientIp(request.headers);
  if (!rateLimit(`lead:${ip}`, { limit: 6, windowMs: 10 * 60 * 1000 }).ok) {
    return NextResponse.json({ error: "Too many enquiries from this connection. Please call us instead." }, { status: 429 });
  }
  const raw = await request.text();
  if (raw.length > MAX_BODY) return NextResponse.json({ error: "Please shorten your message." }, { status: 413 });
  let body;
  try {
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 });
  }
  // The hidden "website" field is only ever filled in by bots: answer as if it worked, keep nothing.
  if (String(body?.website || "").trim()) return NextResponse.json({ ok: true });

  let enquiry;
  try {
    enquiry = cleanEnquiry(body);
  } catch (error) {
    if (error instanceof LeadError) return NextResponse.json({ error: error.message }, { status: 400 });
    throw error;
  }
  await saveEnquiry(enquiry, { ip, userAgent: (request.headers.get("user-agent") || "").slice(0, 200) });
  deliverPending().catch(() => {});
  return NextResponse.json({ ok: true });
}
