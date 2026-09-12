'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef, ReactNode } from 'react';

/* ================================================================
   DESIGN TOKENS
   ================================================================ */
const G = '#c8a96e';   // gold
const D = '#0a0a0a';   // dark bg
const W = '#ffffff';   // white

/* ================================================================
   FADE-UP ANIMATION HOOK
   ================================================================ */
function useFadeUp(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function FadeUp({ children, delay = 0, style = {} }: { children: ReactNode; delay?: number; style?: React.CSSProperties }) {
  const { ref, visible } = useFadeUp();
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(32px)', transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`, ...style }}>
      {children}
    </div>
  );
}

/* ================================================================
   PRODUCT DATA — 10 Products, each with unique image
   ================================================================ */
const PRODUCTS = [
  {
    id: '01',
    name: 'Casement Windows',
    tagline: 'Classic ventilation. Timeless design.',
    desc: 'The most versatile window in our range. Opens outward on a side hinge for maximum ventilation and unobstructed sightlines. Built to the same exacting standards as our entire system.',
    features: ['Multi-point security lock', 'Triple EPDM weatherseal', 'Double or triple glazing', 'Airtight European profile'],
    img: '/win_casement_view.jpg',
    category: 'windows',
  },
  {
    id: '02',
    name: 'Sliding Windows',
    tagline: 'Panoramic views. Effortless motion.',
    desc: 'Engineered for large openings where outward swing is not an option. Precision stainless-steel tracks and anti-lift pins deliver smooth, silent operation year after year.',
    features: ['Silent stainless-steel tracks', 'Anti-lift security pins', 'Full-width insect mesh', 'Easy-clean tilt sash'],
    img: '/win_sliding_view.jpg',
    category: 'windows',
  },
  {
    id: '03',
    name: 'Tilt & Turn Windows',
    tagline: 'Two positions. One intelligent system.',
    desc: 'A European innovation — tilt inward from the top for safe, controlled ventilation; turn fully open like a casement for easy cleaning and unrestricted air flow.',
    features: ['Tilt + full-turn mechanism', 'Childproof restrictors', 'Interior-accessible glazing', 'Ideal for upper floors'],
    img: '/win_tiltturn.jpg',
    category: 'windows',
  },
  {
    id: '04',
    name: 'Bay Windows',
    tagline: 'Expand your walls. Multiply your light.',
    desc: 'Projects outward from the facade to create an architectural bay. Floods the interior with light from three directions and adds visual depth to any elevation.',
    features: ['30°, 45° or 90° bay angles', 'Integral bay pole or board', 'Custom window seat option', 'Structural steel reinforcement'],
    img: '/win_bay_view.jpg',
    category: 'windows',
  },
  {
    id: '05',
    name: 'Villa / Large Windows',
    tagline: 'Scale and grandeur. Engineered for it.',
    desc: 'Designed for generous openings in villas, farmhouses and high-ceiling spaces. Georgian bar or heritage leaded details available. Maximum glass area with minimum visual intrusion.',
    features: ['Georgian or leaded bar options', 'Large-format glass panels', 'Heritage home aesthetic', 'Class 4 wind resistance'],
    img: '/hero_interior.jpg',
    category: 'windows',
  },
  {
    id: '06',
    name: 'Combination Windows',
    tagline: 'Fixed and operable. One unified frame.',
    desc: 'Blends fixed lights with casement or sliding sashes in a single, integrated frame. Ideal for architectural elevations that demand custom configurations.',
    features: ['Custom fixed + operable mix', 'Single integrated profile', 'Maximum design flexibility', 'Flush exterior face'],
    img: '/gallery_homes.jpg',
    category: 'windows',
  },
  {
    id: '07',
    name: 'Corner Windows',
    tagline: 'No post. No limits. Pure panorama.',
    desc: 'Structural glass-to-glass corner system with no central mullion. The corner itself becomes the view — an engineering feat that redefines the boundary between inside and outside.',
    features: ['Zero central corner post', '180° uninterrupted view', 'Structural glass engineering', 'Precision CNC machined hardware'],
    img: '/gallery_office.jpg',
    category: 'windows',
  },
  {
    id: '08',
    name: 'Glass-to-Glass Windows',
    tagline: 'Minimum frame. Maximum clarity.',
    desc: 'Ultra-slim profiles that disappear against the glazing. The architecture speaks; the window listens. Maximum glass area, minimal sightlines, maximum transparency.',
    features: ['Ultra-slim sightlines', 'Max solar gain option', 'Structural glass system', 'Floor-to-ceiling possible'],
    img: '/lifestyle_interior.jpg',
    category: 'windows',
  },
  {
    id: '09',
    name: 'Sliding Patio Doors',
    tagline: 'Open the wall. Invite the outside in.',
    desc: 'Large-format sliding door systems that dissolve the boundary between interior and exterior. Multi-panel configurations glide silently behind each other to create a completely unobstructed opening to your garden, terrace or balcony.',
    features: ['Ultra-low 15mm threshold', 'Multi-point security lock bar', 'Integrated full-width insect mesh', 'Anti-slam soft-close dampers'],
    img: '/lifestyle_interior.jpg',
    category: 'doors',
  },
  {
    id: '10',
    name: 'Bi-Fold Doors',
    tagline: 'Fold the wall. Frame the outside.',
    desc: 'Our bi-fold door system folds back entirely to create a full-width, seamless opening. When open, it disappears — leaving nothing between your interior and the landscape beyond.',
    features: ['Opens up to 100% clear span', 'Concealed precision roller system', 'Thermally broken aluminium-uPVC hybrid', 'Custom panel configurations: 2 to 7 panels'],
    img: '/hero_interior.jpg',
    category: 'doors',
  },
  {
    id: '11',
    name: 'French / Casement Doors',
    tagline: 'Classic double doors. Enduring elegance.',
    desc: 'Traditional double-leaf doors that open outward or inward with a side hinge. Full-height glass panels flood interiors with light. Available in inward or outward opening configurations for any facade.',
    features: ['Inward or outward opening', 'Full-height double-glazed panels', 'Multi-point 5-lever locking', 'Fly screen option available'],
    img: '/gallery_homes.jpg',
    category: 'doors',
  },
  {
    id: '12',
    name: 'Lift & Slide Doors',
    tagline: 'Effortless. Even at seven metres wide.',
    desc: 'Lift-and-slide technology lifts the door off its seal before sliding, making even the largest heavy-glass panels effortless to operate. Ideal for luxury villas and hotel projects requiring maximum clear-opening widths.',
    features: ['Handles spans up to 7m wide', 'Lift-off-seal before sliding', 'Minimal 20mm sightlines', 'Triple-glazing compatible'],
    img: '/gallery_office.jpg',
    category: 'doors',
  },
  {
    id: '13',
    name: 'Tilt & Turn Doors',
    tagline: 'Secure ventilation. Full access. One door.',
    desc: 'The European tilt-and-turn mechanism adapted for full door height. Tilt from the top for controlled, secure ventilation with the door locked — or swing fully open for unrestricted access.',
    features: ['Tilt-vent + full-turn mechanism', 'Ideal for apartments & balconies', 'RC2 burglar resistance rated', 'Child-safe restrictors included'],
    img: '/gallery_commercial.jpg',
    category: 'doors',
  },
  {
    id: '14',
    name: 'Entrance / Main Doors',
    tagline: 'The first impression. Built to last.',
    desc: 'Solid, secure and architecturally considered. Our entrance door system combines the same multi-chamber uPVC engineering as our windows with a reinforced 70mm profile, heavy-duty hinges and a 5-point security deadlock system.',
    features: ['5-point deadlock security', '70mm reinforced uPVC profile', 'RC2 burglar resistance certified', 'Full-height or half-glazed options'],
    img: '/footer_cta_bg.jpg',
    category: 'doors',
  },
];

