import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, PhoneIcon } from "lucide-react";
import DesktopNav from "./DesktopNav";
import { PHONE_TEL } from "@/lib/site";

export default function DesktopHeader() {
  return (
    <header className="sticky top-0 z-40 hidden border-b border-cyan-100/70 bg-white/82 shadow-[0_10px_32px_rgba(8,24,39,0.08)] backdrop-blur-xl lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-0.5 lg:px-6 xl:gap-5 xl:px-8">
        <div className="shrink-0">
          <Link className="flex items-center shrink-0 transition hover:opacity-80" aria-label="TheOfficeOnRent home" href="/">
            <div className="relative h-20 w-[120px] overflow-visible">
              <Image src="/assets/logo.png" alt="The Office On TheOfficeOnRent" fill sizes="200px" className="object-contain scale-[1.4] xl:scale-[1.6] origin-left" />
            </div>
          </Link>
        </div>
        <DesktopNav />
        <div className="flex items-center gap-3">
          <a href={PHONE_TEL} className="inline-flex min-h-9 items-center justify-center gap-2 rounded-full border border-cyan-100 bg-white px-3 text-xs font-black text-[#071225] shadow-[0_10px_24px_rgba(8,24,39,0.08)] transition hover:-translate-y-0.5 hover:text-[#078fa1] xl:min-h-10 xl:px-4">
            <PhoneIcon className="h-4 w-4 text-[#078fa1]" aria-hidden="true" />
            Call Now
          </a>
          <Link href="/contact" className="inline-flex min-h-9 items-center justify-center gap-2 rounded-full bg-[#ff7a00] px-4 text-xs font-black text-white shadow-[0_12px_24px_rgba(255,122,0,0.22)] transition hover:-translate-y-0.5 hover:bg-[#f06f00] xl:min-h-10 xl:px-5">
            Book Tour
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-[#078fa1]/30 to-transparent" />
    </header>
  );
}
