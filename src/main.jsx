import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hola, me interesa recibir información sobre Green Dragons Sports - Torneo Intercolegial de Voleibol.',
);

// TODO: Replace WHATSAPP_URL with the real WhatsApp link.
const WHATSAPP_URL = '#';

const navLinks = [
  { label: 'Torneo', href: '#torneo' },
  { label: 'Plataforma', href: '#plataforma' },
  { label: 'Premios', href: '#premios' },
  { label: 'Patrocinadores', href: '#patrocinadores' },
];

const heroBadges = ['Mixto', '7.º a 12.º grado', 'Intercolegial', 'Voleibol'];

const heroHighlights = [
  'Calendario organizado',
  'Resultados digitales',
  'Tabla de posiciones',
  'Reconocimientos individuales',
  'Visibilidad para colegios y patrocinadores',
];

const valueCards = [
  {
    title: 'Representación escolar',
    copy:
      'Cada colegio compite con identidad, presencia institucional y una puesta en escena que fortalece sus colores dentro y fuera de la cancha.',
    icon: 'school',
  },
  {
    title: 'Competencia organizada',
    copy:
      'Cronograma, cruces, jornadas y comunicación clara para que atletas, coaches y familias vivan el torneo con estructura profesional.',
    icon: 'fixture',
  },
  {
    title: 'Experiencia deportiva moderna',
    copy:
      'Resultados, tabla, líderes y reconocimientos en una plataforma visual que transmite confianza desde el primer anuncio.',
    icon: 'platform',
  },
];

const benefits = [
  {
    title: 'Calendario organizado',
    copy: 'Jornadas definidas con orden, tiempos claros y una experiencia mejor coordinada para cada colegio.',
    icon: 'calendar',
    layout: 'card-wide',
  },
  {
    title: 'Resultados digitales',
    copy: 'Cada partido puede seguirse con resultados por jornada y actualizaciones en formato institucional.',
    icon: 'results',
  },
  {
    title: 'Tabla de posiciones',
    copy: 'La competencia se entiende mejor cuando la clasificación se presenta con claridad y consistencia.',
    icon: 'table',
  },
  {
    title: 'Estadísticas individuales',
    copy: 'Líderes por rendimiento y datos clave para dar visibilidad al desempeño de cada atleta.',
    icon: 'stats',
    layout: 'card-tall',
  },
  {
    title: 'Premios y reconocimientos',
    copy: 'La premiación deja de ser un cierre improvisado y se convierte en parte central del evento.',
    icon: 'award',
  },
  {
    title: 'Visibilidad para colegios',
    copy: 'Cada institución participa dentro de una narrativa visual que proyecta orden, nivel y prestigio.',
    icon: 'visibility',
    layout: 'card-wide',
  },
  {
    title: 'Espacios para patrocinadores',
    copy: 'Las marcas aliadas pueden integrarse con criterio, presencia y coherencia con el tono del torneo.',
    icon: 'sponsor',
  },
  {
    title: 'Cobertura visual del torneo',
    copy: 'Piezas, fotografía y reseñas ayudan a que el torneo se vea tan bien como se vive en cancha.',
    icon: 'media',
  },
];

const scheduleRows = [
  ['Jornada 1', 'Colegio del Istmo vs Academia del Pacífico', '8:00 AM'],
  ['Jornada 1', 'Instituto del Canal vs Colegio Horizonte', '9:30 AM'],
  ['Jornada 2', 'Semifinal A', '2:00 PM'],
];

const standings = [
  ['1', 'Colegio del Istmo', '6 pts'],
  ['2', 'Academia del Pacífico', '4 pts'],
  ['3', 'Instituto del Canal', '4 pts'],
  ['4', 'Colegio Horizonte', '3 pts'],
];

const statLeaders = [
  ['MVPs', 'Andrea M.', '2 reconocimientos'],
  ['Ataque', 'Diego R.', '31 puntos'],
  ['Bloqueo', 'Valeria C.', '12 bloqueos'],
];

