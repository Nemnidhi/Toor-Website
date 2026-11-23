import Image from "next/image";
import Link from "next/link";
import { BadgeIndianRupeeIcon, BriefcaseBusinessIcon, Building2Icon, CalendarDaysIcon, CheckIcon, UsersRoundIcon } from "lucide-react";
import PageShell from "@/components/site/PageShell";

export const metadata = {
  title: "Flexible Workspace Plans in Indore | TheOfficeOnRent",
  description: "Choose flexible workspace plans for desks, cabins, meeting rooms, and virtual office requirements in Indore.",
};

export default function PlansPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="absolute inset-0">
          <Image src="/assets/services/dedicated-desk.jpg" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071225]/88 via-[#071225]/60 to-[#078fa1]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f7fbff] via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl py-8 sm:py-12">
            <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-white/92 px-4 py-2 text-xs font-black uppercase text-[#078fa1] shadow-[0_12px_24px_rgba(8,24,39,0.12)]">
              <span className="h-0.5 w-5 rounded-full bg-[#ff7a00]" />
              Plans
            </div>
            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">Choose How You Want To Work</h1>
            <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-white/88 sm:text-lg">Start with a desk, move into a cabin, or book meeting rooms as needed. Plans stay flexible as your work changes.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/pricing" className="inline-flex min-h-11 sm:min-h-12 items-center justify-center gap-2 sm:gap-3 whitespace-nowrap rounded-xl sm:rounded-2xl px-5 sm:px-6 text-xs sm:text-sm font-bold transition bg-[#078fa1] text-white shadow-[0_18px_35px_rgba(7,143,161,0.23)] hover:bg-[#087f8d]">
                <BadgeIndianRupeeIcon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                <span>Compare Pricing</span>
              </Link>
              <Link href="/contact" className="inline-flex min-h-11 sm:min-h-12 items-center justify-center gap-2 sm:gap-3 whitespace-nowrap rounded-xl sm:rounded-2xl px-5 sm:px-6 text-xs sm:text-sm font-bold transition bg-white text-[#071225] shadow-[0_16px_35px_rgba(17,24,39,0.08)] hover:bg-slate-50">
                <CalendarDaysIcon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                <span>Get a Recommendation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          <article className="overflow-hidden rounded-2xl bg-white shadow-[0_18px_42px_rgba(8,24,39,0.1)]">
            <div className="relative overflow-hidden bg-[#f0f4f8] h-52 w-full rounded-none">
              <Image src="/assets/crops/conference.jpeg" alt="Dedicated Desk plan" fill className="object-cover" />
            </div>
            <div className="relative p-6 pt-10">
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full absolute -top-8 left-6 bg-[#078fa1] text-white shadow-lg">
                <BriefcaseBusinessIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
              </span>
              <h2 className="text-2xl font-black text-[#071225]">Dedicated Desk</h2>
              <div className="mt-3 flex items-end gap-2 text-[#071225]">
                <span className="text-3xl font-black leading-none">₹8,999</span>
                <span className="pb-1 text-sm font-bold text-slate-500">/month</span>
              </div>
              <ul className="mt-6 grid grid-cols-2 gap-3">
                <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                  <span>Flexible Seating</span>
                </li>
                <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                  <span>High Speed Wi-Fi</span>
                </li>
                <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                  <span>24/7 Access</span>
                </li>
                <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                  <span>All Amenities Included</span>
                </li>
              </ul>
              <Link href="/contact" className="mt-7 flex min-h-11 items-center justify-center rounded-xl bg-[#078fa1] text-sm font-black text-white">Ask About This Plan</Link>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl bg-white shadow-[0_18px_42px_rgba(8,24,39,0.1)]">
            <div className="relative overflow-hidden bg-[#f0f4f8] h-52 w-full rounded-none">
              <Image src="/assets/hero/modern-reception.jpg" alt="Private Cabin plan" fill className="object-cover" />
            </div>
            <div className="relative p-6 pt-10">
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full absolute -top-8 left-6 bg-[#ff7a00] text-white shadow-lg">
                <Building2Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
              </span>
              <h2 className="text-2xl font-black text-[#071225]">Private Cabin</h2>
              <div className="mt-3 flex items-end gap-2 text-[#071225]">
                <span className="text-3xl font-black leading-none">₹14,999</span>
                <span className="pb-1 text-sm font-bold text-slate-500">/month</span>
              </div>
              <ul className="mt-6 grid grid-cols-2 gap-3">
                <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                  <span>Private & Lockable Cabins</span>
                </li>
                <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                  <span>Team Seating</span>
                </li>
                <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                  <span>24/7 Access</span>
                </li>
                <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                  <span>All Amenities Included</span>
                </li>
              </ul>
              <Link href="/contact" className="mt-7 flex min-h-11 items-center justify-center rounded-xl bg-[#078fa1] text-sm font-black text-white">Ask About This Plan</Link>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl bg-white shadow-[0_18px_42px_rgba(8,24,39,0.1)]">
            <div className="relative overflow-hidden bg-[#f0f4f8] h-52 w-full rounded-none">
              <Image src="/assets/services/meeting-rooms.jpg" alt="Meeting Room plan" fill className="object-cover" />
            </div>
            <div className="relative p-6 pt-10">
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full absolute -top-8 left-6 bg-[#8c36c9] text-white shadow-lg">
                <UsersRoundIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
              </span>
              <h2 className="text-2xl font-black text-[#071225]">Meeting Room</h2>
              <div className="mt-3 flex items-end gap-2 text-[#071225]">
                <span className="text-3xl font-black leading-none">₹999</span>
                <span className="pb-1 text-sm font-bold text-slate-500">/hour</span>
              </div>
              <ul className="mt-6 grid grid-cols-2 gap-3">
                <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                  <span>Hourly Booking</span>
                </li>
                <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                  <span>AV Equipment</span>
                </li>
                <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                  <span>High Speed Wi-Fi</span>
                </li>
                <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                  <span>Refreshments</span>
                </li>
              </ul>
              <Link href="/contact" className="mt-7 flex min-h-11 items-center justify-center rounded-xl bg-[#078fa1] text-sm font-black text-white">Ask About This Plan</Link>
            </div>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
