import { Globe, Server, Database, Palette } from "lucide-react";
import type React from "react";
import SectionHeader from "../layout/SectionHeader";
import { Stagger, StaggerItem } from "../motion/Stagger";

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

export default function Skills(): JSX.Element {
  const skillCategories: SkillCategory[] = [
    {
      icon: <Globe className="w-5 h-5 text-white" />,
      title: "Frontend",
      skills: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS"],
    },
    {
      icon: <Server className="w-5 h-5 text-neutral-300" />,
      title: "Backend",
      skills: ["Node.js", "Express", "Fastify", "Nest.js"],
    },
    {
      icon: <Database className="w-5 h-5 text-neutral-300" />,
      title: "Database",
      skills: ["MariaDB", "PostgreSQL", "SQLite3", "Prisma"],
    },
    {
      icon: <Palette className="w-5 h-5 text-neutral-300" />,
      title: "Design",
      skills: ["UI/UX", "Figma", "Graphic Design", "Adobe Suite"],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]"
    >
      <div className="container mx-auto">
        <SectionHeader
          label="Skills"
          title="Technical toolkit"
          description="The stack I use to ship full-stack products — aligned with how I work in production."
        />

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {skillCategories.map((category, index) => (
            <StaggerItem key={index}>
            <article className="border-surface rounded-2xl bg-white/[0.02] backdrop-blur-sm p-6 hover:border-white/20 transition-all duration-300 text-left h-full">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-xs text-neutral-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