const platformCards = [
  'Calendario de partidos',
  'Resultados por jornada',
  'Tabla de posiciones',
  'Líderes estadísticos',
  'MVPs y reconocimientos',
  'Información del torneo',
];

const formatSteps = [
  {
    title: 'Fase regular',
    copy: 'Cruces definidos para asegurar volumen competitivo, orden y seguimiento claro de cada jornada.',
  },
  {
    title: 'Rondas finales',
    copy: 'Las etapas decisivas se estructuran para elevar la tensión deportiva y la experiencia del cierre.',
  },
  {
    title: 'Premiación',
    copy: 'La ceremonia reconoce rendimiento, identidad de colegio y figuras destacadas del torneo.',
  },
  {
    title: 'Formato adaptable',
    copy: 'El formato final se ajusta según la cantidad de colegios inscritos, manteniendo una competencia clara, justa y emocionante.',
  },
];

const awards = [
  'Colegio campeón',
  'Subcampeón',
  'MVP masculino',
  'MVP femenino',
  'Mejor atacante',
  'Mejor bloqueador',
  'Mejor servidor',
  'Equipo ideal del torneo',
];

const sponsorBenefits = [
  'Logo en landing oficial',
  'Presencia en publicaciones',
  'Mención en premiaciones',
  'Espacios visuales del evento',
  'Activaciones durante jornadas',
  'Asociación con deporte juvenil',
];

const footerSocials = [
  { label: 'Instagram', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'TikTok', href: '#' },
];

function buildWhatsAppLink() {
  if (WHATSAPP_URL === '#') {
    return '#';
  }

  const separator = WHATSAPP_URL.includes('?') ? '&' : '?';
  return `${WHATSAPP_URL}${separator}text=${WHATSAPP_MESSAGE}`;
}

