import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Code, Palette, Layers } from "lucide-react";
import type React from "react";

interface ExperienceCardProps {
  icon: React.ReactNode;
  title: string;
  duration: string;
  description: string;
  delay: string;
}

function ExperienceCard({
  icon,
  title,
  duration,
  description,
  delay,
}: ExperienceCardProps): JSX.Element {
  return (
    <Card
      className="card-modern bg-gray-900 border-gray-800 hover:border-red-500/50 animate-slide-up"
      style={{ animationDelay: delay }}
    >
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">{icon}</div>
        <CardTitle className="text-white text-xl sm:text-2xl">
          {title}
        </CardTitle>
        <CardDescription className="text-red-400 font-semibold text-sm sm:text-base">
          {duration}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300 text-center leading-relaxed text-sm sm:text-base">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

export default function About(): JSX.Element {
  const experiences = [
    {
      icon: <Code className="w-12 h-12 sm:w-16 sm:h-16 text-green-400" />,
      title: "Development",
      duration: "2 Years Experience",
      description:
        "Specialized in modern web technologies including React, Next.js, and Node.js. Building scalable applications with clean, maintainable code.",
      delay: "0.2s",
    },
    {
      icon: <Palette className="w-12 h-12 sm:w-16 sm:h-16 text-purple-400" />,
      title: "Graphic Design",
      duration: "4 Years Experience",
      description:
        "Creating compelling visual identities, logos, and marketing materials. Expert in Adobe Creative Suite and brand development.",
      delay: "0.4s",
    },
    {
      icon: <Layers className="w-12 h-12 sm:w-16 sm:h-16 text-red-400" />,
      title: "UI/UX Design",
      duration: "2 Years Experience",
      description:
        "Designing user-centered interfaces with focus on usability and accessibility. Proficient in Figma, user research, and prototyping.",
      delay: "0.6s",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-responsive-lg font-bold text-white mb-4 animate-slide-up">
            About Me
          </h2>
          <p
            className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Combining technical expertise with creative vision to deliver
            exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
