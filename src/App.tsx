import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductSection from './components/ProductSection'
import DemoSection from './components/DemoSection'
import PartnershipSection from './components/PartnershipSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      <main>
        <Hero />
        <ProductSection />
        <DemoSection />
        <PartnershipSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
