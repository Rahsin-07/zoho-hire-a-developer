'use client'

import { useEffect, useRef, useState } from 'react'

const CSS = `
  @keyframes heroRise {
    from { opacity: 0; transform: translateY(18px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes badgePulse {
    0%, 100% {
      box-shadow: 0 8px 24px rgba(0,0,0,0.06), 0 0 0 0 rgba(37,99,235,0.35);
    }
    50% {
      box-shadow: 0 8px 24px rgba(0,0,0,0.06), 0 0 0 10px rgba(37,99,235,0);
    }
  }
  @keyframes heroGradShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  @keyframes starPop {
    0% { transform: scale(0.6); opacity: 0; }
    70% { transform: scale(1.15); }
    100% { transform: scale(1); opacity: 1; }
  }

  .hero-rise-1 { animation: heroRise 0.7s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 0.05s; }
  .hero-rise-2 { animation: heroRise 0.7s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 0.18s; }
  .hero-rise-3 { animation: heroRise 0.7s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 0.31s; }
  .hero-rise-4 { animation: heroRise 0.7s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 0.44s; }
  .hero-rise-5 { animation: heroRise 0.7s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 0.57s; }
  .hero-rise-6 { animation: heroRise 0.7s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 0.68s; }
  .hero-rise-7 { animation: heroRise 0.7s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 0.80s; }

  .contact-btn {
    display: inline-flex;
    align-items: center;
    padding: 7px 16px;
    border-radius: 10px;
    font-family: Inter, sans-serif;
    font-size: 0.82rem;
    font-weight: 600;
    text-decoration: none;
    border: 1.5px solid rgba(15,23,42,0.1);
    background: #fff;
    color: #374151;
    cursor: pointer;
    transition: all 0.22s cubic-bezier(0.22,1,0.36,1);
    white-space: nowrap;
    letter-spacing: 0.1px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.06);
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
    outline: none;
  }
  .contact-btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    border-color: rgba(37,99,235,0.22);
    color: #1d4ed8;
  }
  .contact-btn-whatsapp {
    background: #f0fdf4;
    border-color: rgba(16,185,129,0.28);
    color: #059669;
  }
  .contact-btn-whatsapp:hover {
    background: #dcfce7;
    border-color: rgba(16,185,129,0.45);
    box-shadow: 0 4px 12px rgba(16,185,129,0.12);
    color: #047857;
  }
  .star-anim { animation: starPop 0.4s cubic-bezier(0.22,1,0.36,1) both; }
  .star-anim:nth-child(1) { animation-delay: 0.72s; }
  .star-anim:nth-child(2) { animation-delay: 0.80s; }
  .star-anim:nth-child(3) { animation-delay: 0.88s; }
  .star-anim:nth-child(4) { animation-delay: 0.96s; }
  .star-anim:nth-child(5) { animation-delay: 1.04s; }

  .stats-card {
    background: rgba(255,255,255,0.85);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,0.9);
    border-radius: 20px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04);
    padding: 28px 32px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 0;
    flex-wrap: wrap;
    max-width: 90%;
    margin: 0 auto;
  }
  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    flex: 1;
    min-width: 120px;
    position: relative;
    padding: 8px 16px;
  }
  .stat-item:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 40px;
    width: 1px;
    background: rgba(0,0,0,0.08);
    border-radius: 1px;
  }
  .stat-num-wrapper {
    font-family: Inter, sans-serif;
    font-size: clamp(1.6rem, 3vw, 2.2rem);
    font-weight: 800;
    line-height: 1;
    letter-spacing: -1px;
  }
  .stat-label {
    font-family: Inter, sans-serif;
    font-size: 0.78rem;
    font-weight: 600;
    color: #64748b;
    letter-spacing: 0.1px;
    text-align: center;
  }

  /* ─── Static glowing grid ─── */
  .glow-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(to right, rgba(37,99,235,0.12) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(37,99,235,0.12) 1px, transparent 1px);
    background-size: 56px 56px;
    background-position: center center;
    mask-image: radial-gradient(
      ellipse 75% 65% at 50% 50%,
      black 0%,
      black 30%,
      transparent 85%
    );
    -webkit-mask-image: radial-gradient(
      ellipse 75% 65% at 50% 50%,
      black 0%,
      black 30%,
      transparent 85%
    );
    pointer-events: none;
    z-index: 1;
  }

  /* Soft central glow that makes the grid feel luminous */
  .glow-spotlight {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    background: radial-gradient(
      ellipse at center,
      rgba(139,92,246,0.10) 0%,
      rgba(59,130,246,0.08) 25%,
      transparent 65%
    );
    filter: blur(40px);
    pointer-events: none;
    z-index: 1;
  }

  /* Subtle accent dots at grid intersections — gives extra depth */
  .glow-grid-dots {
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle at 1px 1px, rgba(37,99,235,0.18) 1.5px, transparent 0);
    background-size: 56px 56px;
    background-position: center center;
    mask-image: radial-gradient(
      ellipse 60% 50% at 50% 50%,
      black 0%,
      black 20%,
      transparent 75%
    );
    -webkit-mask-image: radial-gradient(
      ellipse 60% 50% at 50% 50%,
      black 0%,
      black 20%,
      transparent 75%
    );
    pointer-events: none;
    z-index: 1;
  }

  .premium-corner {
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
    opacity: 0.55;
    z-index: 0;
  }
  .premium-corner-tl {
    top: -200px;
    left: -200px;
    background: radial-gradient(circle, rgba(99,102,241,0.28) 0%, transparent 70%);
  }
  .premium-corner-br {
    bottom: -200px;
    right: -200px;
    background: radial-gradient(circle, rgba(249,115,22,0.24) 0%, transparent 70%);
  }

  @media (max-width: 768px) {
    .glow-grid,
    .glow-grid-dots {
      background-size: 40px 40px;
    }
  }
  @media (max-width: 600px) {
    .stats-card { padding: 20px 16px; gap: 8px; }
    .stat-item { min-width: 80px; padding: 6px 8px; }
    .stat-item:not(:last-child)::after { height: 30px; }
    .glow-grid,
    .glow-grid-dots {
      background-size: 32px 32px;
    }
  }
`

