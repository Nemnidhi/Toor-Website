"use client";
/* eslint-disable @next/next/no-img-element -- admin thumbnails of uploads; no optimisation needed */
import { useRef, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon, ImagePlusIcon, StarIcon, XIcon } from "lucide-react";

const MAX = 10 * 1024 * 1024;
const TYPES = ["image/jpeg", "image/png", "image/webp"];

async function uploadPhoto(file) {
  if (!TYPES.includes(file.type)) throw new Error(`${file.name}: use a JPEG, PNG or WebP photo`);
  if (file.size > MAX) throw new Error(`${file.name}: larger than 10 MB`);
  const body = new FormData();
  body.append("file", file);
  const response = await fetch("/admin/upload", { method: "POST", headers: { "x-oor-upload": "1" }, body });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(`${file.name}: ${data.error || `upload failed (${response.status})`}`);
  return data.path;
}

/**
 * Photos of an item: upload (several at once), reorder, make cover, remove.
 * `max` = 1 for a single photo (option cards).
 */
export default function PhotoManager({ images, onChange, max = 30 }) {
  const input = useRef(null);
  const [busy, setBusy] = useState("");
  const [errors, setErrors] = useState([]);

  async function addFiles(fileList) {
    const files = Array.from(fileList || []);
    if (!files.length) return;
    const room = max === 1 ? 1 : Math.max(0, max - images.length);
    const chosen = files.slice(0, room);
    const problems = files.length > room ? [`Only ${max} photo${max === 1 ? "" : "s"} allowed; ${files.length - room} skipped`] : [];
    let next = max === 1 ? [] : [...images];
    for (const [index, file] of chosen.entries()) {
      setBusy(`Uploading ${index + 1} of ${chosen.length}...`);
      try {
        next = [...next, await uploadPhoto(file)];
        onChange(next);
      } catch (error) {
        problems.push(error.message);
      }
    }
    setBusy("");
    setErrors(problems);
    if (input.current) input.current.value = "";
  }

  const move = (from, to) => {
    if (to < 0 || to >= images.length) return;
    const next = [...images];
    const [item] = next.splice(from, 1);
    next.splice(to, 0, item);
    onChange(next);
  };

  return (
    <div className="space-y-3">
      {images.length ? (
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {images.map((src, index) => (
            <li key={`${src}-${index}`} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="relative aspect-[4/3] bg-slate-100">
                <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
                {index === 0 && max > 1 ? <span className="absolute left-2 top-2 rounded bg-[#071225] px-1.5 py-0.5 text-[10px] font-black uppercase text-white">Cover</span> : null}
              </div>
              <div className="flex items-center justify-between gap-1 p-1.5">
                {max > 1 ? (
                  <div className="flex gap-1">
                    <button type="button" className="admin-icon-btn h-7 w-7" title="Move left" aria-label="Move left" disabled={index === 0} onClick={() => move(index, index - 1)}>
                      <ArrowLeftIcon className="h-3.5 w-3.5" />
                    </button>
                    <button type="button" className="admin-icon-btn h-7 w-7" title="Move right" aria-label="Move right" disabled={index === images.length - 1} onClick={() => move(index, index + 1)}>
                      <ArrowRightIcon className="h-3.5 w-3.5" />
                    </button>
                    {index > 0 ? (
                      <button type="button" className="admin-icon-btn h-7 w-7" title="Make cover photo" aria-label="Make cover photo" onClick={() => move(index, 0)}>
                        <StarIcon className="h-3.5 w-3.5" />
                      </button>
                    ) : null}
                  </div>
                ) : (
                  <span />
                )}
                <button
                  type="button"
                  className="admin-icon-btn h-7 w-7 hover:border-red-200 hover:bg-red-50 hover:text-red-700"
                  title="Remove photo"
                  aria-label="Remove photo"
                  onClick={() => onChange(images.filter((_, i) => i !== index))}
                >
                  <XIcon className="h-3.5 w-3.5" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="rounded-xl border border-dashed border-slate-300 p-4 text-center text-sm text-slate-500">No photo yet.</p>
      )}
      <div className="flex flex-wrap items-center gap-3">
        <button type="button" className="admin-btn" disabled={Boolean(busy)} onClick={() => input.current?.click()}>
          <ImagePlusIcon className="h-4 w-4" />
          {max === 1 ? (images.length ? "Replace photo" : "Upload photo") : "Upload photos"}
        </button>
        <input ref={input} type="file" accept="image/jpeg,image/png,image/webp" multiple={max > 1} className="hidden" onChange={(event) => addFiles(event.target.files)} />
        <span className="text-xs text-slate-500">{busy || "JPEG, PNG or WebP, up to 10 MB each. Large photos are resized automatically."}</span>
      </div>
      {errors.length ? (
        <ul className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
