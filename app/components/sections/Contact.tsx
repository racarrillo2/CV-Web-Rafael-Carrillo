"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FadeIn from "../ui/FadeIn";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import { Mail } from "lucide-react";
import { useTranslation } from "../../hooks/useTranslation";

export default function Contact() {
  const { language, t } = useTranslation();

  const contactMethods = [
    {
      image: "/imagen_linkedin.svg",
      label: t("contact.linkedin"),
      description: t("contact.linkedinDesc"),
      href: "https://www.linkedin.com/in/rafael-carrillo-mirabal/",
    },
    {
      image: "/imagen_github.svg",
      label: t("contact.github"),
      description: t("contact.githubDesc"),
      href: "https://github.com/racarrillo2",
    },
    {
      image: "/imagen_gmail.svg",
      label: t("contact.email"),
      description: "racm171193@hotmail.com",
      href: "mailto:racm171193@hotmail.com",
    },
  ];

  return (
    <section id="contact" className="py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
        />

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <FadeIn key={method.label} delay={index * 0.1}>
                <motion.a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 rounded-xl bg-background-secondary border border-transparent hover:border-accent/30 transition-all duration-300 text-center group h-full flex flex-col justify-between"
                  whileHover={{ y: -4 }}
                >
                  <div>
                    <motion.div
                      className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Image
                        src={method.image}
                        alt={method.label}
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                      {method.label}
                    </h3>
                    <p className="text-sm text-foreground-secondary">
                      {method.description}
                    </p>
                  </div>
                </motion.a>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-accent/10 to-accent-hover/5 border border-accent/20">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {t("contact.ready")}
              </h3>
              <p className="text-foreground-secondary mb-6">
                {t("contact.alwaysOpen")}
              </p>
              <Button href="mailto:racm171193@hotmail.com" variant="primary">
                <Mail size={18} />
                {t("contact.sendMessage")}
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}