import { LayoutTemplate, type LucideIcon, Settings2, ShoppingBag, Sparkles } from "lucide-react";

export type Service = {
  title: string;
  description: string;
  idealFor?: string[];
  note?: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Catálogos digitales",
    description:
      "Una vidriera online para mostrar tus productos con fotos, precios y categorías, y facilitar las consultas o los pedidos por WhatsApp.",
    idealFor: [
      "Indumentaria",
      "Cerámica",
      "Accesorios",
      "Regalos",
      "Productos artesanales",
      "Otros comercios con catálogo",
    ],
    icon: ShoppingBag,
  },
  {
    title: "Páginas web para emprendimientos",
    description:
      "Sitios web modernos para presentar tu marca, explicar tus servicios y facilitar que los clientes se contacten con vos.",
    idealFor: ["Emprendedores", "Profesionales", "Pequeños negocios", "Marcas personales"],
    icon: LayoutTemplate,
  },
  {
    title: "Sistemas web sencillos",
    description:
      "Herramientas digitales para resolver tareas concretas del negocio, como registrar información, organizar procesos o consultar datos.",
    note: "El alcance se define después de evaluar juntos los requisitos.",
    icon: Settings2,
  },
  {
    title: "Personalización y mejoras",
    description:
      "Adaptaciones visuales y funcionales para que tu sitio o catálogo responda mejor a las necesidades de tu emprendimiento.",
    icon: Sparkles,
  },
];
