"use client";

import { motion } from "framer-motion";
import FadeIn from "../ui/FadeIn";
import SectionTitle from "../ui/SectionTitle";
import { useTranslation } from "../../hooks/useTranslation";

export default function About() {
  const { t } = useTranslation();

  const valueProps = [
    { title: t("about.expCommercial"), description: t("about.expCommercialDesc") },
    { title: t("about.capacidad"), description: t("about.capacidadDesc") },
    { title: t("about.adaptabilidad"), description: t("about.adaptabilidadDesc") },
  ];

  return (
    <section id="about" className="py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle title={t("about.title")} subtitle={t("about.subtitle")} />
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <FadeIn>
            <div className="space-y-6">
              <p className="text-foreground-secondary leading-relaxed text-lg">{t("about.p1")}</p>
              <p className="text-foreground-secondary leading-relaxed text-lg">{t("about.p2")}</p>
              <p className="text-foreground-secondary leading-relaxed text-lg">{t("about.p3")}</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              {valueProps.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="p-5 rounded-lg bg-background border border-accent/10 hover:border-accent/30 transition-all duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    {item.title}
                  </h3>
                  <p className="text-foreground-secondary leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}