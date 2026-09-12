'use client';
import Image from 'next/image';
import Link from 'next/link';


const stats = [
  { number: '10,000+', label: 'Happy Homes' },
  { number: '15+', label: 'Years Experience' },
  { number: '50+', label: 'Cities Served' },
  { number: '99%', label: 'Customer Satisfaction' },
];

export default function AboutPage() {
  return (
    <main style={{ background: '#0a0a0a', minHeight: '100vh', paddingTop: '72px' }}>
      {/* Hero */}
      <section style={{ position: 'relative', height: '65vh', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', background: '#050505' }}>
        <Image src="/about_hero_new.jpg" alt="About ClearVista" fill priority style={{ objectFit: 'cover', objectPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1400px', margin: '0 auto', width: '100%', padding: '0 48px 64px' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#c8a96e', fontWeight: 600, textTransform: 'uppercase', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '28px', height: '1px', background: '#c8a96e', display: 'inline-block' }} />
            Our Story
          </p>
          <h1 style={{ fontFamily: 'Outfit', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.02em', textTransform: 'uppercase', color: 'white' }}>
            Windows to a<br />Brighter Tomorrow
          </h1>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: '#141414', padding: '0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{ padding: '50px 40px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
              <p style={{ fontFamily: 'Outfit', fontSize: '2.5rem', fontWeight: 900, color: '#c8a96e', marginBottom: '8px' }}>{s.number}</p>
              <p style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', fontWeight: 600 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section style={{ padding: '100px 48px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#c8a96e', fontWeight: 600, textTransform: 'uppercase', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ width: '28px', height: '1px', background: '#c8a96e', display: 'inline-block' }} />
              Our Mission
            </p>
            <h2 style={{ fontFamily: 'Outfit', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 900, letterSpacing: '-0.02em', textTransform: 'uppercase', color: 'white', lineHeight: 1.1, marginBottom: '28px' }}>
              Engineering Light Into Every Home
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.9, marginBottom: '20px' }}>
              At ClearVista, we believe every home deserves the best in light, air and quiet. Founded with a passion for precision engineering and beautiful design, we craft uPVC windows that transform ordinary spaces into extraordinary living experiences.
            </p>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.9, marginBottom: '36px' }}>
              Our windows are specifically engineered for Indian conditions — extreme heat, monsoon rains, and coastal humidity — without compromising on aesthetics or comfort.
            </p>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 28px', background: '#c8a96e', color: '#0a0a0a', fontSize: '11px', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Get in Touch →
            </Link>
          </div>
          <div style={{ position: 'relative', height: '500px' }}>
            <Image src="/lifestyle_interior.jpg" alt="ClearVista Mission" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>
    </main>
  );
}
