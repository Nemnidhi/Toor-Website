import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, BadgeIndianRupeeIcon, BriefcaseBusinessIcon, Building2Icon, CalendarDaysIcon, CheckIcon, MapPinIcon, ZapIcon } from "lucide-react";
import LeadForm from "@/components/site/LeadForm";
import PageShell from "@/components/site/PageShell";
import CommercialCard from "@/components/site/CommercialCard";
import { listBuildings } from "@/lib/content";

export const metadata = {
  title: "New Commercial Buildings in Indore | TheOfficeOnRent",
  description: "Explore new commercial buildings in Indore for offices, retail spaces, showrooms, and business investments.",
};

export const dynamic = "force-dynamic";

export default async function NewCommercialBuildingPage() {
  const buildings = await listBuildings("new-commercial-building");
  return (
    <PageShell>
      <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="absolute inset-0">
          <Image src="/assets/hero/modern-reception.jpg" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071225]/88 via-[#071225]/60 to-[#078fa1]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f7fbff] via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl py-8 sm:py-12">
            <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-white/92 px-4 py-2 text-xs font-black uppercase text-[#078fa1] shadow-[0_12px_24px_rgba(8,24,39,0.12)]">
              <span className="h-0.5 w-5 rounded-full bg-[#ff7a00]" />
              Commercial buildings
            </div>
            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">New Commercial Buildings In Indore</h1>
            <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-white/88 sm:text-lg">Compare modern buildings by floor size, access, frontage, utilities, and expansion potential before planning a visit.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-11 sm:min-h-12 items-center justify-center gap-2 sm:gap-3 whitespace-nowrap rounded-xl sm:rounded-2xl px-5 sm:px-6 text-xs sm:text-sm font-bold transition bg-[#ff7a00] text-white shadow-[0_18px_35px_rgba(255,122,0,0.25)] hover:bg-[#f06f00]">
                <CalendarDaysIcon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                <span>Book a Visit</span>
              </Link>
              <a href="#new-offices" className="inline-flex min-h-11 sm:min-h-12 items-center justify-center gap-2 sm:gap-3 whitespace-nowrap rounded-xl sm:rounded-2xl px-5 sm:px-6 text-xs sm:text-sm font-bold transition bg-white text-[#071225] shadow-[0_16px_35px_rgba(17,24,39,0.08)] hover:bg-slate-50">
                <BriefcaseBusinessIcon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                <span>View Buildings</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="new-offices" className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase text-[#078fa1]">
              <span className="h-0.5 w-6 rounded-full bg-[#ff7a00]" />
              Building options
            </div>
            <h2 className="text-3xl font-black leading-tight text-[#071225] sm:text-4xl">Commercial Buildings You Can Shortlist</h2>
            <p className="mt-4 text-sm font-semibold leading-6 text-slate-600 sm:text-base">The team filters options around your business plan, site condition, operational needs, and budget before scheduling visits.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {buildings.map((building) => <CommercialCard key={building.id} building={building} />)}
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
            <h2 className="text-3xl font-black leading-tight text-[#071225] sm:text-4xl">Everything Needed To Evaluate A Building</h2>
            <p className="mt-4 text-sm font-semibold leading-6 text-slate-600 sm:text-base">The shortlist focuses on operational basics first: access, furniture, connectivity, support, meeting space, and a professional address.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl bg-white p-5 shadow-[0_14px_34px_rgba(8,24,39,0.08)]">
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#e8f8fa] text-[#078fa1]">
                <Building2Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-black text-[#071225]">Modern Infrastructure</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">Review common areas, lift access, utilities, and building-level readiness.</p>
            </article>
            <article className="rounded-2xl bg-white p-5 shadow-[0_14px_34px_rgba(8,24,39,0.08)]">
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#e8f8fa] text-[#078fa1]">
                <MapPinIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-black text-[#071225]">Location Fit</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">Compare access, visibility, nearby demand, and team commute convenience.</p>
            </article>
            <article className="rounded-2xl bg-white p-5 shadow-[0_14px_34px_rgba(8,24,39,0.08)]">
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#e8f8fa] text-[#078fa1]">
                <ZapIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-black text-[#071225]">Power And Utilities</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">Check utility readiness before committing to a site visit.</p>
            </article>
            <article className="rounded-2xl bg-white p-5 shadow-[0_14px_34px_rgba(8,24,39,0.08)]">
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#e8f8fa] text-[#078fa1]">
                <BadgeIndianRupeeIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-black text-[#071225]">Commercial Terms</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">Compare rent, deposits, handover timelines, and fit-out expectations.</p>
            </article>
          </div>
        </div>
      </section>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-3xl bg-[#071225] p-6 text-white shadow-[0_20px_55px_rgba(8,24,39,0.16)] sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase text-[#078fa1]">
              <span className="h-0.5 w-6 rounded-full bg-[#ff7a00]" />
              Shortlisting process
            </div>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">Find The Right Building Without Losing Weeks</h2>
            <p className="mt-4 max-w-xl text-sm font-semibold leading-6 text-white/78">You get guided shortlisting, visit scheduling, pricing clarity, and support for the details that matter before your team moves in.</p>
          </div>
          <div className="grid gap-3">
            <div className="flex gap-4 rounded-2xl bg-white/8 p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ff7a00] text-sm font-black">1</span>
              <p className="text-sm font-semibold leading-6 text-white/86">Define your business use, required size, budget, and preferred commercial area.</p>
            </div>
            <div className="flex gap-4 rounded-2xl bg-white/8 p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ff7a00] text-sm font-black">2</span>
              <p className="text-sm font-semibold leading-6 text-white/86">Compare building options by floor plate, access, infrastructure, and lease terms.</p>
            </div>
            <div className="flex gap-4 rounded-2xl bg-white/8 p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ff7a00] text-sm font-black">3</span>
              <p className="text-sm font-semibold leading-6 text-white/86">Visit shortlisted buildings with a clear checklist for operations and fit-out.</p>
            </div>
            <div className="flex gap-4 rounded-2xl bg-white/8 p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ff7a00] text-sm font-black">4</span>
              <p className="text-sm font-semibold leading-6 text-white/86">Move toward terms, documentation, handover, and setup planning.</p>
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
                <h3 className="text-lg font-black text-[#071225]">Can you help with full building or floor requirements?</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">Yes. Requirements can be filtered for a full floor, partial floor, large office, business center, or front-facing setup.</p>
              </article>
              <article className="rounded-2xl bg-white p-5 shadow-[0_14px_34px_rgba(8,24,39,0.08)]">
                <h3 className="text-lg font-black text-[#071225]">Are new buildings available for immediate lease?</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">Some buildings are ready for quick possession, while others need fit-out time. Availability is checked before visits.</p>
              </article>
            </div>
          </div>
          <div className="rounded-3xl bg-[#078fa1] p-5 text-white shadow-[0_20px_55px_rgba(8,24,39,0.16)] sm:p-6">
            <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase text-[#078fa1]">
              <span className="h-0.5 w-6 rounded-full bg-[#ff7a00]" />
              Share your requirement
            </div>
            <h2 className="text-3xl font-black leading-tight">Get Commercial Building Options</h2>
            <p className="mt-3 text-sm font-semibold leading-6 text-white/86">Share required floor size, business type, preferred area, and timeline. The team will arrange matching building options and visits.</p>
            <div className="mt-5">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
