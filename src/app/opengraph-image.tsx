import { ImageResponse } from "next/og";

export const alt = "Matias Martinez, desarrollador web full stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#F7F7F4",
          color: "#191919",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#191919",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            MM
          </div>
          <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: 3 }}>MATIAS MARTINEZ</div>
          <div style={{ width: 10, height: 10, borderRadius: 999, background: "#5367E8" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 22, letterSpacing: 4, color: "#3F51D6" }}>
            DESARROLLO WEB FULL STACK
          </div>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.02, marginTop: 20, maxWidth: 940 }}>
            Transformo ideas en soluciones digitales.
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#686868" }}>
          Páginas web · Catálogos digitales · Herramientas a medida
        </div>
      </div>
    ),
    size,
  );
}
