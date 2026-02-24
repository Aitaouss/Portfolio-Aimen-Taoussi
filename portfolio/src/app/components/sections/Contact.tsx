import { Button } from "../ui/button";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

export default function Contact(): JSX.Element {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-responsive-lg font-bold text-white mb-4 animate-slide-up">
            Let's Work Together
          </h2>
          <p
            className="text-gray-200 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Développeur full-stack et{" "}
            <span className="text-white font-semibold">ingénieur logiciel</span>{" "}
            avec expertise UI/UX. Je conçois et développe des applications web
            performantes, en combinant des architectures robustes avec des
            interfaces modernes et intuitives. Passionné par l’innovation, je
            transforme des concepts complexes en solutions digitales élégantes
            et efficaces.
          </p>{" "}
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div
            className=" glass text-center p-6 sm:p-8 rounded-2xl animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Mail className="w-8 h-8 sm:w-8 sm:h-8 text-white mx-auto mb-4" />
            <h3 className="text-white font-semibold text-lg sm:text-lg mb-2">
              Email
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm">
              taoussi.aimen@gmail.com
            </p>
          </div>

          <div
            className="glass text-center p-6 sm:p-8 rounded-2xl animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <MapPin className="w-8 h-8 sm:w-8 sm:h-8 text-white mx-auto mb-4" />
            <h3 className="text-white font-semibold text-lg sm:text-lg mb-2">
              Location
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm">Morocco</p>
          </div>
        </div>
        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 animate-slide-up"
          style={{ animationDelay: "1.0s" }}
        >
          <Button
            size="lg"
            className="btn-modern bg-white hover:bg-gray-200 text-black font-semibold px-8 py-4 text-sm sm:text-base h-auto"
            asChild
          >
            <a href="mailto:taoussi.aimen@gmail.com">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="btn-modern border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 text-sm sm:text-base h-auto bg-transparent"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/aimen-taoussi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn Profile
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="btn-modern border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 text-sm sm:text-base h-auto bg-transparent"
            asChild
          >
            <a
              href="https://github.com/aitaouss"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub Profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
