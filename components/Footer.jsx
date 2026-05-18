'use client'

export default function Footer() {
  return (
    <footer
      style={{
        background: '#0f172a',
        color: 'rgba(255,255,255,0.65)',
        padding: '60px 0 32px',
        fontFamily: 'Inter, sans-serif',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: 'linear-gradient(90deg,#3b82f6,#8b5cf6,#f97316)',
          backgroundSize: '200% 100%',
          animation: 'gradShift 8s ease infinite',
        }}
      />

      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4">
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.5rem',
                fontWeight: 800,
                color: '#fff',
                marginBottom: 8,
                letterSpacing: '-0.5px',
              }}
            >
              ZoFlowX
            </div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 8,
                padding: '4px 10px',
                marginBottom: 16,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              }}
            >
              <span>⭐</span>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.7)',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Zoho Authorized Partner
              </span>
            </div>
            <p
              style={{
                fontSize: '0.875rem',
                maxWidth: 280,
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.55)',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Zoho Authorized Partner providing consulting, implementation, customization, and
              integration services for businesses across India and the USA.
            </p>
            <div style={{ marginTop: 20, display: 'flex', gap: 10 }}>
              {['linkedin', 'twitter-x', 'instagram', 'youtube'].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '1rem',
                    textDecoration: 'none',
                    transition:
                      'background 0.3s ease, color 0.3s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1), border-color 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.14)'
                    e.currentTarget.style.color = '#fff'
                    e.currentTarget.style.transform = 'translateY(-3px) rotate(-6deg)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
                    e.currentTarget.style.transform = ''
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  }}
                >
                  <i className={`bi bi-${icon}`} />
                </a>
              ))}
            </div>
          </div>
          <div className="col-6 col-lg-2">
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
                marginBottom: 16,
              }}
            >
              Company
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['About Us', 'Case Studies', 'Blogs', 'Contact Us', 'Privacy Policy'].map((l) => (
                <li key={l} style={{ marginBottom: 10 }}>
                  <a
                    href="#"
                    style={{
                      color: 'rgba(255,255,255,0.55)',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      fontFamily: 'Inter, sans-serif',
                      transition: 'color 0.25s ease, padding-left 0.3s cubic-bezier(0.22,1,0.36,1)',
                      display: 'inline-block',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#fff'
                      e.target.style.paddingLeft = '6px'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'rgba(255,255,255,0.55)'
                      e.target.style.paddingLeft = '0'
                    }}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-6 col-lg-3">
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
                marginBottom: 16,
              }}
            >
              Services
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'Zoho CRM Implementation',
                'Zoho One Setup',
                'Zoho Customization',
                'Zoho Integration',
                'Hire Zoho Developer',
              ].map((l) => (
                <li key={l} style={{ marginBottom: 10 }}>
                  <a
                    href="#"
                    style={{
                      color: 'rgba(255,255,255,0.55)',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      fontFamily: 'Inter, sans-serif',
                      transition: 'color 0.25s ease, padding-left 0.3s cubic-bezier(0.22,1,0.36,1)',
                      display: 'inline-block',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#fff'
                      e.target.style.paddingLeft = '6px'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'rgba(255,255,255,0.55)'
                      e.target.style.paddingLeft = '0'
                    }}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-3">
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
                marginBottom: 16,
              }}
            >
              Contact
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: 10 }}>
                <a
                  href="mailto:info@zoflowx.com"
                  style={{
                    color: 'rgba(255,255,255,0.55)',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontFamily: 'Inter, sans-serif',
                    transition: 'color 0.25s ease',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#fff')}
                  onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.55)')}
                >
                  <i className="bi bi-envelope me-2" />
                  info@zoflowx.com
                </a>
              </li>
              <li style={{ marginBottom: 10 }}>
                <a
                  href="tel:+918190009222"
                  style={{
                    color: 'rgba(255,255,255,0.55)',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontFamily: 'Inter, sans-serif',
                    transition: 'color 0.25s ease',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#fff')}
                  onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.55)')}
                >
                  <i className="bi bi-telephone me-2" />
                  +91 8190009222
                </a>
              </li>
              <li
                style={{
                  color: 'rgba(255,255,255,0.4)',
                  fontSize: '0.875rem',
                  lineHeight: 1.6,
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                <i className="bi bi-geo-alt me-2" />
                No.99, Greeta Tech Park, Perungudi, Chennai, Tamil Nadu 600096
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            marginTop: 48,
            paddingTop: 28,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
            fontSize: '0.8rem',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          <div style={{ color: 'rgba(255,255,255,0.4)' }}>
            © 2025 ZoFlowX. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Terms & Conditions', 'Privacy Policy'].map((l) => (
              <a
                key={l}
                href="#"
                style={{
                  color: 'rgba(255,255,255,0.4)',
                  textDecoration: 'none',
                  fontSize: '0.8rem',
                  fontFamily: 'Inter, sans-serif',
                  transition: 'color 0.25s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#fff')}
                onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.4)')}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
