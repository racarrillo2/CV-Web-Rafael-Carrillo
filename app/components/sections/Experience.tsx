"use client";

import SectionTitle from "../ui/SectionTitle";
import TimelineItem from "../ui/TimelineItem";
import { useTranslation } from "../../hooks/useTranslation";

const experiences = [
  {
    titleEs: "Asistente Administrativo",
    titleEn: "Administrative Assistant",
    company: "Mutua Madrileña",
    period: "2022 - 2023",
    descriptionEs: "Gestión administrativa y atención al cliente en el sector asegurador.",
    descriptionEn: "Administrative management and customer service in the insurance sector.",
    achievementsEs: [
      "Atención al cliente de manera eficiente",
      "Gestión de documentación y procedimientos administrativos",
      "Coordinación con diferentes departamentos",
    ],
    achievementsEn: [
      "Efficient customer service",
      "Documentation and administrative procedures management",
      "Coordination with different departments",
    ],
  },
  {
    titleEs: "Consultor de Ventas",
    titleEn: "Sales Consultant",
    company: "ACCOM (Naturgy)",
    period: "2021 - 2022",
    descriptionEs: "Consulta y venta de servicios de energía para clientes residenciales.",
    descriptionEn: "Consultation and sale of energy services for residential customers.",
    achievementsEs: [
      "Alta tasa de conversión de ventas",
      "Gestión de cartera de clientes",
      "Asesoramiento personalizado",
    ],
    achievementsEn: [
      "High sales conversion rate",
      "Customer portfolio management",
      "Personalized advice",
    ],
  },
  {
    titleEs: "Agente de Ventas y Retención",
    titleEn: "Sales and Retention Agent",
    company: "Lowi",
    period: "2020 - 2021",
    descriptionEs: "Venta y retención de servicios de telecomunicaciones.",
    descriptionEn: "Sales and retention of telecommunications services.",
    achievementsEs: [
      "Énfasis en retención de clientes",
      "Resolución de incidencias",
      "Cumplimiento de objetivos mensuales",
    ],
    achievementsEn: [
      "Emphasis on customer retention",
      "Incident resolution",
      "Monthly objectives fulfillment",
    ],
  },
  {
    titleEs: "Chef / Encargado de Cocina",
    titleEn: "Chef / Kitchen Manager",
    company: "Restaurantes Madrid",
    period: "2016 - 2020",
    descriptionEs: "Gestión de cocina en restaurantes de alta demanda.",
    descriptionEn: "Kitchen management in high-demand restaurants.",
    achievementsEs: [
      "Liderazgo de equipos de cocina",
      "Gestión de inventario y pedidos",
      "Control de calidad y seguridad alimentaria",
    ],
    achievementsEn: [
      "Kitchen team leadership",
      "Inventory and orders management",
      "Quality control and food safety",
    ],
  },
];

export default function Experience() {
  const { language } = useTranslation();

  const exps = experiences.map((exp) => ({
    title: language === "es" ? exp.titleEs : exp.titleEn,
    company: exp.company,
    period: exp.period,
    description: language === "es" ? exp.descriptionEs : exp.descriptionEn,
    achievements: language === "es" ? exp.achievementsEs : exp.achievementsEn,
  }));

  return (
    <section id="experience" className="py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          title={language === "es" ? "Experiencia Profesional" : "Work Experience"}
          subtitle={language === "es" ? "Mi trayectoria laboral" : "My professional journey"}
        />

        <div className="max-w-3xl mx-auto">
          <div className="pl-4">
            {exps.map((exp, index) => (
              <TimelineItem
                key={exp.company}
                title={exp.title}
                company={exp.company}
                period={exp.period}
                description={exp.description}
                achievements={exp.achievements}
                index={index}
                isLast={index === exps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}