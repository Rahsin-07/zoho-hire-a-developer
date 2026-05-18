'use client'
import { useEffect, useRef } from 'react'

const rows = [
  {
    category: 'COST',
    freelancer:
      'Rates vary widely and hidden costs like revisions, delays, and rework add up fast.',
    inhouse:
      'Hiring, salary, benefits, and training make in house the most expensive option long term.',
    zoflowx:
      'Transparent fixed pricing from $11/hour with no surprise charges or hidden fees.'
  },
  {
    category: 'RELIABILITY',
    freelancer:
      'Freelancers often juggle multiple clients, so availability and deadlines are unpredictable.',
    inhouse:
      'Reliable in daily work but vulnerable to sick leave, resignations, and knowledge gaps.',
    zoflowx:
      "A dedicated team backs every project so your work never stops due to one person's absence."
  },
  {
    category: 'ZOHO EXPERTISE',
    freelancer:
      'Skill level varies. Many freelancers are self taught with limited hands on Zoho experience.',
    inhouse:
      'Building deep Zoho expertise in house takes years of investment and ongoing training.',
    zoflowx:
      'Our developers are certified Zoho specialists with proven experience across the full Zoho suite.'
  },
  {
    category: 'PROJECT EXPERIENCE',
    freelancer:
      'Portfolios vary widely and depth across complex, multi module implementations is hard to verify.',
    inhouse:
      'Limited to a single company perspective, slowing learning across industries and use cases.',
    zoflowx:
      'Battle tested across 100+ projects spanning 15+ industries, from startups to enterprises.'
  },
  {
    category: 'ONGOING SUPPORT',
    freelancer:
      'Once delivered, ongoing support is often patchy or billed at premium ad hoc rates.',
    inhouse:
      'Available, but constantly pulled into other priorities, slowing fixes and change requests.',
    zoflowx:
      'Ongoing support is included so you have a reliable partner long after launch.'
  },
  {
    category: 'HIRING FLEXIBILITY',
    freelancer:
      'Mostly hourly, but renegotiating scope, pausing, or scaling effort creates friction.',
    inhouse:
      'Locked into fixed salaries and permanent contracts with slow onboarding for new requirements.',
    zoflowx:
      'Flexible hourly or monthly engagement models that scale resources up or down as needed.'
  },
  {
    category: 'PARTNERSHIP STATUS',
    freelancer:
      'Independent practitioners with no partner level access to Zoho roadmap or support.',
    inhouse:
      "Internal teams typically don't hold Zoho partner credentials or direct escalation paths.",
    zoflowx:
      'Authorized Zoho Partner with direct access to Zoho support, licensing, and product roadmap.'
  },
  {
    category: 'TEAM CONTINUITY',
    freelancer:
      'If the freelancer disappears partway through a project, knowledge transfer is rarely documented.',
    inhouse:
      'A single resignation can stall projects and leave critical configurations undocumented.',
    zoflowx:
      'Internal team backup and documented handoffs ensure your project never stalls.'
  },
  {
    category: 'INDUSTRY DEPTH',
    freelancer:
      'Often focused on one or two niches, with limited transfer of best practices across industries.',
    inhouse:
      'Naturally focused on a single industry, missing patterns proven elsewhere.',
    zoflowx:
      'Exposure across 15+ verticals brings proven patterns into your build.'
  }
]

