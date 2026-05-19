'use client'
import { useEffect, useRef } from 'react'

const colors = ['#2563eb', '#eab308', '#f97316', '#ef4444']

const services = [
  {
    icon: '🏗️',
    title: 'Zoho One setup & deployment',
    desc: 'Our Zoho developers deploy and configure the entire Zoho suite so every app like CRM, Books, and Projects works as one connected system from day one.'
  },
  {
    icon: '⚙️',
    title: 'Zoho CRM setup & configuration',
    desc: 'Hire a Zoho CRM developer to configure pipelines, automate lead nurturing, and align your sales process so your team closes deals faster with less manual effort.'
  },
  {
    icon: '🎨',
    title: 'Zoho platform customization',
    desc: 'Our Zoho customization experts tailor modules, fields, layouts, and business rules to match your exact workflow with no workarounds and no wasted clicks.'
  },
  {
    icon: '📊',
    title: 'Zoho Analytics & reporting setup',
    desc: 'Turn raw business data into dashboards your leadership can act on. Our developers configure Zoho Analytics with KPIs, custom reports, and accounting software integrations.'
  },
  {
    icon: '🛒',
    title: 'Zoho Marketplace app development',
    desc: 'Need a publishable Zoho extension? Our developers build and submit Zoho Marketplace apps that extend platform functionality for you or your customers.'
  },
  {
    icon: '📱',
    title: 'Zoho web & mobile app development',
    desc: 'Our Zoho Creator developers build custom business apps for web and mobile. This replaces manual processes with role based, cloud hosted apps your team can use anywhere.'
  },
  {
    icon: '🔗',
    title: 'Zoho third party API integration',
    desc: 'Hire Zoho developer for integration to connect Zoho with payment gateways, ERPs, ecommerce platforms, and external tools using REST APIs. This eliminates duplicate data entry and broken handoffs.'
  },
  {
    icon: '🔄',
    title: 'Zoho data migration & transfer',
    desc: 'Switching from Salesforce, HubSpot, or spreadsheets? Our Zoho migration specialists move your data cleanly with validation checks so nothing gets lost or corrupted.'
  },
  {
    icon: '🤖',
    title: 'Business workflow automation',
    desc: 'Our Zoho developers automate approval flows, task assignments, and notifications using Zoho Flow and Deluge. This reduces repetitive work across your entire operation.'
  },
  {
    icon: '📒',
    title: 'Zoho Books & accounting integrations',
    desc: 'Our Zoho developers connect Zoho Books with your accounting software, tax tools, and payment systems. This keeps your finance data accurate and audit ready automatically.'
  },
  {
    icon: '🛍️',
    title: 'Ecommerce platform integration',
    desc: 'Sync Zoho CRM and Zoho Inventory with Shopify, WooCommerce, or Magento so orders, stock levels, and customer records update in real time without manual imports.'
  },
  {
    icon: '🗺️',
    title: 'Zoho Blueprint & Process Automation',
    desc: 'Our Zoho developers design and implement Blueprints to enforce your exact sales or service process with stage gates, mandatory fields, and automated actions at every step.'
  },
]

