"use client";

import { useState } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Github, ExternalLink } from "lucide-react";

type ProjectCategory = "all" | "fullstack" | "design" | "tools";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  category: "fullstack" | "design" | "tools";
  badge?: string;
  githubUrl?: string;
  liveUrl?: string;
  figmaUrl?: string;
  delay: string;
}

export default function Projects(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full-Stack & Web" },
    { id: "design", label: "UI/UX & Design" },
    { id: "tools", label: "CLI & Systems" },
  ];

  const projects: Project[] = [
    {
      title: "profita – E-commerce Profitability Dashboard",
      description:
        "Real-time profitability and operations dashboard for e-commerce sellers — products, inventory, orders, expenses, and true net profit in one place. Built for solo sellers and small teams with first-class support for Moroccan workflows (MAD, TVA, WhatsApp orders, CashPlus/COD invoices).",
      tech: [
        "Next.js",
        "React 19",
        "Convex",
        "Clerk",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Recharts",
      ],
      image:
        "https://i.ibb.co/4w1zkXZD/Screenshot-from-2026-09-04-17-00-32.png",
      category: "fullstack",
      badge: "Flagship",
      liveUrl: "https://profita.aitaouss.me/",
      delay: "0.2s",
    },
    {
      title: "create-stackforge-app – Full-Stack CLI Scaffolder",
      description:
        "Production-ready CLI that scaffolds a full-stack app with Next.js (App Router), NestJS, Prisma, PostgreSQL or SQLite, Tailwind CSS, shadcn/ui, JWT authentication, Axios, Docker, and pnpm workspaces. Supports interactive prompts and non-interactive flags, with auth flow and docker compose ready out of the box.",
      tech: [
        "Next.js",
        "NestJS",
        "Prisma",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Docker",
        "CLI",
      ],
      image:
        "https://i.ibb.co/x8JQ7Hbk/Screenshot-from-2026-09-04-17-05-56.png",
      category: "tools",
      badge: "npm package",
      liveUrl: "https://www.npmjs.com/package/create-stackforge-app",
      delay: "0.3s",
    },
    {
      title: "OCP Supply Chain – Production & Stock Management System",
      description:
        "OCP Supply Chain is a system for monitoring production flows, managing stock, and generating reports, enabling real-time operational decisions.",
      tech: [
        "Next.js",
        "TypeScript",
        "Express.js",
        "Drag-and-Drop UI",
        "Real-Time Dashboards",
        "Data Integrity",
        "Reporting Tools",
      ],
      image:
        "https://i.ibb.co/Z6ZxxtJZ/Screenshot-from-2026-02-24-12-42-14.png",
      category: "fullstack",
      delay: "0.4s",
      liveUrl: "https://supply-chain.1337.ma/",
    },
    {
      title: "HSE SBU Manufacturing – Data & KPI Management Platform",
      description:
        "HSE SBU Manufacturing is a platform for managing HSE data, tracking KPIs, and supervising workflows, ensuring operational efficiency and compliance.",
      tech: [
        "Next.js",
        "TypeScript",
        "Nest.js",
        "DTO Validation",
        "RBAC",
        "Data Aggregation",
        "Interactive Dashboards",
      ],
      image:
        "https://i.ibb.co/qYFvSNBx/Screenshot-from-2026-02-24-12-29-10.png",
      category: "fullstack",
      delay: "0.5s",
      liveUrl: "https://hse-dashboard.1337.ma/",
    },
    {
      title: "Outdoorpal – UI/UX Mobile App",
      description:
        "Complete UI/UX design for a mobile application dedicated to outdoor activity enthusiasts. Private freelance work, featuring a polished design and intuitive user journey.",
      tech: ["Figma", "User Flow", "UI/UX", "Mobile Design"],
      image: "https://i.ibb.co/SXdP0krw/image.png",
      category: "design",
      figmaUrl:
        "https://figma.com/design/w42erVqe3ZmBFYfWVXFa72/Outdoorpal?node-id=0-1&p=f&t=J2vkgaLfmGXxE1bB-0",
      delay: "0.3s",
    },
    {
      title: "aioxagent – Enterprise AI Agents",
      description:
        "Modern website design for aioxagent, an enterprise AI platform serving Web3 communities. Showcases features like instant Q&A, onboarding flows, community moderation, analytics, and multi-language support, with a polished UI and intuitive user journey.",
      tech: ["vite.js", "Tailwind CSS", "AI Integration", "Web3"],
      image: "https://i.ibb.co/fg0Cs7f/aioxagent.png",
      category: "fullstack",
      liveUrl: "https://www.aioxagent.com/",
      delay: "0.4s",
    },
    {
      title: "Maghreb Grillage – Modern Website",
      description:
        "Modern website for Maghreb Grillage company built with Next.js 14 and TypeScript. Features a responsive design with Tailwind CSS and modern UI components using Shadcn/UI for an optimal user experience.",
      tech: [
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn/UI",
        "Lucide React",
      ],
      image: "https://i.ibb.co/kgb6wDhc/image.png",
      category: "fullstack",
      githubUrl: "https://github.com/Aitaouss/Maghrebgrillage-Website",
      liveUrl: "https://maghrebgrillage.vercel.app/",
      delay: "0.5s",
    },
    {
      title: "Ebazaar – Online Marketplace Platform",
      description:
        "Ebazaar is an online marketplace platform inspired by Fiverr, where sellers can create their own custom shops and sell digital services or products. Buyers can browse bazaars, order, and review.",
      tech: ["Next.js", "TailwindCSS", "Fastify", "SQLite3"],
      image:
        "https://i.ibb.co/XfBP8TLt/Screen-Shot-2025-08-05-at-1-09-18-PM-3.png",
      category: "fullstack",
      githubUrl: "https://github.com/REDX-at/Ebazaar",
      delay: "0.6s",
      liveUrl: "https://ebazaar-beta.vercel.app/",
      figmaUrl:
        "https://www.figma.com/design/NT5x75Gx6wLGd0X6jwbzxm/eBazaar?node-id=0-1&t=6DwEmLus3Fml99ex-1",
    },
    {
      title: "IntraEvent – Hackathon 1337",
      description:
        "Real-time event management application developed during a hackathon. Front-end with React and UI design on Figma, focusing on live interaction and collaboration.",
      tech: ["React", "Figma", "UI Design", "Real-Time"],
      image:
        "https://i.ibb.co/fdCG9Kx8/Screen-Shot-2025-08-01-at-6-59-28-PM.png",
      category: "design",
      figmaUrl:
        "https://www.figma.com/design/bo31ljsMZPXhO2uVBI8MI6/Untitled?t=OBwi5Yv7DDqprCsi-0",
      delay: "0.4s",
    },
    {
      title: "ft_transcendence – Full-Stack Web App",
      description:
        "Full-stack web application developed with Next.js (frontend), Fastify (backend), and SQLite3 for the database. Modern design with Tailwind CSS.",
      tech: ["Next.js", "Fastify", "SQLite3", "Tailwind CSS"],
      image: "https://i.ibb.co/wh3dyfCR/ai-ping.jpg",
      category: "fullstack",
      delay: "0.6s",
    },
    {
      title: "webserv – HTTP Server in C++",
      description:
        "Complete implementation of an HTTP server from scratch in C++98. Advanced system project at 1337 school, handling requests, responses, and network protocols.",
      tech: ["C++98", "HTTP", "Sockets", "System Programming"],
      image:
        "https://i.ibb.co/KcZ472Wm/Lucid-Origin-A-stylized-illustration-of-a-futuristic-HTTP-serv-0.jpg",
      category: "tools",
      githubUrl: "https://github.com/bablilayoub/webserv",
      delay: "0.7s",
    },
    {
      title: "Old Portfolio – React & Tailwind",
      description:
        "Previous version of my portfolio built with React and Tailwind CSS. Simple and modern presentation of my projects, with a responsive design and smooth navigation.",
      tech: ["React", "Tailwind CSS", "Responsive Design"],
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
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black"
    >
      <div className="container mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-responsive-lg font-bold text-white mb-4 animate-slide-up">
            Featured Projects
          </h2>
          <p
            className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg animate-slide-up mb-8"
            style={{ animationDelay: "0.2s" }}
          >
            A curated showcase of production applications, open-source tools, and UI/UX designs.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((tab) => {
              const count =
                tab.id === "all"
                  ? projects.length
                  : projects.filter((p) => p.category === tab.id).length;
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? "bg-white text-black shadow-lg shadow-white/10 scale-105"
                      : "bg-gray-900 text-gray-400 border border-gray-800 hover:border-gray-700 hover:text-white"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? "bg-black/15 text-black font-semibold"
                        : "bg-gray-800 text-gray-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.title}
              className="card-modern bg-gray-900 border-gray-800 hover:border-white/50 overflow-hidden group animate-slide-up flex flex-col h-full relative"
              style={{ animationDelay: project.delay }}
            >
              {/* Browser mockup header */}
              <div className="bg-gray-950/90 border-b border-gray-800/80 px-4 py-2.5 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
                </div>
                {project.badge && (
                  <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-white/10 text-white border border-white/20">
                    {project.badge}
                  </span>
                )}
              </div>

              {/* Project preview image */}
              <div className="aspect-video overflow-hidden relative shrink-0 bg-gray-950">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <CardHeader className="p-0 pb-4">
                  <CardTitle className="text-white text-lg sm:text-xl group-hover:text-gray-200 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-[11px] py-0.5 border-gray-800 bg-gray-950/60 text-gray-300 hover:border-gray-600 hover:text-white transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto flex gap-3 pt-4 border-t border-gray-800/60">
                  {project.githubUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="btn-modern border-gray-700 text-gray-300 hover:border-white hover:text-black flex-1 bg-transparent"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="btn-modern bg-white hover:bg-gray-200 text-black flex-1 font-medium"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.figmaUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="btn-modern border-gray-700 text-gray-300 hover:border-white hover:text-black flex-1 bg-transparent"
                      asChild
                    >
                      <a
                        href={project.figmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Figma
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
