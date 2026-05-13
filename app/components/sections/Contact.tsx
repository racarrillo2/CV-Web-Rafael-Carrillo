"use client";

import { motion } from "framer-motion";
import { Link, Code, Mail } from "lucide-react";
import FadeIn from "../ui/FadeIn";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

const contactMethods = [
  {
    icon: Link,
    label: "LinkedIn",
    description: "Conectemos profesionalmente",
    href: "https://www.linkedin.com/in/rafael-carrillo-mirabal/",
    color: "from-blue-600 to-blue-700",
  },
  {
    icon: Code,
    label: "GitHub",
    description: "Explora mi código",
    href: "https://github.com/racarrillo2",
    color: "from-gray-700 to-gray-800",
  },
  {
    icon: Mail,
    label: "Email",
    description: "racm171193@hotmail.com",
    href: "mailto:racm171193@hotmail.com",
    color: "from-red-500 to-red-600",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          title="Contacto"
          subtitle="¿Interesado en trabajar juntos? Contáctame"
        />

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <FadeIn key={method.label} delay={index * 0.1}>
                <motion.a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 rounded-xl bg-background-secondary border border-transparent hover:border-accent/30 transition-all duration-300 text-center group"
                  whileHover={{ y: -4 }}
                >
                  <motion.div
                    className={`w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-br ${method.color}`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <method.icon className="text-white" size={24} />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                    {method.label}
                  </h3>
                  <p className="text-sm text-foreground-secondary">
                    {method.description}
                  </p>
                </motion.a>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-accent/10 to-accent-hover/5 border border-accent/20">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                ¿Listo para trabajar juntos?
              </h3>
              <p className="text-foreground-secondary mb-6">
                Siempre estoy abierto a nuevas oportunidades y proyectos
                interesantes.
              </p>
              <Button href="mailto:racm171193@hotmail.com" variant="primary">
                <Mail size={18} />
                Envíame un mensaje
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}