'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Spaces', href: '/gallery' },
    { label: 'Technology', href: '/#advantage' },
    { label: 'About', href: '/about' },
    { label: 'Stories', href: '/#testimonials' },
  ];

  const GOLD = '#c8a96e';

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'background 0.4s ease, border-color 0.4s ease',
        background: scrolled ? 'rgba(8,8,8,0.97)' : 'rgba(8,8,8,0.22)',
        backdropFilter: scrolled ? 'blur(24px)' : 'blur(8px)',
        WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'blur(8px)',
        borderBottom: scrolled ? '1px solid rgba(200,169,110,0.12)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
          <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '16px', fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'white' }}>
            CLEARVISTA
          </span>
          <span style={{ fontSize: '7px', letterSpacing: '0.2em', color: GOLD, fontWeight: 400, textTransform: 'uppercase' }}>
            Windows to a Brighter Tomorrow
          </span>
        </Link>

        {/* Desktop Nav Links — uses our custom CSS class */}
        <div className="nav-links-desktop">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontSize: '10px', fontWeight: 600, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)',
                textDecoration: 'none', transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.95)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="nav-cta-desktop">
          <Link
            href="/contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '9px 20px',
              border: '1px solid rgba(255,255,255,0.35)',
              color: 'rgba(255,255,255,0.85)',
              fontSize: '10px', fontWeight: 700, letterSpacing: '0.13em', textTransform: 'uppercase',
              textDecoration: 'none', transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'; e.currentTarget.style.color = 'rgba(255,255,255,0.85)'; }}
          >
            Get a Quote →
          </Link>
        </div>

        {/* Mobile hamburger — uses our custom CSS class */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            flexDirection: 'column', gap: '5px', padding: '8px',
            background: 'none', border: 'none', cursor: 'pointer',
          }}
          aria-label="Toggle navigation menu"
        >
          <span style={{
            display: 'block', width: '24px', height: '1.5px',
            background: menuOpen ? GOLD : 'white',
            transition: 'all 0.3s ease',
            transform: menuOpen ? 'rotate(45deg) translateY(6.5px)' : 'none',
          }} />
          <span style={{
            display: 'block', width: '24px', height: '1.5px',
            background: 'white',
            transition: 'all 0.3s ease',
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: 'block', width: '24px', height: '1.5px',
            background: menuOpen ? GOLD : 'white',
            transition: 'all 0.3s ease',
            transform: menuOpen ? 'rotate(-45deg) translateY(-6.5px)' : 'none',
          }} />
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <div style={{
        overflow: 'hidden',
        maxHeight: menuOpen ? '600px' : '0',
        transition: 'max-height 0.35s ease',
        background: 'rgba(5,5,5,0.99)',
        borderTop: menuOpen ? '1px solid rgba(200,169,110,0.12)' : 'none',
      }}>
        <div style={{ padding: '8px 20px 28px' }}>
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '15px 0',
                fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.75)', textDecoration: 'none',
                borderBottom: i < navLinks.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}
            >
              {link.label}
              <span style={{ color: GOLD, fontSize: '12px' }}>→</span>
            </Link>
          ))}
          <div style={{ marginTop: '24px' }}>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '14px 32px',
                background: GOLD, color: '#0a0a0a',
                fontSize: '11px', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Get a Free Quote →
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
