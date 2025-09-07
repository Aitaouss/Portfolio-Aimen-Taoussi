"use client";

import { Button } from "../ui/button";
import { MapPin, Calendar, Download, Eye } from "lucide-react";

import type { JSX } from "react";

export default function Hero(): JSX.Element {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-red-black relative overflow-hidden pt-10 sm:pt-24 lg:pt-0">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 sm:mb-12 relative z-20">
            <div className="relative inline-block">
              <img
                src="/AImenTaoussi.png"
                alt="Aimen Taoussi"
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full mx-auto border-4 border-red-500 shadow-2xl animate-glow relative z-20"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-500/20 to-transparent z-10"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 animate-slide-up">
              Aimen Taoussi
            </h1>

            <p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-red-200 mb-4 sm:mb-6 lg:mb-8 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Full-Stack Developer & UI/UX Designer
            </p>

            {/* Info Tags */}
            <div
              className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 lg:gap-8 text-xs sm:text-sm lg:text-base text-gray-300 mb-6 sm:mb-8 lg:mb-12 animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center gap-2 glass px-3 py-2 sm:px-4 sm:py-2 rounded-full">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
                <span>1337 - 42 School Student</span>
              </div>
              <div className="flex items-center gap-2 glass px-3 py-2 sm:px-4 sm:py-2 rounded-full">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
                <span>Open to Work Opportunities</span>
              </div>
            </div>

            {/* Description */}
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-12 leading-relaxed animate-slide-up px-4"
              style={{ animationDelay: "0.6s" }}
            >
              Passionate full-stack developer with{" "}
              <span className="text-red-400 font-semibold">
                2 years of development experience
              </span>
              ,{" "}
              <span className="text-red-400 font-semibold">
                4 years in graphic design
              </span>
              , and{" "}
              <span className="text-red-400 font-semibold">
                2 years in UI/UX design
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
                className="btn-modern bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 sm:px-8 sm:py-3 text-sm sm:text-base lg:text-lg h-auto w-full sm:w-auto"
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
                className="btn-modern border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-semibold px-6 py-3 sm:px-8 sm:py-3 text-sm sm:text-base lg:text-lg h-auto bg-transparent w-full sm:w-auto"
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10 hidden sm:block">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-red-400 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-red-400 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
