import Image from "next/image";
import Link from "next/link";
import { CalendarDaysIcon, CheckIcon } from "lucide-react";
import PageShell from "@/components/site/PageShell";

export const metadata = {
  title: "Coworking Plans and Pricing in Indore | TheOfficeOnRent",
  description: "Review pricing and included features for flex desks, dedicated desks, and private cabins in Indore.",
};

export default function PricingPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="absolute inset-0">
          <Image src="/assets/services/meeting-rooms.jpg" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071225]/88 via-[#071225]/60 to-[#078fa1]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f7fbff] via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl py-8 sm:py-12">
            <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-white/92 px-4 py-2 text-xs font-black uppercase text-[#078fa1] shadow-[0_12px_24px_rgba(8,24,39,0.12)]">
              <span className="h-0.5 w-5 rounded-full bg-[#ff7a00]" />
              Pricing
            </div>
            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">Simple Pricing For Flexible Work</h1>
            <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-white/88 sm:text-lg">Pick a monthly plan, reserve meeting time, or request custom pricing for your team size and preferred setup.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-11 sm:min-h-12 items-center justify-center gap-2 sm:gap-3 whitespace-nowrap rounded-xl sm:rounded-2xl px-5 sm:px-6 text-xs sm:text-sm font-bold transition bg-[#078fa1] text-white shadow-[0_18px_35px_rgba(7,143,161,0.23)] hover:bg-[#087f8d]">
                <CalendarDaysIcon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                <span>Request Availability</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          <article className="relative flex h-full flex-col rounded-2xl border bg-white p-7 shadow-[0_18px_42px_rgba(8,24,39,0.09)] border-slate-100">
            <h2 className="text-2xl font-black text-[#071225] lg:min-h-8">Flex Desk</h2>
            <p className="mt-2 text-sm font-semibold text-slate-500 lg:min-h-5">Ideal for individuals</p>
            <div className="mt-6 lg:min-h-14">
              <div className="font-black text-[#071225] text-4xl">₹5,999</div>
              <div className="text-sm font-semibold text-slate-500">/month</div>
            </div>
            <ul className="mt-7 flex-1 space-y-3">
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
                <span>Access to Amenities</span>
              </li>
              <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                <span>Printing (Limited)</span>
              </li>
            </ul>
            <Link href="/contact" className="mt-8 flex min-h-11 items-center justify-center rounded-xl border text-sm font-black border-[#078fa1] bg-white text-[#078fa1]">Book Plan</Link>
          </article>
          <article className="relative flex h-full flex-col rounded-2xl border bg-white p-7 shadow-[0_18px_42px_rgba(8,24,39,0.09)] border-[#ff7a00] pt-10">
            <div className="absolute inset-x-0 top-0 rounded-t-2xl bg-[#ff7a00] py-2 text-center text-xs font-black uppercase text-white">Most Popular</div>
            <h2 className="text-2xl font-black text-[#071225] lg:min-h-8">Dedicated Desk</h2>
            <p className="mt-2 text-sm font-semibold text-slate-500 lg:min-h-5">Perfect for professionals</p>
            <div className="mt-6 lg:min-h-14">
              <div className="font-black text-[#071225] text-4xl">₹8,999</div>
              <div className="text-sm font-semibold text-slate-500">/month</div>
            </div>
            <ul className="mt-7 flex-1 space-y-3">
              <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                <span>Dedicated Desk</span>
              </li>
              <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                <span>Lockable Storage</span>
              </li>
              <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                <span>All Amenities Included</span>
              </li>
              <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                <span>24/7 Access</span>
              </li>
            </ul>
            <Link href="/contact" className="mt-8 flex min-h-11 items-center justify-center rounded-xl border text-sm font-black border-[#ff7a00] bg-[#ff7a00] text-white">Book Plan</Link>
          </article>
          <article className="relative flex h-full flex-col rounded-2xl border bg-white p-7 shadow-[0_18px_42px_rgba(8,24,39,0.09)] border-slate-100">
            <h2 className="text-2xl font-black text-[#071225] lg:min-h-8">Private Cabin</h2>
            <p className="mt-2 text-sm font-semibold text-slate-500 lg:min-h-5">For teams who love privacy</p>
            <div className="mt-6 lg:min-h-14">
              <div className="font-black text-[#071225] text-2xl">Custom Pricing</div>
            </div>
            <ul className="mt-7 flex-1 space-y-3">
              <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                <span>Private Cabin</span>
              </li>
              <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                <span>Team Seating</span>
              </li>
              <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                <span>All Amenities Included</span>
              </li>
              <li className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                <span>Personalised Support</span>
              </li>
            </ul>
            <Link href="/contact" className="mt-8 flex min-h-11 items-center justify-center rounded-xl border text-sm font-black border-[#078fa1] bg-white text-[#078fa1]">Book Plan</Link>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
