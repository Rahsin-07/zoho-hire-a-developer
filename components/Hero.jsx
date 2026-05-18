'use client'
import { useEffect, useRef } from 'react'

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

  return (
    <section
      id="hero"
      style={{
        background:
          'linear-gradient(135deg, #f8fafc 0%, #fefce8 35%, #fff7ed 70%, #fdf2f8 100%)',
        padding: '110px 0 90px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >

      {/* Glow Background */}
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
      `}</style>

      <div className="container position-relative text-center">

        {/* Badge */}
        <div
          style={{
            marginBottom: 30,
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
              padding: '10px 24px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
            }}
          >
            <span style={{ fontSize: '1rem' }}>⭐</span>
            <span
              style={{
                fontFamily: 'Inter,sans-serif',
                fontSize: '0.9rem',
                fontWeight: 700,
                color: '#2563eb',
              }}
            >
              Zoho Authorized Partner
            </span>
          </div>
        </div>

        {/* Heading */}
        <h1
          style={{
            fontFamily: 'Plus Jakarta Sans,sans-serif',
            fontSize: 'clamp(3rem,6vw,5.8rem)',
            fontWeight: 800,
            color: '#0f172a',
            marginBottom: 28,
            letterSpacing: '-2px',
            lineHeight: 1.02,
            maxWidth: 1150,
            marginInline: 'auto',
          }}
        >
          Hire a Zoho developer who{' '}
          <span
            style={{
              background:
                'linear-gradient(90deg,#2563eb 0%,#8b5cf6 50%,#ef4444 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            actually builds
          </span>
        </h1>

        {/* Paragraph */}
        <p
          style={{
            fontSize: '1.22rem',
            color: '#475569',
            maxWidth: 950,
            margin: '0 auto 42px',
            lineHeight: 1.8,
            fontFamily: 'Inter,sans-serif',
            fontWeight: 500,
          }}
        >
          At ZoFlowX, we help businesses hire a Zoho developer to
          build powerful, cloud-based CRM, web, and mobile
          applications  tailored exactly to your business needs.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 18,
            flexWrap: 'wrap',
            marginBottom: 70,
          }}
        >
          {/* Primary */}
          <a
          
            href ="https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation"
            style={{
              background:
                '#0d6efd',
              color: '#fff',
              border: 'none',
              borderRadius: 18,
              padding: '1rem 2.4rem',
              fontFamily: 'Plus Jakarta Sans,sans-serif',
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              boxShadow: '0 14px 40px rgba(0,0,0,0.12)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Hire a Zoho Developer
          
          </a>

          {/* Secondary */}
          <a
            href="#pricing"
            style={{
              background: 'rgba(255,255,255,0.72)',
              backdropFilter: 'blur(10px)',
              color: '#0f172a',
              border: '1px solid rgba(255,255,255,0.6)',
              borderRadius: 18,
              padding: '1rem 2.4rem',
              fontFamily: 'Plus Jakarta Sans,sans-serif',
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            View Pricing
          </a>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 54,
            flexWrap: 'wrap',
            padding: '38px 44px',
            background: 'rgba(255,255,255,0.68)',
            backdropFilter: 'blur(14px)',
            border: '1px solid rgba(255,255,255,0.7)',
            borderRadius: 30,
            maxWidth: 900,
            margin: '0 auto',
            boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
          }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              style={{
                textAlign: 'center',
                minWidth: 120,
              }}
            >
              <div
                className="stat-num"
                data-target={s.num}
                data-suffix={s.suffix}
                style={{
                  fontFamily: 'Plus Jakarta Sans,sans-serif',
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  background:
                    'linear-gradient(135deg,#2563eb,#8b5cf6,#ef4444)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1,
                }}
              >
                0{s.suffix}
              </div>
              <div
                style={{
                  fontSize: '0.9rem',
                  color: '#64748b',
                  marginTop: 8,
                  fontFamily: 'Inter,sans-serif',
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