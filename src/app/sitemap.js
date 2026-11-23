import { listBuildings } from "@/lib/content";

export const dynamic = "force-dynamic";

const PAGES = ["", "spaces", "ready-to-move", "new-commercial-building", "retail-shops-showrooms", "hostels", "hotels", "plans", "pricing", "amenities", "gallery", "locations", "about-us", "contact"];

/** Every public page plus each building's own page (hidden ones left out). */
export default async function sitemap() {
  const base = (process.env.SITE_URL || "http://localhost:3000").replace(/\/+$/, "");
  const buildings = await listBuildings();
  return [
    ...PAGES.map((page) => ({ url: `${base}/${page}`, changeFrequency: "weekly", priority: page ? 0.7 : 1 })),
    ...buildings.map((b) => ({ url: `${base}/${b.category}/${b.slug}`, lastModified: b.updatedAt ? new Date(b.updatedAt) : undefined, changeFrequency: "monthly", priority: 0.6 })),
  ];
}
