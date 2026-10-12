/**
 * Configuración central del portfolio.
 *
 * Todo dato personal o de contacto se edita acá. Los valores vacíos ("")
 * se consideran "no configurados": el sitio oculta el botón correspondiente
 * en lugar de mostrar un enlace roto o ficticio.
 */

/**
 * Número de WhatsApp en formato internacional, solo dígitos, sin "+" ni espacios.
 * Celular argentino: 54 + 9 + característica sin 0 + número sin 15.
 */
export const WHATSAPP_PHONE = "5492291472192";

/** Correo de contacto, por ejemplo "nombre@dominio.com". */
export const CONTACT_EMAIL = "matiasmartinez.web@gmail.com";

/** Perfil de GitHub (URL completa). Opcional. */
export const GITHUB_URL = "";

/** Perfil de LinkedIn (URL completa). Opcional. */
export const LINKEDIN_URL = "";

export const siteConfig = {
  name: "Matias Martinez",
  role: "Desarrollador web full stack",
  shortDescription:
    "Páginas web, catálogos digitales y herramientas a medida para emprendedores y negocios.",
  /**
   * URL pública del sitio, usada en metadata, Open Graph y sitemap.
   * Se toma de NEXT_PUBLIC_SITE_URL; en Vercel, si no está definida,
   * se usa el dominio de producción del proyecto.
   */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  /** Indicador de disponibilidad del hero. Poné `enabled: false` para ocultarlo. */
  availability: {
    enabled: true,
    label: "Consultas abiertas para nuevos proyectos",
  },
  whatsappMessage:
    "Hola Matias, vi tu portfolio y me gustaría consultar por un proyecto web para mi emprendimiento.",
  contact: {
    whatsappPhone: WHATSAPP_PHONE,
    email: CONTACT_EMAIL,
    github: GITHUB_URL,
    linkedin: LINKEDIN_URL,
  },
} as const;

export const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "proyectos", label: "Proyectos" },
  { id: "servicios", label: "Servicios" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "contacto", label: "Contacto" },
] as const;

/**
 * Tecnologías que se muestran en el perfil. La sección solo renderiza
 * lo que figura acá: agregá, quitá o mové elementos libremente.
 */
export const technologyGroups = [
  {
    id: "frontend",
    label: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    id: "backend",
    label: "Backend",
    items: ["Node.js", "Express", "APIs REST"],
  },
  {
    id: "datos",
    label: "Datos",
    items: ["PostgreSQL", "Prisma"],
  },
  {
    id: "herramientas",
    label: "Herramientas y despliegue",
    items: ["Git", "GitHub"],
  },
] as const;
