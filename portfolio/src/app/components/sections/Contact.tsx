"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Mail, Linkedin, Github, MapPin, Check, Copy } from "lucide-react";

export default function Contact(): JSX.Element {
  const [copied, setCopied] = useState(false);
  const email = "taoussi.aimen@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // fallback
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none"></div>

      <div className="container mx-auto relative z-10 max-w-4xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-responsive-lg font-bold text-white mb-4 animate-slide-up">
            Let's Work Together
          </h2>
          <p
            className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Full-stack developer and{" "}
            <span className="text-white font-semibold">software engineer</span>{" "}
            with UI/UX expertise. I build high-performance web applications,
            combining resilient architecture with modern, intuitive interfaces.
            Passionate about innovation, turning complex ideas into polished,
            scalable digital products.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10">
          {/* Email card with tactile Click-to-copy */}
          <div
            onClick={handleCopy}
            className="group cursor-pointer bg-gray-900/60 border border-gray-800 hover:border-gray-600 transition-all duration-300 p-6 sm:p-7 rounded-2xl flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-white font-medium text-base mb-1 flex items-center gap-2">
              Email Address
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-gray-300 group-hover:bg-white group-hover:text-black transition-colors">
                {copied ? "Copied!" : "Click to copy"}
              </span>
            </h3>
            <p className="text-gray-400 font-mono text-xs sm:text-sm flex items-center gap-1.5 mt-1">
              <span>{email}</span>
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400 inline" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-colors inline" />
              )}
            </p>
          </div>

          <div className="bg-gray-900/60 border border-gray-800 p-6 sm:p-7 rounded-2xl flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-3">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-white font-medium text-base mb-1">Location</h3>
            <p className="text-gray-400 font-mono text-xs sm:text-sm mt-1">
              Casablanca, Morocco (UTC+1)
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          <Button
            size="lg"
            className="btn-modern bg-white hover:bg-gray-200 text-black font-semibold px-8 py-3.5 text-sm sm:text-base h-auto"
            asChild
          >
            <a href={`mailto:${email}`}>
              <Mail className="w-4 h-4 mr-2" />
              Send an Email
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="btn-modern border-gray-700 text-gray-300 hover:bg-white hover:text-black hover:border-white font-medium px-6 py-3.5 text-sm sm:text-base h-auto bg-transparent transition-all"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/aimen-taoussi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="btn-modern border-gray-700 text-gray-300 hover:bg-white hover:text-black hover:border-white font-medium px-6 py-3.5 text-sm sm:text-base h-auto bg-transparent transition-all"
            asChild
          >
            <a
              href="https://github.com/aitaouss"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
