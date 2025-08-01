import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Globe, Server, Database, Palette } from "lucide-react";
import type React from "react"; // Added import for React

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  color: string;
  delay: string;
}

export default function Skills(): JSX.Element {
  const skillCategories: SkillCategory[] = [
    {
      icon: <Globe className="w-8 h-8 text-orange-400" />,
      title: "Frontend",
      skills: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS"],
      color: "text-orange-400",
      delay: "0.2s",
    },
    {
      icon: <Server className="w-8 h-8 text-green-400" />,
      title: "Backend",
      skills: ["Node.js", "Express", "Fastify"],
      color: "text-green-400",
      delay: "0.4s",
    },
    {
      icon: <Database className="w-8 h-8 text-blue-400" />,
      title: "Database",
      skills: ["MariaDB", "PostgreSQL", "SQLite3"],
      color: "text-blue-400",
      delay: "0.6s",
    },
    {
      icon: <Palette className="w-8 h-8 text-purple-400" />,
      title: "Design",
      skills: ["Graphic Design", "UI/UX Design", "Adobe Creative Suite"],
      color: "text-purple-400",
      delay: "0.8s",
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 gradient-dark"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-responsive-lg font-bold text-white mb-4 animate-slide-up">
            Technical Skills
          </h2>
          <p
            className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            A comprehensive toolkit for building modern web applications and
            stunning designs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="card-modern bg-gray-900 border-gray-800 hover:border-red-500/50 animate-slide-up"
              style={{ animationDelay: category.delay }}
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">{category.icon}</div>
                <CardTitle className={`text-lg sm:text-xl ${category.color}`}>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-gray-800 text-gray-300 hover:bg-red-500 hover:text-white transition-colors text-xs sm:text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
