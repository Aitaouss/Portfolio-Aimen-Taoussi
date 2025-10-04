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
        <nav className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              width={50}
              height={50}
              src="https://i.ibb.co/yc5b56nT/Screen-Shot-2025-04-14-at-2-04-44-AM-removebg-preview.png"
              alt="Logo"
              className="rounded-full"
            />
            {/* <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent text-white">
              Aimen Taoussi
            </h1> */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Social Links */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-white"
              asChild
            >
              <a
                href="https://github.com/aitaouss"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-white"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/aimen-taoussi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
            <Button
              size="sm"
              className="btn-modern bg-white hover:bg-gray-200 text-black"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
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
                  className="text-gray-300 hover:text-white"
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
                  className="text-gray-300 hover:text-white"
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
