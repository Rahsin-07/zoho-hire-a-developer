'use client'
import { useEffect, useRef } from 'react'

const cases = [
  {
    industry: '🛍️ eCommerce',
    title: 'Shopify + Zoho CRM Integration for D2C Brand',
    gradient: 'linear-gradient(135deg,#1a56db,#1044b2)',
    accent: '#1a56db',
    metrics: [
      { num: '40%', label: 'Faster order processing' },
      { num: '3x', label: 'Lead conversion rate' },
    ],
    desc: 'Integrated Shopify with Zoho CRM and Inventory, enabling real time sync of orders, stock updates, and customer records, eliminating 5+ hours of daily manual work.',
  },
  {
    industry: '🏥 Healthcare',
    title: 'Patient Management System for Multi Clinic Group',
    gradient: 'linear-gradient(135deg,#0f4c81,#1a56db)',
    accent: '#0f4c81',
    metrics: [
      { num: '60%', label: 'Reduction in admin tasks' },
      { num: 'Zero', label: 'Data loss during migration' },
    ],
    desc: 'Built a Zoho Creator based patient management portal connected to Zoho CRM and Books for seamless appointment scheduling, billing, and compliance tracking.',
  },
  {
    industry: '🏠 Real Estate',
    title: 'Lead Pipeline Automation for Real Estate Agency',
    gradient: 'linear-gradient(135deg,#064e3b,#059669)',
    accent: '#059669',
    metrics: [
      { num: '2x', label: 'Deals closed per month' },
      { num: '80%', label: 'Less manual follow ups' },
    ],
    desc: 'Configured Zoho CRM with automated lead assignment, WhatsApp follow up sequences, and property pipeline tracking, transforming a chaotic sales process into a streamlined engine.',
  },
]

export default function CaseStudies() {
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
    <section id="case-studies" style={{ background: '#fff' }} ref={ref}>
      <div className="container">
        <div className="row align-items-center mb-5 fade-up">
          <div className="col-lg-8">
            <div className="section-label">Client Success Stories</div>
            <h2 className="section-title">Real implementations. Real outcomes.</h2>
            <p className="section-sub">
              Browse our case studies to see how businesses across India solved their toughest
              challenges using Zoho, powered by our expert team.
            </p>
          </div>
          <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
            <a href="#" className="btn-outline-custom">
              Read More Case Studies <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>

        <div className="row g-4">
          {cases.map((c, i) => (
            <div
              className="col-md-6 col-lg-4 fade-up"
              key={c.title}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div
                className="case-card"
                style={{
                  background: '#fff',
                  border: '1px solid #e8e3dd',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  transition: 'transform 0.45s cubic-bezier(0.22,1,0.36,1), box-shadow 0.45s cubic-bezier(0.22,1,0.36,1), border-color 0.3s',
                  height: '100%',
                  fontFamily: 'Inter, sans-serif',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
                  e.currentTarget.style.borderColor = c.accent
                  const banner = e.currentTarget.querySelector('.case-banner')
                  if (banner) banner.style.backgroundSize = '180% 180%'
                  const metrics = e.currentTarget.querySelectorAll('.case-metric-num')
                  metrics.forEach((m) => {
                    m.style.transform = 'scale(1.08)'
                    m.style.letterSpacing = '-0.5px'
                  })
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = ''
                  e.currentTarget.style.boxShadow = ''
                  e.currentTarget.style.borderColor = '#e8e3dd'
                  const banner = e.currentTarget.querySelector('.case-banner')
                  if (banner) banner.style.backgroundSize = '100% 100%'
                  const metrics = e.currentTarget.querySelectorAll('.case-metric-num')
                  metrics.forEach((m) => {
                    m.style.transform = ''
                    m.style.letterSpacing = ''
                  })
                }}
              >
                <div
                  className="case-banner"
                  style={{
                    background: c.gradient,
                    backgroundSize: '100% 100%',
                    padding: '28px 32px',
                    color: '#fff',
                    transition: 'background-size 0.6s ease',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: -20,
                      right: -20,
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.08)',
                      pointerEvents: 'none',
                    }}
                  />
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      opacity: 0.75,
                      marginBottom: 8,
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {c.industry}
                  </div>
                  <div
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      fontFamily: 'Inter, sans-serif',
                      letterSpacing: '-0.3px',
                      position: 'relative',
                    }}
                  >
                    {c.title}
                  </div>
                </div>

                <div style={{ padding: '28px 32px' }}>
                  <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 20 }}>
                    {c.metrics.map((m) => (
                      <div key={m.label}>
                        <div
                          className="case-metric-num"
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '1.6rem',
                            fontWeight: 800,
                            color: 'var(--primary)',
                            transition: 'transform 0.3s ease, letter-spacing 0.3s ease',
                            display: 'inline-block',
                          }}
                        >
                          {m.num}
                        </div>
                        <div
                          style={{
                            fontSize: '0.78rem',
                            color: 'var(--muted)',
                            fontFamily: 'Inter, sans-serif',
                          }}
                        >
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--muted)',
                      lineHeight: 1.65,
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {c.desc}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
