import { siteConfig } from "@/config/site";

/** Logotipo tipográfico: MATIAS MARTINEZ con monograma y punto de acento. */
export function Logo({ className = "", inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden="true"
        className={`grid size-8 place-items-center rounded-lg font-display text-[0.78rem] font-bold tracking-tight ${
          inverted ? "bg-white text-ink" : "bg-ink text-white"
        }`}
      >
        MM
      </span>
      <span className="font-display text-[0.95rem] font-semibold uppercase leading-none tracking-[0.1em]">
        {siteConfig.name}
        <span aria-hidden="true" className="text-accent">
          .
        </span>
      </span>
    </span>
  );
}