const stats = [
  { num: 100, suffix: '+', label: 'Projects Delivered' },
  { num: 15, suffix: '+', label: 'Industries Served' },
  { num: 100, suffix: '%', label: 'Client Satisfaction' },
  { num: 14, suffix: '+', label: 'Years Experience' },
]

const avatars = [
  { initials: 'RK', color: '#ef4444' },
  { initials: 'PM', color: '#8b5cf6' },
  { initials: 'SA', color: '#10b981' },
  { initials: 'VN', color: '#f97316' },
  { initials: 'DM', color: '#ec4899' },
]

const contactButtons = [
  { label: 'Call', href: 'tel:+918190009222', primary: false },
  { label: 'WhatsApp', href: 'https://wa.me/918190009222', primary: true },
  { label: 'Email', href: 'mailto:hello@zoflowx.com', primary: false },
  { label: 'Schedule', href: 'https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation', primary: false },
  { label: 'Live Chat', href: '#chat', primary: false },
]

const statColors = [
  'linear-gradient(135deg, #f97316 0%, #ef4444 100%)',
  'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
  'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
  'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
]

export default function Hero() {
  const statsRef = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    if (!document.getElementById('hero-styles')) {
      const el = document.createElement('style')
      el.id = 'hero-styles'
      el.textContent = CSS
      document.head.appendChild(el)
    }
    return () => {
      document.getElementById('hero-styles')?.remove()
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          statsRef.current
            ?.querySelectorAll('.stat-num')
            .forEach((el) => {
              const target = parseInt(el.dataset.target)
              const suffix = el.dataset.suffix
              let start = 0
              const step = Math.ceil(target / 40)
              const timer = setInterval(() => {
                start = Math.min(start + step, target)
                el.textContent = start + suffix
                if (start >= target) clearInterval(timer)
              }, 30)
            })
        }
      },
      { threshold: 0.5 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  const clearFocus = (e) => {
    e.currentTarget.blur()
  }

  return (
    <section
      id="hero"
      style={{
        background:
          'linear-gradient(180deg, #fafbfc 0%, #f8fafc 100%)',
        padding: '110px 0 90px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Corner accent glows */}
      <div className="premium-corner premium-corner-tl" />
      <div className="premium-corner premium-corner-br" />

      {/* Soft central glow under the grid */}
      <div className="glow-spotlight" />

      {/* Static glowing grid lines */}
      <div className="glow-grid" />

      {/* Subtle accent dots at intersections */}
      <div className="glow-grid-dots" />

      <div className="container position-relative text-center" style={{ zIndex: 3 }}>
        {/* Badge */}
        <div className="hero-rise-1" style={{ marginBottom: 26, display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: 'rgba(255,255,255,0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(59,130,246,0.18)',
              borderRadius: 999,
              padding: '10px 22px',
              animation: 'badgePulse 2.6s ease-in-out infinite',
              transition: 'transform 0.3s cubic-bezier(0.22,1,0.36,1)',
              cursor: 'default',
            }}
          >
            <span style={{ fontSize: '1rem' }}>⭐</span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.88rem', fontWeight: 700, color: '#2563eb', letterSpacing: '0.2px' }}>
              Zoho Authorized Partner
            </span>
          </div>
        </div>

        {/* Heading */}
        <h1
          className="hero-rise-2"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(1.6rem, 4.3vw, 3rem)',
            fontWeight: 700,
            color: '#0f172a',
            marginBottom: 10,
            letterSpacing: '-1.2px',
            lineHeight: 1.25,
            maxWidth: 980,
            marginInline: 'auto',
            overflow: 'visible',
          }}
        >
          Hire a Zoho developer who{' '}
          <span
            style={{
              background: 'linear-gradient(90deg,#2563eb 0%,#8b5cf6 50%,#ef4444 100%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'heroGradShift 6s ease-in-out infinite',
              display: 'inline-block',
              paddingBottom: '0.1em',
            }}
          >
            actually builds
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="hero-rise-3"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
            fontWeight: 400,
            color: '#64748b',
            marginBottom: 28,
            maxWidth: 740,
            marginInline: 'auto',
            lineHeight: 1.65,
          }}
        >
          At ZoFlowX, we connect businesses with certified Zoho developers who build custom CRM, web, and mobile apps on the Zoho platform, tailored to your workflows and designed to scale.
        </p>

        {/* Avatars + Stars pill */}
        <div
          className="hero-rise-5"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            background: 'rgba(255,255,255,0.8)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(0,0,0,0.07)',
            borderRadius: 999,
            padding: '6px 14px 6px 6px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
            marginBottom: 14,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {avatars.map((a, i) => (
              <div
                key={a.initials}
                style={{
                  width: 28, height: 28, borderRadius: '50%',
                  background: a.color, border: '2px solid #fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginLeft: i === 0 ? 0 : -8,
                  zIndex: avatars.length - i,
                  position: 'relative',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.6rem', fontWeight: 700, color: '#fff',
                  letterSpacing: '0.2px',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.12)',
                  transition: 'transform 0.2s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px) scale(1.12)'
                  e.currentTarget.style.zIndex = 99
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.zIndex = avatars.length - i
                }}
              >
                {a.initials}
              </div>
            ))}
          </div>

          <div style={{ width: 1, height: 16, background: 'rgba(0,0,0,0.1)', borderRadius: 1 }} />

          <div style={{ display: 'flex', gap: 1 }}>
            {[1, 2, 3, 4, 5].map((s) => (
              <span key={s} className="star-anim" style={{ fontSize: '0.85rem', color: '#f59e0b', lineHeight: 1 }}>★</span>
            ))}
          </div>

          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', fontWeight: 700, color: '#0f172a' }}>
            4.8/5
          </span>
        </div>

        {/* Primary CTA */}
        <div className="hero-rise-4" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 20 }}>
          <a
            href="https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '13px 28px', borderRadius: 12,
              fontFamily: 'Inter, sans-serif', fontSize: '0.92rem', fontWeight: 700,
              textDecoration: 'none',
              background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
              color: '#fff',
              boxShadow: '0 4px 18px rgba(37,99,235,0.32)',
              transition: 'all 0.22s cubic-bezier(0.22,1,0.36,1)',
              letterSpacing: '0.1px',
              WebkitTapHighlightColor: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,99,235,0.42)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 18px rgba(37,99,235,0.32)'
            }}
          >
            Hire a Zoho Developer
          </a>
        </div>

        {/* Contact Buttons */}
        <div className="hero-rise-5" style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 48 }}>
          {contactButtons.map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              className={`contact-btn${btn.primary ? ' contact-btn-whatsapp' : ''}`}
              onTouchEnd={clearFocus}
              onMouseUp={clearFocus}
              target={btn.label === 'WhatsApp' ? '_blank' : undefined}
              rel={btn.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
            >
              {btn.label}
            </a>
          ))}
        </div>

        {/* Stats Card */}
        <div className="hero-rise-7" ref={statsRef}>
          <div className="stats-card">
            {stats.map((stat, i) => (
              <div key={stat.label} className="stat-item">
                <div className="stat-num-wrapper">
                  <span
                    className="stat-num"
                    data-target={stat.num}
                    data-suffix={stat.suffix}
                    style={{
                      background: statColors[i],
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    0{stat.suffix}
                  </span>
                </div>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}