'use client'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { num: 100, suffix: '+', label: 'Projects Delivered' },
  { num: 15, suffix: '+', label: 'Industries Served' },
  { num: 100, suffix: '%', label: 'Client Satisfaction' },
  { num: 14, suffix: '+', label: 'Years Experience' },
]

const zohoProducts = [
  '/zoho-crm.png',
  '/zoho-campaigns.png',
  '/zoho-creator.png',
  '/Zoho-mail.png',
  '/zoho-analytics.png',
  '/zoho-books.png',
  '/zoho-desk.png',
  '/zoho-bookings.png',
  '/zoho-commerce.png',
]

const avatars = [
  { initials: 'RK', color: '#ef4444' },
  { initials: 'PM', color: '#8b5cf6' },
  { initials: 'SA', color: '#10b981' },
  { initials: 'VN', color: '#f97316' },
  { initials: 'DM', color: '#ec4899' },
]

const contactButtons = [
  { label: 'Call',      href: 'tel:+1234567890',          primary: false },
  { label: 'WhatsApp',  href: 'https://wa.me/1234567890', primary: true  },
  { label: 'Email',     href: 'mailto:hello@zoflowx.com', primary: false },
  { label: 'Schedule',  href: 'https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation', primary: false },
  { label: 'Live Chat', href: '#chat',                    primary: false },
]

