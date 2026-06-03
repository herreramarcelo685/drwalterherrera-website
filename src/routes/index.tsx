import { createFileRoute } from "@tanstack/react-router";
import portraitAsset from "@/assets/dr-walter-herrera.png.asset.json";
import procedureAsset from "@/assets/dr-walter-herrera-angioplastia.png.asset.json";
import cathlabAsset from "@/assets/dr-walter-herrera-cateterismo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Walter John Herrera Rucaj | Cardiólogo Intervencionista en San Salvador" },
      { name: "description", content: "Dr. Walter John Herrera Rucaj es cardiólogo intervencionista en San Salvador, El Salvador. Atención especializada en enfermedades cardiovasculares, presión alta, hipertensión, dolor de pecho, infartos, stents, chequeos cardiológicos, cateterismo cardíaco y angioplastia coronaria." },
      { property: "og:title", content: "Dr. Walter John Herrera Rucaj | Cardiólogo Intervencionista en San Salvador" },
      { property: "og:description", content: "Cardiólogo intervencionista en San Salvador con más de 15 años de experiencia. Cateterismo cardíaco, angioplastia coronaria, stents y chequeos cardiológicos." },
      { property: "og:url", content: "https://drwalterherrera.com/" },
      { property: "og:image", content: portraitAsset.url },
      { name: "twitter:image", content: portraitAsset.url },
    ],
    links: [
      { rel: "canonical", href: "https://drwalterherrera.com/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Physician",
          "@id": "https://drwalterherrera.com/#physician",
          name: "Dr. Walter John Herrera Rucaj",
          alternateName: "Dr. Walter Herrera",
          image: portraitAsset.url,
          url: "https://drwalterherrera.com/",
          medicalSpecialty: ["Cardiovascular", "InterventionalCardiology"],
          description: "Cardiólogo Clínico y Cardiólogo Intervencionista en San Salvador, El Salvador. Más de 15 años de experiencia en enfermedades cardiovasculares, cateterismo cardíaco, angioplastia coronaria con stent y colocación de marcapasos.",
          knowsLanguage: ["es", "en"],
          areaServed: { "@type": "Country", name: "El Salvador" },
          alumniOf: [
            { "@type": "CollegeOrUniversity", name: "Universidad Nacional Autónoma de México (UNAM)" },
            { "@type": "Hospital", name: "Centro Médico Nacional 20 de Noviembre, ISSSTE" },
            { "@type": "CollegeOrUniversity", name: "Universidad Nacional de El Salvador" },
          ],
          hasCredential: {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "Especialidad Médica",
            recognizedBy: { "@type": "Organization", name: "Consejo Nacional de Especialidades Médicas (CONADEM) de El Salvador" },
            identifier: "CARDIOL-053-1",
          },
          availableService: [
            "Cateterismo cardíaco",
            "Angiografía coronaria",
            "Angioplastia coronaria con stent",
            "Colocación de marcapasos",
            "Ecocardiograma",
            "Electrocardiograma",
            "Prueba de esfuerzo",
            "Monitoreo Holter 24 horas",
            "MAPA - Monitoreo de presión arterial",
            "Consulta cardiológica",
            "Prevención cardiovascular",
            "Tratamiento de hipertensión arterial",
          ],
          worksFor: [
            { "@id": "https://drwalterherrera.com/#clinica-escalon" },
            { "@id": "https://drwalterherrera.com/#clinica-medica" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "MedicalClinic",
              "@id": "https://drwalterherrera.com/#clinica-escalon",
              name: "Dr. Walter John Herrera Rucaj — Clínica Colonia Escalón",
              image: portraitAsset.url,
              url: "https://drwalterherrera.com/",
              telephone: "+503 2263-5960",
              medicalSpecialty: ["Cardiovascular", "InterventionalCardiology"],
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Plaza Villavicencio, 99 Av. Nte. y Paseo Gral. Escalón, 3er. Nivel, Local 3-42",
                addressLocality: "San Salvador",
                addressCountry: "SV",
              },
              openingHoursSpecification: [{
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                opens: "08:30",
                closes: "11:30",
              }, {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "09:00",
                closes: "11:00",
              }],
              contactPoint: { "@type": "ContactPoint", telephone: "+50378500577", contactType: "appointments", contactOption: "WhatsApp" },
            },
            {
              "@type": "MedicalClinic",
              "@id": "https://drwalterherrera.com/#clinica-medica",
              name: "Dr. Walter John Herrera Rucaj — Clínica Colonia Médica",
              image: portraitAsset.url,
              url: "https://drwalterherrera.com/",
              telephone: "+503 2225-1871",
              medicalSpecialty: ["Cardiovascular", "InterventionalCardiology"],
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Diagonal Dr. Luis E. Vásquez #250 B",
                addressLocality: "San Salvador",
                addressCountry: "SV",
              },
              openingHoursSpecification: [{
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                opens: "13:00",
                closes: "15:00",
              }],
              contactPoint: { "@type": "ContactPoint", telephone: "+50378500510", contactType: "appointments", contactOption: "WhatsApp" },
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ImageObject",
              "@id": "https://drwalterherrera.com/#image-portrait",
              contentUrl: `https://drwalterherrera.com${portraitAsset.url}`,
              url: `https://drwalterherrera.com${portraitAsset.url}`,
              caption: "Dr. Walter John Herrera Rucaj, Cardiólogo Intervencionista en San Salvador, El Salvador.",
              name: "Dr. Walter John Herrera Rucaj - Cardiólogo Intervencionista en San Salvador",
              description: "Retrato profesional del Dr. Walter Herrera, cardiólogo intervencionista con más de 15 años de experiencia en San Salvador.",
              creditText: "Dr. Walter John Herrera Rucaj",
              representativeOfPage: true,
            },
            {
              "@type": "ImageObject",
              "@id": "https://drwalterherrera.com/#image-cathlab",
              contentUrl: `https://drwalterherrera.com${cathlabAsset.url}`,
              url: `https://drwalterherrera.com${cathlabAsset.url}`,
              caption: "Dr. Walter Herrera realizando cateterismo cardíaco en sala de hemodinamia.",
              name: "Cateterismo cardíaco - Dr. Walter Herrera en sala de hemodinamia",
              description: "Cardiología intervencionista: cateterismo cardíaco y angioplastía coronaria con stent en clínica cardiológica en San Salvador.",
            },
            {
              "@type": "ImageObject",
              "@id": "https://drwalterherrera.com/#image-procedure",
              contentUrl: `https://drwalterherrera.com${procedureAsset.url}`,
              url: `https://drwalterherrera.com${procedureAsset.url}`,
              caption: "Procedimiento de cardiología intervencionista realizado por el Dr. Walter Herrera.",
              name: "Angioplastía coronaria - Procedimiento de cardiología intervencionista",
              description: "Angioplastía coronaria con stent y procedimientos de cardiología intervencionista en San Salvador.",
            },
          ],
        }),
      },

    ],
  }),
  component: Home,
});

