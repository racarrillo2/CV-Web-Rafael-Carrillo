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
  {
    titleEs: "Dashboard Insurance Project Iberia Seguros",
    titleEn: "Dashboard Insurance Project Iberia Seguros",
    descriptionEs:
      "Dashboard de análisis de seguros desarrollado con Microsoft Fabric y Power BI, enfocado en KPIs, rentabilidad, deserción de clientes e insights estratégicos.",
    descriptionEn:
      "Insurance analytics dashboard developed with Microsoft Fabric and Power BI, focused on KPIs, profitability, customer churn and strategic insights.",
    technologies: ["Microsoft Fabric", "Power BI"],
    githubLink: "https://github.com/racarrillo2/Dashboar-Insurance-Project-Iberica-Seguros-",
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