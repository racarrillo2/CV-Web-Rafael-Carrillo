"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements?: string[];
  index: number;
  isLast?: boolean;
}

export default function TimelineItem({
  title,
  company,
  period,
  description,
  achievements,
  index,
  isLast = false,
}: TimelineItemProps) {
  return (
    <FadeIn delay={index * 0.1}>
      <div className="relative flex gap-4">
        <div className="flex flex-col items-center">
          <motion.div
            className="w-4 h-4 rounded-full bg-accent border-4 border-background relative z-10"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: index * 0.1 + 0.2 }}
          />
          {!isLast && (
            <div className="w-0.5 h-full bg-accent/20 absolute top-4" />
          )}
        </div>

        <div className="pb-8">
          <motion.div
            className="bg-background-secondary rounded-lg p-5 border border-transparent hover:border-accent/20 transition-all duration-300"
            whileHover={{ x: 4 }}
          >
            <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {title}
                </h3>
                <p className="text-accent font-medium">{company}</p>
              </div>
              <span className="text-sm text-foreground-secondary bg-background px-2 py-1 rounded">
                {period}
              </span>
            </div>

            <p className="text-foreground-secondary leading-relaxed mb-3">
              {description}
            </p>

            {achievements && achievements.length > 0 && (
              <ul className="space-y-1">
                {achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="text-sm text-foreground-secondary flex items-start gap-2"
                  >
                    <span className="text-accent mt-1">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </div>
      </div>
    </FadeIn>
  );
}