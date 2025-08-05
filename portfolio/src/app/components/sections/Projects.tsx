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
}

export default function Projects(): JSX.Element {
  const projects: Project[] = [
    {
      title: "Outdoorpal – UI/UX Mobile App",
      description:
        "Conception UI/UX complète d'une application mobile dédiée aux amateurs d'activités en plein air. Travail freelance privé, avec design soigné et parcours utilisateur intuitif.",
      tech: ["Figma", "User Flow", "UI/UX", "Mobile Design"],
      image: "https://i.ibb.co/SXdP0krw/image.png",
      //   githubUrl: "https://github.com", // or leave blank if private
      delay: "0.2s",
    },
    {
      title: "IntraEvent – Hackathon 1337",
      description:
        "Application d'événementiel en temps réel développée lors d’un hackathon. Front-end avec React et conception UI sur Figma, mettant l’accent sur l’interaction live et la collaboration.",
      tech: ["React", "Figma", "UI Design", "Real-Time"],
      image:
        "https://i.ibb.co/fdCG9Kx8/Screen-Shot-2025-08-01-at-6-59-28-PM.png",
      //   githubUrl: "https://github.com", // update if you want to include it
      delay: "0.4s",
    },
    {
      title: "ft_transcendence – Full-Stack Web App",
      description:
        "Application web full-stack développée avec Next.js (frontend), Fastify (backend), et SQLite3 pour la base de données. Design moderne avec Tailwind CSS.",
      tech: ["Next.js", "Fastify", "SQLite3", "Tailwind CSS"],
      image: "https://i.ibb.co/wh3dyfCR/ai-ping.jpg",
      githubUrl: "https://github.com/Achraflaalalma/ft_transendence", // update with your repo if available
      delay: "0.6s",
    },
    {
      title: "webserv – HTTP Server in C++",
      description:
        "Implémentation complète d’un serveur HTTP à partir de zéro en C++98. Projet système avancé de l’école 1337, avec gestion des requêtes, réponses, et protocoles réseau.",
      tech: ["C++98", "HTTP", "Sockets", "System Programming"],
      image:
        "https://i.ibb.co/KcZ472Wm/Lucid-Origin-A-stylized-illustration-of-a-futuristic-HTTP-serv-0.jpg",
      githubUrl: "https://github.com/bablilayoub/webserv", // add your repo if public
      delay: "0.8s",
    },
    {
      title: "Ebazaar – Online Marketplace Platform",
      description:
        "Ebazaar est une plateforme de marché en ligne inspirée de Fiverr, où les vendeurs peuvent créer leurs propres boutiques personnalisées et vendre des services ou produits numériques. Les acheteurs peuvent parcourir les bazars, commander et évaluer.",
      tech: ["Next.js", "TailwindCSS", "Fastify", "SQLite3"],
      image:
        "https://i.ibb.co/XfBP8TLt/Screen-Shot-2025-08-05-at-1-09-18-PM-3.png",
      githubUrl: "https://github.com/REDX-at/Ebazaar", // replace with your actual repo
      delay: "0.6s",
      liveUrl: "https://ebazaar-beta.vercel.app/", // replace with your live demo URL
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
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
