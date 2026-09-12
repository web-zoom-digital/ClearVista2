'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

/* ========================================================
   DESIGN TOKENS - Exactly matching the reference screenshot
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
    <section style={{ position: 'relative', height: '100vh', minHeight: '750px', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
      <Image src="/hero_interior.jpg" alt="ClearVista - Quietly Engineered. Beautifully Designed." fill priority style={{ objectFit: 'cover', objectPosition: 'center' }} />
      {/* Gradient left-to-right */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.10) 100%)' }} />
      {/* Bottom gradient */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 45%)' }} />

      {/* Top-right vertical label */}
      <div style={{ position: 'absolute', top: '130px', right: '44px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '3px' }}>
        <span style={{ fontSize: '7.5px', letterSpacing: '0.22em', color: 'rgba(255,255,255,0.45)', fontWeight: 500, textTransform: 'uppercase' }}>NATURE LOOKS</span>
        <span style={{ fontSize: '7.5px', letterSpacing: '0.22em', color: 'rgba(255,255,255,0.45)', fontWeight: 500, textTransform: 'uppercase' }}>BETTER FROM HERE</span>
      </div>

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1440px', margin: '0 auto', padding: '0 52px 92px' }}>
        {/* uPVC WINDOWS label */}
        <p style={{ fontSize: '10px', letterSpacing: '0.28em', color: GOLD, fontWeight: 600, textTransform: 'uppercase', marginBottom: '20px' }}>uPVC WINDOWS</p>

        {/* Headline */}
        <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(3.2rem, 6.5vw, 6.2rem)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.025em', textTransform: 'uppercase', color: WHITE, marginBottom: '20px', maxWidth: '640px' }}>
          Quietly<br />Engineered.<br />Beautifully<br />Designed.
        </h1>

        {/* Subtext */}
        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.58)', marginBottom: '32px', fontWeight: 300, letterSpacing: '0.01em', maxWidth: '380px' }}>
          More light. More views. A more peaceful you.
        </p>

        {/* Outline CTA Button */}
        <Link href="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', padding: '13px 28px', border: '1px solid rgba(255,255,255,0.45)', color: WHITE, fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.3s ease', backdropFilter: 'blur(2px)' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)'; e.currentTarget.style.color = WHITE; }}>
          Explore the Collection
          <svg width="22" height="10" viewBox="0 0 22 10" fill="none"><path d="M1 5H21M16 1L21 5L16 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </Link>

        {/* Bottom tags */}
        <div style={{ marginTop: '72px', display: 'flex', alignItems: 'center' }}>
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
    <section style={{ background: LIGHT, paddingTop: '72px', paddingBottom: '80px' }}>
      {/* Header row */}
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 52px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
        <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1a1a1a' }}>
          Our Window Collection
        </h2>
        <Link href="/products" style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#1a1a1a', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.7 }}>
          View All Products
          <svg width="16" height="8" viewBox="0 0 16 8" fill="none"><path d="M1 4H15M11 1L15 4L11 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
        </Link>
      </div>

      {/* 4x2 Grid */}
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 52px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3px' }}>
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
            {/* Image */}
            <div style={{ position: 'relative', height: '165px', overflow: 'hidden' }}>
              <Image src={w.img} alt={w.name} fill style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }} />
            </div>
            {/* Text row */}
            <div style={{ padding: '14px 14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h3 style={{ fontSize: '11.5px', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#1a1a1a', marginBottom: '3px' }}>{w.name}</h3>
                <p style={{ fontSize: '10px', color: '#888', letterSpacing: '0.02em' }}>{w.desc}</p>
              </div>
              <span className="winarrow" style={{ fontSize: '14px', color: '#1a1a1a', opacity: 0, transition: 'opacity 0.3s ease', paddingTop: '2px', flexShrink: 0 }}>→</span>
            </div>
          </div>
        ))}
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
    <section style={{ background: DARK, padding: '96px 0' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 52px' }}>
        {/* Section Label */}
        <p style={{ fontSize: '9.5px', letterSpacing: '0.28em', color: GOLD, fontWeight: 600, textTransform: 'uppercase', marginBottom: '40px' }}>Lifestyle</p>

        <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '72px', alignItems: 'start' }}>
          {/* Left */}
          <div>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.02, letterSpacing: '-0.025em', textTransform: 'uppercase', color: WHITE, marginBottom: '26px' }}>
              Designed<br />Around<br />Your Life
            </h2>
            <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.85, marginBottom: '36px', maxWidth: '400px' }}>
              ClearVista uPVC windows bring together precision design, superior performance and lasting durability — so you can enjoy spaces that feel open, comfortable and truly yours.
            </p>
            <Link href="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '12px 26px', border: '1px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.8)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}>
              See it in Your Space →
            </Link>
          </div>

          {/* Right */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {/* Image */}
            <div style={{ position: 'relative', height: '340px', overflow: 'hidden', marginBottom: '28px' }}>
              <Image src="/lifestyle_interior.jpg" alt="ClearVista Lifestyle" fill style={{ objectFit: 'cover' }} />
            </div>
            {/* Feature list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {LIFESTYLE_FEATURES.map((f, i) => (
                <div key={f.label} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '12px 0', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
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
    <section style={{ background: LIGHT, padding: '80px 0 88px' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 52px' }}>
        {/* Header */}
        <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1a1a1a', marginBottom: '8px' }}>
          Performance You Can Feel
        </h2>
        <p style={{ fontSize: '12.5px', color: '#666', marginBottom: '52px', letterSpacing: '0.01em' }}>
          Engineered for Indian conditions. Designed for a better everyday.
        </p>

        {/* 5 columns - no card backgrounds, just icons + text */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
          {PERFS.map((p, i) => (
            <div key={p.title} style={{ padding: '40px 24px 36px', borderRight: i < 4 ? '1px solid rgba(0,0,0,0.08)' : 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '16px', transition: 'background 0.3s ease' }}
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
    <section id="advantage" style={{ background: DARK2, padding: '96px 0' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 52px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '4fr 8fr', gap: '80px', alignItems: 'center' }}>
          {/* Left text */}
          <div>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2.2rem, 4vw, 3.6rem)', fontWeight: 900, lineHeight: 1.02, letterSpacing: '-0.025em', textTransform: 'uppercase', color: WHITE, marginBottom: '22px' }}>
              The<br />ClearVista<br />Advantage
            </h2>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.42)', lineHeight: 1.85, marginBottom: '36px', maxWidth: '320px' }}>
              A perfect balance of engineering, aesthetics and everyday performance.
            </p>
            <Link href="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '11px 24px', border: '1px solid rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.7)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}>
              Explore Technology →
            </Link>
          </div>

          {/* Right: image + feature points */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px', alignItems: 'stretch' }}>
            {/* Cross-section image */}
            <div style={{ position: 'relative', gridRow: '1 / 2' }}>
              <Image src="/advantage_product.jpg" alt="ClearVista uPVC Profile Technology" fill style={{ objectFit: 'cover' }} />
            </div>
            {/* Feature points */}
            <div style={{ display: 'flex', flexDirection: 'column', padding: '8px 0 8px 32px', justifyContent: 'space-around' }}>
              {ADV_POINTS.map((a, i) => (
                <div key={a.title} style={{ paddingBottom: i < ADV_POINTS.length - 1 ? '18px' : 0, marginBottom: i < ADV_POINTS.length - 1 ? '18px' : 0, borderBottom: i < ADV_POINTS.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                  <h4 style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: GOLD, marginBottom: '5px' }}>{a.title}</h4>
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
  { name: 'Midnight Black', color: '#1a1a1a', border: 'none' },
  { name: 'Graphite Grey', color: '#4a4e52', border: 'none' },
  { name: 'Pristine White', color: '#f5f1eb', border: '1px solid #ccc' },
  { name: 'Walnut', color: '#5c3a1e', border: 'none' },
  { name: 'Mahogany', color: '#3d0e0e', border: 'none' },
  { name: 'Woodgrain Oak', color: '#8b5a2b', border: 'none' },
];

function MakeItYoursSection() {
  const [active, setActive] = useState(0);

  return (
    <section style={{ background: LIGHT, padding: '88px 0' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 52px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          {/* Left */}
          <div>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#1a1a1a', marginBottom: '14px' }}>
              Make It Yours
            </h2>
            <p style={{ fontSize: '13px', color: '#777', marginBottom: '36px', lineHeight: 1.7 }}>
              A range of elegant finishes to complement every space.
            </p>

            {/* Rectangle color swatches */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
              {FINISHES.map((f, i) => (
                <div key={f.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '7px', cursor: 'pointer' }} onClick={() => setActive(i)}>
                  <div style={{ width: '52px', height: '36px', background: f.color, border: active === i ? '2.5px solid ' + GOLD : f.border || '2.5px solid transparent', outline: active === i ? '1.5px solid ' + GOLD : 'none', outlineOffset: '2px', transition: 'all 0.2s ease', transform: active === i ? 'scale(1.08)' : 'scale(1)' }} />
                  <span style={{ fontSize: '8px', letterSpacing: '0.08em', color: '#888', textTransform: 'uppercase', textAlign: 'center', maxWidth: '54px', lineHeight: 1.3 }}>{f.name}</span>
                </div>
              ))}
            </div>

            {/* Right-side text */}
            <div style={{ marginBottom: '32px' }}>
              <p style={{ fontSize: '12.5px', color: '#555', lineHeight: 2.0 }}>
                Choose the colour.<br />
                Choose the glass.<br />
                Choose the hardware.<br />
                <strong style={{ color: '#1a1a1a', fontWeight: 700 }}>Make it yours.</strong>
              </p>
            </div>

            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '12px 26px', border: '1px solid rgba(0,0,0,0.3)', color: '#1a1a1a', fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1a1a1a'; e.currentTarget.style.color = WHITE; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1a1a1a'; }}>
              Explore Options →
            </Link>
          </div>

          {/* Right image */}
          <div style={{ position: 'relative', height: '520px', overflow: 'hidden' }}>
            <Image src="/lifestyle_interior.jpg" alt="ClearVista Finishes" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.08)' }} />
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
    <section style={{ background: DARK, padding: '88px 0 80px' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 52px' }}>
        {/* Header row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '36px' }}>
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

        {/* 3-column grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3px' }}>
          {SPACES.map((s) => (
            <div key={s.label} style={{ position: 'relative', height: '300px', overflow: 'hidden', cursor: 'pointer' }}
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
    <section style={{ background: LIGHT, padding: '80px 0 88px' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 52px' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1a1a1a' }}>
            What Our Customers Say
          </h2>
          {/* Arrows */}
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

        {/* 3 cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3px' }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{ background: WHITE, padding: '36px 32px 32px', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.07)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              {/* Large quote mark */}
              <div style={{ fontSize: '52px', lineHeight: 0.9, color: GOLD, fontFamily: 'Georgia, serif', marginBottom: '22px' }}>"</div>
              <p style={{ fontSize: '13.5px', color: '#4a4a4a', lineHeight: 1.8, marginBottom: '28px' }}>{t.quote}</p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)', paddingTop: '18px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <p style={{ fontSize: '12.5px', fontWeight: 700, color: '#1a1a1a', marginBottom: '3px' }}>{t.name}</p>
                  <p style={{ fontSize: '11px', color: '#999' }}>{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================================
   SECTION 9: FOOTER CTA — A BRIGHTER TOMORROW
   ======================================================== */
function FooterCTASection() {
  return (
    <section style={{ position: 'relative', padding: '140px 52px', overflow: 'hidden', minHeight: '520px', display: 'flex', alignItems: 'center' }}>
      <Image src="/footer_cta_bg.jpg" alt="A Brighter Tomorrow" fill style={{ objectFit: 'cover', objectPosition: 'center 40%' }} />
      {/* Overlays */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0.3) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)' }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1440px', margin: '0 auto', width: '100%' }}>
        <p style={{ fontSize: '9px', letterSpacing: '0.3em', color: GOLD, fontWeight: 600, textTransform: 'uppercase', marginBottom: '18px' }}>
          A Brighter Tomorrow
        </p>
        <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4.8rem)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.025em', textTransform: 'uppercase', color: WHITE, marginBottom: '22px', maxWidth: '660px' }}>
          Open Your Space<br />To a Clearer View.
        </h2>
        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', maxWidth: '440px', lineHeight: 1.85, marginBottom: '44px', fontWeight: 300 }}>
          Let's create spaces that bring in more light, more life and more of what matters.
        </p>
        <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', padding: '14px 32px', border: '1px solid rgba(255,255,255,0.4)', color: WHITE, fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.3s ease' }}
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
