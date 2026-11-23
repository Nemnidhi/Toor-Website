import Image from "next/image";
import { CheckIcon } from "lucide-react";

/** An option card on the retail / hostel / hotel pages. */
export default function OptionCard({ option }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-[0_18px_42px_rgba(8,24,39,0.09)]">
      <div className="relative overflow-hidden bg-[#f0f4f8] h-48 w-full rounded-none">
        {option.image ? <Image src={option.image} alt={`${option.name} option`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" /> : null}
      </div>
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2">
          {option.badge ? <span className="rounded-full bg-[#e8f8fa] px-3 py-1 text-xs font-black text-[#078fa1]">{option.badge}</span> : null}
          {option.priceLabel ? <span className="rounded-full bg-[#fff1e4] px-3 py-1 text-xs font-black text-[#c85d00]">{option.priceLabel}</span> : null}
        </div>
        <h2 className="mt-4 text-2xl font-black leading-tight text-[#071225]">{option.name}</h2>
        {option.subtitle ? <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{option.subtitle}</p> : null}
        <div className="mt-4 grid grid-cols-2 gap-3 text-sm font-black text-[#071225]">
          {option.stats
            .filter((stat) => stat.label || stat.value)
            .map((stat, index) => (
              <div key={index} className="rounded-xl bg-slate-50 p-3">
                <div className="text-xs uppercase text-slate-500">{stat.label}</div>
                {stat.value}
              </div>
            ))}
        </div>
        {option.features.length ? (
          <ul className="mt-4 grid gap-2">
            {option.features.map((feature, index) => (
              <li key={index} className="flex gap-2 text-sm font-semibold leading-5 text-slate-600">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#078fa1]" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
