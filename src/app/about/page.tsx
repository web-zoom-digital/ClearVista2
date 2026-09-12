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
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '85vh', background: '#050505' }}>
        {/* Left: Poster Image */}
        <div style={{ position: 'relative', height: '100%' }}>
          <Image src="/hero_main.jpg" alt="About ClearVista" fill priority style={{ objectFit: 'contain', padding: '32px' }} />
        </div>
        {/* Right: Simulated Video Cover */}
        <div style={{ position: 'relative', height: '100%', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
          <Image src="/about_video_cover.jpg" alt="ClearVista Brand Video" fill priority style={{ objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.3)', transition: 'background 0.3s' }}>
            <div style={{ width: '84px', height: '84px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.3)', cursor: 'pointer', transition: 'transform 0.3s' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white" style={{ marginLeft: '4px' }}><path d="M5 3l14 9-14 9V3z"/></svg>
            </div>
          </div>
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
