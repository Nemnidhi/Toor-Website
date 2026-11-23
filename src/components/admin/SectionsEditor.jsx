"use client";
import { ArrowDownIcon, ArrowUpIcon, PlusIcon, Trash2Icon, XIcon } from "lucide-react";

const TYPES = [
  { value: "list", label: "Details (label + value)" },
  { value: "price", label: "Prices (label + price)" },
  { value: "checks", label: "Checklist (ticks)" },
];

/** The boxes under "About This Building": project details, pricing, highlights and so on. */
export default function SectionsEditor({ sections, onChange }) {
  const update = (index, patch) => onChange(sections.map((s, i) => (i === index ? { ...s, ...patch } : s)));
  const updateRow = (index, rowIndex, patch) => update(index, { rows: sections[index].rows.map((r, i) => (i === rowIndex ? { ...r, ...patch } : r)) });
  const move = (from, to) => {
    if (to < 0 || to >= sections.length) return;
    const next = [...sections];
    const [item] = next.splice(from, 1);
    next.splice(to, 0, item);
    onChange(next);
  };

  return (
    <div className="space-y-4">
      {sections.map((section, index) => (
        <div key={index} className="rounded-xl border border-slate-200 bg-slate-50/60 p-4">
          <div className="mb-3 flex flex-wrap items-end gap-3">
            <label className="min-w-48 flex-1">
              <span className="admin-label">Box title</span>
              <input className="admin-input" value={section.title} maxLength={80} onChange={(e) => update(index, { title: e.target.value })} placeholder="e.g. Inventory & Pricing" />
            </label>
            <label>
              <span className="admin-label">Kind</span>
              <select className="admin-input" value={section.type} onChange={(e) => update(index, { type: e.target.value })}>
                {TYPES.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </label>
            <div className="flex gap-1">
              <button type="button" className="admin-icon-btn" title="Move box up" aria-label="Move box up" disabled={index === 0} onClick={() => move(index, index - 1)}>
                <ArrowUpIcon className="h-4 w-4" />
              </button>
              <button type="button" className="admin-icon-btn" title="Move box down" aria-label="Move box down" disabled={index === sections.length - 1} onClick={() => move(index, index + 1)}>
                <ArrowDownIcon className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="admin-icon-btn hover:border-red-200 hover:bg-red-50 hover:text-red-700"
                title="Remove this box"
                aria-label="Remove this box"
                onClick={() => {
                  if (!section.rows.some((r) => r.label || r.value) || window.confirm(`Remove the box "${section.title || "untitled"}"?`)) onChange(sections.filter((_, i) => i !== index));
                }}
              >
                <Trash2Icon className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="space-y-2">
            {section.rows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex gap-2">
                {section.type !== "checks" ? (
                  <input className="admin-input w-2/5" value={row.label} maxLength={120} placeholder={section.type === "price" ? "e.g. Offices" : "e.g. Status"} onChange={(e) => updateRow(index, rowIndex, { label: e.target.value })} />
                ) : null}
                <input
                  className="admin-input flex-1"
                  value={row.value}
                  maxLength={400}
                  placeholder={section.type === "price" ? "e.g. ₹7,500–₹8,500/sqft" : section.type === "checks" ? "e.g. Metro-facing facade" : "e.g. Ready to move"}
                  onChange={(e) => updateRow(index, rowIndex, { value: e.target.value })}
                />
                <button type="button" className="admin-icon-btn h-[38px] w-[38px] shrink-0" title="Remove line" aria-label="Remove line" onClick={() => update(index, { rows: section.rows.filter((_, i) => i !== rowIndex) })}>
                  <XIcon className="h-4 w-4" />
                </button>
              </div>
            ))}
            <button type="button" className="text-sm font-bold text-[#078fa1] hover:underline" onClick={() => update(index, { rows: [...section.rows, { label: "", value: "" }] })}>
              + Add a line
            </button>
          </div>
        </div>
      ))}
      {sections.length < 12 ? (
        <button type="button" className="admin-btn" onClick={() => onChange([...sections, { title: "", type: "list", rows: [{ label: "", value: "" }] }])}>
          <PlusIcon className="h-4 w-4" /> Add a box
        </button>
      ) : null}
    </div>
  );
}
