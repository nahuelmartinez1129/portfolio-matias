import { ArrowRight } from "lucide-react";
import { ButtonLink, Container, SectionHeading } from "@/components/ui/primitives";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="servicios" aria-labelledby="servicios-titulo" className="border-t border-line bg-surface py-24 sm:py-32">
      <Container>
        <SectionHeading
          id="servicios-titulo"
          eyebrow="Servicios"
          title="Soluciones digitales para tu negocio"
          subtitle="Cada emprendimiento tiene necesidades distintas. Podemos encontrar una solución práctica y adaptada a tu proyecto."
        />

        <ul className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <li
                key={service.title}
                data-reveal
                style={{ "--reveal-delay": `${(index % 2) * 90}ms` } as React.CSSProperties}
                className="group flex flex-col rounded-3xl border border-line bg-canvas p-7 transition-[border-color,background-color,transform] duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white sm:p-9"
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-surface text-accent ring-1 ring-line transition-colors duration-300 group-hover:bg-accent group-hover:text-white group-hover:ring-accent">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <span className="font-mono text-sm text-muted">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-7 font-display text-2xl font-semibold tracking-tight">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-pretty text-muted">{service.description}</p>

                {service.idealFor && (
                  <div className="mt-6">
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted">Ideal para</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {service.idealFor.map((item) => (
                        <li key={item} className="rounded-full border border-line bg-surface px-3 py-1 text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {service.note && <p className="mt-6 text-sm italic text-muted">{service.note}</p>}
              </li>
            );
          })}
        </ul>

        <div
          data-reveal
          className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl bg-accent-soft p-7 sm:flex-row sm:items-center sm:p-9"
        >
          <p className="max-w-xl font-display text-xl font-medium tracking-tight text-balance sm:text-2xl">
            ¿No sabés bien qué necesitás? Lo charlamos y vemos qué conviene para tu negocio.
          </p>
          <ButtonLink href="#contacto" variant="primary" className="shrink-0">
            Contame qué necesitás
            <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
