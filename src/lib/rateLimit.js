// A small in-memory limiter (the site runs as one process). Keyed by whatever the caller passes,
// usually the visitor's IP as nginx reports it.
const buckets = new Map();

export function rateLimit(key, { limit, windowMs }) {
  const now = Date.now();
  const bucket = buckets.get(key);
  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    if (buckets.size > 20_000) {
      for (const [k, v] of buckets) if (v.resetAt <= now) buckets.delete(k);
    }
    return { ok: true, remaining: limit - 1 };
  }
  bucket.count += 1;
  return { ok: bucket.count <= limit, remaining: Math.max(0, limit - bucket.count), retryAfterMs: bucket.resetAt - now };
}

/** The visitor's IP: nginx's X-Real-IP (set by our own proxy config), else the last forwarded hop. */
export function clientIp(headers) {
  const real = headers.get("x-real-ip");
  if (real) return real.trim();
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",").at(-1).trim();
  return "local";
}
