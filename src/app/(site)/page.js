/* eslint-disable @next/next/no-img-element -- the brand-logo marquee uses plain <img>, as on the original site */
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, BriefcaseBusinessIcon, Building2Icon, CalendarDaysIcon, CheckIcon, MailIcon, PhoneIcon, ShieldCheckIcon, SparklesIcon, StarIcon, TrendingUpIcon, UsersRoundIcon } from "lucide-react";
import LeadForm from "@/components/site/LeadForm";
import WorkspaceVideo from "@/components/site/WorkspaceVideo";
import styles from "./home.module.css";
import MobileHeader from "@/components/site/MobileHeader";
import DesktopHeader from "@/components/site/DesktopHeader";
import Footer from "@/components/site/Footer";
import WhatsAppLink from "@/components/site/WhatsAppLink";

export const metadata = {
  title: "Office Space for Rent in Indore | TheOfficeOnRent",
  description: "Explore coworking spaces, private offices, commercial properties, showrooms, and flexible workspaces across Indore.",
};

export default function HomePage() {
  return (
    <>
      <MobileHeader />
      <DesktopHeader />
      <div className={`${styles.page}`}>
        <section className={`${styles.heroSection}`}>
          <div className={`${styles.heroBackground}`} aria-hidden="true">
            <Image src="/assets/contact/header-skyline.png" alt="City skyline" fill className="office-showcase-module__-bNK0W__heroBackgroundImage" />
            <div className={`${styles.heroBackgroundTint}`} />
          </div>
          <div className={`${styles.shell}`}>
            <div className={`${styles.heroHeading}`}>
              <h1>
                {"Find the Perfect "}
                <span className={`${styles.wordOrange}`}>Office Space</span>
                {" in Indore"}
              </h1>
              <p>Private Office - Showrooms - Coworking Space - Custom Spaces</p>
            </div>
            <div className={`${styles.statsRow}`}>
              <span>500+ Clients</span>
              <span>250+ Deals Closed</span>
              <span>Zero Brokerage options</span>
            </div>
            <div className={`${styles.heroBody}`}>
              <div className="bg-white rounded-2xl p-2 sm:p-4 shadow-2xl relative z-20">
                <LeadForm />
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.trustedSection}`}>
          <div className={`${styles.shell}`}>
            <h2>
              <span>Trusted by 500+ Businesses</span>
            </h2>
            <div className={`${styles.brandMarquee}`}>
              <div className={`${styles.brandTrack}`}>
                <div className={`${styles.brandRow}`}>
                  <img src="/assets/contact/brand-logos/byjus.png" alt="BYJU'S logo" className={`${styles.brandLogo} ${styles.byjusLogo}`} loading="lazy" />
                  <img src="/assets/contact/brand-logos/hdfc-bank.svg" alt="HDFC Bank logo" className={`${styles.brandLogo} ${styles.hdfcLogo}`} loading="lazy" />
                  <img src="/assets/contact/brand-logos/EspLogo.svg" alt="EFC logo" className={`${styles.brandLogo} undefined`} loading="lazy" />
                  <img src="/assets/contact/brand-logos/kslogo-ai.webp" alt="Ksolves logo" className={`${styles.brandLogo} undefined`} loading="lazy" />
                  <img src="/assets/contact/brand-logos/oyo.png" alt="OYO logo" className={`${styles.brandLogo} ${styles.oyoLogo}`} loading="lazy" />
                  <img src="/assets/contact/brand-logos/nippon-mutual-fund.png" alt="Nippon Mutual Fund logo" className={`${styles.brandLogo} undefined`} loading="lazy" />
                  <img src="/assets/contact/brand-logos/bandhan-mutual-fund.svg" alt="Bandhan Mutual Fund logo" className={`${styles.brandLogo} undefined`} loading="lazy" />
                  <img src="/assets/contact/brand-logos/ugro-finance.webp" alt="Ugro Finance logo" className={`${styles.brandLogo} undefined`} loading="lazy" />
                  <img src="/assets/contact/brand-logos/century-ply.png" alt="Century Ply logo" className={`${styles.brandLogo} undefined`} loading="lazy" />
                </div>
                <div className={`${styles.brandRow}`} aria-hidden="true">
                  <img src="/assets/contact/brand-logos/byjus.png" alt="BYJU'S logo" className={`${styles.brandLogo} ${styles.byjusLogo}`} loading="lazy" />
                  <img src="/assets/contact/brand-logos/hdfc-bank.svg" alt="HDFC Bank logo" className={`${styles.brandLogo} ${styles.hdfcLogo}`} loading="lazy" />
                  <img src="/assets/contact/brand-logos/EspLogo.svg" alt="EFC logo" className={`${styles.brandLogo} undefined`} loading="lazy" />
                  <img src="/assets/contact/brand-logos/kslogo-ai.webp" alt="Ksolves logo" className={`${styles.brandLogo} undefined`} loading="lazy" />
                  <img src="/assets/contact/brand-logos/oyo.png" alt="OYO logo" className={`${styles.brandLogo} ${styles.oyoLogo}`} loading="lazy" />
                  <img src="/assets/contact/brand-logos/nippon-mutual-fund.png" alt="Nippon Mutual Fund logo" className={`${styles.brandLogo} undefined`} loading="lazy" />
                  <img src="/assets/contact/brand-logos/bandhan-mutual-fund.svg" alt="Bandhan Mutual Fund logo" className={`${styles.brandLogo} undefined`} loading="lazy" />
                  <img src="/assets/contact/brand-logos/ugro-finance.webp" alt="Ugro Finance logo" className={`${styles.brandLogo} undefined`} loading="lazy" />
                  <img src="/assets/contact/brand-logos/century-ply.png" alt="Century Ply logo" className={`${styles.brandLogo} undefined`} loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <main className="overflow-x-clip bg-[#f7fbff] text-[#071225] lg:hidden" style={{ backgroundImage: "radial-gradient(circle at 18% 8%, rgba(187,228,255,0.38), transparent 30%), radial-gradient(circle at 82% 34%, rgba(255,228,199,0.34), transparent 30%)" }}>
        <section id="mobile-spaces" className="scroll-mt-24 px-5 py-8">
          <div className="mx-auto mb-6 max-w-sm text-center">
            <div className="mb-2 text-[10px] font-black uppercase tracking-normal text-[#078fa1]">Office Spaces, Showrooms & Coworking</div>
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#72c6d0]" />
              <h2 className="text-[21px] font-black leading-tight text-[#071225]">Find Your Perfect Office Space</h2>
              <span className="h-px w-8 bg-[#72c6d0]" />
            </div>
            <span className="mx-auto mt-2 block h-0.5 w-10 rounded-full bg-[#078fa1]" />
          </div>
          <div className="mx-auto grid max-w-md grid-cols-2 gap-4">
            <article className="overflow-hidden rounded-[18px] bg-white shadow-[0_14px_34px_rgba(8,24,39,0.12)]">
              <div className="relative overflow-hidden bg-[#f0f4f8] h-[122px] w-full rounded-none">
                <Image src="/assets/services/dedicated-desk.jpg" alt="Dedicated Desk workspace" fill className="object-cover" />
              </div>
              <div className="relative p-4 pt-7">
                <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full absolute -top-6 left-4 bg-[#078fa1] text-white shadow-lg">
                  <BriefcaseBusinessIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                </span>
                <h3 className="text-[15px] font-black text-[#071225]">Dedicated Desk</h3>
                <p className="mt-2 min-h-12 text-[12px] font-medium leading-5 text-slate-600">A personal desk in a shared workspace with all amenities.</p>
                <Link href="/plans" className="mt-3 inline-flex items-center gap-1 text-[12px] font-black text-[#078fa1]">
                  {"Explore Plans "}
                  <ArrowRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </article>
            <article className="overflow-hidden rounded-[18px] bg-white shadow-[0_14px_34px_rgba(8,24,39,0.12)]">
              <div className="relative overflow-hidden bg-[#f0f4f8] h-[122px] w-full rounded-none">
                <Image src="/assets/services/private-cabin.jpg" alt="Private Cabin workspace" fill className="object-cover" />
              </div>
              <div className="relative p-4 pt-7">
                <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full absolute -top-6 left-4 bg-[#ff7a00] text-white shadow-lg">
                  <Building2Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                </span>
                <h3 className="text-[15px] font-black text-[#071225]">Private Cabin</h3>
                <p className="mt-2 min-h-12 text-[12px] font-medium leading-5 text-slate-600">Lockable private cabins for you and your team.</p>
                <Link href="/plans" className="mt-3 inline-flex items-center gap-1 text-[12px] font-black text-[#078fa1]">
                  {"Explore Plans "}
                  <ArrowRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </article>
            <article className="overflow-hidden rounded-[18px] bg-white shadow-[0_14px_34px_rgba(8,24,39,0.12)]">
              <div className="relative overflow-hidden bg-[#f0f4f8] h-[122px] w-full rounded-none">
                <Image src="/assets/services/meeting-rooms.jpg" alt="Meeting Rooms workspace" fill className="object-cover" />
              </div>
              <div className="relative p-4 pt-7">
                <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full absolute -top-6 left-4 bg-[#9c49dd] text-white shadow-lg">
                  <UsersRoundIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                </span>
                <h3 className="text-[15px] font-black text-[#071225]">Meeting Rooms</h3>
                <p className="mt-2 min-h-12 text-[12px] font-medium leading-5 text-slate-600">Professional meeting rooms on hourly or daily basis.</p>
                <Link href="/plans" className="mt-3 inline-flex items-center gap-1 text-[12px] font-black text-[#078fa1]">
                  {"Explore Plans "}
                  <ArrowRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </article>
            <article className="overflow-hidden rounded-[18px] bg-white shadow-[0_14px_34px_rgba(8,24,39,0.12)]">
              <div className="relative overflow-hidden bg-[#f0f4f8] h-[122px] w-full rounded-none">
                <Image src="/assets/services/virtual-office.jpg" alt="Virtual Office workspace" fill className="object-cover" />
              </div>
              <div className="relative p-4 pt-7">
                <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full absolute -top-6 left-4 bg-[#78aa23] text-white shadow-lg">
                  <MailIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                </span>
                <h3 className="text-[15px] font-black text-[#071225]">Virtual Office</h3>
                <p className="mt-2 min-h-12 text-[12px] font-medium leading-5 text-slate-600">Build your business presence with a prestigious address.</p>
                <Link href="/plans" className="mt-3 inline-flex items-center gap-1 text-[12px] font-black text-[#078fa1]">
                  {"Explore Plans "}
                  <ArrowRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </article>
          </div>
        </section>
        <section id="mobile-plans" className="scroll-mt-24 px-5 pb-8 pt-6">
          <div className="mx-auto mb-6 max-w-sm text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#72c6d0]" />
              <h2 className="text-[21px] font-black leading-tight text-[#071225]">Choose How You Want To Work</h2>
              <span className="h-px w-8 bg-[#72c6d0]" />
            </div>
            <span className="mx-auto mt-2 block h-0.5 w-10 rounded-full bg-[#078fa1]" />
          </div>
          <div className="mx-auto grid max-w-md gap-4 pb-3">
            <article className="grid min-h-[168px] overflow-hidden rounded-[18px] bg-white shadow-[0_14px_35px_rgba(8,24,39,0.12)] grid-cols-[118px_1fr]">
              <div className="relative">
                <div className="relative overflow-hidden bg-[#f0f4f8] h-full min-h-[168px] w-full rounded-none">
                  <Image src="/assets/crops/conference.jpeg" alt="Dedicated Desk plan" fill className="object-cover" />
                </div>
                <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full absolute bottom-4 left-4 bg-[#078fa1] text-white shadow-lg">
                  <BriefcaseBusinessIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-[15px] font-black leading-5 text-[#071225]">Dedicated Desk</h3>
                <p className="mt-2 text-[10px] font-semibold uppercase text-slate-500">Starting From</p>
                <div className="mt-1 flex flex-wrap items-end gap-1 text-[#071225]">
                  <span className="text-[20px] font-black leading-none">₹8,999</span>
                  <span className="pb-0.5 text-[11px] font-bold text-slate-500">/month</span>
                </div>
                <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2">
                  <li className="flex gap-1.5 text-[10px] font-semibold leading-4 text-slate-600">
                    <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#078fa1]" aria-hidden="true" />
                    <span>Flexible Seating</span>
                  </li>
                  <li className="flex gap-1.5 text-[10px] font-semibold leading-4 text-slate-600">
                    <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#078fa1]" aria-hidden="true" />
                    <span>High Speed Wi-Fi</span>
                  </li>
                  <li className="flex gap-1.5 text-[10px] font-semibold leading-4 text-slate-600">
                    <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#078fa1]" aria-hidden="true" />
                    <span>24/7 Access</span>
                  </li>
                  <li className="flex gap-1.5 text-[10px] font-semibold leading-4 text-slate-600">
                    <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#078fa1]" aria-hidden="true" />
                    <span>All Amenities Included</span>
                  </li>
                </ul>
              </div>
            </article>
            <article className="grid min-h-[168px] overflow-hidden rounded-[18px] bg-white shadow-[0_14px_35px_rgba(8,24,39,0.12)] grid-cols-[118px_1fr]">
              <div className="relative">
                <div className="relative overflow-hidden bg-[#f0f4f8] h-full min-h-[168px] w-full rounded-none">
                  <Image src="/assets/hero/modern-reception.jpg" alt="Private Cabin plan" fill className="object-cover" />
                </div>
                <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full absolute bottom-4 left-4 bg-[#ff7a00] text-white shadow-lg">
                  <Building2Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-[15px] font-black leading-5 text-[#071225]">Private Cabin</h3>
                <p className="mt-2 text-[10px] font-semibold uppercase text-slate-500">Starting From</p>
                <div className="mt-1 flex flex-wrap items-end gap-1 text-[#071225]">
                  <span className="text-[20px] font-black leading-none">₹14,999</span>
                  <span className="pb-0.5 text-[11px] font-bold text-slate-500">/month</span>
                </div>
                <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2">
                  <li className="flex gap-1.5 text-[10px] font-semibold leading-4 text-slate-600">
                    <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#078fa1]" aria-hidden="true" />
                    <span>Private & Lockable Cabins</span>
                  </li>
                  <li className="flex gap-1.5 text-[10px] font-semibold leading-4 text-slate-600">
                    <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#078fa1]" aria-hidden="true" />
                    <span>Team Seating</span>
                  </li>
                  <li className="flex gap-1.5 text-[10px] font-semibold leading-4 text-slate-600">
                    <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#078fa1]" aria-hidden="true" />
                    <span>24/7 Access</span>
                  </li>
                  <li className="flex gap-1.5 text-[10px] font-semibold leading-4 text-slate-600">
                    <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#078fa1]" aria-hidden="true" />
                    <span>All Amenities Included</span>
                  </li>
                </ul>
              </div>
            </article>
            <article className="grid min-h-[168px] overflow-hidden rounded-[18px] bg-white shadow-[0_14px_35px_rgba(8,24,39,0.12)] grid-cols-[118px_1fr]">
              <div className="relative">
                <div className="relative overflow-hidden bg-[#f0f4f8] h-full min-h-[168px] w-full rounded-none">
                  <Image src="/assets/services/meeting-rooms.jpg" alt="Meeting Room plan" fill className="object-cover" />
                </div>
                <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full absolute bottom-4 left-4 bg-[#8c36c9] text-white shadow-lg">
                  <UsersRoundIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-[15px] font-black leading-5 text-[#071225]">Meeting Room</h3>
                <p className="mt-2 text-[10px] font-semibold uppercase text-slate-500">Starting From</p>
                <div className="mt-1 flex flex-wrap items-end gap-1 text-[#071225]">
                  <span className="text-[20px] font-black leading-none">₹999</span>
                  <span className="pb-0.5 text-[11px] font-bold text-slate-500">/hour</span>
                </div>
                <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2">
                  <li className="flex gap-1.5 text-[10px] font-semibold leading-4 text-slate-600">
                    <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#078fa1]" aria-hidden="true" />
                    <span>Hourly Booking</span>
                  </li>
                  <li className="flex gap-1.5 text-[10px] font-semibold leading-4 text-slate-600">
                    <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#078fa1]" aria-hidden="true" />
                    <span>AV Equipment</span>
                  </li>
                  <li className="flex gap-1.5 text-[10px] font-semibold leading-4 text-slate-600">
                    <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#078fa1]" aria-hidden="true" />
                    <span>High Speed Wi-Fi</span>
                  </li>
                  <li className="flex gap-1.5 text-[10px] font-semibold leading-4 text-slate-600">
                    <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#078fa1]" aria-hidden="true" />
                    <span>Refreshments</span>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </section>
        <section className="px-4 py-8">
          <div className="mx-auto mb-6 max-w-sm text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#72c6d0]" />
              <h2 className="text-[21px] font-black leading-tight text-[#071225]">Why Professionals Love Us</h2>
              <span className="h-px w-8 bg-[#72c6d0]" />
            </div>
            <span className="mx-auto mt-2 block h-0.5 w-10 rounded-full bg-[#078fa1]" />
          </div>
          <div className="mx-auto grid max-w-md grid-cols-4 gap-3">
            <div className="rounded-[16px] p-3 text-center bg-cyan-50 text-[#078fa1]">
              <UsersRoundIcon className="mx-auto h-7 w-7" strokeWidth={2.2} aria-hidden="true" />
              <div className="mt-2 text-[18px] font-black leading-none text-[#071225]">500+</div>
              <div className="mt-1 text-[10px] font-bold leading-4 text-[#071225]">Clients Served</div>
            </div>
            <div className="rounded-[16px] p-3 text-center bg-orange-50 text-[#ff7a00]">
              <TrendingUpIcon className="mx-auto h-7 w-7" strokeWidth={2.2} aria-hidden="true" />
              <div className="mt-2 text-[18px] font-black leading-none text-[#071225]">250+</div>
              <div className="mt-1 text-[10px] font-bold leading-4 text-[#071225]">Deals Closed</div>
            </div>
            <div className="rounded-[16px] p-3 text-center bg-purple-50 text-[#8c36c9]">
              <StarIcon className="mx-auto h-7 w-7" strokeWidth={2.2} aria-hidden="true" />
              <div className="mt-2 text-[18px] font-black leading-none text-[#071225]">4.9/5</div>
              <div className="mt-1 text-[10px] font-bold leading-4 text-[#071225]">Google Rating</div>
            </div>
            <div className="rounded-[16px] p-3 text-center bg-lime-50 text-[#78aa23]">
              <ShieldCheckIcon className="mx-auto h-7 w-7" strokeWidth={2.2} aria-hidden="true" />
              <div className="mt-2 text-[18px] font-black leading-none text-[#071225]">Zero</div>
              <div className="mt-1 text-[10px] font-bold leading-4 text-[#071225]">Brokerage Options</div>
            </div>
          </div>
        </section>
        <section className="px-4 py-4">
          <div className="mx-auto grid max-w-md grid-cols-[1.1fr_0.9fr] overflow-hidden rounded-[22px] border border-cyan-100 bg-[#e9f8fb] shadow-[0_14px_34px_rgba(8,24,39,0.09)]">
            <div className="p-5">
              <h2 className="text-[18px] font-black leading-tight text-[#071225]">Limited Premium Properties Available!</h2>
              <p className="mt-3 text-[11px] font-semibold leading-5 text-slate-600">Book your free consultation now before the best spaces are taken.</p>
              <Link href="/contact" className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-[10px] bg-[#078fa1] px-4 text-[11px] font-black text-white">
                {"Free Site Visit "}
                <ArrowRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
            <div className="relative overflow-hidden bg-[#f0f4f8] h-full min-h-48 rounded-l-[46px] rounded-r-none">
              <Image src="/assets/hero/modern-reception.jpg" alt="The Office On Rent reception" fill className="object-cover" />
            </div>
          </div>
        </section>
        <div className="mx-4 grid max-w-md grid-cols-3 divide-x divide-slate-200 rounded-[18px] border border-cyan-100 bg-[#f1fbfd] px-2 py-4 text-center">
          <div className="px-2">
            <UsersRoundIcon className="mx-auto h-6 w-6 text-[#078fa1]" aria-hidden="true" />
            <div className="mt-2 text-[10px] font-black leading-4 text-[#071225]">Prime Locations</div>
          </div>
          <div className="px-2">
            <CalendarDaysIcon className="mx-auto h-6 w-6 text-[#078fa1]" aria-hidden="true" />
            <div className="mt-2 text-[10px] font-black leading-4 text-[#071225]">Easy Booking</div>
          </div>
          <div className="px-2">
            <PhoneIcon className="mx-auto h-6 w-6 text-[#078fa1]" aria-hidden="true" />
            <div className="mt-2 text-[10px] font-black leading-4 text-[#071225]">Dedicated Support</div>
          </div>
        </div>
        <section className="border-t border-cyan-100 px-3 pb-16 pt-10 sm:px-5 sm:pt-12 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase text-[#078fa1]">
                <span className="h-0.5 w-6 rounded-full bg-[#ff7a00]" />
                Built for speed, trust and long-term business value
              </div>
              <h2 className="text-3xl font-black leading-tight text-[#071225] sm:text-4xl">Why Choose Us?</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <article className="flex min-h-24 items-start gap-3 rounded-xl border border-slate-100 bg-white px-4 py-4 shadow-sm transition hover:shadow-md">
                <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-[#078fa1] shrink-0 !h-8 !w-8">
                  <ShieldCheckIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-black leading-tight text-[#071225]">Zero-Brokerage Options</h3>
                  <p className="mt-1.5 text-xs font-semibold leading-5 text-slate-600">Explore eligible coworking and long-term lease options with clear commercial terms.</p>
                </div>
              </article>
              <article className="flex min-h-24 items-start gap-3 rounded-xl border border-slate-100 bg-white px-4 py-4 shadow-sm transition hover:shadow-md">
                <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#ff7a00] shrink-0 !h-8 !w-8">
                  <BriefcaseBusinessIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-black leading-tight text-[#071225]">Leasing Services</h3>
                  <p className="mt-1.5 text-xs font-semibold leading-5 text-slate-600">Get support with shortlisting, site visits, negotiation, and lease coordination.</p>
                </div>
              </article>
              <article className="flex min-h-24 items-start gap-3 rounded-xl border border-slate-100 bg-white px-4 py-4 shadow-sm transition hover:shadow-md">
                <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-lime-100 text-[#77a912] shrink-0 !h-8 !w-8">
                  <UsersRoundIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-black leading-tight text-[#071225]">Co-Working Alliance</h3>
                  <p className="mt-1.5 text-xs font-semibold leading-5 text-slate-600">Compare flexible desks, private cabins, and plug-and-play offices across partner spaces.</p>
                </div>
              </article>
              <article className="flex min-h-24 items-start gap-3 rounded-xl border border-slate-100 bg-white px-4 py-4 shadow-sm transition hover:shadow-md">
                <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[#1a6fc4] shrink-0 !h-8 !w-8">
                  <TrendingUpIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-black leading-tight text-[#071225]">Commercial Investments</h3>
                  <p className="mt-1.5 text-xs font-semibold leading-5 text-slate-600">Evaluate commercial properties by location, access, use case, and long-term suitability.</p>
                </div>
              </article>
              <article className="flex min-h-24 items-start gap-3 rounded-xl border border-slate-100 bg-white px-4 py-4 shadow-sm transition hover:shadow-md">
                <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-purple-100 text-[#9c49dd] shrink-0 !h-8 !w-8">
                  <Building2Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-black leading-tight text-[#071225]">Property Management</h3>
                  <p className="mt-1.5 text-xs font-semibold leading-5 text-slate-600">Support for tenant coordination, routine upkeep, and day-to-day property operations.</p>
                </div>
              </article>
              <article className="flex min-h-24 items-start gap-3 rounded-xl border border-slate-100 bg-white px-4 py-4 shadow-sm transition hover:shadow-md">
                <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-pink-100 text-[#d946a8] shrink-0 !h-8 !w-8">
                  <SparklesIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-black leading-tight text-[#071225]">Property Development</h3>
                  <p className="mt-1.5 text-xs font-semibold leading-5 text-slate-600">Guidance for planning commercial spaces around practical business and tenant requirements.</p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="px-3 pb-16 sm:px-5 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-black leading-tight text-[#071225] sm:text-4xl">Client Testimonials</h2>
              <p className="mt-3 text-sm font-semibold text-slate-600">Feedback from businesses we helped with offices, showrooms and coworking spaces.</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
              <aside className="flex flex-col items-center justify-center rounded-2xl bg-[#071225] p-8 text-white shadow-[0_20px_50px_rgba(8,24,39,0.18)]">
                <div className="text-7xl font-black text-white">4.9</div>
                <div className="mt-2 flex gap-1 text-[#ff7a00]">
                  <StarIcon className="h-6 w-6 fill-current" aria-hidden="true" />
                  <StarIcon className="h-6 w-6 fill-current" aria-hidden="true" />
                  <StarIcon className="h-6 w-6 fill-current" aria-hidden="true" />
                  <StarIcon className="h-6 w-6 fill-current" aria-hidden="true" />
                  <StarIcon className="h-6 w-6 fill-current" aria-hidden="true" />
                </div>
                <p className="mt-4 text-center text-sm font-semibold leading-6 text-white/80">Trusted by growing teams for fast shortlisting, strong negotiation and hassle-free closure.</p>
              </aside>
              <div className="grid gap-4 sm:grid-cols-3">
                <article className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-[0_14px_34px_rgba(8,24,39,0.09)]">
                  <p className="text-sm font-semibold leading-6 text-slate-700">
                    “
                    Nice experience, supporting team. Best vibes for corporate startups; charges are lower compared to other co-working spaces.
                    ”
                  </p>
                  <div className="mt-4">
                    <div className="flex gap-0.5 text-[#ff7a00]">
                      <StarIcon className="h-4 w-4 fill-current" aria-hidden="true" />
                      <StarIcon className="h-4 w-4 fill-current" aria-hidden="true" />
                      <StarIcon className="h-4 w-4 fill-current" aria-hidden="true" />
                      <StarIcon className="h-4 w-4 fill-current" aria-hidden="true" />
                      <StarIcon className="h-4 w-4 fill-current" aria-hidden="true" />
                    </div>
                    <p className="mt-1 text-sm font-black text-[#071225]">Gagan Gupta</p>
                  </div>
                </article>
                <article className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-[0_14px_34px_rgba(8,24,39,0.09)]">
                  <p className="text-sm font-semibold leading-6 text-slate-700">
                    “
                    {"I've been working at The Office on Rent for more than 6 months, and it has been a game-changer for my productivity. The high-speed internet is incredibly reliable, and the ergonomic chairs make long hours much easier."}
                    ”
                  </p>
                  <div className="mt-4">
                    <div className="flex gap-0.5 text-[#ff7a00]">
                      <StarIcon className="h-4 w-4 fill-current" aria-hidden="true" />
                      <StarIcon className="h-4 w-4 fill-current" aria-hidden="true" />
                      <StarIcon className="h-4 w-4 fill-current" aria-hidden="true" />
                      <StarIcon className="h-4 w-4 fill-current" aria-hidden="true" />
                      <StarIcon className="h-4 w-4 fill-current" aria-hidden="true" />
                    </div>
                    <p className="mt-1 text-sm font-black text-[#071225]">All In One Production (Harsh Sharma)</p>
                  </div>
                </article>
                <article className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-[0_14px_34px_rgba(8,24,39,0.09)]">
                  <p className="text-sm font-semibold leading-6 text-slate-700">
                    “
                    A clean, comfortable, and well-organized workspace that supports productivity and focus. Natural light and minimal distractions make it ideal for both solo work and virtual meetings.
                    ”
                  </p>
                  <div className="mt-4">
                    <div className="flex gap-0.5 text-[#ff7a00]">
                      <StarIcon className="h-4 w-4 fill-current" aria-hidden="true" />
                      <StarIcon className="h-4 w-4 fill-current" aria-hidden="true" />
                      <StarIcon className="h-4 w-4 fill-current" aria-hidden="true" />
                      <StarIcon className="h-4 w-4 fill-current" aria-hidden="true" />
                      <StarIcon className="h-4 w-4 fill-current" aria-hidden="true" />
                    </div>
                    <p className="mt-1 text-sm font-black text-[#071225]">Harsh Singh</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section id="mobile-contact" className="mt-6 scroll-mt-24 rounded-t-[28px] bg-[#078fa1] px-4 py-8 text-white">
          <div className="mx-auto max-w-md">
            <div className="mb-5 text-center">
              <h2 className="text-[22px] font-black">Get a Free Consultation</h2>
              <p className="mt-2 text-[13px] font-semibold text-white/90">Share your requirements and our team will call you back with matching spaces.</p>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold">Free Site Visit</span>
                <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold">Investment Advice</span>
                <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold">Zero Brokerage Options</span>
              </div>
            </div>
            <LeadForm variant="mobile" />
          </div>
        </section>
      </main>
      <main className="hidden overflow-x-clip bg-[#f7fbff] lg:block">
        <div className="bg-[#ff7a00] px-4 py-4 text-center text-sm font-black text-white sm:text-base">Limited Premium Properties Available — Book Your Free Consultation Now!</div>
        <section id="spaces" className="scroll-mt-24 px-3 py-12 sm:px-5 sm:py-16 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 sm:gap-8 lg:gap-8 lg:grid-cols-[0.9fr_2.1fr]">
            <div className="flex flex-col justify-center">
              <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase text-[#078fa1]">
                <span className="h-0.5 w-6 rounded-full bg-[#ff7a00]" />
                Office, Showrooms & Coworking Spaces
              </div>
              <h2 className="text-2xl sm:text-4xl font-black leading-tight text-[#071225] lg:text-5xl">Find Your Perfect Space in Indore</h2>
            </div>
            <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
              <article className="group overflow-hidden rounded-xl sm:rounded-2xl border border-slate-100 border-b-4 border-[#078fa1] bg-white shadow-[0_10px_25px_rgba(8,24,39,0.08)] sm:shadow-[0_18px_42px_rgba(8,24,39,0.1)] transition hover:-translate-y-1">
                <div className="relative overflow-hidden bg-[#f0f4f8] h-24 sm:h-28 w-full rounded-none">
                  <Image src="/assets/services/dedicated-desk.jpg" alt="Dedicated Desk workspace" fill className="object-cover" />
                </div>
                <div className="relative p-4 sm:p-5 pt-7 sm:pt-8">
                  <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full absolute -top-7 sm:-top-8 left-4 sm:left-5 bg-[#078fa1] text-white shadow-lg">
                    <BriefcaseBusinessIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-[#071225]">Dedicated Desk</h3>
                  <p className="mt-2 sm:mt-3 min-h-14 sm:min-h-16 text-xs sm:text-sm font-medium leading-5 sm:leading-6 text-slate-600">A personal desk in a shared workspace with all amenities.</p>
                  <Link href="/contact" className="mt-3 sm:mt-4 inline-flex items-center gap-2 text-xs sm:text-sm font-black text-[#078fa1]">
                    {"Explore "}
                    <ArrowRightIcon className="h-3 w-3 sm:h-4 sm:w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </article>
              <article className="group overflow-hidden rounded-xl sm:rounded-2xl border border-slate-100 border-b-4 border-[#ff7a00] bg-white shadow-[0_10px_25px_rgba(8,24,39,0.08)] sm:shadow-[0_18px_42px_rgba(8,24,39,0.1)] transition hover:-translate-y-1">
                <div className="relative overflow-hidden bg-[#f0f4f8] h-24 sm:h-28 w-full rounded-none">
                  <Image src="/assets/services/private-cabin.jpg" alt="Private Cabin workspace" fill className="object-cover" />
                </div>
                <div className="relative p-4 sm:p-5 pt-7 sm:pt-8">
                  <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full absolute -top-7 sm:-top-8 left-4 sm:left-5 bg-[#ff7a00] text-white shadow-lg">
                    <Building2Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-[#071225]">Private Cabin</h3>
                  <p className="mt-2 sm:mt-3 min-h-14 sm:min-h-16 text-xs sm:text-sm font-medium leading-5 sm:leading-6 text-slate-600">Lockable private cabins for you and your team.</p>
                  <Link href="/contact" className="mt-3 sm:mt-4 inline-flex items-center gap-2 text-xs sm:text-sm font-black text-[#078fa1]">
                    {"Explore "}
                    <ArrowRightIcon className="h-3 w-3 sm:h-4 sm:w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </article>
              <article className="group overflow-hidden rounded-xl sm:rounded-2xl border border-slate-100 border-b-4 border-[#9c49dd] bg-white shadow-[0_10px_25px_rgba(8,24,39,0.08)] sm:shadow-[0_18px_42px_rgba(8,24,39,0.1)] transition hover:-translate-y-1">
                <div className="relative overflow-hidden bg-[#f0f4f8] h-24 sm:h-28 w-full rounded-none">
                  <Image src="/assets/services/meeting-rooms.jpg" alt="Meeting Rooms workspace" fill className="object-cover" />
                </div>
                <div className="relative p-4 sm:p-5 pt-7 sm:pt-8">
                  <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full absolute -top-7 sm:-top-8 left-4 sm:left-5 bg-[#9c49dd] text-white shadow-lg">
                    <UsersRoundIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-[#071225]">Meeting Rooms</h3>
                  <p className="mt-2 sm:mt-3 min-h-14 sm:min-h-16 text-xs sm:text-sm font-medium leading-5 sm:leading-6 text-slate-600">Professional meeting rooms on hourly or daily basis.</p>
                  <Link href="/contact" className="mt-3 sm:mt-4 inline-flex items-center gap-2 text-xs sm:text-sm font-black text-[#078fa1]">
                    {"Explore "}
                    <ArrowRightIcon className="h-3 w-3 sm:h-4 sm:w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </article>
              <article className="group overflow-hidden rounded-xl sm:rounded-2xl border border-slate-100 border-b-4 border-[#78aa23] bg-white shadow-[0_10px_25px_rgba(8,24,39,0.08)] sm:shadow-[0_18px_42px_rgba(8,24,39,0.1)] transition hover:-translate-y-1">
                <div className="relative overflow-hidden bg-[#f0f4f8] h-24 sm:h-28 w-full rounded-none">
                  <Image src="/assets/services/virtual-office.jpg" alt="Virtual Office workspace" fill className="object-cover" />
                </div>
                <div className="relative p-4 sm:p-5 pt-7 sm:pt-8">
                  <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full absolute -top-7 sm:-top-8 left-4 sm:left-5 bg-[#78aa23] text-white shadow-lg">
                    <MailIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-[#071225]">Virtual Office</h3>
                  <p className="mt-2 sm:mt-3 min-h-14 sm:min-h-16 text-xs sm:text-sm font-medium leading-5 sm:leading-6 text-slate-600">Build your business presence with a prestigious address.</p>
                  <Link href="/contact" className="mt-3 sm:mt-4 inline-flex items-center gap-2 text-xs sm:text-sm font-black text-[#078fa1]">
                    {"Explore "}
                    <ArrowRightIcon className="h-3 w-3 sm:h-4 sm:w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section id="gallery" className="scroll-mt-24 px-3 pb-12 sm:px-5 sm:pb-16 lg:px-8">
          <div className="mx-auto max-w-5xl items-center gap-8 sm:gap-12">
            <div className="grid gap-4 sm:gap-5 sm:grid-cols-[1.8fr_0.9fr]">
              <WorkspaceVideo src="/assets/gallery/workspace-tour.mp4" label="Workspace tour video" className="h-[240px] sm:h-[360px] w-full rounded-2xl sm:rounded-3xl shadow-[0_12px_35px_rgba(8,24,39,0.1)] sm:shadow-[0_20px_55px_rgba(8,24,39,0.14)]" poster="/assets/gallery/open-cubicles.jpg" />
              <div className="grid gap-4 sm:gap-5">
                <div className="relative overflow-hidden bg-[#f0f4f8] h-24 sm:h-[106px] rounded-xl sm:rounded-2xl">
                  <Image src="/assets/gallery/open-cubicles.jpg" alt="Open coworking cubicles" fill className="object-cover" />
                </div>
                <div className="relative overflow-hidden bg-[#f0f4f8] h-24 sm:h-[106px] rounded-xl sm:rounded-2xl">
                  <Image src="/assets/gallery/private-suite.jpg" alt="Private office suite" fill className="object-cover" />
                </div>
                <div className="relative overflow-hidden bg-[#f0f4f8] h-24 sm:h-[106px] rounded-xl sm:rounded-2xl">
                  <Image src="/assets/gallery/office-lounge.jpg" alt="Sunlit office lounge" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-3 pb-16 sm:px-5 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase text-[#078fa1]">
              <span className="h-0.5 w-6 rounded-full bg-[#ff7a00]" />
              Plans built around your workday
            </div>
            <div className="flex items-end justify-between gap-6">
              <h2 className="max-w-xl text-4xl font-black leading-tight text-[#071225] lg:text-5xl">Choose How You Want To Work</h2>
              <p className="max-w-md text-sm font-semibold leading-6 text-slate-600">Dedicated desks, private cabins, and meeting rooms with the flexibility to scale whenever your team needs more room.</p>
            </div>
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_18px_42px_rgba(8,24,39,0.1)] transition hover:-translate-y-1">
                <div className="relative overflow-hidden bg-[#f0f4f8] h-48 w-full rounded-none">
                  <Image src="/assets/crops/conference.jpeg" alt="Dedicated Desk plan" fill className="object-cover" />
                </div>
                <div className="relative flex flex-1 flex-col p-6 pt-9">
                  <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full absolute -top-7 left-6 bg-[#078fa1] text-white shadow-lg">
                    <BriefcaseBusinessIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-black text-[#071225] lg:min-h-7">Dedicated Desk</h3>
                  <p className="mt-3 text-xs font-bold uppercase text-slate-500">Starting From</p>
                  <div className="mt-1 flex items-end gap-2 text-[#071225]">
                    <span className="text-3xl font-black leading-none">₹8,999</span>
                    <span className="pb-1 text-sm font-bold text-slate-500">/month</span>
                  </div>
                  <ul className="mt-5 grid grid-cols-2 gap-3 lg:min-h-16">
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
              <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_18px_42px_rgba(8,24,39,0.1)] transition hover:-translate-y-1">
                <div className="relative overflow-hidden bg-[#f0f4f8] h-48 w-full rounded-none">
                  <Image src="/assets/hero/modern-reception.jpg" alt="Private Cabin plan" fill className="object-cover" />
                </div>
                <div className="relative flex flex-1 flex-col p-6 pt-9">
                  <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full absolute -top-7 left-6 bg-[#ff7a00] text-white shadow-lg">
                    <Building2Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-black text-[#071225] lg:min-h-7">Private Cabin</h3>
                  <p className="mt-3 text-xs font-bold uppercase text-slate-500">Starting From</p>
                  <div className="mt-1 flex items-end gap-2 text-[#071225]">
                    <span className="text-3xl font-black leading-none">₹14,999</span>
                    <span className="pb-1 text-sm font-bold text-slate-500">/month</span>
                  </div>
                  <ul className="mt-5 grid grid-cols-2 gap-3 lg:min-h-16">
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
              <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_18px_42px_rgba(8,24,39,0.1)] transition hover:-translate-y-1">
                <div className="relative overflow-hidden bg-[#f0f4f8] h-48 w-full rounded-none">
                  <Image src="/assets/services/meeting-rooms.jpg" alt="Meeting Room plan" fill className="object-cover" />
                </div>
                <div className="relative flex flex-1 flex-col p-6 pt-9">
                  <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full absolute -top-7 left-6 bg-[#8c36c9] text-white shadow-lg">
                    <UsersRoundIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-black text-[#071225] lg:min-h-7">Meeting Room</h3>
                  <p className="mt-3 text-xs font-bold uppercase text-slate-500">Starting From</p>
                  <div className="mt-1 flex items-end gap-2 text-[#071225]">
                    <span className="text-3xl font-black leading-none">₹999</span>
                    <span className="pb-1 text-sm font-bold text-slate-500">/hour</span>
                  </div>
                  <ul className="mt-5 grid grid-cols-2 gap-3 lg:min-h-16">
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
          </div>
        </section>
        <section id="about-us" className="scroll-mt-24 px-3 pb-16 sm:px-5 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-3xl bg-white p-8 shadow-[0_18px_55px_rgba(8,24,39,0.08)]">
            <div className="mb-8 text-center">
              <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase text-[#078fa1]">
                <span className="h-0.5 w-6 rounded-full bg-[#ff7a00]" />
                Trusted by growing teams
              </div>
              <h2 className="text-4xl font-black text-[#071225]">500+ Businesses. 250+ Deals. Zero Brokerage Options.</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-4">
              <div className="rounded-2xl p-6 text-center bg-cyan-50 text-[#078fa1]">
                <UsersRoundIcon className="mx-auto h-10 w-10" strokeWidth={2.2} aria-hidden="true" />
                <div className="mt-4 text-3xl font-black leading-none text-[#071225]">500+</div>
                <div className="mt-2 text-sm font-bold text-[#071225]">Clients Served</div>
              </div>
              <div className="rounded-2xl p-6 text-center bg-orange-50 text-[#ff7a00]">
                <TrendingUpIcon className="mx-auto h-10 w-10" strokeWidth={2.2} aria-hidden="true" />
                <div className="mt-4 text-3xl font-black leading-none text-[#071225]">250+</div>
                <div className="mt-2 text-sm font-bold text-[#071225]">Deals Closed</div>
              </div>
              <div className="rounded-2xl p-6 text-center bg-purple-50 text-[#8c36c9]">
                <StarIcon className="mx-auto h-10 w-10" strokeWidth={2.2} aria-hidden="true" />
                <div className="mt-4 text-3xl font-black leading-none text-[#071225]">4.9/5</div>
                <div className="mt-2 text-sm font-bold text-[#071225]">Google Rating</div>
              </div>
              <div className="rounded-2xl p-6 text-center bg-lime-50 text-[#78aa23]">
                <ShieldCheckIcon className="mx-auto h-10 w-10" strokeWidth={2.2} aria-hidden="true" />
                <div className="mt-4 text-3xl font-black leading-none text-[#071225]">Zero</div>
                <div className="mt-2 text-sm font-bold text-[#071225]">Brokerage Options</div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-3 pb-16 sm:px-5 lg:px-8">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl border border-cyan-100 bg-[#e9f8fb] shadow-[0_18px_55px_rgba(8,24,39,0.08)] lg:grid-cols-[0.95fr_1.05fr]">
            <div className="flex flex-col justify-center p-10">
              <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase text-[#078fa1]">
                <span className="h-0.5 w-6 rounded-full bg-[#ff7a00]" />
                Limited availability
              </div>
              <h2 className="max-w-lg text-4xl font-black leading-tight text-[#071225]">Only A Few Premium Spaces Available Each Month!</h2>
              <p className="mt-5 max-w-md text-base font-semibold leading-7 text-slate-600">High demand. Limited availability. Book your tour before the best desks, cabins, and meeting slots fill up.</p>
              <Link href="/contact" className="mt-7 inline-flex min-h-12 w-fit items-center gap-2 rounded-xl bg-[#078fa1] px-6 text-sm font-black text-white shadow-[0_16px_32px_rgba(7,143,161,0.22)]">
                {"Book Your Tour Now "}
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="relative overflow-hidden bg-[#f0f4f8] h-[380px] rounded-none">
              <Image src="/assets/hero/modern-reception.jpg" alt="TheOfficeOnRent reception" fill className="object-cover" />
            </div>
          </div>
        </section>
        <section id="locations" className="scroll-mt-24 px-3 pb-16 sm:px-5 lg:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-slate-200 rounded-2xl border border-cyan-100 bg-[#f1fbfd] px-6 py-8 text-center">
            <div className="px-4">
              <UsersRoundIcon className="mx-auto h-9 w-9 text-[#078fa1]" aria-hidden="true" />
              <div className="mt-3 text-base font-black leading-5 text-[#071225]">Prime Locations</div>
            </div>
            <div className="px-4">
              <CalendarDaysIcon className="mx-auto h-9 w-9 text-[#078fa1]" aria-hidden="true" />
              <div className="mt-3 text-base font-black leading-5 text-[#071225]">Easy Booking</div>
            </div>
            <div className="px-4">
              <PhoneIcon className="mx-auto h-9 w-9 text-[#078fa1]" aria-hidden="true" />
              <div className="mt-3 text-base font-black leading-5 text-[#071225]">Dedicated Support</div>
            </div>
          </div>
        </section>
        <section className="border-t border-cyan-100 px-3 pb-16 pt-10 sm:px-5 sm:pt-12 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase text-[#078fa1]">
                <span className="h-0.5 w-6 rounded-full bg-[#ff7a00]" />
                Built for speed, trust and long-term business value
              </div>
              <h2 className="text-3xl font-black leading-tight text-[#071225] sm:text-4xl">Why Choose Us?</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <article className="flex min-h-24 items-start gap-3 rounded-xl border border-slate-100 bg-white px-4 py-4 shadow-sm transition hover:shadow-md">
                <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-[#078fa1] shrink-0 !h-8 !w-8">
                  <ShieldCheckIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-black leading-tight text-[#071225]">Zero-Brokerage Options</h3>
                  <p className="mt-1.5 text-xs font-semibold leading-5 text-slate-600">Explore eligible coworking and long-term lease options with clear commercial terms.</p>
                </div>
              </article>
              <article className="flex min-h-24 items-start gap-3 rounded-xl border border-slate-100 bg-white px-4 py-4 shadow-sm transition hover:shadow-md">
                <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#ff7a00] shrink-0 !h-8 !w-8">
                  <BriefcaseBusinessIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-black leading-tight text-[#071225]">Leasing Services</h3>
                  <p className="mt-1.5 text-xs font-semibold leading-5 text-slate-600">Get support with shortlisting, site visits, negotiation, and lease coordination.</p>
                </div>
              </article>
              <article className="flex min-h-24 items-start gap-3 rounded-xl border border-slate-100 bg-white px-4 py-4 shadow-sm transition hover:shadow-md">
                <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-lime-100 text-[#77a912] shrink-0 !h-8 !w-8">
                  <UsersRoundIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-black leading-tight text-[#071225]">Co-Working Alliance</h3>
                  <p className="mt-1.5 text-xs font-semibold leading-5 text-slate-600">Compare flexible desks, private cabins, and plug-and-play offices across partner spaces.</p>
                </div>
              </article>
              <article className="flex min-h-24 items-start gap-3 rounded-xl border border-slate-100 bg-white px-4 py-4 shadow-sm transition hover:shadow-md">
                <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[#1a6fc4] shrink-0 !h-8 !w-8">
                  <TrendingUpIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-black leading-tight text-[#071225]">Commercial Investments</h3>
                  <p className="mt-1.5 text-xs font-semibold leading-5 text-slate-600">Evaluate commercial properties by location, access, use case, and long-term suitability.</p>
                </div>
              </article>
              <article className="flex min-h-24 items-start gap-3 rounded-xl border border-slate-100 bg-white px-4 py-4 shadow-sm transition hover:shadow-md">
                <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-purple-100 text-[#9c49dd] shrink-0 !h-8 !w-8">
                  <Building2Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-black leading-tight text-[#071225]">Property Management</h3>
                  <p className="mt-1.5 text-xs font-semibold leading-5 text-slate-600">Support for tenant coordination, routine upkeep, and day-to-day property operations.</p>
                </div>
              </article>
              <article className="flex min-h-24 items-start gap-3 rounded-xl border border-slate-100 bg-white px-4 py-4 shadow-sm transition hover:shadow-md">
                <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-pink-100 text-[#d946a8] shrink-0 !h-8 !w-8">
                  <SparklesIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-black leading-tight text-[#071225]">Property Development</h3>
                  <p className="mt-1.5 text-xs font-semibold leading-5 text-slate-600">Guidance for planning commercial spaces around practical business and tenant requirements.</p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="px-3 pb-16 sm:px-5 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-black leading-tight text-[#071225] sm:text-4xl">Client Testimonials</h2>
              <p className="mt-3 text-sm font-semibold text-slate-600">Feedback from businesses we helped with offices, showrooms and coworking spaces.</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
              <aside className="flex flex-col items-center justify-center rounded-2xl bg-[#071225] p-8 text-white shadow-[0_20px_50px_rgba(8,24,39,0.18)]">
                <div className="text-7xl font-black text-white">4.9</div>
                <div className="mt-2 flex gap-1 text-[#ff7a00]">
                  <StarIcon className="h-6 w-6 fill-current" aria-hidden="true" />
                  <StarIcon className="h-6 w-6 fill-current" aria-hidden="true" />
                  <StarIcon className="h-6 w-6 fill-current" aria-hidden="true" />
                  <StarIcon className="h-6 w-6 fill-current" aria-hidden="true" />
                  <StarIcon className="h-6 w-6 fill-current" aria-hidden="true" />
                </div>
                <p className="mt-4 text-center text-sm font-semibold leading-6 text-white/80">Trusted by growing teams for fast shortlisting, strong negotiation and hassle-free closure.</p>
              </aside>
              <div className="grid gap-4 sm:grid-cols-3">
                <article className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-[0_14px_34px_rgba(8,24,39,0.09)]">
                  <p className="text-sm font-semibold leading-6 text-slate-700">
                    “
                    Nice experience, supporting team. Best vibes for corporate startups; charges are lower compared to other co-working spaces.
                    ”
                  </p>
                  <div className="mt-4">
                    <div className="flex gap-0.5 text-[#ff7a00]">
                      <StarIcon className="h-4 w-4 fill-current" aria-hidden="true" />
                      <StarIcon className="h-4 w-4 fill-current" aria-hidden="true" />
                      <StarIcon className="h-4 w-4 fill-current" aria-hidden="true" />
                      <StarIcon className="h-4 w-4 fill-current" aria-hidden="true" />
                      <StarIcon className="h-4 w-4 fill-current" aria-hidden="true" />
                    </div>
                    <p className="mt-1 text-sm font-black text-[#071225]">Gagan Gupta</p>
                  </div>
                </article>
                <article className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-[0_14px_34px_rgba(8,24,39,0.09)]">
                  <p className="text-sm font-semibold leading-6 text-slate-700">
                    “
                    {"I've been working at The Office on Rent for more than 6 months, and it has been a game-changer for my productivity. The high-speed internet is incredibly reliable, and the ergonomic chairs make long hours much easier."}
                    ”
                  </p>
                  <div className="mt-4">
                    <div className="flex gap-0.5 text-[#ff7a00]">
                      <StarIcon className="h-4 w-4 fill-current" aria-hidden="true" />
                      <StarIcon className="h-4 w-4 fill-current" aria-hidden="true" />
                      <StarIcon className="h-4 w-4 fill-current" aria-hidden="true" />
                      <StarIcon className="h-4 w-4 fill-current" aria-hidden="true" />
                      <StarIcon className="h-4 w-4 fill-current" aria-hidden="true" />
                    </div>
                    <p className="mt-1 text-sm font-black text-[#071225]">All In One Production (Harsh Sharma)</p>
                  </div>
                </article>
                <article className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-[0_14px_34px_rgba(8,24,39,0.09)]">
                  <p className="text-sm font-semibold leading-6 text-slate-700">
                    “
                    A clean, comfortable, and well-organized workspace that supports productivity and focus. Natural light and minimal distractions make it ideal for both solo work and virtual meetings.
                    ”
                  </p>
                  <div className="mt-4">
                    <div className="flex gap-0.5 text-[#ff7a00]">
                      <StarIcon className="h-4 w-4 fill-current" aria-hidden="true" />
                      <StarIcon className="h-4 w-4 fill-current" aria-hidden="true" />
                      <StarIcon className="h-4 w-4 fill-current" aria-hidden="true" />
                      <StarIcon className="h-4 w-4 fill-current" aria-hidden="true" />
                      <StarIcon className="h-4 w-4 fill-current" aria-hidden="true" />
                    </div>
                    <p className="mt-1 text-sm font-black text-[#071225]">Harsh Singh</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section className="px-3 pb-20 sm:px-5 sm:pb-10 lg:px-8">
          <div id="contact" className="mx-auto grid max-w-7xl scroll-mt-24 gap-8 overflow-hidden rounded-2xl bg-[#078fa1] px-4 py-6 text-white shadow-[0_16px_40px_rgba(8,24,39,0.12)] sm:rounded-3xl sm:px-6 sm:py-8 sm:shadow-[0_24px_60px_rgba(8,24,39,0.16)] md:grid-cols-[0.9fr_1.1fr] md:items-center md:px-12">
            <div className="flex items-start gap-4 sm:gap-6">
              <Building2Icon className="hidden h-16 w-16 shrink-0 text-white/35 sm:h-24 sm:w-24 md:block" strokeWidth={1.2} aria-hidden="true" />
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black">Get a Free Consultation</h2>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base font-semibold text-white/90">{"Share your requirements and we'll help you find the perfect office space, showroom, or coworking space in Indore."}</p>
                <div className="mt-6 grid max-w-md gap-3 text-sm font-bold text-white/90">
                  <div className="flex items-center gap-3">
                    <CheckIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
                    <span>Free Site Visit — no obligation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
                    <span>Investment Advice from experts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
                    <span>Zero Brokerage Options available</span>
                  </div>
                </div>
              </div>
            </div>
            <LeadForm />
          </div>
        </section>
        <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
          <div className="absolute inset-0">
            <div className="relative overflow-hidden bg-[#f0f4f8] h-full w-full object-cover rounded-none">
              <Image src="/assets/hero/modern-reception.jpg" alt="Office background" fill className="object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#071225]/75 via-[#071225]/50 to-[#078fa1]/20" />
            <div className="absolute inset-0 bg-white/5 backdrop-blur-[6px]" />
            <div className="absolute -left-[10%] top-[20%] h-[40%] w-[30%] rounded-full bg-[#078fa1]/40 blur-[120px]" />
            <div className="absolute -right-[10%] bottom-[10%] h-[40%] w-[30%] rounded-full bg-[#ff7a00]/30 blur-[120px]" />
          </div>
          <div className="relative mx-auto max-w-5xl text-center">
            <h2 className="mb-8 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white drop-shadow-lg">
              {"Ready to "}
              <span className="bg-gradient-to-r from-cyan-300 to-[#078fa1] bg-clip-text text-transparent">Upgrade</span>
              {" Your Workspace?"}
            </h2>
            <div className="mb-12 flex flex-wrap justify-center gap-3 sm:gap-5">
              <span className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-md transition hover:border-white/40 hover:bg-white/20">
                <CheckIcon className="h-4 w-4 text-cyan-300" aria-hidden="true" />
                Free Site Visit
              </span>
              <span className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-md transition hover:border-white/40 hover:bg-white/20">
                <CheckIcon className="h-4 w-4 text-cyan-300" aria-hidden="true" />
                Investment Advice
              </span>
              <span className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-md transition hover:border-white/40 hover:bg-white/20">
                <CheckIcon className="h-4 w-4 text-cyan-300" aria-hidden="true" />
                Zero Brokerage
              </span>
            </div>
            <div className="mb-16 flex flex-wrap justify-center gap-5">
              <WhatsAppLink className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-[#20b958] to-[#128c7e] px-8 py-4 text-sm sm:text-base font-black text-white shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(37,211,102,0.6)]">
                <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform group-hover:translate-y-0" />
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="shrink-0 relative h-6 w-6 sm:h-7 sm:w-7">
                  <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                <span className="relative">Chat on WhatsApp</span>
              </WhatsAppLink>
              <Link href="/contact" className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-[#ff7a00] to-[#e65c00] px-8 py-4 text-sm sm:text-base font-black text-white shadow-[0_0_30px_rgba(255,122,0,0.4)] transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,122,0,0.6)]">
                <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform group-hover:translate-y-0" />
                <MailIcon className="relative h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
                <span className="relative">Get Detailed Options</span>
              </Link>
            </div>
            <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/20 bg-white/10 p-1 sm:p-2 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 sm:p-10">
                <p className="mb-8 flex items-center justify-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-white/70">
                  <span className="h-px w-8 bg-white/30" />
                  Direct Enquiry
                  <span className="h-px w-8 bg-white/30" />
                </p>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 text-left">
                  <a href="tel:+919111832003" className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 transition hover:bg-white/20 hover:border-white/30 cursor-pointer">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-white/70">Commercial Spaces</p>
                      <span className="mt-1 block text-lg font-black text-white transition group-hover:text-cyan-300">+91 9111 832 003</span>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white/90 transition group-hover:bg-cyan-500/30 group-hover:text-cyan-300">
                      <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                    </div>
                  </a>
                  <a href="tel:+917909702003" className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 transition hover:bg-white/20 hover:border-white/30 cursor-pointer">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-white/70">Coworking Desks</p>
                      <span className="mt-1 block text-lg font-black text-white transition group-hover:text-cyan-300">+91 7909 702 003</span>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white/90 transition group-hover:bg-cyan-500/30 group-hover:text-cyan-300">
                      <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                    </div>
                  </a>
                  <a href="tel:+919522682003" className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 transition hover:bg-white/20 hover:border-white/30 cursor-pointer">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-white/70">Investment Queries</p>
                      <span className="mt-1 block text-lg font-black text-white transition group-hover:text-cyan-300">+91 9522 682 003</span>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white/90 transition group-hover:bg-cyan-500/30 group-hover:text-cyan-300">
                      <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                    </div>
                  </a>
                  <a href="mailto:Officeonrentindore@gmail.com" className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 transition hover:bg-white/20 hover:border-white/30 cursor-pointer">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-white/70">Email Support</p>
                      <span className="mt-1 block text-sm font-black text-white transition group-hover:text-cyan-300 sm:text-base line-clamp-1 break-all">Officeonrentindore@gmail.com</span>
                    </div>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-white/90 transition group-hover:bg-cyan-500/30 group-hover:text-cyan-300">
                      <MailIcon className="h-4 w-4" aria-hidden="true" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="fixed bottom-4 right-3 z-50 flex flex-col gap-2.5 sm:bottom-6 sm:right-5 sm:gap-4">
          <WhatsAppLink className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_20px_rgba(37,211,102,0.3)] sm:shadow-[0_14px_32px_rgba(37,211,102,0.34)] transition hover:scale-110" aria-label="WhatsApp The Office On Rent">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="shrink-0 h-7 w-7 sm:h-9 sm:w-9">
              <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
          </WhatsAppLink>
          <a href="tel:+919111832003" className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#ff7a00] text-white shadow-[0_8px_20px_rgba(255,122,0,0.3)] sm:shadow-[0_14px_32px_rgba(255,122,0,0.34)] transition hover:scale-110" aria-label="Call The Office On Rent">
            <PhoneIcon className="h-5 w-5 sm:h-8 sm:w-8" aria-hidden="true" />
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
