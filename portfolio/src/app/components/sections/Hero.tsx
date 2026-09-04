"use client";

import { Button } from "../ui/button";
import { MapPin, Calendar, Download, Eye } from "lucide-react";

import type { JSX } from "react";

export default function Hero(): JSX.Element {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden pt-20 sm:pt-24 lg:pt-0">
      {/* Engineered Technical Background */}
      <div className="absolute inset-0 z-0 bg-dot-subtle opacity-40"></div>
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
              <Button
                variant="outline"
                size="lg"
                className="btn-modern border-white/20 text-white hover:bg-white hover:text-black font-semibold px-6 py-3 sm:px-8 sm:py-3 text-sm sm:text-base lg:text-lg h-auto bg-transparent w-full sm:w-auto"
                asChild
              >
                <a href="Aimen-Taoussi-CV.pdf" download>
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
