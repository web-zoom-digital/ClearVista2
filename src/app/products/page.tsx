'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const GOLD = '#c8a96e';
const DARK = '#0a0a0a';
const LIGHT = '#f0ebe3';
const WHITE = '#ffffff';

/* ================================================================
   WINDOWS DATA
   ================================================================ */
const WINDOWS = [
  {
    name: 'Casement Windows',
    desc: 'Classic, versatile and timeless. Opens outward for maximum ventilation and clean sightlines.',
    img: '/win_casement_view.jpg',
    features: ['Multi-point locking system', 'Triple weather seal', 'Double or triple glazing', 'Available in all colour finishes'],
  },
  {
    name: 'Sliding Windows',
    desc: 'Smooth horizontal glide with panoramic views. Perfect for large openings with limited space outside.',
    img: '/win_sliding_view.jpg',
    features: ['Silent stainless-steel tracks', 'Built-in insect mesh option', 'Easy-clean tilt function', 'Smooth effortless glide'],
  },
  {
    name: 'Bay Windows',
    desc: 'Project outward to create an alcove of light. Adds architectural character and dramatically expands your view.',
    img: '/win_bay_view.jpg',
    features: ['30°, 45° or 90° angles', 'Enhanced natural light', 'Custom seat or sill included', 'Superior thermal efficiency'],
  },
  {
    name: 'Tilt & Turn Windows',
    desc: 'Tilt inward from the top for secure ventilation or open fully like a casement for easy cleaning.',
    img: '/win_tiltturn.jpg',
    features: ['2-in-1 dual functionality', 'Secure top ventilation', 'Child safety option available', 'European premium design'],
  },
  {
    name: 'Villa Windows',
    desc: 'Designed for larger spaces with an elegant Georgian bar finish. Perfect for villas, bungalows and heritage homes.',
    img: '/win_casement_view.jpg',
    features: ['Georgian bar or leaded finish', 'Large format glass panels', 'Heritage aesthetic appeal', 'Superior noise reduction'],
  },
  {
    name: 'Combination Windows',
    desc: 'Mix of fixed, casement and other types in one frame. Ideal for unique architectural requirements.',
    img: '/win_sliding_view.jpg',
    features: ['Custom configurations', 'Fixed + operable panels', 'Maximum design flexibility', 'One integrated frame'],
  },
  {
    name: 'Corner Windows',
    desc: 'Wrap-around glass at corners with no central post — delivering an uninterrupted 180° panoramic view.',
    img: '/win_bay_view.jpg',
    features: ['No central mullion', '180° panoramic view', 'Structural glass engineering', 'Ultra-modern aesthetic'],
  },
  {
    name: 'Glass-to-Glass Windows',
    desc: 'Minimal frame, maximum glass. A seamless, ultra-modern aesthetic where the view becomes the wall.',
    img: '/win_casement_view.jpg',
    features: ['Minimal visible sightlines', 'Structural glass construction', 'Maximum glazing area', 'Ultra-contemporary look'],
  },
];

/* ================================================================
   DOORS DATA
   ================================================================ */
const DOORS = [
  {
    name: 'Sliding Patio Doors',
    desc: 'Glide effortlessly to connect indoor and outdoor spaces. Perfect for balconies, gardens and terraces.',
    img: '/win_sliding_view.jpg',
    features: ['Multi-point security lock', 'Low threshold for easy access', 'Large glass panels', 'Insect mesh option'],
  },
  {
    name: 'French / Casement Doors',
    desc: 'Classic double doors that open outward or inward. Timeless elegance for any entrance or garden access.',
    img: '/win_bay_view.jpg',
    features: ['Traditional double-door design', 'Full-height glass panels', 'Multi-point locking', 'Outward or inward opening'],
  },
  {
    name: 'Bi-Fold Doors',
    desc: 'Fold back completely to create a full-width opening. Transforms your wall into a panoramic opening to the outdoors.',
    img: '/win_casement_view.jpg',
    features: ['Opens up to 100% clear', 'Precision engineered hinges', 'Concealed roller system', 'Custom panel configurations'],
  },
  {
    name: 'Tilt & Turn Doors',
    desc: 'European-style doors that tilt inward at the top for secure ventilation or open fully as a standard door.',
    img: '/win_tiltturn.jpg',
    features: ['Dual tilt and turn action', 'Enhanced security seals', 'Ideal for apartments', 'Child safety option'],
  },
  {
    name: 'Fixed Panel Doors',
    desc: 'Non-opening full-height glass panels for flood-of-light entrances, framing views like living art.',
    img: '/lifestyle_interior.jpg',
    features: ['Maximum glass area', 'Structural frame integrity', 'Superior thermal rating', 'Clean minimalist look'],
  },
  {
    name: 'Corner Doors',
    desc: 'Glass-to-glass corner door system with no corner post — creates a seamless indoor-outdoor transition.',
    img: '/win_bay_view.jpg',
    features: ['No structural corner post', 'Uninterrupted corner view', 'Bi-fold or slide options', 'Premium hardware'],
  },
];

