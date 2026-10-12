"use client";

import { useEffect } from "react";

/**
 * Activa la aparición progresiva de los elementos con `data-reveal`.
 * Sin JavaScript (o con movimiento reducido) el contenido se ve igual,
 * porque el estado oculto depende de la clase `reveal-ready`.
 */
export function RevealObserver() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window) || elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    // Lo que ya está en pantalla se muestra sin animación de entrada.
    const viewportHeight = window.innerHeight;
    for (const el of elements) {
      if (el.getBoundingClientRect().top < viewportHeight) {
        el.setAttribute("data-revealed", "");
      } else {
        observer.observe(el);
      }
    }
    document.documentElement.classList.add("reveal-ready");

    return () => observer.disconnect();
  }, []);

  return null;
}