/* ================================================================
   PRODUCT SECTION COMPONENT
   ================================================================ */
function ProductSection({ product, index }: { product: typeof PRODUCTS[0]; index: number }) {
  const isEven = index % 2 === 0;
  const [hovered, setHovered] = useState(false);

  return (
    <section
      style={{
        display: 'grid',
        gridTemplateColumns: isEven ? '58% 42%' : '42% 58%',
        minHeight: '580px',
        background: index % 3 === 0 ? D : index % 3 === 1 ? '#0d0d0d' : '#111111',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        overflow: 'hidden',
      }}
    >
      {/* IMAGE SIDE */}
      {isEven ? (
        <>
          {/* Image left */}
          <div
            style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Image
              src={product.img}
              alt={product.name}
              fill
              loading={index < 2 ? 'eager' : 'lazy'}
              style={{
                objectFit: 'cover',
                transform: hovered ? 'scale(1.04)' : 'scale(1)',
                transition: 'transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                filter: hovered ? 'brightness(1.05)' : 'brightness(0.95)',
              }}
            />
            {/* Subtle right fade */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 55%, rgba(10,10,10,0.5) 100%)' }} />
          </div>
          {/* Text right */}
          <ProductText product={product} />
        </>
      ) : (
        <>
          {/* Text left */}
          <ProductText product={product} reverse />
          {/* Image right */}
          <div
            style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Image
              src={product.img}
              alt={product.name}
              fill
              loading="lazy"
              style={{
                objectFit: 'cover',
                transform: hovered ? 'scale(1.04)' : 'scale(1)',
                transition: 'transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                filter: hovered ? 'brightness(1.05)' : 'brightness(0.95)',
              }}
            />
            {/* Subtle left fade */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to left, transparent 55%, rgba(10,10,10,0.5) 100%)' }} />
          </div>
        </>
      )}
    </section>
  );
}

