import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CalendarDaysIcon, CarIcon, MapPinIcon } from "lucide-react";
import LocationsCarousel from "@/components/site/LocationsCarousel";
import PageShell from "@/components/site/PageShell";

export const metadata = {
  title: "Prime Office Locations in Indore | TheOfficeOnRent",
  description: "Find workspaces across Vijay Nagar, Palasia, Scheme No. 78, MR-10, A.B. Road, and Super Corridor in Indore.",
};

const LOCATIONS = [
  {
    "name": "Vijay Nagar",
    "image": "/assets/ready-buildings/apollo-premier.jpg"
  },
  {
    "name": "Palasia",
    "image": "/assets/ready-buildings/benchmark.png"
  },
  {
    "name": "Scheme No. 78",
    "image": "/assets/ready-buildings/brilliant-titanium.jpg"
  },
  {
    "name": "MR-10",
    "image": "/assets/ready-buildings/bcm-zodiac.jpg"
  },
  {
    "name": "A.B. Road",
    "image": "/assets/ready-buildings/apollo-high-street.jpg"
  },
  {
    "name": "Super Corridor",
    "image": "/assets/ready-buildings/laabham-highlights.jpg"
  }
];

export default function LocationsPage() {
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
              Locations
            </div>
            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">Find A Workspace Close To Your Business</h1>
            <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-white/88 sm:text-lg">Tell us your preferred area, team size, and move-in timeline, and we will help you shortlist the most practical workspace option.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-11 sm:min-h-12 items-center justify-center gap-2 sm:gap-3 whitespace-nowrap rounded-xl sm:rounded-2xl px-5 sm:px-6 text-xs sm:text-sm font-bold transition bg-[#078fa1] text-white shadow-[0_18px_35px_rgba(7,143,161,0.23)] hover:bg-[#087f8d]">
                <CalendarDaysIcon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                <span>Share Preferred Location</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          <article className="rounded-2xl bg-white p-6 shadow-[0_16px_38px_rgba(8,24,39,0.08)]">
            <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-[#078fa1]">
              <MapPinIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-xl font-black text-[#071225]">Indore Workspace Hub</h2>
            <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">A polished base for professionals who want a ready-to-use workspace in Indore.</p>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-[0_16px_38px_rgba(8,24,39,0.08)]">
            <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#ff7a00]">
              <CarIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-xl font-black text-[#071225]">Easy Arrivals</h2>
            <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">Practical access support for teams, client meetings, and everyday commuting.</p>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-[0_16px_38px_rgba(8,24,39,0.08)]">
            <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-lime-100 text-[#77a912]">
              <CalendarDaysIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-xl font-black text-[#071225]">Tour Scheduling</h2>
            <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">Share your preferred time and the team will help you plan a workspace visit.</p>
          </article>
        </div>
      </section>
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase text-[#078fa1]">
              <span className="h-0.5 w-6 rounded-full bg-[#ff7a00]" />
              Prime business addresses
            </div>
            <h2 className="text-3xl font-black leading-tight text-[#071225] sm:text-4xl">Prime Locations Across Indore</h2>
          </div>
          <LocationsCarousel locations={LOCATIONS} />
        </div>
      </section>
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl border border-cyan-100 bg-[#e9f8fb] shadow-[0_18px_55px_rgba(8,24,39,0.08)] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col justify-center p-8 sm:p-10">
            <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase text-[#078fa1]">
              <span className="h-0.5 w-6 rounded-full bg-[#ff7a00]" />
              Plan your visit
            </div>
            <h2 className="max-w-lg text-3xl font-black leading-tight text-[#071225] sm:text-4xl">Book A Tour And Check Availability In Person</h2>
            <p className="mt-5 max-w-md text-base font-semibold leading-7 text-slate-600">The fastest way to pick the right space is to walk through the workstations, cabins, meeting rooms, and shared areas.</p>
            <Link href="/contact" className="mt-7 inline-flex min-h-12 w-fit items-center gap-2 rounded-xl bg-[#078fa1] px-6 text-sm font-black text-white shadow-[0_16px_32px_rgba(7,143,161,0.22)]">
              {"Book Your Tour Now "}
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="relative overflow-hidden bg-[#f0f4f8] h-[380px] rounded-none">
            <Image src="/assets/gallery/open-cubicles.jpg" alt="Open workspace seating" fill className="object-cover" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
