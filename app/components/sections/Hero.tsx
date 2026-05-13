"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import Image from "next/image";
import Button from "../ui/Button";
import FadeIn from "../ui/FadeIn";

const techStack = [
  "Python",
  "SQL",
  "Excel",
  "Power BI",
  "Fabric",
];

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <FadeIn>
              <motion.p
                className="text-accent font-medium mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Hola, soy
              </motion.p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
                Rafael Carrillo
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="text-xl md:text-2xl text-accent font-medium mb-6">
                Data Analyst | Business & Sales Background
              </h2>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-foreground-secondary leading-relaxed mb-8 max-w-lg">
                Profesional orientado a resultados con experiencia en negocio y
                transición hacia análisis de datos. Combino habilidades técnicas
                con visión de negocio para generar insights actionable.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <Button
                  href="#projects"
                  variant="primary"
                  icon={ArrowRight}
                >
                  Explorar proyectos
                </Button>
                <Button
                  href="#contact"
                  variant="secondary"
                  icon={Mail}
                >
                  Contactar
                </Button>
                <Button
                  href="#"
                  variant="outline"
                  icon={Download}
                  onClick={() => {}}
                >
                  Descargar CV
                </Button>
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="left" delay={0.3}>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <motion.div
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-accent/20 to-accent-hover/10"
                  animate={{
                    boxShadow: [
                      "0 0 60px rgba(59, 130, 246, 0.2)",
                      "0 0 80px rgba(59, 130, 246, 0.3)",
                      "0 0 60px rgba(59, 130, 246, 0.2)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-accent/20">
                    <Image
                      src="/perfil.jpg"
                      alt="Foto de Rafael Carrillo"
                      width={288}
                      height={288}
                      className="w-full h-full object-cover object-center"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.5}>
          <div className="mt-16 pt-8 border-t border-accent/10">
            <p className="text-sm text-foreground-secondary mb-4 text-center">
              Stack tecnológico
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-background-secondary text-foreground-secondary text-sm border border-accent/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    borderColor: "rgba(59, 130, 246, 0.5)",
                  }}
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