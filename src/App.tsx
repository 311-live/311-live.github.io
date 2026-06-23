import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import HowItWorksSection from './components/HowItWorksSection'
import ProductSection from './components/ProductSection'
import DemoSection from './components/DemoSection'
import PartnershipSection from './components/PartnershipSection'
import TeamSection from './components/TeamSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-brand-light-bg dark:bg-brand-bg">
        <Navbar />
        <main>
          <Hero />
          <AboutSection />
          <HowItWorksSection />
          <ProductSection />
          <DemoSection />
          <PartnershipSection />
          <TeamSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
