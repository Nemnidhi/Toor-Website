import Image from "next/image";
import Link from "next/link";
import { CalendarDaysIcon } from "lucide-react";
import WorkspaceVideo from "@/components/site/WorkspaceVideo";
import PageShell from "@/components/site/PageShell";

export const metadata = {
  title: "Workspace Gallery | TheOfficeOnRent Indore",
  description: "View TheOfficeOnRent workstations, private suites, meeting areas, lounge spaces, and office interiors in Indore.",
};

export default function GalleryPage() {
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
              Gallery
            </div>
            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">See The Workspace Before You Visit</h1>
            <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-white/88 sm:text-lg">Explore the reception, shared workstations, private suites, lounge areas, and the workspace tour video.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-11 sm:min-h-12 items-center justify-center gap-2 sm:gap-3 whitespace-nowrap rounded-xl sm:rounded-2xl px-5 sm:px-6 text-xs sm:text-sm font-bold transition bg-[#078fa1] text-white shadow-[0_18px_35px_rgba(7,143,161,0.23)] hover:bg-[#087f8d]">
                <CalendarDaysIcon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                <span>Schedule a Tour</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.4fr_0.9fr]">
          <WorkspaceVideo src="/assets/gallery/workspace-tour.mp4" label="Workspace tour video" className="h-[280px] rounded-2xl shadow-[0_18px_48px_rgba(8,24,39,0.13)] sm:h-[420px]" poster="/assets/gallery/open-cubicles.jpg" />
          <div className="grid gap-5">
            <div className="relative overflow-hidden bg-[#f0f4f8] h-32 rounded-2xl sm:h-52">
              <Image src="/assets/gallery/open-cubicles.jpg" alt="Open coworking cubicles" fill className="object-cover" />
            </div>
            <div className="relative overflow-hidden bg-[#f0f4f8] h-32 rounded-2xl sm:h-52">
              <Image src="/assets/gallery/office-lounge.jpg" alt="Workspace lounge" fill className="object-cover" />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-5 grid max-w-7xl gap-5 sm:grid-cols-3">
          <div className="relative overflow-hidden bg-[#f0f4f8] h-56 rounded-2xl shadow-[0_14px_34px_rgba(8,24,39,0.1)]">
            <Image src="/assets/hero/modern-reception.jpg" alt="Reception area" fill className="object-cover" />
          </div>
          <div className="relative overflow-hidden bg-[#f0f4f8] h-56 rounded-2xl shadow-[0_14px_34px_rgba(8,24,39,0.1)]">
            <Image src="/assets/services/private-cabin.jpg" alt="Private cabin" fill className="object-cover" />
          </div>
          <div className="relative overflow-hidden bg-[#f0f4f8] h-56 rounded-2xl shadow-[0_14px_34px_rgba(8,24,39,0.1)]">
            <Image src="/assets/services/meeting-rooms.jpg" alt="Meeting room" fill className="object-cover" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
