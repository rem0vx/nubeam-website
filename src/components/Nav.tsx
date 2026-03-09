import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '24px 64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'background 0.5s, border-color 0.5s',
        background: scrolled ? 'rgba(8,8,8,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: `1px solid ${scrolled ? '#2a2a2a' : 'transparent'}`,
      }}
    >
      <img src="/logo-primary.png" alt="nuBeam Gen" style={{ height: '22px', width: 'auto' }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: '48px' }}>
        <a href="#how-it-works" className="font-mono" style={{ fontSize: '10px', color: '#9A9188', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.target as HTMLElement).style.color = '#F0EBE1'}
          onMouseLeave={e => (e.target as HTMLElement).style.color = '#9A9188'}
        >How it works</a>
        <a href="#verticals" className="font-mono" style={{ fontSize: '10px', color: '#9A9188', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.target as HTMLElement).style.color = '#F0EBE1'}
          onMouseLeave={e => (e.target as HTMLElement).style.color = '#9A9188'}
        >Who we serve</a>
        <a href="#booking"
          className="font-ui"
          style={{
            padding: '10px 24px',
            border: '1px solid #C4972A',
            color: '#C4972A',
            fontSize: '10px', fontWeight: 300,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            textDecoration: 'none',
            transition: 'background 0.2s, color 0.2s',
          }}
          onMouseEnter={e => { (e.target as HTMLElement).style.background = '#C4972A'; (e.target as HTMLElement).style.color = '#080808' }}
          onMouseLeave={e => { (e.target as HTMLElement).style.background = 'transparent'; (e.target as HTMLElement).style.color = '#C4972A' }}
        >Request Access</a>
      </div>
    </nav>
  )
}
