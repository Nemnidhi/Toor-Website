import Image from "next/image";
import Link from "next/link";
import { MailIcon, PhoneIcon } from "lucide-react";
import LeadForm from "@/components/site/LeadForm";
import PageShell from "@/components/site/PageShell";
import WhatsAppLink from "@/components/site/WhatsAppLink";

export const metadata = {
  title: "Contact TheOfficeOnRent | Office Space in Indore",
  description: "Contact TheOfficeOnRent for workspace availability, pricing, property shortlisting, and office tours in Indore.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="absolute inset-0">
          <Image src="/assets/gallery/office-lounge.jpg" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071225]/88 via-[#071225]/60 to-[#078fa1]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f7fbff] via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="max-w-2xl py-8 sm:py-12">
            <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-white/92 px-4 py-2 text-xs font-black uppercase text-[#078fa1] shadow-[0_12px_24px_rgba(8,24,39,0.12)]">
              <span className="h-0.5 w-5 rounded-full bg-[#ff7a00]" />
              Contact
            </div>
            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">Ready To Elevate Your Workspace?</h1>
            <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-white/88 sm:text-lg">Share your requirements and the team will help you shortlist desks, cabins, meeting rooms, or virtual office options.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="tel:+919111832003" className="inline-flex min-h-11 sm:min-h-12 items-center justify-center gap-2 sm:gap-3 whitespace-nowrap rounded-xl sm:rounded-2xl px-5 sm:px-6 text-xs sm:text-sm font-bold transition bg-[#078fa1] text-white shadow-[0_18px_35px_rgba(7,143,161,0.23)] hover:bg-[#087f8d]">
                <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                <span>Call Now</span>
              </a>
              <WhatsAppLink className="inline-flex min-h-11 sm:min-h-12 items-center justify-center gap-2 sm:gap-3 whitespace-nowrap rounded-xl sm:rounded-2xl px-5 sm:px-6 text-xs sm:text-sm font-bold transition bg-white text-[#071225] shadow-[0_16px_35px_rgba(17,24,39,0.08)] hover:bg-slate-50">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="shrink-0 h-4 w-4 sm:h-5 sm:w-5 text-[#25D366]">
                  <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                <span>WhatsApp Us</span>
              </WhatsAppLink>
            </div>
          </div>
          <div className="relative pb-4 lg:pb-0">
            <div className="rounded-2xl bg-[#078fa1] p-4 shadow-[0_22px_60px_rgba(8,24,39,0.28)] sm:p-5">
              <div className="mb-4 text-white">
                <h2 className="text-2xl font-black">Tell Us What You Need</h2>
                <p className="mt-1 text-sm font-semibold text-white/85">Get pricing, availability, and a callback.</p>
              </div>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-3">
            <a href="tel:+919111832003" className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-[0_14px_34px_rgba(8,24,39,0.08)] transition hover:-translate-y-0.5">
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-[#078fa1]">
                <PhoneIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-lg font-black text-[#071225]">Call</h2>
                <p className="mt-1 text-sm font-semibold text-slate-600">+91 9111 832 003</p>
              </div>
            </a>
            <WhatsAppLink className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-[0_14px_34px_rgba(8,24,39,0.08)] transition hover:-translate-y-0.5">
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-[#078fa1]">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="shrink-0 h-5 w-5 sm:h-6 sm:w-6">
                  <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
              </span>
              <div>
                <h2 className="text-lg font-black text-[#071225]">WhatsApp</h2>
                <p className="mt-1 text-sm font-semibold text-slate-600">Message the workspace team</p>
              </div>
            </WhatsAppLink>
            <Link href="/contact" className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-[0_14px_34px_rgba(8,24,39,0.08)] transition hover:-translate-y-0.5">
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-[#078fa1]">
                <MailIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-lg font-black text-[#071225]">Lead Support</h2>
                <p className="mt-1 text-sm font-semibold text-slate-600">Share workspace type, team size, and timeline</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
