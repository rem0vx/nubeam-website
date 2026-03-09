import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-15 py-5 transition-all duration-400 ${
        scrolled ? 'bg-void/94 backdrop-blur-md border-b border-graphite' : ''
      }`}
      style={{ padding: '20px 60px' }}
    >
      <img src="/logo-primary.png" alt="nuBeam Gen" className="h-6 w-auto" />
      <div className="flex items-center gap-8">
        <a href="#how-it-works" className="font-mono text-xs text-muted hover:text-bone transition-colors tracking-wider uppercase">How It Works</a>
        <a href="#verticals" className="font-mono text-xs text-muted hover:text-bone transition-colors tracking-wider uppercase">Who We Serve</a>
        <a
          href="#booking"
          className="px-5 py-2.5 border border-gold text-gold font-ui text-xs font-medium tracking-widest uppercase hover:bg-gold hover:text-void transition-all duration-200 rounded-sm"
        >
          Request Access
        </a>
      </div>
    </motion.nav>
  )
}
