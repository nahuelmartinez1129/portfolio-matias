import { ArrowDown } from "lucide-react";
import { ProjectPreview } from "@/components/projects/ProjectPreview";
import { ButtonLink, Container, Eyebrow } from "@/components/ui/primitives";
import { siteConfig } from "@/config/site";
import { projects } from "@/data/projects";

const highlights = ["Catálogos digitales", "Páginas web", "Herramientas a medida", "Pedidos por WhatsApp"];

export function Hero() {
  const [raiz, norte, forma] = projects;

  return (
    <section id="inicio" aria-labelledby="hero-titulo" className="relative overflow-hidden">
      <div aria-hidden="true" className="bg-dots absolute inset-0 [mask-image:radial-gradient(ellipse_at_70%_30%,black,transparent_70%)]" />
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 size-[34rem] rounded-full bg-accent/15 blur-3xl"
      />

      <Container className="relative grid items-center gap-14 pb-20 pt-12 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-28 lg:pt-20">
        <div className="motion-safe:animate-rise">
          <Eyebrow>Desarrollo web full stack</Eyebrow>

          <h1
            id="hero-titulo"
            className="mt-6 font-display text-[2.7rem] font-semibold leading-[0.98] tracking-[-0.03em] text-balance sm:text-6xl lg:text-[4.6rem]"
          >
            Transformo ideas en soluciones{" "}
            <span className="relative whitespace-nowrap text-accent">
              digitales
              <svg
                aria-hidden="true"
                viewBox="0 0 220 14"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-3 w-full text-accent/35"
              >
                <path d="M2 10 Q 60 2 110 7 T 218 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
            .
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-pretty text-muted">
            Soy <strong className="font-semibold text-ink">{siteConfig.name}</strong>, desarrollador web full stack.
            Creo páginas web, catálogos digitales y herramientas a medida para emprendedores que quieren presentar mejor
            sus productos y hacer crecer su negocio.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#proyectos" variant="accent">
              Ver mis proyectos
              <ArrowDown aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:translate-y-0.5" />
            </ButtonLink>
            <ButtonLink href="#contacto" variant="secondary">
              Consultar por un proyecto
            </ButtonLink>
          </div>

          {siteConfig.availability.enabled && (
            <p className="mt-9 inline-flex items-center gap-2.5 text-sm text-muted">
              <span aria-hidden="true" className="size-2 rounded-full bg-[#22a06b] motion-safe:animate-pulse-dot" />
              {siteConfig.availability.label}
            </p>
          )}
        </div>

        {/* Composición visual: ilustraciones de las tres demos (no son capturas). */}
        <div
          role="img"
          aria-label="Composición con ilustraciones de los tres catálogos de demostración: Raíz Cerámica, Norte Estudio y Forma 3D."
          className="relative mx-auto aspect-[1/0.92] w-full max-w-[34rem] motion-safe:animate-rise [animation-delay:150ms]"
        >
          <ProjectPreview
            project={norte}
            decorative
            className="absolute left-0 top-[4%] w-[68%] -rotate-[5deg]"
          />
          <ProjectPreview
            project={forma}
            decorative
            className="absolute right-0 top-0 w-[62%] rotate-[4deg]"
          />
          <ProjectPreview
            project={raiz}
            decorative
            className="absolute bottom-0 left-[14%] w-[74%] shadow-[0_40px_80px_-30px_rgb(25_25_25/0.45)]"
          />
          <div className="absolute -left-2 bottom-[3%] hidden rounded-2xl border border-line bg-surface/95 px-4 py-3 shadow-lg backdrop-blur sm:block">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">3 demos</p>
            <p className="font-display text-sm font-semibold">Catálogos con pedido por WhatsApp</p>
          </div>
        </div>
      </Container>

      <div className="relative border-y border-line bg-surface/60">
        <Container>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-5 text-sm text-muted sm:justify-between">
            {highlights.map((item) => (
              <li key={item} className="inline-flex items-center gap-2.5">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
