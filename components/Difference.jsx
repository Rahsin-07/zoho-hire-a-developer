'use client'

const points = [
  { icon: 'bi-search', text: 'Our skilled Zoho developers carefully study your business requirements and deliver well-planned custom solutions that align perfectly with your operational goals.' },
  { icon: 'bi-bar-chart-line', text: 'With our Zoho expertise, your business can reduce human errors, optimize resource allocation, gain deeper data insights, and improve cross-team collaboration effortlessly.' },
  { icon: 'bi-briefcase', text: 'We bring years of hands-on experience delivering Zoho business applications across multiple industries, ensuring every solution is built efficiently and within your budget.' },
  { icon: 'bi-shield-check', text: 'Our certified Zoho development team holds proven expertise in third-party integrations and seamless data migration, ensuring your business runs without interruption during transitions.' },
  { icon: 'bi-arrow-left-right', text: 'Hire our Zoho experts to effortlessly connect and replicate your existing forms, workflows, and automation from platforms like HubSpot, Calendly, and other business tools into Zoho.' },
  { icon: 'bi-star', text: 'Our developers stay updated with the latest Zoho features, ensuring every custom business solution we build reflects the most current platform capabilities.' },
  { icon: 'bi-people', text: 'Get access to a dedicated Zoho programmer team with strong proficiency in WordPress integration, Zoho One, and custom website builders to power your entire digital ecosystem.' },
  { icon: 'bi-clock-history', text: 'Our Zoho development team handles complex, large-scale projects with sharp attention to detail, clear communication, and consistent on-time delivery.' },
]

export default function Difference() {
  return (
    <section id="difference" style={{ background: 'linear-gradient(135deg,#0f172a 0%,#1e3a8a 100%)', color: '#fff', position: 'relative', overflow: 'hidden', padding: '90px 0' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 20%,rgba(99,179,237,0.12) 0%,transparent 50%)', pointerEvents: 'none' }} />
      <div className="container position-relative">
        <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start' }}>
          {/* LEFT — sticky */}
          <div style={{ width: 360, minWidth: 320, position: 'sticky', top: 100, alignSelf: 'flex-start', flexShrink: 0 }}>
            <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#f97316', marginBottom: 16 }}>WHY ZOFLOWX</span>
            <h2 style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 800, color: '#fff', marginBottom: 20, letterSpacing: '-0.5px', lineHeight: 1.15 }}>
              Why choose ZoFlowX for your Zoho project?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', marginBottom: 36, lineHeight: 1.75 }}>
              Hundreds of businesses trust ZoFlowX to simplify their operations, automate workflows, and get the most out of their Zoho investment.
            </p>
            <a href="#consultation" style={{ background: '#fff', color: 'black', border: 'none', borderRadius: 10, padding: '0.75rem 1.8rem', fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 700, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = '' }}
            >
              Start Your Zoho Journey 
            </a>
          </div>
          {/* RIGHT — scrollable inside fixed box */}
          <div style={{ flex: 1, height: 520, overflowY: 'auto', paddingRight: 8 }}>
            <style>{`#diff-scroll::-webkit-scrollbar{width:4px}#diff-scroll::-webkit-scrollbar-track{background:rgba(255,255,255,0.05);border-radius:4px}#diff-scroll::-webkit-scrollbar-thumb{background:rgba(99,179,237,0.4);border-radius:4px}`}</style>
            <div id="diff-scroll" style={{ height: '100%', overflowY: 'auto', paddingRight: 8 }}>
              {points.map((p, i) => (
                <div key={i} style={{ display: 'flex', gap: 18, padding: '22px 20px', borderBottom: i < points.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none', borderRadius: 12, transition: 'all 0.3s', cursor: 'default' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateX(6px)'; e.currentTarget.querySelector('.d-icon').style.background = '#1a56db' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = ''; e.currentTarget.querySelector('.d-icon').style.background = 'rgba(26,86,219,0.3)' }}
                >
                  <div className="d-icon" style={{ width: 44, height: 44, minWidth: 44, background: 'rgba(26,86,219,0.3)', border: '1px solid rgba(99,179,237,0.3)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', color: '#93c5fd', flexShrink: 0, transition: 'all 0.3s' }}>
                    <i className={`bi ${p.icon}`} />
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, paddingTop: 10 }}>{p.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
