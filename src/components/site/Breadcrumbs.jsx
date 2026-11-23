import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";

export default function Breadcrumbs({ items }) {
  return (
    <div className="px-4 pt-4 pb-0 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 flex-wrap">
          {items.map((item, position) => {
            const last = position === items.length - 1;
            return (
              <div key={`${item.href}-${position}`} className="flex items-center gap-1.5">
                {last ? (
                  <a className="inline-flex items-center rounded-md px-2 py-1 text-xs font-bold transition bg-slate-100 text-[#071225] cursor-default pointer-events-none" aria-current="page" href="#">
                    {item.label}
                  </a>
                ) : (
                  <Link className="inline-flex items-center rounded-md px-2 py-1 text-xs font-bold transition text-slate-500 hover:bg-[#e8f8fa] hover:text-[#078fa1]" href={item.href}>
                    {item.label}
                  </Link>
                )}
                {last ? null : <ChevronRightIcon className="h-3.5 w-3.5 text-slate-300 flex-shrink-0" aria-hidden="true" />}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
