"use client";

import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";

const projects = [
  {
    title: "Sales Analytics Dashboard",
    description:
      "Dashboard interactivo para análisis de ventas con visualizaciones en Power BI. Incluye métricas clave, tendencias y segmentación de clientes.",
    technologies: ["Python", "Power BI", "Excel", "SQL"],
    githubLink: "https://github.com",
    demoLink: "https://app.powerbi.com",
  },
  {
    title: "Customer Churn Prediction",
    description:
      "Modelo predictivo para identificar clientes en riesgo de cancelación. Análisis exploratorio y visualización de patrones de comportamiento.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    githubLink: "https://github.com",
  },
  {
    title: "Financial Report Automation",
    description:
      "Automatización de reportes financieros usando Python y Excel. Reducción del tiempo de elaboración de informes en un 70%.",
    technologies: ["Python", "Excel", "Pandas", "OpenPyXL"],
    githubLink: "https://github.com",
  },
  {
    title: "Market Basket Analysis",
    description:
      "Análisis de cesta de compras para identificar patrones de compra. Implementación de algoritmo Apriori para reglas de asociación.",
    technologies: ["Python", "MLxtend", "SQL", "Tableau"],
    githubLink: "https://github.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
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