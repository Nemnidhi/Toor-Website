"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "lucide-react";

const TESTIMONIALS = [
  { initials: "RM", name: "Rahul Mehta", role: "Co-founder, TechNova", quote: "TheOfficeOnRent has completely changed the way our team works. The environment, connectivity and amenities are top-notch!" },
  { initials: "AS", name: "Ananya Sharma", role: "Founder, Studio North", quote: "The private cabin gave our team a polished place to meet clients and stay focused every day." },
  { initials: "VK", name: "Vikram Kapoor", role: "Operations Lead, ScaleHub", quote: "Fast internet, clean meeting rooms, and a helpful team made moving into TheOfficeOnRent effortless." },
  { initials: "NP", name: "Neha Patel", role: "Consultant, BrightWorks", quote: "I like how flexible the plans are. It feels professional without locking us into unnecessary overhead." },
];

export default function MobileTestimonials({ variant = "mobile" }) {
  const [index, setIndex] = useState(0);
  const desktop = variant === "desktop";
  const arrowClass = `flex shrink-0 items-center justify-center rounded-full text-[#071225] transition active:scale-95 ${desktop ? "h-12 w-12 bg-white shadow-[0_12px_28px_rgba(8,24,39,0.1)]" : "h-10 w-8"}`;
  return (
    <>
      <div className={`mx-auto flex items-center gap-2 ${desktop ? "max-w-4xl" : "max-w-md"}`}>
        <button type="button" onClick={() => setIndex((value) => (value === 0 ? TESTIMONIALS.length - 1 : value - 1))} className={arrowClass} aria-label="Previous testimonial">
          <ChevronLeftIcon className={desktop ? "h-8 w-8" : "h-7 w-7"} aria-hidden="true" />
        </button>
        <div className={`flex-1 overflow-hidden rounded-[24px] ${desktop ? "min-h-[240px]" : "min-h-[286px]"}`}>
          <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${100 * index}%)` }}>
            {TESTIMONIALS.map((item) => (
              <article key={item.name} className={`relative w-full shrink-0 overflow-hidden rounded-[24px] border border-cyan-100/70 bg-white shadow-[0_18px_42px_rgba(8,24,39,0.12)] ${desktop ? "min-h-[240px] p-8" : "min-h-[286px] p-5"}`}>
                <div className={`absolute font-black leading-none text-[#078fa1]/10 ${desktop ? "right-8 top-4 text-8xl" : "right-5 top-3 text-6xl"}`}>&quot;</div>
                <div className={`flex items-start ${desktop ? "gap-6" : "gap-4"}`}>
                  <div className={`flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#071225] to-[#078fa1] font-black text-white shadow-[0_12px_24px_rgba(7,143,161,0.22)] ring-4 ring-cyan-50 ${desktop ? "h-20 w-20 text-2xl" : "h-[68px] w-[68px] text-xl"}`}>{item.initials}</div>
                  <div className="min-w-0 flex-1 pr-4">
                    <h3 className={`font-black text-[#071225] ${desktop ? "text-xl leading-7" : "text-[15px] leading-5"}`}>{item.name}</h3>
                    <p className={`mt-0.5 font-semibold text-slate-500 ${desktop ? "text-sm leading-5" : "text-[11px] leading-4"}`}>{item.role}</p>
                    <div className="mt-2 flex text-[#ff7a00]" aria-label="5 star rating">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon key={star} className={`${desktop ? "h-5 w-5" : "h-4 w-4"} fill-[#ff7a00]`} aria-hidden="true" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className={`mt-5 rounded-[18px] bg-[#f5fbfd] font-semibold text-slate-700 ${desktop ? "p-5 text-base leading-7" : "p-4 text-[12px] leading-6"}`}>&quot;{item.quote}&quot;</p>
              </article>
            ))}
          </div>
        </div>
        <button type="button" onClick={() => setIndex((value) => (value + 1) % TESTIMONIALS.length)} className={arrowClass} aria-label="Next testimonial">
          <ChevronRightIcon className={desktop ? "h-8 w-8" : "h-7 w-7"} aria-hidden="true" />
        </button>
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {TESTIMONIALS.map((item, position) => (
          <button key={item.name} type="button" onClick={() => setIndex(position)} className={`h-2.5 w-2.5 rounded-full transition ${position === index ? "bg-[#078fa1]" : "bg-slate-300"}`} aria-label={`Show testimonial ${position + 1}`} />
        ))}
      </div>
    </>
  );
}
