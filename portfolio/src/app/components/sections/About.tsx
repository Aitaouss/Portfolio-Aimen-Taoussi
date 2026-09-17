import { Code, Palette, Layers } from "lucide-react";
import type React from "react";
import SectionHeader from "../layout/SectionHeader";
import { Stagger, StaggerItem } from "../motion/Stagger";

interface ExperienceCardProps {
  icon: React.ReactNode;
  title: string;
  duration: string;
  description: string;
}

function ExperienceCard({
  icon,
  title,
  duration,
  description,
}: ExperienceCardProps): JSX.Element {
  return (
    <article className="border-surface rounded-2xl bg-white/[0.02] backdrop-blur-sm p-6 sm:p-7 hover:border-white/20 transition-all duration-300 text-left h-full flex flex-col">
      <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
      <p className="text-xs font-mono text-emerald-400/90 mb-4">{duration}</p>
      <p className="text-neutral-400 text-sm sm:text-base leading-relaxed flex-1">
        {description}
      </p>
    </article>
  );
}

export default function About(): JSX.Element {
  const experiences = [
    {
      icon: <Code className="w-5 h-5 text-white" />,
      title: "Full-Stack Development",
      duration: "3+ years",
      description:
        "React, Next.js, TypeScript, and Node.js/NestJS — scalable apps with clean architecture and production-ready delivery.",
    },
    {
      icon: <Palette className="w-5 h-5 text-neutral-300" />,
      title: "Graphic Design",
      duration: "4+ years",
      description:
        "Visual identity, brand systems, and marketing assets with Adobe Creative Suite and consistent brand strategy.",
    },
    {
      icon: <Layers className="w-5 h-5 text-neutral-300" />,
      title: "UI/UX Design",
      duration: "5+ years",
      description:
        "User-centered interfaces, Figma prototypes, design systems, and flows built for usability and clarity.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]"
    >
      <div className="container mx-auto">
        <SectionHeader
          label="About"
          title="Engineering meets design"
          description="I build products end to end — from system design and APIs to interfaces people actually enjoy using."
        />

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {experiences.map((experience, index) => (
            <StaggerItem key={index} className="h-full">
              <ExperienceCard {...experience} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
