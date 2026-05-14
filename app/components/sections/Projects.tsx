"use client";

import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";

const projects = [
  {
    title: "Panel de Análisis de Ventas",
    description:
      "Dashboard interactivo para análisis de ventas con visualizaciones en Power BI. Incluye métricas clave, tendencias y segmentación de clientes.",
    technologies: ["Python", "Power BI", "Excel", "SQL"],
    githubLink: "https://github.com/racarrillo2",
    demoLink: "https://app.powerbi.com",
  },
  {
    title: "Predicción de Pérdida de Clientes",
    description:
      "Modelo predictivo para identificar clientes en riesgo de cancelación. Análisis exploratorio y visualización de patrones de comportamiento.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    githubLink: "https://github.com/racarrillo2",
  },
  {
    title: "Automatización de Informes Financieros",
    description:
      "Automatización de reportes financieros usando Python y Excel. Reducción del tiempo de elaboración de informes en un 70%.",
    technologies: ["Python", "Excel", "Pandas", "OpenPyXL"],
    githubLink: "https://github.com/racarrillo2",
  },
  {
    title: "Análisis de Cesta de Compras",
    description:
      "Análisis de cesta de compras para identificar patrones de compra. Implementación de algoritmo Apriori para reglas de asociación.",
    technologies: ["Python", "MLxtend", "SQL", "Tableau"],
    githubLink: "https://github.com/racarrillo2",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          title="Proyectos"
          subtitle="Proyectos reales que demuestran mis habilidades técnicas"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}