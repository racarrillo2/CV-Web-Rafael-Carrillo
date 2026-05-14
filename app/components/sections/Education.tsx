"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import FadeIn from "../ui/FadeIn";
import SectionTitle from "../ui/SectionTitle";

const education = [
  {
    icon: Award,
    title: "Bootcamp de Análisis de Datos & IA",
    institution: "Upgrade HUB Madrid",
    period: "2023 - 2024",
    description:
      "Programa intensivo de 400 horas cubriendo Python, SQL, Power BI, Machine Learning básico y proyectos prácticos.",
  },
  {
    icon: BookOpen,
    title: "Inglés B2",
    institution: "LSI Language College",
    period: "2022",
    description: "Certificación de dominio del idioma inglés nivel intermedio-alto.",
  },
  {
    icon: GraduationCap,
    title: "Contaduría Pública (Estudios)",
    institution: "Universidad José Antonio Páez",
    period: "2014 - 2016",
    description:
      "Estudios universitarios en administración y finanzas. Estudios incompletos por cambio de país.",
  },
];

export default function Education() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          title="Educación"
          subtitle="Formación académica y certificaciones"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.1}>
              <motion.article
                className="p-6 rounded-xl bg-background border border-transparent hover:border-accent/30 transition-all duration-300 h-full"
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <item.icon className="text-accent" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-accent font-medium text-sm mb-2">
                  {item.institution}
                </p>
                <span className="text-sm text-foreground-secondary bg-background-secondary px-2 py-1 rounded inline-block mb-3">
                  {item.period}
                </span>
                <p className="text-foreground-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}