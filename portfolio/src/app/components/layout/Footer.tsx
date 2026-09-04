import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-transparent border-t border-gray-900 py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Identity & Origin */}
          <div className="text-center sm:text-left space-y-1">
            <p className="text-white font-medium text-sm sm:text-base">
              Aimen Taoussi
            </p>
            <p className="text-gray-400 text-xs font-mono">
              Software Engineer & Designer · Casablanca, Morocco (UTC+1)
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-5">
            <a
              href="https://github.com/aitaouss"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5 border border-transparent hover:border-gray-800"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/aimen-taoussi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5 border border-transparent hover:border-gray-800"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:taoussi.aimen@gmail.com"
              aria-label="Send Email"
              className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5 border border-transparent hover:border-gray-800"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400 font-mono">
          <p>© {new Date().getFullYear()} Aimen Taoussi. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Built with Next.js 14, Tailwind CSS & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
