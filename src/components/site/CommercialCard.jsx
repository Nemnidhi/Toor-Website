import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "lucide-react";

/** A new commercial building in the list (the original site's card for this category). */
export default function CommercialCard({ building }) {
  const href = `/new-commercial-building/${building.slug}`;
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-[0_18px_42px_rgba(8,24,39,0.09)] transition hover:-translate-y-1">
      <div>
        <Link className="relative block cursor-pointer transition-opacity hover:opacity-95" href={href}>
          <div className="relative overflow-hidden bg-[#f0f4f8] h-72 w-full rounded-none sm:h-80">
            {building.images[0] ? <Image src={building.images[0]} alt={`${building.name} new commercial building`} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" /> : null}
          </div>
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <h2 className="mt-1 text-2xl font-black leading-tight text-white sm:text-3xl drop-shadow-lg">{building.name}</h2>
          </div>
        </Link>
        <div className="p-5 sm:p-6">
          <div className="grid grid-cols-2 gap-3 text-sm font-black text-[#071225]">
            <div className="rounded-xl bg-slate-50 p-3">
              <div className="text-xs uppercase text-slate-500 font-bold tracking-wide">Floors</div>
              {building.floors}
            </div>
            <div className="rounded-xl bg-slate-50 p-3">
              <div className="text-xs uppercase text-slate-500 font-bold tracking-wide">Area</div>
              {building.area}
            </div>
          </div>
          <ul className="mt-4 grid gap-2">
            {[`Parking: ${building.parking}`, `Power backup: ${building.powerBackup}`, `Lift access: ${building.liftAccess}`].map((line, index) => (
              <li key={index} className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                <span className="line-clamp-2">{line}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <Link className="inline-flex items-center gap-2 text-sm font-black text-[#078fa1]" href="/contact">
              {"Check availability "}
              <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link className="inline-flex items-center gap-2 rounded-xl bg-[#071225] px-4 py-2 text-sm font-black text-white shadow-[0_8px_20px_rgba(7,18,37,0.18)] transition hover:-translate-y-0.5 hover:bg-[#0e1f3a]" href={href}>
              {"See More "}
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
