'use client'
import { useEffect, useRef } from 'react'

const options = [
  { icon: 'bi-calendar-event', color: '#f97316', title: 'Schedule a free 30 minute call', sub: 'Pick a slot · Zoho Bookings', href: 'https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation' },
  { icon: 'bi-telephone', color: '#3b82f6', title: 'Talk to our developer', sub: 'Direct call · Mon–Fri, 10am–7pm IST', href: 'tel:+918190009222' },
  { icon: 'bi-envelope', color: '#10b981', title: 'Send us a brief', sub: 'info@zoflowx.com · we reply < 24h', href: 'mailto:info@zoflowx.com' },
]

export default function Consultation() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) } })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="consultation" style={{ background: 'linear-gradient(135deg,#0f172a 0%,#1e3a8a 100%)', position: 'relative', overflow: 'hidden' }} ref={ref}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%,rgba(99,179,237,0.12) 0%,transparent 60%)', pointerEvents: 'none' }} />
      <div className="container position-relative">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 fade-up">
            <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#f97316', marginBottom: 16 }}>FREE CONSULTATION</span>
            <h2 style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, color: '#fff', marginBottom: 20, letterSpacing: '-0.5px', lineHeight: 1.15 }}>
              Schedule a free 30 minute call with our Zoho expert
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', marginBottom: 32, lineHeight: 1.75, maxWidth: 460, fontFamily: 'Inter,sans-serif' }}>
              Tell us your business goals and we'll show you exactly how Zoho can solve your challenges  no pitch, no pressure. Just a working session with someone who's done this 100+ times.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 36 }}>
              {['No commitment required','100% free consultation','Reply within 24 hours'].map(c => (
                <div key={c} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', fontFamily: 'Inter,sans-serif' }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(16,185,129,0.2)', border: '1px solid rgba(16,185,129,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="bi bi-check" style={{ color: '#10b981', fontSize: '0.75rem' }} />
                  </div>{c}
                </div>
              ))}
            </div>
            {/* <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '18px 22px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14 }}>
              <div style={{ width: 54, height: 54, borderRadius: '50%', background: 'linear-gradient(135deg,#1a56db,#3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800, color: '#fff', fontSize: '1rem', flexShrink: 0 }}>AR</div>
              <div>
                <div style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>Arul Raj</div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', marginTop: 2, fontFamily: 'Inter,sans-serif' }}>Zoho Expert & CRM Specialist · 14+ Years</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)', marginTop: 6, fontStyle: 'italic', fontFamily: 'Inter,sans-serif' }}>"I'll personally review your requirements and recommend the fastest path to ROI."</div>
              </div>
            </div> */}
          </div>

          <div className="col-lg-6 fade-up" style={{ transitionDelay: '0.15s' }}>
          <div style={{ background: '#f5f0eb', borderRadius: 24, padding: '40px 36px', boxShadow: '0 32px 80px rgba(0,0,0,0.35)', position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: 'linear-gradient(90deg,#3b82f6,#8b5cf6,#f97316)' }} />
              <h3 style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: 6 }}>Pick a way to start</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: 28, fontFamily: 'Inter,sans-serif' }}>We'll respond within one working day.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {options.map((opt, i) => (
                  <a key={i} href={opt.href} target={opt.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '18px 20px', background: '#fff', border: '1px solid #e8e3dd', borderRadius: 14, textDecoration: 'none', transition: 'all 0.25s', cursor: 'pointer' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = opt.color; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 8px 24px ${opt.color}25`; e.currentTarget.querySelector('.opt-arrow').style.color = opt.color; e.currentTarget.querySelector('.opt-arrow').style.transform = 'translateX(4px)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8e3dd'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.querySelector('.opt-arrow').style.color = '#94a3b8'; e.currentTarget.querySelector('.opt-arrow').style.transform = '' }}
                  >
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: `${opt.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <i className={`bi ${opt.icon}`} style={{ fontSize: '1.2rem', color: opt.color }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 700, fontSize: '0.9rem', color: '#0f172a', marginBottom: 3 }}>{opt.title}</div>
                      <div style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.78rem', color: '#64748b' }}>{opt.sub}</div>
                    </div>
                    <i className="bi bi-arrow-right opt-arrow" style={{ fontSize: '1rem', color: '#94a3b8', transition: 'all 0.25s', flexShrink: 0 }} />
                  </a>
                ))}
              </div>
              <div style={{ marginTop: 20, padding: '12px 16px', background: 'rgba(26,86,219,0.06)', borderRadius: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
                <i className="bi bi-shield-check" style={{ color: '#1a56db', fontSize: '1rem', flexShrink: 0 }} />
                <div style={{ fontSize: '0.78rem', color: '#475569', fontFamily: 'Inter,sans-serif' }}>100% free · No spam · Your data is safe with us</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
