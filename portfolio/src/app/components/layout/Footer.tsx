import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-black border-t border-gray-800 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/Redx-at"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/aimen-taoussi-251684280/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:taoussi.aimen@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 text-sm sm:text-base flex items-center justify-center gap-2">
              © {new Date().getFullYear()} Aimen Taoussi. Made with{" "}
              <Heart className="w-4 h-4 text-white fill-current" /> using
              Next.js & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
