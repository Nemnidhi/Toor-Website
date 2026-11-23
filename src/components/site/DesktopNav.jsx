"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDownIcon } from "lucide-react";
import { DESKTOP_NAV, isActivePath } from "@/lib/site";

export default function DesktopNav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-1 rounded-full border border-cyan-100/80 bg-white/78 p-1 text-[12px] font-black text-[#071225] shadow-[0_12px_28px_rgba(8,24,39,0.07)] xl:text-[13px]">
      {DESKTOP_NAV.map((item) => {
        const children = item.items;
        const active = isActivePath(pathname, item.href) || Boolean(children?.some((child) => isActivePath(pathname, child.href)));
        const base = `whitespace-nowrap rounded-full px-2.5 py-1.5 transition xl:px-3 xl:py-2 ${active ? "bg-[#078fa1] text-white shadow-[0_10px_20px_rgba(7,143,161,0.22)]" : "hover:bg-cyan-50 hover:text-[#078fa1]"}`;
        if (children?.length) {
          return (
            <div key={item.href} className="group relative">
              <Link href={item.href} aria-current={active ? "page" : undefined} className={`${base} flex items-center gap-1.5`}>
                {item.label}
                <ChevronDownIcon className="h-3.5 w-3.5 transition group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden="true" />
              </Link>
              <div className="absolute left-0 top-full z-50 hidden min-w-[240px] pt-3 group-hover:block group-focus-within:block">
                <div className="rounded-[18px] border border-cyan-100 bg-white p-2 shadow-[0_18px_42px_rgba(8,24,39,0.14)]">
                  {children.map((child) => {
                    const childActive = isActivePath(pathname, child.href);
                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        aria-current={childActive ? "page" : undefined}
                        className={`block rounded-[12px] px-3 py-2.5 text-[12px] font-black transition ${childActive ? "bg-[#078fa1] text-white" : "text-[#071225] hover:bg-cyan-50 hover:text-[#078fa1]"}`}
                      >
                        {child.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        }
        return (
          <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={base}>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