function ProductText({ product, reverse = false }: { product: typeof PRODUCTS[0]; reverse?: boolean }) {
  return (
    <FadeUp delay={100} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 56px', position: 'relative', overflow: 'hidden' }}>
      {/* Large background number */}
      <span style={{
        position: 'absolute',
        top: '-10px',
        right: reverse ? 'auto' : '-10px',
        left: reverse ? '-10px' : 'auto',
        fontSize: '160px',
        fontWeight: 900,
        color: 'rgba(255,255,255,0.025)',
        lineHeight: 1,
        fontFamily: 'Outfit, sans-serif',
        userSelect: 'none',
        letterSpacing: '-0.05em',
      }}>{product.id}</span>

      {/* Category tag */}
      <p style={{ fontSize: '9px', letterSpacing: '0.28em', color: G, fontWeight: 600, textTransform: 'uppercase', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ width: '24px', height: '1px', background: G, display: 'inline-block' }} />
        {product.category === 'windows' ? 'Windows' : 'Doors'}
      </p>

      {/* Product name */}
      <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)', fontWeight: 900, letterSpacing: '-0.02em', textTransform: 'uppercase', color: W, lineHeight: 1.08, marginBottom: '10px' }}>
        {product.name}
      </h2>

      {/* Tagline */}
      <p style={{ fontSize: '13px', color: G, fontWeight: 400, letterSpacing: '0.04em', marginBottom: '22px', fontStyle: 'italic' }}>
        {product.tagline}
      </p>

      {/* Thin gold divider */}
      <div style={{ width: '40px', height: '1px', background: G, marginBottom: '22px', opacity: 0.6 }} />

      {/* Description */}
      <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.42)', lineHeight: 1.85, marginBottom: '30px', maxWidth: '380px' }}>
        {product.desc}
      </p>

      {/* Features */}
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '36px' }}>
        {product.features.map(f => (
          <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '12px', color: 'rgba(255,255,255,0.55)' }}>
            <span style={{ color: G, fontSize: '10px', marginTop: '2px', flexShrink: 0 }}>◆</span>
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Link href="/contact" style={{
          display: 'inline-flex', alignItems: 'center', gap: '10px',
          padding: '11px 24px',
          border: `1px solid ${G}`,
          color: G,
          fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
          textDecoration: 'none', transition: 'all 0.25s ease',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = G; e.currentTarget.style.color = D; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = G; }}>
          Get a Quote →
        </Link>
        <Link href="#advantage" style={{
          display: 'inline-flex', alignItems: 'center', gap: '10px',
          padding: '11px 24px',
          border: '1px solid rgba(255,255,255,0.12)',
          color: 'rgba(255,255,255,0.5)',
          fontSize: '10px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
          textDecoration: 'none', transition: 'all 0.25s ease',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}>
          View Details
        </Link>
      </div>
    </FadeUp>
  );
}

