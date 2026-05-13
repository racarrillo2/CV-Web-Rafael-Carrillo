# 📄 Especificación Técnica — Landing Page Profesional de Rafael Carrillo (v3.0)

> Documento técnico definitivo para el desarrollo de una landing page moderna, optimizada y orientada a reclutadores de Data Analytics.

---

# 1. 🎯 Visión General del Producto

## Objetivo Principal

Construir una landing page profesional que posicione a **Rafael Carrillo** como **Analista de Datos Junior**, destacando:

- Capacidad analítica
- Experiencia en negocio y ventas
- Adaptabilidad
- Profesionalismo
- Potencial de crecimiento

La web funcionará como:

- Portfolio técnico
- CV online
- Carta de presentación
- Punto central para LinkedIn y GitHub

---

# 2. 👤 User Persona & User Goals

## User Persona: Recruiter de Data Analytics

- Tiene poco tiempo
- Busca claridad visual y técnica
- Evalúa candidatos rápidamente
- Necesita ver stack técnico, proyectos y experiencia en menos de 60 segundos

---

## User Goals

- Ver proyectos reales
- Identificar rápidamente habilidades técnicas
- Comprender experiencia previa
- Contactar fácilmente

---

# 3. 🧩 Stack Tecnológico

| Capa | Tecnología |
|------|------------|
| Framework | Next.js 15 App Router |
| UI | React 19 |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS v4 |
| Animaciones | Framer Motion |
| Iconos | Lucide React |
| Deployment | Vercel |
| Fuente | Inter |
| Componentes | shadcn/ui (opcional) |

---

# 4. 🏗 Estrategia de Renderizado

- Mantener `page.tsx` y secciones estáticas como Server Components.
- Utilizar `"use client"` únicamente en componentes interactivos o animados.
- Minimizar el uso innecesario de estado global.
- Priorizar rendimiento y renderizado eficiente.
- Mantener una arquitectura limpia y escalable.

---

# 5. 🎨 Sistema de Diseño

## 5.1 Paleta de Colores

| Uso | Color | HEX |
|---|---|---|
| Fondo principal | Azul oscuro | #0F172A |
| Fondo secundario | Gris oscuro | #1E293B |
| Texto principal | Blanco suave | #F8FAFC |
| Texto secundario | Gris claro | #CBD5E1 |
| Acento | Azul eléctrico | #3B82F6 |
| Hover | Cyan suave | #06B6D4 |

---

## 5.2 Estilo Visual

### Sensación Visual

- Profesional
- Tecnológico
- Minimalista
- Inspirado en dashboards modernos
- Elegante y limpio

---

## 5.3 Reglas Visuales

- Evitar estética gamer o cyberpunk exagerada.
- Los efectos glow deben ser sutiles y profesionales.
- Mantener alta legibilidad en todo momento.
- Priorizar claridad visual antes que efectos decorativos.
- Mantener consistencia visual en todas las secciones.

---

## 5.4 Tipografía

### Headers

- Inter
- Font weight bold
- Tracking-tight

### Texto

- Inter
- Leading-relaxed

---

## 5.5 Layout Global

| Elemento | Configuración |
|---|---|
| Max Width | max-w-7xl |
| Padding Horizontal | px-6 lg:px-8 |
| Padding Vertical | py-24 md:py-32 |
| Grid Gap | gap-6 |

---

# 6. 🧱 Arquitectura de Componentes

## Componentes UI

- `Button.tsx`
- `SectionTitle.tsx`
- `TechBadge.tsx`
- `ProjectCard.tsx`
- `TimelineItem.tsx`
- `FadeIn.tsx`

---

## Estructura de Archivos

```bash
app/
├── layout.tsx
├── page.tsx
├── globals.css
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── FadeIn.tsx
│       ├── Button.tsx
│       ├── SectionTitle.tsx
│       ├── TechBadge.tsx
│       ├── ProjectCard.tsx
│       └── TimelineItem.tsx
```

---

# 7. 🧭 Navegación

## Navbar

### Características

- Sticky top navigation
- Fondo translúcido con blur
- Minimalista y limpia
- Responsive

### Links

- Sobre mí
- Skills
- Experiencia
- Proyectos
- Contacto

---

# 8. 🧭 Wireframes (Descripción)

## Hero

### Layout

- Izquierda:
  - Nombre
  - Título
  - Descripción
  - Botones CTA
- Derecha:
  - Foto profesional
  - Glow azul sutil
- Parte inferior:
  - Fila horizontal con stack tecnológico

### Reglas

- El contenido textual debe ocupar máximo 600px.
- Mantener buena jerarquía visual.
- Evitar saturación visual.
- Los CTA deben destacar claramente.

---

## Sobre Mí

- Texto narrativo
- 3 bullets de valor profesional

---

## Skills

- Grid de badges
- Separación entre:
  - Data Analytics
  - Business Skills

---

## Experiencia

