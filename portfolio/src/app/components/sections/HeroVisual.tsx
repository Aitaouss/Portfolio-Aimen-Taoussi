"use client";

import { useEffect, useState } from "react";
import type { JSX } from "react";

const TERMINAL_LINES = [
  { type: "cmd", text: "$ whoami" },
  { type: "out", text: "aimen-taoussi" },
  { type: "cmd", text: "$ hostname" },
  { type: "out", text: "1337-coding-school · 42-network" },
  { type: "cmd", text: "$ pwd" },
  { type: "out", text: "/home/aitaouss/casablanca/portfolio" },
  { type: "cmd", text: "$ cat about.txt" },
  { type: "out", text: "Full-Stack Developer & UI/UX Designer" },
  { type: "cmd", text: "$ echo $STACK" },
  {
    type: "out",
    text: "React[Next.js,Tailwind] · Node[Nest,Express,Fastify] · TS",
  },
  { type: "cmd", text: "$ status --availability" },
  { type: "out", text: "open_to_projects=true  location=Morocco" },
];

function WindowChrome({ title }: { title: string }): JSX.Element {
  return (
    <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-neutral-900/80">
      <div className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/90" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/90" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/90" />
      </div>
      <span className="text-[10px] font-mono text-neutral-500 truncate max-w-[50%]">
        {title}
      </span>
      <span className="w-8" />
    </div>
  );
}

export default function HeroVisual(): JSX.Element {
  const [visibleLines, setVisibleLines] = useState(TERMINAL_LINES.length);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    setVisibleLines(0);
    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setVisibleLines(count);
      if (count >= TERMINAL_LINES.length) clearInterval(interval);
    }, 280);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[440px] mx-auto lg:mr-0 lg:ml-auto min-h-[380px] sm:min-h-[400px]">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[280px] bg-white/[0.04] blur-3xl rounded-full pointer-events-none"
        aria-hidden
      />

      <div
        className="absolute top-0 left-0 sm:-left-4 w-[92%] sm:w-[85%] z-0 -rotate-2 opacity-95"
        aria-hidden={false}
      >
        <div className="border-surface rounded-xl overflow-hidden bg-neutral-950/95 shadow-2xl shadow-black/60 backdrop-blur-sm">
          <WindowChrome title="aitaouss@dev — zsh" />
          <div className="p-3 sm:p-4 font-mono text-[10px] sm:text-[11px] leading-relaxed min-h-[168px] bg-[#0c0c0c]">
            {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
              <div
                key={i}
                className={
                  line.type === "cmd"
                    ? "text-emerald-400/90 mb-1"
                    : "text-neutral-500 mb-1.5"
                }
              >
                {line.text}
              </div>
            ))}
            {visibleLines >= TERMINAL_LINES.length && (
              <span className="inline-block w-1.5 h-3.5 bg-emerald-400/80 animate-pulse align-middle ml-0.5" />
            )}
          </div>
        </div>
      </div>

      <div className="absolute top-[88px] sm:top-[80px] right-0 w-[58%] sm:w-[52%] z-10">
        <div className="p-[1px] rounded-2xl bg-gradient-to-br from-white/25 via-white/10 to-white/5 shadow-2xl">
          <div className="rounded-2xl overflow-hidden bg-neutral-950 ring-1 ring-white/10">
            <img
              src="/AImenTaoussi.png"
              alt="Aimen Taoussi"
              className="w-full aspect-[3/4] object-cover object-top grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
