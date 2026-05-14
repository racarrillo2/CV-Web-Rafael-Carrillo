"use client";

import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";
import FadeIn from "./FadeIn";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
  image?: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  githubLink,
  demoLink,
  image,
  index,
}: ProjectCardProps) {
  const href = githubLink || demoLink;

  return (
    <FadeIn delay={index * 0.1}>
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block bg-background-secondary rounded-xl overflow-hidden border border-transparent hover:border-accent/30 transition-all duration-300"
        whileHover={{ y: -4 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {image && (
          <div className="h-48 overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>
        )}

        <div className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-foreground-secondary leading-relaxed mb-4">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-md bg-accent/10 text-accent"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            {githubLink && (
              <span className="inline-flex items-center gap-1.5 text-sm text-foreground-secondary group-hover:text-accent transition-colors">
                <Code size={16} />
                Código
              </span>
            )}
            {demoLink && (
              <span className="inline-flex items-center gap-1.5 text-sm text-foreground-secondary group-hover:text-accent transition-colors">
                <ExternalLink size={16} />
                Demo
              </span>
            )}
          </div>
        </div>
      </motion.a>
    </FadeIn>
  );
}