export default function Comparison() {
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

    ref.current
      ?.querySelectorAll('.fade-up')
      .forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const GREEN = '#22c55e'
  const ORANGE = '#f97316'
  const BLUE = '#3669d5'
  const BORDER = '#ece6dd'
  const TEXT = '#334155'
  const HEADING = '#0f172a'

  return (
    <section
      id="comparison"
      style={{
        background: '#faf9f7',
        padding: '80px 0'
      }}
      ref={ref}
    >
      <div className="container">
        <div className="text-center mb-5 fade-up">
          <span className="section-label">Why Choose Us</span>

          <h2 className="section-title">
            <span style={{ color: "#3669d5" }}>ZoFlowX</span> vs{' '}
            <span style={{ color: 'black' }}>Freelancer</span> vs{' '}
            <span style={{ color: 'black' }}>In house developer</span>
          </h2>

          <p className="section-sub mx-auto">
            See why growing businesses choose ZoFlowX over the alternatives.
          </p>
        </div>

        <div
          className="fade-up"
          style={{
            borderRadius: 20,
            overflow: 'visible',
            background: '#fff',
            border: `1px solid ${BORDER}`,
            boxShadow: '0 8px 30px rgba(15,23,42,0.06)',
            transition: 'box-shadow 0.4s cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <div className="table-responsive">
            <table
              className="mb-0"
              style={{
                width: '100%',
                minWidth: 900,
                borderCollapse: 'separate',
                borderSpacing: 0,
                fontFamily: 'Inter, sans-serif'
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      padding: '28px 24px',
                      background: '#f8fafc',
                      borderBottom: `1px solid ${BORDER}`,
                      width: '18%',
                      borderTopLeftRadius: 20
                    }}
                  />

                  <th
                    style={{
                      padding: '28px 24px',
                      textAlign: 'center',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '1.05rem',
                      color: 'Black',
                      borderBottom: `1px solid ${BORDER}`,
                      background: '#fff7ed'
                    }}
                  >
                    Freelancer
                  </th>

                  <th
                    style={{
                      padding: '28px 24px',
                      textAlign: 'center',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '1.05rem',
                      color: 'BLACK',
                      borderBottom: `1px solid ${BORDER}`,
                      background: '#eff6ff'
                    }}
                  >
                    In house developer
                  </th>

                  <th
                    style={{
                      padding: '28px 24px',
                      textAlign: 'center',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '1.05rem',
                      color: HEADING,
                      background: '#f0fdf4',
                      borderTop: `2px solid ${GREEN}`,
                      borderLeft: `2px solid ${GREEN}`,
                      borderRight: `2px solid ${GREEN}`,
                      borderTopLeftRadius: 18,
                      borderTopRightRadius: 18
                    }}
                  >
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 10,
                        flexWrap: 'wrap',
                        color:BLUE,
                        justifyContent: 'center'
                      }}
                    >
                      <span>ZoFlowX</span>

                      <span
                        style={{
                          background: GREEN,
                          color: '#fff',
                          fontSize: '0.68rem',
                          fontWeight: 700,
                          padding: '4px 12px',
                          borderRadius: 999,
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase'
                        }}
                      >
                        Recommended
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody>
                {rows.map((row, i) => {
                  const isLast = i === rows.length - 1

                  const baseCell = {
                    padding: '24px',
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    color: TEXT,
                    borderTop: `1px solid ${BORDER}`,
                    verticalAlign: 'top',
                    background: '#fff',
                    transition: 'background 0.3s ease',
                  }

                  const highlightCell = {
                    ...baseCell,
                    background: '#f0fdf4',
                    borderLeft: `2px solid ${GREEN}`,
                    borderRight: `2px solid ${GREEN}`,
                    color: HEADING,
                    fontWeight: 500,
                    ...(isLast
                      ? {
                          borderBottom: `2px solid ${GREEN}`,
                          borderBottomLeftRadius: 18,
                          borderBottomRightRadius: 18
                        }
                      : {})
                  }

                  return (
                    <tr key={i}
                      onMouseEnter={e => {
                        const cells = e.currentTarget.querySelectorAll('td')
                        cells.forEach((c, idx) => {
                          if (idx === 0) c.style.background = '#f1f5f9'
                          else if (idx === 1) c.style.background = '#ffedd5'
                          else if (idx === 2) c.style.background = '#dbeafe'
                          else c.style.background = '#dcfce7'
                        })
                      }}
                      onMouseLeave={e => {
                        const cells = e.currentTarget.querySelectorAll('td')
                        cells.forEach((c, idx) => {
                          if (idx === 0) c.style.background = '#f8fafc'
                          else if (idx === 1) c.style.background = '#fff7ed'
                          else if (idx === 2) c.style.background = '#eff6ff'
                          else c.style.background = '#f0fdf4'
                        })
                      }}
                    >
                      <td
                        style={{
                          ...baseCell,
                          background: '#f8fafc',
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 700,
                          fontSize: '0.78rem',
                          letterSpacing: '0.09em',
                          textTransform: 'uppercase',
                          color: '#64748b'
                        }}
                      >
                        {row.category}
                      </td>

                      <td
                        style={{
                          ...baseCell,
                          background: '#fff7ed'
                        }}
                      >
                        {row.freelancer}
                      </td>

                      <td
                        style={{
                          ...baseCell,
                          background: '#eff6ff'
                        }}
                      >
                        {row.inhouse}
                      </td>

                      <td style={highlightCell}>{row.zoflowx}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div
          className="fade-up"
          style={{
            background:
              'linear-gradient(135deg,#3b82f6 0%,#8b5cf6 50%,#f97316 100%)',
            backgroundSize: '200% 200%',
            borderRadius: 20,
            padding: '48px',
            textAlign: 'center',
            marginTop: 32,
            animation: 'cmpGrad 9s ease-in-out infinite',
          }}
        >
          <style>{`
            @keyframes cmpGrad {
              0%, 100% { background-position: 0% 50%; }
              50%      { background-position: 100% 50%; }
            }
          `}</style>
          <h3
            style={{
              color: '#fff',
              fontFamily: 'Inter, sans-serif',
              marginBottom: 8
            }}
          >
            Ready to transform your business with ZoFlowX?
          </h3>

          <p
            style={{
              color: 'rgba(255,255,255,0.85)',
              marginBottom: 24,
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Talk to a certified Zoho expert and get a free consultation
            tailored to your business needs.
          </p>

          <a
            href="#consultation"
            style={{
              background: '#fff',
              color: '#0f172a',
              border: 'none',
              borderRadius: 10,
              padding: '0.9rem 2rem',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '0.9rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              textDecoration: 'none',
              transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)'
              e.currentTarget.style.boxShadow = '0 14px 30px rgba(0,0,0,0.22)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)'
              e.currentTarget.style.boxShadow = ''
            }}
          >
            Book a Free Consultation <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  )
}
