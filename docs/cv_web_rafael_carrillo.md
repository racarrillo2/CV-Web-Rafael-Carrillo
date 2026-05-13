# Especificación Técnica — Landing Page Personal de Rafael Carrillo (v1.0)

> Documento técnico para el desarrollo de una landing page profesional orientada a posicionar a Rafael Carrillo como Analista de Datos Junior con experiencia en negocio, ventas y atención al cliente.

---

# 1. Visión General del Producto

## Objetivo

Crear una landing page profesional, moderna y completamente responsive para presentar el perfil profesional de Rafael Carrillo como Analista de Datos Junior.

La página debe funcionar como:

- Portfolio profesional.
- CV online moderno.
- Carta de presentación técnica.
- Plataforma de visibilidad profesional.
- Punto central para GitHub y LinkedIn.

---

## Perfil Profesional

Rafael Carrillo es un profesional orientado a resultados con experiencia en:

- Ventas.
- Atención al cliente.
- Operaciones.
- Gestión administrativa.
- Cocina profesional.
- Análisis de datos.

Actualmente se encuentra en transición hacia el área de Data Analytics, trabajando con:

- Excel
- Python
- SQL
- Power BI
- Fabric

---

## Objetivo Estratégico

La landing page debe transmitir:

- Profesionalismo.
- Capacidad analítica.
- Visión de negocio.
- Adaptabilidad.
- Perfil tecnológico moderno.
- Orientación a resultados.

---

## Tipo de Sitio

- Landing page de una sola página (Single Page Application).
- Totalmente responsive.
- Optimizada para desktop, tablet y mobile.
- Sin backend.
- Preparada para despliegue en Vercel.

---

# 2. Stack Tecnológico

| Capa | Tecnología |
|------|------------|
| Framework | Next.js 15 |
| Librería UI | React 19 |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS v4 |
| Animaciones | Framer Motion |
| Iconos | Lucide React |
| Deployment | Vercel |
| Control de versiones | GitHub |
| Fuente principal | Inter |
| Componentes UI | shadcn/ui (opcional) |

---

## Inicialización del Proyecto

```bash
npx create-next-app@latest rafael-portfolio --typescript --tailwind --app

cd rafael-portfolio

npm install framer-motion lucide-react
```

---

# 3. Sistema de Diseño

## 3.1 Paleta de Colores

| Uso | Color | HEX |
|---|---|---|
| Fondo principal | Azul oscuro | #0F172A |
| Fondo secundario | Gris oscuro | #1E293B |
| Texto principal | Blanco suave | #F8FAFC |
| Texto secundario | Gris claro | #CBD5E1 |
| Color acento | Azul eléctrico | #3B82F6 |
| Hover / detalles | Cyan suave | #06B6D4 |

---

## 3.2 Estilo Visual

### Sensación Visual

- Profesional.
- Tecnológica.
- Elegante.
- Moderna.
- Inspirada en dashboards y plataformas SaaS.

---

## 3.3 Tipografía

### Headers

- Inter
- font-bold
- tracking-tight

### Texto

- Inter
- leading-relaxed

---

## 3.4 Layout Global

| Elemento | Configuración |
|---|---|
| Max Width | max-w-7xl |
| Padding horizontal | px-6 lg:px-8 |
| Padding vertical | py-24 md:py-32 |
| Grid Gap | gap-6 |

---

# 4. Arquitectura de la Landing Page

## Sección 1 — Hero

### Objetivo

Captar atención inmediata y presentar el perfil profesional.

### Contenido

- Nombre completo.
- Título profesional.
- Descripción corta.
- Botones CTA.
- Foto profesional.
- Stack tecnológico.

### Elementos

#### Nombre

Rafael Carrillo

#### Título

Data Analyst | Business & Sales Background

#### Descripción

Profesional orientado a resultados con experiencia en negocio y transición hacia análisis de datos.

#### Botones

- Ver proyectos
- Contactar
- Descargar CV

---

## Sección 2 — Sobre Mí

### Objetivo

Presentar narrativa profesional y propuesta de valor.

### Contenido

- Experiencia profesional.
- Capacidad analítica.
- Adaptabilidad.
- Orientación a resultados.
- Experiencia comercial y administrativa.

---

## Sección 3 — Tecnologías y Skills

### Categorías

#### Data Analytics

- Python
- SQL
- Excel
- Power BI
- Fabric

#### Business Skills

