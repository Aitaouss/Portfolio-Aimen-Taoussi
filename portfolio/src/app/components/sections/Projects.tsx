import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  delay: string;
  figmaUrl?: string;
}

export default function Projects(): JSX.Element {
  const projects: Project[] = [
    {
      title: "Outdoorpal – UI/UX Mobile App",
      description:
        "Complete UI/UX design for a mobile application dedicated to outdoor activity enthusiasts. Private freelance work, featuring a polished design and intuitive user journey.",
      tech: ["Figma", "User Flow", "UI/UX", "Mobile Design"],
      image: "https://i.ibb.co/SXdP0krw/image.png",
      //   githubUrl: "https://github.com", // or leave blank if private
      figmaUrl:
        "https://figma.com/design/w42erVqe3ZmBFYfWVXFa72/Outdoorpal?node-id=0-1&p=f&t=J2vkgaLfmGXxE1bB-0",
      delay: "0.2s",
    },
    {
      title: "Old Portfolio – React & Tailwind",
      description:
        "Previous version of my portfolio built with React and Tailwind CSS. Simple and modern presentation of my projects, with a responsive design and smooth navigation.",
      tech: ["React", "Tailwind CSS", "Responsive Design"],
      image: "https://i.ibb.co/BHjKMM6w/background-for-portfol.png", // replace with the correct link if needed
      // githubUrl: "https://github.com/yourusername/old-portfolio", // optional
      figmaUrl:
        "https://www.figma.com/design/1vWwAsbJuJTYhW0TU7hK9I/Untitled?node-id=0-1&p=f&t=VQI2fzLdN8OoB7wz-0", // replace with your real link
      liveUrl: "https://aitaoussold.vercel.app/",
      delay: "0.3s",
    },
    {
      title: "IntraEvent – Hackathon 1337",
      description:
        "Real-time event management application developed during a hackathon. Front-end with React and UI design on Figma, focusing on live interaction and collaboration.",
      tech: ["React", "Figma", "UI Design", "Real-Time"],
      image:
        "https://i.ibb.co/fdCG9Kx8/Screen-Shot-2025-08-01-at-6-59-28-PM.png",
      //   githubUrl: "https://github.com", // update if you want to include it
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
      // githubUrl: "https://github.com/Achraflaalalma/ft_transendence", // update with your repo if available
      delay: "0.6s",
    },
    {
      title: "webserv – HTTP Server in C++",
      description:
        "Complete implementation of an HTTP server from scratch in C++98. Advanced system project at 1337 school, handling requests, responses, and network protocols.",
      tech: ["C++98", "HTTP", "Sockets", "System Programming"],
      image:
        "https://i.ibb.co/KcZ472Wm/Lucid-Origin-A-stylized-illustration-of-a-futuristic-HTTP-serv-0.jpg",
      githubUrl: "https://github.com/bablilayoub/webserv", // add your repo if public
      delay: "0.8s",
    },
    {
      title: "Ebazaar – Online Marketplace Platform",
      description:
        "Ebazaar is an online marketplace platform inspired by Fiverr, where sellers can create their own custom shops and sell digital services or products. Buyers can browse bazaars, order, and review.",
      tech: ["Next.js", "TailwindCSS", "Fastify", "SQLite3"],
      image:
        "https://i.ibb.co/XfBP8TLt/Screen-Shot-2025-08-05-at-1-09-18-PM-3.png",
      githubUrl: "https://github.com/REDX-at/Ebazaar", // replace with your actual repo
      delay: "0.6s",
      liveUrl: "https://ebazaar-beta.vercel.app/", // replace with your live demo URL
      figmaUrl:
        "https://www.figma.com/design/NT5x75Gx6wLGd0X6jwbzxm/eBazaar?node-id=0-1&t=6DwEmLus3Fml99ex-1",
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
      githubUrl: "https://github.com/Aitaouss/Maghrebgrillage-Website",
      liveUrl: "https://maghrebgrillage.vercel.app/",
      delay: "0.7s",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-responsive-lg font-bold text-white mb-4 animate-slide-up">
            Featured Projects
          </h2>
          <p
            className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            A showcase of my latest work in development and design,
            demonstrating technical expertise and creative vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="card-modern bg-gray-900 border-gray-800 hover:border-red-500/50 overflow-hidden group animate-slide-up"
              style={{ animationDelay: project.delay }}
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-white text-lg sm:text-xl group-hover:text-red-400 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-gray-700 text-gray-300 hover:border-red-500 hover:text-red-400 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  {project.githubUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="btn-modern border-gray-700 text-gray-300 hover:border-red-500 hover:text-red-400 flex-1 bg-transparent"
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
                      className="btn-modern bg-red-500 hover:bg-red-600 text-white flex-1"
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
                      className="btn-modern border-gray-700 text-gray-300 hover:border-red-500 hover:text-red-400 flex-1 bg-transparent"
                      asChild
                    >
                      <a
                        href={project.figmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Figma Design
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
