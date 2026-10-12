# Portfolio · Matias Martinez

Portfolio profesional de **Matias Martinez**, desarrollador web full stack. Presenta tres catálogos de demostración y los servicios de desarrollo web para emprendedores y negocios.

Página única con secciones: inicio, proyectos, servicios, sobre mí, tecnologías, proceso y contacto.

## Tecnologías

- Next.js 16.4 (App Router, Cache Components, Turbopack)
- React 19.3 · TypeScript 5
- Tailwind CSS 4
- Lucide React (íconos)

Sin backend, base de datos ni autenticación. Toda la página se prerenderiza de forma estática.

## Requisitos

- Node.js 20.9 o superior (probado con Node 22.17 y npm 10.9).

## Ejecutar localmente

```bash
npm install
npm run dev      # desarrollo en http://localhost:3000
```

Otros comandos:

```bash
npm run build    # build de producción
npm start        # sirve el build de producción
npm run lint     # ESLint
```

## Configurar datos personales

Todo se edita en **`src/config/site.ts`**:

| Constante / campo         | Qué es                                                              |
| ------------------------- | ------------------------------------------------------------------- |
| `WHATSAPP_PHONE`          | Número en formato internacional, solo dígitos (54 + 9 + característica + número) |
| `CONTACT_EMAIL`           | Correo de contacto                                                  |
| `GITHUB_URL`, `LINKEDIN_URL` | Opcionales, URL completa (`https://…`)                           |
| `siteConfig.availability` | Texto del indicador "Consultas abiertas…" (`enabled: false` lo oculta) |
| `siteConfig.whatsappMessage` | Mensaje inicial que se envía por WhatsApp                        |
| `technologyGroups`        | Tecnologías que se muestran, por categoría                          |

**Comportamiento del contacto**

- Un dato vacío o con formato inválido **no se muestra**: no hay botones rotos ni enlaces ficticios.
- WhatsApp abre `https://wa.me/<número>?text=<mensaje codificado>`.
- Si no hay ningún canal configurado, la sección de contacto muestra "Los canales de contacto se están configurando".
- En `npm run dev` aparece además un aviso (solo en desarrollo) con los campos que faltan completar.

**No hay formulario de contacto** a propósito: sin un backend o proveedor de formularios no habría forma real de recibir los mensajes. El contacto se hace por WhatsApp y correo.

## Editar contenido

| Qué                                        | Dónde                     |
| ------------------------------------------ | ------------------------- |
| Proyectos (nombre, URL, texto, funciones)  | `src/data/projects.ts`    |
| Servicios                                  | `src/data/services.ts`    |
| Pasos de "¿Cómo trabajo?" y del proceso    | `src/data/process.ts`     |
| Colores y tipografías                      | `src/app/globals.css` (`@theme`) y `src/app/layout.tsx` |
| Título, descripción y Open Graph           | `src/app/layout.tsx`, `src/app/opengraph-image.tsx` |

### Sobre las vistas previas de los proyectos

Las imágenes de las tarjetas **no son capturas de pantalla**: son ilustraciones hechas con código (`src/components/projects/ProjectPreview.tsx`) que evocan la identidad de cada demo, y están rotuladas como "Vista ilustrativa". Si más adelante querés usar capturas reales, guardalas en `public/` y reemplazá el componente por `next/image`.

### Sobre las URLs de las demos

Las demos están publicadas en Vercel:

- Raíz Cerámica: https://raiz-ceramica.vercel.app/
- Norte Estudio: https://norte-estudio-mu.vercel.app/
- Forma 3D: https://forma-3-d-eight.vercel.app/

Si cambia alguna dirección, actualizá el campo `url` en `src/data/projects.ts` (se usa en las tarjetas y en el footer).

## Estructura

```
src/
  app/                layout, página, estilos, ícono, imagen Open Graph, sitemap y robots
  config/site.ts      datos personales, contacto, navegación y tecnologías
  data/               proyectos, servicios y pasos del proceso
  lib/contact.ts      armado y validación de enlaces de contacto
  components/
    layout/           Header (menú móvil), Footer, Logo
    sections/         Hero, Projects, Services, About, Technologies, Process, Contact
    projects/         ProjectCard, ProjectPreview (ilustraciones)
    contact/          ChannelIcon
    ui/               primitivas (Container, SectionHeading, ButtonLink) y RevealObserver
```

Solo `Header` y `RevealObserver` son componentes de cliente; el resto se renderiza en el servidor.

## Accesibilidad y movimiento

- Enlace "Saltar al contenido", foco visible, navegación por teclado y menú móvil con `aria-expanded` (Escape lo cierra y devuelve el foco).
- Enlaces externos con `target="_blank"`, `rel="noopener noreferrer"` y aviso para lectores de pantalla.
- Animaciones sutiles que se desactivan con `prefers-reduced-motion`. Sin JavaScript, todo el contenido sigue visible.

## Publicar en GitHub

El repositorio git ya está inicializado.

```bash
git add .
git commit -m "Portfolio Matias Martinez"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/portfolio-matias-martinez.git
git push -u origin main
```

## Publicar en Vercel

1. Entrá a [vercel.com](https://vercel.com) → **Add New… → Project** e importá el repositorio. Vercel detecta Next.js automáticamente.
2. (Opcional) En **Settings → Environment Variables** agregá `NEXT_PUBLIC_SITE_URL` con tu dominio final, por ejemplo `https://matiasmartinez.com.ar`. Si no la definís, se usa el dominio de producción de Vercel.
3. **Deploy**. Cada `git push` a `main` vuelve a publicar el sitio.

Las variables `NEXT_PUBLIC_*` se incorporan al compilar: si las cambiás, hacé **Redeploy**.

> Revisá las condiciones vigentes de los planes de Vercel: el plan Hobby está pensado para uso personal y no comercial.
