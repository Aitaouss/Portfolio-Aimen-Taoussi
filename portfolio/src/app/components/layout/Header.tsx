"use client";

import { Button } from "../ui/button";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import type { JSX } from "react/jsx-runtime";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { menuPanel } from "../../lib/motion";

export default function Header(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-5 px-4 sm:px-6 pointer-events-none">
      <div className="max-w-4xl mx-auto relative pointer-events-auto">
        <nav
          className="flex items-center justify-between gap-3 rounded-full border border-white/10 bg-neutral-950/75 backdrop-blur-md px-4 sm:px-6 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
          aria-label="Main"
        >
          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className="flex-shrink-0 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            aria-label="Home"
          >
            <Image
              width={40}
              height={40}
              src="https://i.ibb.co/yc5b56nT/Screen-Shot-2025-04-14-at-2-04-44-AM-removebg-preview.png"
              alt="Aimen Taoussi logo"
              className="rounded-full"
            />
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="text-neutral-400 hover:text-white transition-colors duration-200 font-medium text-sm px-3 py-1.5 rounded-full hover:bg-white/5"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:inline-flex text-neutral-400 hover:text-white hover:bg-white/10 h-9 w-9 p-0 rounded-full"
              asChild
            >
              <a
                href="https://github.com/aitaouss"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:inline-flex text-neutral-400 hover:text-white hover:bg-white/10 h-9 w-9 p-0 rounded-full"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/aimen-taoussi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="hidden md:inline-flex border-white/15 bg-transparent text-neutral-200 hover:bg-white hover:text-neutral-950 hover:border-white/25 font-medium h-9 px-3.5 rounded-full"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="w-3.5 h-3.5 mr-1.5" />
              Contact
            </Button>
            <button
              type="button"
              className="md:hidden text-neutral-300 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-nav"
              className="md:hidden absolute top-[calc(100%+0.5rem)] left-0 right-0 rounded-2xl border border-white/10 bg-neutral-950/95 backdrop-blur-md shadow-2xl overflow-hidden"
              initial={reduceMotion ? false : "hidden"}
              animate="visible"
              exit="exit"
              variants={menuPanel}
            >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-neutral-300 hover:text-white hover:bg-white/5 transition-colors font-medium py-2.5 px-3 rounded-lg text-sm"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center gap-2 pt-3 mt-2 border-t border-white/10">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-neutral-300 hover:text-white hover:bg-white/10 flex-1 bg-transparent"
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
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-neutral-300 hover:text-white hover:bg-white/10 flex-1 bg-transparent"
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
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full mt-2 rounded-full border-white/15 bg-white/5 text-white hover:bg-white hover:text-neutral-950 font-medium"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
