"use client";

import SectionTitle from "../ui/SectionTitle";
import TimelineItem from "../ui/TimelineItem";
import { useTranslation } from "../../hooks/useTranslation";

const experiences = [
  {
    title: "Asistente Administrativo",
    company: "Mutua Madrileña",
    period: "2022 - 2023",
    description:
      "Gestión administrativa y atención al cliente en el sector asegurador.",
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
    title: "Consultor de Ventas",
    company: "ACCOM (Naturgy)",
    period: "2021 - 2022",
    description:
      "Consulta y venta de servicios de energía para clientes residenciales.",
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
    title: "Agente de Ventas y Retención",
    company: "Lowi",
    period: "2020 - 2021",
    description:
      "Venta y retención de servicios de telecomunicaciones.",
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
    title: "Chef / Encargado de Cocina",
    company: "Restaurantes Madrid",
    period: "2016 - 2020",
    description:
      "Gestión de cocina en restaurantes de alta demanda.",
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

  return (
    <section id="experience" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          title={language === "es" ? "Experiencia Profesional" : "Work Experience"}
          subtitle={language === "es" ? "Mi trayectoria laboral" : "My professional journey"}
        />

        <div className="max-w-3xl mx-auto">
          <div className="pl-4">
            {experiences.map((exp, index) => (
              <TimelineItem
                key={exp.company}
                title={exp.title}
                company={exp.company}
                period={exp.period}
                description={exp.description}
                achievements={language === "es" ? exp.achievementsEs : exp.achievementsEn}
                index={index}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}