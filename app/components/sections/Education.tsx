"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import FadeIn from "../ui/FadeIn";
import SectionTitle from "../ui/SectionTitle";
import { useTranslation } from "../../hooks/useTranslation";

const education = [
  {
    icon: Award,
    titleEs: "Bootcamp de Análisis de Datos & IA",
    titleEn: "Data Analysis & AI Bootcamp",
    institution: "Upgrade HUB Madrid",
    period: "2023 - 2024",
    descriptionEs:
      "Programa intensivo de 400 horas cubriendo Python, SQL, Power BI, Machine Learning básico y proyectos prácticos.",
    descriptionEn:
      "Intensive 400-hour program covering Python, SQL, Power BI, basic Machine Learning, and practical projects.",
  },
  {
    icon: BookOpen,
    titleEs: "Inglés B2",
    titleEn: "English B2",
    institution: "LSI Language College",
    period: "2022",
    descriptionEs: "Certificación de dominio del idioma inglés nivel intermedio-alto.",
    descriptionEn: "English language proficiency certification at intermediate-high level.",
  },
  {
    icon: GraduationCap,
    titleEs: "Contaduría Pública (Estudios)",
    titleEn: "Public Accounting (Studies)",
    institution: "Universidad José Antonio Páez",
    period: "2014 - 2016",
    descriptionEs:
      "Estudios universitarios en administración y finanzas. Estudios incompletos por cambio de país.",
    descriptionEn:
      "University studies in administration and finance. Incomplete studies due to country change.",
  },
];

export default function Education() {
  const { language, t } = useTranslation();

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          title={t("education.title")}
          subtitle={t("education.subtitle")}
        />

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((item, index) => (
            <FadeIn key={item.titleEs} delay={index * 0.1}>
              <motion.article
                className="p-6 rounded-xl bg-background border border-transparent hover:border-accent/30 transition-all duration-300 h-full"
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <item.icon className="text-accent" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {language === "es" ? item.titleEs : item.titleEn}
                </h3>
                <p className="text-accent font-medium text-sm mb-2">
                  {item.institution}
                </p>
                <span className="text-sm text-foreground-secondary bg-background-secondary px-2 py-1 rounded inline-block mb-3">
                  {item.period}
                </span>
                <p className="text-foreground-secondary text-sm leading-relaxed">
                  {language === "es" ? item.descriptionEs : item.descriptionEn}
                </p>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}