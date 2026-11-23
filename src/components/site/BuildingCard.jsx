import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "lucide-react";
import PhotoIcon from "./PhotoIcon";

/** A ready-to-move building in the list: cover photo, photo count, floors / area and three facts. */
export default function BuildingCard({ building }) {
  const count = building.images.length;
  const href = `/ready-to-move/${building.slug}`;
  return (
    <div className="group block overflow-hidden rounded-2xl bg-white shadow-[0_18px_42px_rgba(8,24,39,0.09)] transition hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(8,24,39,0.14)]">
      <Link href={href} className="relative block cursor-pointer transition-opacity hover:opacity-95">
        <div className="relative h-64 w-full overflow-hidden bg-[#f0f4f8] sm:h-72">
          {count ? <Image src={building.images[0]} alt={building.name} fill className="object-cover transition-opacity duration-300" sizes="(min-width: 1024px) 44vw, 100vw" quality={90} /> : null}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#071225]/86 via-[#071225]/16 to-transparent" />
        {count > 1 ? (
          <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
            <PhotoIcon />
            {count} Photos
          </span>
        ) : null}
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <h2 className="text-2xl font-black leading-tight text-white sm:text-3xl drop-shadow-lg">{building.name}</h2>
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
        <div className="mt-5 flex items-center gap-4">
          <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-black text-[#078fa1]">
            Check availability
            <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
          </Link>
          <Link href={href} className="inline-flex items-center gap-1.5 rounded-lg bg-[#071225] px-4 py-2 text-sm font-black text-white shadow-[0_8px_20px_rgba(7,18,37,0.18)] transition group-hover:bg-[#0a1d3a]">
            See More
            <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
