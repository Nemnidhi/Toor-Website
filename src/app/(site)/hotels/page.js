import Image from "next/image";
import Link from "next/link";
import { BriefcaseBusinessIcon, CalendarDaysIcon, CheckIcon, CoffeeIcon, MapPinIcon, ShieldCheckIcon, StarIcon } from "lucide-react";
import LeadForm from "@/components/site/LeadForm";
import PageShell from "@/components/site/PageShell";
import OptionCard from "@/components/site/OptionCard";
import { listOptions } from "@/lib/content";

export const metadata = {
  title: "Hotel Properties in Indore | TheOfficeOnRent",
  description: "Explore hotel property opportunities in Indore with support for location, access, service areas, and site visits.",
};

export const dynamic = "force-dynamic";

export default async function HotelsPage() {
  const options = await listOptions("hotels");
  return (
    <PageShell>
      <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="absolute inset-0">
          <Image src="/assets/gallery/private-suite.jpg" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071225]/88 via-[#071225]/60 to-[#078fa1]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f7fbff] via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl py-8 sm:py-12">
            <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-white/92 px-4 py-2 text-xs font-black uppercase text-[#078fa1] shadow-[0_12px_24px_rgba(8,24,39,0.12)]">
              <span className="h-0.5 w-5 rounded-full bg-[#ff7a00]" />
              Hotel properties
            </div>
            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">Hotel Spaces And Hospitality Properties</h1>
            <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-white/88 sm:text-lg">Shortlist hospitality-focused properties for hotel operations, boutique stays, and commercial lodging plans.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-11 sm:min-h-12 items-center justify-center gap-2 sm:gap-3 whitespace-nowrap rounded-xl sm:rounded-2xl px-5 sm:px-6 text-xs sm:text-sm font-bold transition bg-[#ff7a00] text-white shadow-[0_18px_35px_rgba(255,122,0,0.25)] hover:bg-[#f06f00]">
                <CalendarDaysIcon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                <span>Book a Visit</span>
              </Link>
              <a href="#hotel-properties" className="inline-flex min-h-11 sm:min-h-12 items-center justify-center gap-2 sm:gap-3 whitespace-nowrap rounded-xl sm:rounded-2xl px-5 sm:px-6 text-xs sm:text-sm font-bold transition bg-white text-[#071225] shadow-[0_16px_35px_rgba(17,24,39,0.08)] hover:bg-slate-50">
                <BriefcaseBusinessIcon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                <span>View Options</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="hotel-properties" className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase text-[#078fa1]">
              <span className="h-0.5 w-6 rounded-full bg-[#ff7a00]" />
              Hospitality options
            </div>
            <h2 className="text-3xl font-black leading-tight text-[#071225] sm:text-4xl">Hotel Properties With Operational Potential</h2>
            <p className="mt-4 text-sm font-semibold leading-6 text-slate-600 sm:text-base">Compare room count, access, guest movement, service zones, and location demand before arranging visits.</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {options.map((option) => <OptionCard key={option.id} option={option} />)}
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
            <h2 className="text-3xl font-black leading-tight text-[#071225] sm:text-4xl">Everything Needed For A Better Property Decision</h2>
            <p className="mt-4 text-sm font-semibold leading-6 text-slate-600 sm:text-base">Each shortlist includes the practical checks that matter for this property type, from access and utilities to layout and business fit.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl bg-white p-5 shadow-[0_14px_34px_rgba(8,24,39,0.08)]">
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#e8f8fa] text-[#078fa1]">
                <StarIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-black text-[#071225]">Guest Experience</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">Assess entry, reception, rooms, and common spaces from a guest lens.</p>
            </article>
            <article className="rounded-2xl bg-white p-5 shadow-[0_14px_34px_rgba(8,24,39,0.08)]">
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#e8f8fa] text-[#078fa1]">
                <MapPinIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-black text-[#071225]">Demand Mapping</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">Compare location against corporate, travel, education, or local demand.</p>
            </article>
            <article className="rounded-2xl bg-white p-5 shadow-[0_14px_34px_rgba(8,24,39,0.08)]">
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#e8f8fa] text-[#078fa1]">
                <CoffeeIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-black text-[#071225]">Service Zones</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">Review pantry, housekeeping, storage, and service movement possibilities.</p>
            </article>
            <article className="rounded-2xl bg-white p-5 shadow-[0_14px_34px_rgba(8,24,39,0.08)]">
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#e8f8fa] text-[#078fa1]">
                <ShieldCheckIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-black text-[#071225]">Access Control</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">Plan guest entry, back-of-house movement, and safety considerations.</p>
            </article>
          </div>
        </div>
      </section>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-3xl bg-[#071225] p-6 text-white shadow-[0_20px_55px_rgba(8,24,39,0.16)] sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase text-[#078fa1]">
              <span className="h-0.5 w-6 rounded-full bg-[#ff7a00]" />
              Hospitality support
            </div>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">Compare Properties Around Guest Experience</h2>
            <p className="mt-4 max-w-xl text-sm font-semibold leading-6 text-white/78">The shortlist keeps business potential and daily hospitality operations together, from rooms to access and services.</p>
          </div>
          <div className="grid gap-3">
            <div className="flex gap-4 rounded-2xl bg-white/8 p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ff7a00] text-sm font-black">1</span>
              <p className="text-sm font-semibold leading-6 text-white/86">Share target room count, hospitality format, preferred area, and budget.</p>
            </div>
            <div className="flex gap-4 rounded-2xl bg-white/8 p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ff7a00] text-sm font-black">2</span>
              <p className="text-sm font-semibold leading-6 text-white/86">Review properties by guest access, room potential, service zones, and location demand.</p>
            </div>
            <div className="flex gap-4 rounded-2xl bg-white/8 p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ff7a00] text-sm font-black">3</span>
              <p className="text-sm font-semibold leading-6 text-white/86">Visit options with a hospitality checklist instead of a generic property tour.</p>
            </div>
            <div className="flex gap-4 rounded-2xl bg-white/8 p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ff7a00] text-sm font-black">4</span>
              <p className="text-sm font-semibold leading-6 text-white/86">Finalize terms, documentation, handover, and setup planning.</p>
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
                <h3 className="text-lg font-black text-[#071225]">Can you shortlist for boutique hotels and guest houses?</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">Yes. The shortlist can focus on boutique hotels, guest houses, serviced rooms, business stays, or conversion properties.</p>
              </article>
              <article className="rounded-2xl bg-white p-5 shadow-[0_14px_34px_rgba(8,24,39,0.08)]">
                <h3 className="text-lg font-black text-[#071225]">Do these properties come fully operational?</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">Some options may be closer to hospitality use, while others require fit-out, licensing discussions, and operator setup.</p>
              </article>
            </div>
          </div>
          <div className="rounded-3xl bg-[#078fa1] p-5 text-white shadow-[0_20px_55px_rgba(8,24,39,0.16)] sm:p-6">
            <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase text-[#078fa1]">
              <span className="h-0.5 w-6 rounded-full bg-[#ff7a00]" />
              Share your requirement
            </div>
            <h2 className="text-3xl font-black leading-tight">Get Hotel Property Options</h2>
            <p className="mt-3 text-sm font-semibold leading-6 text-white/86">Tell us your room target, preferred area, budget, and hospitality model. The team will share matching options and visits.</p>
            <div className="mt-5">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
