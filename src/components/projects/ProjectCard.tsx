import { Check } from "lucide-react";
import type { Project, ProjectTheme } from "@/data/projects";
import { ButtonLink, ExternalArrow, NewTabHint } from "@/components/ui/primitives";
import { ProjectPreview } from "./ProjectPreview";

/** Tono de fondo del panel de vista previa, alineado a cada identidad. */
const panelTone: Record<ProjectTheme, string> = {
  raiz: "bg-[#ecdfd0]",
  norte: "bg-[#dcdbd5]",
  forma: "bg-[#d9e4e2]",
};

const markerTone: Record<ProjectTheme, string> = {
  raiz: "bg-[#b8653f]",
  norte: "bg-[#111]",
  forma: "bg-[#ff7a1a]",
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const number = String(index + 1).padStart(2, "0");
  const reversed = index % 2 === 1;
  const headingId = `proyecto-${project.slug}`;

  return (
    <article
      aria-labelledby={headingId}
      data-reveal
      className="group/card grid overflow-hidden rounded-[28px] border border-line bg-surface transition-[box-shadow,border-color] duration-300 hover:border-ink/15 hover:shadow-[0_30px_70px_-40px_rgb(25_25_25/0.45)] lg:grid-cols-[1.15fr_1fr]"
    >
      <div
        className={`relative flex items-center justify-center p-6 pb-11 sm:p-10 sm:pb-12${panelTone[project.theme]} ${
          reversed ? "lg:order-2" : ""
        }`}
      >
        <ProjectPreview
          project={project}
          className="w-full max-w-xl transition-transform duration-500 ease-out group-hover/card:-translate-y-1.5 group-hover/card:rotate-[-0.6deg]"
        />
        <span className="absolute bottom-3 left-4 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-ink/55 sm:left-6">
          Vista ilustrativa
        </span>
      </div>

      <div className="flex flex-col p-6 sm:p-10">
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-sm text-muted">{number}</span>
          <span className="rounded-full border border-line px-3 py-1 text-xs text-muted">
            Demo de portfolio · marca ficticia
          </span>
        </div>

        <p className="mt-6 flex items-center gap-2 text-sm font-medium text-muted">
          <span aria-hidden="true" className={`size-2 rounded-full ${markerTone[project.theme]}`} />
          {project.category}
        </p>
        <h3 id={headingId} className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-[2.1rem]">
          {project.name}
        </h3>
        <p className="mt-4 leading-relaxed text-pretty text-muted">{project.description}</p>

        <ul className="mt-6 space-y-2.5 text-[0.95rem]" aria-label={`Funciones de ${project.name}`}>
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-3">
              <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 pt-2 lg:mt-auto">
          <ButtonLink href={project.url} external variant="primary" className="w-full sm:w-auto">
            Explorar demo
            <span className="sr-only"> de {project.name}</span>
            <NewTabHint />
            <ExternalArrow />
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