- Timeline vertical
- Cards limpias
- Logros cuantificables

---

## Proyectos

- Cards con:
  - Imagen
  - Descripción
  - Tecnologías
  - GitHub
  - Demo

---

## Contacto

- Iconos grandes
- CTA final

---

# 9. 📊 Secciones y Contenido

## 9.1 Hero

### Nombre

Rafael Carrillo

### Título

Data Analyst | Business & Sales Background

### Descripción

Profesional orientado a resultados con experiencia en negocio y transición hacia análisis de datos.

### CTA

- Explorar proyectos
- Contactar
- Descargar CV

---

## 9.2 Sobre Mí

Narrativa centrada en:

- Experiencia comercial
- Capacidad analítica
- Adaptabilidad
- Orientación a resultados

---

## 9.3 Skills

### Data Analytics

- Python
- SQL
- Excel
- Power BI
- Fabric

### Business Skills

- Ventas
- Atención al cliente
- Gestión administrativa
- Comunicación
- Resolución de problemas

---

## 9.4 Experiencia Profesional

### Mutua Madrileña

- Asistente Administrativo
- Atención al cliente

### ACCOM (Naturgy)

- Consultor de Ventas

### Lowi

- Agente de Ventas y Retención

### Restaurantes Madrid

- Chef
- Encargado de Cocina

---

## 9.5 Educación

### Upgrade HUB Madrid

Bootcamp de Análisis de Datos & IA

### LSI Language College

Inglés B2

### Universidad José Antonio Páez

Contaduría Pública (Estudios)

---

## 9.6 Proyectos

Cada proyecto debe incluir:

- Nombre
- Tecnologías
- Descripción
- Captura visual
- GitHub
- Demo
- Métricas (si aplica)

---

## 9.7 Contacto

- LinkedIn
- GitHub
- Email

---

# 10. 🌀 Animaciones

## Reglas Generales

Las animaciones deben ser:

- Suaves
- Minimalistas
- Profesionales
- Fluidas
- No invasivas

---

## Restricciones

- Evitar animaciones exageradas.
- Evitar efectos distractores.
- Priorizar claridad del contenido.
- Mantener duración corta.

### Duración Recomendada

- Entre 0.4s y 0.8s

---

## Hero

- Fade In
- Slide Up
- Stagger Animation

---

## Cards

- Hover scale suave
- Glow azul/cyan sutil

---

## Scroll

- Fade in on scroll

---

# 11. 📱 Responsive Design

## Desktop

- Grid completo
- Layout amplio

---

## Tablet

- Reorganización de columnas
- Espaciado adaptado

---

## Mobile

- Navegación vertical
- Menú simplificado
- Optimización táctil

---

# 12. 🦶 Footer

## Contenido

- Copyright
- GitHub
- LinkedIn
- Email

---

## Estilo

- Minimalista
- Fondo oscuro
- Texto secundario
- Hover suave en links

---

# 13. ♿ Accesibilidad (A11y)

- Contraste AA
- Alt text en imágenes
- Navegación por teclado
- Compatibilidad con `prefers-reduced-motion`

---

# 14. 🔍 SEO

```tsx
export const metadata = {
  title: "Rafael Carrillo | Data Analyst",
  description: "Landing page profesional de Rafael Carrillo, Analista de Datos Junior.",
};
```

---

# 15. 🚀 Performance

- Lazy loading
- Optimización de imágenes
- Minimizar componentes cliente
- Animaciones GPU accelerated
- Mantener Lighthouse score alto

---

# 16. 📅 Roadmap

## Fase 1 — Setup Inicial

- Crear proyecto Next.js
- Configurar Tailwind
- Instalar dependencias
- Crear estructura base

---

## Fase 2 — Diseño Base

- Sistema de diseño
- Paleta de colores
- Layout responsive
- Navbar
- Footer

---

## Fase 3 — Desarrollo de Secciones

- Hero
- Sobre mí
- Skills
- Experiencia
- Educación
- Contacto

---

## Fase 4 — Integración de Proyectos

- Cards de proyectos
- GitHub links
- Visualización responsive

---

## Fase 5 — Animaciones

- Scroll animations
- Hover effects
- Motion transitions

---

## Fase 6 — Optimización Final

- SEO
- Performance
- Responsive testing
- Deploy en Vercel

---

# 17. ✔ Criterios de Aceptación

- Diseño responsive completo
- Hero claro y profesional
- Navegación limpia y funcional
- Animaciones fluidas y profesionales
- Colores correctamente implementados
- Proyectos visibles y accesibles
- Lighthouse score alto
- Compatible con mobile
- Deploy funcional en Vercel

---

# 18. 🎯 Objetivo Final

Crear una landing page moderna, elegante y profesional que permita posicionar a Rafael Carrillo como Analista de Datos Junior mostrando:

- Perfil técnico
- Visión de negocio
- Profesionalismo
- Adaptabilidad
- Potencial de crecimiento
