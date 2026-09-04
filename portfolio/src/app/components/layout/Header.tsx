"use client";

import { Button } from "../ui/button";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import type { JSX } from "react/jsx-runtime";
import Image from "next/image";

export default function Header(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header className="fixed top-0 w-full z-50 glass-dark border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="grid grid-cols-2 lg:grid-cols-3 items-center h-16 lg:h-20">
          {/* Logo (Left column) */}
          <div className="flex items-center justify-start">
            <Image
              width={46}
              height={46}
              src="https://i.ibb.co/yc5b56nT/Screen-Shot-2025-04-14-at-2-04-44-AM-removebg-preview.png"
              alt="Logo"
              className="rounded-full"
            />
          </div>

          {/* Desktop Navigation (True Center column) */}
          <div className="hidden lg:flex items-center justify-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Social Links (Right column) */}
          <div className="hidden lg:flex items-center justify-end space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white hover:bg-white/10 h-9 w-9 p-0 rounded-lg transition-colors"
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
              className="text-gray-400 hover:text-white hover:bg-white/10 h-9 w-9 p-0 rounded-lg transition-colors"
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
              size="sm"
              className="btn-modern bg-white hover:bg-gray-100 text-black font-medium h-9 px-4 ml-1 transition-all"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden justify-end">
            <button
              className="text-gray-300 hover:text-white transition-colors p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full glass-dark border-b border-gray-800">
            <div className="px-4 py-6 space-y-4 bg-black bg-opacity-65">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-300 font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-700">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-300 hover:text-white hover:bg-white/10"
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
                  className="text-gray-300 hover:text-white hover:bg-white/10"
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
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
