'use client'
import { useEffect, useRef } from 'react'

const plans = [
  {
    type: 'Hourly Basis',
    price: '$15',
    per: '/hr',
    period: 'Pay as you go',
    hrRate: '$15 / hour',
    featured: false,
    desc: 'Pay only for the hours worked. Ideal for small Zoho customizations, quick fixes, or one time Zoho CRM configurations with full time tracked transparency.',
    features: ['Time tracked transparency','No long term commitment','Quick turnaround fixes','Certified Zoho expert'],
  },
  {
    type: 'Full Time / Monthly',
    price: '$1,800',
    per: '/mo',
    period: '160 hrs/mo · 8 hrs/day · 5 days/week',
    hrRate: 'Only $11 / hour',
    featured: true,
    popular: 'Most Popular',
    desc: 'Your dedicated Zoho developer works full time, 160 hours a month, 8 hours a day, 5 days a week, aligned to your official work schedule.',
    features: ['Dedicated full time developer','Aligned to your timezone','Best value per hour','Priority support included'],
  },
  {
    type: 'Part Time / Monthly',
    price: '$1,080',
    per: '/mo',
    period: 'Focused part time support',
    hrRate: 'Only $13 / hour',
    featured: false,
    desc: 'Need focused support without a full time commitment? Get a skilled Zoho developer working part time, perfectly synced to your project needs.',
    features: ['Flexible scheduling','Synced to your project','Scale up anytime','Certified Zoho expert'],
  },
]

export default function Pricing() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })

    ref.current?.querySelectorAll('.fade-up').forEach(el =>
      observer.observe(el)
    )

    return () => observer.disconnect()
  }, [])

  return (
    <section id="pricing" style={{ background: '#faf9f7' }} ref={ref}>
      <div className="container">

        <div className="text-center mb-5 fade-up">
          <span className="section-label">Hiring Models</span>

          <h2 className="section-title">
            Flexible hiring models to suit your business needs
          </h2>

          <p className="section-sub mx-auto">
            Choose a hiring model that fits your budget, timeline, and business goals.
            Scale up or down anytime.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {plans.map((plan, i) => (
            <div
              className="col-md-6 col-lg-4 fade-up"
              key={plan.type}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div
                style={{
                  background: plan.featured ? '#0f172a' : '#fff',
                  border: `2px solid ${plan.featured ? '#0f172a' : '#e8e3dd'}`,
                  borderRadius: 20,
                  padding: '40px 32px',
                  height: '100%',
                  position: 'relative',
                  transition: 'all 0.45s cubic-bezier(0.22,1,0.36,1)',
                  textAlign: 'center',
                  transform: plan.featured ? 'translateY(-6px)' : 'none',
                  boxShadow: plan.featured
                    ? '0 18px 40px rgba(15,23,42,0.18)'
                    : 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)'
                  e.currentTarget.style.boxShadow = plan.featured
                    ? '0 28px 60px rgba(15,23,42,0.28)'
                    : '0 24px 56px rgba(0,0,0,0.12)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = plan.featured
                    ? 'translateY(-6px)'
                    : ''
                  e.currentTarget.style.boxShadow = plan.featured
                    ? '0 18px 40px rgba(15,23,42,0.18)'
                    : ''
                }}
              >

                {plan.popular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: -14,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background:
                        'linear-gradient(90deg,#3b82f6,#8b5cf6,#f97316)',
                      backgroundSize: '200% 100%',
                      color: '#fff',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: 1,
                      textTransform: 'uppercase',
                      padding: '5px 18px',
                      borderRadius: 50,
                      whiteSpace: 'nowrap',
                      fontFamily: 'Inter, sans-serif',
                      animation: 'popularShift 5s ease-in-out infinite',
                    }}
                  >
                    <style>{`
                      @keyframes popularShift {
                        0%, 100% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                      }
                    `}</style>

                    {plan.popular}
                  </div>
                )}

                {/* TYPE */}
                <h3
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    color: plan.featured
                      ? 'rgba(255,255,255,0.5)'
                      : '#64748b',
                    marginBottom: 12,
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: 1.4,
                  }}
                >
                  {plan.type}
                </h3>

                <div
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '2.8rem',
                    fontWeight: 800,
                    color: plan.featured ? '#fff' : '#0f172a',
                    lineHeight: 1,
                    marginBottom: 4,
                    letterSpacing: '-1.5px'
                  }}
                >
                  {plan.price}
                  <span
                    style={{
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: plan.featured
                        ? 'rgba(255,255,255,0.5)'
                        : '#64748b'
                    }}
                  >
                    {plan.per}
                  </span>
                </div>

                <div
                  style={{
                    fontSize: '0.82rem',
                    color: plan.featured
                      ? 'rgba(255,255,255,0.5)'
                      : '#64748b',
                    marginBottom: 16,
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  {plan.period}
                </div>

                <div
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    background: plan.featured
                      ? 'rgba(255,255,255,0.1)'
                      : 'linear-gradient(90deg,#3b82f6,#8b5cf6)',
                    WebkitBackgroundClip: plan.featured ? '' : 'text',
                    WebkitTextFillColor: plan.featured ? '' : 'transparent',
                    backgroundClip: plan.featured ? '' : 'text',
                    color: plan.featured ? '#93c5fd' : '',
                    padding: '4px 12px',
                    borderRadius: 50,
                    display: 'inline-block',
                    marginBottom: 18,
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {plan.hrRate}
                </div>

                <div
                  style={{
                    fontSize: '0.875rem',
                    color: plan.featured
                      ? 'rgba(255,255,255,0.65)'
                      : '#64748b',
                    marginBottom: 24,
                    lineHeight: 1.7,
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  {plan.desc}
                </div>

                <div
                  style={{
                    borderTop: `1px solid ${
                      plan.featured
                        ? 'rgba(255,255,255,0.1)'
                        : '#e8e3dd'
                    }`,
                    margin: '20px 0'
                  }}
                />

                <ul
                  className="list-unstyled text-start mb-4"
                  style={{
                    fontSize: '0.875rem',
                    color: plan.featured
                      ? 'rgba(255,255,255,0.75)'
                      : '#334155',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  {plan.features.map(f => (
                    <li
                      key={f}
                      className="mb-2"
                      style={{
                        transition:
                          'transform 0.25s ease, padding-left 0.25s ease'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = 'translateX(4px)'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.transform = 'translateX(0)'
                      }}
                    >
                      <i
                        className="bi bi-check-circle-fill me-2"
                        style={{ color: '#10b981' }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                {plan.featured ? (
                  <a
                    href="#consultation"
                    style={{
                      background: '#0d6efd',
                      color: '#fff',
                      border: 'none',
                      borderRadius: 10,
                      padding: '0.85rem 1.5rem',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 8,
                      textDecoration: 'none',
                      width: '100%',
                      transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow =
                        '0 12px 28px rgba(13,110,253,0.4)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    Hire Our Developer Now
                    <i className="bi bi-arrow-right" />
                  </a>
                ) : (
                  <a
                    href="#consultation"
                    style={{
                      background: 'transparent',
                      color: '#0f172a',
                      border: '2px solid #e8e3dd',
                      borderRadius: 10,
                      padding: '0.82rem 1.5rem',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 8,
                      textDecoration: 'none',
                      width: '100%',
                      transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = '#0f172a'
                      e.currentTarget.style.background = '#0f172a'
                      e.currentTarget.style.color = '#fff'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = '#e8e3dd'
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = '#0f172a'
                    }}
                  >
                    Hire Our Developer Now
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}