'use client'
import { useEffect, useRef } from 'react'

const services = [
  {
    icon: '🏗️',
    title: 'Zoho One Setup & Deployment',
    desc: 'Deploy and configure the entire Zoho suite so every app like CRM, Books, and Projects works as one connected system from day one.'
  },
  {
    icon: '⚙️',
    title: 'Zoho CRM Setup & Configuration',
    desc: 'Configure pipelines, automate lead nurturing, and align your sales process so your team closes deals faster with less manual effort.'
  },
  {
    icon: '🎨',
    title: 'Zoho Platform Customization',
    desc: 'Tailor modules, fields, layouts, and business rules to match your exact workflow with no workarounds and no wasted clicks.'
  },
  {
    icon: '📊',
    title: 'Zoho Analytics & Reporting',
    desc: 'Turn raw business data into dashboards your leadership can act on. Configure KPIs, custom reports, and accounting software integrations.'
  },
  {
    icon: '🛒',
    title: 'Zoho Marketplace App Development',
    desc: 'Build and submit Zoho Marketplace apps that extend platform functionality for you or your customers.'
  },
  {
    icon: '📱',
    title: 'Zoho Web & Mobile App Development',
    desc: 'Build custom business apps for web and mobile using Zoho Creator, replacing manual processes with role-based cloud-hosted apps.'
  },
  {
    icon: '🔗',
    title: 'Zoho Third-Party API Integration',
    desc: 'Connect Zoho with payment gateways, ERPs, ecommerce platforms, and external tools using REST APIs — eliminating duplicate data entry.'
  },
  {
    icon: '🔄',
    title: 'Zoho Data Migration & Transfer',
    desc: 'Switching from Salesforce, HubSpot, or spreadsheets? Move your data cleanly with validation checks so nothing gets lost or corrupted.'
  },
  {
    icon: '🤖',
    title: 'Business Workflow Automation',
    desc: 'Automate approval flows, task assignments, and notifications using Zoho Flow and Deluge — reducing repetitive work across your operation.'
  },
  {
    icon: '📒',
    title: 'Zoho Books & Accounting Integrations',
    desc: 'Connect Zoho Books with your accounting software, tax tools, and payment systems — keeping your finance data accurate and audit-ready.'
  },
  {
    icon: '🛍️',
    title: 'Ecommerce Platform Integration',
    desc: 'Sync Zoho CRM and Inventory with Shopify, WooCommerce, or Magento so orders and customer records update in real time.'
  },
  {
    icon: '🗺️',
    title: 'Zoho Blueprint & Process Automation',
    desc: 'Design and implement Blueprints to enforce your exact process with stage gates, mandatory fields, and automated actions at every step.'
  },
]

function ServiceCard({ icon, title, desc, delay }) {
  const ref = useRef(null)

  return (
    <div
      className="col-md-6 col-lg-4 fade-up"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div
        ref={ref}
        style={{
          background: '#fff',
          border: '1px solid #e8e3dd',
          borderRadius: 'var(--radius)',
          padding: '28px 24px',
          height: '100%',
          transition: 'all 0.3s',
          cursor: 'default',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget

          el.style.background =
            'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #f97316 100%)'

          el.style.borderColor = 'transparent'
          el.style.transform = 'translateY(-4px)'
          el.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)'

          el
            .querySelectorAll('.svc-title,.svc-desc')
            .forEach((t) => {
              t.style.color = t.classList.contains('svc-title')
                ? '#fff'
                : 'rgba(255,255,255,0.82)'
            })

          el.querySelector('.svc-icon').style.background =
            'rgba(255,255,255,0.18)'
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget

          el.style.background = '#fff'
          el.style.borderColor = '#e8e3dd'
          el.style.transform = ''
          el.style.boxShadow = ''

          el
            .querySelectorAll('.svc-title,.svc-desc')
            .forEach((t) => {
              t.style.color = t.classList.contains('svc-title')
                ? 'var(--dark)'
                : 'var(--muted)'
            })

          el.querySelector('.svc-icon').style.background =
            'var(--primary-light)'
        }}
      >
        {/* Icon */}
        <div
          className="svc-icon"
          style={{
            width: 50,
            height: 50,
            background: 'var(--primary-light)',
            borderRadius: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.4rem',
            marginBottom: 18,
            transition: 'all 0.3s',
          }}
        >
          {icon}
        </div>

        {/* Title */}
        <div
          className="svc-title"
          style={{
            fontSize: '1rem',
            fontWeight: 700,
            marginBottom: 10,
            color: 'var(--dark)',
            fontFamily: 'Plus Jakarta Sans,sans-serif',
            transition: 'color 0.3s',
          }}
        >
          {title}
        </div>

        {/* Description */}
        <div
          className="svc-desc"
          style={{
            fontSize: '0.875rem',
            color: 'var(--muted)',
            lineHeight: 1.65,
            transition: 'color 0.3s',
          }}
        >
          {desc}
        </div>
      </div>
    </div>
  )
}

export default function Services() {
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

    ref.current?.querySelectorAll('.fade-up').forEach((el) =>
      observer.observe(el)
    )

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" style={{ background: '#fff' }} ref={ref}>
      <div className="container">

        {/* Heading */}
        <div className="row align-items-end mb-5 fade-up">
          <div className="col-lg-8">
            <div className="section-label">What We Build</div>

            <h2 className="section-title">
              Services our Zoho developers offer to transform your business
            </h2>

            <p className="section-sub">
              Hire the best Zoho developers from ZoFlowX to implement,
              customize, and integrate Zoho apps that fit exactly how your
              business operates — not the other way around.
            </p>
          </div>

          <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
            <a href="#consultation" className="btn-primary-custom">
              Hire a Zoho Expert Today{' '}
            
            </a>
          </div>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 0.05} />
          ))}
        </div>

        {/* CTA */}
        <div
          className="fade-up"
          style={{
            background:
              'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #f97316 100%)',
            borderRadius: 'var(--radius-lg)',
            padding: 48,
            textAlign: 'center',
            marginTop: 32,
            boxShadow: '0 20px 50px rgba(0,0,0,0.12)',
          }}
        >
          <h4
            style={{
              color: '#fff',
              fontFamily: 'Plus Jakarta Sans,sans-serif',
              fontSize: '1.8rem',
              marginBottom: 18,
              fontWeight: 700,
              lineHeight: 1.4,
            }}
          >
            Got a Zoho problem we haven't listed? Tell us. We'll architect it.
          </h4>

          <p
            style={{
              color: 'rgba(255,255,255,0.82)',
              maxWidth: 700,
              margin: '0 auto 24px',
              lineHeight: 1.7,
              fontSize: '1rem',
            }}
          >
            From CRM customization to advanced integrations and workflow
            automation, our Zoho experts build solutions tailored exactly to
            your business operations.
          </p>

          <a
            href="#consultation"
            style={{
              background: '#fff',
              color: '#111827',
              padding: '14px 28px',
              borderRadius: 14,
              textDecoration: 'none',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Hire a Zoho Expert Today
          
          </a>
        </div>
      </div>
    </section>
  )
}