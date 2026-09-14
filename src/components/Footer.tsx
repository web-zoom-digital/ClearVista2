'use client';
import Link from 'next/link';

export default function Footer() {
  const GOLD = '#c8a96e';

  const cols = {
    Products: ['Casement Windows', 'Sliding Windows', 'Bay Windows', 'Tilt & Turn', 'Villa Windows', 'Corner Windows'],
    Company: ['About Us', 'Technology', 'Gallery', 'Inspiration', 'Blog'],
    Support: ['Installation', 'Consultation', 'After Sales', 'Warranty', 'Contact Us'],
  };

  return (
    <footer style={{ background: '#060606', borderTop: '1px solid rgba(200,169,110,0.1)', overflowX: 'hidden' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '52px 20px 28px' }}>
        {/* Top grid */}
        <div className="footer-grid">
          {/* Brand column */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{ marginBottom: '10px' }}>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '17px', fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'white', display: 'block' }}>CLEARVISTA</span>
              <span style={{ fontSize: '7.5px', letterSpacing: '0.22em', color: GOLD, fontWeight: 400, textTransform: 'uppercase' }}>Windows to a Brighter Tomorrow</span>
            </div>
            <p style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.38)', lineHeight: 1.75, maxWidth: '280px', marginTop: '14px' }}>
              Premium uPVC windows engineered for Indian conditions. Designed for a better everyday.
            </p>
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              {['IG', 'FB', 'YT', 'LI'].map(s => (
                <a key={s} href="#" style={{ width: '32px', height: '32px', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'all 0.2s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; }}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="footer-links-grid">
            {Object.entries(cols).map(([title, links]) => (
              <div key={title}>
                <h4 style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.22em', color: GOLD, textTransform: 'uppercase', marginBottom: '16px' }}>
                  {title}
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {links.map(link => (
                    <li key={link}>
                      <a href="#" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.38)', textDecoration: 'none', transition: 'color 0.2s ease', letterSpacing: '0.01em' }}
                        onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; }}
                        onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.38)'; }}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom-bar" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.22)', letterSpacing: '0.02em' }}>
            © 2026 ClearVista. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {['Privacy Policy', 'Terms of Use', 'Sitemap'].map(l => (
              <a key={l} href="#" style={{ fontSize: '10px', color: 'rgba(255,255,255,0.22)', textDecoration: 'none', letterSpacing: '0.05em' }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
