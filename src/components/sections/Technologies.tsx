import { Database, type LucideIcon, Monitor, Server, Wrench } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { technologyGroups } from "@/config/site";

const groupIcons: Record<string, LucideIcon> = {
  frontend: Monitor,
  backend: Server,
  datos: Database,
  herramientas: Wrench,
};

export function Technologies() {
  const groups = technologyGroups.filter((group) => group.items.length > 0);
  if (groups.length === 0) return null;

  return (
    <section aria-labelledby="tecnologias-titulo" className="border-t border-line bg-surface py-24 sm:py-28">
      <Container>
        <SectionHeading id="tecnologias-titulo" eyebrow="Stack" title="Tecnologías con las que trabajo" />

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => {
            const Icon = groupIcons[group.id] ?? Wrench;
            return (
              <div key={group.id} data-reveal className="bg-surface p-7">
                <h3 className="flex items-center gap-2.5 text-sm font-semibold">
                  <Icon aria-hidden="true" className="size-4 text-accent" />
                  {group.label}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-line bg-canvas px-3 py-1.5 font-mono text-[0.82rem] transition-colors duration-200 hover:border-accent/40 hover:text-accent-strong"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
