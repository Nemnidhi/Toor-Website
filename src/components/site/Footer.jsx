import Image from "next/image";
import Link from "next/link";
import { ADDRESS, EMAIL, MAPS_URL, PHONE_LABEL, PHONE_TEL, WHATSAPP_URL } from "@/lib/site";

const linkClass = "inline-flex items-center text-sm font-semibold leading-5 text-slate-500 transition hover:translate-x-0.5 hover:text-[#078fa1]";

const COLUMNS = [
  {
    title: "Quick Links",
    links: [
      ["Home", "/"],
      ["About Us", "/about-us"],
      ["Spaces", "/spaces"],
      ["Plans & Pricing", "/pricing"],
      ["Gallery", "/gallery"],
      ["Contact", "/contact"],
    ],
  },
  {
    title: "Properties",
    links: [
      ["Ready to Move", "/ready-to-move"],
      ["New Commercial Buildings", "/new-commercial-building"],
      ["Retail Shops & Showrooms", "/retail-shops-showrooms"],
      ["Locations", "/locations"],
    ],
  },
  {
    title: "Workspace Types",
    links: [
      ["Private Offices", "/spaces"],
      ["Coworking Desks", "/spaces"],
      ["Meeting Rooms", "/amenities"],
      ["Virtual Office", "/plans"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-[#071225]">
      <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.55fr_0.85fr_1.05fr_0.9fr] lg:gap-10">
          <div>
            <Link className="inline-block transition hover:opacity-80" aria-label="TheOfficeOnRent home" href="/">
              <div className="relative h-16 w-48 overflow-visible">
                <Image src="/assets/logo.png" alt="TheOfficeOnRent" fill sizes="340px" className="origin-left scale-[1.75] object-contain" />
              </div>
            </Link>
            <p className="mt-2 max-w-md text-sm font-medium leading-5 text-slate-600">Commercial real estate specialists in Indore for office leasing, coworking, rentals, sales, and managed workspaces.</p>
            <div className="mt-3 flex max-w-md flex-col gap-2 text-sm font-semibold text-slate-600">
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="grid grid-cols-[28px_1fr] items-start gap-2.5 transition hover:text-[#078fa1]">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#e8f8fa] text-[#078fa1]">
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7.5-6.1 7.5-12A7.5 7.5 0 104.5 9c0 5.9 7.5 12 7.5 12z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </span>
                <span className="pt-1 leading-5">{ADDRESS}</span>
              </a>
              <a href={PHONE_TEL} className="grid grid-cols-[28px_1fr] items-center gap-2.5 transition hover:text-[#078fa1]">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#e8f8fa] text-[#078fa1]">
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </span>
                {PHONE_LABEL}
              </a>
              <a href={`mailto:${EMAIL}`} className="grid grid-cols-[28px_1fr] items-center gap-2.5 break-all transition hover:text-[#078fa1]">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#e8f8fa] text-[#078fa1]">
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                {EMAIL}
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="grid grid-cols-[28px_1fr] items-center gap-2.5 transition hover:text-[#25D366]">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-green-50 text-[#25D366]">
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.527 5.845L.057 23.492a.75.75 0 00.918.919l5.638-1.475A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.953-1.356l-.355-.211-3.676.963.98-3.585-.232-.368A9.716 9.716 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                  </svg>
                </span>
                WhatsApp Us
              </a>
            </div>
          </div>
          {COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title} className="lg:pt-2">
              <h3 className="mb-4 text-xs font-black uppercase tracking-widest text-[#078fa1]">{column.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {column.links.map(([label, href]) => (
                  <li key={label}>
                    <Link className={linkClass} href={href}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
      <div className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-4 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-slate-500 text-center sm:text-left">© {new Date().getFullYear()} TheOfficeOnRent. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
            <Link className="transition hover:text-slate-600" href="/contact">
              Contact Us
            </Link>
            <span className="h-3 w-px bg-slate-300" />
            <Link className="transition hover:text-slate-600" href="/about-us">
              About Us
            </Link>
            <span className="h-3 w-px bg-slate-300" />
            <Link className="transition hover:text-slate-600" href="/locations">
              Locations
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
