import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, BriefcaseBusinessIcon, CalendarDaysIcon, CarIcon, CheckIcon, CoffeeIcon, PrinterIcon, ShieldCheckIcon, WifiIcon } from "lucide-react";
import LeadForm from "@/components/site/LeadForm";
import PageShell from "@/components/site/PageShell";
import BuildingCard from "@/components/site/BuildingCard";
import { listBuildings } from "@/lib/content";

export const metadata = {
  title: "Ready-to-Move Offices in Indore | TheOfficeOnRent",
  description: "Explore ready-to-move commercial offices in Indore with practical amenities, access details, and visit support.",
};

export const dynamic = "force-dynamic";

export default async function ReadyToMovePage() {
  const buildings = await listBuildings("ready-to-move");
  return (
    <PageShell>
      <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="absolute inset-0">
          <Image src="/assets/services/private-cabin.jpg" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071225]/88 via-[#071225]/60 to-[#078fa1]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f7fbff] via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl py-8 sm:py-12">
            <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-white/92 px-4 py-2 text-xs font-black uppercase text-[#078fa1] shadow-[0_12px_24px_rgba(8,24,39,0.12)]">
              <span className="h-0.5 w-5 rounded-full bg-[#ff7a00]" />
              Ready inventory
            </div>
            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">Ready To Move Offices In Indore</h1>
            <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-white/88 sm:text-lg">Shortlist ready commercial buildings in Indore with building-level details for floors, parking, lifts, power backup, maintenance, and available area.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-11 sm:min-h-12 items-center justify-center gap-2 sm:gap-3 whitespace-nowrap rounded-xl sm:rounded-2xl px-5 sm:px-6 text-xs sm:text-sm font-bold transition bg-[#ff7a00] text-white shadow-[0_18px_35px_rgba(255,122,0,0.25)] hover:bg-[#f06f00]">
                <CalendarDaysIcon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                <span>Book a Visit</span>
              </Link>
              <a href="#ready-offices" className="inline-flex min-h-11 sm:min-h-12 items-center justify-center gap-2 sm:gap-3 whitespace-nowrap rounded-xl sm:rounded-2xl px-5 sm:px-6 text-xs sm:text-sm font-bold transition bg-white text-[#071225] shadow-[0_16px_35px_rgba(17,24,39,0.08)] hover:bg-slate-50">
                <BriefcaseBusinessIcon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                <span>View Offices</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="ready-offices" className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase text-[#078fa1]">
              <span className="h-0.5 w-6 rounded-full bg-[#ff7a00]" />
              Office options
            </div>
            <h2 className="text-3xl font-black leading-tight text-[#071225] sm:text-4xl">Ready Buildings You Can Shortlist Now</h2>
            <p className="mt-4 text-sm font-semibold leading-6 text-slate-600 sm:text-base">Compare practical building inventory by floors, parking, power backup, lift access, maintenance, and available area before scheduling a visit.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {buildings.map((building) => <BuildingCard key={building.id} building={building} />)}
          </div>
        </div>
      </section>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase text-[#078fa1]">
              <span className="h-0.5 w-6 rounded-full bg-[#ff7a00]" />
              Picture shortlist
            </div>
            <h2 className="text-3xl font-black leading-tight text-[#071225] sm:text-4xl">See The Workspace Style Before You Visit</h2>
            <p className="mt-4 text-sm font-semibold leading-6 text-slate-600 sm:text-base">A quick visual pass helps you compare premium reception areas, private offices, meeting rooms, and open work zones before booking visits.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <article className="group overflow-hidden rounded-2xl bg-white shadow-[0_16px_38px_rgba(8,24,39,0.09)]">
              <div className="relative">
                <div className="relative overflow-hidden bg-[#f0f4f8] h-72 w-full rounded-none">
                  <Image src="/assets/services/private-cabin.jpg" alt="Sahil Metropolitan at RR Business Park workspace preview" fill className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#071225]/82 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-white/72">700 - 1800 sq. ft.</p>
                  <h3 className="mt-2 text-xl font-black leading-tight text-white">Sahil Metropolitan at RR Business Park</h3>
                </div>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-2 gap-3 text-sm font-black text-[#071225]">
                  <div className="rounded-xl bg-slate-50 p-3">
                    <div className="text-xs uppercase text-slate-500">Floors</div>
                    9 floors
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3">
                    <div className="text-xs uppercase text-slate-500">Area</div>
                    700 - 1800 sq. ft.
                  </div>
                </div>
                <ul className="mt-4 grid gap-2">
                  <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                    <span>Parking: Basement and podium parking available.</span>
                  </li>
                  <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                    <span>Power backup: 24x7 power backup for common areas.</span>
                  </li>
                  <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                    <span>Lift access: High-Speed Elevators with ARD.</span>
                  </li>
                </ul>
              </div>
            </article>
            <article className="group overflow-hidden rounded-2xl bg-white shadow-[0_16px_38px_rgba(8,24,39,0.09)]">
              <div className="relative">
                <div className="relative overflow-hidden bg-[#f0f4f8] h-72 w-full rounded-none">
                  <Image src="/assets/ready-buildings/skye-corporate-park.jpg" alt="Skye Corporate Park workspace preview" fill className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#071225]/82 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-white/72">From 1,280 sq. ft.</p>
                  <h3 className="mt-2 text-xl font-black leading-tight text-white">Skye Corporate Park</h3>
                </div>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-2 gap-3 text-sm font-black text-[#071225]">
                  <div className="rounded-xl bg-slate-50 p-3">
                    <div className="text-xs uppercase text-slate-500">Floors</div>
                    17 floors
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3">
                    <div className="text-xs uppercase text-slate-500">Area</div>
                    From 1,280 sq. ft.
                  </div>
                </div>
                <ul className="mt-4 grid gap-2">
                  <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                    <span>Parking: Multi-level car parking across ground floor and 3 basements with gated entry and CCTV.</span>
                  </li>
                  <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                    <span>Power backup: Round-the-clock power backup for common facilities.</span>
                  </li>
                  <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                    <span>Lift access: Multiple high-speed lifts.</span>
                  </li>
                </ul>
              </div>
            </article>
            <article className="group overflow-hidden rounded-2xl bg-white shadow-[0_16px_38px_rgba(8,24,39,0.09)]">
              <div className="relative">
                <div className="relative overflow-hidden bg-[#f0f4f8] h-72 w-full rounded-none">
                  <Image src="/assets/ready-buildings/bpk-titanium.jpg" alt="BPK Titanium workspace preview" fill className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#071225]/82 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-white/72">26,800-56,700 sq. ft.</p>
                  <h3 className="mt-2 text-xl font-black leading-tight text-white">BPK Titanium</h3>
                </div>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-2 gap-3 text-sm font-black text-[#071225]">
                  <div className="rounded-xl bg-slate-50 p-3">
                    <div className="text-xs uppercase text-slate-500">Floors</div>
                    13 floors
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3">
                    <div className="text-xs uppercase text-slate-500">Area</div>
                    26,800-56,700 sq. ft.
                  </div>
                </div>
                <ul className="mt-4 grid gap-2">
                  <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                    <span>Parking: Secure 4-wheeler, 2-wheeler, and visitor parking with boom barriers.</span>
                  </li>
                  <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                    <span>Power backup: 100% power backup.</span>
                  </li>
                  <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                    <span>Lift access: Lifts available for all floors.</span>
                  </li>
                </ul>
              </div>
            </article>
            <article className="group overflow-hidden rounded-2xl bg-white shadow-[0_16px_38px_rgba(8,24,39,0.09)]">
              <div className="relative">
                <div className="relative overflow-hidden bg-[#f0f4f8] h-72 w-full rounded-none">
                  <Image src="/assets/ready-buildings/cbre-building-temp.jpg" alt="Clifton Park workspace preview" fill className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#071225]/82 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-white/72">240-1,640 sq. ft. per unit</p>
                  <h3 className="mt-2 text-xl font-black leading-tight text-white">Clifton Park</h3>
                </div>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-2 gap-3 text-sm font-black text-[#071225]">
                  <div className="rounded-xl bg-slate-50 p-3">
                    <div className="text-xs uppercase text-slate-500">Floors</div>
                    13 floors
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3">
                    <div className="text-xs uppercase text-slate-500">Area</div>
                    240-1,640 sq. ft. per unit
                  </div>
                </div>
                <ul className="mt-4 grid gap-2">
                  <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                    <span>Parking: Basement and ground floor parking, separate for owners and visitors.</span>
                  </li>
                  <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                    <span>Power backup: 24x7 power backup.</span>
                  </li>
                  <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                    <span>Lift access: High-speed elevators.</span>
                  </li>
                </ul>
              </div>
            </article>
            <article className="group overflow-hidden rounded-2xl bg-white shadow-[0_16px_38px_rgba(8,24,39,0.09)]">
              <div className="relative">
                <div className="relative overflow-hidden bg-[#f0f4f8] h-72 w-full rounded-none">
                  <Image src="/assets/ready-buildings/princess-business-sky.jpg" alt="Princess Business Sky workspace preview" fill className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#071225]/82 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-white/72">From 1,500 sq. ft.</p>
                  <h3 className="mt-2 text-xl font-black leading-tight text-white">Princess Business Sky</h3>
                </div>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-2 gap-3 text-sm font-black text-[#071225]">
                  <div className="rounded-xl bg-slate-50 p-3">
                    <div className="text-xs uppercase text-slate-500">Floors</div>
                    7 floors
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3">
                    <div className="text-xs uppercase text-slate-500">Area</div>
                    From 1,500 sq. ft.
                  </div>
                </div>
                <ul className="mt-4 grid gap-2">
                  <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                    <span>Parking: Ample multi-level parking for tenants and visitors.</span>
                  </li>
                  <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                    <span>Power backup: 50% office/showroom backup and 100% common-space backup.</span>
                  </li>
                  <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                    <span>Lift access: 6 high-speed automatic elevators with 17-20 passenger capacity.</span>
                  </li>
                </ul>
              </div>
            </article>
            <article className="group overflow-hidden rounded-2xl bg-white shadow-[0_16px_38px_rgba(8,24,39,0.09)]">
              <div className="relative">
                <div className="relative overflow-hidden bg-[#f0f4f8] h-72 w-full rounded-none">
                  <Image src="/assets/ready-buildings/satguru-parinay.jpg" alt="Satguru Parinay workspace preview" fill className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#071225]/82 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-white/72">1,100-3,300 sq. ft.</p>
                  <h3 className="mt-2 text-xl font-black leading-tight text-white">Satguru Parinay</h3>
                </div>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-2 gap-3 text-sm font-black text-[#071225]">
                  <div className="rounded-xl bg-slate-50 p-3">
                    <div className="text-xs uppercase text-slate-500">Floors</div>
                    Multiple office floors
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3">
                    <div className="text-xs uppercase text-slate-500">Area</div>
                    1,100-3,300 sq. ft.
                  </div>
                </div>
                <ul className="mt-4 grid gap-2">
                  <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                    <span>Parking: More than 250 car parking spaces with wheelchair-accessible parking.</span>
                  </li>
                  <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                    <span>Power backup: Full power backup available.</span>
                  </li>
                  <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                    <span>Lift access: 3 automatic lifts.</span>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase text-[#078fa1]">
              <span className="h-0.5 w-6 rounded-full bg-[#ff7a00]" />
              Included essentials
            </div>
            <h2 className="text-3xl font-black leading-tight text-[#071225] sm:text-4xl">Everything Needed To Start Work From Day One</h2>
            <p className="mt-4 text-sm font-semibold leading-6 text-slate-600 sm:text-base">The shortlist focuses on operational basics first: access, furniture, connectivity, support, meeting space, and a professional address.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl bg-white p-5 shadow-[0_14px_34px_rgba(8,24,39,0.08)]">
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#e8f8fa] text-[#078fa1]">
                <WifiIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-black text-[#071225]">Internet Ready</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">Reliable connectivity for calls, dashboards, and daily operations.</p>
            </article>
            <article className="rounded-2xl bg-white p-5 shadow-[0_14px_34px_rgba(8,24,39,0.08)]">
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#e8f8fa] text-[#078fa1]">
                <ShieldCheckIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-black text-[#071225]">Secure Access</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">Professional entry, visitor flow, and managed workspace support.</p>
            </article>
            <article className="rounded-2xl bg-white p-5 shadow-[0_14px_34px_rgba(8,24,39,0.08)]">
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#e8f8fa] text-[#078fa1]">
                <CoffeeIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-black text-[#071225]">Pantry Support</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">Tea, coffee, water, and everyday break-area essentials.</p>
            </article>
            <article className="rounded-2xl bg-white p-5 shadow-[0_14px_34px_rgba(8,24,39,0.08)]">
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#e8f8fa] text-[#078fa1]">
                <PrinterIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-black text-[#071225]">Office Utilities</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">Printing, common services, housekeeping, and maintenance support.</p>
            </article>
            <article className="rounded-2xl bg-white p-5 shadow-[0_14px_34px_rgba(8,24,39,0.08)]">
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#e8f8fa] text-[#078fa1]">
                <CalendarDaysIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-black text-[#071225]">Meeting Rooms</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">Book discussion rooms for interviews, reviews, and client meetings.</p>
            </article>
            <article className="rounded-2xl bg-white p-5 shadow-[0_14px_34px_rgba(8,24,39,0.08)]">
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#e8f8fa] text-[#078fa1]">
                <CarIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-black text-[#071225]">Easy Visits</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">Guided tours and practical location checks before final selection.</p>
            </article>
          </div>
        </div>
      </section>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-3xl bg-[#071225] p-6 text-white shadow-[0_20px_55px_rgba(8,24,39,0.16)] sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase text-[#078fa1]">
              <span className="h-0.5 w-6 rounded-full bg-[#ff7a00]" />
              Move-in support
            </div>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">From Requirement To Handover Without Extra Guesswork</h2>
            <p className="mt-4 max-w-xl text-sm font-semibold leading-6 text-white/78">You get guided shortlisting, visit scheduling, pricing clarity, and support for the details that matter before your team moves in.</p>
          </div>
          <div className="grid gap-3">
            <div className="flex gap-4 rounded-2xl bg-white/8 p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ff7a00] text-sm font-black">1</span>
              <p className="text-sm font-semibold leading-6 text-white/86">Share preferred location, team size, budget, and move-in date.</p>
            </div>
            <div className="flex gap-4 rounded-2xl bg-white/8 p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ff7a00] text-sm font-black">2</span>
              <p className="text-sm font-semibold leading-6 text-white/86">Get a shortlist of ready offices with seat count, pricing, and availability.</p>
            </div>
            <div className="flex gap-4 rounded-2xl bg-white/8 p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ff7a00] text-sm font-black">3</span>
              <p className="text-sm font-semibold leading-6 text-white/86">Visit the best-fit spaces and compare layout, access, and amenities.</p>
            </div>
            <div className="flex gap-4 rounded-2xl bg-white/8 p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ff7a00] text-sm font-black">4</span>
              <p className="text-sm font-semibold leading-6 text-white/86">Finalize terms, documentation, handover, and workstation setup.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase text-[#078fa1]">
              <span className="h-0.5 w-6 rounded-full bg-[#ff7a00]" />
              Common questions
            </div>
            <div className="grid gap-4">
              <article className="rounded-2xl bg-white p-5 shadow-[0_14px_34px_rgba(8,24,39,0.08)]">
                <h3 className="text-lg font-black text-[#071225]">Can we move in immediately?</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">Many options are ready for quick occupation. Final timing depends on seat count, documents, and any layout changes needed.</p>
              </article>
              <article className="rounded-2xl bg-white p-5 shadow-[0_14px_34px_rgba(8,24,39,0.08)]">
                <h3 className="text-lg font-black text-[#071225]">Are furnished offices available?</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">Yes. You can shortlist furnished, semi-furnished, cabin-based, and open-seat offices based on your requirement.</p>
              </article>
              <article className="rounded-2xl bg-white p-5 shadow-[0_14px_34px_rgba(8,24,39,0.08)]">
                <h3 className="text-lg font-black text-[#071225]">Can we scale seats later?</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">Most ready office options are chosen with expansion in mind, so the team can suggest spaces that leave room to grow.</p>
              </article>
            </div>
          </div>
          <div className="rounded-3xl bg-[#078fa1] p-5 text-white shadow-[0_20px_55px_rgba(8,24,39,0.16)] sm:p-6">
            <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase text-[#078fa1]">
              <span className="h-0.5 w-6 rounded-full bg-[#ff7a00]" />
              Share your requirement
            </div>
            <h2 className="text-3xl font-black leading-tight">Get Ready Office Options</h2>
            <p className="mt-3 text-sm font-semibold leading-6 text-white/86">Tell us the team size, preferred area, budget, and timeline. The team will call back with matching spaces and visit slots.</p>
            <div className="mt-5">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
