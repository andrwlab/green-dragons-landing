import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const CONTACT_EMAIL = 'contacto@greendragonssports.com';
const WHATSAPP_NUMBER = '';
const LOGO_ASSET = `${import.meta.env.BASE_URL}official-logo-512.png`;

const navLinks = [
  { label: 'Torneo', href: '#torneo' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Plataforma', href: '#plataforma' },
  { label: 'Patrocinios', href: '#patrocinadores' },
];

const heroBadges = ['Mixto', '7.º a 12.º grado', 'Intercolegial', 'Presentación institucional'];

const heroHighlights = [
  'Cronograma por jornadas con comunicación clara',
  'Resultados, tabla y seguimiento digital del torneo',
  'Reconocimientos individuales y por colegio',
  'Visibilidad para instituciones, atletas y patrocinadores',
];

const heroFacts = [
  { label: 'Dirigido a', value: 'Colegios de 7.º a 12.º grado' },
  { label: 'Seguimiento', value: 'Resultados, tabla y líderes' },
  { label: 'Experiencia', value: 'Competencia seria y bien presentada' },
  { label: 'Aliados', value: 'Espacios pensados para marcas' },
];

const heroLedger = [
  { label: 'Operación', value: 'Cronograma por jornadas' },
  { label: 'Seguimiento', value: 'Resultados y tabla digital' },
  { label: 'Cierre', value: 'Premiación institucional' },
];

const valueCards = [
  {
    title: 'Representación escolar con peso institucional',
    copy:
      'Cada colegio compite con una puesta en escena que cuida imagen, orden y presencia ante atletas, familias y comunidad educativa.',
    icon: 'school',
  },
  {
    title: 'Organización competitiva desde el primer contacto',
    copy:
      'Cronograma, cruces, jornadas y comunicación operativa para que directores, coordinadores deportivos y entrenadores tengan claridad real.',
    icon: 'fixture',
  },
  {
    title: 'Visibilidad que trasciende el día del partido',
    copy:
      'Resultados, tabla, reconocimientos y piezas digitales que ayudan a que el torneo se entienda, se siga y se recuerde mejor.',
    icon: 'platform',
  },
];

const benefits = [
  {
    title: 'Cronograma por jornadas',
    copy: 'Partidos programados con orden, tiempos claros y una estructura fácil de comunicar a cada colegio.',
    icon: 'calendar',
    layout: 'card-wide',
  },
  {
    title: 'Resultados digitales',
    copy: 'Seguimiento por jornada con una presentación consistente para atletas, familias y colegios.',
    icon: 'results',
  },
  {
    title: 'Tabla y cruces',
    copy: 'La competencia se entiende mejor cuando la clasificación y la ruta hacia finales se muestran con claridad.',
    icon: 'table',
  },
  {
    title: 'Reconocimientos individuales',
    copy: 'MVPs, líderes y distinciones que elevan la experiencia y dan visibilidad al rendimiento.',
    icon: 'stats',
    layout: 'card-tall',
  },
  {
    title: 'Presentación institucional',
    copy: 'El torneo cuida imagen, narrativa visual y percepción de orden para que cada colegio se sienta bien representado.',
    icon: 'visibility',
  },
  {
    title: 'Espacios para patrocinadores',
    copy: 'Las marcas aliadas pueden integrarse con coherencia dentro de una experiencia escolar seria y bien cuidada.',
    icon: 'sponsor',
    layout: 'card-wide',
  },
];

const scheduleRows = [
  ['Fecha 1', 'Colegio invitado A vs Colegio invitado B', '8:00 a.m.'],
  ['Fecha 1', 'Colegio invitado C vs Colegio invitado D', '9:30 a.m.'],
  ['Finales', 'Semifinal A', '2:00 p.m.'],
];

const standings = [
  ['1', 'Colegio invitado A', '6 pts'],
  ['2', 'Colegio invitado C', '4 pts'],
  ['3', 'Colegio invitado B', '4 pts'],
  ['4', 'Colegio invitado D', '3 pts'],
];

const statLeaders = [
  ['MVP', 'Atleta destacada', '2 reconocimientos'],
  ['Ataque', 'Jugador referente', '31 puntos'],
  ['Bloqueo', 'Figura defensiva', '12 bloqueos'],
];

const platformCards = [
  'Calendario de jornadas',
  'Resultados por fecha',
  'Tabla acumulada',
  'Cruces hacia finales',
  'Reconocimientos y líderes',
  'Información para colegios y aliados',
];

const formatSteps = [
  {
    title: 'Convocatoria y confirmación',
    copy: 'Cada colegio recibe información, alcance del torneo y una estructura base para confirmar su participación con claridad.',
  },
  {
    title: 'Fase regular',
    copy: 'Los cruces iniciales se organizan para dar ritmo competitivo, lectura simple y seguimiento ordenado de cada jornada.',
  },
  {
    title: 'Rondas finales y premiación',
    copy: 'Semifinales, final y reconocimientos se presentan como el cierre fuerte de una experiencia escolar bien producida.',
  },
  {
    title: 'Formato ajustado por inscritos',
    copy: 'La configuración definitiva se adapta al número de colegios sin perder claridad, competitividad ni presentación.',
  },
];

const awards = [
  'Colegio campeón',
  'Subcampeón',
  'MVP femenino',
  'MVP masculino',
  'Mejor atacante',
  'Mejor bloqueador',
  'Mejor servidor',
  'Quinteto ideal',
];

const sponsorBenefits = [
  'Logo en landing y piezas oficiales',
  'Presencia en publicaciones del torneo',
  'Mención en premiación y cierres',
  'Activaciones durante jornadas',
  'Asociación con comunidad escolar',
  'Exposición ante colegios y familias',
];

const sponsorFocus = [
  'Exposición frente a estudiantes, familias y colegios participantes.',
  'Integración visual coherente con la identidad del torneo.',
  'Oportunidades para activaciones y presencia en premiación.',
];

const finalCtaTags = ['Colegios', 'Coordinación deportiva', 'Patrocinios'];

const footerSocials = [];

function buildMailtoLink(subject, body) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function buildContactLink({ message, subject, body }) {
  if (WHATSAPP_NUMBER) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  return buildMailtoLink(subject, body);
}

function buildHrefProps(href, onClick) {
  const props = {};

  if (onClick) {
    props.onClick = onClick;
  }

  if (href.startsWith('http')) {
    props.target = '_blank';
    props.rel = 'noreferrer';
  }

  return props;
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
  const hasWhatsApp = Boolean(WHATSAPP_NUMBER);
  const closeMenu = () => setMenuOpen(false);
  const schoolInfoHref = buildContactLink({
    message:
      'Hola, me interesa recibir información sobre el Torneo Intercolegial de Voleibol de Green Dragons Sports para mi colegio.',
    subject: 'Información para colegios | Green Dragons Sports',
    body: `Hola,

Nos interesa recibir información sobre el torneo intercolegial de voleibol de Green Dragons Sports.

Colegio:
Nombre de contacto:
Cargo:
Teléfono:
`,
  });
  const sponsorInfoHref = buildContactLink({
    message:
      'Hola, me interesa conocer las opciones de patrocinio para el Torneo Intercolegial de Voleibol de Green Dragons Sports.',
    subject: 'Consulta de patrocinio | Green Dragons Sports',
    body: `Hola,

Nos interesa conocer las opciones de patrocinio del torneo intercolegial de voleibol de Green Dragons Sports.

Marca:
Nombre de contacto:
Cargo:
Teléfono:
`,
  });
  const schoolCtaLabel = hasWhatsApp ? 'Solicitar información por WhatsApp' : 'Solicitar información por correo';
  const sponsorCtaLabel = hasWhatsApp ? 'Consultar patrocinio por WhatsApp' : 'Consultar patrocinio por correo';
  const schoolCtaProps = buildHrefProps(schoolInfoHref, closeMenu);
  const sponsorCtaProps = buildHrefProps(sponsorInfoHref, closeMenu);
  const schoolFooterProps = buildHrefProps(schoolInfoHref);
  const sponsorFooterProps = buildHrefProps(sponsorInfoHref);
  const socialLinks = footerSocials.filter((social) => social.href);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header className="site-header">
        <div className="nav-shell">
          <nav className="nav" aria-label="Navegación principal">
            <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Ir al inicio de Green Dragons Sports">
              <img
                className="brand-mark"
                src={LOGO_ASSET}
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
              <a className="nav-cta" href={schoolInfoHref} {...schoolCtaProps}>
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
              <div className="hero-intro copy-rail">
                <p className="eyebrow">Green Dragons Sports presenta</p>
                <h1 id="hero-title">Torneo Intercolegial de Voleibol</h1>
                <p className="hero-subtitle">Mixto para 7.º a 12.º grado</p>
                <p className="hero-text">
                  Una propuesta para colegios que buscan una competencia seria, con cronograma claro, resultados
                  digitales, reconocimientos y una presentación institucional que represente bien a sus atletas.
                </p>
              </div>

              <ul className="hero-badges" aria-label="Datos clave del torneo">
                {heroBadges.map((badge) => (
                  <li key={badge}>{badge}</li>
                ))}
              </ul>

              <div className="hero-actions">
                <a className="button button-primary" href={schoolInfoHref} {...schoolCtaProps}>
                  {schoolCtaLabel}
                </a>
                <a className="button button-secondary" href="#formato" onClick={closeMenu}>
                  Ver formato del torneo
                </a>
              </div>

              <p className="hero-footnote">
                Dirigido a directores, coordinadores deportivos, entrenadores, familias y marcas que valoran orden,
                visibilidad y experiencia deportiva bien presentada.
              </p>

              <div className="hero-facts" aria-label="Claves del torneo">
                {heroFacts.map((fact) => (
                  <article className="hero-fact" key={fact.label}>
                    <span>{fact.label}</span>
                    <strong>{fact.value}</strong>
                  </article>
                ))}
              </div>
            </div>

            <aside className="hero-card" aria-label="Resumen del torneo">
              <img
                className="hero-watermark"
                src={LOGO_ASSET}
                alt=""
                width="220"
                height="220"
                aria-hidden="true"
              />

              <div className="hero-card-header">
                <img className="hero-card-mark" src={LOGO_ASSET} alt="" width="84" height="84" aria-hidden="true" />
                <div>
                  <p className="card-kicker">Propuesta para colegios</p>
                  <h2 className="hero-card-title">Organización competitiva con lectura simple para todos</h2>
                </div>
              </div>

              <div className="hero-ledger" aria-label="Pilares del torneo">
                {heroLedger.map((item) => (
                  <article className="ledger-card" key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </article>
                ))}
              </div>

              <ul className="hero-checks">
                {heroHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="score-panel" aria-label="Vista referencial de la plataforma">
                <div className="score-panel-top">
                  <span>Vista referencial</span>
                  <span className="status-badge">Plataforma digital</span>
                </div>

                <div className="match-row">
                  <div>
                    <strong>Colegio invitado A</strong>
                    <small>Grupo A</small>
                  </div>
                  <div className="vs-pill">vs</div>
                  <div>
                    <strong>Colegio invitado B</strong>
                    <small>Grupo B</small>
                  </div>
                </div>

                <div className="score-tabs" aria-label="Datos del partido">
                  <span>Tabla</span>
                  <span>Resultados</span>
                  <span>Reconocimientos</span>
                </div>
              </div>

              <p className="card-note">
                La configuración final del torneo se ajusta según la cantidad de colegios inscritos y las necesidades
                de cada edición.
              </p>
            </aside>
          </div>
        </section>

        <section className="section value" aria-labelledby="value-title">
          <div className="value-layout">
            <div className="value-copy copy-rail">
              <p className="eyebrow">Propuesta de valor</p>
              <h2 id="value-title">Un torneo que no solo compite bien. También se comunica bien.</h2>
              <p>
                Green Dragons Sports está pensado para que el colegio sienta orden, el atleta sienta visibilidad y la
                familia perciba una experiencia con estructura, seguimiento y presentación institucional.
              </p>
              <a className="button button-secondary button-inline" href="#plataforma" onClick={closeMenu}>
                Ver la experiencia digital
              </a>
            </div>

            <div className="value-stack">
              {valueCards.map((card, index) => (
                <article className="value-card" key={card.title}>
                  <div className="value-card-top">
                    <span className="icon-chip">
                      <LineIcon type={card.icon} />
                    </span>
                    <span className="value-index">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section benefits" id="beneficios" aria-labelledby="benefits-title">
          <div className="section-heading copy-rail">
            <p className="eyebrow">Beneficios del torneo</p>
            <h2 id="benefits-title">Lo que eleva la percepción del torneo desde el primer anuncio.</h2>
            <p>
              La diferencia no está solo en jugar. Está en cómo se organiza, cómo se sigue y cómo se presenta la
              experiencia para colegios, atletas, familias y aliados comerciales.
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
            <div className="platform-copy copy-rail">
              <p className="eyebrow">Plataforma digital</p>
              <h2 id="platform-title">Calendario, resultados y reconocimientos en un solo frente digital.</h2>
              <p>
                La plataforma ayuda a que el torneo se vea organizado y a que cada actor entienda rápido lo importante:
                jornadas, resultados, tabla, líderes y datos clave de la competencia.
              </p>
              <ul className="platform-list">
                {platformCards.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <small className="platform-note">
                Vista referencial de la experiencia digital. La presentación final se adapta a la edición del torneo.
              </small>
            </div>

            <div className="dashboard-grid" aria-label="Vista de muestra de la plataforma">
              <article className="dashboard-card dashboard-card-wide">
                <div className="dashboard-header">
                  <div>
                    <p className="dashboard-kicker">Calendario de jornadas</p>
                    <h3>Partidos programados con claridad</h3>
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
                    <p className="dashboard-kicker">Reconocimientos</p>
                    <h3>Visibilidad para el rendimiento</h3>
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
                    <h3>Un frente claro para todos</h3>
                  </div>
                </div>

                <div className="info-pill-grid">
                  <span>Mixto</span>
                  <span>7.º a 12.º grado</span>
                  <span>Resultados por jornada</span>
                  <span>Tabla acumulada</span>
                  <span>Reconocimientos</span>
                  <span>Patrocinios integrados</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section format" id="formato" aria-labelledby="format-title">
          <div className="format-layout">
            <article className="format-summary copy-rail copy-rail-card">
              <p className="eyebrow">Formato del torneo</p>
              <h2 id="format-title">Competencia clara desde la convocatoria hasta la premiación.</h2>
              <p>
                El formato definitivo se ajusta al número de colegios participantes, pero el principio se mantiene:
                estructura simple, seguimiento claro y cierre competitivo bien presentado.
              </p>

              <ul className="format-meta" aria-label="Datos clave del formato">
                <li>Mixto</li>
                <li>7.º a 12.º grado</li>
                <li>Fase regular y finales</li>
                <li>Premiación institucional</li>
              </ul>
            </article>

            <div className="format-steps">
              {formatSteps.map((step, index) => (
                <article className="format-step" key={step.title}>
                  <span className="step-index">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section awards" id="premios" aria-labelledby="awards-title">
          <div className="awards-layout">
            <div className="awards-copy copy-rail">
              <p className="eyebrow">Reconocimientos</p>
              <h2 id="awards-title">Premios que refuerzan prestigio, rendimiento y visibilidad.</h2>
              <p>
                La premiación no es un detalle menor. Es una parte central de la experiencia y del valor que el torneo
                entrega a colegios, atletas y familias.
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
          </div>
        </section>

        <section className="section sponsors" id="patrocinadores" aria-labelledby="sponsors-title">
          <div className="sponsor-layout">
            <div className="sponsor-copy copy-rail">
              <p className="eyebrow">Patrocinios</p>
              <h2 id="sponsors-title">Un espacio serio para marcas que quieren entrar al deporte escolar con criterio.</h2>
              <p>
                Las marcas aliadas pueden participar dentro de una experiencia con orden visual, presencia institucional
                y exposición frente a colegios, atletas y familias.
              </p>

              <ul className="sponsor-list">
                {sponsorFocus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <a className="button button-primary" href={sponsorInfoHref} {...sponsorCtaProps}>
                {sponsorCtaLabel}
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
            <p className="eyebrow">Solicitud de información</p>
            <h2 id="cta-title">Recibe el paquete informativo del torneo.</h2>
            <p>
              Escríbenos para conocer alcance, formato, beneficios para colegios y opciones de patrocinio de Green
              Dragons Sports.
            </p>

            <div className="cta-ribbon" aria-label="Perfiles de contacto">
              {finalCtaTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="cta-actions">
              <a className="button button-primary" href={schoolInfoHref} {...schoolCtaProps}>
                {schoolCtaLabel}
              </a>
              <a className="button button-secondary" href={sponsorInfoHref} {...sponsorCtaProps}>
                {sponsorCtaLabel}
              </a>
            </div>

            <small className="cta-note">
              {hasWhatsApp
                ? 'Atención por WhatsApp y correo institucional.'
                : 'Atención por correo institucional para colegios y marcas interesadas.'}
            </small>
          </div>
        </section>

        <footer className="site-footer">
          <div className="footer-brand">
            <img
              className="footer-mark"
              src={LOGO_ASSET}
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

          <div className={`footer-meta${socialLinks.length > 0 ? ' footer-meta-extended' : ''}`}>
            <div>
              <span>Contacto para colegios</span>
              <p>
                <a className="footer-contact-link" href={schoolInfoHref} {...schoolFooterProps}>
                  {schoolCtaLabel}
                </a>
              </p>
              <p>
                <a className="footer-contact-link" href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>

            <div>
              <span>Contacto comercial</span>
              <p>
                <a className="footer-contact-link" href={sponsorInfoHref} {...sponsorFooterProps}>
                  {sponsorCtaLabel}
                </a>
              </p>
              <p>Consulta de visibilidad, presencia de marca y activaciones para aliados.</p>
            </div>

            {socialLinks.length > 0 && (
              <div>
                <span>Redes oficiales</span>
                <div className="footer-socials">
                  {socialLinks.map((social) => (
                    <a key={social.label} href={social.href} {...buildHrefProps(social.href)}>
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <p className="footer-note">Landing oficial de Green Dragons Sports.</p>
        </footer>
      </main>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
