"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Camera, ZoomIn, ZoomOut, Move, RotateCcw, Settings } from "lucide-react";
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
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [showControls, setShowControls] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [scale, setScale] = useState(1);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      setPosition({ x: 50, y: 50 });
      setScale(1);
    }
  };

  const resetImage = () => {
    setPosition({ x: 50, y: 50 });
    setScale(1);
  };

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

                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  {profileImage ? (
                    <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-accent/20">
                      <div
                        className="w-full h-full"
                        style={{
                          transform: `translate(${position.x - 50}%, ${position.y - 50}%) scale(${scale})`,
                          transformOrigin: 'center center',
                        }}
                      >
                        <Image
                          src={profileImage}
                          alt="Foto de perfil"
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                          style={{
                            objectPosition: `${position.x}% ${position.y}%`,
                          }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-background-secondary border-2 border-accent/20 flex items-center justify-center">
                      <span className="text-6xl md:text-7xl font-bold text-accent">
                        RC
                      </span>
                    </div>
                  )}
                </div>

                {profileImage && (
                  <button
                    onClick={() => setShowControls(!showControls)}
                    className="absolute top-2 right-2 md:top-4 md:right-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background-secondary flex items-center justify-center shadow-lg hover:bg-accent/20 transition-colors border border-accent/30"
                  >
                    <Settings className="text-accent" size={18} />
                  </button>
                )}

                {showControls && profileImage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-24 left-1/2 -translate-x-1/2 bg-background-secondary p-4 rounded-xl border border-accent/20 shadow-lg min-w-[240px] z-20"
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        <Move className="text-foreground-secondary" size={14} />
                        <span className="text-xs text-foreground-secondary">Posición</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-foreground-secondary w-8">X</span>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={position.x}
                          onChange={(e) => setPosition({ ...position, x: Number(e.target.value) })}
                          className="flex-1 accent-accent"
                        />
                        <span className="text-xs text-foreground-secondary w-6">{position.x}%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-foreground-secondary w-8">Y</span>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={position.y}
                          onChange={(e) => setPosition({ ...position, y: Number(e.target.value) })}
                          className="flex-1 accent-accent"
                        />
                        <span className="text-xs text-foreground-secondary w-6">{position.y}%</span>
                      </div>
                      <div className="flex items-center gap-2 pt-2 border-t border-accent/10">
                        <ZoomOut className="text-foreground-secondary" size={14} />
                        <input
                          type="range"
                          min="0.5"
                          max="3"
                          step="0.1"
                          value={scale}
                          onChange={(e) => setScale(Number(e.target.value))}
                          className="flex-1 accent-accent"
                        />
                        <ZoomIn className="text-foreground-secondary" size={14} />
                        <span className="text-xs text-foreground-secondary w-8">{scale.toFixed(1)}x</span>
                      </div>
                      <button
                        onClick={resetImage}
                        className="flex items-center justify-center gap-1 py-1.5 px-3 text-xs bg-accent/10 text-accent rounded hover:bg-accent/20 transition-colors"
                      >
                        <RotateCcw size={12} />
                        Reset
                      </button>
                    </div>
                  </motion.div>
                )}

                <label className={`absolute bottom-2 right-2 md:bottom-4 md:right-4 cursor-pointer ${profileImage ? 'hidden' : ''}`}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <motion.div
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent flex items-center justify-center shadow-lg hover:bg-accent-hover transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Camera className="text-white" size={18} />
                  </motion.div>
                </label>
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