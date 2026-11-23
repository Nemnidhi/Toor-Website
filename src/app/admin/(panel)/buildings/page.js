import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLinkIcon, PlusIcon } from "lucide-react";
import { requireAdmin } from "@/lib/auth";
import { BUILDING_CATEGORIES, listBuildings } from "@/lib/content";
import ItemControls from "@/components/admin/ItemControls";
import Flash from "@/components/admin/Flash";

export const dynamic = "force-dynamic";
export const metadata = { title: "Buildings" };

export default async function BuildingsPage({ searchParams }) {
  await requireAdmin();
  const { category = "ready-to-move", msg } = await searchParams;
  const cat = BUILDING_CATEGORIES[category];
  if (!cat) notFound();
  const buildings = await listBuildings(category, { includeHidden: true });
  const back = `/admin/buildings?category=${category}`;
  return (
    <div className="mx-auto max-w-6xl space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-black">{cat.plural}</h1>
          <p className="text-sm text-slate-500">
            Shown on <a href={`/${category}`} target="_blank" rel="noreferrer" className="font-bold text-[#078fa1] underline">/{category}</a> in this order. Each has its own page.
          </p>
        </div>
        <Link href={`/admin/buildings/new?category=${category}`} className="admin-btn-primary">
          <PlusIcon className="h-4 w-4" /> Add a building
        </Link>
      </div>
      <Flash message={msg} />
      <div className="admin-card p-0">
        {buildings.length ? (
          <ul className="divide-y divide-slate-100">
            {buildings.map((building, index) => (
              <li key={building.id} className={`flex flex-wrap items-center gap-4 px-4 py-3 ${building.published ? "" : "bg-amber-50/50"}`}>
                <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg bg-slate-100">
                  {building.images[0] ? <Image src={building.images[0]} alt="" fill sizes="80px" className="object-cover" /> : null}
                </div>
                <div className="min-w-0 flex-1">
                  <Link href={`/admin/buildings/${building.id}`} className="font-black text-slate-900 hover:text-[#078fa1]">
                    {building.name}
                  </Link>
                  {!building.published ? <span className="ml-2 rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-black uppercase text-amber-800">Hidden</span> : null}
                  <div className="truncate text-xs text-slate-500">
                    {[building.floors, building.area, `${building.images.length} photo${building.images.length === 1 ? "" : "s"}`].filter(Boolean).join(" · ")}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Link href={`/admin/buildings/${building.id}`} className="admin-btn">
                    Edit
                  </Link>
                  {building.published ? (
                    <a href={`/${category}/${building.slug}`} target="_blank" rel="noreferrer" className="admin-icon-btn" title="Open its page" aria-label="Open its page">
                      <ExternalLinkIcon className="h-4 w-4" />
                    </a>
                  ) : null}
                  <ItemControls kind="buildings" item={building} back={back} first={index === 0} last={index === buildings.length - 1} />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="p-6 text-sm text-slate-500">No buildings yet.</p>
        )}
      </div>
    </div>
  );
}
