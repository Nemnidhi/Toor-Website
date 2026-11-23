import Image from "next/image";
import Link from "next/link";
import { CalendarDaysIcon, CarIcon, Clock3Icon, CoffeeIcon, LockIcon, MapPinIcon, PrinterIcon, ShieldCheckIcon, SparklesIcon, TrendingUpIcon, UsersRoundIcon, WifiIcon, WindIcon, ZapIcon } from "lucide-react";
import PageShell from "@/components/site/PageShell";

export const metadata = {
  title: "Coworking Amenities in Indore | TheOfficeOnRent",
  description: "Review workspace amenities including internet, meeting rooms, printing, power backup, parking, and secure access.",
};

export default function AmenitiesPage() {
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
              Amenities
            </div>
            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">Everything Your Team Needs To Win</h1>
            <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-white/88 sm:text-lg">Fast internet, reliable access, meeting rooms, pantry support, and daily workspace essentials are ready from day one.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-11 sm:min-h-12 items-center justify-center gap-2 sm:gap-3 whitespace-nowrap rounded-xl sm:rounded-2xl px-5 sm:px-6 text-xs sm:text-sm font-bold transition bg-[#078fa1] text-white shadow-[0_18px_35px_rgba(7,143,161,0.23)] hover:bg-[#087f8d]">
                <CalendarDaysIcon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                <span>Book a Free Tour</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          <article className="rounded-2xl bg-white p-5 text-center shadow-[0_14px_34px_rgba(8,24,39,0.08)]">
            <WifiIcon className="mx-auto h-9 w-9 text-[#078fa1]" strokeWidth={2.2} aria-hidden="true" />
            <h2 className="mt-4 text-sm font-black leading-5 text-[#071225]">Ultra Fast Internet</h2>
          </article>
          <article className="rounded-2xl bg-white p-5 text-center shadow-[0_14px_34px_rgba(8,24,39,0.08)]">
            <CoffeeIcon className="mx-auto h-9 w-9 text-[#078fa1]" strokeWidth={2.2} aria-hidden="true" />
            <h2 className="mt-4 text-sm font-black leading-5 text-[#071225]">Unlimited Tea & Coffee</h2>
          </article>
          <article className="rounded-2xl bg-white p-5 text-center shadow-[0_14px_34px_rgba(8,24,39,0.08)]">
            <Clock3Icon className="mx-auto h-9 w-9 text-[#078fa1]" strokeWidth={2.2} aria-hidden="true" />
            <h2 className="mt-4 text-sm font-black leading-5 text-[#071225]">24/7 Access</h2>
          </article>
          <article className="rounded-2xl bg-white p-5 text-center shadow-[0_14px_34px_rgba(8,24,39,0.08)]">
            <ZapIcon className="mx-auto h-9 w-9 text-[#078fa1]" strokeWidth={2.2} aria-hidden="true" />
            <h2 className="mt-4 text-sm font-black leading-5 text-[#071225]">Power Backup</h2>
          </article>
          <article className="rounded-2xl bg-white p-5 text-center shadow-[0_14px_34px_rgba(8,24,39,0.08)]">
            <WindIcon className="mx-auto h-9 w-9 text-[#078fa1]" strokeWidth={2.2} aria-hidden="true" />
            <h2 className="mt-4 text-sm font-black leading-5 text-[#071225]">Air Conditioning</h2>
          </article>
          <article className="rounded-2xl bg-white p-5 text-center shadow-[0_14px_34px_rgba(8,24,39,0.08)]">
            <PrinterIcon className="mx-auto h-9 w-9 text-[#078fa1]" strokeWidth={2.2} aria-hidden="true" />
            <h2 className="mt-4 text-sm font-black leading-5 text-[#071225]">Printing & Scanning</h2>
          </article>
          <article className="rounded-2xl bg-white p-5 text-center shadow-[0_14px_34px_rgba(8,24,39,0.08)]">
            <CarIcon className="mx-auto h-9 w-9 text-[#078fa1]" strokeWidth={2.2} aria-hidden="true" />
            <h2 className="mt-4 text-sm font-black leading-5 text-[#071225]">Parking Available</h2>
          </article>
          <article className="rounded-2xl bg-white p-5 text-center shadow-[0_14px_34px_rgba(8,24,39,0.08)]">
            <SparklesIcon className="mx-auto h-9 w-9 text-[#078fa1]" strokeWidth={2.2} aria-hidden="true" />
            <h2 className="mt-4 text-sm font-black leading-5 text-[#071225]">Housekeeping Services</h2>
          </article>
          <article className="rounded-2xl bg-white p-5 text-center shadow-[0_14px_34px_rgba(8,24,39,0.08)]">
            <LockIcon className="mx-auto h-9 w-9 text-[#078fa1]" strokeWidth={2.2} aria-hidden="true" />
            <h2 className="mt-4 text-sm font-black leading-5 text-[#071225]">Secure Access</h2>
          </article>
          <article className="rounded-2xl bg-white p-5 text-center shadow-[0_14px_34px_rgba(8,24,39,0.08)]">
            <ShieldCheckIcon className="mx-auto h-9 w-9 text-[#078fa1]" strokeWidth={2.2} aria-hidden="true" />
            <h2 className="mt-4 text-sm font-black leading-5 text-[#071225]">Networking Events</h2>
          </article>
        </div>
      </section>
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-4">
          <article className="rounded-2xl bg-white p-6 shadow-[0_16px_38px_rgba(8,24,39,0.08)]">
            <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-[#078fa1]">
              <ShieldCheckIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-xl font-black text-[#071225]">Zero-Brokerage Options</h2>
            <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">No brokerage for co-working spaces or zero brokerage for 5-year agreements with 3-year locking period.</p>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-[0_16px_38px_rgba(8,24,39,0.08)]">
            <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#ff7a00]">
              <TrendingUpIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-xl font-black text-[#071225]">Leasing Services</h2>
            <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">Comprehensive leasing services for office spaces, retail showrooms, and commercial properties.</p>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-[0_16px_38px_rgba(8,24,39,0.08)]">
            <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-lime-100 text-[#77a912]">
              <UsersRoundIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-xl font-black text-[#071225]">Co-Working Alliance</h2>
            <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">Allied with 65+ co-working spaces for plug-and-play offices across Indore.</p>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-[0_16px_38px_rgba(8,24,39,0.08)]">
            <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-purple-100 text-[#9c49dd]">
              <MapPinIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-xl font-black text-[#071225]">Prime Locations</h2>
            <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">Strategically located in prime business hubs with high-visibility access and connectivity.</p>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
