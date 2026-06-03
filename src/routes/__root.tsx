import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "google-site-verification", content: "mc9cjSuCVaTr7NrWyumtRnmHaC5rNvFaSxkoUjRH_tE" },
      { title: "Dr. Walter John Herrera Rucaj | Cardiólogo Intervencionista en San Salvador" },
      { name: "description", content: "Dr. Walter John Herrera Rucaj es cardiólogo intervencionista en San Salvador, El Salvador. Atención especializada en enfermedades cardiovasculares, presión alta, hipertensión, dolor de pecho, infartos, stents, chequeos cardiológicos, cateterismo cardíaco y angioplastia coronaria." },
      { name: "keywords", content: "Dr Walter Herrera, Walter John Herrera Rucaj, Cardiólogo en San Salvador, Cardiólogo Intervencionista en San Salvador, Cardiólogo en El Salvador, Cardiología Intervencionista, Clínica de Cardiología, Especialista del corazón, Doctor del corazón, Enfermedades cardiovasculares, Hipertensión arterial, Presión alta, Dolor de pecho, Infarto, Infarto de miocardio, Stents coronarios, Cateterismo cardíaco, Angioplastia coronaria, Chequeo cardiológico, Consulta cardiológica, Salud cardiovascular" },
      { name: "author", content: "Dr. Walter John Herrera Rucaj" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Dr. Walter John Herrera Rucaj | Cardiólogo Intervencionista en San Salvador" },
      { property: "og:description", content: "Cardiólogo intervencionista en San Salvador con más de 15 años de experiencia. Cateterismo cardíaco, angioplastia coronaria, stents, chequeos cardiológicos y tratamiento de hipertensión." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_SV" },
      { property: "og:site_name", content: "Dr. Walter John Herrera Rucaj" },
      { property: "og:url", content: "https://drwalterherrera.com/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dr. Walter John Herrera Rucaj | Cardiólogo Intervencionista en San Salvador" },
      { name: "twitter:description", content: "Cardiólogo intervencionista en San Salvador. Cateterismo cardíaco, angioplastia coronaria, stents y atención cardiovascular especializada." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/iL5NXpY0OGeXOcuHSDg9tkxW10F2/social-images/social-1780371728535-Untitled_-_June_01,_2026_at_21.32.25_(1)_(4).webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/iL5NXpY0OGeXOcuHSDg9tkxW10F2/social-images/social-1780371728535-Untitled_-_June_01,_2026_at_21.32.25_(1)_(4).webp" },

    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
