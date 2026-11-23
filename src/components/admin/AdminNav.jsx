"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Building2Icon, ConstructionIcon, ExternalLinkIcon, HotelIcon, InboxIcon, KeyRoundIcon, LayoutDashboardIcon, BedDoubleIcon, StoreIcon } from "lucide-react";

const GROUPS = [
  { items: [{ href: "/admin", label: "Overview", icon: LayoutDashboardIcon }] },
  {
    title: "Buildings",
    items: [
      { href: "/admin/buildings?category=ready-to-move", label: "Ready to Move", icon: Building2Icon },
      { href: "/admin/buildings?category=new-commercial-building", label: "New Commercial", icon: ConstructionIcon },
    ],
  },
  {
    title: "Property cards",
    items: [
      { href: "/admin/cards?category=retail-shops-showrooms", label: "Retail / Showrooms", icon: StoreIcon },
      { href: "/admin/cards?category=hostels", label: "Hostels", icon: BedDoubleIcon },
      { href: "/admin/cards?category=hotels", label: "Hotels", icon: HotelIcon },
    ],
  },
  {
    title: "Other",
    items: [
      { href: "/admin/enquiries", label: "Website enquiries", icon: InboxIcon },
      { href: "/admin/account", label: "My password", icon: KeyRoundIcon },
    ],
  },
];

export default function AdminNav() {
  const pathname = usePathname();
  const params = useSearchParams();
  const isActive = (href) => {
    const [path, query] = href.split("?");
    if (path === "/admin") return pathname === "/admin";
    if (!pathname.startsWith(path)) return false;
    if (!query) return true;
    const want = new URLSearchParams(query).get("category");
    return params.get("category") === want || pathname.includes(`/${want}`);
  };
  return (
    <nav className="flex gap-1 overflow-x-auto px-3 pb-3 lg:flex-col lg:gap-4 lg:overflow-visible lg:px-3 lg:pb-6">
      {GROUPS.map((group, index) => (
        <div key={index} className="flex shrink-0 gap-1 lg:flex-col">
          {group.title ? <div className="hidden px-2 pb-1 text-[10px] font-black uppercase tracking-widest text-slate-400 lg:block">{group.title}</div> : null}
          {group.items.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-bold transition ${isActive(href) ? "bg-[#e8f8fa] text-[#056a78]" : "text-slate-600 hover:bg-slate-100"}`}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              {label}
            </Link>
          ))}
        </div>
      ))}
      <a href="/" target="_blank" rel="noreferrer" className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-bold text-slate-600 hover:bg-slate-100">
        <ExternalLinkIcon className="h-4 w-4" aria-hidden="true" />
        Open the website
      </a>
    </nav>
  );
}
