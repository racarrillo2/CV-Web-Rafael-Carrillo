"use client";

import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import { useTranslation } from "../../hooks/useTranslation";

const projects = [
  {
    titleEs: "Panel de Análisis de Ventas",
    titleEn: "Sales Analytics Dashboard",
    descriptionEs:
      "Dashboard interactivo para análisis de ventas con visualizaciones en Power BI. Incluye métricas clave, tendencias y segmentación de clientes.",
    descriptionEn:
      "Interactive dashboard for sales analysis with Power BI visualizations. Includes key metrics, trends, and customer segmentation.",
    technologies: ["Python", "Power BI", "Excel", "SQL"],
    githubLink: "https://github.com/racarrillo2",
    demoLink: "https://app.powerbi.com",
  },
  {
    titleEs: "Predicción de Pérdida de Clientes",
    titleEn: "Customer Churn Prediction",
    descriptionEs:
      "Modelo predictivo para identificar clientes en riesgo de cancelación. Análisis exploratorio y visualización de patrones de comportamiento.",
    descriptionEn:
      "Predictive model to identify customers at risk of cancellation. Exploratory analysis and behavior pattern visualization.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    githubLink: "https://github.com/racarrillo2",
  },
  {
    titleEs: "Automatización de Informes Financieros",
    titleEn: "Financial Report Automation",
    descriptionEs:
      "Automatización de reportes financieros usando Python y Excel. Reducción del tiempo de elaboración de informes en un 70%.",
    descriptionEn:
      "Financial report automation using Python and Excel. 70% reduction in report creation time.",
    technologies: ["Python", "Excel", "Pandas", "OpenPyXL"],
    githubLink: "https://github.com/racarrillo2",
  },
  {
    titleEs: "Análisis de Cesta de Compras",
    titleEn: "Market Basket Analysis",
    descriptionEs:
      "Análisis de cesta de compras para identificar patrones de compra. Implementación de algoritmo Apriori para reglas de asociación.",
    descriptionEn:
      "Market basket analysis to identify purchase patterns. Apriori algorithm implementation for association rules.",
    technologies: ["Python", "MLxtend", "SQL", "Tableau"],
    githubLink: "https://github.com/racarrillo2",
  },
];

export default function Projects() {
  const { language } = useTranslation();

  const projectData = projects.map((project) => ({
    title: language === "es" ? project.titleEs : project.titleEn,
    description: language === "es" ? project.descriptionEs : project.descriptionEn,
    technologies: project.technologies,
    githubLink: project.githubLink,
    demoLink: project.demoLink,
  }));

  return (
    <section id="projects" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          title={language === "es" ? "Proyectos" : "Projects"}
          subtitle={language === "es" ? "Proyectos reales que demuestran mis habilidades técnicas" : "Real projects that demonstrate my technical skills"}
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