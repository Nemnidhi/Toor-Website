import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PlusIcon } from "lucide-react";
import { requireAdmin } from "@/lib/auth";
import { listOptions, OPTION_CATEGORIES } from "@/lib/content";
import ItemControls from "@/components/admin/ItemControls";
import Flash from "@/components/admin/Flash";

export const dynamic = "force-dynamic";
export const metadata = { title: "Property cards" };

export default async function CardsPage({ searchParams }) {
  await requireAdmin();
  const { category = "retail-shops-showrooms", msg } = await searchParams;
  const cat = OPTION_CATEGORIES[category];
  if (!cat) notFound();
  const cards = await listOptions(category, { includeHidden: true });
  const back = `/admin/cards?category=${category}`;
  return (
    <div className="mx-auto max-w-6xl space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-black">{cat.label}</h1>
          <p className="text-sm text-slate-500">
            The cards on <a href={`/${category}`} target="_blank" rel="noreferrer" className="font-bold text-[#078fa1] underline">/{category}</a>, in this order.
          </p>
        </div>
        <Link href={`/admin/cards/new?category=${category}`} className="admin-btn-primary">
          <PlusIcon className="h-4 w-4" /> Add a card
        </Link>
      </div>
      <Flash message={msg} />
      <div className="admin-card p-0">
        {cards.length ? (
          <ul className="divide-y divide-slate-100">
            {cards.map((card, index) => (
              <li key={card.id} className={`flex flex-wrap items-center gap-4 px-4 py-3 ${card.published ? "" : "bg-amber-50/50"}`}>
                <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg bg-slate-100">
                  {card.image ? <Image src={card.image} alt="" fill sizes="80px" className="object-cover" /> : null}
                </div>
                <div className="min-w-0 flex-1">
                  <Link href={`/admin/cards/${card.id}`} className="font-black text-slate-900 hover:text-[#078fa1]">
                    {card.name}
                  </Link>
                  {!card.published ? <span className="ml-2 rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-black uppercase text-amber-800">Hidden</span> : null}
                  <div className="truncate text-xs text-slate-500">{[card.subtitle, ...card.stats.map((s) => s.value)].filter(Boolean).join(" · ")}</div>
                </div>
                <div className="flex items-center gap-2">
                  <Link href={`/admin/cards/${card.id}`} className="admin-btn">
                    Edit
                  </Link>
                  <ItemControls kind="options" item={card} back={back} first={index === 0} last={index === cards.length - 1} />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="p-6 text-sm text-slate-500">No cards yet.</p>
        )}
      </div>
    </div>
  );
}
