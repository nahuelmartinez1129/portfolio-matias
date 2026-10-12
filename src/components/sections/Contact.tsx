import { ArrowUpRight } from "lucide-react";
import { ChannelIcon } from "@/components/contact/ChannelIcon";
import { Container, Eyebrow, NewTabHint } from "@/components/ui/primitives";
import { type ContactChannel, getContactChannels, getMissingContactFields } from "@/lib/contact";

/** Si el correo no entra en una línea, se corta después de la "@" y no en cualquier letra. */
function EmailText({ value }: { value: string }) {
  const at = value.indexOf("@");
  if (at === -1) return value;
  return (
    <>
      {value.slice(0, at + 1)}
      <wbr />
      {value.slice(at + 1)}
    </>
  );
}

function ChannelLink({ channel, primary = false }: { channel: ContactChannel; primary?: boolean }) {
  return (
    <a
      href={channel.href}
      {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group flex min-h-16 w-full items-center gap-3 rounded-2xl px-4 py-3.5 transition-colors duration-200 sm:gap-4 sm:px-6 sm:py-4 ${
        primary
          ? "bg-ink text-white hover:bg-accent-strong"
          : "border border-line bg-canvas hover:border-ink/25 hover:bg-white"
      }`}
    >
      <span
        className={`grid size-10 shrink-0 place-items-center rounded-xl ${
          primary ? "bg-white/10 text-white" : "bg-surface text-accent ring-1 ring-line"
        }`}
      >
        <ChannelIcon id={channel.id} />
      </span>
      <span className="min-w-0 flex-1 text-left">
        <span className="block font-medium leading-snug">{channel.label}</span>
        <span
          className={`mt-0.5 block text-sm leading-snug [overflow-wrap:anywhere] ${
            primary ? "text-white/65" : "text-muted"
          }`}
        >
          {channel.id === "email" ? <EmailText value={channel.detail} /> : channel.detail}
        </span>
      </span>
      <ArrowUpRight
        aria-hidden="true"
        className={`hidden size-5 shrink-0 transition-transform sm:block duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
          primary ? "" : "text-muted"
        }`}
      />
      {channel.external && <NewTabHint />}
    </a>
  );
}

export function Contact() {
  const channels = getContactChannels();
  const [primary, ...secondary] = channels;
  const missing = getMissingContactFields();
  const showSetupHint = process.env.NODE_ENV === "development" && missing.length > 0;

  return (
    <section id="contacto" aria-labelledby="contacto-titulo" className="py-16 sm:py-28 lg:py-32">
      <Container>
        <div
          data-reveal
          className="relative overflow-hidden rounded-3xl border border-line bg-surface px-5 py-10 sm:rounded-[32px] sm:px-12 sm:py-16 lg:px-16"
        >
          <div aria-hidden="true" className="absolute -right-24 -top-24 size-80 rounded-full bg-accent/10 blur-3xl" />
          <div
            aria-hidden="true"
            className="bg-dots absolute inset-y-0 right-0 hidden w-1/3 [mask-image:linear-gradient(to_left,black,transparent)] lg:block"
          />

          <div className="relative grid grid-cols-[minmax(0,1fr)] gap-8 sm:gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-end">
            <div>
              <Eyebrow>Contacto</Eyebrow>
              <h2
                id="contacto-titulo"
                className="mt-4 font-display text-[2rem] font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]"
              >
                ¿Tenés una idea para tu negocio?
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-pretty text-muted sm:mt-6 sm:text-lg">
                Contame qué querés mejorar o qué te gustaría crear. Podemos evaluar juntos una solución digital para tu
                emprendimiento.
              </p>
            </div>

            <div>
              {primary ? (
                <ul className="flex flex-col gap-3">
                  <li>
                    <ChannelLink channel={primary} primary />
                  </li>
                  {secondary.map((channel) => (
                    <li key={channel.id}>
                      <ChannelLink channel={channel} />
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="rounded-2xl border border-dashed border-line bg-canvas p-5 sm:p-6">
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