- Ventas
- Atención al cliente
- Gestión administrativa
- Comunicación
- Resolución de problemas

---

## Sección 4 — Experiencia Profesional

### Objetivo

Mostrar experiencia laboral de forma moderna y estructurada.

### Experiencia Incluida

#### Mutua Madrileña

- Asistente Administrativo
- Atención al cliente

#### ACCOM (Naturgy)

- Consultor de Ventas de Energía

#### Lowi

- Agente de Ventas y Retención

#### Restaurantes Madrid

- Chef
- Encargado de Cocina

---

## Sección 5 — Educación y Certificaciones

### Contenido

#### Upgrade HUB Madrid

Bootcamp de Análisis de Datos & IA

#### LSI Language College

Inglés B2

#### Universidad José Antonio Páez

Contaduría Pública (Estudios)

---

## Sección 6 — Proyectos

### Objetivo

Mostrar proyectos de análisis de datos.

### Contenido esperado

Cada proyecto debe incluir:

- Nombre.
- Tecnologías.
- Descripción.
- Captura visual.
- GitHub.
- Demo.

---

## Sección 7 — Contacto

### Elementos

- LinkedIn
- GitHub
- Email

### Enlaces

GitHub:
https://github.com/racarrillo2

LinkedIn:
https://www.linkedin.com/in/rafael-carrillo-mirabal/

---

# 5. Animaciones e Interacciones

## Librería

Framer Motion

---

## Animaciones

### Hero

- Fade In.
- Slide Up.
- Stagger animation.

### Cards

- Hover effects.
- Scale suave.
- Glow azul/cyan.

### Scroll Animations

- Fade in on scroll.
- Motion suave y minimalista.

---

# 6. Responsive Design

## Desktop

- Layout completo.
- Grid avanzado.
- Secciones amplias.

## Tablet

- Adaptación responsive.
- Reorganización de grids.

## Mobile

- Navegación vertical.
- Menú simplificado.
- Optimización táctil.

---

# 7. SEO y Performance

## SEO

Implementar metadata con:

```tsx
export const metadata = {
  title: "Rafael Carrillo | Data Analyst",
  description: "Landing page profesional de Rafael Carrillo, Analista de Datos Junior.",
};
```

---

## Performance

- Optimización de imágenes.
- Lazy loading.
- Uso mínimo de componentes cliente.
- Animaciones GPU accelerated.
- Lighthouse score alto.

---

# 8. Estructura de Archivos

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
│   │   └── Contact.tsx
│   └── ui/
│       └── FadeIn.tsx
```

---

# 9. Roadmap de Desarrollo

## Fase 1 — Setup Inicial

- Crear proyecto Next.js.
- Configurar Tailwind.
- Instalar dependencias.
- Crear estructura base.

---

## Fase 2 — Diseño Base

- Configuración visual.
- Sistema de colores.
- Layout responsive.
- Tipografía.

---

## Fase 3 — Desarrollo de Secciones

- Hero.
- Sobre mí.
- Skills.
- Experiencia.
- Educación.
- Contacto.

---

## Fase 4 — Integración de Proyectos

- Cards de proyectos.
- GitHub links.
- Capturas visuales.

---

## Fase 5 — Animaciones

- Scroll animations.
- Hover effects.
- Motion transitions.

---

## Fase 6 — Optimización Final

- SEO.
- Performance.
- Responsive testing.
- Deploy en Vercel.

---

# 10. Criterios de Aceptación

- [ ] El proyecto funciona correctamente en Next.js 15.
- [ ] Diseño responsive completo.
- [ ] La landing page mantiene coherencia visual.
- [ ] Los colores definidos se implementan correctamente.
- [ ] Las animaciones son fluidas.
- [ ] GitHub y LinkedIn funcionan correctamente.
- [ ] La página carga sin errores.
- [ ] El Hero comunica claramente el perfil profesional.
- [ ] Las secciones están correctamente organizadas.
- [ ] La web está desplegada en Vercel.
- [ ] Lighthouse performance alto.
- [ ] Compatible con dispositivos móviles.

---

# 11. Deployment

## Plataforma

Vercel

## Flujo

GitHub → Vercel → Deploy Automático

---

# 12. Objetivo Final

Construir una landing page profesional moderna que permita posicionar a Rafael Carrillo como Analista de Datos Junior, mostrando:

- Perfil técnico.
- Visión de negocio.
- Profesionalismo.
- Adaptabilidad.
- Potencial de crecimiento profesional.
