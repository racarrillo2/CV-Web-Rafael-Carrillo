"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import Image from "next/image";
import Button from "../ui/Button";
import FadeIn from "../ui/FadeIn";
import { useTranslation } from "../../hooks/useTranslation";

const techStack = ["Python", "SQL", "Excel", "Power BI", "Fabric"];

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <FadeIn>
              <motion.p className="text-accent font-medium mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                {t("hero.greeting")}
              </motion.p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
                {t("hero.title")}
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-xl md:text-2xl text-accent font-medium mb-6">{t("hero.subtitle")}</h2>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-foreground-secondary leading-relaxed mb-8 max-w-lg">{t("hero.description")}</p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <Button href="#projects" variant="primary" icon={ArrowRight}>{t("hero.projects")}</Button>
                <Button href="#contact" variant="secondary" icon={Mail}>{t("hero.contact")}</Button>
                <Button href="/CV_Rafael_Carrillo_Mirabal.pdf" variant="outline" icon={Download}>{t("hero.downloadCV")}</Button>
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="left" delay={0.3}>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <motion.div
                  className="rounded-2xl bg-gradient-to-br from-accent/20 to-accent-hover/10"
                  animate={{ boxShadow: ["0 0 60px rgba(59, 130, 246, 0.2)", "0 0 80px rgba(59, 130, 246, 0.3)", "0 0 60px rgba(59, 130, 246, 0.2)"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="rounded-xl overflow-hidden border-2 border-accent/20 shadow-inner">
                  <Image src="/foto_rafael.jpg" alt="Foto de Rafael Carrillo" width={300} height={400} className="w-auto h-auto max-w-[300px] max-h-[400px]" unoptimized />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.5}>
          <div className="mt-16 pt-8 border-t border-accent/10">
            <p className="text-sm text-foreground-secondary mb-4 text-center">{t("hero.stack")}</p>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-background-secondary text-foreground-secondary text-sm border border-accent/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.5)" }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}