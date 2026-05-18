'use client'
import { useEffect, useRef } from 'react'

const industries = [
  {
    icon: '🛍️',
    title: 'Retail & eCommerce',
    desc: 'Sync orders, inventory, and customer data across Shopify and WooCommerce in real time.',
    color: '#f97316',
    bg: 'rgba(249,115,22,0.08)',
  },
  {
    icon: '🏠',
    title: 'Real Estate',
    desc: 'Automate lead tracking, property pipelines, and client follow-ups for agents and brokers.',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.08)',
  },
  {
    icon: '🏥',
    title: 'Healthcare',
    desc: 'Build secure patient management, appointment flows, and billing systems for clinics.',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.08)',
  },
  {
    icon: '💼',
    title: 'Professional Services',
    desc: 'Manage client relationships, automate proposals, and track project delivery end to end.',
    color: '#2563eb',
    bg: 'rgba(37,99,235,0.08)',
  },
  {
    icon: '🏭',
    title: 'Manufacturing',
    desc: 'Connect production, inventory, and sales data so your operations run without manual handoffs.',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.08)',
  },
  {
    icon: '🎓',
    title: 'Education',
    desc: 'Automate student admissions, fee collection, and communication workflows.',
    color: '#eab308',
    bg: 'rgba(234,179,8,0.08)',
  },
  {
    icon: '💻',
    title: 'Technology & SaaS',
    desc: 'Build custom CRM workflows, API integrations, and analytics dashboards for tech teams.',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.08)',
  },
  {
    icon: '✈️',
    title: 'Travel & Tourism',
    desc: 'Automate booking flows, manage itineraries, and connect payment tools for travel agencies.',
    color: '#ec4899',
    bg: 'rgba(236,72,153,0.08)',
  },
]

export default function Industries() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="industries" style={{ background: '#faf9f7' }} ref={ref}>


      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5 fade-up">
          <div className="section-label">Industries We Serve</div>
          <h2 className="section-title">
            Zoho expertise built for how your industry works
          </h2>
          <p className="section-sub mx-auto">
            Our Zoho-certified developers bring deep industry knowledge to every
            project — delivering solutions built for how your business actually works.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="row g-4">
          {industries.map((ind, i) => (
            <div
              className="col-sm-6 col-lg-3 fade-up"
              key={ind.title}
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div
                style={{
                  background: '#fff',
                  border: '1px solid #e8e3dd',
                  borderRadius: 16,
                  padding: '28px 24px',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                  borderTop: `3px solid ${ind.color}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.09)'
                  e.currentTarget.style.borderColor = ind.color
                  e.currentTarget.querySelector('.ind-icon').style.transform = 'scale(1.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = ''
                  e.currentTarget.style.boxShadow = ''
                  e.currentTarget.style.borderColor = '#e8e3dd'
                  e.currentTarget.style.borderTopColor = ind.color
                  e.currentTarget.querySelector('.ind-icon').style.transform = ''
                }}
              >
                {/* Icon */}
                <div
                  className="ind-icon"
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.6rem',
                    marginBottom: 18,
                    background: ind.bg,
                    transition: 'transform 0.3s ease',
                  }}
                >
                  {ind.icon}
                </div>

                {/* Title */}
                <div style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#0f172a',
                  marginBottom: 10,
                  lineHeight: 1.3,
                }}>
                  {ind.title}
                </div>

                {/* Desc */}
                <div style={{
                  fontSize: '0.875rem',
                  color: '#64748b',
                  lineHeight: 1.65,
                }}>
                  {ind.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="fade-up"
          style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #2563eb 100%)',
            borderRadius: 20,
            padding: '48px 40px',
            textAlign: 'center',
            marginTop: 40,
            boxShadow: '0 20px 50px rgba(0,0,0,0.14)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Glow */}
          <div style={{
            position: 'absolute', top: '-60px', right: '-60px',
            width: 300, height: 300,
            background: 'radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <h4 style={{
            color: '#fff',
            fontFamily: 'Plus Jakarta Sans,sans-serif',
            marginBottom: 12,
            fontSize: '1.9rem',
            fontWeight: 700,
            position: 'relative',
          }}>
            Can't find your industry above?
          </h4>

          <p style={{
            color: 'rgba(255,255,255,0.72)',
            fontSize: '1rem',
            marginBottom: 28,
            maxWidth: 600,
            marginInline: 'auto',
            lineHeight: 1.7,
            position: 'relative',
          }}>
            We work across all sectors. Tell us your business and we'll build
            the right Zoho solution for you.
          </p>

          <a
            href="#consultation"
            style={{
              background: '#fff',
              color: 'black',
              padding: '14px 32px',
              borderRadius: 12,
              textDecoration: 'none',
              fontWeight: 700,
              fontFamily: 'Plus Jakarta Sans,sans-serif',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
              position: 'relative',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 14px 32px rgba(0,0,0,0.25)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)' }}
          >
            Talk to a Zoho Expert
           
          </a>
        </div>
      </div>
    </section>
  )
}