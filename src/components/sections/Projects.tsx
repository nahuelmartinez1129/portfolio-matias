import { ProjectCard } from "@/components/projects/ProjectCard";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="proyectos" aria-labelledby="proyectos-titulo" className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="proyectos-titulo"
            eyebrow="Proyectos"
            title="Proyectos que podés explorar"
            subtitle="Diseños de demostración que muestran cómo una idea puede convertirse en una experiencia digital funcional."
          />
          <p className="max-w-xs text-sm leading-relaxed text-muted md:text-right" data-reveal>
            Las marcas, productos y precios son ficticios: son demos creadas para mostrar lo que se puede construir.
          </p>
        </div>

        <div className="mt-14 space-y-8 sm:space-y-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
