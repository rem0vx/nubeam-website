import Nav from './components/Nav'
import Hero from './components/Hero'
import Verticals from './components/Verticals'
import HowItWorks from './components/HowItWorks'
import Comparison from './components/Comparison'
import Booking from './components/Booking'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-void text-bone min-h-screen">
      <Nav />
      <Hero />
      {/* Verticals strip */}
      <div className="border-t border-b border-graphite" style={{ padding: '28px 60px' }}>
        <div className="max-w-[1280px] mx-auto flex items-center gap-9">
          <span className="font-mono text-xs text-muted tracking-widest uppercase whitespace-nowrap flex-shrink-0">Active verticals</span>
          <div className="w-px h-8 bg-graphite flex-shrink-0" />
          <div className="flex gap-2.5 flex-wrap">
            {['FinTech → RIAs & Family Offices', 'Biotech → Pharma BD', 'Tech Recruiting → Series A–C SaaS'].map(v => (
              <span key={v} className="font-mono text-xs text-muted border border-graphite px-4 py-2 rounded-sm hover:border-aged-gold hover:text-bone transition-all cursor-default">{v}</span>
            ))}
          </div>
        </div>
      </div>
      <Verticals />
      <HowItWorks />
      <Comparison />
      <Booking />
      <Footer />
    </div>
  )
}
