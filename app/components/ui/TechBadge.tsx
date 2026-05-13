"use client";

import { motion } from "framer-motion";

interface TechBadgeProps {
  name: string;
  icon?: React.ReactNode;
}

export default function TechBadge({ name, icon }: TechBadgeProps) {
  return (
    <motion.span
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-background-secondary text-foreground-secondary text-sm border border-accent/20 hover:border-accent/50 hover:text-foreground transition-all duration-300 cursor-default"
      whileHover={{ scale: 1.05 }}
    >
      {icon}
      {name}
    </motion.span>
  );
}