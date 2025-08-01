"use client";

import { Button } from "../ui/button";
import { MapPin, Calendar, Download, Eye } from "lucide-react";

export default function Hero(): JSX.Element {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-red-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 sm:mb-12">
            <div className="relative inline-block">
              <img
                src="https://i.ibb.co/Q7Pz9NcD/Me-Portfolio.png"
                alt="Aimen Taoussi"
                className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full mx-auto border-4 border-red-500 shadow-2xl animate-glow"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-500/20 to-transparent"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-responsive-xl font-bold text-white mb-4 sm:mb-6 animate-slide-up">
              Aimen Taoussi
            </h1>

            <p
              className="text-responsive-lg text-red-200 mb-6 sm:mb-8 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Full-Stack Developer & UI/UX Designer
            </p>

            {/* Info Tags */}
            <div
              className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm sm:text-base text-gray-300 mb-8 sm:mb-12 animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4 text-red-400" />
                <span>1337 School - 42 Network Student</span>
              </div>
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
                <Calendar className="w-4 h-4 text-red-400" />
                <span>Open to Collaborations</span>
              </div>
            </div>

            {/* Description */}
            <p
              className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-slide-up px-4"
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
              className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 animate-slide-up px-4"
              style={{ animationDelay: "0.8s" }}
            >
              <Button
                size="lg"
                className="btn-modern bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 text-base sm:text-lg h-auto"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Eye className="w-5 h-5 mr-2" />
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="btn-modern border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-semibold px-8 py-3 text-base sm:text-lg h-auto bg-transparent"
                asChild
              >
                <a href="/resume.pdf" download>
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-red-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-red-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
