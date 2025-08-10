import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Destinations } from './sections/Destinations'
import { WhyUs } from './sections/WhyUs'
import { Testimonials } from './sections/Testimonials'
import { CTA } from './sections/CTA'
import { Payments } from './sections/Payments'
import { Certificate } from './sections/Certificate'
import { Footer } from './sections/Footer'
import { NavBar } from './components/NavBar'
import { LanguageProvider } from './contexts/LanguageContext'

export default function App() {
  return (
    <LanguageProvider>
      <div className="font-sans antialiased">
        <NavBar />
        <Hero />
        <About />
        <Destinations />
        <WhyUs />
        <Payments />
        <Testimonials />
        <Certificate />
        <CTA />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

// removed Vite starter demo
