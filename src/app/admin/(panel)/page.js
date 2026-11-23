import Link from "next/link";
import { requireAdmin } from "@/lib/auth";
import { BUILDING_CATEGORIES, OPTION_CATEGORIES, readContent, recentChanges } from "@/lib/content";
import { listEnquiries } from "@/lib/leads";

export const dynamic = "force-dynamic";
export const metadata = { title: "Overview" };

const ACTIONS = {
  "building.save": "saved building",
  "option.save": "saved card",
  "buildings.delete": "deleted building",
  "options.delete": "deleted card",
  "buildings.show": "showed building",
  "buildings.hide": "hid building",
  "options.show": "showed card",
  "options.hide": "hid card",
  "buildings.move": "moved building",
  "options.move": "moved card",
};

const when = (iso) => new Date(iso).toLocaleString("en-IN", { timeZone: "Asia/Kolkata", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });

export default async function AdminHome() {
  await requireAdmin();
  const [{ buildings, options }, changes, enquiries] = await Promise.all([readContent(), recentChanges(12), listEnquiries({ sentLimit: 1 })]);
  const tiles = [
    ...Object.entries(BUILDING_CATEGORIES).map(([key, cat]) => {
      const list = buildings.filter((b) => b.category === key);
      return { href: `/admin/buildings?category=${key}`, label: cat.plural, shown: list.filter((b) => b.published).length, hidden: list.filter((b) => !b.published).length };
    }),
    ...Object.entries(OPTION_CATEGORIES).map(([key, cat]) => {
      const list = options.filter((o) => o.category === key);
      return { href: `/admin/cards?category=${key}`, label: cat.label, shown: list.filter((o) => o.published).length, hidden: list.filter((o) => !o.published).length };
    }),
  ];
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div>
        <h1 className="text-2xl font-black">Overview</h1>
        <p className="text-sm text-slate-500">Changes show on the website as soon as you save. Hidden items stay here but are not on the site.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {tiles.map((tile) => (
          <Link key={tile.href} href={tile.href} className="admin-card transition hover:border-[#078fa1]/50 hover:shadow-md">
            <div className="text-sm font-bold text-slate-500">{tile.label}</div>
            <div className="mt-1 text-3xl font-black">{tile.shown}</div>
            <div className="text-xs text-slate-500">on the site{tile.hidden ? ` · ${tile.hidden} hidden` : ""}</div>
          </Link>
        ))}
        <Link href="/admin/enquiries" className="admin-card transition hover:border-[#078fa1]/50 hover:shadow-md">
          <div className="text-sm font-bold text-slate-500">Website enquiries</div>
          <div className="mt-1 text-3xl font-black">{enquiries.sentTotal}</div>
          <div className={`text-xs ${enquiries.pending.length ? "font-bold text-amber-700" : "text-slate-500"}`}>
            sent to the CRM{enquiries.pending.length ? ` · ${enquiries.pending.length} waiting to send` : ""}
          </div>
        </Link>
      </div>
      <div className="admin-card">
        <h2 className="mb-3 text-base font-black">Recent changes</h2>
        {changes.length ? (
          <ul className="divide-y divide-slate-100 text-sm">
            {changes.map((change, index) => (
              <li key={index} className="flex flex-wrap justify-between gap-2 py-2">
                <span>
                  <span className="font-bold">{change.by}</span> {ACTIONS[change.action] || change.action}
                  {change.name ? <span className="font-semibold text-slate-700"> {change.name}</span> : null}
                  {change.created ? <span className="ml-1 rounded bg-emerald-50 px-1.5 text-xs font-bold text-emerald-700">new</span> : null}
                </span>
                <span className="text-xs text-slate-400">{when(change.at)}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-slate-500">Nothing changed yet.</p>
        )}
      </div>
    </div>
  );
}
