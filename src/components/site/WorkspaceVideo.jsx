"use client";

import { useRef, useState } from "react";
import { PauseIcon, PlayIcon } from "lucide-react";

export default function WorkspaceVideo({ src, label, className = "", poster }) {
  const video = useRef(null);
  const [playing, setPlaying] = useState(false);

  async function toggle() {
    const element = video.current;
    if (!element) return;
    if (element.paused) {
      await element.play();
      setPlaying(true);
      return;
    }
    element.pause();
    setPlaying(false);
  }

  const Glyph = playing ? PauseIcon : PlayIcon;
  return (
    <div className={`relative overflow-hidden bg-slate-100 ${className}`}>
      <video ref={video} className="h-full w-full object-cover" loop muted playsInline preload="none" poster={poster} aria-label={label} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}>
        <source src={src} type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={toggle}
        className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#078fa1] shadow-[0_12px_30px_rgba(8,24,39,0.18)] ring-1 ring-white/70 transition hover:scale-105 hover:bg-white sm:h-20 sm:w-20"
        aria-label={playing ? "Pause workspace tour video" : "Play workspace tour video"}
      >
        <Glyph className={`h-6 w-6 sm:h-8 sm:w-8 ${playing ? "" : "ml-1 fill-[#078fa1]"}`} aria-hidden="true" />
      </button>
    </div>
  );
}