function LineIcon({ type }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: '1.8',
  };

  switch (type) {
    case 'school':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M3 9 12 4l9 5-9 5-9-5Z" />
          <path {...common} d="M6 11v6c0 .8 2.7 3 6 3s6-2.2 6-3v-6" />
        </svg>
      );
    case 'fixture':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect {...common} x="4" y="5" width="16" height="15" rx="2.5" />
          <path {...common} d="M8 3v4M16 3v4M7 11h10M7 15h6" />
        </svg>
      );
    case 'platform':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect {...common} x="3" y="4" width="18" height="16" rx="3" />
          <path {...common} d="M7 15h2v2H7zm4-4h2v6h-2zm4-2h2v8h-2zM3 9h18" />
        </svg>
      );
    case 'calendar':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect {...common} x="4" y="5" width="16" height="15" rx="2.5" />
          <path {...common} d="M8 3v4M16 3v4M4 10h16M8 14h3" />
        </svg>
      );
    case 'results':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M6 18V9M12 18V6M18 18v-4" />
          <path {...common} d="M4 19h16" />
        </svg>
      );
    case 'table':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect {...common} x="4" y="5" width="16" height="14" rx="2.5" />
          <path {...common} d="M4 10h16M10 5v14M15 10v9" />
        </svg>
      );
    case 'stats':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M5 18c2.2-1.3 4-3 5.5-5.3C12 10.5 14 8 19 6" />
          <path {...common} d="m15 6 4-.1-.8 4" />
          <circle {...common} cx="8" cy="9" r="1.5" />
          <circle {...common} cx="13" cy="14" r="1.5" />
        </svg>
      );
    case 'award':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M8 5h8v3a4 4 0 1 1-8 0V5Z" />
          <path {...common} d="M8 7H5a2 2 0 0 0 2 3h1M16 7h3a2 2 0 0 1-2 3h-1M12 12v4M9 20h6" />
        </svg>
      );
    case 'visibility':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M3 12s3.5-5 9-5 9 5 9 5-3.5 5-9 5-9-5-9-5Z" />
          <circle {...common} cx="12" cy="12" r="2.5" />
        </svg>
      );
    case 'sponsor':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M5 18V7.5A1.5 1.5 0 0 1 6.5 6H18l-3 4 3 4H6.5A1.5 1.5 0 0 0 5 15.5V18Z" />
        </svg>
      );
    case 'media':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect {...common} x="4" y="6" width="16" height="12" rx="2.5" />
          <circle {...common} cx="9" cy="11" r="1.5" />
          <path {...common} d="m20 15-4.5-4.5L9 17" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle {...common} cx="12" cy="12" r="8" />
        </svg>
      );
  }
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const infoHref = buildWhatsAppLink();
  const isPlaceholderCta = infoHref === '#';

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const ctaProps = isPlaceholderCta
    ? {
        'aria-disabled': 'true',
        onClick: (event) => {
          event.preventDefault();
          setMenuOpen(false);
        },
      }
    : {
        target: '_blank',
        rel: 'noreferrer',
        onClick: () => setMenuOpen(false),
      };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="nav-shell">
          <nav className="nav" aria-label="Navegación principal">
            <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Ir al inicio de Green Dragons Sports">
              <img
                className="brand-mark"
                src={`${import.meta.env.BASE_URL}crest-mark.svg`}
                alt="Escudo de Green Dragons Sports"
                width="72"
                height="72"
              />
              <span className="brand-copy">
                <strong>Green Dragons Sports</strong>
                <small>Torneo Intercolegial de Voleibol</small>
              </span>
            </a>

            <button
              className="menu-toggle"
              type="button"
              aria-expanded={menuOpen}
              aria-controls="nav-panel"
              onClick={() => setMenuOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
              <span className="visually-hidden">Abrir menú</span>
            </button>

            <div className={`nav-panel ${menuOpen ? 'is-open' : ''}`} id="nav-panel">
              <div className="nav-links">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={closeMenu}>
                    {link.label}
                  </a>
                ))}
              </div>
              <a className="nav-cta" href={infoHref} {...ctaProps}>
                Solicitar información
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main className="page-shell" id="inicio">
        <section className="hero section" id="torneo" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Torneo Intercolegial de Voleibol</p>
              <h1 id="hero-title">Green Dragons Sports</h1>
              <p className="hero-subtitle">Mixto · 7.º a 12.º grado</p>
              <p className="hero-text">
                Una experiencia deportiva intercolegial organizada, competitiva y memorable para colegios,
                atletas y familias.
              </p>

              <ul className="hero-badges" aria-label="Datos clave del torneo">
                {heroBadges.map((badge) => (
                  <li key={badge}>{badge}</li>
                ))}
              </ul>

              <div className="hero-actions">
                <a className="button button-primary" href={infoHref} {...ctaProps}>
                  Solicitar información
                </a>
                <a className="button button-secondary" href="#plataforma">
                  Ver detalles del torneo
                </a>
              </div>

              <p className="hero-footnote">
                Para colegios, coordinadores deportivos, familias y marcas que buscan una experiencia escolar con
                presentación premium.
              </p>
            </div>

            <aside className="hero-card" aria-label="Resumen del torneo">
              <img
                className="hero-watermark"
                src={`${import.meta.env.BASE_URL}crest-mark.svg`}
                alt=""
                width="220"
                height="220"
                aria-hidden="true"
              />

              <div className="hero-card-header">
                <img
                  className="hero-card-mark"
                  src={`${import.meta.env.BASE_URL}crest-mark.svg`}
                  alt=""
                  width="84"
                  height="84"
                  aria-hidden="true"
                />
                <div>
                  <p className="card-kicker">Torneo Intercolegial de Voleibol</p>
                  <h2 className="hero-card-title">Experiencia deportiva premium para colegios</h2>
                </div>
              </div>

              <ul className="hero-checks">
                {heroHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="score-panel" aria-label="Panel de muestra de la plataforma">
                <div className="score-panel-top">
                  <span>Jornada 1</span>
                  <span className="status-badge">Panel digital</span>
                </div>

                <div className="match-row">
                  <div>
                    <strong>Colegio A</strong>
                    <small>Grupo Verde</small>
                  </div>
                  <div className="vs-pill">vs</div>
                  <div>
                    <strong>Colegio B</strong>
                    <small>Grupo Oro</small>
                  </div>
                </div>

                <div className="score-tabs" aria-label="Datos del partido">
                  <span>Tabla</span>
                  <span>Resultados</span>
                  <span>MVPs</span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="section value" aria-labelledby="value-title">
          <div className="section-heading">
            <p className="eyebrow">Propuesta de valor</p>
            <h2 id="value-title">No es solo jugar. Es representar.</h2>
            <p>
              Un torneo diseñado para que cada colegio compita con identidad, cada jugador tenga visibilidad y cada
              partido se sienta parte de una experiencia organizada y memorable.
            </p>
          </div>

          <div className="value-grid">
            {valueCards.map((card) => (
              <article className="value-card" key={card.title}>
                <span className="icon-chip">
                  <LineIcon type={card.icon} />
                </span>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section benefits" aria-labelledby="benefits-title">
          <div className="section-heading">
            <p className="eyebrow">Beneficios del torneo</p>
            <h2 id="benefits-title">Una experiencia de torneo más completa</h2>
            <p>
              Cada elemento está pensado para que el torneo proyecte orden, nivel competitivo y una imagen que los
              colegios quieran respaldar.
            </p>
          </div>

          <div className="bento-grid">
            {benefits.map((benefit) => (
              <article className={`bento-card ${benefit.layout || ''}`.trim()} key={benefit.title}>
                <span className="icon-chip">
                  <LineIcon type={benefit.icon} />
                </span>
                <h3>{benefit.title}</h3>
                <p>{benefit.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section platform" id="plataforma" aria-labelledby="platform-title">
          <div className="platform-layout">
            <div className="platform-copy">
              <p className="eyebrow">Plataforma digital</p>
              <h2 id="platform-title">Resultados, calendario y estadísticas en una plataforma digital</h2>
              <p>
                Una plataforma para seguir el torneo. Calendario, resultados, tabla de posiciones, líderes
                estadísticos y reconocimientos del torneo en un solo lugar.
              </p>
              <ul className="platform-list">
                {platformCards.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="dashboard-grid" aria-label="Vista de muestra de la plataforma">
              <article className="dashboard-card dashboard-card-wide">
                <div className="dashboard-header">
                  <div>
                    <p className="dashboard-kicker">Calendario de partidos</p>
                    <h3>Jornadas programadas con claridad</h3>
                  </div>
                  <span className="status-badge">Actualizado</span>
                </div>

                <div className="schedule-list">
                  {scheduleRows.map(([round, match, time]) => (
                    <div className="schedule-row" key={`${round}-${match}`}>
                      <span>{round}</span>
                      <strong>{match}</strong>
                      <span>{time}</span>
                    </div>
                  ))}
                </div>
              </article>

              <article className="dashboard-card">
                <div className="dashboard-header">
                  <div>
                    <p className="dashboard-kicker">Tabla de posiciones</p>
                    <h3>Lectura rápida del torneo</h3>
                  </div>
                </div>

                <table className="standings-table">
                  <thead>
                    <tr>
                      <th>Pos</th>
                      <th>Colegio</th>
                      <th>Puntos</th>
                    </tr>
                  </thead>
                  <tbody>
                    {standings.map(([position, team, points]) => (
                      <tr key={team}>
                        <td>{position}</td>
                        <td>{team}</td>
                        <td>{points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </article>

              <article className="dashboard-card">
                <div className="dashboard-header">
                  <div>
                    <p className="dashboard-kicker">Líderes estadísticos</p>
                    <h3>Figuras con visibilidad</h3>
                  </div>
                </div>

                <div className="leaders-list">
                  {statLeaders.map(([label, player, detail]) => (
                    <div className="leader-row" key={`${label}-${player}`}>
                      <span>{label}</span>
                      <strong>{player}</strong>
                      <small>{detail}</small>
                    </div>
                  ))}
                </div>
              </article>

              <article className="dashboard-card">
                <div className="dashboard-header">
                  <div>
                    <p className="dashboard-kicker">Información del torneo</p>
                    <h3>Orden institucional en cada frente</h3>
                  </div>
                </div>

                <div className="info-pill-grid">
                  <span>Mixto</span>
                  <span>7.º a 12.º grado</span>
                  <span>Resultados por jornada</span>
                  <span>MVPs y premiación</span>
                  <span>Visibilidad escolar</span>
                  <span>Patrocinadores aliados</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section format" aria-labelledby="format-title">
          <div className="section-heading">
            <p className="eyebrow">Formato del torneo</p>
            <h2 id="format-title">Formato competitivo y adaptable</h2>
            <p>
              El formato final se define según la cantidad de colegios participantes, manteniendo una competencia
              clara, justa y emocionante.
            </p>
          </div>

          <div className="format-grid">
            {formatSteps.map((step, index) => (
              <article className="format-card" key={step.title}>
                <span className="step-index">{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section awards" id="premios" aria-labelledby="awards-title">
          <div className="section-heading">
            <p className="eyebrow">Reconocimientos</p>
            <h2 id="awards-title">Reconocimientos que elevan la experiencia</h2>
            <p>
              La premiación proyecta prestigio, reconoce desempeño y refuerza el valor institucional del torneo para
              atletas, colegios y familias.
            </p>
          </div>

          <div className="awards-grid">
            {awards.map((award) => (
              <article className="award-card" key={award}>
                <span className="award-mark">
                  <LineIcon type="award" />
                </span>
                <h3>{award}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="section sponsors" id="patrocinadores" aria-labelledby="sponsors-title">
          <div className="sponsor-layout">
            <div className="sponsor-copy">
              <p className="eyebrow">Patrocinadores</p>
              <h2 id="sponsors-title">Visibilidad para marcas que apoyan el deporte escolar</h2>
              <p>
                Las marcas aliadas podrán formar parte de una experiencia deportiva con exposición ante estudiantes,
                familias, colegios y comunidad local.
              </p>
              <a className="button button-primary" href={infoHref} {...ctaProps}>
                Quiero patrocinar el torneo
              </a>
            </div>

            <div className="sponsor-grid">
              {sponsorBenefits.map((item) => (
                <article className="sponsor-card" key={item}>
                  <span className="icon-chip">
                    <LineIcon type="sponsor" />
                  </span>
                  <h3>{item}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section final-cta" id="cta" aria-labelledby="cta-title">
          <div className="final-cta-card">
            <p className="eyebrow">Cupos limitados</p>
            <h2 id="cta-title">Cupos limitados para colegios invitados</h2>
            <p>
              Solicita el paquete informativo y conoce los detalles de participación, formato, costos y beneficios
              para tu colegio.
            </p>

            <div className="cta-actions">
              <a className="button button-primary" href={infoHref} {...ctaProps}>
                Solicitar información por WhatsApp
              </a>
              <button className="button button-disabled" type="button" disabled>
                Propuesta próximamente
              </button>
            </div>

            <small className="cta-note">Canal oficial de contacto y propuesta descargable en configuración.</small>
          </div>
        </section>

        <footer className="site-footer">
          <div className="footer-brand">
            <img
              className="footer-mark"
              src={`${import.meta.env.BASE_URL}crest-mark.svg`}
              alt="Escudo de Green Dragons Sports"
              width="72"
              height="72"
            />
            <div>
              <strong>Green Dragons Sports</strong>
              <p>Torneo Intercolegial de Voleibol</p>
              <p>Mixto · 7.º a 12.º grado</p>
            </div>
          </div>

          <div className="footer-meta">
            <div>
              <span>Contacto</span>
              <p>WhatsApp oficial: próximamente</p>
              <p>Correo informativo: contacto@greendragonssports.com</p>
            </div>
            <div>
              <span>Redes sociales</span>
              <div className="footer-socials">
                {footerSocials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-disabled="true"
                    onClick={(event) => event.preventDefault()}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <p className="footer-note">Landing oficial del torneo</p>
        </footer>
      </main>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
