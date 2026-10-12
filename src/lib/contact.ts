import { siteConfig } from "@/config/site";

export type ContactChannel = {
  id: "whatsapp" | "email" | "github" | "linkedin";
  label: string;
  /** Etiqueta breve para listas compactas (footer). */
  shortLabel: string;
  /** Texto visible secundario (correo, usuario, etc.). */
  detail: string;
  href: string;
  external: boolean;
};

const PHONE_PATTERN = /^\d{10,15}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function getWhatsappHref(
  phone: string = siteConfig.contact.whatsappPhone,
  message: string = siteConfig.whatsappMessage,
): string | null {
  const digits = phone.trim();
  if (!PHONE_PATTERN.test(digits)) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function getEmailHref(email: string = siteConfig.contact.email): string | null {
  const value = email.trim();
  if (!EMAIL_PATTERN.test(value)) return null;
  return `mailto:${value}?subject=${encodeURIComponent("Consulta por un proyecto web")}`;
}

function getProfileUrl(value: string): string | null {
  const raw = value.trim();
  if (!raw) return null;
  try {
    const url = new URL(raw);
    return url.protocol === "https:" ? url.toString() : null;
  } catch {
    return null;
  }
}

/** Canales de contacto con un valor válido configurado, en orden de prioridad. */
export function getContactChannels(): ContactChannel[] {
  const channels: ContactChannel[] = [];

  const whatsapp = getWhatsappHref();
  if (whatsapp) {
    channels.push({
      id: "whatsapp",
      label: "Consultar por WhatsApp",
      shortLabel: "WhatsApp",
      detail: "Respuesta por mensaje",
      href: whatsapp,
      external: true,
    });
  }

  const email = getEmailHref();
  if (email) {
    channels.push({
      id: "email",
      label: "Escribir un correo",
      shortLabel: siteConfig.contact.email.trim(),
      detail: siteConfig.contact.email.trim(),
      href: email,
      external: false,
    });
  }

  const github = getProfileUrl(siteConfig.contact.github);
  if (github) {
    channels.push({ id: "github", label: "GitHub", shortLabel: "GitHub", detail: "Código y proyectos", href: github, external: true });
  }

  const linkedin = getProfileUrl(siteConfig.contact.linkedin);
  if (linkedin) {
    channels.push({ id: "linkedin", label: "LinkedIn", shortLabel: "LinkedIn", detail: "Perfil profesional", href: linkedin, external: true });
  }

  return channels;
}

/** Nombres de los campos principales de contacto que faltan configurar. */
export function getMissingContactFields(): string[] {
  const missing: string[] = [];
  if (!getWhatsappHref()) missing.push("WHATSAPP_PHONE");
  if (!getEmailHref()) missing.push("CONTACT_EMAIL");
  return missing;
}
