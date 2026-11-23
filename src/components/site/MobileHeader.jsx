"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CalendarDaysIcon, ChevronDownIcon, MenuIcon, PhoneIcon, XIcon } from "lucide-react";
import { MOBILE_NAV, PHONE_TEL, isActivePath } from "@/lib/site";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);
  const MenuGlyph = open ? XIcon : MenuIcon;

  return (
    <header className="sticky top-0 z-50 bg-[#f7fbff]/94 px-5 py-3 backdrop-blur-xl lg:hidden">
      <div className="mx-auto flex max-w-md items-center justify-between gap-3">
        <Link href="/" className="relative block h-[82px] w-[190px] shrink-0 overflow-hidden" aria-label="TheOfficeOnRent home">
          <Image src="/assets/logo.png" alt="TheOfficeOnRent" fill sizes="(max-width: 1023px) 190px, 1px" className="object-contain" style={{ objectPosition: "left center" }} />
        </Link>
        <div className="flex items-center gap-3">
          <a href={PHONE_TEL} className="flex h-12 w-12 items-center justify-center rounded-full bg-[#078fa1] text-white shadow-[0_12px_26px_rgba(7,143,161,0.26)] ring-4 ring-cyan-50" aria-label="Call TheOfficeOnRent">
            <PhoneIcon className="h-5 w-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#071225] shadow-[0_10px_22px_rgba(8,24,39,0.14)] ring-1 ring-slate-100"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <MenuGlyph className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
      {open ? (
        <nav className="mx-auto mt-3 max-w-md rounded-[20px] border border-cyan-100 bg-white p-3 shadow-[0_18px_42px_rgba(8,24,39,0.14)]">
          <div className="grid grid-cols-2 gap-2">
            {MOBILE_NAV.map((item) => {
              const children = item.items;
              const active = isActivePath(pathname, item.href) || Boolean(children?.some((child) => isActivePath(pathname, child.href)));
              if (children?.length) {
                return (
                  <div key={item.href} className="col-span-2 rounded-[14px] bg-[#f1fbfd] p-2">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onClick={close}
                      className={`flex min-h-11 items-center justify-between rounded-[12px] px-3 text-[12px] font-black transition ${active ? "bg-[#078fa1] text-white shadow-[0_10px_20px_rgba(7,143,161,0.2)]" : "bg-white text-[#071225]"}`}
                    >
                      <span>{item.label}</span>
                      <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
                    </Link>
                    <div className="mt-2 grid grid-cols-1 gap-2">
                      {children.map((child) => {
                        const childActive = isActivePath(pathname, child.href);
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            aria-current={childActive ? "page" : undefined}
                            onClick={close}
                            className={`rounded-[10px] px-3 py-2 text-[11px] font-black transition ${childActive ? "bg-[#078fa1] text-white" : "bg-white text-[#071225]"}`}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={close}
                  className={`rounded-[12px] px-3 py-3 text-center text-[12px] font-black transition ${active ? "bg-[#078fa1] text-white shadow-[0_10px_20px_rgba(7,143,161,0.2)]" : "bg-[#f1fbfd] text-[#071225]"}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <Link
            href="/contact"
            onClick={close}
            className="mt-3 flex min-h-11 items-center justify-center gap-2 rounded-[12px] bg-[#ff7a00] px-4 text-[12px] font-black text-white shadow-[0_12px_24px_rgba(255,122,0,0.22)]"
          >
            <CalendarDaysIcon className="h-4 w-4" aria-hidden="true" />
            Book a Free Tour
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
