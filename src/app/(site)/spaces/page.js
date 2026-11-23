import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, BadgeIndianRupeeIcon, BriefcaseBusinessIcon, Building2Icon, CalendarDaysIcon, CheckIcon, MailIcon, SparklesIcon, StarIcon, UsersRoundIcon } from "lucide-react";
import PageShell from "@/components/site/PageShell";

export const metadata = {
  title: "Coworking and Office Spaces in Indore | TheOfficeOnRent",
  description: "Compare flex desks, dedicated desks, private cabins, meeting rooms, and virtual office options in Indore.",
};

export default function SpacesPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="absolute inset-0">
          <Image src="/assets/crops/conference.jpeg" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071225]/88 via-[#071225]/60 to-[#078fa1]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f7fbff] via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl py-8 sm:py-12">
            <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-white/92 px-4 py-2 text-xs font-black uppercase text-[#078fa1] shadow-[0_12px_24px_rgba(8,24,39,0.12)]">
              <span className="h-0.5 w-5 rounded-full bg-[#ff7a00]" />
              Workspace options
            </div>
            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">Spaces For Every Way Your Team Works</h1>
            <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-white/88 sm:text-lg">Choose from shared desks, dedicated desks, private cabins, meeting rooms, and virtual office solutions built for focused work.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-11 sm:min-h-12 items-center justify-center gap-2 sm:gap-3 whitespace-nowrap rounded-xl sm:rounded-2xl px-5 sm:px-6 text-xs sm:text-sm font-bold transition bg-[#078fa1] text-white shadow-[0_18px_35px_rgba(7,143,161,0.23)] hover:bg-[#087f8d]">
                <CalendarDaysIcon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                <span>Book a Tour</span>
              </Link>
              <Link href="/pricing" className="inline-flex min-h-11 sm:min-h-12 items-center justify-center gap-2 sm:gap-3 whitespace-nowrap rounded-xl sm:rounded-2xl px-5 sm:px-6 text-xs sm:text-sm font-bold transition bg-white text-[#071225] shadow-[0_16px_35px_rgba(17,24,39,0.08)] hover:bg-slate-50">
                <BadgeIndianRupeeIcon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                <span>View Pricing</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-2xl">
            <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase text-[#078fa1]">
              <span className="h-0.5 w-6 rounded-full bg-[#ff7a00]" />
              Property categories
            </div>
            <h2 className="text-3xl font-black leading-tight text-[#071225] sm:text-4xl">Explore Spaces By Requirement</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
            <Link className="group overflow-hidden rounded-2xl bg-white shadow-[0_16px_38px_rgba(8,24,39,0.09)] transition hover:-translate-y-1" href="/ready-to-move">
              <div className="relative overflow-hidden bg-[#f0f4f8] h-36 w-full rounded-none">
                <Image src="/assets/services/private-cabin.jpg" alt="Ready to Move Offices commercial space" fill className="object-cover" />
              </div>
              <div className="relative p-5 pt-9">
                <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full absolute -top-8 left-5 bg-cyan-100 text-[#078fa1] shadow-lg">
                  <BriefcaseBusinessIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                </span>
                <h2 className="text-lg font-black leading-6 text-[#071225]">Ready to Move Offices</h2>
                <p className="mt-3 min-h-20 text-sm font-semibold leading-6 text-slate-600">Move into verified commercial spaces with minimal setup time, practical amenities, and faster handover support.</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#078fa1]">
                  {"View Details "}
                  <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </Link>
            <Link className="group overflow-hidden rounded-2xl bg-white shadow-[0_16px_38px_rgba(8,24,39,0.09)] transition hover:-translate-y-1" href="/new-commercial-building">
              <div className="relative overflow-hidden bg-[#f0f4f8] h-36 w-full rounded-none">
                <Image src="/assets/hero/modern-reception.jpg" alt="New Commercial Building commercial space" fill className="object-cover" />
              </div>
              <div className="relative p-5 pt-9">
                <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full absolute -top-8 left-5 bg-orange-100 text-[#ff7a00] shadow-lg">
                  <Building2Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                </span>
                <h2 className="text-lg font-black leading-6 text-[#071225]">New Commercial Building</h2>
                <p className="mt-3 min-h-20 text-sm font-semibold leading-6 text-slate-600">Find new commercial buildings for offices, business centers, and growing teams that need a modern address.</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#078fa1]">
                  {"View Details "}
                  <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </Link>
            <Link className="group overflow-hidden rounded-2xl bg-white shadow-[0_16px_38px_rgba(8,24,39,0.09)] transition hover:-translate-y-1" href="/retail-shops-showrooms">
              <div className="relative overflow-hidden bg-[#f0f4f8] h-36 w-full rounded-none">
                <Image src="/assets/services/meeting-rooms.jpg" alt="Retail Shops / Showrooms commercial space" fill className="object-cover" />
              </div>
              <div className="relative p-5 pt-9">
                <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full absolute -top-8 left-5 bg-cyan-100 text-[#078fa1] shadow-lg">
                  <SparklesIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                </span>
                <h2 className="text-lg font-black leading-6 text-[#071225]">Retail Shops / Showrooms</h2>
                <p className="mt-3 min-h-20 text-sm font-semibold leading-6 text-slate-600">Find visible retail shops and showroom spaces for brands, dealerships, service businesses, and customer-facing teams.</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#078fa1]">
                  {"View Details "}
                  <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </Link>
            <Link className="group overflow-hidden rounded-2xl bg-white shadow-[0_16px_38px_rgba(8,24,39,0.09)] transition hover:-translate-y-1" href="/hostels">
              <div className="relative overflow-hidden bg-[#f0f4f8] h-36 w-full rounded-none">
                <Image src="/assets/gallery/office-lounge.jpg" alt="Hostels commercial space" fill className="object-cover" />
              </div>
              <div className="relative p-5 pt-9">
                <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full absolute -top-8 left-5 bg-lime-100 text-[#77a912] shadow-lg">
                  <UsersRoundIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                </span>
                <h2 className="text-lg font-black leading-6 text-[#071225]">Hostels</h2>
                <p className="mt-3 min-h-20 text-sm font-semibold leading-6 text-slate-600">Discover hostel-ready properties and conversion-friendly commercial spaces for student, staff, or managed-stay operations.</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#078fa1]">
                  {"View Details "}
                  <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </Link>
            <Link className="group overflow-hidden rounded-2xl bg-white shadow-[0_16px_38px_rgba(8,24,39,0.09)] transition hover:-translate-y-1" href="/hotels">
              <div className="relative overflow-hidden bg-[#f0f4f8] h-36 w-full rounded-none">
                <Image src="/assets/gallery/private-suite.jpg" alt="Hotels commercial space" fill className="object-cover" />
              </div>
              <div className="relative p-5 pt-9">
                <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full absolute -top-8 left-5 bg-purple-100 text-[#9c49dd] shadow-lg">
                  <StarIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                </span>
                <h2 className="text-lg font-black leading-6 text-[#071225]">Hotels</h2>
                <p className="mt-3 min-h-20 text-sm font-semibold leading-6 text-slate-600">Shortlist hospitality-focused properties for hotel operations, boutique stays, and commercial lodging plans.</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#078fa1]">
                  {"View Details "}
                  <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <article className="group overflow-hidden rounded-2xl border border-slate-100 border-b-4 border-[#078fa1] bg-white shadow-[0_18px_42px_rgba(8,24,39,0.1)] transition hover:-translate-y-1">
            <div className="relative overflow-hidden bg-[#f0f4f8] h-44 w-full rounded-none">
              <Image src="/assets/services/dedicated-desk.jpg" alt="Dedicated Desk workspace" fill className="object-cover" />
            </div>
            <div className="relative p-5 pt-9">
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full absolute -top-8 left-5 bg-[#078fa1] text-white shadow-lg">
                <BriefcaseBusinessIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
              </span>
              <h2 className="text-xl font-black text-[#071225]">Dedicated Desk</h2>
              <p className="mt-3 min-h-16 text-sm font-semibold leading-6 text-slate-600">A personal desk in a shared workspace with all amenities.</p>
              <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#078fa1]">
                {"Check Availability "}
                <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </article>
          <article className="group overflow-hidden rounded-2xl border border-slate-100 border-b-4 border-[#ff7a00] bg-white shadow-[0_18px_42px_rgba(8,24,39,0.1)] transition hover:-translate-y-1">
            <div className="relative overflow-hidden bg-[#f0f4f8] h-44 w-full rounded-none">
              <Image src="/assets/services/private-cabin.jpg" alt="Private Cabin workspace" fill className="object-cover" />
            </div>
            <div className="relative p-5 pt-9">
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full absolute -top-8 left-5 bg-[#ff7a00] text-white shadow-lg">
                <Building2Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
              </span>
              <h2 className="text-xl font-black text-[#071225]">Private Cabin</h2>
              <p className="mt-3 min-h-16 text-sm font-semibold leading-6 text-slate-600">Lockable private cabins for you and your team.</p>
              <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#078fa1]">
                {"Check Availability "}
                <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </article>
          <article className="group overflow-hidden rounded-2xl border border-slate-100 border-b-4 border-[#9c49dd] bg-white shadow-[0_18px_42px_rgba(8,24,39,0.1)] transition hover:-translate-y-1">
            <div className="relative overflow-hidden bg-[#f0f4f8] h-44 w-full rounded-none">
              <Image src="/assets/services/meeting-rooms.jpg" alt="Meeting Rooms workspace" fill className="object-cover" />
            </div>
            <div className="relative p-5 pt-9">
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full absolute -top-8 left-5 bg-[#9c49dd] text-white shadow-lg">
                <UsersRoundIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
              </span>
              <h2 className="text-xl font-black text-[#071225]">Meeting Rooms</h2>
              <p className="mt-3 min-h-16 text-sm font-semibold leading-6 text-slate-600">Professional meeting rooms on hourly or daily basis.</p>
              <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#078fa1]">
                {"Check Availability "}
                <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </article>
          <article className="group overflow-hidden rounded-2xl border border-slate-100 border-b-4 border-[#78aa23] bg-white shadow-[0_18px_42px_rgba(8,24,39,0.1)] transition hover:-translate-y-1">
            <div className="relative overflow-hidden bg-[#f0f4f8] h-44 w-full rounded-none">
              <Image src="/assets/services/virtual-office.jpg" alt="Virtual Office workspace" fill className="object-cover" />
            </div>
            <div className="relative p-5 pt-9">
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full absolute -top-8 left-5 bg-[#78aa23] text-white shadow-lg">
                <MailIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
              </span>
              <h2 className="text-xl font-black text-[#071225]">Virtual Office</h2>
              <p className="mt-3 min-h-16 text-sm font-semibold leading-6 text-slate-600">Build your business presence with a prestigious address.</p>
              <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#078fa1]">
                {"Check Availability "}
                <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </article>
        </div>
      </section>
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          <article className="overflow-hidden rounded-2xl bg-white shadow-[0_18px_42px_rgba(8,24,39,0.1)]">
            <div className="relative overflow-hidden bg-[#f0f4f8] h-52 w-full rounded-none">
              <Image src="/assets/crops/conference.jpeg" alt="Dedicated Desk plan" fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#078fa1] text-white">
                  <BriefcaseBusinessIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-xl font-black text-[#071225]">Dedicated Desk</h2>
                  <div className="mt-1 text-sm font-bold text-slate-500">
                    {"Starting from "}
                    ₹8,999
                    {" "}
                    /month
                  </div>
                </div>
              </div>
              <ul className="mt-5 grid grid-cols-2 gap-3">
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
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl bg-white shadow-[0_18px_42px_rgba(8,24,39,0.1)]">
            <div className="relative overflow-hidden bg-[#f0f4f8] h-52 w-full rounded-none">
              <Image src="/assets/hero/modern-reception.jpg" alt="Private Cabin plan" fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#ff7a00] text-white">
                  <Building2Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-xl font-black text-[#071225]">Private Cabin</h2>
                  <div className="mt-1 text-sm font-bold text-slate-500">
                    {"Starting from "}
                    ₹14,999
                    {" "}
                    /month
                  </div>
                </div>
              </div>
              <ul className="mt-5 grid grid-cols-2 gap-3">
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
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl bg-white shadow-[0_18px_42px_rgba(8,24,39,0.1)]">
            <div className="relative overflow-hidden bg-[#f0f4f8] h-52 w-full rounded-none">
              <Image src="/assets/services/meeting-rooms.jpg" alt="Meeting Room plan" fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#8c36c9] text-white">
                  <UsersRoundIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-xl font-black text-[#071225]">Meeting Room</h2>
                  <div className="mt-1 text-sm font-bold text-slate-500">
                    {"Starting from "}
                    ₹999
                    {" "}
                    /hour
                  </div>
                </div>
              </div>
              <ul className="mt-5 grid grid-cols-2 gap-3">
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
            </div>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
