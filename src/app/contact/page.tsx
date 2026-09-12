'use client';
import { useState } from 'react';
import type { Metadata } from 'next';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', message: '', type: 'Casement Windows' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: 'white',
    fontSize: '14px',
    fontFamily: 'Outfit, sans-serif',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  };

  const labelStyle = {
    fontSize: '10px',
    fontWeight: 700,
    letterSpacing: '0.2em',
    textTransform: 'uppercase' as const,
    color: 'rgba(255,255,255,0.4)',
    display: 'block',
    marginBottom: '8px',
  };

  return (
    <main style={{ background: '#0a0a0a', minHeight: '100vh', paddingTop: '72px' }}>
      <section style={{ background: '#141414', padding: '80px 48px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#c8a96e', fontWeight: 600, textTransform: 'uppercase', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '28px', height: '1px', background: '#c8a96e', display: 'inline-block' }} />
            Get in Touch
          </p>
          <h1 style={{ fontFamily: 'Outfit', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.02em', textTransform: 'uppercase', color: 'white', marginBottom: '20px' }}>
            Request a Quote
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.45)', maxWidth: '560px', lineHeight: 1.8 }}>
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 48px', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px' }}>
          {/* Contact Info */}
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'white', marginBottom: '36px' }}>Contact Info</h2>
            {[
              { label: 'Address', value: '123, ClearVista Tower, MG Road, Bangalore 560001' },
              { label: 'Phone', value: '+91 98765 43210' },
              { label: 'Email', value: 'hello@clearvista.in' },
              { label: 'Hours', value: 'Mon–Sat, 9am – 6pm' },
            ].map((item) => (
              <div key={item.label} style={{ marginBottom: '28px', paddingBottom: '28px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <p style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#c8a96e', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>{item.label}</p>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{item.value}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          {submitted ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '400px', textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '24px' }}>✓</div>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#c8a96e', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>Thank You!</h2>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)' }}>We've received your request and will contact you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input required style={inputStyle} placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onFocus={(e) => { e.target.style.borderColor = '#c8a96e'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email Address *</label>
                  <input required type="email" style={inputStyle} placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onFocus={(e) => { e.target.style.borderColor = '#c8a96e'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                  />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={labelStyle}>Phone Number</label>
                  <input style={inputStyle} placeholder="+91 98765 43210" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    onFocus={(e) => { e.target.style.borderColor = '#c8a96e'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>City</label>
                  <input style={inputStyle} placeholder="Your city" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })}
                    onFocus={(e) => { e.target.style.borderColor = '#c8a96e'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                  />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Window Type</label>
                <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
                  {['Casement Windows', 'Sliding Windows', 'Bay Windows', 'Tilt & Turn', 'Villa Windows', 'Corner Windows', 'Glass-to-Glass', 'Fixed Windows', 'Not Sure Yet'].map((t) => (
                    <option key={t} value={t} style={{ background: '#141414' }}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Message</label>
                <textarea style={{ ...inputStyle, height: '140px', resize: 'vertical' }} placeholder="Tell us about your project, dimensions, requirements..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  onFocus={(e) => { e.target.style.borderColor = '#c8a96e'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                />
              </div>
              <button type="submit" style={{ alignSelf: 'flex-start', padding: '16px 40px', background: '#c8a96e', color: '#0a0a0a', fontSize: '12px', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#d4ba8a'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#c8a96e'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Send Request →
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
