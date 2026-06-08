import Image from 'next/image';

const phone = '+34638736058';
const phoneClean = phone.replace(/\s+/g, '');
const whatsappUrl = `https://wa.me/${phoneClean.replace('+', '')}?text=${encodeURIComponent('Hola, me gustaría reservar un trayecto con Black Swan Luxury Driver.')}`;
const email = 'otitrader@gmail.com';

function SwanLogo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 24c2-1 3.5-2.5 4.5-4.5C12 16 14 13 17 12c2.5-1 4.5-.5 5.5.5 1 .8 1 1.8.5 2.5-.5.6-1.5.7-2 .3M19 14c.8.3 2 1.2 2.5 2.5.6 1.6 0 3.2-1.5 4.5-1.7 1.5-4 2.3-7 2.5H6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="22" cy="13.5" r="0.7" fill="currentColor" />
    </svg>
  );
}

function IconWhatsapp({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.9-.4-1.7-1-2.4-1.8-.6-.7-1.1-1.5-1.4-2.3-.1-.3 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.2.2-.4.1-.1.1-.3 0-.4-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3 4.8 4.2 1.7.7 2.3.8 3.2.6.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
    </svg>
  );
}

function IconPhone({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconArrow({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const servicios = [
  { title: 'Traslados aeropuerto', desc: 'Recepción personalizada en Barajas y vuelos privados. Seguimiento de vuelo y espera de cortesía incluida.' },
  { title: 'Eventos y galas', desc: 'Llegadas puntuales a eventos sociales, premieres y cenas privadas en Madrid.' },
  { title: 'Bodas', desc: 'Servicio de chofer para novios e invitados VIP. Vehículo decorado bajo petición.' },
  { title: 'Servicio corporativo', desc: 'Cuenta empresa, facturación mensual y disponibilidad para ejecutivos y delegaciones.' },
  { title: 'Roadshows', desc: 'Agendas intensivas multi-parada para giras corporativas, financieras y de inversión.' },
  { title: 'Disposición horaria', desc: 'Chofer a disposición por horas o jornada completa con itinerario flexible.' }
];

const valores = [
  { num: '01', title: 'Discreción', desc: 'Confidencialidad absoluta. Lo que ocurre dentro del vehículo, permanece dentro.' },
  { num: '02', title: 'Puntualidad', desc: 'Margen de seguridad calculado. Llegamos antes para que usted llegue a tiempo.' },
  { num: '03', title: 'Presentación', desc: 'Chofer uniformado, trato impecable y conocimiento profundo de Madrid.' },
  { num: '04', title: 'Disponibilidad 24/7', desc: 'Servicio nocturno, festivos y emergencias coordinadas con antelación.' }
];

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-bg/70 border-b border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 text-ink group">
            <SwanLogo className="w-7 h-7 text-accent transition-transform duration-300 ease-out-strong group-hover:scale-105" />
            <span className="h-display text-base tracking-tight">Black Swan</span>
          </a>
          <nav className="hidden md:flex items-center gap-9 text-[0.75rem] tracking-[0.22em] uppercase text-inkSoft">
            <a href="#servicios" className="hover:text-accent transition-colors duration-200">Servicios</a>
            <a href="#flota" className="hover:text-accent transition-colors duration-200">Flota</a>
            <a href="#experiencia" className="hover:text-accent transition-colors duration-200">Experiencia</a>
            <a href="#contacto" className="hover:text-accent transition-colors duration-200">Contacto</a>
          </nav>
          <a href={`tel:${phoneClean}`} className="hidden sm:inline-flex items-center gap-2 text-[0.75rem] tracking-[0.18em] uppercase text-accent hover:text-ink transition-colors duration-200">
            <IconPhone className="w-3.5 h-3.5" />
            <span>24/7</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-end pt-32 pb-20 lg:pb-32">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-bg via-bg to-[#141414]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,169,97,0.12),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(201,169,97,0.06),transparent_60%)]" />
        </div>

        {/* Faded large numeral */}
        <div className="absolute top-24 right-6 lg:right-16 h-display text-accent/10 text-[14rem] lg:text-[22rem] leading-none select-none pointer-events-none">
          I
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="eyebrow eyebrow-underline mb-8">Chauffeur Privado · Madrid</div>
            <h1 className="h-display font-normal text-ink" style={{ fontSize: 'clamp(2.75rem, 7vw, 5.5rem)' }}>
              Conducción discreta.
              <br />
              <span className="italic text-accent/90">Experiencia</span> silenciosa.
            </h1>
            <p className="mt-8 max-w-xl text-inkSoft leading-relaxed" style={{ fontSize: '1.0625rem' }}>
              Servicio de chofer privado premium en Madrid. Vehículos de alta gama, puntualidad absoluta y discreción para quienes valoran su tiempo y su privacidad.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <IconWhatsapp className="w-4 h-4" />
                WhatsApp
              </a>
              <a href={`tel:${phoneClean}`} className="btn-ghost">
                <IconPhone className="w-4 h-4" />
                Llamar ahora
              </a>
            </div>
          </div>
          <div className="lg:col-span-4 hidden lg:block">
            <div className="border-l border-line pl-8 space-y-6">
              <div>
                <div className="text-[0.7rem] tracking-[0.3em] uppercase text-inkSoft">Disponible</div>
                <div className="mt-2 h-display text-2xl text-accent">24 / 7</div>
              </div>
              <div>
                <div className="text-[0.7rem] tracking-[0.3em] uppercase text-inkSoft">Cobertura</div>
                <div className="mt-2 h-display text-2xl text-ink">Madrid &amp; Nacional</div>
              </div>
              <div>
                <div className="text-[0.7rem] tracking-[0.3em] uppercase text-inkSoft">Respuesta</div>
                <div className="mt-2 h-display text-2xl text-ink">&lt; 15 min</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto" />

      {/* SERVICIOS */}
      <section id="servicios" className="relative py-24 lg:py-40">
        <div className="absolute top-16 left-4 lg:left-12 h-display text-accent/10 text-[10rem] lg:text-[16rem] leading-none select-none pointer-events-none">
          01
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <div className="grid lg:grid-cols-12 gap-10 mb-16 lg:mb-24">
            <div className="lg:col-span-5">
              <div className="eyebrow eyebrow-underline mb-6">01 — Servicios</div>
              <h2 className="h-display font-normal text-ink" style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}>
                Cada trayecto,
                <br />
                <span className="italic text-accent/90">una decisión cuidada.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <p className="text-inkSoft leading-relaxed" style={{ fontSize: '1.0625rem' }}>
                Ofrecemos un servicio integral para quienes necesitan moverse por Madrid con la certeza de que cada detalle ha sido previsto. Desde el aeropuerto hasta una gala, desde una boda hasta un roadshow corporativo.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
            {servicios.map((s, i) => (
              <article key={s.title} className="service-card bg-bg p-8 lg:p-10 border border-transparent group">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <span className="h-display text-accent text-xl">{String(i + 1).padStart(2, '0')}</span>
                  <span className="w-8 h-px bg-accent/40 mt-3" />
                </div>
                <h3 className="h-display text-ink mb-3" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)' }}>
                  {s.title}
                </h3>
                <p className="text-inkSoft leading-relaxed text-[0.95rem]">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto" />

      {/* FLOTA */}
      <section id="flota" className="relative py-24 lg:py-40 bg-gradient-to-b from-bg via-surface/40 to-bg">
        <div className="absolute top-16 right-4 lg:right-12 h-display text-accent/10 text-[10rem] lg:text-[16rem] leading-none select-none pointer-events-none">
          02
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <div className="max-w-2xl mb-16 lg:mb-20">
            <div className="eyebrow eyebrow-underline mb-6">02 — Flota</div>
            <h2 className="h-display font-normal text-ink" style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}>
              Vehículos seleccionados, mantenidos <span className="italic text-accent/90">sin compromiso.</span>
            </h2>
            <p className="mt-6 text-inkSoft leading-relaxed" style={{ fontSize: '1.0625rem' }}>
              Berlinas y SUVs premium de gama alta. Interiores impecables, climatización individual, agua y wifi a bordo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: 'Berlina ejecutiva', cap: 'Hasta 3 pasajeros' },
              { label: 'SUV premium', cap: 'Hasta 4 pasajeros · equipaje amplio' },
              { label: 'Van VIP', cap: 'Hasta 7 pasajeros · grupo o familia' }
            ].map((v) => (
              <div key={v.label} className="fleet-tile aspect-[4/5] rounded-sm flex flex-col justify-end p-7">
                <div className="relative z-10">
                  <div className="text-[0.7rem] tracking-[0.3em] uppercase text-accent mb-2">Categoría</div>
                  <h3 className="h-display text-ink text-2xl mb-1">{v.label}</h3>
                  <p className="text-inkSoft text-sm">{v.cap}</p>
                </div>
                {/* decorative silhouette */}
                <svg viewBox="0 0 200 80" className="absolute top-1/3 left-1/2 -translate-x-1/2 w-3/4 text-accent/20" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
                  <path d="M10 60 Q 20 40 50 35 L 80 30 Q 100 20 130 25 L 160 30 Q 185 35 190 55 L 190 65 L 10 65 Z" strokeLinejoin="round" />
                  <circle cx="50" cy="65" r="8" />
                  <circle cx="155" cy="65" r="8" />
                </svg>
              </div>
            ))}
          </div>

          <p className="mt-10 text-xs tracking-[0.2em] uppercase text-inkSoft">
            Fotografía real de flota disponible bajo solicitud
          </p>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto" />

      {/* EXPERIENCIA */}
      <section id="experiencia" className="relative py-24 lg:py-40">
        <div className="absolute top-16 left-4 lg:left-12 h-display text-accent/10 text-[10rem] lg:text-[16rem] leading-none select-none pointer-events-none">
          03
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="eyebrow eyebrow-underline mb-6">03 — Experiencia</div>
            <h2 className="h-display font-normal text-ink" style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}>
              Lo que no se ve <span className="italic text-accent/90">también importa.</span>
            </h2>
            <p className="mt-8 text-inkSoft leading-relaxed max-w-md" style={{ fontSize: '1.0625rem' }}>
              El lujo no está en el detalle visible, sino en la suma de los invisibles. Cuatro principios silenciosos que sostienen cada trayecto.
            </p>
          </div>
          <div className="lg:col-span-7 space-y-px bg-line border-y border-line">
            {valores.map((v) => (
              <div key={v.num} className="bg-bg grid grid-cols-12 gap-6 py-8 lg:py-10 px-2">
                <div className="col-span-2 h-display text-accent text-xl">{v.num}</div>
                <div className="col-span-10">
                  <h3 className="h-display text-ink mb-2" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)' }}>{v.title}</h3>
                  <p className="text-inkSoft leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto" />

      {/* CONTACTO */}
      <section id="contacto" className="relative py-24 lg:py-40 bg-surface/30">
        <div className="absolute top-16 right-4 lg:right-12 h-display text-accent/10 text-[10rem] lg:text-[16rem] leading-none select-none pointer-events-none">
          04
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="eyebrow eyebrow-underline mb-6">04 — Contacto</div>
            <h2 className="h-display font-normal text-ink" style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}>
              Reserve <span className="italic text-accent/90">su trayecto.</span>
            </h2>
            <p className="mt-6 text-inkSoft leading-relaxed max-w-md" style={{ fontSize: '1.0625rem' }}>
              Disponibilidad inmediata vía WhatsApp o llamada directa. Respuesta en menos de 15 minutos.
            </p>

            <div className="mt-10 space-y-6 border-t border-line pt-10">
              <div>
                <div className="text-[0.7rem] tracking-[0.3em] uppercase text-inkSoft mb-2">Teléfono</div>
                <a href={`tel:${phoneClean}`} className="h-display text-2xl text-ink hover:text-accent transition-colors duration-200">
                  +34 638 73 60 58
                </a>
              </div>
              <div>
                <div className="text-[0.7rem] tracking-[0.3em] uppercase text-inkSoft mb-2">Email</div>
                <a href={`mailto:${email}`} className="text-ink hover:text-accent transition-colors duration-200">
                  {email}
                </a>
              </div>
              <div>
                <div className="text-[0.7rem] tracking-[0.3em] uppercase text-inkSoft mb-2">Cobertura</div>
                <div className="text-ink">Madrid y traslados nacionales</div>
              </div>
              <div>
                <div className="text-[0.7rem] tracking-[0.3em] uppercase text-inkSoft mb-2">Horario</div>
                <div className="text-ink">24 horas · 7 días</div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <IconWhatsapp className="w-4 h-4" />
                WhatsApp
              </a>
              <a href={`tel:${phoneClean}`} className="btn-ghost">
                <IconPhone className="w-4 h-4" />
                Llamar
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative rounded-sm overflow-hidden border border-line h-[420px] lg:h-full min-h-[420px] bg-bg">
              <iframe
                src="https://maps.google.com/maps?q=Madrid&t=&z=11&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale contrast-125 brightness-50 opacity-90"
                title="Cobertura Madrid — Black Swan Luxury Driver"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-bg/40 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-line py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <SwanLogo className="w-6 h-6 text-accent" />
            <div>
              <div className="h-display text-ink text-base">Black Swan Luxury Driver</div>
              <div className="text-xs tracking-[0.2em] uppercase text-inkSoft mt-1">Chauffeur privado · Madrid</div>
            </div>
          </div>
          <div className="text-xs tracking-[0.2em] uppercase text-inkSoft">
            © {new Date().getFullYear()} · Todos los derechos reservados
          </div>
        </div>
      </footer>
    </main>
  );
}
