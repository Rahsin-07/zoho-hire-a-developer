'use client'

const testimonials = [
  {
    initials: 'KP',
    color: 'var(--primary)',
    name: 'Kumari Pitshop',
    role: 'CEO, Kumari Pitshop',
    text: 'We run a bike and car accessories shop and were looking for a better way to manage our billing and inventory. Really happy with the support.',
  },
  {
    initials: 'SS',
    color: '#10b981',
    name: 'Sankara Subramanian A',
    role: 'Client',
    text: 'ZoFlowX sets a benchmark as one of the best Zoho partners in Chennai. Their expertise and customer-first mindset make them trusted consultants.',
  },
  {
    initials: 'KP',
    color: '#f97316',
    name: 'Kishore PA',
    role: 'Employee, Cavintek',
    text: 'We partnered for Zoho CRM implementation and the experience has been outstanding. The team listens and understands requirements properly.',
  },
]

export default function Testimonials() {
  return (
    <section style={{ background: '#faf9f7', padding: '70px 0' }}>
      <div className="container">

        <div className="text-center mb-5">
          <h2>Voices of our happy clients</h2>
          <p>Real feedback from real businesses</p>
        </div>

        <div className="row g-4">

          {testimonials.map((t, i) => (
            <div key={i} className="col-md-6 col-lg-4">

              <div
                style={{
                  background: '#fff',
                  border: '1px solid #eaeaea',
                  borderRadius: 14,
                  padding: 22,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}

                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.08)'
                  e.currentTarget.style.borderColor = t.color
                }}

                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = '#eaeaea'
                }}
              >

                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>

                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: '50%',
                        background: t.color,
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                      }}
                    >
                      {t.initials}
                    </div>

                    <div>
                      <div style={{ fontWeight: 600 }}>{t.name}</div>
                      <div style={{ fontSize: 12, color: '#777' }}>{t.role}</div>
                    </div>

                  </div>

                </div>

                {/* Text always visible */}
                <p style={{ marginTop: 14, color: '#555', lineHeight: 1.6 }}>
                  {t.text}
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}