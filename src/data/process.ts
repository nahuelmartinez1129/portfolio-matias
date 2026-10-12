import { ClipboardCheck, CodeXml, Ear, FileText, type LucideIcon, MessagesSquare, PackageCheck, PenTool } from "lucide-react";

export type Step = {
  title: string;
  description: string;
  icon: LucideIcon;
};

/** "¿Cómo trabajo?" — sección Sobre mí. */
export const workSteps: Step[] = [
  {
    title: "Escuchar y entender",
    description: "Conocemos tu negocio, tus objetivos y el problema que querés resolver.",
    icon: Ear,
  },
  {
    title: "Diseñar y desarrollar",
    description: "Preparo una propuesta visual y funcional adaptada a tus necesidades.",
    icon: PenTool,
  },
  {
    title: "Probar y entregar",
    description:
      "Revisamos el resultado, verificamos las funciones acordadas y te entrego el proyecto según el alcance definido.",
    icon: PackageCheck,
  },
];

/** "De la idea a una solución funcional" — sección Proceso. */
export const processStages: Step[] = [
  {
    title: "Conversamos sobre tu idea",
    description: "Me contás qué vendés u ofrecés, a quién y qué te gustaría mejorar.",
    icon: MessagesSquare,
  },
  {
    title: "Definimos una propuesta y su alcance",
    description: "Acordamos qué incluye el proyecto, qué funciones tendrá y cómo seguimos.",
    icon: FileText,
  },
  {
    title: "Diseño y desarrollo la solución",
    description: "Construyo la interfaz y las funciones, y te muestro avances para ajustar a tiempo.",
    icon: CodeXml,
  },
  {
    title: "Probamos y preparamos la entrega",
    description: "Revisamos todo en celulares y computadoras antes de dejarlo listo para publicar.",
    icon: ClipboardCheck,
  },
];
