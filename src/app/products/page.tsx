'use client';
import Image from 'next/image';
import Link from 'next/link';


const products = [
  { name: 'Casement Windows', desc: 'Classic, versatile and timeless. Our most popular window — opens outward for maximum ventilation.', img: '/window_casement.jpg', features: ['Multi-point locking', 'Double glazed', 'Weather resistant seals'] },
  { name: 'Sliding Windows', desc: 'Smooth horizontal glide with panoramic views. Perfect for large openings with limited space.', img: '/window_sliding.jpg', features: ['Silent glide tracks', 'Insect mesh option', 'Easy clean design'] },
  { name: 'Bay Windows', desc: 'Project outward to create a bay of light. Adds architectural character and expands your view.', img: '/window_casement.jpg', features: ['Custom angles', 'Enhanced light', 'Thermal efficiency'] },
  { name: 'Tilt & Turn Windows', desc: 'Tilt inward for ventilation or open fully for easy cleaning. The ultimate in European design.', img: '/window_sliding.jpg', features: ['2-in-1 functionality', 'Secure ventilation', 'Child safety option'] },
  { name: 'Villa Windows', desc: 'Designed for larger spaces with an elegant Georgian bar finish. Perfect for villas and bungalows.', img: '/window_casement.jpg', features: ['Georgian bar design', 'Large format glass', 'Heritage aesthetics'] },
  { name: 'Corner Windows', desc: 'Wrap-around glass at corners for an uninterrupted panoramic view with no central post.', img: '/window_sliding.jpg', features: ['No central mullion', '180° panoramic view', 'Structural precision'] },
  { name: 'Glass-to-Glass', desc: 'Minimal frame, maximum glass. A seamless, ultra-modern aesthetic for contemporary spaces.', img: '/window_casement.jpg', features: ['Minimal sightlines', 'Structural glass', 'Ultra-modern look'] },
  { name: 'Fixed Windows', desc: 'Non-opening windows for light, view and thermal performance. Maximum glass area.', img: '/window_sliding.jpg', features: ['Maximum glazing area', 'Superior thermal', 'Acoustic performance'] },
];

export default function ProductsPage() {
  return (
    <main style={{ background: '#0a0a0a', minHeight: '100vh', paddingTop: '72px' }}>
      {/* Hero */}
      <section style={{ background: '#141414', padding: '80px 48px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#c8a96e', fontWeight: 600, textTransform: 'uppercase', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '28px', height: '1px', background: '#c8a96e', display: 'inline-block' }} />
            Our Products
          </p>
          <h1 style={{ fontFamily: 'Outfit', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.02em', textTransform: 'uppercase', color: 'white', marginBottom: '20px' }}>
            The Window Collection
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.45)', maxWidth: '560px', lineHeight: 1.8 }}>
            Eight distinct window types. One promise — clarity, comfort and enduring quality.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section style={{ padding: '80px 48px', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '3px' }}>
          {products.map((p, i) => (
            <div key={p.name} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: i % 2 === 0 ? '#141414' : '#0f0f0f', overflow: 'hidden', transition: 'transform 0.3s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.01)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            >
              <div style={{ position: 'relative', height: '280px' }}>
                <Image src={p.img} alt={p.name} fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h2 style={{ fontSize: '16px', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'white', marginBottom: '12px' }}>{p.name}</h2>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: '20px' }}>{p.desc}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                  {p.features.map((f) => (
                    <li key={f} style={{ fontSize: '12px', color: '#c8a96e', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ width: '4px', height: '4px', background: '#c8a96e', borderRadius: '50%', flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#c8a96e'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
                >
                  Get Quote →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
