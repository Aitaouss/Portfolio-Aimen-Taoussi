"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Download, Eye, ChevronDown, Languages } from "lucide-react";
import HeroVisual from "./HeroVisual";
import { motion, useReducedMotion } from "framer-motion";
import { easeOut, fadeUpHero, staggerContainer } from "../../lib/motion";
import Reveal from "../motion/Reveal";
import { Stagger, StaggerItem } from "../motion/Stagger";

import type { JSX } from "react";

const CV_FILES = {
  en: {
    href: "/Aimen_Taoussi_cv_en.pdf",
    filename: "Aimen_Taoussi_CV_EN.pdf",
  },
  fr: {
    href: "/Aimen-Taoussi-CV.pdf",
    filename: "Aimen_Taoussi_CV_FR.pdf",
  },
} as const;

const PROOF_ITEMS = [
  { label: "profita", detail: "Production SaaS" },
  { label: "StackForge", detail: "npm CLI" },
  { label: "OCP / HSE", detail: "Enterprise dashboards" },
  { label: "12+", detail: "Shipped projects" },
];

function downloadFile(href: string, filename: string): void {
  const link = document.createElement("a");
  link.href = href;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function Hero(): JSX.Element {
  const [cvMenuOpen, setCvMenuOpen] = useState(false);
  const cvMenuRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const heroItem = fadeUpHero;

  useEffect(() => {
    if (!cvMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        cvMenuRef.current &&
        !cvMenuRef.current.contains(event.target as Node)
      ) {
        setCvMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [cvMenuOpen]);

  const handleDownload = (language: "en" | "fr" | "both") => {
    if (language === "both") {
      downloadFile(CV_FILES.en.href, CV_FILES.en.filename);
      setTimeout(() => {
        downloadFile(CV_FILES.fr.href, CV_FILES.fr.filename);
      }, 350);
    } else {
      const cv = CV_FILES[language];
      downloadFile(cv.href, cv.filename);
    }
    setCvMenuOpen(false);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-28">
      <div
        className="absolute inset-0 pointer-events-none bg-dot-subtle opacity-[0.35]"
        style={{
          maskImage:
            "radial-gradient(ellipse 85% 70% at 50% 40%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 70% at 50% 40%, black 20%, transparent 75%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14 items-center">
          {/* Left — typographic & intent */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start text-left max-w-2xl mx-auto lg:mx-0 w-full"
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={staggerContainer(0.08, 0.05)}
          >
            <motion.div
              className="mb-6 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-950/40 text-emerald-300 text-xs font-mono tracking-tight"
              variants={heroItem}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for new projects & roles</span>
            </motion.div>

            <motion.p className="text-label-editorial mb-3" variants={heroItem}>
              Software Engineer · Product Design
            </motion.p>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.25rem] xl:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-4"
              variants={heroItem}
            >
              Aimen Taoussi
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-neutral-300 font-medium leading-snug mb-6 max-w-xl"
              variants={heroItem}
            >
              Crafting scalable systems &{" "}
              <span className="text-white">pixel-precise interfaces.</span>
            </motion.p>

            <motion.p
              className="text-base sm:text-lg text-neutral-400 leading-relaxed mb-8 max-w-xl"
              variants={heroItem}
            >
              Full-stack engineer and UI/UX designer shipping production apps
              from architecture to polish — dashboards, SaaS, and design systems
              that hold up in the real world.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-8"
              variants={heroItem}
            >
              <Button
                size="lg"
                className="btn-modern bg-white hover:bg-neutral-100 text-neutral-950 font-semibold px-7 py-3.5 text-sm sm:text-base h-auto w-full sm:w-auto rounded-full shadow-[0_0_24px_rgba(255,255,255,0.12)]"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Eye className="w-4 h-4 mr-2" />
                View Work
              </Button>

              <div className="relative w-full sm:w-auto" ref={cvMenuRef}>
                <Button
                  variant="outline"
                  size="lg"
                  className="btn-modern w-full sm:w-auto rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white font-medium px-7 py-3.5 text-sm sm:text-base h-auto backdrop-blur-sm"
                  onClick={() => setCvMenuOpen((open) => !open)}
                  aria-expanded={cvMenuOpen}
                  aria-haspopup="menu"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                  <ChevronDown
                    className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                      cvMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </Button>

                {cvMenuOpen && (
                  <div
                    role="menu"
                    className="absolute left-0 sm:left-auto sm:right-0 top-[calc(100%+0.5rem)] z-50 w-56 rounded-xl border border-white/10 bg-neutral-950/95 backdrop-blur-md shadow-2xl overflow-hidden"
                  >
                    <div className="px-3 py-2 border-b border-white/10">
                      <p className="text-label-editorial flex items-center gap-1.5">
                        <Languages className="w-3 h-3" />
                        Choose language
                      </p>
                    </div>
                    <div className="p-1.5">
                      <button
                        role="menuitem"
                        type="button"
                        onClick={() => handleDownload("en")}
                        className="w-full text-left px-3 py-2.5 rounded-lg text-sm text-neutral-200 hover:bg-white hover:text-black transition-colors"
                      >
                        English
                      </button>
                      <button
                        role="menuitem"
                        type="button"
                        onClick={() => handleDownload("fr")}
                        className="w-full text-left px-3 py-2.5 rounded-lg text-sm text-neutral-200 hover:bg-white hover:text-black transition-colors"
                      >
                        French
                      </button>
                      <button
                        role="menuitem"
                        type="button"
                        onClick={() => handleDownload("both")}
                        className="w-full text-left px-3 py-2.5 rounded-lg text-sm text-neutral-200 hover:bg-white hover:text-black transition-colors border-t border-white/10 mt-1 pt-3"
                      >
                        Both (EN + FR)
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div
              className="w-full border-surface rounded-2xl bg-white/[0.02] backdrop-blur-sm px-4 py-3.5 sm:px-5 space-y-3"
              variants={heroItem}
            >
              <p className="text-label-editorial">At a glance</p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm text-neutral-400 font-mono">
                <span>
                  <span className="text-neutral-500">Campus</span>{" "}
                  <span className="text-neutral-200">1337 · 42 Network</span>
                </span>
                <span className="text-neutral-600 hidden sm:inline">•</span>
                <span>
                  <span className="text-neutral-500">Based in</span>{" "}
                  <span className="text-neutral-200">Casablanca, MA</span>
                </span>
              </div>
              <div className="pt-3 border-t border-white/[0.06]">
                <p className="text-label-editorial mb-2">Stack</p>
                <ul className="space-y-1.5 text-xs sm:text-sm font-mono leading-relaxed">
                  <li>
                    <span className="text-neutral-200">React</span>
                    <span className="text-neutral-500">
                      {" "}
                      [Next.js, Tailwind CSS]
                    </span>
                  </li>
                  <li>
                    <span className="text-neutral-200">Node.js</span>
                    <span className="text-neutral-500">
                      {" "}
                      [Nest.js, Express, Fastify]
                    </span>
                  </li>
                  <li>
                    <span className="text-neutral-200">TypeScript</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — layered terminal + portrait + UI artifact */}
          <motion.div
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
            initial={reduceMotion ? false : { opacity: 0, y: 32, scale: 0.97 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.2, ease: easeOut }}
          >
            <HeroVisual />
          </motion.div>
        </div>

        {/* Proof bar */}
        <Reveal className="mt-16 lg:mt-20 pt-8 border-t border-white/[0.06]">
          <p className="text-label-editorial text-center mb-5">Built & shipped</p>
          <Stagger
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
            stagger={0.06}
          >
            {PROOF_ITEMS.map((item) => (
              <StaggerItem key={item.label}>
                <div className="border-surface rounded-full px-4 py-2 bg-white/[0.02] text-center min-w-[7rem]">
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                  <p className="text-[11px] text-neutral-500 font-mono mt-0.5">
                    {item.detail}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
      </div>
    </section>
  );
}
