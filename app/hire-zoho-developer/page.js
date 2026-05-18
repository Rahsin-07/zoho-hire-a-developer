import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import WhyHire from '../../components/WhyHire'
import Services from '../../components/Services'
import Pricing from '../../components/Pricing'
import Difference from '../../components/Difference'
import Process from '../../components/Process'
import Industries from '../../components/Industries'
import Comparison from '../../components/Comparison'
import CaseStudies from '../../components/CaseStudies'
import Testimonials from '../../components/Testimonials'
import Resources from '../../components/Resources'
import Consultation from '../../components/Consultation'
import FAQ from '../../components/FAQ'
import Footer from '../../components/Footer'
import ScrollTop from '../../components/ScrollTop'

export const metadata = {
  title: 'Hire Zoho Developer – From $11/hr | ZoFlowX',
  description: 'Hire certified Zoho developers from $11/hr. Custom CRM, automation & integrations built for your business. 100+ projects delivered. Free consultation today!',
}

export default function HireZohoDeveloper() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyHire />
        <Services />
        <Pricing />
        <Difference />
        <Process />
        <Industries />
        <Comparison />
        <CaseStudies />
        <Testimonials />
        <Resources />
        <Consultation />
        <FAQ />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}