function ServiceCard({ icon, title, desc, delay, index }) {
  const c = colors[index % colors.length]

  return (
    <div
      className="col-md-6 col-lg-4 slide-in"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div
        style={{
          background: '#fff',
          border: `1px solid ${c}22`,
          borderRadius: 'var(--radius)',
          padding: '28px 24px',
          height: '100%',
          transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
          cursor: 'default',
          position: 'relative',
          overflow: 'hidden',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget

          el.style.transform = 'translateY(-8px)'
          el.style.boxShadow = `0 24px 50px ${c}25`
          el.style.borderColor = c

          const iconEl = el.querySelector('.svc-icon')
          if (iconEl) {
            iconEl.style.background = `${c}15`
            iconEl.style.transform = 'rotate(-8deg) scale(1.1)'
          }

          const titleEl = el.querySelector('.svc-title')
          if (titleEl) titleEl.style.color = c
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget

          el.style.transform = ''
          el.style.boxShadow = ''
          el.style.borderColor = `${c}22`

          const iconEl = el.querySelector('.svc-icon')
          if (iconEl) {
            iconEl.style.background = `${c}10`
            iconEl.style.transform = 'rotate(0) scale(1)'
          }

          const titleEl = el.querySelector('.svc-title')
          if (titleEl) titleEl.style.color = '#0f172a'
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: 'absolute',
            top: -40,
            right: -40,
            width: 90,
            height: 90,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${c}18, transparent 70%)`,
            pointerEvents: 'none',
          }}
        />

        {/* Icon */}
        <div
          className="svc-icon"
          style={{
            width: 50,
            height: 50,
            borderRadius: 12,
            background: `${c}10`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.4rem',
            marginBottom: 18,
            transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          {icon}
        </div>

        {/* Title */}
        <h3
          className="svc-title"
          style={{
            fontSize: '1rem',
            fontWeight: 700,
            marginBottom: 10,
            color: '#0f172a',
            transition: 'color 0.3s ease',
            fontFamily: 'Inter, sans-serif',
            lineHeight: 1.4,
          }}
        >
          {title}
        </h3>

        {/* Desc */}
        <div
          style={{
            fontSize: '0.875rem',
            color: '#64748b',
            lineHeight: 1.65,
            fontFamily: 'Inter, sans-serif',
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
      { threshold: 0.15 }
    )

    ref.current?.querySelectorAll('.slide-in, .fade-up').forEach((el) =>
      observer.observe(el)
    )

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" style={{ background: '#fff' }} ref={ref}>
      <style>{`
        .slide-in {
          opacity: 0;
          transform: translateX(-100px) scale(0.94);
          transition: all 1s cubic-bezier(0.22,1,0.36,1);
        }

        .slide-in.visible {
          opacity: 1;
          transform: translateX(0) scale(1);
        }
      `}</style>

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
              business operates.
            </p>
          </div>

          <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
            <a href="#consultation" className="btn-primary-custom">
              Hire a Zoho Expert Today
            </a>
          </div>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {services.map((s, i) => (
            <ServiceCard
              key={s.title}
              {...s}
              index={i}
              delay={i * 0.15}
            />
          ))}
        </div>

        {/* CTA */}
        <div
          className="fade-up"
          style={{
            marginTop: 40,
            padding: 52,
            borderRadius: 'var(--radius-lg)',
            background: 'linear-gradient(135deg, #2563eb, #0f172a)',
            color: '#fff',
            textAlign: 'center',
            boxShadow: '0 25px 60px rgba(0,0,0,0.25)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* glow overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(circle at top left, rgba(37,99,235,0.25), transparent 60%)',
              pointerEvents: 'none',
            }}
          />

          {/* Title */}
          <h4
            style={{
              fontSize: '1.9rem',
              fontWeight: 800,
              fontFamily: 'Inter, sans-serif',
              color: '#ffffff',
              position: 'relative',
            }}
          >
            Got a Zoho problem? We’ll build the solution.
          </h4>

          {/* Subtitle */}
          <p
            style={{
              opacity: 0.9,
              marginTop: 12,
              fontSize: '1rem',
              fontFamily: 'Inter, sans-serif',
              position: 'relative',
              color: 'rgba(255,255,255,0.85)',
            }}
          >
            Custom CRM, automation, integrations everything built for your workflow.
          </p>

          {/* Button */}
          <a
            href="#consultation"
            style={{
              display: 'inline-block',
              marginTop: 24,
              background: '#fff',
              color: '#0f172a',
              padding: '13px 28px',
              borderRadius: 14,
              fontWeight: 800,
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              position: 'relative',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Talk to Expert
          </a>
        </div>
      </div>
    </section>
  )
}