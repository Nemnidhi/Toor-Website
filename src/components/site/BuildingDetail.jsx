import Image from "next/image";
import Link from "next/link";
import { CalendarDaysIcon, CarIcon, CheckIcon, MapPinIcon, PhoneIcon, TrendingUpIcon, ZapIcon } from "lucide-react";
import Breadcrumbs from "./Breadcrumbs";
import ImageCarousel from "./ImageCarousel";
import { PHONE_TEL } from "@/lib/site";
import { BUILDING_CATEGORIES } from "@/lib/content";

const FACTS = [
  ["Floors", "floors"],
  ["Area", "area"],
  ["Parking", "parking"],
  ["Power Backup", "powerBackup"],
  ["Lift Access", "liftAccess"],
  ["Maintenance", "maintenance"],
];
const SPEC_LINES = [
  ["Parking", "parking", CarIcon],
  ["Power Backup", "powerBackup", ZapIcon],
  ["Lift Access", "liftAccess", TrendingUpIcon],
  ["Maintenance", "maintenance", MapPinIcon],
];

function Section({ section }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-[0_14px_34px_rgba(8,24,39,0.08)]">
      <h3 className="text-base font-black text-[#071225] mb-3 border-b border-slate-100 pb-2">{section.title}</h3>
      <ul className="space-y-2">
        {section.rows.map((row, index) =>
          section.type === "checks" ? (
            <li key={index} className="flex items-start gap-2 text-sm font-semibold text-slate-600">
              <CheckIcon className="h-4 w-4 mt-0.5 shrink-0 text-[#078fa1]" aria-hidden="true" />
              <span>{row.value}</span>
            </li>
          ) : (
            <li key={index} className="flex flex-col gap-0.5 text-sm">
              <span className="font-black text-slate-800">{row.label}</span>
              <span className={`font-semibold ${section.type === "price" ? "text-[#078fa1]" : "text-slate-600"}`}>{row.value}</span>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}

/** A building's own page (both categories share it, as on the original site). */
export default function BuildingDetail({ building }) {
  const category = BUILDING_CATEGORIES[building.category];
  const readyToMove = building.category === "ready-to-move";
  const specLabel = readyToMove ? "text-xs uppercase text-[#078fa1] font-bold tracking-wide mb-1" : "text-xs uppercase text-slate-500 mb-1";
  const single = !readyToMove && building.images.length === 1;
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: category.crumb, href: `/${building.category}` },
          { label: building.name, href: "#" },
        ]}
      />
      <section className="px-4 pt-6 pb-0 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[60fr_40fr] lg:gap-12 lg:items-start">
            {single ? (
              <div className="overflow-hidden rounded-3xl bg-[#0c1a2e] shadow-[0_24px_64px_rgba(8,24,39,0.22)]">
                <Image src={building.images[0]} alt={`${building.name} commercial building`} width={1200} height={800} priority sizes="(min-width: 1024px) 58vw, 100vw" className="w-full block" style={{ maxHeight: "480px", objectFit: "cover", objectPosition: "center" }} />
              </div>
            ) : (
              <ImageCarousel name={building.name} images={building.images} />
            )}
            <div className="flex flex-col gap-6">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e8f8fa] px-3 py-1 text-xs font-black uppercase tracking-wider text-[#078fa1] mb-3">● {category.badge}</span>
                <h1 className="text-3xl font-black leading-tight text-[#071225] sm:text-4xl">{building.name}</h1>
                {building.headline ? <p className="mt-2 text-base font-bold text-[#078fa1]">{building.headline}</p> : null}
              </div>
              <div className="grid grid-cols-2 gap-3">
                {FACTS.filter(([, key]) => building[key]).map(([label, key]) => (
                  <div key={key} className="rounded-2xl bg-white p-4 shadow-[0_8px_24px_rgba(8,24,39,0.07)] border border-slate-100/80">
                    <div className="text-[10px] font-black uppercase tracking-widest text-[#078fa1] mb-1">{label}</div>
                    <div className="text-sm font-bold text-[#071225] leading-5">{building[key]}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3 pt-1">
                <Link href="/contact" className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#ff7a00] py-4 text-sm font-black text-white shadow-[0_14px_32px_rgba(255,122,0,0.32)] transition hover:-translate-y-0.5 hover:bg-[#f06f00] hover:shadow-[0_18px_40px_rgba(255,122,0,0.38)]">
                  <CalendarDaysIcon className="h-5 w-5" aria-hidden="true" />
                  Book a Site Visit
                </Link>
                <a href={PHONE_TEL} className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-slate-200 bg-white py-3.5 text-sm font-black text-[#071225] shadow-[0_4px_16px_rgba(8,24,39,0.07)] transition hover:-translate-y-0.5 hover:border-[#078fa1]/40">
                  <PhoneIcon className="h-5 w-5 text-[#078fa1]" aria-hidden="true" />
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-8">
            {building.description ? (
              <div className="rounded-2xl bg-white p-6 shadow-[0_14px_34px_rgba(8,24,39,0.08)]">
                <h2 className="text-xl font-black text-[#071225] mb-3">About This Building</h2>
                {building.description.split(/\n{2,}/).map((paragraph, index) => (
                  <p key={index} className={`text-base font-semibold leading-7 text-slate-600 ${index ? "mt-4" : ""}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : null}
            <div className="rounded-2xl bg-white p-6 shadow-[0_14px_34px_rgba(8,24,39,0.08)]">
              <h2 className="text-xl font-black text-[#071225] mb-4">Building Specifications</h2>
              <div className="grid grid-cols-2 gap-3 text-sm font-black text-[#071225] mb-4">
                <div className="rounded-xl bg-slate-50 p-3">
                  <div className={specLabel}>Floors</div>
                  {building.floors}
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <div className={specLabel}>Area</div>
                  {building.area}
                </div>
              </div>
              <ul className="grid gap-3">
                {SPEC_LINES.filter(([, key]) => building[key]).map(([label, key, Icon]) => (
                  <li key={key} className="flex gap-3 text-sm font-semibold leading-5 text-slate-600">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e8f8fa] text-[#078fa1]">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="flex-1 pt-1.5">
                      {label}: {building[key]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {building.sections.length ? (
              <div className="grid gap-5 sm:grid-cols-2">
                {building.sections.map((section, index) => (
                  <Section key={index} section={section} />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
