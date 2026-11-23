import Image from "next/image";
import Link from "next/link";
import { BriefcaseBusinessIcon, CalendarDaysIcon, CheckIcon, CoffeeIcon, ShieldCheckIcon, UsersRoundIcon, WindIcon } from "lucide-react";
import LeadForm from "@/components/site/LeadForm";
import PageShell from "@/components/site/PageShell";
import OptionCard from "@/components/site/OptionCard";
import { listOptions } from "@/lib/content";

export const metadata = {
  title: "Hostel Properties in Indore | TheOfficeOnRent",
  description: "Explore hostel property opportunities in Indore with practical shortlisting based on access, capacity, and location demand.",
};

export const dynamic = "force-dynamic";

export default async function HostelsPage() {
  const options = await listOptions("hostels");
  return (
    <PageShell>
      <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="absolute inset-0">
          <Image src="/assets/gallery/office-lounge.jpg" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071225]/88 via-[#071225]/60 to-[#078fa1]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f7fbff] via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl py-8 sm:py-12">
            <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-white/92 px-4 py-2 text-xs font-black uppercase text-[#078fa1] shadow-[0_12px_24px_rgba(8,24,39,0.12)]">
              <span className="h-0.5 w-5 rounded-full bg-[#ff7a00]" />
              Hostel properties
            </div>
            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">Hostel Spaces For Operators And Investors</h1>
            <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-white/88 sm:text-lg">Discover hostel-ready properties and conversion-friendly commercial spaces for student, staff, or managed-stay operations.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-11 sm:min-h-12 items-center justify-center gap-2 sm:gap-3 whitespace-nowrap rounded-xl sm:rounded-2xl px-5 sm:px-6 text-xs sm:text-sm font-bold transition bg-[#ff7a00] text-white shadow-[0_18px_35px_rgba(255,122,0,0.25)] hover:bg-[#f06f00]">
                <CalendarDaysIcon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                <span>Book a Visit</span>
              </Link>
              <a href="#hostel-properties" className="inline-flex min-h-11 sm:min-h-12 items-center justify-center gap-2 sm:gap-3 whitespace-nowrap rounded-xl sm:rounded-2xl px-5 sm:px-6 text-xs sm:text-sm font-bold transition bg-white text-[#071225] shadow-[0_16px_35px_rgba(17,24,39,0.08)] hover:bg-slate-50">
                <BriefcaseBusinessIcon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                <span>View Options</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="hostel-properties" className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase text-[#078fa1]">
              <span className="h-0.5 w-6 rounded-full bg-[#ff7a00]" />
              Hostel options
            </div>
            <h2 className="text-3xl font-black leading-tight text-[#071225] sm:text-4xl">Properties Matched To Hostel Operations</h2>
            <p className="mt-4 text-sm font-semibold leading-6 text-slate-600 sm:text-base">Compare capacity, layout, access, shared facilities, and nearby demand before visiting suitable hostel properties.</p>
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
                <UsersRoundIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-black text-[#071225]">Capacity Planning</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">Estimate realistic bed count based on rooms, circulation, and services.</p>
            </article>
            <article className="rounded-2xl bg-white p-5 shadow-[0_14px_34px_rgba(8,24,39,0.08)]">
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#e8f8fa] text-[#078fa1]">
                <ShieldCheckIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-black text-[#071225]">Safety Discussion</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">Review entry, visitor movement, and safety considerations before final selection.</p>
            </article>
            <article className="rounded-2xl bg-white p-5 shadow-[0_14px_34px_rgba(8,24,39,0.08)]">
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#e8f8fa] text-[#078fa1]">
                <CoffeeIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-black text-[#071225]">Shared Facilities</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">Check pantry, common area, washroom, and utility possibilities.</p>
            </article>
            <article className="rounded-2xl bg-white p-5 shadow-[0_14px_34px_rgba(8,24,39,0.08)]">
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#e8f8fa] text-[#078fa1]">
                <WindIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-black text-[#071225]">Ventilation Scope</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">Look at comfort basics that affect long-stay suitability.</p>
            </article>
          </div>
        </div>
      </section>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-3xl bg-[#071225] p-6 text-white shadow-[0_20px_55px_rgba(8,24,39,0.16)] sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase text-[#078fa1]">
              <span className="h-0.5 w-6 rounded-full bg-[#ff7a00]" />
              Operator support
            </div>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">Shortlist With Capacity And Operations In Mind</h2>
            <p className="mt-4 max-w-xl text-sm font-semibold leading-6 text-white/78">The team helps you compare properties around beds, shared services, access, compliance discussions, and feasibility.</p>
          </div>
          <div className="grid gap-3">
            <div className="flex gap-4 rounded-2xl bg-white/8 p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ff7a00] text-sm font-black">1</span>
              <p className="text-sm font-semibold leading-6 text-white/86">Share target bed count, locality, user type, budget, and setup timeline.</p>
            </div>
            <div className="flex gap-4 rounded-2xl bg-white/8 p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ff7a00] text-sm font-black">2</span>
              <p className="text-sm font-semibold leading-6 text-white/86">Review properties by capacity, layout, facility scope, and operating model.</p>
            </div>
            <div className="flex gap-4 rounded-2xl bg-white/8 p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ff7a00] text-sm font-black">3</span>
              <p className="text-sm font-semibold leading-6 text-white/86">Visit only the spaces that match practical hostel operations.</p>
            </div>
            <div className="flex gap-4 rounded-2xl bg-white/8 p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ff7a00] text-sm font-black">4</span>
              <p className="text-sm font-semibold leading-6 text-white/86">Finalize lease discussions, setup scope, and handover requirements.</p>
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
                <h3 className="text-lg font-black text-[#071225]">Do you have hostel-ready properties?</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">Yes. Some spaces are closer to hostel use, while others are conversion-friendly and need operator-led setup planning.</p>
              </article>
              <article className="rounded-2xl bg-white p-5 shadow-[0_14px_34px_rgba(8,24,39,0.08)]">
                <h3 className="text-lg font-black text-[#071225]">Can capacity be estimated before a visit?</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">A practical estimate can be discussed from the layout, but final capacity should be confirmed after a physical inspection.</p>
              </article>
            </div>
          </div>
          <div className="rounded-3xl bg-[#078fa1] p-5 text-white shadow-[0_20px_55px_rgba(8,24,39,0.16)] sm:p-6">
            <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase text-[#078fa1]">
              <span className="h-0.5 w-6 rounded-full bg-[#ff7a00]" />
              Share your requirement
            </div>
            <h2 className="text-3xl font-black leading-tight">Get Hostel Property Options</h2>
            <p className="mt-3 text-sm font-semibold leading-6 text-white/86">Share expected capacity, preferred locality, budget, and operation type. The team will suggest practical hostel-ready spaces.</p>
            <div className="mt-5">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
