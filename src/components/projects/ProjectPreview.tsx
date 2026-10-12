import type { JSX } from "react";
import type { Project, ProjectTheme } from "@/data/projects";

/**
 * Vista previa ILUSTRADA de cada demo (no es una captura de pantalla).
 * Es una composición propia que evoca la identidad visual de cada catálogo.
 * Todas las medidas usan unidades de contenedor (cqw) para escalar igual
 * en el hero y en las tarjetas.
 */
export function ProjectPreview({
  project,
  className = "",
  decorative = false,
}: {
  project: Project;
  className?: string;
  /** Si es true, se oculta a lectores de pantalla (cuando ya hay texto equivalente cerca). */
  decorative?: boolean;
}) {
  const host = new URL(project.url).host;
  const Scene = scenes[project.theme];

  return (
    <div
      {...(decorative ? { "aria-hidden": true } : { role: "img", "aria-label": project.previewAlt })}
      className={`@container overflow-hidden rounded-[clamp(10px,2cqw,18px)] border border-black/10 bg-white shadow-[0_30px_60px_-30px_rgb(25_25_25/0.35)] ${className}`}
    >
      <div className="flex items-center gap-[1.4cqw] border-b border-black/[0.07] bg-[#fbfbf9] px-[3cqw] py-[2cqw]">
        <span className="size-[1.6cqw] rounded-full bg-[#e7e7e2]" />
        <span className="size-[1.6cqw] rounded-full bg-[#e7e7e2]" />
        <span className="size-[1.6cqw] rounded-full bg-[#e7e7e2]" />
        <span className="ml-[2cqw] truncate rounded-full bg-[#f0f0ec] px-[2.5cqw] py-[0.6cqw] font-mono text-[2.1cqw] text-[#8a8a85]">
          {host}
        </span>
      </div>
      <div className="aspect-[16/10]">
        <Scene />
      </div>
    </div>
  );
}

function RaizScene() {
  return (
    <div className="flex h-full flex-col bg-[#f4ebe0] p-[4cqw] text-[#3b2a20]">
      <div className="flex items-center justify-between">
        <span className="font-serif text-[3.4cqw] italic">Raíz</span>
        <span className="flex gap-[2cqw]">
          {[8, 10, 7].map((w) => (
            <span key={w} className="h-[0.9cqw] rounded-full bg-[#3b2a20]/25" style={{ width: `${w}cqw` }} />
          ))}
        </span>
      </div>

      <div className="mt-[3.5cqw] grid flex-1 grid-cols-[1.1fr_1fr] gap-[4cqw]">
        <div className="flex flex-col justify-center">
          <span className="font-serif text-[5.6cqw] leading-[1.05]">
            Piezas hechas
            <br />a mano
          </span>
          <span className="mt-[2cqw] h-[0.9cqw] w-[80%] rounded-full bg-[#3b2a20]/20" />
          <span className="mt-[1.2cqw] h-[0.9cqw] w-[60%] rounded-full bg-[#3b2a20]/20" />
          <span className="mt-[3cqw] w-fit rounded-full bg-[#b8653f] px-[3cqw] py-[1.3cqw] text-[2.2cqw] text-white">
            Ver catálogo
          </span>
        </div>
        <div className="relative overflow-hidden rounded-t-full bg-[#d9b99b]">
          <svg viewBox="0 0 100 100" className="absolute inset-x-0 bottom-0 w-full" aria-hidden="true">
            <ellipse cx="50" cy="92" rx="34" ry="5" fill="#3b2a20" opacity="0.12" />
            <path d="M28 52 Q28 88 50 88 Q72 88 72 52 Z" fill="#b8653f" />
            <ellipse cx="50" cy="52" rx="22" ry="5" fill="#8f4a2c" />
            <path d="M34 62 Q50 68 66 62" stroke="#f4ebe0" strokeWidth="1.5" fill="none" opacity="0.6" />
          </svg>
        </div>
      </div>

      <div className="mt-[3.5cqw] grid grid-cols-3 gap-[2.5cqw]">
        {[
          { bg: "#e6d3c0", shape: "cup" },
          { bg: "#cfd5c2", shape: "vase" },
          { bg: "#ead8c8", shape: "plate" },
        ].map((item) => (
          <div key={item.shape} className="rounded-[1.5cqw] bg-white/70 p-[1.5cqw]">
            <div className="grid aspect-[4/3] place-items-center rounded-[1cqw]" style={{ background: item.bg }}>
              <svg viewBox="0 0 40 30" className="w-[55%]" aria-hidden="true">
                {item.shape === "cup" && (
                  <>
                    <path d="M10 8 H26 V22 Q26 27 18 27 Q10 27 10 22 Z" fill="#8f4a2c" />
                    <path d="M26 11 Q32 11 32 16 Q32 21 26 21" stroke="#8f4a2c" strokeWidth="2.5" fill="none" />
                  </>
                )}
                {item.shape === "vase" && (
                  <path d="M16 3 H24 V8 Q31 13 30 21 Q29 28 20 28 Q11 28 10 21 Q9 13 16 8 Z" fill="#6f7d5f" />
                )}
                {item.shape === "plate" && (
                  <>
                    <ellipse cx="20" cy="18" rx="17" ry="8" fill="#b8653f" />
                    <ellipse cx="20" cy="16.5" rx="11" ry="4.5" fill="#d38a63" />
                  </>
                )}
              </svg>
            </div>
            <span className="mt-[1.2cqw] block h-[0.8cqw] w-[70%] rounded-full bg-[#3b2a20]/25" />
            <span className="mt-[0.8cqw] block h-[0.8cqw] w-[35%] rounded-full bg-[#b8653f]/70" />
          </div>
        ))}
      </div>
    </div>
  );
}

