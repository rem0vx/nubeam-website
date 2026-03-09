import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Verticals from './components/Verticals'
import HowItWorks from './components/HowItWorks'
import Comparison from './components/Comparison'
import Booking from './components/Booking'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ background: '#080808', color: '#F0EBE1', minHeight: '100vh' }}>
      <Nav />
      <Hero />
      <Marquee />
      <Verticals />
      <HowItWorks />
      <Comparison />
      <Booking />
      <Footer />
    </div>
  )
}
