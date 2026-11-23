import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/auth";
import { BUILDING_CATEGORIES, getBuildingById } from "@/lib/content";
import BuildingEditor from "@/components/admin/BuildingEditor";
import Flash from "@/components/admin/Flash";

export const dynamic = "force-dynamic";
export const metadata = { title: "Edit building" };

const EMPTY = { name: "", slug: "", headline: "", floors: "", area: "", parking: "", powerBackup: "", liftAccess: "", maintenance: "", description: "", images: [], sections: [], published: true };

export default async function EditBuildingPage({ params, searchParams }) {
  await requireAdmin();
  const { id } = await params;
  const { category, created } = await searchParams;
  const isNew = id === "new";
  let initial;
  if (isNew) {
    initial = { ...EMPTY, category: BUILDING_CATEGORIES[category] ? category : "ready-to-move" };
  } else {
    const building = await getBuildingById(id);
    if (!building) notFound();
    const { updatedAt: _updatedAt, order: _order, ...rest } = building;
    initial = rest;
  }
  return (
    <div className="mx-auto max-w-5xl space-y-5">
      <div>
        <h1 className="text-2xl font-black">{isNew ? "Add a building" : initial.name}</h1>
        <p className="text-sm text-slate-500">{BUILDING_CATEGORIES[initial.category].plural}</p>
      </div>
      {created ? <Flash message="Building added." /> : null}
      <BuildingEditor key={initial.id || "new"} initial={initial} categories={BUILDING_CATEGORIES} isNew={isNew} />
    </div>
  );
}
