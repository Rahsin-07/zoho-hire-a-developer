'use client'
import { useEffect, useRef } from 'react'

const articles = [
  {
    tag: 'Guide',
    title: 'How to Hire a Zoho Developer: A Complete Checklist for 2025',
    desc: 'Everything you need to know before hiring, from certifications to vetting processes and red flags to avoid.',
  },
  {
    tag: 'Tutorial',
    title: 'Zoho CRM vs HubSpot: Which One Should Your Business Choose?',
    desc: 'An honest comparison of both platforms based on pricing, customization, integrations, and support.',
  },
  {
    tag: 'Tips',
    title: '5 Signs Your Business Needs a Zoho Developer Right Now',
    desc: "If your team is doing things manually that Zoho can automate, you're leaving money on the table. Here's how to spot the signs.",
  },
]

export default function Resources() {
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
    <section id="resources" style={{ background: '#fff' }} ref={ref}>
      <div className="container">
        <div className="row align-items-center mb-5 fade-up">
          <div className="col-lg-8">
            <div className="section-label">Resources</div>
            <h2 className="section-title">Zoho insights & expert resources</h2>
            <p className="section-sub" style={{ fontFamily: 'Inter, sans-serif' }}>
              Stay ahead with the latest Zoho tips, tutorials, and expert resources from India's
              trusted Zoho Partner.
            </p>
          </div>
          <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
            <a href="#" className="btn-outline-custom">
              View All Articles <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>

        <div className="row g-4">
          {articles.map((a, i) => (
            <div
              className="col-md-6 col-lg-4 fade-up"
              key={a.title}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div
                className="res-card"
                style={{
                  background: '#fff',
                  border: '1px solid #e8e3dd',
                  borderRadius: 'var(--radius)',
                  padding: 28,
                  height: '100%',
                  transition:
                    'transform 0.45s cubic-bezier(0.22,1,0.36,1), box-shadow 0.45s ease, border-color 0.3s',
                  fontFamily: 'Inter, sans-serif',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)'
                  e.currentTarget.style.borderColor = 'var(--primary)'
                  const arrow = e.currentTarget.querySelector('.res-arrow')
                  if (arrow) {
                    arrow.style.transform = 'translateX(6px)'
                    arrow.style.gap = '10px'
                  }
                  const tag = e.currentTarget.querySelector('.res-tag')
                  if (tag) {
                    tag.style.background = 'var(--primary)'
                    tag.style.color = '#fff'
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = ''
                  e.currentTarget.style.boxShadow = ''
                  e.currentTarget.style.borderColor = '#e8e3dd'
                  const arrow = e.currentTarget.querySelector('.res-arrow')
                  if (arrow) {
                    arrow.style.transform = ''
                    arrow.style.gap = '6px'
                  }
                  const tag = e.currentTarget.querySelector('.res-tag')
                  if (tag) {
                    tag.style.background = 'var(--primary-light)'
                    tag.style.color = 'var(--primary)'
                  }
                }}
              >
                <div
                  className="res-tag"
                  style={{
                    display: 'inline-block',
                    background: 'var(--primary-light)',
                    color: 'var(--primary)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    padding: '3px 12px',
                    borderRadius: 50,
                    marginBottom: 14,
                    transition: 'background 0.3s ease, color 0.3s ease',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {a.tag}
                </div>
                <div
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--dark)',
                    marginBottom: 10,
                    lineHeight: 1.4,
                    fontFamily: 'Inter, sans-serif',
                    letterSpacing: '-0.2px',
                  }}
                >
                  {a.title}
                </div>
                <div
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--muted)',
                    lineHeight: 1.65,
                    marginBottom: 16,
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {a.desc}
                </div>
                <a
                  href="#"
                  className="res-arrow"
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--primary)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    transition: 'transform 0.3s cubic-bezier(0.22,1,0.36,1), gap 0.3s ease',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  Read Article <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
