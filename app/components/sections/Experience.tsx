"use client";

import SectionTitle from "../ui/SectionTitle";
import TimelineItem from "../ui/TimelineItem";

const experiences = [
  {
    title: "Asistente Administrativo",
    company: "Mutua Madrileña",
    period: "2022 - 2023",
    description:
      "Gestión administrativa y atención al cliente en el sector asegurador.",
    achievements: [
      "Atención al cliente de manera eficiente",
      "Gestión de documentación y procedimientos administrativos",
      "Coordinación con diferentes departamentos",
    ],
  },
  {
    title: "Consultor de Ventas",
    company: "ACCOM (Naturgy)",
    period: "2021 - 2022",
    description:
      "Consulta y venta de servicios de energía para clientes residenciales.",
    achievements: [
      "Alta tasa de conversión de ventas",
      "Gestión de cartera de clientes",
      "Asesoramiento personalizado",
    ],
  },
  {
    title: "Agente de Ventas y Retención",
    company: "Lowi",
    period: "2020 - 2021",
    description:
      "Venta y retención de servicios de telecomunicaciones.",
    achievements: [
      "Emphasis on customer retention",
      "Resolución de incidencias",
      "Cumplimiento de objetivos mensuales",
    ],
  },
  {
    title: "Chef / Encargado de Cocina",
    company: "Restaurantes Madrid",
    period: "2016 - 2020",
    description:
      "Gestión de cocina en restaurantes de alta demanda.",
    achievements: [
      "Liderazgo de equipos de cocina",
      "Gestión de inventario y pedidos",
      "Control de calidad y seguridad alimentaria",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          title="Experiencia Profesional"
          subtitle="Mi trayectoria laboral"
        />

        <div className="max-w-3xl mx-auto">
          <div className="pl-4">
            {experiences.map((exp, index) => (
              <TimelineItem
                key={exp.company}
                {...exp}
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