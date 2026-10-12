import { Container, Eyebrow } from "@/components/ui/primitives";
import { processStages } from "@/data/process";

export function Process() {
  return (
    <section aria-labelledby="proceso-titulo" className="bg-ink py-24 text-white sm:py-32">
      <Container>
        <div className="max-w-2xl" data-reveal>
          <Eyebrow className="text-[#a9b4ff]">Proceso</Eyebrow>
          <h2
            id="proceso-titulo"
            className="mt-4 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]"
          >
            De la idea a una solución funcional
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/65">
            Los tiempos dependen de lo que necesite cada proyecto: los definimos juntos al acordar el alcance.
          </p>
        </div>

        <ol className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <span aria-hidden="true" className="absolute left-0 right-0 top-6 hidden h-px bg-white/15 lg:block" />
          {processStages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <li
                key={stage.title}
                data-reveal
                style={{ "--reveal-delay": `${index * 100}ms` } as React.CSSProperties}
                className="relative"
              >
                <span className="relative grid size-12 place-items-center rounded-2xl bg-accent text-white ring-8 ring-ink">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-white/50">
                  Etapa {index + 1}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">{stage.title}</h3>
                <p className="mt-2 leading-relaxed text-white/65">{stage.description}</p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
