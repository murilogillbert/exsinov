import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Features from './components/Features'
import Product from './components/Product'
import HowItWorks from './components/HowItWorks'
import Roadmap from './components/Roadmap'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ background: 'var(--navy)', overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Product />
      <HowItWorks />
      <Roadmap />
      <CTASection />
      <Footer />
    </div>
  )
}
