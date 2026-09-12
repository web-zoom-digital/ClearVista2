'use client';
import Image from 'next/image';
import Link from 'next/link';


const galleryItems = [
  { img: '/gallery_homes.jpg', label: 'Modern Villa, Mumbai', cat: 'Homes' },
  { img: '/gallery_office.jpg', label: 'Corporate HQ, Bangalore', cat: 'Offices' },
  { img: '/gallery_commercial.jpg', label: 'Commercial Tower, Pune', cat: 'Commercial' },
  { img: '/hero_interior.jpg', label: 'Luxury Residence, Delhi', cat: 'Homes' },
  { img: '/lifestyle_interior.jpg', label: 'Master Suite, Chennai', cat: 'Homes' },
  { img: '/gallery_homes.jpg', label: 'Tech Office, Hyderabad', cat: 'Offices' },
];

export default function GalleryPage() {
  return (
    <main style={{ background: '#0a0a0a', minHeight: '100vh', paddingTop: '72px' }}>
      <section style={{ background: '#141414', padding: '80px 48px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#c8a96e', fontWeight: 600, textTransform: 'uppercase', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '28px', height: '1px', background: '#c8a96e', display: 'inline-block' }} />
            Real Spaces
          </p>
          <h1 style={{ fontFamily: 'Outfit', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.02em', textTransform: 'uppercase', color: 'white', marginBottom: '20px' }}>
            Real Spaces.<br />Real Stories.
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.45)', maxWidth: '560px', lineHeight: 1.8 }}>
            See how ClearVista windows transform homes, offices and commercial spaces across India.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 48px', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3px' }}>
          {galleryItems.map((item, i) => (
            <div key={i} style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', aspectRatio: i % 5 === 0 ? '1' : '4/3' }}
              onMouseEnter={(e) => {
                (e.currentTarget.querySelector('img') as HTMLElement).style.transform = 'scale(1.07)';
                (e.currentTarget.querySelector('.label') as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget.querySelector('.label') as HTMLElement).style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget.querySelector('img') as HTMLElement).style.transform = 'scale(1)';
                (e.currentTarget.querySelector('.label') as HTMLElement).style.transform = 'translateY(10px)';
                (e.currentTarget.querySelector('.label') as HTMLElement).style.opacity = '0';
              }}
            >
              <Image src={item.img} alt={item.label} fill style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)' }} />
              <div className="label" style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', opacity: 0, transform: 'translateY(10px)', transition: 'all 0.4s ease' }}>
                <p style={{ fontSize: '10px', color: '#c8a96e', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '4px' }}>{item.cat}</p>
                <p style={{ fontSize: '14px', color: 'white', fontWeight: 700 }}>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: '#141414', padding: '80px 48px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Outfit', fontSize: '2rem', fontWeight: 900, textTransform: 'uppercase', color: 'white', marginBottom: '16px' }}>
          Your Home, Next.
        </h2>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)', marginBottom: '32px' }}>Let us transform your space with premium ClearVista windows.</p>
        <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '16px 36px', background: '#c8a96e', color: '#0a0a0a', fontSize: '12px', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none' }}>
          Request a Quote →
        </Link>
      </section>
    </main>
  );
}