function NorteScene() {
  return (
    <div className="flex h-full flex-col bg-[#efeeea] p-[4cqw] text-[#111]">
      <div className="flex items-center justify-between">
        <span className="text-[3.2cqw] font-black tracking-[0.25em]">NORTE</span>
        <span className="flex items-center gap-[2cqw] text-[1.9cqw] font-semibold uppercase tracking-[0.12em] text-[#111]/60">
          <span>Nuevo</span>
          <span>Buzos</span>
          <span className="rounded-full bg-[#111] px-[1.6cqw] py-[0.5cqw] text-white">Carrito 2</span>
        </span>
      </div>

      <div className="mt-[3cqw] grid flex-1 grid-cols-[1fr_1.05fr] gap-[3cqw]">
        <div className="flex flex-col justify-between">
          <span className="text-[8.2cqw] font-black uppercase leading-[0.86] tracking-tight">
            Ropa
            <br />
            de
            <br />
            calle
          </span>
          <div className="flex items-center gap-[1.4cqw]">
            {["S", "M", "L", "XL"].map((size) => (
              <span
                key={size}
                className={`grid size-[5cqw] place-items-center border text-[1.9cqw] font-semibold ${
                  size === "M" ? "border-[#111] bg-[#111] text-white" : "border-[#111]/30"
                }`}
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-[1.6cqw]">
          {[
            { bg: "#1a1a1a", fg: "#efeeea" },
            { bg: "#c9c6bd", fg: "#1a1a1a" },
            { bg: "#8d9184", fg: "#efeeea" },
            { bg: "#e2492f", fg: "#efeeea" },
          ].map((tile, index) => (
            <div key={index} className="relative grid place-items-center" style={{ background: tile.bg }}>
              <svg viewBox="0 0 40 40" className="w-[58%]" aria-hidden="true">
                <path
                  d="M14 6 L8 9 L3 16 L8 19 L10 17 V35 H30 V17 L32 19 L37 16 L32 9 L26 6 Q20 11 14 6 Z"
                  fill={tile.fg}
                  opacity="0.92"
                />
              </svg>
              <span
                className="absolute bottom-[1cqw] left-[1cqw] size-[1.6cqw] rounded-full border border-white/60"
                style={{ background: tile.fg }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FormaScene() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-[#edf1f0] p-[4cqw] text-[#0f3d3e]">
      {/* Líneas de capa, como las de una pieza impresa */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, rgb(15 61 62 / 0.06) 0 1px, transparent 1px 2.2cqw)",
        }}
      />
      <div className="relative flex items-center justify-between">
        <span className="font-mono text-[3cqw] font-bold tracking-tight">
          FORMA<span className="text-[#ff7a1a]">3D</span>
        </span>
        <span className="rounded-full border border-[#0f3d3e]/25 px-[2cqw] py-[0.6cqw] font-mono text-[1.9cqw]">
          Personalizar
        </span>
      </div>

      <div className="relative mt-[2cqw] grid flex-1 grid-cols-[1.15fr_1fr] items-center gap-[3cqw]">
        <svg viewBox="0 0 120 100" className="w-full" aria-hidden="true">
          <polygon points="60,10 100,32 60,54 20,32" fill="#ff7a1a" />
          <polygon points="20,32 60,54 60,96 20,74" fill="#0f3d3e" />
          <polygon points="100,32 60,54 60,96 100,74" fill="#2f6b6c" />
          {[62, 70, 78, 86].map((y) => (
            <line key={y} x1="20" y1={y - 22} x2="60" y2={y} stroke="#edf1f0" strokeOpacity="0.18" strokeWidth="0.8" />
          ))}
          <circle cx="108" cy="12" r="7" fill="none" stroke="#0f3d3e" strokeWidth="1.5" />
          <rect x="4" y="80" width="10" height="10" fill="#ff7a1a" opacity="0.5" transform="rotate(12 9 85)" />
        </svg>

        <div className="flex flex-col gap-[1.8cqw]">
          <span className="text-[4.8cqw] font-semibold leading-[1.02] tracking-tight">
            Tu idea,
            <br />
            hecha objeto
          </span>
          <div className="rounded-[1.4cqw] bg-white p-[2cqw] shadow-sm">
            <span className="block font-mono text-[1.8cqw] text-[#0f3d3e]/60">Color</span>
            <span className="mt-[1cqw] flex gap-[1.2cqw]">
              {["#ff7a1a", "#0f3d3e", "#d7dedc", "#f2c94c"].map((color, index) => (
                <span
                  key={color}
                  className={`size-[3.2cqw] rounded-full ${index === 0 ? "ring-[0.5cqw] ring-[#0f3d3e]/30 ring-offset-1" : ""}`}
                  style={{ background: color }}
                />
              ))}
            </span>
            <span className="mt-[1.6cqw] block font-mono text-[1.8cqw] text-[#0f3d3e]/60">Texto</span>
            <span className="mt-[0.8cqw] block rounded-[0.8cqw] border border-[#0f3d3e]/20 px-[1.4cqw] py-[0.8cqw] font-mono text-[1.9cqw]">
              Tu nombre_
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const scenes: Record<ProjectTheme, () => JSX.Element> = {
  raiz: RaizScene,
  norte: NorteScene,
  forma: FormaScene,
};