const services = [
  "Cateterismo cardíaco",
  "Cateterismo cardíaco derecho",
  "Angiografía coronaria",
  "Angioplastía con stent coronario",
  "Colocación de marcapasos",
  "Electrocardiogramas",
  "Pruebas de esfuerzo",
  "Ecocardiogramas",
  "Arritmias cardíacas",
  "Consultas cardiológicas",
  "Control de colesterol y triglicéridos",
  "Prevención cardiovascular",
  "Evaluación cardiovascular preoperatoria",
  "Monitoreo cardíaco-transoperatorio",
  "Prueba de inclinación",
  "Monitoreo Holter de 24 horas",
  "MAPA (Monitoreo continuo de la presión arterial)",
  "Dolores de cabeza",
];

const WA_ESCALON = "https://wa.me/50378500577";
const WA_MEDICA = "https://wa.me/50378500510";

function HeartMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 56" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M32 50 C 12 36, 4 24, 10 14 C 15 6, 26 6, 32 16 C 38 6, 49 6, 54 14 C 60 24, 52 36, 32 50 Z"
        stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
      <path d="M22 24 L26 24 L28 19 L32 32 L35 25 L42 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Bar */}
      <header className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <HeartMark className="h-10 w-10 md:h-11 md:w-11 text-destructive flex-shrink-0" />
            <div className="leading-tight min-w-0">
              <div className="font-serif text-xl md:text-3xl lg:text-4xl text-primary">Dr. Walter John Herrera Rucaj</div>
              <div className="text-[10px] md:text-xs lg:text-sm tracking-[0.18em] uppercase text-muted-foreground">Cardiólogo Intervencionista</div>
            </div>
          </a>
          <nav className="hidden md:flex gap-8 text-sm text-foreground/80">
            <a href="#sobre" className="hover:text-primary transition">Sobre el Doctor</a>
            <a href="#servicios" className="hover:text-primary transition">Servicios</a>
            <a href="#educacion" className="hover:text-primary transition">Educación</a>
            <a href="#contacto" className="hover:text-primary transition">Contacto</a>
          </nav>
          <a href="#contacto" className="hidden md:inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition">
            Agendar Cita
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
              <span className="h-px w-8 bg-[var(--gold)]" /> San Salvador
            </div>
            <h1 className="font-serif text-4xl md:text-6xl text-primary leading-[1.05] mb-6">
              Cardiólogo Intervencionista<br />en San Salvador.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              El <strong className="text-foreground">Dr. Walter John Herrera Rucaj</strong> ofrece atención cardiológica especializada
              en San Salvador, El Salvador: cateterismo cardíaco, angioplastia coronaria con stent, chequeos cardiológicos y tratamiento
              de hipertensión arterial. Más de <strong className="text-foreground">15 años</strong> de experiencia, formado en el
              Centro Médico Nacional 20 de Noviembre (ISSSTE), Universidad Nacional Autónoma de México.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href={WA_ESCALON} target="_blank" rel="noreferrer"
                className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition">
                Cita en Colonia Escalón
              </a>
              <a href={WA_MEDICA} target="_blank" rel="noreferrer"
                className="inline-flex items-center rounded-md border border-primary px-6 py-3 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition">
                Cita en Colonia Médica
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <div className="font-serif text-3xl text-primary">15+</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Años de experiencia</div>
              </div>
              <div>
                <div className="font-serif text-3xl text-primary">2</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Clínicas en S.S.</div>
              </div>
              <div>
                <div className="font-serif text-3xl text-primary">UNAM</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Formación</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-[var(--gold)]/10 rounded-sm -z-10" />
            <div className="w-full h-[560px] bg-muted rounded-sm shadow-2xl overflow-hidden flex items-end justify-center">
              <img
                src={portraitAsset.url}
                alt="Dr. Walter John Herrera Rucaj, Cardiólogo Intervencionista en San Salvador, El Salvador - retrato completo de cuerpo superior"
                title="Dr. Walter John Herrera Rucaj - Cardiólogo Intervencionista en San Salvador"
                width={800}
                height={1000}
                loading="eager"
                decoding="async"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-card border border-border p-5 shadow-lg max-w-xs hidden md:block">
              <div className="font-serif text-primary text-lg mb-1">Atención certificada</div>
              <div className="text-xs text-muted-foreground">Cardiología Intervencionista certificada por el ISSSTE, México.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-20 md:py-28 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <div className="text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-4">Sobre el Doctor</div>
            <h2 className="font-serif text-4xl text-primary mb-6 leading-tight">
              Especialista del corazón en El Salvador.
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              El Dr. Walter John Herrera Rucaj es Cardiólogo Clínico y Cardiólogo Intervencionista con formación en uno de los
              centros médicos más prestigiosos de Latinoamérica. Combina rigor académico con un trato humano
              y cercano hacia cada paciente.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Su práctica abarca desde la prevención cardiovascular hasta procedimientos de alta
              complejidad como angioplastía coronaria con Stent y colocación de marcapasos.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Avalado por el Consejo Nacional de Especialidades Médicas (CONADEM) de El Salvador Con Número Único de Especialista: CARDIOL-053-1
            </p>
          </div>
          <div className="md:col-span-3 grid grid-cols-2 gap-4">
            <img
              src={cathlabAsset.url}
              alt="Cateterismo cardíaco - Dr. Walter Herrera, Cardiólogo Intervencionista en San Salvador, en sala de hemodinamia"
              title="Cateterismo cardíaco y angioplastía coronaria con stent - Dr. Walter Herrera"
              width={800} height={800} loading="lazy" decoding="async"
              className="w-full h-80 object-cover rounded-sm"
            />
            <img
              src={procedureAsset.url}
              alt="Angioplastía coronaria con stent - Procedimiento de cardiología intervencionista por el Dr. Walter John Herrera Rucaj"
              title="Angioplastía coronaria con stent - Dr. Walter Herrera, clínica cardiológica en San Salvador"
              width={800} height={800} loading="lazy" decoding="async"
              className="w-full h-80 object-cover rounded-sm"
            />

          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 md:py-28 bg-secondary/40 border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-4">Servicios</div>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">Atención cardiológica integral</h2>
            <p className="text-muted-foreground">
              Procedimientos diagnósticos y terapéuticos para el cuidado completo de su salud cardiovascular.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {services.map((s) => (
              <div key={s} className="bg-card p-6 flex items-start gap-4 hover:bg-accent/40 transition">
                <HeartMark className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
                <span className="text-foreground/90 font-medium">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educación */}
      <section id="educacion" className="py-20 md:py-28 border-b border-border">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-4">Formación Académica</div>
            <h2 className="font-serif text-4xl md:text-5xl text-primary">Educación y trayectoria</h2>
          </div>
          <ol className="relative border-l-2 border-[var(--gold)]/40 ml-3 space-y-12">
            {[
              {
                title: "Cardiología Intervencionista",
                inst: "Centro Médico Nacional 20 de Noviembre, ISSSTE",
                uni: "Universidad Nacional Autónoma de México (UNAM)",
                loc: "Ciudad de México, México",
              },
              {
                title: "Cardiología",
                inst: "Centro Médico Nacional 20 de Noviembre, ISSSTE",
                uni: "Universidad Nacional Autónoma de México (UNAM)",
                loc: "Ciudad de México, México",
              },
              {
                title: "Medicina Interna",
                inst: "Hospital Médico Quirúrgico, ISSS",
                uni: "Universidad Nacional de El Salvador",
                loc: "San Salvador, El Salvador",
              },
            ].map((e) => (
              <li key={e.title} className="pl-8 relative">
                <span className="absolute -left-[11px] top-1.5 h-5 w-5 rounded-full bg-background border-2 border-[var(--gold)]" />
                <h3 className="font-serif text-2xl text-primary mb-2">{e.title}</h3>
                <p className="text-foreground/90">{e.inst}</p>
                <p className="text-muted-foreground text-sm mt-1">{e.uni}</p>
                <p className="text-muted-foreground text-sm italic">{e.loc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Contacto / Clínicas */}
      <section id="contacto" className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-4">Contacto</div>
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Nuestras Clínicas</h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto">
              Dos ubicaciones en San Salvador para su comodidad. Agende su cita por WhatsApp.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Escalón */}
            <div className="border border-primary-foreground/20 p-8 md:p-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-3xl">Colonia Escalón</h3>
                <HeartMark className="h-8 w-8 text-[var(--gold)]" />
              </div>
              <div className="space-y-5 text-primary-foreground/85">
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-[var(--gold)] mb-2">Dirección</div>
                  <p>Plaza Villavicencio<br />99 Av. Nte. y Paseo Gral. Escalón<br />3er. Nivel, Local 3-42, San Salvador</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-[var(--gold)] mb-2">Horario</div>
                  <p>Lunes a Viernes · 8:30 a.m. – 11:30 a.m.</p>
                  <p>Sábado · 9:00 a.m. – 11:00 a.m.</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-[var(--gold)] mb-2">Teléfono</div>
                  <p>2263-5960</p>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href={WA_ESCALON} target="_blank" rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-[var(--gold)] px-5 py-3 text-sm font-medium text-primary hover:opacity-90 transition">
                  WhatsApp: 7850-0577
                </a>
                <a href="tel:+50322635960" className="inline-flex items-center justify-center rounded-md border border-primary-foreground/30 px-5 py-3 text-sm font-medium hover:bg-primary-foreground/10 transition">
                  Llamar
                </a>
              </div>
            </div>

            {/* Médica */}
            <div className="border border-primary-foreground/20 p-8 md:p-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-3xl">Colonia Médica</h3>
                <HeartMark className="h-8 w-8 text-[var(--gold)]" />
              </div>
              <div className="space-y-5 text-primary-foreground/85">
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-[var(--gold)] mb-2">Dirección</div>
                  <p>Diagonal Dr. Luis E. Vásquez<br />#250 B, San Salvador</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-[var(--gold)] mb-2">Horario</div>
                  <p>Lunes a Viernes · 1:00 p.m. – 3:00 p.m.</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-[var(--gold)] mb-2">Teléfono</div>
                  <p>2225-1871</p>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href={WA_MEDICA} target="_blank" rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-[var(--gold)] px-5 py-3 text-sm font-medium text-primary hover:opacity-90 transition">
                  WhatsApp: 7850-0510
                </a>
                <a href="tel:+50322251871" className="inline-flex items-center justify-center rounded-md border border-primary-foreground/30 px-5 py-3 text-sm font-medium hover:bg-primary-foreground/10 transition">
                  Llamar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <HeartMark className="h-6 w-6 text-destructive" />
            <span>Dr. Walter John Herrera Rucaj</span>
          </div>
          <div>© {new Date().getFullYear()} Todos los derechos reservados.</div>
        </div>
      </footer>
    </div>
  );
}
