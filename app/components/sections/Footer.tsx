"use client";

import { motion } from "framer-motion";
import { Link, Code, Mail } from "lucide-react";

const currentYear = new Date().getFullYear();

const socialLinks = [
  {
    icon: Link,
    href: "https://linkedin.com/in/rafael-carrillo",
    label: "LinkedIn",
  },
  {
    icon: Code,
    href: "https://github.com/rafael-carrillo",
    label: "GitHub",
  },
  {
    icon: Mail,
    href: "mailto:rmc.analyst@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="py-8 bg-background-secondary/50 border-t border-accent/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground-secondary text-sm">
            © {currentYear} Rafael Carrillo. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-foreground-secondary hover:text-accent hover:bg-accent/10 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                aria-label={link.label}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}