/* ================================================================
   TECHNICAL ADVANTAGE SECTION
   ================================================================ */
const ADV_FEATURES = [
  { title: 'Multi-Chamber Profile', desc: '6-chamber uPVC construction. Exceptional thermal resistance with a U-value below 1.0 W/m²K.' },
  { title: 'Steel Reinforcement', desc: 'Hot-dip galvanised steel core inside every load-bearing profile for dimensional stability.' },
  { title: 'Double Glazing', desc: 'Argon-filled IGUs with warm-edge spacer bars. Drastically reduces heat loss and condensation.' },
  { title: 'Airtight Sealing', desc: 'Three-seal EPDM gasket system — blocks dust, water infiltration and noise at source.' },
  { title: 'Drainage Channels', desc: 'Integrated concealed drainage routes water safely away from the frame interior.' },
  { title: 'Precision Hardware', desc: 'European-standard multi-point locking mechanisms and corrosion-resistant stainless fittings.' },
];

function AdvantageSection({ activeTab }: { activeTab: 'windows' | 'doors' }) {
  const isDoors = activeTab === 'doors';
  return (
    <section id="advantage" style={{ background: '#080808', padding: '0', borderTop: '1px solid rgba(200,169,110,0.1)', borderBottom: '1px solid rgba(200,169,110,0.1)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '55% 45%', minHeight: '680px' }}>

        {/* LEFT: Image — uPVC cutaway for windows, door image for doors */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <Image
            src={isDoors ? '/gallery_homes.jpg' : '/upvc_cutaway.png'}
            alt={isDoors ? 'ClearVista Premium Door Systems' : 'ClearVista uPVC Profile Cross-Section'}
            fill
            loading="lazy"
            style={{
              objectFit: 'cover',
              objectPosition: isDoors ? 'center 30%' : 'center',
              filter: isDoors ? 'brightness(0.6) contrast(1.1)' : 'brightness(0.88) contrast(1.05)',
            }}
          />
          {/* Right edge fade to text */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 50%, rgba(8,8,8,0.85) 100%)' }} />
          {/* Bottom label */}
          <div style={{ position: 'absolute', bottom: '32px', left: '36px' }}>
            <p style={{ fontSize: '9px', letterSpacing: '0.25em', color: 'rgba(200,169,110,0.7)', textTransform: 'uppercase', fontWeight: 600 }}>
              {isDoors ? 'DOOR SYSTEMS — BUILT TO LAST' : 'UPVC PROFILE — CROSS SECTION'}
            </p>
          </div>
          {/* Doors overlay text */}
          {isDoors && (
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', pointerEvents: 'none' }}>
              <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.02em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.08)', lineHeight: 1, whiteSpace: 'nowrap' }}>DOORS</p>
            </div>
          )}
        </div>

        {/* RIGHT: Feature labels */}
        <FadeUp delay={0} style={{ padding: '72px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ fontSize: '9px', letterSpacing: '0.28em', color: G, fontWeight: 600, textTransform: 'uppercase', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '24px', height: '1px', background: G, display: 'inline-block' }} />
            Engineering
          </p>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.8rem, 2.8vw, 2.8rem)', fontWeight: 900, letterSpacing: '-0.02em', textTransform: 'uppercase', color: W, lineHeight: 1.05, marginBottom: '12px' }}>
            The ClearVista<br />Advantage
          </h2>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.8, marginBottom: '44px', maxWidth: '380px' }}>
            {isDoors
              ? 'Every ClearVista door is built on the same engineering platform as our windows. The same profile. The same seals. The same promise.'
              : 'A closer look at what makes our systems perform. Every chamber, seal and fitting is chosen for a reason.'}
          </p>

          {/* Feature list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {ADV_FEATURES.map((f, i) => (
              <FadeUp key={f.title} delay={i * 80} style={{ display: 'flex', gap: '18px', padding: '18px 0', borderBottom: i < ADV_FEATURES.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                <span style={{ color: G, fontSize: '10px', fontWeight: 700, flexShrink: 0, marginTop: '3px', letterSpacing: '0.05em' }}>0{i + 1}</span>
                <div>
                  <h4 style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', marginBottom: '5px' }}>{f.title}</h4>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.38)', lineHeight: 1.65 }}>{f.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ================================================================
   HERO SECTION
   ================================================================ */
function ProductHero({ activeTab, setActiveTab }: { activeTab: 'windows' | 'doors'; setActiveTab: (t: 'windows' | 'doors') => void }) {
  return (
    <>
      <section style={{ position: 'relative', height: '55vh', minHeight: '440px', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
        <Image src="/hero_interior.jpg" alt="ClearVista Windows and Doors" fill priority style={{ objectFit: 'cover', objectPosition: 'center 35%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.2) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 50%)' }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1440px', margin: '0 auto', width: '100%', padding: '0 52px 64px' }}>
          <p style={{ fontSize: '9px', letterSpacing: '0.3em', color: G, fontWeight: 600, textTransform: 'uppercase', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '28px', height: '1px', background: G }} />
            ClearVista Products
          </p>
          <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2.6rem, 5.5vw, 4.5rem)', fontWeight: 900, letterSpacing: '-0.025em', textTransform: 'uppercase', color: W, lineHeight: 1.0, marginBottom: '14px' }}>
            Windows &amp;<br />Doors
          </h1>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', fontWeight: 300, maxWidth: '440px', lineHeight: 1.75 }}>
            Ten systems. One standard of excellence. Engineered for Indian climates, designed for global aesthetics.
          </p>
        </div>
      </section>

      {/* Sticky tab bar */}
      <div style={{ background: '#0a0a0a', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'sticky', top: '68px', zIndex: 40, backdropFilter: 'blur(12px)' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 52px', display: 'flex', gap: '0', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex' }}>
            {(['windows', 'doors'] as const).map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{
                padding: '18px 32px',
                fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
                background: 'transparent', border: 'none', cursor: 'pointer',
                color: activeTab === tab ? W : 'rgba(255,255,255,0.3)',
                borderBottom: activeTab === tab ? `1.5px solid ${G}` : '1.5px solid transparent',
                transition: 'all 0.25s ease', fontFamily: 'Outfit, sans-serif',
              }}>
                {tab === 'windows' ? 'Windows — 8 Systems' : 'Doors — 6 Systems'}
              </button>
            ))}
          </div>
          <Link href="/contact" style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: G, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', transition: 'opacity 0.2s ease' }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.7'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}>
            Request a Quote →
          </Link>
        </div>
      </div>
    </>
  );
}

/* ================================================================
   PERFORMANCE STATS STRIP
   ================================================================ */
function StatsStrip({ type }: { type: 'windows' | 'doors' }) {
  const stats = type === 'windows'
    ? [{ n: '8', l: 'Window Systems' }, { n: '6+', l: 'Colour Finishes' }, { n: 'A+', l: 'Energy Rating' }, { n: '10yr', l: 'Warranty' }]
    : [{ n: '6', l: 'Door Systems' }, { n: '5pt', l: 'Locking Points' }, { n: 'RC2', l: 'Burglar Rating' }, { n: '10yr', l: 'Warranty' }];
  return (
    <div style={{ background: '#0d0d0d', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {stats.map((s, i) => (
          <div key={s.l} style={{ padding: '28px 32px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
            <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.8rem', fontWeight: 900, color: G, lineHeight: 1, marginBottom: '6px' }}>{s.n}</p>
            <p style={{ fontSize: '9px', letterSpacing: '0.16em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', fontWeight: 600 }}>{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================================================================
   BOTTOM CTA
   ================================================================ */
function BottomCTA() {
  return (
    <section style={{ position: 'relative', padding: '110px 52px', overflow: 'hidden', minHeight: '460px', display: 'flex', alignItems: 'center' }}>
      <Image src="/footer_cta_bg.jpg" alt="Request a Quote" fill style={{ objectFit: 'cover', objectPosition: 'center 40%', filter: 'brightness(0.5)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.65) 55%, rgba(0,0,0,0.3) 100%)' }} />
      <FadeUp style={{ position: 'relative', zIndex: 2, maxWidth: '1440px', margin: '0 auto', width: '100%' }}>
        <p style={{ fontSize: '9px', letterSpacing: '0.3em', color: G, fontWeight: 600, textTransform: 'uppercase', marginBottom: '18px' }}>Start Your Project</p>
        <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2rem, 4vw, 3.6rem)', fontWeight: 900, letterSpacing: '-0.025em', textTransform: 'uppercase', color: W, lineHeight: 1.0, marginBottom: '20px', maxWidth: '600px' }}>
          Found Your Perfect System?
        </h2>
        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', maxWidth: '420px', lineHeight: 1.8, marginBottom: '40px', fontWeight: 300 }}>
          Our team will visit your site, take measurements and deliver a detailed, no-obligation quote within 48 hours.
        </p>
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', padding: '14px 32px', background: G, color: D, fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#d4ba8a'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = G; e.currentTarget.style.transform = 'translateY(0)'; }}>
            Request a Free Quote
            <svg width="18" height="9" viewBox="0 0 18 9" fill="none"><path d="M1 4.5H17M12 1L17 4.5L12 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
          </Link>
          <Link href="/gallery" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 28px', border: '1px solid rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.7)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.25s ease' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.color = W; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}>
            View Gallery
          </Link>
        </div>
      </FadeUp>
    </section>
  );
}

/* ================================================================
   SECTION INTRO
   ================================================================ */
function SectionIntro({ type }: { type: 'windows' | 'doors' }) {
  return (
    <FadeUp style={{ padding: '64px 52px 48px', maxWidth: '1440px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'end' }}>
        <div>
          <p style={{ fontSize: '9px', letterSpacing: '0.28em', color: G, fontWeight: 600, textTransform: 'uppercase', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '24px', height: '1px', background: G }} />
            {type === 'windows' ? 'Window Systems' : 'Door Systems'}
          </p>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 900, letterSpacing: '-0.02em', textTransform: 'uppercase', color: W, lineHeight: 1.08 }}>
            {type === 'windows' ? 'Eight systems.\nOne standard of excellence.' : 'Six systems.\nOne standard of security.'}
          </h2>
        </div>
        <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.38)', lineHeight: 1.9 }}>
          {type === 'windows'
            ? 'Every ClearVista window is manufactured from premium European multi-chamber uPVC profiles with steel reinforcement, argon-filled double glazing and a three-seal system. Available in six colour finishes.'
            : 'Six door systems, built on the same multi-chamber uPVC engineering as our windows. Sliding, bi-fold, French, lift-and-slide, tilt-and-turn, and entrance — each delivering premium security, thermal performance and low-maintenance operation.'}
        </p>
      </div>
    </FadeUp>
  );
}

/* ================================================================
   MAIN PAGE
   ================================================================ */
export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState<'windows' | 'doors'>('windows');
  const filtered = PRODUCTS.filter(p => p.category === activeTab);

  return (
    <main style={{ background: D, minHeight: '100vh', paddingTop: '68px' }}>
      <ProductHero activeTab={activeTab} setActiveTab={setActiveTab} />
      <StatsStrip type={activeTab} />
      <div style={{ background: D }}>
        <SectionIntro type={activeTab} />
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          {filtered.map((product, i) => (
            <ProductSection key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
      <AdvantageSection activeTab={activeTab} />
      <BottomCTA />
    </main>
  );
}
