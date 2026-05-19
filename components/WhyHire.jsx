'use client'
import { useEffect, useRef } from 'react'

const colors = ['#2563eb', '#eab308', '#f97316', '#ef4444']

const reasons = [
  {
    num: '01',
    title: 'Automate repetitive workflows',
    desc: 'Most businesses lose hours every week on manual data entry, follow ups, and reporting. A certified Zoho developer automates these repetitive workflows so your team focuses on growth.',
    quote: '"We wasted 3 hours daily on manual follow ups before ZoFlowX."',
  },
  {
    num: '02',
    title: 'Customize beyond the default setup',
    desc: 'A default Zoho setup rarely fits your business process. You need Zoho customization services to tailor modules, fields, and pipelines to match exactly how your sales team operates.',
    quote: '"Zoho felt like it was designed for a different business."',
  },
  {
    num: '03',
    title: 'Connect your entire software stack',
    desc: 'Disconnected tools like email, invoicing, and inventory create data silos. A Zoho integration expert connects your entire software ecosystem under one unified platform.',
    quote: '"Our team was switching between 5 tools every single day."',
  },
  {
    num: '04',
    title: 'Get the ROI from your licenses',
    desc: 'Without proper configuration, Zoho licenses go underused and budgets get wasted. An experienced Zoho consultant ensures every feature you pay for is fully implemented and delivering value.',
    quote: '"We bought Zoho but our team never really adopted it."',
  },
  {
    num: '05',
    title: 'Migrate data without losing sleep',
    desc: 'Migrating business data from legacy systems is risky without technical expertise. A Zoho developer handles moving your data to Zoho CRM securely with zero loss and minimal downtime.',
    quote: '"Our team repeats the same tasks every single day."',
  },
  {
    num: '06',
    title: 'Build a setup that scales with you',
    desc: 'As your business scales, your Zoho setup must grow with it. A dedicated Zoho developer builds flexible, scalable solutions that support new teams, processes, and revenue goals.',
    quote: '"Zoho feels like the wrong fit for our business."',
  },
]

export default function WhyHire() {
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
    <section id="why-hire" style={{ background: '#faf9f7' }} ref={ref}>
      <div className="container">
        <div className="text-center mb-5 fade-up">
          <span className="section-label">The Case for Hiring</span>
          <h2 className="section-title">Why do you need to hire a Zoho developer?</h2>
          <p className="section-sub mx-auto">
            Hire a Zoho developer to streamline operations, eliminate manual work, and maximize your Zoho investment.
          </p>
        </div>

        <div className="row g-4">
          {reasons.map((r, i) => {
            const c = colors[i % colors.length]

            return (
              <div
                className="col-md-6 col-lg-4 fade-up"
                key={r.num}
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <div
                  style={{
                    background: '#f5f0eb',
                    border: `1px solid ${c}20`,
                    borderRadius: 14,
                    padding: '28px 24px',
                    height: '100%',
                    transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
                    cursor: 'default',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-8px)'
                    e.currentTarget.style.boxShadow = `0 22px 50px ${c}25`
                    e.currentTarget.style.borderColor = c

                    const icon = e.currentTarget.querySelector('.wh-icon')
                    if (icon) {
                      icon.style.transform = 'rotate(-8deg) scale(1.1)'
                      icon.style.background = `${c}20`
                    }

                    const num = e.currentTarget.querySelector('.wh-num')
                    if (num) num.style.letterSpacing = '3px'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = ''
                    e.currentTarget.style.boxShadow = ''
                    e.currentTarget.style.borderColor = `${c}20`

                    const icon = e.currentTarget.querySelector('.wh-icon')
                    if (icon) {
                      icon.style.transform = 'rotate(0) scale(1)'
                      icon.style.background = `${c}15`
                    }

                    const num = e.currentTarget.querySelector('.wh-num')
                    if (num) num.style.letterSpacing = '1px'
                  }}
                >
                  {/* Decorative glow */}
                  <div
                    style={{
                      position: 'absolute',
                      top: -30,
                      right: -30,
                      width: 90,
                      height: 90,
                      borderRadius: '50%',
                      background: `radial-gradient(circle, ${c}18, transparent 70%)`,
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Icon */}
                  <div
                    className="wh-icon"
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: `${c}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 18,
                      transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1)',
                    }}
                  >
                    <i className="bi bi-bullseye" style={{ fontSize: '1.2rem', color: c }} />
                  </div>

                  {/* Number */}
                  <div
                    className="wh-num"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      background: `linear-gradient(135deg,#2563eb,#eab308,#f97316,#ef4444)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      marginBottom: 8,
                      letterSpacing: 1,
                      transition: 'letter-spacing 0.35s ease',
                    }}
                  >
                    {r.num}
                  </div>

                  <h3
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#0f172a',
                      marginBottom: 10,
                      lineHeight: 1.3,
                    }}
                  >
                    {r.title}
                  </h3>

                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: '#64748b',
                      lineHeight: 1.7,
                      marginBottom: 16,
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {r.desc}
                  </div>

                  <div
                    style={{
                      borderLeft: `3px solid ${c}`,
                      paddingLeft: 14,
                      transition: 'border-color 0.3s ease',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '0.82rem',
                        color: '#94a3b8',
                        fontStyle: 'italic',
                        lineHeight: 1.6,
                        fontFamily: 'Inter, sans-serif',
                      }}
                    >
                      {r.quote}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}