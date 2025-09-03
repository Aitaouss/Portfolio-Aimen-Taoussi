import { Button } from "../ui/button";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

export default function Contact(): JSX.Element {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 gradient-red-black relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-responsive-lg font-bold text-white mb-4 animate-slide-up">
            Let's Work Together
          </h2>
          <p
            className="text-gray-200 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            I'm currently looking for internship opportunities where I can
            contribute my skills in{" "}
            <span className="text-red-400 font-semibold">
              full-stack development
            </span>{" "}
            and <span className="text-red-400 font-semibold">design</span>.
            Let's create something amazing together!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div
            className="glass text-center p-6 sm:p-8 rounded-2xl animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Mail className="w-8 h-8 sm:w-12 sm:h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-white font-semibold text-lg sm:text-xl mb-2">
              Email
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              taoussi.aimen@gmail.com
            </p>
          </div>

          <div
            className="glass text-center p-6 sm:p-8 rounded-2xl animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <MapPin className="w-8 h-8 sm:w-12 sm:h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-white font-semibold text-lg sm:text-xl mb-2">
              Location
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">Morocco</p>
          </div>

          <div
            className="glass text-center p-6 sm:p-8 rounded-2xl animate-slide-up"
            style={{ animationDelay: "0.8s" }}
          >
            <Phone className="w-8 h-8 sm:w-12 sm:h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-white font-semibold text-lg sm:text-xl mb-2">
              Available
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">For Internship</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 animate-slide-up"
          style={{ animationDelay: "1.0s" }}
        >
          <Button
            size="lg"
            className="btn-modern bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 text-base sm:text-lg h-auto"
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
            className="btn-modern border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-semibold px-8 py-4 text-base sm:text-lg h-auto bg-transparent"
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
            className="btn-modern border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-semibold px-8 py-4 text-base sm:text-lg h-auto bg-transparent"
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
