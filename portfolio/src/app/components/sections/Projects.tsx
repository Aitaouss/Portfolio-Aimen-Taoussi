"use client";

import { useState } from "react";
import { Card, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Github, ExternalLink, PenLine } from "lucide-react";
import SectionHeader from "../layout/SectionHeader";
import { Stagger, StaggerItem } from "../motion/Stagger";

type ProjectCategory = "all" | "fullstack" | "design" | "tools";

interface Project {
  name: string;
  tagline: string;
  summary: string;
  highlights: string[];
  coreTech: string[];
  image: string;
  category: "fullstack" | "design" | "tools";
  badge?: string;
  githubUrl?: string;
  liveUrl?: string;
  figmaUrl?: string;
  delay: string;
}

export default function Projects(): JSX.Element {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("all");

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full-Stack & Web" },
    { id: "design", label: "UI/UX & Design" },
    { id: "tools", label: "CLI & Systems" },
  ];

  const projects: Project[] = [
    {
      name: "profita",
      tagline: "E-commerce Profitability & Ops",
      summary:
        "Real-time profit, inventory, and orders for e-commerce sellers — built for Moroccan workflows and small teams.",
      highlights: [
        "Live P&L & margin tracking",
        "MAD · TVA · WhatsApp · COD",
        "Multi-project workspaces",
      ],
      coreTech: ["Next.js", "Convex", "Clerk", "TypeScript", "Tailwind"],
      image:
        "https://i.ibb.co/4w1zkXZD/Screenshot-from-2026-09-04-17-00-32.png",
      category: "fullstack",
      badge: "Flagship",
      liveUrl: "https://profita.aitaouss.me/",
      delay: "0.2s",
    },
    {
      name: "create-stackforge-app",
      tagline: "Full-Stack CLI Scaffolder",
      summary:
        "Production CLI that generates Next.js + NestJS + Prisma apps with Docker and auth out of the box.",
      highlights: [
        "Interactive & non-interactive modes",
        "PostgreSQL or SQLite",
        "Published on npm",
      ],
      coreTech: ["Next.js", "NestJS", "Prisma", "TypeScript", "Docker"],
      image: "https://i.ibb.co/q3R13z9y/image.png",
      category: "tools",
      badge: "npm package",
      liveUrl: "https://stack-forge.aitaouss.me/",
      delay: "0.3s",
    },
    {
      name: "OCP Supply Chain",
      tagline: "Production & Stock Management",
      summary:
        "Enterprise dashboard for monitoring production flows, stock levels, and operational reports.",
      highlights: [
        "Real-time production views",
        "Drag-and-drop workflows",
        "Reporting & data integrity",
      ],
      coreTech: ["Next.js", "TypeScript", "Express.js", "Real-Time UI"],
      image:
        "https://i.ibb.co/Z6ZxxtJZ/Screenshot-from-2026-02-24-12-42-14.png",
      category: "fullstack",
      liveUrl: "https://supply-chain.1337.ma/",
      delay: "0.4s",
    },
    {
      name: "HSE SBU Manufacturing",
      tagline: "Data & KPI Management",
      summary:
        "Platform for HSE data, KPI tracking, and supervised workflows with role-based access.",
      highlights: [
        "Interactive dashboards",
        "RBAC & DTO validation",
        "Compliance-focused KPIs",
      ],
      coreTech: ["Next.js", "TypeScript", "Nest.js", "RBAC"],
      image:
        "https://i.ibb.co/qYFvSNBx/Screenshot-from-2026-02-24-12-29-10.png",
      category: "fullstack",
      liveUrl: "https://hse-dashboard.1337.ma/",
      delay: "0.5s",
    },
    {
      name: "Outdoorpal",
      tagline: "UI/UX Mobile App",
      summary:
        "End-to-end mobile UX for outdoor enthusiasts — flows, screens, and a polished visual system.",
      highlights: ["Mobile-first journeys", "Figma design system", "Freelance delivery"],
      coreTech: ["Figma", "UI/UX", "User Flow", "Mobile Design"],
      image: "https://i.ibb.co/SXdP0krw/image.png",
      category: "design",
      figmaUrl:
        "https://figma.com/design/w42erVqe3ZmBFYfWVXFa72/Outdoorpal?node-id=0-1&p=f&t=J2vkgaLfmGXxE1bB-0",
      delay: "0.3s",
    },
    {
      name: "aioxagent",
      tagline: "Enterprise AI Platform Site",
      summary:
        "Marketing site for an enterprise AI product — Web3 communities, onboarding, and feature storytelling.",
      highlights: ["Multi-language UX", "Web3 positioning", "Production landing"],
      coreTech: ["Vite", "Tailwind CSS", "AI / Web3", "Responsive UI"],
      image: "https://i.ibb.co/fg0Cs7f/aioxagent.png",
      category: "fullstack",
      liveUrl: "https://www.aioxagent.com/",
      delay: "0.4s",
    },
    {
      name: "Maghreb Grillage",
      tagline: "Corporate Website",
      summary:
        "Modern company site with Next.js 14, TypeScript, and shadcn/ui for a responsive brand presence.",
      highlights: ["SEO-ready pages", "Shadcn/UI components", "Vercel deployment"],
      coreTech: ["Next.js 14", "TypeScript", "Tailwind", "Shadcn/UI"],
      image: "https://i.ibb.co/kgb6wDhc/image.png",
      category: "fullstack",
      githubUrl: "https://github.com/Aitaouss/Maghrebgrillage-Website",
      liveUrl: "https://maghrebgrillage.vercel.app/",
      delay: "0.5s",
    },
    {
      name: "Ebazaar",
      tagline: "Online Marketplace",
      summary:
        "Fiverr-inspired marketplace where sellers run custom shops and buyers order digital services.",
      highlights: ["Seller bazaars", "Orders & reviews", "Full-stack beta"],
      coreTech: ["Next.js", "Fastify", "SQLite3", "TailwindCSS"],
      image:
        "https://i.ibb.co/XfBP8TLt/Screen-Shot-2025-08-05-at-1-09-18-PM-3.png",
      category: "fullstack",
      githubUrl: "https://github.com/REDX-at/Ebazaar",
      liveUrl: "https://ebazaar-beta.vercel.app/",
      figmaUrl:
        "https://www.figma.com/design/NT5x75Gx6wLGd0X6jwbzxm/eBazaar?node-id=0-1&t=6DwEmLus3Fml99ex-1",
      delay: "0.6s",
    },
    {
      name: "IntraEvent",
      tagline: "Hackathon · 1337",
      summary:
        "Real-time event app built at a hackathon — React front end paired with collaborative UI design.",
      highlights: ["Live interaction", "React prototype", "Figma UI"],
      coreTech: ["React", "Figma", "Real-Time", "UI Design"],
      image:
        "https://i.ibb.co/fdCG9Kx8/Screen-Shot-2025-08-01-at-6-59-28-PM.png",
      category: "design",
      figmaUrl:
        "https://www.figma.com/design/bo31ljsMZPXhO2uVBI8MI6/Untitled?t=OBwi5Yv7DDqprCsi-0",
      delay: "0.4s",
    },
    {
      name: "ft_transcendence",
      tagline: "Full-Stack Web App",
      summary:
        "School full-stack project with Next.js, Fastify, and SQLite — modern UI with Tailwind CSS.",
      highlights: ["SPA + API", "Auth & realtime", "1337 curriculum"],
      coreTech: ["Next.js", "Fastify", "SQLite3", "Tailwind CSS"],
      image: "https://i.ibb.co/wh3dyfCR/ai-ping.jpg",
      category: "fullstack",
      delay: "0.6s",
    },
    {
      name: "webserv",
      tagline: "HTTP Server · C++98",
      summary:
        "HTTP server from scratch in C++98 — requests, responses, and network protocols for 1337.",
      highlights: ["Raw sockets", "HTTP parsing", "Systems programming"],
      coreTech: ["C++98", "HTTP", "Sockets", "Low-level"],
      image:
        "https://i.ibb.co/KcZ472Wm/Lucid-Origin-A-stylized-illustration-of-a-futuristic-HTTP-serv-0.jpg",
      category: "tools",
      githubUrl: "https://github.com/bablilayoub/webserv",
      delay: "0.7s",
    },
    {
      name: "Previous Portfolio",
      tagline: "React & Tailwind",
      summary:
        "Earlier portfolio iteration — responsive layout and smooth in-page navigation.",
      highlights: ["React SPA", "Tailwind styling", "Project showcase"],
      coreTech: ["React", "Tailwind CSS", "Responsive"],
      image: "https://i.ibb.co/BHjKMM6w/background-for-portfol.png",
      category: "design",
      figmaUrl:
        "https://www.figma.com/design/1vWwAsbJuJTYhW0TU7hK9I/Untitled?node-id=0-1&p=f&t=VQI2fzLdN8OoB7wz-0",
      liveUrl: "https://aitaoussold.vercel.app/",
      delay: "0.8s",
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]"
    >
      <div className="container mx-auto">
        <SectionHeader
          label="Work"
          title="Featured projects"
          description="Production apps, open-source tools, and UI/UX work — filtered by what you want to explore."
        >
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3">
            {categories.map((tab) => {
              const count =
                tab.id === "all"
                  ? projects.length
                  : projects.filter((p) => p.category === tab.id).length;
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? "bg-white text-neutral-950 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                      : "bg-white/5 text-neutral-400 border border-white/10 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                      isActive
                        ? "bg-black/10 text-neutral-900"
                        : "bg-white/5 text-neutral-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </SectionHeader>

        <Stagger
          key={selectedCategory}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 items-stretch"
          stagger={0.06}
        >
          {filteredProjects.map((project) => (
            <StaggerItem key={project.name} className="h-full">
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }): JSX.Element {
  const primaryHref =
    project.liveUrl ?? project.figmaUrl ?? project.githubUrl ?? null;
  const primaryLabel = project.liveUrl
    ? "Live Demo"
    : project.figmaUrl
      ? "Figma Design"
      : project.githubUrl
        ? "View Code"
        : null;

  return (
    <Card
      className="card-modern overflow-hidden group flex flex-col h-full bg-black dark:bg-black border border-white/[0.08] transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.08)]"
    >
      <div className="p-3 pb-0 shrink-0">
        <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-black ring-1 ring-inset ring-white/5">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.name}
            className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-90 pointer-events-none"
            aria-hidden
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6 pt-4">
        <CardHeader className="p-0 pb-3 space-y-0">
          {project.badge && (
            <p className="text-label-editorial text-emerald-400/80 mb-2">
              {project.badge}
            </p>
          )}
          <h3 className="text-xl font-semibold text-white tracking-tight leading-tight">
            {project.name}
          </h3>
          <p className="text-sm text-neutral-400 mt-1">{project.tagline}</p>
        </CardHeader>

        <p className="text-sm text-neutral-300 leading-relaxed mb-3">
          {project.summary}
        </p>

        <ul className="space-y-1.5 mb-4">
          {project.highlights.map((item) => (
            <li
              key={item}
              className="text-xs text-neutral-500 flex gap-2 leading-snug"
            >
              <span className="text-emerald-500/80 shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.coreTech.map((tech) => (
            <span
              key={tech}
              className="text-[11px] py-1 px-2.5 rounded-md border border-white/5 bg-white/[0.03] text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-2 pt-4 border-t border-white/[0.06]">
          {primaryHref && primaryLabel && (
            <Button
              size="sm"
              className="btn-modern rounded-full bg-white hover:bg-neutral-100 text-neutral-950 flex-1 font-medium h-9"
              asChild
            >
              <a
                href={primaryHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2 shrink-0" />
                {primaryLabel}
              </a>
            </Button>
          )}

          {project.githubUrl && project.liveUrl && (
            <Button
              size="icon"
              variant="outline"
              className="btn-modern h-9 w-9 shrink-0 rounded-full border-white/10 bg-white/[0.03] text-neutral-300 hover:bg-white hover:text-black"
              asChild
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </Button>
          )}

          {project.figmaUrl && project.liveUrl && (
            <Button
              size="icon"
              variant="outline"
              className="btn-modern h-9 w-9 shrink-0 rounded-full border-white/10 bg-white/[0.03] text-neutral-300 hover:bg-white hover:text-black"
              asChild
            >
              <a
                href={project.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Figma design"
              >
                <PenLine className="w-4 h-4" />
              </a>
            </Button>
          )}

          {project.githubUrl && !project.liveUrl && project.figmaUrl && (
            <Button
              size="icon"
              variant="outline"
              className="btn-modern h-9 w-9 shrink-0 rounded-full border-white/10 bg-white/[0.03] text-neutral-300 hover:bg-white hover:text-black"
              asChild
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
