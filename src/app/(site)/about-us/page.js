import Image from "next/image";
import Link from "next/link";
import { BriefcaseBusinessIcon, Building2Icon, CalendarDaysIcon, MapPinIcon, ShieldCheckIcon, SparklesIcon, StarIcon, TrendingUpIcon, UsersRoundIcon } from "lucide-react";
import MobileTestimonials from "@/components/site/MobileTestimonials";
import PageShell from "@/components/site/PageShell";

export const metadata = {
  title: "About TheOfficeOnRent | Commercial Real Estate Indore",
  description: "Learn how TheOfficeOnRent helps businesses find offices, coworking spaces, showrooms, and commercial properties in Indore.",
};

export default function AboutUsPage() {
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
              About TheOfficeOnRent
            </div>
            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">A Professional Base For Ambitious Teams</h1>
            <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-white/88 sm:text-lg">TheOfficeOnRent brings flexible offices, practical amenities, and a polished business environment together for founders, consultants, and growing teams.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-11 sm:min-h-12 items-center justify-center gap-2 sm:gap-3 whitespace-nowrap rounded-xl sm:rounded-2xl px-5 sm:px-6 text-xs sm:text-sm font-bold transition bg-[#078fa1] text-white shadow-[0_18px_35px_rgba(7,143,161,0.23)] hover:bg-[#087f8d]">
                <CalendarDaysIcon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                <span>Talk To Our Team</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-[0_20px_55px_rgba(8,24,39,0.12)]">
              <Image src="/assets/crops/conference.jpeg" alt="Professional Workspace in Indore" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071225]/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-bold text-white backdrop-blur-md">
                  <SparklesIcon className="h-4 w-4" aria-hidden="true" />
                  3+ Years of Excellence
                </div>
              </div>
            </div>
            <div>
              <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase text-[#078fa1]">
                <span className="h-0.5 w-6 rounded-full bg-[#ff7a00]" />
                Our Story
              </div>
              <h2 className="mt-4 text-3xl font-black leading-tight text-[#071225] sm:text-4xl md:text-5xl">Commercial Real Estate Experts in Indore</h2>
              <div className="mt-8 space-y-8">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-[#078fa1]">
                    <Building2Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#071225]">End-to-End Solutions</h3>
                    <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-600 sm:text-base">Specializing in office space leasing, commercial property rental, sale, and purchase. From shortlisting the best options to negotiation and after-sales assistance for tenants, buyers, landlords, and investors.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-[#ff7a00]">
                    <MapPinIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#071225]">Extensive Prime Inventory</h3>
                    <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-600 sm:text-base">
                      {"A strong network across "}
                      <strong className="text-[#071225]">Vijay Nagar, Scheme No. 78, MR-10, AB Road, Palasia, MG Road, and Super Corridor</strong>
                      , offering everything from retail shops to coworking spaces.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple-50 text-[#8c36c9]">
                    <BriefcaseBusinessIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#071225]">Managed Spaces & Insight</h3>
                    <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-600 sm:text-base">
                      {"We operate our own managed offices and private-cabin environments, giving us first-hand insight into what modern businesses truly need. Our goal: "}
                      <strong className="text-[#071225]">making commercial property faster, easier, and more reliable.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          <article className="rounded-2xl p-6 text-center bg-cyan-50 text-[#078fa1]">
            <UsersRoundIcon className="mx-auto h-10 w-10" strokeWidth={2.2} aria-hidden="true" />
            <div className="mt-4 text-3xl font-black leading-none text-[#071225]">500+</div>
            <div className="mt-2 text-sm font-bold text-[#071225]">Clients Served</div>
          </article>
          <article className="rounded-2xl p-6 text-center bg-orange-50 text-[#ff7a00]">
            <TrendingUpIcon className="mx-auto h-10 w-10" strokeWidth={2.2} aria-hidden="true" />
            <div className="mt-4 text-3xl font-black leading-none text-[#071225]">250+</div>
            <div className="mt-2 text-sm font-bold text-[#071225]">Deals Closed</div>
          </article>
          <article className="rounded-2xl p-6 text-center bg-purple-50 text-[#8c36c9]">
            <StarIcon className="mx-auto h-10 w-10" strokeWidth={2.2} aria-hidden="true" />
            <div className="mt-4 text-3xl font-black leading-none text-[#071225]">4.9/5</div>
            <div className="mt-2 text-sm font-bold text-[#071225]">Google Rating</div>
          </article>
          <article className="rounded-2xl p-6 text-center bg-lime-50 text-[#78aa23]">
            <ShieldCheckIcon className="mx-auto h-10 w-10" strokeWidth={2.2} aria-hidden="true" />
            <div className="mt-4 text-3xl font-black leading-none text-[#071225]">Zero</div>
            <div className="mt-2 text-sm font-bold text-[#071225]">Brokerage Options</div>
          </article>
        </div>
      </section>
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden bg-[#f0f4f8] h-[360px] rounded-3xl shadow-[0_20px_55px_rgba(8,24,39,0.12)]">
            <Image src="/assets/gallery/office-lounge.jpg" alt="TheOfficeOnRent lounge" fill className="object-cover" />
          </div>
          <div>
            <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase text-[#078fa1]">
              <span className="h-0.5 w-6 rounded-full bg-[#ff7a00]" />
              Why professionals love us
            </div>
            <h2 className="text-3xl font-black leading-tight text-[#071225] sm:text-4xl">Built Around Focus, Flexibility, And A Better Workday</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="flex gap-4">
                <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-[#078fa1]">
                  <ShieldCheckIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-black text-[#071225]">Zero-Brokerage Options</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">No brokerage for co-working spaces or zero brokerage for 5-year agreements with 3-year locking period.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#ff7a00]">
                  <TrendingUpIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-black text-[#071225]">Leasing Services</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">Comprehensive leasing services for office spaces, retail showrooms, and commercial properties.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-lime-100 text-[#77a912]">
                  <UsersRoundIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-black text-[#071225]">Co-Working Alliance</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">Allied with 65+ co-working spaces for plug-and-play offices across Indore.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-purple-100 text-[#9c49dd]">
                  <MapPinIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-black text-[#071225]">Prime Locations</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">Strategically located in prime business hubs with high-visibility access and connectivity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase text-[#078fa1]">
              <span className="h-0.5 w-6 rounded-full bg-[#ff7a00]" />
              Member stories
            </div>
            <h2 className="text-3xl font-black leading-tight text-[#071225] sm:text-4xl">Real Feedback From Real Teams</h2>
          </div>
          <MobileTestimonials variant="desktop" />
        </div>
      </section>
    </PageShell>
  );
}
