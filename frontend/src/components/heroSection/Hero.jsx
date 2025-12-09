import React from 'react';
import './Hero.css';
import AnnouncementBar from './AnnouncementBar';

/**
 * Props:
 *  - bgImage: string (URL or imported module)
 *  - title (optional), subtitle (optional), ctaLabel (optional), onCta (optional)
 *
 * Usage:
 *  import heroImg from '../assets/hero.jpg';
 *  <Hero bgImage={heroImg} />
 *
 * or (public):
 *  <Hero bgImage="/hero.jpg" />
 */
export default function Hero({
  bgImage = '/hero.png',
  title = 'BRIGHTEN YOUR DIWALI',
  highlight = 'CRACKERS',
  subtitle = 'Premium quality fireworks at the best prices.',
  ctaLabel = 'Shop now',
  onCta = () => { window.location.href = '/#products'; }
}) {
  return (
    <section className="hero">
        <AnnouncementBar/>
      {/* top peach wave (transparent SVG allows underlying nav color to show like the design) */}
      <div className="hero-wave hero-wave-top" aria-hidden>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="wave-svg">
          <path d="M0,64 C200,10 400,110 720,80 C1040,50 1240,0 1440,40 L1440 0 L0 0 Z" />
        </svg>
      </div>

      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${bgImage})` }}
        role="img"
        aria-label="A cup of coffee with roasted beans"
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <p className="hero-sub">{title}</p>
            <h1 className="hero-title">
              <span className="hero-title-plain">{highlight}</span>
            </h1>
            <p className="hero-desc">{subtitle}</p>
            <div className="hero-actions">
              <button className="btn-cta" onClick={onCta}>{ctaLabel}</button>
            </div>
          </div>

          {/* decorative spoon/beans/coffee cup circle (optional) */}
          <div className="hero-deco" aria-hidden>
            <div className="hero-coffee-circle" />
          </div>
        </div>
      </div>

      {/* bottom peach wave that curves into the main page */}
      <div className="hero-wave hero-wave-bottom" aria-hidden>
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none" className="wave-svg">
          <path d="M0,80 C160,160 420,0 720,40 C1020,80 1280,140 1440,100 L1440 140 L0 140 Z" />
        </svg>
      </div>
    </section>
  );
}
