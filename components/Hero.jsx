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

  // Subtle parallax follow for the glow circles
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width  - 0.5
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

      {/* Glow Background  follows mouse subtly */}
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
        {/* {zohoProducts.map((p, i) => (
          <div
            key={p}
            style={{
              position: 'absolute',
              left: `${[8, 28, 50, 78, 82, 4, 18, 72, 60][i]}%`,
              top: `${[18, 32, 10, 22, 46, 58, 80, 72, 88][i]}%`,
              animation: `float${i % 3} ${4 + i * 0.4}s ease-in-out infinite`,
            }}
          >
            <img
              src={p}
              alt={`zoho-product-${i}`}
              style={{
                height: 80,
                width: 80,
                objectFit: 'contain',
                display: 'block',
                filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.12))',
              }}
            />
          </div>
        ))} */}
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
        .hero-rise-1 { animation: heroRise 0.7s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 0.05s; }
        .hero-rise-2 { animation: heroRise 0.7s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 0.18s; }
        .hero-rise-3 { animation: heroRise 0.7s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 0.31s; }
        .hero-rise-4 { animation: heroRise 0.7s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 0.44s; }
        .hero-rise-5 { animation: heroRise 0.7s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 0.57s; }
        .hero-arrow:hover .arrow-i { animation: arrowSlide 0.9s ease-in-out infinite; }
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

        {/* Heading  reduced size */}
        <h1
          className="hero-rise-2"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(2rem, 4.4vw, 3.6rem)',
            fontWeight: 800,
            color: '#0f172a',
            marginBottom: 22,
            letterSpacing: '-1.2px',
            lineHeight: 1.08,
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

        {/* Paragraph  full doc text, hyphens removed */}
        <p
          className="hero-rise-3"
          style={{
            fontSize: '1.05rem',
            color: '#475569',
            maxWidth: 820,
            margin: '0 auto 18px',
            lineHeight: 1.75,
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
          }}
        >
          At ZoFlowX, we help businesses hire a Zoho developer to build
          powerful, cloud based CRM, web, and mobile applications. Our
          certified Zoho Creator experts design tailored solutions that
          streamline operations, eliminate manual tasks, and support long
          term growth.
        </p>

        <p
          className="hero-rise-3"
          style={{
            fontSize: '1.02rem',
            color: '#64748b',
            maxWidth: 820,
            margin: '0 auto 38px',
            lineHeight: 1.75,
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
          }}
        >
          From startups to scaling enterprises, we deliver flexible,
          scalable Zoho solutions built around your exact business needs.
        </p>

        {/* Buttons */}
        <div
          className="hero-rise-4"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 16,
            flexWrap: 'wrap',
            marginBottom: 64,
          }}
        >
          {/* Primary */}
          <a
            className="hero-arrow"
            href="https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation"
            style={{
              background: '#0d6efd',
              color: '#fff',
              border: 'none',
              borderRadius: 16,
              padding: '0.95rem 2rem',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '0.98rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              boxShadow: '0 12px 30px rgba(13,110,253,0.28)',
              transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1)',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)'
              e.currentTarget.style.boxShadow = '0 18px 40px rgba(13,110,253,0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)'
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(13,110,253,0.28)'
            }}
          >
            Hire a Zoho Developer
            <span className="arrow-i" style={{ display: 'inline-flex' }}>→</span>
          </a>

          {/* Secondary */}
          <a
            href="#pricing"
            style={{
              background: 'rgba(255,255,255,0.72)',
              backdropFilter: 'blur(10px)',
              color: '#0f172a',
              border: '1px solid rgba(15,23,42,0.08)',
              borderRadius: 16,
              padding: '0.95rem 2rem',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '0.98rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              boxShadow: '0 10px 26px rgba(0,0,0,0.06)',
              transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.borderColor = 'rgba(37,99,235,0.4)'
              e.currentTarget.style.boxShadow = '0 16px 32px rgba(37,99,235,0.12)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.borderColor = 'rgba(15,23,42,0.08)'
              e.currentTarget.style.boxShadow = '0 10px 26px rgba(0,0,0,0.06)'
            }}
          >
            View Pricing
          </a>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="hero-rise-5"
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
                  background:
                   
                    'linear-gradient(90deg, #2563eb,#eab308, #f97316, #ef4444)',
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