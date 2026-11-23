import { Suspense } from "react";
import Image from "next/image";
import { requireAdmin } from "@/lib/auth";
import { logoutAction } from "../actions";
import AdminNav from "@/components/admin/AdminNav";

export const dynamic = "force-dynamic";

export default async function PanelLayout({ children }) {
  const admin = await requireAdmin();
  return (
    <div className="lg:flex">
      <aside className="border-b border-slate-200 bg-white lg:sticky lg:top-0 lg:h-screen lg:w-64 lg:shrink-0 lg:border-b-0 lg:border-r">
        <div className="flex items-center justify-between gap-3 px-4 py-3 lg:flex-col lg:items-start lg:px-5 lg:py-6">
          <div className="flex items-center gap-2">
            <Image src="/assets/logo.png" alt="TheOfficeOnRent" width={110} height={38} className="h-9 w-auto" />
            <span className="rounded bg-slate-900 px-1.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-white">Admin</span>
          </div>
          <div className="text-right text-xs text-slate-500 lg:text-left">
            Signed in as <span className="font-bold text-slate-800">{admin.name}</span>
          </div>
        </div>
        <Suspense fallback={null}>
          <AdminNav />
        </Suspense>
        <form action={logoutAction} className="px-4 pb-4 lg:px-5">
          <button type="submit" className="text-sm font-bold text-slate-500 hover:text-slate-900">
            Sign out
          </button>
        </form>
      </aside>
      <div className="min-w-0 flex-1 px-4 py-6 lg:px-8 lg:py-8">{children}</div>
    </div>
  );
}
