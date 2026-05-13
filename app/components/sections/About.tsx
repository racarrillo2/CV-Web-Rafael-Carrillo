"use client";

import { motion } from "framer-motion";
import FadeIn from "../ui/FadeIn";
import SectionTitle from "../ui/SectionTitle";

const valueProps = [
  {
    title: "Experiencia Comercial",
    description:
      "Años de experiencia en ventas y atención al cliente me han dado una comprensión profunda del negocio que enrichace mi análisis de datos.",
  },
  {
    title: "Capacidad Analítica",
    description:
      "Habilidad para transformar datos complejos en insights accionables que impulsan decisiones estratégicas.",
  },
  {
    title: "Adaptabilidad",
    description:
      "Transición exitosa del área comercial hacia数据分析 demuestra mi capacidad de aprendizaje y adaptación.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          title="Sobre Mí"
          subtitle="Conoce mi trayectoria y lo que me diferencia"
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <FadeIn>
            <div className="space-y-6">
              <p className="text-foreground-secondary leading-relaxed text-lg">
                Mi trayectoria profesional comenzó en el mundo de las ventas y la
                atención al cliente, donde desarrollé habilidades fundamentales
                como la comunicación, la resolución de problemas y la orientación
                a resultados.
              </p>
              <p className="text-foreground-secondary leading-relaxed text-lg">
                Esta experiencia comercial me permitió comprender profundamente
                cómo funcionan los negocios desde la perspectiva del cliente y
                del equipo de ventas. Sin embargo, siempre tuve una inclinación
                natural hacia los números y el análisis.
              </p>
              <p className="text-foreground-secondary leading-relaxed text-lg">
                Decidí dar el paso hacia el análisis de datos para combinar mi
                visión de negocio con herramientas técnicas que me permiten
                generar insights más profundos y precisos. El bootcamp de
                Upgrade HUB me proporcionó las habilidades técnicas necesarias
                para esta transición.
              </p>
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
                  <p className="text-foreground-secondary leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}