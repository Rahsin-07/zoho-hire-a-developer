'use client'
import { useState, useEffect, useRef } from 'react'

const faqs = [
  {
    q: 'Why should I hire a Zoho developer instead of using Zoho out of the box?',
    a: 'The default configuration of Zoho is suitable to meet the basic requirements, but once you hire a Zoho developer, you will have custom workflows, custom automations, and integrations that are specific to your business processes, which saves time and reduces manual errors.',
  },
  {
    q: 'What does a Zoho developer actually do?',
    a: 'A Zoho developer will customizes Zoho apps such as CRM, Books, Creator, and Desk by creating custom functions, Deluge scripts, API integrations, and dashboards that meet your unique business needs.',
  },
  {
    q: 'How do I hire a Zoho developer in India for my project?',
    a: 'You may get a Zoho developer in India via sites such as LinkedIn, Upwork, or by engaging a certified Zoho development firm. ZoFlowX, a trusted Zoho partner, makes this process seamless with a dedicated team, transparent pricing, and proven delivery across 100+ projects.',
  },
  {
    q: 'Is it cost effective to hire a Zoho developer in India compared to other regions?',
    a: 'Yes. By hiring a Zoho developer in India, you usually get highly skilled professionals at 40 – 60% of the cost of a developer in the US or UK without compromising on quality or technical expertise.',
  },
  {
    q: 'What qualifications should I look for when I hire a Zoho developer?',
    a: 'Find Zoho Certified Developers who have practical experience in Deluge scripting, Zoho CRM customization, REST API integration, and multi app Zoho One implementations. Client case studies of the past are a good measure of practical ability.',
  },
  {
    q: 'Can a Zoho developer integrate Zoho CRM with third party tools?',
    a: 'Absolutely. An experienced Zoho developer can integrate Zoho CRM with tools like Shopify, QuickBooks, Mailchimp, WhatsApp, Slack, and payment gateways using REST APIs and webhooks.',
  },
  {
    q: 'How long does it take to complete a Zoho customization project?',
    a: 'Timelines are dependent on complexity. A basic Zoho CRM customization can take 1–2 weeks, whereas a full Zoho One implementation with multiple integrations can take 4–12 weeks. Upfront, your developer should give you a clear project roadmap.',
  },
  {
    q: 'Should I hire a freelance Zoho developer or a Zoho development company like ZoFlowX?',
    a: 'Freelancers are appropriate in small and one time projects with small budgets. A dedicated Zoho development company such as ZoFlowX is the smarter option when it comes to complex or enterprise level Zoho implementations.',
  },
  {
    q: 'What is Deluge scripting, and why does my Zoho developer need to know it?',
    a: 'Zoho has its own scripting language, called Deluge (Data Enriched Language for the Universal Grid Environment). An experienced Zoho developer relies on Deluge to develop custom functions, automate workflows, and create dynamic business logic within Zoho apps.',
  },
  {
    q: 'Can I hire a Zoho developer for ongoing support and maintenance?',
    a: 'Yes. A Zoho developer is hired on a retainer basis by many businesses to provide continuous support, system upgrades, development of new features, and troubleshooting to ensure your Zoho environment remains optimized as your business expands.',
  },
  {
    q: 'What industries commonly hire a Zoho developer?',
    a: 'Real estate, healthcare, e commerce, logistics, education, and fintech businesses regularly contract a Zoho developer to develop industry specific CRM workflows, client portals, and automated reporting systems.',
  },
  {
    q: 'How much does it cost to hire a Zoho developer?',
    a: 'The rates depend on the experience and the type of engagement. The average freelance Zoho developer will charge between $20–$60/hour, whereas an agency based developer will charge between $40–$100/hour. Well scoped deliverables are also often done using fixed price project models.',
  },
  {
    q: 'Why do businesses choose ZoFlowX when they want to hire a Zoho developer in India?',
    a: 'Businesses prefer ZoFlowX due to the fact that we are one of the best Zoho partners in India, with certified Zoho knowledge, agile project delivery, and post launch support. Our developers have been able to provide Zoho solutions in 15+ industries with quantifiable outcomes.',
  },
  {
    q: 'What questions should I ask before I hire a Zoho developer?',
    a: 'Before you commit, ask about their level of certification in Zoho, the number of completed Zoho projects, experience with your specific Zoho modules, communication process, testing approach, and post deployment support policy.',
  },
  {
    q: 'How quickly can a hired Zoho developer get started on my project?',
    a: 'The majority of professional Zoho developers can start within 3–7 business days of a discovery call, requirement gathering, and contract finalization. At ZoFlowX, the preferred Zoho development partner in India, urgent engagements may often start within 24–48 hours depending on the scope of the project and the availability of the team.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  const [hoverIdx, setHoverIdx] = useState(null)
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
    <section id="faq" style={{ background: '#fff' }} ref={ref}>
      <div className="container">
        <div className="text-center mb-5 fade-up">
          <div className="section-label">FAQ</div>
          <h2 className="section-title">Frequently asked questions</h2>
          <p className="section-sub mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Need clarity? Let's talk.
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="fade-up">
              {faqs.map((faq, i) => {
                const isOpen = open === i
                const isHover = hoverIdx === i
                return (
                  <div
                    key={i}
                    style={{
                      border: `1px solid ${isOpen || isHover ? 'var(--primary)' : 'var(--border)'}`,
                      borderRadius: 'var(--radius)',
                      marginBottom: 12,
                      overflow: 'hidden',
                      transition:
                        'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s cubic-bezier(0.22,1,0.36,1)',
                      boxShadow: isOpen ? '0 6px 18px rgba(26,86,219,0.08)' : 'none',
                      transform: isHover && !isOpen ? 'translateX(4px)' : 'translateX(0)',
                      fontFamily: 'Inter, sans-serif',
                    }}
                    onMouseEnter={() => setHoverIdx(i)}
                    onMouseLeave={() => setHoverIdx(null)}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        background: isOpen ? 'var(--primary-light)' : 'var(--white)',
                        border: 'none',
                        padding: '20px 24px',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        fontSize: '0.95rem',
                        color: isOpen ? 'var(--primary)' : 'var(--dark)',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        transition: 'all 0.25s ease',
                        gap: 12,
                      }}
                    >
                      <span style={{ flex: 1 }}>{faq.q}</span>
                      <i
                        className="bi bi-chevron-down"
                        style={{
                          fontSize: '0.9rem',
                          flexShrink: 0,
                          marginLeft: 12,
                          transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1)',
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          display: 'inline-block',
                        }}
                      />
                    </button>
                    <div
                      style={{
                        maxHeight: isOpen ? '600px' : '0px',
                        overflow: 'hidden',
                        transition: 'max-height 0.45s ease',
                      }}
                    >
                      <div
                        style={{
                          padding: '0 24px 22px',
                          fontSize: '0.9rem',
                          color: 'var(--muted)',
                          lineHeight: 1.75,
                          fontFamily: 'Inter, sans-serif',
                        }}
                      >
                        {faq.a}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Related pages */}
            <div className="fade-up" style={{ marginTop: 40 }}>
              <h4
                style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--dark)',
                  marginBottom: 16,
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '-0.2px',
                }}
              >
                Related Pages
              </h4>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {['Zoho CRM Customization', 'Hire Zoho Creator Developer', 'Zoho Customization Services'].map(
                  (page) => (
                    <a
                      key={page}
                      href="#"
                      style={{
                        background: 'var(--primary-light)',
                        color: 'var(--primary)',
                        padding: '8px 20px',
                        borderRadius: 50,
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        textDecoration: 'none',
                        transition:
                          'background 0.3s ease, color 0.3s ease, transform 0.3s cubic-bezier(0.22,1,0.36,1)',
                        fontFamily: 'Inter, sans-serif',
                        display: 'inline-block',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'var(--primary)'
                        e.target.style.color = '#fff'
                        e.target.style.transform = 'translateY(-2px)'
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'var(--primary-light)'
                        e.target.style.color = 'var(--primary)'
                        e.target.style.transform = ''
                      }}
                    >
                      {page}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
