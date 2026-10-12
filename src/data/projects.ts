/**
 * Proyectos de demostración. Son marcas ficticias creadas para el portfolio,
 * no trabajos realizados para clientes.
 *
 * Las características listadas están documentadas en el README de cada
 * repositorio. Si cambiás algo en una demo, actualizalo también acá.
 */

export type ProjectTheme = "raiz" | "norte" | "forma";

export type Project = {
  slug: string;
  name: string;
  url: string;
  category: string;
  description: string;
  features: string[];
  theme: ProjectTheme;
  /** Descripción de la ilustración de vista previa (no es una captura real). */
  previewAlt: string;
};

export const projects: Project[] = [
  {
    slug: "raiz-ceramica",
    name: "Raíz Cerámica",
    url: "https://raiz-ceramica.vercel.app/",
    category: "Catálogo digital · Cerámica artesanal",
    description:
      "Catálogo demostrativo de cerámica artesanal, diseñado para presentar productos, categorías, precios y consultas de compra desde una experiencia visual cálida y elegante.",
    features: [
      "Catálogo por categorías con búsqueda y orden por precio",
      "Fichas de producto con precio y descripción",
      "Carrito con pedido por WhatsApp",
      "Diseño mobile first",
    ],
    theme: "raiz",
    previewAlt:
      "Ilustración de la demo Raíz Cerámica: tonos terracota y crema con piezas de cerámica estilizadas.",
  },
  {
    slug: "norte-estudio",
    name: "Norte Estudio",
    url: "https://norte-estudio-mu.vercel.app/",
    category: "Catálogo digital · Indumentaria",
    description:
      "Catálogo demostrativo de indumentaria urbana, con una identidad visual contemporánea y una presentación de productos pensada para destacar prendas, talles y colores.",
    features: [
      "Filtros por categoría, talle y color",
      "Selector de variantes con combinaciones no disponibles bloqueadas",
      "Guía de talles",
      "Carrito con pedido por WhatsApp",
    ],
    theme: "norte",
    previewAlt:
      "Ilustración de la demo Norte Estudio: composición editorial en blanco y negro con grilla de prendas.",
  },
  {
    slug: "forma-3d",
    name: "Forma 3D",
    url: "https://forma-3-d-eight.vercel.app/",
    category: "Catálogo digital · Impresión 3D",
    description:
      "Catálogo demostrativo de productos impresos en 3D, pensado para presentar objetos de diseño, accesorios, decoración y opciones de personalización.",
    features: [
      "Catálogo de objetos por categorías",
      "Opciones de color, tamaño y personalización con texto",
      "Validación de opciones obligatorias",
      "Consultas por WhatsApp con el detalle del pedido",
    ],
    theme: "forma",
    previewAlt:
      "Ilustración de la demo Forma 3D: formas geométricas y un cubo isométrico sobre fondo claro.",
  },
];
