"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/config/site";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("inicio");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Borde y fondo sólido al desplazarse.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sección activa según la posición de desplazamiento.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Menú móvil: Escape cierra y devuelve el foco; se cierra al pasar a escritorio.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const onChange = () => desktop.matches && setOpen(false);

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onChange);
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onChange);
    };
  }, [open]);

  const linkClass = (id: string) =>
    `relative rounded-full px-3.5 py-2 text-sm transition-colors duration-200 ${
      active === id ? "text-ink" : "text-muted hover:text-ink"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-b border-line bg-canvas/85 backdrop-blur-md"
          : "border-b border-transparent bg-canvas/0"
      }`}
    >
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Saltar al contenido
      </a>

      <nav
        aria-label="Navegación principal"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8 md:h-[4.5rem]"
      >
        <a href="#inicio" className="rounded-lg" onClick={() => setOpen(false)}>
          <Logo />
          <span className="sr-only">, ir al inicio</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={linkClass(item.id)}
                aria-current={active === item.id ? "location" : undefined}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left rounded-full bg-accent transition-transform duration-300 ${
                    active === item.id ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contacto"
            className="hidden min-h-10 items-center rounded-full bg-ink px-5 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-strong sm:inline-flex"
          >
            Hablemos
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="grid size-11 place-items-center rounded-full border border-line bg-surface text-ink md:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
            <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
          </button>
        </div>
      </nav>

      <div
        id="menu-movil"
        ref={panelRef}
        hidden={!open}
        className="border-t border-line bg-canvas md:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                aria-current={active === item.id ? "location" : undefined}
                className={`flex min-h-12 items-center justify-between border-b border-line/70 font-display text-xl ${
                  active === item.id ? "text-ink" : "text-muted"
                }`}
              >
                {item.label}
                {active === item.id && <span aria-hidden="true" className="size-2 rounded-full bg-accent" />}
              </a>
            </li>
          ))}
          <li className="pt-4 pb-2">
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center justify-center rounded-full bg-ink text-[0.95rem] font-medium text-white"
            >
              Hablemos
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
