"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  es: {
    "nav.about": "Sobre mí",
    "nav.skills": "Skills",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "hero.greeting": "Hola, soy",
    "hero.title": "Rafael Carrillo Mirabal",
    "hero.subtitle": "Analista de Datos | Negocio y Ventas",
    "hero.description": "Profesional orientado a resultados con experiencia en negocio y transición hacia análisis de datos. Combino habilidades técnicas con visión de negocio para generar información accionable.",
    "hero.projects": "Explorar proyectos",
    "hero.contact": "Contactar",
    "hero.downloadCV": "Descargar CV",
    "hero.stack": "Stack tecnológico",
    "about.title": "Sobre Mí",
    "about.subtitle": "Conoce mi trayectoria y lo que me diferencia",
    "about.p1": "Mi trayectoria profesional comenzó en el mundo de las ventas y la atención al cliente, donde desarrollé habilidades fundamentales como la comunicación, la resolución de problemas y la orientación a resultados.",
    "about.p2": "Esta experiencia comercial me permitió comprender profundamente cómo funcionan los negocios desde la perspectiva del cliente y del equipo de ventas. Sin embargo, siempre tuve una inclinación natural hacia los números y el análisis.",
    "about.p3": "Decidí dar el paso hacia el análisis de datos para combinar mi visión de negocio con herramientas técnicas que me permiten generar información más profunda y precisa. El bootcamp de Upgrade HUB me proporcionó las habilidades técnicas necesarias para esta transición.",
    "about.expCommercial": "Experiencia Comercial",
    "about.expCommercialDesc": "Años de experiencia en ventas y atención al cliente me han dado una comprensión profunda del negocio que enriquece mi análisis de datos.",
    "about.capacidad": "Capacidad Analítica",
    "about.capacidadDesc": "Habilidad para transformar datos complejos en información accionable que impulsan decisiones estratégicas.",
    "about.adaptabilidad": "Adaptabilidad",
    "about.adaptabilidadDesc": "Transición exitosa del área comercial hacia análisis de datos demuestra mi capacidad de aprendizaje y adaptación.",
    "skills.title": "Skills",
    "skills.subtitle": "Herramientas técnicas y habilidades blandas",
    "skills.dataAnalytics": "Análisis de Datos",
    "skills.business": "Habilidades Comerciales",
    "experience.title": "Experiencia Profesional",
    "experience.subtitle": "Mi trayectoria laboral",
    "contact.title": "Contacto",
    "contact.subtitle": "¿Interesado en trabajar juntos? Contáctame",
    "contact.linkedin": "LinkedIn",
    "contact.linkedinDesc": "Conectemos profesionalmente",
    "contact.github": "GitHub",
    "contact.githubDesc": "Explora mi código",
    "contact.email": "Email",
    "contact.ready": "¿Listo para trabajar juntos?",
    "contact.alwaysOpen": "Siempre estoy abierto a nuevas oportunidades y proyectos interesantes.",
    "contact.sendMessage": "Envíame un mensaje",
    "projects.title": "Proyectos",
    "projects.subtitle": "Proyectos reales que demuestran mis habilidades técnicas",
    "education.title": "Educación",
    "education.subtitle": "Formación académica y certificaciones",
  },
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.greeting": "Hello, I'm",
    "hero.title": "Rafael Carrillo Mirabal",
    "hero.subtitle": "Data Analyst | Business & Sales",
    "hero.description": "Results-oriented professional with experience in business and transition to data analysis. I combine technical skills with business vision to generate actionable insights.",
    "hero.projects": "Explore Projects",
    "hero.contact": "Contact",
    "hero.downloadCV": "Download CV",
    "hero.stack": "Tech Stack",
    "about.title": "About Me",
    "about.subtitle": "Get to know my background and what sets me apart",
    "about.p1": "My professional career began in the world of sales and customer service, where I developed fundamental skills such as communication, problem solving, and results orientation.",
    "about.p2": "This commercial experience allowed me to deeply understand how businesses work from the perspective of the customer and the sales team. However, I always had a natural inclination towards numbers and analysis.",
    "about.p3": "I decided to take the step towards data analysis to combine my business vision with technical tools that allow me to generate deeper and more precise information. The Upgrade HUB bootcamp provided me with the technical skills necessary for this transition.",
    "about.expCommercial": "Commercial Experience",
    "about.expCommercialDesc": "Years of experience in sales and customer service have given me a deep understanding of business that enriches my data analysis.",
    "about.capacidad": "Analytical Ability",
    "about.capacidadDesc": "Ability to transform complex data into actionable information that drives strategic decisions.",
    "about.adaptabilidad": "Adaptability",
    "about.adaptabilidadDesc": "Successful transition from the commercial area to data analysis demonstrates my learning and adaptation capacity.",
    "skills.title": "Skills",
    "skills.subtitle": "Technical tools and soft skills",
    "skills.dataAnalytics": "Data Analytics",
    "skills.business": "Business Skills",
    "experience.title": "Work Experience",
    "experience.subtitle": "My professional journey",
    "contact.title": "Contact",
    "contact.subtitle": "Interested in working together? Contact me",
    "contact.linkedin": "LinkedIn",
    "contact.linkedinDesc": "Let's connect professionally",
    "contact.github": "GitHub",
    "contact.githubDesc": "Explore my code",
    "contact.email": "Email",
    "contact.ready": "Ready to work together?",
    "contact.alwaysOpen": "I am always open to new opportunities and interesting projects.",
    "contact.sendMessage": "Send me a message",
    "projects.title": "Projects",
    "projects.subtitle": "Real projects that demonstrate my technical skills",
    "education.title": "Education",
    "education.subtitle": "Academic background and certifications",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLanguage = localStorage.getItem("language") as Language | null;
    if (savedLanguage) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}