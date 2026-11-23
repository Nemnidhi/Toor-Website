export const dynamic = "force-dynamic";

export default function robots() {
  const base = (process.env.SITE_URL || "http://localhost:3000").replace(/\/+$/, "");
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/admin", "/api/"] }],
    sitemap: `${base}/sitemap.xml`,
  };
}