export default function Hero() {
  const statsRef = useRef(null)
  const animated = useRef(false)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

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

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMouse({ x, y })
  }

  return (
    <section
      id="hero"
      onMouseMove={handleMove}
      style={{
        background:
          'linear-gradient(135deg, #f8fafc 0%, #fefce8 35%, #fff7ed 70%, #fdf2f8 100%)',
        padding: '110px 0 90px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >

      {/* Glow Background follows mouse subtly */}
      <div
        style={{
          position: 'absolute',
          top: '-180px',
          left: '-120px',
          width: 420,
          height: 420,
          background:
            'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)',
          filter: 'blur(40px)',
          transform: `translate(${mouse.x * 30}px, ${mouse.y * 30}px)`,
          transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: '-180px',
          right: '-120px',
          width: 420,
          height: 420,
          background:
            'radial-gradient(circle, rgba(249,115,22,0.16) 0%, transparent 70%)',
          filter: 'blur(40px)',
          transform: `translate(${mouse.x * -30}px, ${mouse.y * -30}px)`,
          transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
          pointerEvents: 'none',
        }}
      />

      {/* Soft decorative grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(15,23,42,0.06) 1px, transparent 0)',
          backgroundSize: '32px 32px',
          maskImage:
            'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          pointerEvents: 'none',
        }}
      />

      {/* Floating Zoho Product Images */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        {/* Commented out as in original */}
      </div>

      <style>{`
        @keyframes float0 {
          0%   { transform: translate(0px, 0px); }
          25%  { transform: translate(18px, -10px); }
          50%  { transform: translate(30px, -6px); }
          75%  { transform: translate(12px, -14px); }
          100% { transform: translate(0px, 0px); }
        }
        @keyframes float1 {
          0%   { transform: translate(0px, 0px); }
          25%  { transform: translate(-20px, -12px); }
          50%  { transform: translate(-35px, -6px); }
          75%  { transform: translate(-15px, -16px); }
          100% { transform: translate(0px, 0px); }
        }
        @keyframes float2 {
          0%   { transform: translate(0px, 0px); }
          25%  { transform: translate(22px, -8px); }
          50%  { transform: translate(10px, -14px); }
          75%  { transform: translate(28px, -4px); }
          100% { transform: translate(0px, 0px); }
        }
        @keyframes heroRise {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes badgePulse {
          0%, 100% { box-shadow: 0 8px 24px rgba(0,0,0,0.06), 0 0 0 0 rgba(37,99,235,0.35); }
          50%      { box-shadow: 0 8px 24px rgba(0,0,0,0.06), 0 0 0 10px rgba(37,99,235,0); }
        }
        @keyframes heroGradShift {
          0%, 100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        @keyframes arrowSlide {
          0%, 100% { transform: translateX(0); }
          50%      { transform: translateX(5px); }
        }
        @keyframes starPop {
          0%   { transform: scale(0.6); opacity: 0; }
          70%  { transform: scale(1.15); }
          100% { transform: scale(1); opacity: 1; }
        }
        .hero-rise-1 { animation: heroRise 0.7s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 0.05s; }
        .hero-rise-2 { animation: heroRise 0.7s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 0.18s; }
        .hero-rise-3 { animation: heroRise 0.7s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 0.31s; }
        .hero-rise-4 { animation: heroRise 0.7s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 0.44s; }
        .hero-rise-5 { animation: heroRise 0.7s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 0.57s; }
        .hero-rise-6 { animation: heroRise 0.7s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 0.68s; }
        .hero-arrow:hover .arrow-i { animation: arrowSlide 0.9s ease-in-out infinite; }
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
      `}</style>

      <div className="container position-relative text-center">

        {/* Badge */}
        <div
          className="hero-rise-1"
          style={{
            marginBottom: 26,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
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
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0) scale(1)' }}
          >
            <span style={{ fontSize: '1rem' }}>⭐</span>
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.88rem',
                fontWeight: 700,
                color: '#2563eb',
                letterSpacing: '0.2px',
              }}
            >
              Zoho Authorized Partner
            </span>
          </div>
        </div>

        {/* Heading */}
        <h1
          className="hero-rise-2"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(1.6rem, 3.6vw, 3rem)',
            fontWeight: 500,
            color: '#0f172a',
            marginBottom: 22,
            letterSpacing: '-1.2px',
            lineHeight: 1.0,
            maxWidth: 980,
            marginInline: 'auto',
          }}
        >
          Hire a Zoho developer who{' '}
          <span
            style={{
              background:
                'linear-gradient(90deg,#2563eb 0%,#8b5cf6 50%,#ef4444 100%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'heroGradShift 6s ease-in-out infinite',
              display: 'inline-block',
            }}
          >
            actually builds
          </span>
        </h1>

        {/* Paragraph */}
        <p
          className="hero-rise-3"
          style={{
            fontSize: '1.05rem',
            color: '#64748b',
            maxWidth: 820,
            margin: '0 auto 18px',
            lineHeight: 1.30,
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
          }}
        >
          At ZoFlowX, we help businesses hire a Zoho developer to build
          powerful, cloud based CRM, web, and mobile applications. Our
          certified Zoho Creator experts design tailored solutions that
          streamline operations, eliminate manual tasks, and support long
          term growth. From startups to scaling enterprises, we deliver flexible,
          scalable Zoho solutions built around your exact business needs.
        </p>

        <p
          className="hero-rise-3"
          style={{
            fontSize: '1.02rem',
            color: '#64748b',
            maxWidth: 820,
            margin: '0 auto 38px',
            lineHeight: 1.30,
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
          }}
        >
        </p>

        {/* ── Unified CTA + Social Proof Block ── */}
        <div
          className="hero-rise-4"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 14,
            marginBottom: 48,
          }}
        >
          {/* Row 1: CTA Buttons — same height, matched radius */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              className="hero-arrow"
              href="https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation"
              style={{
                background: 'linear-gradient(135deg, #1d4ed8, #2563eb)',
                color: '#fff',
                border: 'none',
                borderRadius: 14,
                padding: '13px 28px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                boxShadow: '0 8px 24px rgba(37,99,235,0.32)',
                transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 14px 32px rgba(37,99,235,0.42)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,99,235,0.32)'
              }}
            >
              Hire a Zoho Developer
              <span className="arrow-i">→</span>
            </a>

            <a
              href="#pricing"
              style={{
                background: '#fff',
                color: '#0f172a',
                border: '1.5px solid rgba(15,23,42,0.12)',
                borderRadius: 14,
                padding: '13px 28px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '0.95rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.borderColor = 'rgba(37,99,235,0.35)'
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(37,99,235,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(15,23,42,0.12)'
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)'
              }}
            >
              View Pricing
            </a>
          </div>

          {/* Row 2: Avatars + Stars — compact inline pill */}
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
            }}
          >
            {/* Overlapping avatars */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {avatars.map((a, i) => (
                <div
                  key={a.initials}
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: a.color,
                    border: '2px solid #fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: i === 0 ? 0 : -8,
                    zIndex: avatars.length - i,
                    position: 'relative',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    color: '#fff',
                    letterSpacing: '0.2px',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.12)',
                    transition: 'transform 0.2s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px) scale(1.12)'; e.currentTarget.style.zIndex = 99 }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.zIndex = avatars.length - i }}
                >
                  {a.initials}
                </div>
              ))}
            </div>

            {/* Divider */}
            <div style={{ width: 1, height: 16, background: 'rgba(0,0,0,0.1)', borderRadius: 1 }} />

            {/* Stars */}
            <div style={{ display: 'flex', gap: 1 }}>
              {[1,2,3,4,5].map((s) => (
                <span key={s} className="star-anim" style={{ fontSize: '0.85rem', color: '#f59e0b', lineHeight: 1 }}>★</span>
              ))}
            </div>

            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', fontWeight: 700, color: '#0f172a' }}>
              4.8/5
            </span>
          </div>

          {/* Row 3: Contact buttons — small, tight, consistent */}
          <div
            className="hero-rise-5"
            style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center' }}
          >
            {contactButtons.map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                className={`contact-btn${btn.primary ? ' contact-btn-whatsapp' : ''}`}
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="hero-rise-6"
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            gap: 48,
            flexWrap: 'wrap',
            padding: '34px 40px',
            background: 'rgba(255,255,255,0.7)',
            backdropFilter: 'blur(14px)',
            border: '1px solid rgba(255,255,255,0.8)',
            borderRadius: 28,
            width: '90vw',
            maxWidth: 'none',
            margin: '0 auto',
            boxSizing: 'border-box',
            boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
            transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s cubic-bezier(0.22,1,0.36,1)',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 28px 70px rgba(0,0,0,0.12)' }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.08)' }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              style={{
                textAlign: 'center',
                minWidth: 120,
                transition: 'transform 0.3s cubic-bezier(0.22,1,0.36,1)',
                cursor: 'default',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <div
                className="stat-num"
                data-target={s.num}
                data-suffix={s.suffix}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '2.4rem',
                  fontWeight: 800,
                  background: 'linear-gradient(90deg, #2563eb,#eab308, #f97316, #ef4444)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1,
                  letterSpacing: '-1px',
                }}
              >
                0{s.suffix}
              </div>
              <div
                style={{
                  fontSize: '0.88rem',
                  color: '#64748b',
                  marginTop: 8,
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}