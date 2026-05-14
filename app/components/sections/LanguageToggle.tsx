"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { motion } from "framer-motion";
import { Globe, ChevronDown } from "lucide-react";

const LanguageContext = createContext<{
  language: string;
  setLanguage: (lang: string) => void;
} | null>(null);

export default function LanguageToggle() {
  const [language, setLanguageState] = useState("es");
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("language");
    if (saved) setLanguageState(saved);
  }, []);

  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    setIsOpen(false);
  };

  if (!mounted) {
    return (
      <motion.button
        className="p-2 rounded-lg bg-background-secondary border border-border flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe className="w-4 h-4 text-foreground" />
        <span className="text-sm font-medium text-foreground">ES</span>
      </motion.button>
    );
  }

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-background-secondary border border-border hover:border-accent transition-colors flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe className="w-4 h-4 text-foreground" />
        <span className="text-sm font-medium text-foreground uppercase">
          {language}
        </span>
        <ChevronDown className={`w-4 h-4 text-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full mt-2 right-0 bg-background-secondary border border-border rounded-lg shadow-lg overflow-hidden z-50"
        >
          <button
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
            className="w-full px-4 py-2 text-left text-sm text-foreground hover:bg-accent/10 transition-colors"
          >
            {language === "es" ? "English" : "Español"}
          </button>
        </motion.div>
      )}
    </div>
  );
}