import { ArrowUpRight } from "lucide-react";
import { ChannelIcon } from "@/components/contact/ChannelIcon";
import { Container, Eyebrow, NewTabHint } from "@/components/ui/primitives";
import { getContactChannels, getMissingContactFields } from "@/lib/contact";

export function Contact() {
  const channels = getContactChannels();
  const [primary, ...secondary] = channels;
  const missing = getMissingContactFields();
  const showSetupHint = process.env.NODE_ENV === "development" && missing.length > 0;

  return (
    <section id="contacto" aria-labelledby="contacto-titulo" className="py-24 sm:py-32">
      <Container>
        <div
          data-reveal
          className="relative overflow-hidden rounded-[32px] border border-line bg-surface px-6 py-12 sm:px-12 sm:py-16 lg:px-16"
        >
          <div aria-hidden="true" className="absolute -right-24 -top-24 size-80 rounded-full bg-accent/10 blur-3xl" />
          <div aria-hidden="true" className="bg-dots absolute inset-y-0 right-0 hidden w-1/3 [mask-image:linear-gradient(to_left,black,transparent)] lg:block" />

          <div className="relative grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <Eyebrow>Contacto</Eyebrow>
              <h2
                id="contacto-titulo"
                className="mt-4 font-display text-4xl font-semibold leading-[1.02] tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]"
              >
                ¿Tenés una idea para tu negocio?
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted">
                Contame qué querés mejorar o qué te gustaría crear. Podemos evaluar juntos una solución digital para tu
                emprendimiento.
              </p>
            </div>

            <div>
              {primary ? (
                <div className="flex flex-col gap-3">
                  <a
                    href={primary.href}
                    {...(primary.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex min-h-16 items-center justify-between gap-4 rounded-2xl bg-ink px-6 py-4 text-white transition-colors duration-200 hover:bg-accent-strong"
                  >
                    <span className="flex items-center gap-3.5">
                      <ChannelIcon id={primary.id} />
                      <span className="text-left">
                        <span className="block font-medium">{primary.label}</span>
                        <span className="block text-sm text-white/65">{primary.detail}</span>
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                    {primary.external && <NewTabHint />}
                  </a>

                  {secondary.map((channel) => (
                    <a
                      key={channel.id}
                      href={channel.href}
                      {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group flex min-h-14 items-center justify-between gap-4 rounded-2xl border border-line bg-canvas px-6 py-3 transition-colors duration-200 hover:border-ink/25 hover:bg-white"
                    >
                      <span className="flex min-w-0 items-center gap-3.5">
                        <ChannelIcon id={channel.id} className="size-5 shrink-0 text-accent" />
                        <span className="min-w-0 text-left">
                          <span className="block font-medium">{channel.label}</span>
                          <span className="block truncate text-sm text-muted">{channel.detail}</span>
                        </span>
                      </span>
                      <ArrowUpRight aria-hidden="true" className="size-4 shrink-0 text-muted" />
                      {channel.external && <NewTabHint />}
                    </a>
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-line bg-canvas p-6">
                  <p className="font-medium">Los canales de contacto se están configurando.</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Muy pronto vas a poder escribirme por WhatsApp o correo desde esta sección.
                  </p>
                </div>
              )}

              {showSetupHint && (
                <p className="mt-4 rounded-xl bg-amber-50 p-4 font-mono text-xs leading-relaxed text-amber-900">
                  Aviso solo visible en desarrollo: completá {missing.join(", ")} en src/config/site.ts.
                </p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
