import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import { RevealObserver } from "@/components/ui/RevealObserver";
import { siteConfig } from "@/config/site";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const title = "Matias Martinez | Desarrollador Web Full Stack";
const description =
  "Desarrollo páginas web y catálogos digitales para emprendedores y negocios. Diseños claros, adaptados a celulares y pensados para recibir consultas.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  keywords: [
    "desarrollador web",
    "páginas web para emprendimientos",
    "catálogo digital",
    "catálogo online WhatsApp",
    "desarrollo web para negocios",
    "desarrollo web full stack",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: siteConfig.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f7f7f4",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-AR"
      className={`${geist.variable} ${geistMono.variable} ${bricolage.variable} antialiased`}
    >
      <body className="min-h-dvh overflow-x-clip">
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
