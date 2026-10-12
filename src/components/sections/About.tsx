import { Container, Eyebrow } from "@/components/ui/primitives";
import { siteConfig } from "@/config/site";
import { workSteps } from "@/data/process";

export function About() {
  return (
    <section id="sobre-mi" aria-labelledby="sobre-mi-titulo" className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div data-reveal>
            <Eyebrow>Sobre mí</Eyebrow>
            <h2
              id="sobre-mi-titulo"
              className="mt-4 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]"
            >
              Tecnología con un propósito práctico
            </h2>
            <div className="mt-8 hidden rounded-3xl border border-line bg-surface p-6 lg:block">
              <p className="font-display text-lg font-semibold">{siteConfig.name}</p>
              <p className="text-muted">{siteConfig.role}</p>
            </div>
          </div>

          <div data-reveal className="space-y-5 text-lg leading-relaxed text-pretty text-muted">
            <p>
              Soy <span className="font-medium text-ink">{siteConfig.name}</span>, desarrollador web full stack. Me
              interesa crear soluciones digitales que no se queden solamente en el diseño, sino que ayuden a resolver
              necesidades reales.
            </p>
            <p>Trabajo en el desarrollo de interfaces, funcionalidades y experiencias web adaptadas a cada proyecto.</p>
            <p>
              Mi objetivo es acercar herramientas digitales útiles a{" "}
              <span className="font-medium text-ink">emprendedores y negocios</span>, con propuestas claras, diseños
              cuidados y soluciones acordes a lo que cada negocio necesita.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h3 data-reveal className="font-display text-2xl font-semibold tracking-tight">
            ¿Cómo trabajo?
          </h3>
          <ol className="mt-8 grid gap-5 md:grid-cols-3">
            {workSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.title}
                  data-reveal
                  style={{ "--reveal-delay": `${index * 90}ms` } as React.CSSProperties}
                  className="relative rounded-3xl border border-line bg-surface p-7"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-xl bg-accent-soft text-accent-strong">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <span className="font-mono text-sm text-muted">Paso {index + 1}</span>
                  </div>
                  <h4 className="mt-6 font-display text-xl font-semibold tracking-tight">{step.title}</h4>
                  <p className="mt-2 leading-relaxed text-muted">{step.description}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
