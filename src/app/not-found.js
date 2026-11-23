import Link from "next/link";
import PageShell from "@/components/site/PageShell";

export default function NotFound() {
  return (
    <PageShell>
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl rounded-2xl bg-white p-8 text-center shadow-[0_18px_42px_rgba(8,24,39,0.09)]">
          <h1 className="text-3xl font-black text-[#071225]">Page not found</h1>
          <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">This property may have been let out or moved. Browse the current options or ask the team.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/spaces" className="inline-flex min-h-11 items-center rounded-xl bg-[#071225] px-5 text-sm font-black text-white">
              View spaces
            </Link>
            <Link href="/contact" className="inline-flex min-h-11 items-center rounded-xl bg-[#ff7a00] px-5 text-sm font-black text-white">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
