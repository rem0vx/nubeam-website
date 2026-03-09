export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #2a2a2a', padding: '40px 64px' }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img src="/logo-mark-white.png" alt="nuBeam Gen" style={{ height: '18px', opacity: 0.45 }} />
        <div className="font-mono" style={{ fontSize: '10px', color: '#9A9188', letterSpacing: '0.08em' }}>nuBeam Gen © 2026</div>
        <div style={{ display: 'flex', gap: '32px' }}>
          {[['remo@nubeam.io', 'mailto:remo@nubeam.io'], ['LinkedIn', 'https://linkedin.com/in/remoduzkale']].map(([label, href]) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="font-mono gold-rule"
              style={{ fontSize: '10px', color: '#9A9188', letterSpacing: '0.08em', textDecoration: 'none', paddingBottom: '2px', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#F0EBE1')}
              onMouseLeave={e => (e.currentTarget.style.color = '#9A9188')}
            >{label}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
