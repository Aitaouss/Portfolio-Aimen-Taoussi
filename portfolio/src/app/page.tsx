"use client";

import Hero from "../app/components/sections/Hero";
import About from "../app/components/sections/About";
import Skills from "../app/components/sections/Skills";
import Projects from "../app/components/sections/Projects";
import Contact from "../app/components/sections/Contact";
import Header from "../app/components/layout/Header";
import Footer from "../app/components/layout/Footer";

export default function HomePage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
