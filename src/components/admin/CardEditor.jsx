"use client";
import { useMemo, useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { saveOptionAction } from "@/app/admin/actions";
import PhotoManager from "./PhotoManager";
import { useUnsavedWarning } from "./BuildingEditor";

/** A card on the retail / hostel / hotel pages: photo, name, best-for line, two details, features. */
export default function CardEditor({ initial, categories, isNew }) {
  const router = useRouter();
  const [form, setForm] = useState({ ...initial, featuresText: initial.features.join("\n") });
  const [saved, setSaved] = useState(() => JSON.stringify({ ...initial, featuresText: initial.features.join("\n") }));
  const [status, setStatus] = useState(null);
  const [pending, startTransition] = useTransition();
  const dirty = useMemo(() => JSON.stringify(form) !== saved, [form, saved]);
  useUnsavedWarning(dirty);
  const set = (patch) => setForm((current) => ({ ...current, ...patch }));
  const setStat = (index, patch) => set({ stats: form.stats.map((s, i) => (i === index ? { ...s, ...patch } : s)) });

  function save(event) {
    event.preventDefault();
    const { featuresText, ...rest } = form;
    const payload = { ...rest, features: featuresText.split("\n").map((f) => f.trim()).filter(Boolean) };
    setStatus(null);
    startTransition(async () => {
      const result = await saveOptionAction(payload);
      if (!result?.ok) {
        setStatus({ error: result?.error || "Could not save" });
        return;
      }
      const next = { ...form, id: result.id, category: result.category };
      setForm(next);
      setSaved(JSON.stringify(next));
      setStatus({ ok: form.published ? "Saved. The website shows it now." : "Saved (hidden: not on the website until you tick Show)." });
      if (isNew) router.replace(`/admin/cards/${result.id}?created=1`);
      else router.refresh();
    });
  }

  return (
    <form onSubmit={save} className="space-y-5">
      <div className="admin-card space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="admin-label">Name *</span>
            <input className="admin-input" value={form.name} maxLength={120} required onChange={(e) => set({ name: e.target.value })} placeholder="e.g. High-Street Retail Shop" />
          </label>
          <label className="block">
            <span className="admin-label">Shown on</span>
            <select className="admin-input" value={form.category} onChange={(e) => set({ category: e.target.value })}>
              {Object.entries(categories).map(([key, cat]) => (
                <option key={key} value={key}>
                  {cat.label}
                </option>
              ))}
            </select>
          </label>
          <label className="block sm:col-span-2">
            <span className="admin-label">Best for</span>
            <input className="admin-input" value={form.subtitle} maxLength={240} onChange={(e) => set({ subtitle: e.target.value })} placeholder="e.g. Retail brands, clinics and customer walk-ins" />
          </label>
          <label className="block">
            <span className="admin-label">Status badge</span>
            <input className="admin-input" value={form.badge} maxLength={40} onChange={(e) => set({ badge: e.target.value })} placeholder="e.g. Active options" />
          </label>
          <label className="block">
            <span className="admin-label">Price badge</span>
            <input className="admin-input" value={form.priceLabel} maxLength={40} onChange={(e) => set({ priceLabel: e.target.value })} placeholder="e.g. Market pricing" />
          </label>
          {form.stats.map((stat, index) => (
            <div key={index} className="grid grid-cols-2 gap-2">
              <label className="block">
                <span className="admin-label">Detail {index + 1}</span>
                <input className="admin-input" value={stat.label} maxLength={40} onChange={(e) => setStat(index, { label: e.target.value })} placeholder={index ? "e.g. Best use" : "e.g. Area"} />
              </label>
              <label className="block">
                <span className="admin-label">Value</span>
                <input className="admin-input" value={stat.value} maxLength={80} onChange={(e) => setStat(index, { value: e.target.value })} placeholder={index ? "e.g. Walk-in retail" : "e.g. 250-700 sq. ft."} />
              </label>
            </div>
          ))}
          <label className="block sm:col-span-2">
            <span className="admin-label">Features (one per line, up to 8)</span>
            <textarea className="admin-input min-h-28" value={form.featuresText} onChange={(e) => set({ featuresText: e.target.value })} placeholder={"Visible frontage\nCustomer access"} />
          </label>
        </div>
        <label className="flex items-center gap-2 text-sm font-bold">
          <input type="checkbox" className="h-4 w-4" checked={form.published} onChange={(e) => set({ published: e.target.checked })} />
          Show on the website
        </label>
      </div>
      <div className="admin-card space-y-4">
        <h2 className="text-base font-black">Photo</h2>
        <PhotoManager max={1} images={form.image ? [form.image] : []} onChange={(images) => set({ image: images[0] || "" })} />
      </div>
      <div className="sticky bottom-0 z-10 -mx-4 flex flex-wrap items-center gap-3 border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur lg:-mx-8 lg:px-8">
        <button type="submit" disabled={pending} className="admin-btn-primary">
          {pending ? "Saving..." : "Save"}
        </button>
        <Link href={`/admin/cards?category=${form.category}`} className="admin-btn">
          Back to the list
        </Link>
        <span className="text-sm">
          {status?.error ? <span className="font-semibold text-red-700">{status.error}</span> : status?.ok && !dirty ? <span className="font-semibold text-emerald-700">{status.ok}</span> : dirty ? <span className="text-amber-700">Unsaved changes</span> : null}
        </span>
      </div>
    </form>
  );
}
