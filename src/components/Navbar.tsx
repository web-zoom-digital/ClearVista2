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
    { label: 'Inspiration', href: '/gallery' },
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
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 52px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>

        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
          <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '17px', fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'white' }}>
            CLEARVISTA
          </span>
          <span style={{ fontSize: '7.5px', letterSpacing: '0.25em', color: GOLD, fontWeight: 400, textTransform: 'uppercase' }}>
            Windows to a Brighter Tomorrow
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }} className="hidden lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.65)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.95)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* GET A QUOTE button (outline style) */}
        <div className="hidden lg:flex">
          <Link
            href="/contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '9px 20px',
              border: '1px solid rgba(255,255,255,0.35)',
              color: 'rgba(255,255,255,0.85)',
              fontSize: '10px', fontWeight: 700, letterSpacing: '0.13em', textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'; e.currentTarget.style.color = 'rgba(255,255,255,0.85)'; }}
          >
            Get a Quote →
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'flex', flexDirection: 'column', gap: '5px', padding: '8px', background: 'none', border: 'none', cursor: 'pointer' }}
          className="flex lg:hidden"
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              display: 'block', width: '22px', height: '1.5px',
              background: menuOpen && i !== 1 ? GOLD : i === 1 && menuOpen ? 'transparent' : 'white',
              transition: 'all 0.3s ease',
              transform: menuOpen && i === 0 ? 'rotate(45deg) translateY(6.5px)' : menuOpen && i === 2 ? 'rotate(-45deg) translateY(-6.5px)' : 'none',
            }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: 'rgba(8,8,8,0.98)', padding: '16px 52px 28px', borderTop: '1px solid rgba(200,169,110,0.12)' }}>
          {navLinks.map(link => (
            <Link key={link.label} href={link.href} onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '12px 0', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)} style={{ display: 'inline-flex', marginTop: '20px', padding: '11px 26px', border: '1px solid rgba(255,255,255,0.3)', color: 'white', fontSize: '10px', fontWeight: 700, letterSpacing: '0.13em', textTransform: 'uppercase', textDecoration: 'none' }}>
            Get a Quote →
          </Link>
        </div>
      )}
    </nav>
  );
}
