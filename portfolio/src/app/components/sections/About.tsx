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
      duration: "3+ years",
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

        <Stagger
          className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 mb-10 sm:mb-12"
          stagger={0.08}
        >
          <StaggerItem className="lg:col-span-4">
            <figure className="relative max-w-sm mx-auto lg:max-w-none h-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 shadow-2xl shadow-black/30">
              <img
                src="/AImenTaoussi.png"
                alt="Portrait of Aimen Taoussi"
                className="w-full h-full min-h-[360px] sm:min-h-[420px] object-cover object-top grayscale-[0.15]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent pointer-events-none"
                aria-hidden
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-950/70 px-2.5 py-1 text-[10px] font-mono text-emerald-300 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Available for new projects
                </span>
                <p className="text-lg font-semibold text-white">Aimen Taoussi</p>
                <p className="mt-1 text-xs font-mono text-neutral-400">
                  Casablanca, Morocco · UTC+1
                </p>
              </figcaption>
            </figure>
          </StaggerItem>

          <StaggerItem className="lg:col-span-8">
            <article className="border-surface rounded-2xl bg-white/[0.02] backdrop-blur-sm p-6 sm:p-8 lg:p-10 h-full flex flex-col justify-between">
              <div>
                <p className="text-label-editorial mb-4">A little context</p>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white leading-tight max-w-2xl mb-5">
                  From architecture to the last pixel.
                </h3>
                <div className="space-y-4 text-sm sm:text-base leading-relaxed text-neutral-400 max-w-3xl">
                  <p>
                    I&apos;m a full-stack engineer and UI/UX designer based in
                    Casablanca. I work across the product lifecycle—from shaping
                    flows and interfaces to building APIs, data models, and
                    production-ready applications.
                  </p>
                  <p>
                    My approach combines engineering structure with design
                    attention: clear interfaces, maintainable systems, and
                    practical decisions built around real users. The 1337 / 42
                    Network strengthened that hands-on mindset through learning by
                    building.
                  </p>
                </div>
              </div>

              <dl className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8 pt-6 border-t border-white/[0.06]">
                <div className="rounded-xl border border-white/[0.06] bg-black/20 p-4">
                  <dt className="text-[10px] uppercase tracking-[0.16em] text-neutral-600 font-mono">
                    Background
                  </dt>
                  <dd className="mt-2 text-sm text-neutral-200">
                    1337 · 42 Network
                  </dd>
                </div>
                <div className="rounded-xl border border-white/[0.06] bg-black/20 p-4">
                  <dt className="text-[10px] uppercase tracking-[0.16em] text-neutral-600 font-mono">
                    Focus
                  </dt>
                  <dd className="mt-2 text-sm text-neutral-200">
                    SaaS · Dashboards
                  </dd>
                </div>
                <div className="rounded-xl border border-white/[0.06] bg-black/20 p-4">
                  <dt className="text-[10px] uppercase tracking-[0.16em] text-neutral-600 font-mono">
                    Approach
                  </dt>
                  <dd className="mt-2 text-sm text-neutral-200">
                    Build · Test · Polish
                  </dd>
                </div>
              </dl>
            </article>
          </StaggerItem>
        </Stagger>

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
