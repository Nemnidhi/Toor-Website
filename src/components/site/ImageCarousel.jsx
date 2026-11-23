"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import PhotoIcon from "./PhotoIcon";

/** A building's photos: one large photo, arrows / arrow keys, and a strip of thumbnails. */
export default function ImageCarousel({ name, images }) {
  const [index, setIndex] = useState(0);
  const count = images.length;
  const previous = useCallback(() => setIndex((value) => (value - 1 + count) % count), [count]);
  const next = useCallback(() => setIndex((value) => (value + 1) % count), [count]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [previous, next]);

  if (!count) return null;
  return (
    <div className="flex flex-col gap-3">
      <div className="relative overflow-hidden rounded-3xl bg-[#0c1a2e] shadow-[0_24px_64px_rgba(8,24,39,0.22)]" style={{ minHeight: "340px" }}>
        <div className="relative w-full" style={{ height: "460px" }}>
          <Image src={images[index]} alt={`${name} - photo ${index + 1}`} fill priority className="object-cover transition-opacity duration-500" sizes="(min-width: 1024px) 58vw, 100vw" quality={95} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
        </div>
        {count > 1 ? (
          <>
            <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
              <PhotoIcon />
              {index + 1} / {count}
            </span>
            <button type="button" onClick={previous} aria-label="Previous photo" className="absolute left-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#071225] shadow-[0_4px_16px_rgba(0,0,0,0.18)] backdrop-blur-sm transition hover:bg-white hover:scale-105 focus:outline-none">
              <ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <button type="button" onClick={next} aria-label="Next photo" className="absolute right-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#071225] shadow-[0_4px_16px_rgba(0,0,0,0.18)] backdrop-blur-sm transition hover:bg-white hover:scale-105 focus:outline-none">
              <ChevronRightIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </>
        ) : null}
      </div>
      {count > 1 ? (
        <div className="flex gap-2.5 overflow-x-auto pb-1 pt-0.5 scrollbar-hide">
          {images.map((src, position) => (
            <button
              type="button"
              key={`${src}-${position}`}
              onClick={() => setIndex(position)}
              aria-label={`View photo ${position + 1}`}
              className={`relative shrink-0 overflow-hidden rounded-xl transition-all duration-200 ${position === index ? "ring-2 ring-[#078fa1] ring-offset-2 opacity-100 scale-105 shadow-md" : "opacity-55 hover:opacity-85 hover:scale-102"}`}
              style={{ height: "68px", width: "100px" }}
            >
              <Image src={src} alt={`${name} thumbnail ${position + 1}`} fill className="object-cover" sizes="100px" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

