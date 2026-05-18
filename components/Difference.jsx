'use client'

const points = [
  { icon: 'bi-search', text: 'Our skilled Zoho developers carefully study your business requirements and deliver well planned custom solutions that align perfectly with your operational goals.' },
  { icon: 'bi-bar-chart-line', text: 'With our Zoho expertise, your business can reduce human errors, optimize resource allocation, gain deeper data insights, and improve cross team collaboration effortlessly.' },
  { icon: 'bi-briefcase', text: 'We bring years of hands on experience delivering Zoho business applications across multiple industries, ensuring every solution is built efficiently and within your budget.' },
  { icon: 'bi-shield-check', text: 'Our certified Zoho development team holds proven expertise in third party integrations and seamless data migration, ensuring your business runs without interruption during transitions.' },
  { icon: 'bi-arrow-left-right', text: 'Hire our Zoho experts to effortlessly connect and replicate your existing forms, workflows, and automation from platforms like HubSpot, Calendly, and other business tools into Zoho.' },
  { icon: 'bi-star', text: 'Our developers stay updated with the latest Zoho features and updates, ensuring every custom business solution we build or enhance reflects the most current platform capabilities.' },
  { icon: 'bi-gear', text: 'Our proficient Zoho software developers ensure every integrated element functions smoothly, maintaining complete workflow continuity across all connected systems and platforms.' },
  { icon: 'bi-people', text: 'Get access to a dedicated Zoho programmer team with strong proficiency in WordPress integration, Zoho One, and custom website builders to power your entire digital ecosystem.' },
  { icon: 'bi-clock-history', text: 'At ZoFlowX, our Zoho development team is trained to handle complex, large scale projects with sharp attention to detail, clear communication, and consistent on time delivery.' },
]

export default function Difference() {
  return (
    <section id="difference" style={{ background: 'linear-gradient(135deg,#0f172a 0%,#1e3a8a 100%)', color: '#fff', position: 'relative', overflow: 'hidden', padding: '90px 0' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 20%,rgba(99,179,237,0.12) 0%,transparent 50%)', pointerEvents: 'none' }} />

      {/* Subtle moving orbs */}
      <div style={{
        position: 'absolute',
        width: 320, height: 320, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,179,237,0.18) 0%, transparent 70%)',
        filter: 'blur(40px)',
        top: '10%', left: '-100px',
        animation: 'orbDrift1 14s ease-in-out infinite',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        width: 280, height: 280, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(249,115,22,0.14) 0%, transparent 70%)',
        filter: 'blur(40px)',
        bottom: '5%', right: '-80px',
        animation: 'orbDrift2 16s ease-in-out infinite',
        pointerEvents: 'none',
      }} />
      <style>{`
        @keyframes orbDrift1 {
          0%, 100% { transform: translate(0, 0); }
          50%      { transform: translate(40px, -20px); }
        }
        @keyframes orbDrift2 {
          0%, 100% { transform: translate(0, 0); }
          50%      { transform: translate(-40px, 20px); }
        }
        #diff-scroll::-webkit-scrollbar { width: 4px; }
        #diff-scroll::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); border-radius: 4px; }
        #diff-scroll::-webkit-scrollbar-thumb { background: rgba(99,179,237,0.4); border-radius: 4px; }
      `}</style>

      <div className="container position-relative">
        <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start' }}>
          {/* LEFT  sticky */}
          <div style={{ width: 360, minWidth: 320, position: 'sticky', top: 100, alignSelf: 'flex-start', flexShrink: 0 }}>
            <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#f97316', marginBottom: 16, fontFamily: 'Inter, sans-serif' }}>WHY ZOFLOWX</span>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 800, color: '#fff', marginBottom: 20, letterSpacing: '-0.5px', lineHeight: 1.15 }}>
              Why choose ZoFlowX for your Zoho project?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', marginBottom: 36, lineHeight: 1.75, fontFamily: 'Inter, sans-serif' }}>
              Hundreds of businesses trust ZoFlowX to simplify their operations, automate workflows, and get the most out of their Zoho investment.
            </p>
            <a href="#consultation" style={{ background: '#fff', color: 'black', border: 'none', borderRadius: 10, padding: '0.85rem 1.8rem', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)'; e.currentTarget.style.boxShadow = '0 14px 30px rgba(255,255,255,0.18)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              Start Your Zoho Journey
              <i className="bi bi-arrow-right" />
            </a>
          </div>
          {/* RIGHT  scrollable inside fixed box */}
          <div style={{ flex: 1, height: 520, overflowY: 'auto', paddingRight: 8 }}>
            <div id="diff-scroll" style={{ height: '100%', overflowY: 'auto', paddingRight: 8 }}>
              {points.map((p, i) => (
                <div key={i} style={{ display: 'flex', gap: 18, padding: '22px 20px', borderBottom: i < points.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none', borderRadius: 12, transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1)', cursor: 'default' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                    e.currentTarget.style.transform = 'translateX(8px)'
                    const ic = e.currentTarget.querySelector('.d-icon')
                    ic.style.background = '#1a56db'
                    ic.style.transform = 'rotate(-8deg) scale(1.08)'
                    ic.style.color = '#fff'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.transform = ''
                    const ic = e.currentTarget.querySelector('.d-icon')
                    ic.style.background = 'rgba(26,86,219,0.3)'
                    ic.style.transform = 'rotate(0) scale(1)'
                    ic.style.color = '#93c5fd'
                  }}
                >
                  <div className="d-icon" style={{ width: 44, height: 44, minWidth: 44, background: 'rgba(26,86,219,0.3)', border: '1px solid rgba(99,179,237,0.3)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', color: '#93c5fd', flexShrink: 0, transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1)' }}>
                    <i className={`bi ${p.icon}`} />
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, paddingTop: 10, fontFamily: 'Inter, sans-serif' }}>{p.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
