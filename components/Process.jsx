'use client'
import { useEffect, useRef } from 'react'

const steps = [
  { title: 'Share your requirements', desc: 'Tell us about your business challenges, existing tools, and what you want to achieve with Zoho. The more context you share, the better we can plan.' },
  { title: 'Talk to our developer', desc: 'Get on a call with a certified Zoho expert who understands your industry. We\'ll map out a solution tailored to your exact workflow and goals.' },
  { title: 'Build your Zoho solution', desc: 'Our team gets to work — configuring, customizing, and developing your Zoho environment with regular updates and transparent communication throughout.' },
  { title: 'Test and quality check', desc: 'We test everything carefully — workflows, integrations, automations — fixing any issues before your team ever touches the live system.' },
  { title: 'Launch and ongoing support', desc: 'We go live, train your team, and stay on hand for ongoing support and enhancements so your Zoho setup keeps evolving with your business.' },
]

export default function Process() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) } })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="process" style={{ background: '#fff' }} ref={ref}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5 fade-up">
            <div className="section-label">Our Process</div>
            <h2 className="section-title">How we work — Our simple Zoho development process</h2>
            <p className="section-sub" style={{ marginBottom: 28 }}>From your first consultation to final delivery, we follow a clear and structured approach so you always know what's happening and what comes next.</p>
            <a href="#consultation" className="btn-primary-custom">Talk to Our Zoho Developer <i className="bi bi-arrow-right" /></a>
          </div>
          <div className="col-lg-7 fade-up" style={{ transitionDelay: '0.1s' }}>
            {steps.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: 28, alignItems: 'flex-start', padding: '28px 0', position: 'relative' }}>
                {i < steps.length - 1 && (
                  <div style={{ position: 'absolute', left: 27, top: 72, width: 2, height: 'calc(100% - 44px)', background: 'linear-gradient(to bottom,var(--primary),var(--border))' }} />
                )}
                <div style={{ width: 56, height: 56, minWidth: 56, background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '1.1rem', fontWeight: 800, color: '#fff', boxShadow: '0 4px 16px rgba(26,86,219,0.3)', zIndex: 1 }}>
                  {i + 1}
                </div>
                <div style={{ paddingTop: 12 }}>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--dark)', marginBottom: 6, fontFamily: 'Plus Jakarta Sans,sans-serif' }}>{step.title}</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.65 }}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