/* ================================================================
   PRODUCT CARD COMPONENT
   ================================================================ */
function ProductCard({ item, index, theme }: { item: typeof WINDOWS[0], index: number, theme: 'dark' | 'light' }) {
  const isDark = theme === 'dark';
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
        background: isDark ? (index % 2 === 0 ? '#141414' : '#111111') : (index % 2 === 0 ? '#ebe6de' : '#e5dfd6'),
        overflow: 'hidden',
        transition: 'transform 0.4s ease',
        cursor: 'default',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.005)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
    >
      {/* Image — alternates left/right */}
      {index % 2 === 0 ? (
        <>
          <div style={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
            <Image src={item.img} alt={item.name} fill style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
              onMouseEnter={e => { (e.target as HTMLElement).style.transform = 'scale(1.05)'; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.transform = 'scale(1)'; }} />
          </div>
          <div style={{ padding: '40px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <CardText item={item} isDark={isDark} />
          </div>
        </>
      ) : (
        <>
          <div style={{ padding: '40px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <CardText item={item} isDark={isDark} />
          </div>
          <div style={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
            <Image src={item.img} alt={item.name} fill style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }} />
          </div>
        </>
      )}
    </div>
  );
}

function CardText({ item, isDark }: { item: typeof WINDOWS[0], isDark: boolean }) {
  return (
    <>
      <h3 style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase', color: isDark ? WHITE : '#1a1a1a', marginBottom: '12px' }}>
        {item.name}
      </h3>
      <p style={{ fontSize: '13.5px', color: isDark ? 'rgba(255,255,255,0.45)' : '#6a6a6a', lineHeight: 1.8, marginBottom: '24px', maxWidth: '380px' }}>
        {item.desc}
      </p>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '28px' }}>
        {item.features.map(f => (
          <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12px', color: GOLD }}>
            <span style={{ width: '4px', height: '4px', background: GOLD, borderRadius: '50%', flexShrink: 0 }} />
            {f}
          </li>
        ))}
      </ul>
      <Link href="/contact" style={{
        display: 'inline-flex', alignItems: 'center', gap: '10px',
        padding: '10px 22px',
        border: `1px solid ${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.25)'}`,
        color: isDark ? 'rgba(255,255,255,0.7)' : '#333',
        fontSize: '10px', fontWeight: 700, letterSpacing: '0.13em', textTransform: 'uppercase',
        textDecoration: 'none', transition: 'all 0.25s ease', alignSelf: 'flex-start',
      }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.25)'; e.currentTarget.style.color = isDark ? 'rgba(255,255,255,0.7)' : '#333'; }}
      >
        Get a Quote →
      </Link>
    </>
  );
}

/* ================================================================
   MAIN PAGE
   ================================================================ */
