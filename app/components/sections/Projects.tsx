"use client";

import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import { useTranslation } from "../../hooks/useTranslation";

const projects: {
  titleEs: string;
  titleEn: string;
  descriptionEs: string;
  descriptionEn: string;
  technologies: string[];
  githubLink: string;
  demoLink?: string;
}[] = [
  {
    titleEs: "SQL IA Chat Analytics",
    titleEn: "SQL IA Chat Analytics",
    descriptionEs:
      "Proyecto de análisis de datos conversacional utilizando SQL, Python y TiDB Cloud para explorar, consultar y visualizar información de forma eficiente.",
    descriptionEn:
      "Conversational data analysis project using SQL, Python and TiDB Cloud to efficiently explore, query and visualize information.",
    technologies: ["SQL", "Python", "TiDB Cloud"],
    githubLink: "https://github.com/racarrillo2/sql-ai-chat-analytics",
  },
];

export default function Projects() {
  const { language, t } = useTranslation();

  const projectData = projects.map((project) => ({
    title: language === "es" ? project.titleEs : project.titleEn,
    description: language === "es" ? project.descriptionEs : project.descriptionEn,
    technologies: project.technologies,
    githubLink: project.githubLink,
    demoLink: project.demoLink,
  }));

  return (
    <section id="projects" className="py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          title={t("projects.title")}
          subtitle={t("projects.subtitle")}
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projectData.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}