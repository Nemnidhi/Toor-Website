import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/auth";
import { getOptionById, OPTION_CATEGORIES } from "@/lib/content";
import CardEditor from "@/components/admin/CardEditor";
import Flash from "@/components/admin/Flash";

export const dynamic = "force-dynamic";
export const metadata = { title: "Edit card" };

const EMPTY = { name: "", subtitle: "", badge: "Active options", priceLabel: "Market pricing", image: "", stats: [{ label: "Area", value: "" }, { label: "Best use", value: "" }], features: [], published: true };

export default async function EditCardPage({ params, searchParams }) {
  await requireAdmin();
  const { id } = await params;
  const { category, created } = await searchParams;
  const isNew = id === "new";
  let initial;
  if (isNew) {
    initial = { ...EMPTY, category: OPTION_CATEGORIES[category] ? category : "retail-shops-showrooms" };
  } else {
    const card = await getOptionById(id);
    if (!card) notFound();
    const { updatedAt: _updatedAt, order: _order, ...rest } = card;
    initial = rest;
  }
  return (
    <div className="mx-auto max-w-4xl space-y-5">
      <div>
        <h1 className="text-2xl font-black">{isNew ? "Add a card" : initial.name}</h1>
        <p className="text-sm text-slate-500">{OPTION_CATEGORIES[initial.category].label}</p>
      </div>
      {created ? <Flash message="Card added." /> : null}
      <CardEditor key={initial.id || "new"} initial={initial} categories={OPTION_CATEGORIES} isNew={isNew} />
    </div>
  );
}
