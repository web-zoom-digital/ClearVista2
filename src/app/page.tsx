'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

/* ========================================================
   DESIGN TOKENS
   ======================================================== */
const DARK = '#0a0a0a';
const DARK2 = '#111111';
const LIGHT = '#f0ebe3';
const LIGHT2 = '#e8e2d9';
const GOLD = '#c8a96e';
const WHITE = '#ffffff';

/* ========================================================
   SECTION 1: HERO
   ======================================================== */
function HeroSection() {
  return (
    <section className="hero-section" style={{ position: 'relative', height: '100vh', minHeight: '100svh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
      <Image src="/hero_interior.jpg" alt="ClearVista - Engineered for Brighter Spaces." fill priority style={{ objectFit: 'cover', objectPosition: 'center' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.10) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 45%)' }} />

      {/* Top-right vertical label — hidden on mobile */}
      <div className="hero-top-label" style={{ position: 'absolute', top: '130px', right: '44px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '3px' }}>
        <span style={{ fontSize: '7.5px', letterSpacing: '0.22em', color: 'rgba(255,255,255,0.45)', fontWeight: 500, textTransform: 'uppercase' }}>NATURE LOOKS</span>
        <span style={{ fontSize: '7.5px', letterSpacing: '0.22em', color: 'rgba(255,255,255,0.45)', fontWeight: 500, textTransform: 'uppercase' }}>BETTER FROM HERE</span>
      </div>

      {/* Main content */}
      <div className="hero-content-pad" style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
        <p style={{ fontSize: '10px', letterSpacing: '0.28em', color: GOLD, fontWeight: 600, textTransform: 'uppercase', marginBottom: '20px' }}>Premium uPVC Solutions</p>

        <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2rem, 5.5vw, 4.5rem)', fontWeight: 300, lineHeight: 1.15, letterSpacing: '-0.01em', textTransform: 'uppercase', color: WHITE, marginBottom: '20px', maxWidth: '760px' }}>
          Engineered for <br />
          <span style={{ fontWeight: 800, color: GOLD }}>Brighter Spaces.</span><br />
          Designed for a <br />
          <span style={{ fontWeight: 800 }}>Better Tomorrow.</span>
        </h1>

        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.58)', marginBottom: '28px', fontWeight: 300, letterSpacing: '0.01em', maxWidth: '360px' }}>
          More light. More views. A more peaceful you.
        </p>

        <Link href="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '13px 24px', border: '1px solid rgba(255,255,255,0.45)', color: WHITE, fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.3s ease', backdropFilter: 'blur(2px)' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)'; e.currentTarget.style.color = WHITE; }}>
          Explore the Collection
          <svg width="22" height="10" viewBox="0 0 22 10" fill="none"><path d="M1 5H21M16 1L21 5L16 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </Link>

        <div className="hero-bottom-tags" style={{ marginTop: '64px', display: 'flex', alignItems: 'center' }}>
          {['Better Spaces', 'Quieter Homes', 'Brighter Life'].map((tag, i) => (
            <span key={tag} style={{ fontSize: '8.5px', letterSpacing: '0.22em', color: 'rgba(255,255,255,0.32)', fontWeight: 600, textTransform: 'uppercase', paddingRight: i < 2 ? '16px' : 0, marginRight: i < 2 ? '16px' : 0, borderRight: i < 2 ? '1px solid rgba(255,255,255,0.18)' : 'none' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================================
   SECTION 2: OUR WINDOW COLLECTION
   ======================================================== */
const WINDOWS = [
  { name: 'Casement Windows', desc: 'Classic, Versatile, Timeless', img: '/win_casement_view.jpg' },
  { name: 'Sliding Windows', desc: 'Smooth glide views', img: '/win_sliding_view.jpg' },
  { name: 'Fixed Windows', desc: 'Panoramic glass views', img: '/win_casement_view.jpg' },
  { name: 'Tilt & Turn Windows', desc: 'Modern. For your secure view.', img: '/win_tiltturn.jpg' },
  { name: 'Villa Windows', desc: 'For larger garden spaces', img: '/win_bay_view.jpg' },
  { name: 'Combination Windows', desc: 'Decor your corner beautifully', img: '/win_casement_view.jpg' },
  { name: 'Bay Window', desc: 'More light, more interior', img: '/win_bay_view.jpg' },
  { name: 'Glass-to-Glass Windows', desc: 'A seamless clear interior', img: '/win_sliding_view.jpg' },
];

function WindowCollectionSection() {
  return (
    <section style={{ background: LIGHT, paddingTop: '64px', paddingBottom: '72px' }}>
      <div className="section-inner">
        {/* Header row */}
        <div className="win-header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '28px' }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1a1a1a' }}>
            Our Window Collection
          </h2>
          <Link href="/products" style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#1a1a1a', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.7 }}>
            View All Products
            <svg width="16" height="8" viewBox="0 0 16 8" fill="none"><path d="M1 4H15M11 1L15 4L11 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
          </Link>
        </div>

        {/* 4x2 Grid → 2x4 on mobile */}
        <div className="win-grid">
          {WINDOWS.map((w) => (
            <div key={w.name} style={{ cursor: 'pointer', background: LIGHT2 }}
              onMouseEnter={e => {
                const img = e.currentTarget.querySelector('img') as HTMLElement;
                const arr = e.currentTarget.querySelector('.winarrow') as HTMLElement;
                if (img) img.style.transform = 'scale(1.06)';
                if (arr) arr.style.opacity = '1';
              }}
              onMouseLeave={e => {
                const img = e.currentTarget.querySelector('img') as HTMLElement;
                const arr = e.currentTarget.querySelector('.winarrow') as HTMLElement;
                if (img) img.style.transform = 'scale(1)';
                if (arr) arr.style.opacity = '0';
              }}>
              <div style={{ position: 'relative', height: '160px', overflow: 'hidden' }}>
                <Image src={w.img} alt={w.name} fill style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }} />
              </div>
              <div style={{ padding: '14px 14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3 style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#1a1a1a', marginBottom: '3px' }}>{w.name}</h3>
                  <p style={{ fontSize: '10px', color: '#888', letterSpacing: '0.02em' }}>{w.desc}</p>
                </div>
                <span className="winarrow" style={{ fontSize: '14px', color: '#1a1a1a', opacity: 0, transition: 'opacity 0.3s ease', paddingTop: '2px', flexShrink: 0 }}>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================================
   SECTION 3: DESIGNED AROUND YOUR LIFE
   ======================================================== */
const LIFESTYLE_FEATURES = [
  { svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke={GOLD} strokeWidth="1.5"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round"/></svg>, label: 'MORE NATURAL LIGHT' },
  { svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M11 5L6 9H2v6h4l5 4V5z" stroke={GOLD} strokeWidth="1.5" strokeLinejoin="round"/><line x1="23" y1="9" x2="17" y2="15" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round"/><line x1="17" y1="9" x2="23" y2="15" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round"/></svg>, label: 'QUIETER SPACES' },
  { svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke={GOLD} strokeWidth="1.5" strokeLinejoin="round"/></svg>, label: 'BETTER COMFORT' },
  { svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 21C12 21 4 16 4 10a8 8 0 0116 0c0 6-8 11-8 11z" stroke={GOLD} strokeWidth="1.5"/></svg>, label: 'NO MOISTURE / FOR ENVIRONMENT' },
  { svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" stroke={GOLD} strokeWidth="1.5" strokeLinejoin="round"/></svg>, label: 'A MORE BEAUTIFUL TOMORROW' },
];

function LifestyleSection() {
  return (
    <section style={{ background: DARK, padding: '80px 0' }}>
      <div className="section-inner">
        <p style={{ fontSize: '9.5px', letterSpacing: '0.28em', color: GOLD, fontWeight: 600, textTransform: 'uppercase', marginBottom: '36px' }}>Lifestyle</p>

        <div className="lifestyle-grid">
          {/* Left */}
          <div>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2rem, 4.5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.02, letterSpacing: '-0.025em', textTransform: 'uppercase', color: WHITE, marginBottom: '22px' }}>
              Designed<br />Around<br />Your Life
            </h2>
            <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.85, marginBottom: '32px', maxWidth: '400px' }}>
              ClearVista uPVC windows bring together precision design, superior performance and lasting durability — so you can enjoy spaces that feel open, comfortable and truly yours.
            </p>
            <Link href="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '12px 24px', border: '1px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.8)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}>
              See it in Your Space →
            </Link>
          </div>

          {/* Right */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            <div style={{ position: 'relative', height: '300px', overflow: 'hidden', marginBottom: '24px' }}>
              <Image src="/lifestyle_interior.jpg" alt="ClearVista Lifestyle" fill style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {LIFESTYLE_FEATURES.map((f) => (
                <div key={f.label} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '11px 0', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                  <div style={{ flexShrink: 0, width: '28px', display: 'flex', justifyContent: 'center' }}>{f.svg}</div>
                  <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================================================
   SECTION 4: PERFORMANCE YOU CAN FEEL
   ======================================================== */
const PERFS = [
  { icon: <svg width="34" height="34" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#1a1a1a" strokeWidth="1.4" strokeLinejoin="round"/></svg>, title: 'ENERGY EFFICIENT', desc: 'Keep your home cooler in summer, warmer in winter.' },
  { icon: <svg width="34" height="34" viewBox="0 0 24 24" fill="none"><path d="M11 5L6 9H2v6h4l5 4V5z" stroke="#1a1a1a" strokeWidth="1.4" strokeLinejoin="round"/><line x1="23" y1="9" x2="17" y2="15" stroke="#1a1a1a" strokeWidth="1.4" strokeLinecap="round"/><line x1="17" y1="9" x2="23" y2="15" stroke="#1a1a1a" strokeWidth="1.4" strokeLinecap="round"/></svg>, title: 'SOUND POLLUTION', desc: 'Built for quiet — a peaceful noise-free space.' },
  { icon: <svg width="34" height="34" viewBox="0 0 24 24" fill="none"><path d="M20 17.58A5 5 0 0018 8h-1.26A8 8 0 104 15.25" stroke="#1a1a1a" strokeWidth="1.4" strokeLinecap="round"/><line x1="8" y1="14" x2="8" y2="21" stroke="#1a1a1a" strokeWidth="1.4" strokeLinecap="round"/><line x1="12" y1="12" x2="12" y2="21" stroke="#1a1a1a" strokeWidth="1.4" strokeLinecap="round"/><line x1="16" y1="16" x2="16" y2="21" stroke="#1a1a1a" strokeWidth="1.4" strokeLinecap="round"/></svg>, title: 'WEATHER RESISTANT', desc: 'Built to perform in extreme weather conditions.' },
  { icon: <svg width="34" height="34" viewBox="0 0 24 24" fill="none"><path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" stroke="#1a1a1a" strokeWidth="1.4"/><path d="M12 6v6l4 2" stroke="#1a1a1a" strokeWidth="1.4" strokeLinecap="round"/></svg>, title: 'LOW MAINTENANCE', desc: 'Long-lasting with minimal upkeep.' },
  { icon: <svg width="34" height="34" viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" stroke="#1a1a1a" strokeWidth="1.4"/><path d="M7 11V7a5 5 0 0110 0v4" stroke="#1a1a1a" strokeWidth="1.4" strokeLinecap="round"/></svg>, title: 'ENHANCED SECURITY', desc: 'Stronger. Safer. For your peace of mind.' },
];

function PerformanceSection() {
  return (
    <section style={{ background: LIGHT, padding: '72px 0' }}>
      <div className="section-inner">
        <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1a1a1a', marginBottom: '8px' }}>
          Performance You Can Feel
        </h2>
        <p style={{ fontSize: '12.5px', color: '#666', marginBottom: '44px', letterSpacing: '0.01em' }}>
          Engineered for Indian conditions. Designed for a better everyday.
        </p>

        <div className="perf-grid" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
          {PERFS.map((p, i) => (
            <div key={p.title} style={{ padding: '36px 20px 32px', borderRight: i < 4 ? '1px solid rgba(0,0,0,0.08)' : 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '14px', transition: 'background 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.03)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}>
              <div style={{ marginBottom: '4px' }}>{p.icon}</div>
              <h3 style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1a1a1a' }}>{p.title}</h3>
              <p style={{ fontSize: '12px', color: '#888', lineHeight: 1.65 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================================
   SECTION 5: THE CLEARVISTA ADVANTAGE
   ======================================================== */
const ADV_POINTS = [
  { title: 'MULTI-CHAMBER uPVC', desc: '6-chamber profile thermal performance' },
  { title: 'AIRTIGHT SEALING', desc: '3-Seal system, no air or water leakage' },
  { title: 'DOUBLE GLAZING', desc: 'Superior insulation and energy efficiency' },
  { title: 'PRECISION HARDWARE', desc: 'Smooth operation, lasting durability' },
  { title: 'REINFORCED STRUCTURE', desc: 'Robust frames, dimensional stability' },
];

function AdvantageSection() {
  return (
    <section id="advantage" style={{ background: DARK2, padding: '88px 0' }}>
      <div className="section-inner">
        <div className="advantage-grid">
          {/* Left text */}
          <div>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2rem, 4vw, 3.6rem)', fontWeight: 900, lineHeight: 1.02, letterSpacing: '-0.025em', textTransform: 'uppercase', color: WHITE, marginBottom: '20px' }}>
              The<br />ClearVista<br />Advantage
            </h2>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.42)', lineHeight: 1.85, marginBottom: '32px', maxWidth: '320px' }}>
              A perfect balance of engineering, aesthetics and everyday performance.
            </p>
            <Link href="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '11px 22px', border: '1px solid rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.7)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}>
              Explore Technology →
            </Link>
          </div>

          {/* Right: image + feature points */}
          <div className="advantage-inner">
            <div className="advantage-img" style={{ position: 'relative', minHeight: '280px' }}>
              <Image src="/advantage_product.jpg" alt="ClearVista uPVC Profile Technology" fill style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', padding: '8px 0 8px 28px', justifyContent: 'space-around' }}>
              {ADV_POINTS.map((a, i) => (
                <div key={a.title} style={{ paddingBottom: i < ADV_POINTS.length - 1 ? '16px' : 0, marginBottom: i < ADV_POINTS.length - 1 ? '16px' : 0, borderBottom: i < ADV_POINTS.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                  <h4 style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: GOLD, marginBottom: '4px' }}>{a.title}</h4>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.55 }}>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================================================
   SECTION 6: MAKE IT YOURS
   ======================================================== */
const FINISHES = [
  { name: 'Midnight Black', color: '#111111' },
  { name: 'Graphite Grey', color: '#4a4e52' },
  { name: 'Pristine White', color: '#f5f1eb' },
  { name: 'Walnut', color: '#6b3e1e', texture: 'repeating-linear-gradient(90deg, #6b3e1e 0px, #8b5830 4px, #6b3e1e 8px)' },
  { name: 'Mahogany', color: '#4a120a', texture: 'repeating-linear-gradient(90deg, #4a120a 0px, #6b2318 4px, #4a120a 8px)' },
  { name: 'Woodgrain Oak', color: '#b57d3a', texture: 'repeating-linear-gradient(90deg, #b57d3a 0px, #d4a55e 4px, #b57d3a 8px)' },
];

function MakeItYoursSection() {
  const [active, setActive] = useState(0);

  return (
    <section style={{ background: '#111111', padding: '72px 0' }}>
      <div className="section-inner">

        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '10px', letterSpacing: '0.28em', color: GOLD, fontWeight: 600, textTransform: 'uppercase', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '22px', height: '1px', background: GOLD, display: 'inline-block' }} />
            Finishes & Customisation
          </p>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.6rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.02em', textTransform: 'uppercase', color: WHITE }}>
            Make It Yours
          </h2>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', marginTop: '10px', lineHeight: 1.7 }}>
            A range of elegant finishes to complement every space.
          </p>
        </div>

        {/* Main row: Swatches + Right CTA */}
        <div className="miy-layout">
          {/* Swatches row */}
          <div className="swatches-row">
            {FINISHES.map((f, i) => (
              <div key={f.name}
                onClick={() => setActive(i)}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px', cursor: 'pointer' }}>
                <div className="swatch-item" style={{
                  background: f.texture || f.color,
                  border: active === i ? `2px solid ${GOLD}` : '2px solid transparent',
                  outline: active === i ? `1px solid ${GOLD}` : 'none',
                  outlineOffset: '3px',
                  transition: 'all 0.25s ease',
                  transform: active === i ? 'scale(1.05)' : 'scale(1)',
                }} />
                <span style={{
                  fontSize: '9px',
                  letterSpacing: '0.12em',
                  color: active === i ? GOLD : 'rgba(255,255,255,0.5)',
                  textTransform: 'uppercase',
                  fontWeight: active === i ? 700 : 400,
                  transition: 'color 0.25s ease',
                }}>{f.name}</span>
              </div>
            ))}
          </div>

          {/* Right CTA */}
          <div className="miy-cta" style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '48px', minWidth: '200px' }}>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 2.1, marginBottom: '24px' }}>
              Choose the colour.<br />
              Choose the glass.<br />
              Choose the hardware.<br />
              <span style={{ color: WHITE, fontWeight: 600 }}>Make it yours.</span>
            </p>
            <Link href="/contact" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '11px 22px',
              border: `1px solid ${GOLD}`,
              color: GOLD,
              fontSize: '9.5px',
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.color = DARK; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = GOLD; }}>
              Explore Options
              <svg width="18" height="8" viewBox="0 0 18 8" fill="none"><path d="M1 4H17M13 1L17 4L13 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================================================
   SECTION 7: REAL SPACES. REAL STORIES.
   ======================================================== */
const SPACES = [
  { label: 'Homes', img: '/gallery_homes.jpg' },
  { label: 'Villas', img: '/lifestyle_interior.jpg' },
  { label: 'Commercial', img: '/gallery_commercial.jpg' },
];

function RealSpacesSection() {
  return (
    <section style={{ background: DARK, padding: '72px 0 68px' }}>
      <div className="section-inner">
        {/* Header row */}
        <div className="spaces-header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
          <div>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: WHITE, marginBottom: '6px' }}>
              Real Spaces. Real Stories.
            </h2>
            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.38)', letterSpacing: '0.02em' }}>
              ClearVista windows in homes that inspire
            </p>
          </div>
          <Link href="/gallery" style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
            Explore Gallery →
          </Link>
        </div>

        {/* 3-column grid → 1 col on mobile */}
        <div className="spaces-grid">
          {SPACES.map((s) => (
            <div key={s.label} style={{ position: 'relative', height: '280px', overflow: 'hidden', cursor: 'pointer' }}
              onMouseEnter={e => { (e.currentTarget.querySelector('img') as HTMLElement).style.transform = 'scale(1.06)'; }}
              onMouseLeave={e => { (e.currentTarget.querySelector('img') as HTMLElement).style.transform = 'scale(1)'; }}>
              <Image src={s.img} alt={s.label} fill style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.68) 0%, transparent 55%)' }} />
              <div style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
                <h3 style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: WHITE }}>{s.label}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================================
   SECTION 8: WHAT OUR CUSTOMERS SAY
   ======================================================== */
const TESTIMONIALS = [
  {
    quote: 'The windows completely transformed our home. More light, better insulation, and they look absolutely stunning.',
    name: 'Rajesh K.', city: 'Mumbai',
  },
  {
    quote: 'Excellent quality and finish. Full acoustic performance. Our office is now so much quieter and more productive.',
    name: 'Priya S.', city: 'Bangalore',
  },
  {
    quote: 'Our villa feels more open and airy now. Definitely worth every rupee. ClearVista truly delivers on its promise.',
    name: 'Amit & Sunita', city: 'Pune',
  },
];

function TestimonialsSection() {
  return (
    <section style={{ background: LIGHT, padding: '72px 0 80px' }}>
      <div className="section-inner">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '36px' }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1a1a1a' }}>
            What Our Customers Say
          </h2>
          <div style={{ display: 'flex', gap: '10px' }}>
            {['←', '→'].map((a, i) => (
              <button key={i} style={{ width: '36px', height: '36px', border: '1px solid rgba(0,0,0,0.2)', background: 'transparent', fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555', transition: 'all 0.2s ease' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#1a1a1a'; e.currentTarget.style.color = WHITE; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#555'; }}>
                {a}
              </button>
            ))}
          </div>
        </div>

        {/* 3 cards → 1 col on mobile */}
        <div className="testi-grid">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{ background: WHITE, padding: '32px 28px 28px', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.07)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{ fontSize: '48px', lineHeight: 0.9, color: GOLD, fontFamily: 'Georgia, serif', marginBottom: '18px' }}>"</div>
              <p style={{ fontSize: '13.5px', color: '#4a4a4a', lineHeight: 1.8, marginBottom: '24px' }}>{t.quote}</p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)', paddingTop: '16px' }}>
                <p style={{ fontSize: '12.5px', fontWeight: 700, color: '#1a1a1a', marginBottom: '3px' }}>{t.name}</p>
                <p style={{ fontSize: '11px', color: '#999' }}>{t.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================================
   SECTION 9: FOOTER CTA
   ======================================================== */
function FooterCTASection() {
  return (
    <section style={{ position: 'relative', padding: '100px 0', overflow: 'hidden', minHeight: '460px', display: 'flex', alignItems: 'center' }}>
      <Image src="/footer_cta_bg.jpg" alt="A Brighter Tomorrow" fill style={{ objectFit: 'cover', objectPosition: 'center 40%' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0.3) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)' }} />

      <div className="footer-cta-inner section-inner" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <p style={{ fontSize: '9px', letterSpacing: '0.3em', color: GOLD, fontWeight: 600, textTransform: 'uppercase', marginBottom: '16px' }}>
          A Brighter Tomorrow
        </p>
        <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2rem, 5vw, 4.8rem)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.025em', textTransform: 'uppercase', color: WHITE, marginBottom: '20px', maxWidth: '620px' }}>
          Open Your Space<br />To a Clearer View.
        </h2>
        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', maxWidth: '400px', lineHeight: 1.85, marginBottom: '36px', fontWeight: 300 }}>
          Let's create spaces that bring in more light, more life and more of what matters.
        </p>
        <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', padding: '13px 28px', border: '1px solid rgba(255,255,255,0.4)', color: WHITE, fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.3s ease' }}
          onMouseEnter={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = DARK; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.color = WHITE; }}>
          Request a Quote
          <svg width="20" height="10" viewBox="0 0 20 10" fill="none"><path d="M1 5H19M14 1L19 5L14 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
        </Link>
      </div>
    </section>
  );
}

/* ========================================================
   MAIN PAGE EXPORT
   ======================================================== */
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <WindowCollectionSection />
      <LifestyleSection />
      <PerformanceSection />
      <AdvantageSection />
      <MakeItYoursSection />
      <RealSpacesSection />
      <TestimonialsSection />
      <FooterCTASection />
    </main>
  );
}
