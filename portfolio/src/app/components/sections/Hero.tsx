"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { MapPin, Download, Eye, ChevronDown, Languages } from "lucide-react";

import type { JSX } from "react";

const CV_FILES = {
  en: {
    href: "/Aimen_Taoussi_cv_en.pdf",
    filename: "Aimen_Taoussi_CV_EN.pdf",
    label: "English",
  },
  fr: {
    href: "/Aimen-Taoussi-CV.pdf",
    filename: "Aimen_Taoussi_CV_FR.pdf",
    label: "French",
  },
} as const;

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
    <section className="min-h-screen flex items-center justify-center bg-transparent relative overflow-hidden pt-20 sm:pt-24 lg:pt-0">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/[0.03] via-transparent to-black pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        <div className="text-center">
          {/* Availability Badge */}
          <div className="mb-8 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-950/30 text-emerald-300 text-xs font-mono tracking-tight animate-slide-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for new projects & roles</span>
          </div>

          {/* Profile Image with subtle engineered ring */}
          <div className="mb-8 relative z-20">
            <div className="relative inline-block">
              <div className="p-1 rounded-full bg-gradient-to-b from-white/20 to-white/5 shadow-2xl">
                <img
                  src="/AImenTaoussi.png"
                  alt="Aimen Taoussi"
                  className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 animate-slide-up">
              Aimen Taoussi
            </h1>

            <p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 mb-4 sm:mb-6 lg:mb-8 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Full-Stack Developer & UI/UX Designer
            </p>

            {/* Info Tags */}
            <div
              className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-4 text-xs sm:text-sm text-gray-300 mb-6 sm:mb-8 animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                <MapPin className="w-3.5 h-3.5 text-gray-400" />
                <span>1337 Coding School (42 Network)</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60"></span>
                <span>Software Engineer</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60"></span>
                <span>Casablanca, Morocco</span>
              </div>
            </div>

            {/* Description */}
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-12 leading-relaxed animate-slide-up px-4"
              style={{ animationDelay: "0.6s" }}
            >
              Passionate full-stack developer with{" "}
              <span className="text-white font-semibold">
                4 years of development experience
              </span>
              ,{" "}
              <span className="text-white font-semibold">
                4 years in graphic design
              </span>
              , and{" "}
              <span className="text-white font-semibold">
                5 years in UI/UX design
              </span>
              . I create beautiful, functional digital experiences from concept
              to deployment.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 lg:gap-6 animate-slide-up px-4"
              style={{ animationDelay: "0.8s" }}
            >
              <Button
                size="lg"
                className="btn-modern bg-black hover:bg-gray-800 text-white font-semibold px-6 py-3 sm:px-8 sm:py-3 text-sm sm:text-base lg:text-lg h-auto w-full sm:w-auto"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Eye className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                View My Work
              </Button>
              <div className="relative w-full sm:w-auto" ref={cvMenuRef}>
                <Button
                  variant="outline"
                  size="lg"
                  className="btn-modern border-white/20 text-white hover:bg-white hover:text-black font-semibold px-6 py-3 sm:px-8 sm:py-3 text-sm sm:text-base lg:text-lg h-auto bg-transparent w-full sm:w-auto"
                  onClick={() => setCvMenuOpen((open) => !open)}
                  aria-expanded={cvMenuOpen}
                  aria-haspopup="menu"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
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
                    className="absolute left-1/2 sm:left-auto sm:right-0 -translate-x-1/2 sm:translate-x-0 top-[calc(100%+0.5rem)] z-50 w-56 rounded-xl border border-white/10 bg-gray-950/95 backdrop-blur-md shadow-2xl overflow-hidden animate-slide-up"
                  >
                    <div className="px-3 py-2 border-b border-white/10">
                      <p className="text-[11px] font-mono uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                        <Languages className="w-3 h-3" />
                        Choose language
                      </p>
                    </div>
                    <div className="p-1.5">
                      <button
                        role="menuitem"
                        type="button"
                        onClick={() => handleDownload("en")}
                        className="w-full text-left px-3 py-2.5 rounded-lg text-sm text-gray-200 hover:bg-white hover:text-black transition-colors"
                      >
                        English
                      </button>
                      <button
                        role="menuitem"
                        type="button"
                        onClick={() => handleDownload("fr")}
                        className="w-full text-left px-3 py-2.5 rounded-lg text-sm text-gray-200 hover:bg-white hover:text-black transition-colors"
                      >
                        French
                      </button>
                      <button
                        role="menuitem"
                        type="button"
                        onClick={() => handleDownload("both")}
                        className="w-full text-left px-3 py-2.5 rounded-lg text-sm text-gray-200 hover:bg-white hover:text-black transition-colors border-t border-white/10 mt-1 pt-3"
                      >
                        Both (EN + FR)
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