export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState<'windows' | 'doors'>('windows');

  return (
    <main style={{ background: DARK, minHeight: '100vh', paddingTop: '68px' }}>

      {/* ---- HERO ---- */}
      <section style={{ position: 'relative', height: '52vh', minHeight: '420px', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
        <Image src="/hero_interior.jpg" alt="ClearVista Windows and Doors" fill priority style={{ objectFit: 'cover', objectPosition: 'center 30%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.15) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 55%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1440px', margin: '0 auto', width: '100%', padding: '0 52px 60px' }}>
          <p style={{ fontSize: '10px', letterSpacing: '0.28em', color: GOLD, fontWeight: 600, textTransform: 'uppercase', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '28px', height: '1px', background: GOLD, display: 'inline-block' }} />
            Our Products
          </p>
          <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.025em', textTransform: 'uppercase', color: WHITE, lineHeight: 1.02 }}>
            Windows &amp; Doors
          </h1>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginTop: '14px', fontWeight: 300, maxWidth: '480px', lineHeight: 1.7 }}>
            Premium uPVC — engineered for Indian conditions, designed for a better everyday.
          </p>
        </div>
      </section>

      {/* ---- TAB SWITCHER ---- */}
      <section style={{ background: '#0f0f0f', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'sticky', top: '68px', zIndex: 40 }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 52px', display: 'flex', gap: '0' }}>
          {(['windows', 'doors'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '20px 36px',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: activeTab === tab ? WHITE : 'rgba(255,255,255,0.35)',
                borderBottom: activeTab === tab ? `2px solid ${GOLD}` : '2px solid transparent',
                transition: 'all 0.25s ease',
                fontFamily: 'Outfit, sans-serif',
              }}
              onMouseEnter={e => { if (activeTab !== tab) e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; }}
              onMouseLeave={e => { if (activeTab !== tab) e.currentTarget.style.color = 'rgba(255,255,255,0.35)'; }}
            >
              {tab === 'windows' ? '🪟 Windows' : '🚪 Doors'}
            </button>
          ))}
        </div>
      </section>

      {/* ---- WINDOWS SECTION ---- */}
      {activeTab === 'windows' && (
        <>
          {/* Intro strip */}
          <section style={{ background: '#141414', padding: '56px 52px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
              <div>
                <p style={{ fontSize: '10px', letterSpacing: '0.25em', color: GOLD, fontWeight: 600, textTransform: 'uppercase', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ width: '24px', height: '1px', background: GOLD, display: 'inline-block' }} />
                  Windows Collection
                </p>
                <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 900, letterSpacing: '-0.02em', textTransform: 'uppercase', color: WHITE, lineHeight: 1.1 }}>
                  Eight Styles.<br />One Standard of Excellence.
                </h2>
              </div>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.42)', lineHeight: 1.85 }}>
                From classic casement to contemporary glass-to-glass — every ClearVista window is precision-engineered with multi-chamber uPVC profiles, triple weatherseal and premium double-glazed units. Choose the style that suits your space.
              </p>
            </div>
          </section>

          {/* Stats */}
          <section style={{ background: '#0f0f0f' }}>
            <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              {[
                { num: '8+', label: 'Window Styles' },
                { num: '6', label: 'Colour Finishes' },
                { num: '3', label: 'Glass Options' },
                { num: '10yr', label: 'Warranty' },
              ].map((s, i) => (
                <div key={s.label} style={{ padding: '36px 32px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                  <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.2rem', fontWeight: 900, color: GOLD, lineHeight: 1 }}>{s.num}</p>
                  <p style={{ fontSize: '10px', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', fontWeight: 600, marginTop: '8px' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Products */}
          <section style={{ display: 'flex', flexDirection: 'column', gap: '3px', padding: '3px 0' }}>
            {WINDOWS.map((w, i) => (
              <ProductCard key={w.name} item={w} index={i} theme="dark" />
            ))}
          </section>
        </>
      )}

      {/* ---- DOORS SECTION ---- */}
      {activeTab === 'doors' && (
        <>
          {/* Intro strip */}
          <section style={{ background: LIGHT, padding: '56px 52px', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
            <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
              <div>
                <p style={{ fontSize: '10px', letterSpacing: '0.25em', color: '#999', fontWeight: 600, textTransform: 'uppercase', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ width: '24px', height: '1px', background: '#999', display: 'inline-block' }} />
                  Doors Collection
                </p>
                <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 900, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#1a1a1a', lineHeight: 1.1 }}>
                  Six Doors.<br />One Statement Entrance.
                </h2>
              </div>
              <p style={{ fontSize: '14px', color: '#777', lineHeight: 1.85 }}>
                Our uPVC door range combines security, style and thermal performance in one premium package. From sweeping bi-fold walls to elegant French doors — every door is designed to make an entrance.
              </p>
            </div>
          </section>

          {/* Stats */}
          <section style={{ background: '#ebe6de' }}>
            <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
              {[
                { num: '6+', label: 'Door Styles' },
                { num: '5', label: 'Security Points' },
                { num: '6', label: 'Colour Finishes' },
                { num: '10yr', label: 'Warranty' },
              ].map((s, i) => (
                <div key={s.label} style={{ padding: '36px 32px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
                  <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.2rem', fontWeight: 900, color: '#1a1a1a', lineHeight: 1 }}>{s.num}</p>
                  <p style={{ fontSize: '10px', letterSpacing: '0.15em', color: '#999', textTransform: 'uppercase', fontWeight: 600, marginTop: '8px' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Products */}
          <section style={{ background: LIGHT, display: 'flex', flexDirection: 'column', gap: '3px', padding: '3px 0' }}>
            {DOORS.map((d, i) => (
              <ProductCard key={d.name} item={d} index={i} theme="light" />
            ))}
          </section>
        </>
      )}

      {/* ---- BOTTOM CTA ---- */}
      <section style={{ position: 'relative', padding: '100px 52px', overflow: 'hidden' }}>
        <Image src="/footer_cta_bg.jpg" alt="Get a Quote" fill style={{ objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.55) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1440px', margin: '0 auto' }}>
          <p style={{ fontSize: '9px', letterSpacing: '0.3em', color: GOLD, fontWeight: 600, textTransform: 'uppercase', marginBottom: '16px' }}>Let's Begin</p>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.02em', textTransform: 'uppercase', color: WHITE, lineHeight: 1.05, marginBottom: '20px', maxWidth: '560px' }}>
            Found Your Perfect Window or Door?
          </h2>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', maxWidth: '420px', lineHeight: 1.8, marginBottom: '40px', fontWeight: 300 }}>
            Talk to our experts. Get a free home visit, measurement and quote.
          </p>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', padding: '14px 32px', border: '1px solid rgba(255,255,255,0.4)', color: WHITE, fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = DARK; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.color = WHITE; }}>
            Request a Free Quote
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none"><path d="M1 5H19M14 1L19 5L14 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
          </Link>
        </div>
      </section>

    </main>
  );
}
