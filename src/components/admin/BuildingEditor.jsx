"use client";
import { useEffect, useMemo, useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ExternalLinkIcon } from "lucide-react";
import { saveBuildingAction } from "@/app/admin/actions";
import { slugify } from "@/lib/slug";
import PhotoManager from "./PhotoManager";
import SectionsEditor from "./SectionsEditor";

const FIELDS = [
  ["floors", "Floors", "e.g. G+9 Floors"],
  ["area", "Area", "e.g. 900-1,600 sq. ft."],
  ["parking", "Parking", "e.g. 2 basement levels"],
  ["powerBackup", "Power backup", "e.g. 100% power backup"],
  ["liftAccess", "Lift access", "e.g. 2 high-speed lifts"],
  ["maintenance", "Maintenance / security", "e.g. 24x7 security, CCTV"],
];

export function useUnsavedWarning(dirty) {
  useEffect(() => {
    if (!dirty) return undefined;
    const warn = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);
}

export default function BuildingEditor({ initial, categories, isNew }) {
  const router = useRouter();
  const [form, setForm] = useState(initial);
  const [slugTouched, setSlugTouched] = useState(!isNew);
  const [saved, setSaved] = useState(JSON.stringify(initial));
  const [status, setStatus] = useState(null);
  const [pending, startTransition] = useTransition();
  const dirty = useMemo(() => JSON.stringify(form) !== saved, [form, saved]);
  useUnsavedWarning(dirty);

  const set = (patch) => setForm((current) => ({ ...current, ...patch }));
  const slug = slugTouched ? form.slug : slugify(form.name);
  const publicUrl = `/${form.category}/${slugify(slug) || "..."}`;

  function save(event) {
    event.preventDefault();
    const payload = { ...form, slug };
    setStatus(null);
    startTransition(async () => {
      const result = await saveBuildingAction(payload);
      if (!result?.ok) {
        setStatus({ error: result?.error || "Could not save" });
        return;
      }
      const next = { ...payload, id: result.id, slug: result.slug, category: result.category };
      setForm(next);
      setSaved(JSON.stringify(next));
      setSlugTouched(true);
      setStatus({ ok: result.published ? "Saved. The website shows it now." : "Saved (hidden: not on the website until you tick Show)." });
      if (isNew) router.replace(`/admin/buildings/${result.id}?created=1`);
      else router.refresh();
    });
  }

  return (
    <form onSubmit={save} className="space-y-5">
      <div className="admin-card space-y-4">
        <h2 className="text-base font-black">Basics</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="admin-label">Building name *</span>
            <input className="admin-input" value={form.name} maxLength={120} required onChange={(e) => set({ name: e.target.value })} placeholder="e.g. Apollo Premier" />
          </label>
          <label className="block">
            <span className="admin-label">Shown under</span>
            <select className="admin-input" value={form.category} onChange={(e) => set({ category: e.target.value })}>
              {Object.entries(categories).map(([key, cat]) => (
                <option key={key} value={key}>
                  {cat.plural}
                </option>
              ))}
            </select>
          </label>
          <label className="block sm:col-span-2">
            <span className="admin-label">Line under the name</span>
            <input className="admin-input" value={form.headline} maxLength={200} onChange={(e) => set({ headline: e.target.value })} placeholder="Leave empty to show the area" />
          </label>
          <label className="block sm:col-span-2">
            <span className="admin-label">Web address</span>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 sm:flex-nowrap">
              <span className="shrink-0 text-sm text-slate-500">/{form.category}/</span>
              <input
                className="admin-input"
                value={slug}
                maxLength={80}
                onChange={(e) => {
                  setSlugTouched(true);
                  set({ slug: e.target.value });
                }}
              />
            </div>
            {!isNew ? <span className="mt-1 block text-xs text-slate-500">Changing it breaks links already shared to the old address.</span> : null}
          </label>
        </div>
        <label className="flex items-center gap-2 text-sm font-bold">
          <input type="checkbox" className="h-4 w-4" checked={form.published} onChange={(e) => set({ published: e.target.checked })} />
          Show on the website
        </label>
      </div>

      <div className="admin-card space-y-4">
        <div>
          <h2 className="text-base font-black">Photos</h2>
          <p className="text-xs text-slate-500">The first photo is the cover in the list. Up to 30.</p>
        </div>
        <PhotoManager images={form.images} onChange={(images) => set({ images })} />
      </div>

      <div className="admin-card space-y-4">
        <h2 className="text-base font-black">Key facts</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {FIELDS.map(([key, label, placeholder]) => (
            <label key={key} className="block">
              <span className="admin-label">{label}</span>
              <input className="admin-input" value={form[key]} maxLength={key === "floors" || key === "area" ? 200 : 300} placeholder={placeholder} onChange={(e) => set({ [key]: e.target.value })} />
            </label>
          ))}
        </div>
        <label className="block">
          <span className="admin-label">About this building</span>
          <textarea className="admin-input min-h-40" value={form.description} maxLength={4000} onChange={(e) => set({ description: e.target.value })} placeholder="A few lines about the building. Leave an empty line to start a new paragraph." />
        </label>
      </div>

      <div className="admin-card space-y-4">
        <div>
          <h2 className="text-base font-black">More details</h2>
          <p className="text-xs text-slate-500">Boxes shown at the bottom of the building page: project details, prices, highlights.</p>
        </div>
        <SectionsEditor sections={form.sections} onChange={(sections) => set({ sections })} />
      </div>

      <div className="sticky bottom-0 z-10 -mx-4 flex flex-wrap items-center gap-3 border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur lg:-mx-8 lg:px-8">
        <button type="submit" disabled={pending} className="admin-btn-primary">
          {pending ? "Saving..." : "Save"}
        </button>
        <Link href={`/admin/buildings?category=${form.category}`} className="admin-btn">
          Back to the list
        </Link>
        {!isNew && initial.published ? (
          <a href={`/${initial.category}/${initial.slug}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-bold text-[#078fa1]">
            Open its page <ExternalLinkIcon className="h-4 w-4" />
          </a>
        ) : null}
        <span className="text-sm">
          {status?.error ? <span className="font-semibold text-red-700">{status.error}</span> : status?.ok && !dirty ? <span className="font-semibold text-emerald-700">{status.ok}</span> : dirty ? <span className="text-amber-700">Unsaved changes</span> : null}
        </span>
        <span className="ml-auto hidden text-xs text-slate-400 sm:block">Page: {publicUrl}</span>
      </div>
    </form>
  );
}
