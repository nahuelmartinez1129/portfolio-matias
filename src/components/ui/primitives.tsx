import { ArrowUpRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

export function Container({ className = "", ...props }: ComponentProps<"div">) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`} {...props} />;
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`font-mono text-[0.72rem] font-medium uppercase tracking-[0.16em] text-accent-strong ${className}`}
    >
      {children}
    </p>
  );
}

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeading({ id, eyebrow, title, subtitle, className = "" }: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${className}`} data-reveal>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className="mt-4 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]"
      >
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-lg leading-relaxed text-pretty text-muted">{subtitle}</p>}
    </div>
  );
}

const buttonBase =
  "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[0.95rem] font-medium transition-[background-color,color,border-color,transform,box-shadow] duration-200 active:scale-[0.98]";

const buttonVariants = {
  primary:
    "bg-ink text-white shadow-[0_1px_0_rgb(255_255_255/0.15)_inset,0_8px_20px_-10px_rgb(25_25_25/0.6)] hover:bg-accent-strong",
  accent: "bg-accent text-white hover:bg-accent-strong shadow-[0_10px_24px_-12px_rgb(83_103_232/0.8)]",
  secondary: "border border-line bg-surface text-ink hover:border-ink/30 hover:bg-white",
} as const;

type ButtonLinkProps = ComponentProps<"a"> & {
  variant?: keyof typeof buttonVariants;
  /** Abre en una pestaña nueva con las protecciones correspondientes. */
  external?: boolean;
};

export function ButtonLink({
  variant = "primary",
  external = false,
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`${buttonBase} ${buttonVariants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </a>
  );
}

/** Texto para lectores de pantalla que avisa que el enlace abre otra pestaña. */
export function NewTabHint() {
  return <span className="sr-only"> (se abre en una pestaña nueva)</span>;
}

export function ExternalArrow({ className = "" }: { className?: string }) {
  return (
    <ArrowUpRight
      aria-hidden="true"
      className={`size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${className}`}
    />
  );
}
