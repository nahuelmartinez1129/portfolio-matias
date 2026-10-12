import { cacheLife } from "next/cache";
import { ChannelIcon } from "@/components/contact/ChannelIcon";
import { Container, NewTabHint } from "@/components/ui/primitives";
import { navItems, siteConfig } from "@/config/site";
import { projects } from "@/data/projects";
import { getContactChannels } from "@/lib/contact";
import { Logo } from "./Logo";

/** Año actual, cacheado por día (Cache Components no permite leer la hora sin cachear). */
async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

export function Footer() {
  const channels = getContactChannels();

  return (
    <footer className="border-t border-line bg-surface">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <a href="#inicio" className="inline-block rounded-lg">
            <Logo />
            <span className="sr-only">, volver al inicio</span>
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
            {siteConfig.role}. {siteConfig.shortDescription}
          </p>
        </div>

        <nav aria-label="Secciones">
          <h2 className="text-sm font-semibold">Secciones</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-muted transition-colors hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Proyectos de demostración">
          <h2 className="text-sm font-semibold">Demos</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {projects.map((project) => (
              <li key={project.slug}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-ink"
                >
                  {project.name}
                  <NewTabHint />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold">Contacto</h2>
          {channels.length > 0 ? (
            <ul className="mt-4 space-y-2.5 text-sm">
              {channels.map((channel) => (
                <li key={channel.id}>
                  <a
                    href={channel.href}
                    {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="inline-flex items-center gap-2 text-muted transition-colors hover:text-ink"
                  >
                    <ChannelIcon id={channel.id} className="size-4" />
                    {channel.shortLabel}
                    {channel.external && <NewTabHint />}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-sm text-muted">
              <a href="#contacto" className="underline underline-offset-4 hover:text-ink">
                Ir a la sección de contacto
              </a>
            </p>
          )}
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col gap-2 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CurrentYear /> {siteConfig.name}. Desarrollo web full stack.
          </p>
          <p>Los proyectos mostrados son demostraciones con marcas ficticias.</p>
        </Container>
      </div>
    </footer>
  );
}
