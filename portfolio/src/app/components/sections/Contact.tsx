"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Mail, Linkedin, Github, MapPin, Check, Copy } from "lucide-react";
import SectionHeader from "../layout/SectionHeader";
import { Stagger, StaggerItem } from "../motion/Stagger";

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
      className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"
        aria-hidden
      />

      <div className="container mx-auto relative z-10 max-w-4xl">
        <SectionHeader
          label="Contact"
          title="Let's build something"
          description="Open to freelance projects, collaborations, and full-time roles. Reach out — I usually reply within 24 hours."
        />

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-10">
          <StaggerItem>
          <button
            type="button"
            onClick={handleCopy}
            className="group cursor-pointer border-surface rounded-2xl bg-white/[0.02] backdrop-blur-sm hover:border-white/20 transition-all duration-300 p-6 sm:p-7 flex flex-col items-start text-left w-full"
          >
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h3 className="text-white font-medium text-base">Email</h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-neutral-300 group-hover:bg-white group-hover:text-black transition-colors">
                {copied ? "Copied!" : "Click to copy"}
              </span>
            </div>
            <p className="text-neutral-400 font-mono text-xs sm:text-sm flex items-center gap-1.5">
              <span>{email}</span>
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors shrink-0" />
              )}
            </p>
          </button>
          </StaggerItem>

          <StaggerItem>
          <div className="border-surface rounded-2xl bg-white/[0.02] backdrop-blur-sm p-6 sm:p-7 flex flex-col items-start text-left h-full">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-white font-medium text-base mb-2">Location</h3>
            <p className="text-neutral-400 font-mono text-xs sm:text-sm">
              Casablanca, Morocco · UTC+1
            </p>
          </div>
          </StaggerItem>
        </Stagger>

        <Stagger
          className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4"
          stagger={0.07}
        >
          <StaggerItem>
          <Button
            size="lg"
            className="btn-modern rounded-full bg-white hover:bg-neutral-100 text-neutral-950 font-semibold px-8 py-3.5 text-sm sm:text-base h-auto w-full sm:w-auto"
            asChild
          >
            <a href={`mailto:${email}`}>
              <Mail className="w-4 h-4 mr-2" />
              Send an Email
            </a>
          </Button>
          </StaggerItem>

          <StaggerItem>
          <Button
            variant="outline"
            size="lg"
            className="btn-modern rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white font-medium px-6 py-3.5 text-sm sm:text-base h-auto w-full sm:w-auto backdrop-blur-sm"
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
          </StaggerItem>

          <StaggerItem>
          <Button
            variant="outline"
            size="lg"
            className="btn-modern rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white font-medium px-6 py-3.5 text-sm sm:text-base h-auto w-full sm:w-auto backdrop-blur-sm"
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
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
