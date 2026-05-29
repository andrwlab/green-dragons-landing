import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const tournamentFeatures = [
  'Professionally scheduled multi-team brackets',
  'Live score moments and award-ready ceremony flow',
  'Brand-forward media zones for athletes and schools',
  'On-site operations built for coaches, families, and fans',
];

const schoolBenefits = [
  {
    title: 'Raise school spirit',
    copy: 'Turn one competition day into a signature campus event that brings students, families, alumni, and staff together.',
  },
  {
    title: 'Reduce admin lift',
    copy: 'Clear timelines, polished communications, and tournament-day systems help schools host with confidence.',
  },
  {
    title: 'Create lasting value',
    copy: 'Sponsorship-ready presentation and premium experiences make the tournament easier to fund and easier to repeat.',
  },
];

const stats = [
  ['24+', 'Teams per showcase'],
  ['3', 'Competition formats'],
  ['100%', 'School-first planning'],
];

function App() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#hero-title" aria-label="Green Dragons Sports home">
            <span className="brand-mark">GD</span>
            <span>Green Dragons Sports</span>
          </a>
          <a className="nav-cta" href="#cta">Plan a Tournament</a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Premium school sports tournaments</p>
            <h1 id="hero-title">Elite tournament energy for the next generation of champions.</h1>
            <p className="hero-text">
              Green Dragons Sports designs memorable school tournaments with polished operations,
              powerful fan experiences, and a championship atmosphere from first whistle to final trophy.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#cta">Start planning</a>
              <a className="button button-secondary" href="#features">Explore features</a>
            </div>
          </div>

          <aside className="hero-card" aria-label="Tournament highlights">
            <div className="crest" aria-hidden="true">🐉</div>
            <p className="card-kicker">Signature Event Package</p>
            <h2>School Pride Invitational</h2>
            <p>
              A turnkey competition platform with premium branding, bracket flow,
              recognition moments, and crowd-first presentation.
            </p>
            <div className="stats">
              {stats.map(([value, label]) => (
                <div className="stat" key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="section about" aria-labelledby="about-title">
        <div>
          <p className="eyebrow">About Green Dragons Sports</p>
          <h2 id="about-title">Built for schools that want every athlete to feel like a headliner.</h2>
        </div>
        <p>
          We blend tournament planning, live-event detail, and school-community storytelling into
          experiences that feel prestigious, organized, and easy to champion. From competitive
          structure to the final awards moment, every touchpoint is designed to elevate participation.
        </p>
      </section>

      <section className="section features" id="features" aria-labelledby="features-title">
        <div className="section-heading">
          <p className="eyebrow">Tournament Features</p>
          <h2 id="features-title">Everything a standout school tournament needs.</h2>
        </div>
        <div className="feature-grid">
          {tournamentFeatures.map((feature, index) => (
            <article className="feature-card" key={feature}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{feature}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section benefits" aria-labelledby="benefits-title">
        <div className="section-heading">
          <p className="eyebrow">Benefits for Schools</p>
          <h2 id="benefits-title">Host with impact, confidence, and repeatable momentum.</h2>
        </div>
        <div className="benefit-grid">
          {schoolBenefits.map((benefit) => (
            <article className="benefit-card" key={benefit.title}>
              <h3>{benefit.title}</h3>
              <p>{benefit.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta" id="cta" aria-labelledby="cta-title">
        <p className="eyebrow">Ready to tip off?</p>
        <h2 id="cta-title">Bring a Green Dragons tournament to your school community.</h2>
        <p>
          Launch a premium, mobile-ready event presence and give your athletes a tournament day
          worthy of the spotlight.
        </p>
        <a className="button button-primary" href="mailto:hello@greendragonssports.com">Contact Green Dragons</a>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
