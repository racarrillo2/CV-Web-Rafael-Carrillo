"use client";

import { motion } from "framer-motion";
import FadeIn from "../ui/FadeIn";
import SectionTitle from "../ui/SectionTitle";
import TechBadge from "../ui/TechBadge";
import {
  Database,
  FileSpreadsheet,
  TrendingUp,
  Code2,
  Presentation,
} from "lucide-react";

const dataAnalyticsSkills = [
  { name: "Python", icon: <Code2 size={14} /> },
  { name: "SQL", icon: <Database size={14} /> },
  { name: "Excel", icon: <FileSpreadsheet size={14} /> },
  { name: "Power BI", icon: <Presentation size={14} /> },
  { name: "Fabric", icon: <TrendingUp size={14} /> },
];

const businessSkills = [
  "Ventas",
  "Atención al cliente",
  "Gestión administrativa",
  "Comunicación",
  "Resolución de problemas",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          title="Skills"
          subtitle="Herramientas técnicas y habilidades blandas"
        />

        <div className="grid md:grid-cols-2 gap-12">
          <FadeIn>
            <div className="p-6 rounded-xl bg-background-secondary/50 border border-accent/10">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <span className="p-2 rounded-lg bg-accent/10 text-accent">
                  <TrendingUp size={20} />
                </span>
                Data Analytics
              </h3>
              <div className="flex flex-wrap gap-3">
                {dataAnalyticsSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <TechBadge name={skill.name} icon={skill.icon} />
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="p-6 rounded-xl bg-background-secondary/50 border border-accent/10">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <span className="p-2 rounded-lg bg-accent/10 text-accent">
                  <Presentation size={20} />
                </span>
                Business Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {businessSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <TechBadge name={skill} />
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}