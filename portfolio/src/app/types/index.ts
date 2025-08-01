import type React from "react";
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  category: "development" | "design";
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "database" | "design";
  proficiency: number;
}

export interface Experience {
  title: string;
  duration: string;
  description: string;
  icon: React.ReactNode;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  location: string;
}
