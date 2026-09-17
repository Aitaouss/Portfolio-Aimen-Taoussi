import { Github, Linkedin, Mail } from "lucide-react";
import Reveal from "../motion/Reveal";

export default function Footer(): JSX.Element {
  return (
    <footer className="border-t border-white/[0.06] py-12 sm:py-14 px-4 sm:px-6 lg:px-8">
      <Reveal>
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left space-y-2">
            <p className="text-label-editorial">Portfolio</p>
            <p className="text-white font-semibold text-sm sm:text-base">
              Aimen Taoussi
            </p>
            <p className="text-neutral-400 text-xs font-mono">
              Software Engineer & Designer · Casablanca, MA (UTC+1)
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/aitaouss"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-neutral-400 hover:text-white transition-colors p-2.5 rounded-full hover:bg-white/10 border border-white/10"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/aimen-taoussi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-neutral-400 hover:text-white transition-colors p-2.5 rounded-full hover:bg-white/10 border border-white/10"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:taoussi.aimen@gmail.com"
              aria-label="Send Email"
              className="text-neutral-400 hover:text-white transition-colors p-2.5 rounded-full hover:bg-white/10 border border-white/10"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500 font-mono">
          <p>© {new Date().getFullYear()} Aimen Taoussi. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Next.js 14 · Tailwind CSS · TypeScript
          </p>
        </div>
      </div>
      </Reveal>
    </footer>
  );
}
