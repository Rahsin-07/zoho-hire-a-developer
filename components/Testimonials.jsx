'use client'
import { useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    initials: 'KP',
    color: 'var(--primary)',
    name: 'Kumari Pitshop',
    role: 'CEO, Kumari Pitshop',
    text: '"We run a bike and car accessories shop and were looking for a better way to manage our billing and inventory. A friend suggested this team, and they walked us through Zoho Books and Zoho Inventory in a very simple way. They are one of the best Zoho partners we ve come across. No technical terms, just practical solutions. Really happy with the support we received."'
  },
  {
    initials: 'SS',
    color: '#10b981',
    name: 'Sankara Subramanian A',
    role: 'Client',
    text: '"Thanks a ton Mr.Arul & ZoFlowX team ZoFlowX sets a benchmark as one of the best Zoho partners in Chennai. Their expertise, strategic approach, and customer-first mindset make them a trusted Zoho consultant in Chennai."'
  },
  {
    initials: 'KP',
    color: '#f97316',
    name: 'Kishore PA',
    role: 'Employee, Cavintek',
    text: '"We partnered with ZoFlowX at Cflow (Cavintek) for our Zoho CRM implementation, and the experience has been outstanding. The team at ZoFlowX listens, understands your exact requirement."'
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const [openIndex, setOpenIndex] = useState(null)

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

  const toggleReview = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="testimonials"
      style={{ background: '#faf9f7' }}
      ref={ref}
    >
      <div className="container">
        <div className="text-center mb-5 fade-up">
          <div className="section-label">Client Voices</div>

          <h2 className="section-title">
            Voices of our happy clients
          </h2>

          <p className="section-sub mx-auto">
            Real feedback from real businesses —
            see why companies trust us as their preferred Zoho Partner.
          </p>
        </div>

        <div className="row g-4">
          {testimonials.map((t, i) => (
            <div
              className="col-md-6 col-lg-4 fade-up"
              key={t.name}
              style={{
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <div
                onClick={() => toggleReview(i)}
                style={{
                  background: '#fff',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 24,
                  cursor: 'pointer',
                  transition: '0.3s ease',
                  boxShadow:
                    openIndex === i
                      ? 'var(--shadow-lg)'
                      : 'var(--shadow-sm)',
                }}
              >
                {/* Top */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                    }}
                  >
                    <div
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: '50%',
                        background: t.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        color: '#fff',
                        fontSize: '1rem',
                      }}
                    >
                      {t.initials}
                    </div>

                    <div>
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: '0.95rem',
                          color: 'var(--dark)',
                        }}
                      >
                        {t.name}
                      </div>

                      <div
                        style={{
                          fontSize: '0.8rem',
                          color: 'var(--muted)',
                        }}
                      >
                        {t.role}
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      fontSize: '1.2rem',
                      color: 'var(--primary)',
                      fontWeight: 'bold',
                    }}
                  >
                    {openIndex === i ? '−' : '+'}
                  </div>
                </div>

                {/* Expand Content */}
                <div
                  style={{
                    maxHeight:
                      openIndex === i ? '500px' : '0px',
                    overflow: 'hidden',
                    transition: 'all 0.4s ease',
                  }}
                >
                  <div
                    style={{
                      paddingTop: 20,
                    }}
                  >
                    <div
                      style={{
                        color: '#f59e0b',
                        marginBottom: 14,
                      }}
                    >
                      ★★★★★
                    </div>

                    <div
                      style={{
                        fontSize: '0.95rem',
                        color: 'var(--mid)',
                        lineHeight: 1.8,
                        fontStyle: 'italic',
                      }}
                    >
                      {t.text}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}