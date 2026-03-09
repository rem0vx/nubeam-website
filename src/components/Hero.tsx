import { useEffect, useRef } from 'react'

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const actionsRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const vizRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = [headlineRef, subRef, actionsRef, statsRef, vizRef]
    const timers = els.map((ref, i) =>
      setTimeout(() => {
        if (ref.current) ref.current.style.opacity = '1'
        if (ref.current) ref.current.style.transform = 'translateY(0)'
      }, 200 + i * 140)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  const fadedStyle = (extra?: object) => ({
    opacity: 0,
    transform: 'translateY(28px)',
    transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)',
    ...extra,
  })

  return (
    <section style={{
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '80px',
      alignItems: 'center',
      padding: '160px 64px 100px',
      maxWidth: '1320px',
      margin: '0 auto',
    }}>
      {/* LEFT */}
      <div>
        {/* Label */}
        <div className="font-mono" style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '40px', ...fadedStyle() }} ref={undefined}>
          <div style={{ width: '32px', height: '1px', background: '#8A6A1E' }} />
          <span style={{ fontSize: '10px', color: '#9A9188', letterSpacing: '0.14em', textTransform: 'uppercase' }}>nuBeam Gen</span>
          <div className="live-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C4972A', marginLeft: '8px' }} />
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="font-display"
          style={{
            ...fadedStyle(),
            fontSize: 'clamp(68px, 7.5vw, 108px)',
            fontWeight: 600,
            lineHeight: 0.9,
            letterSpacing: '-0.025em',
            color: '#F0EBE1',
          }}
        >
          We sit<br />
          between<br />
          <em style={{ fontStyle: 'italic', color: '#C4972A' }}>the tables.</em>
        </h1>

        {/* Sub */}
        <p
          ref={subRef}
          className="font-ui"
          style={{
            ...fadedStyle(),
            marginTop: '40px',
            fontSize: '15px',
            fontWeight: 300,
            color: '#9A9188',
            lineHeight: 1.8,
            maxWidth: '400px',
            letterSpacing: '0.02em',
          }}
        >
          nuBeam Gen operates at the intersection of buyers and sellers across fintech,
          biotech, and tech. We don't pitch on your behalf — we introduce.
          Both sides already know us. When the fit is right, we make the call.
        </p>

        {/* Actions */}
        <div ref={actionsRef} style={{ ...fadedStyle(), display: 'flex', alignItems: 'center', gap: '32px', marginTop: '52px' }}>
          <a
            href="#booking"
            className="font-ui"
            style={{
              padding: '14px 36px',
              background: '#C4972A',
              color: '#080808',
              fontSize: '10px', fontWeight: 400,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'background 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#d4a73a')}
            onMouseLeave={e => (e.currentTarget.style.background = '#C4972A')}
          >
            Request Access
          </a>
          <span className="font-mono" style={{ fontSize: '11px', color: '#9A9188', letterSpacing: '0.06em' }}>Qualified operators only</span>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          style={{
            ...fadedStyle(),
            display: 'flex', gap: '48px',
            marginTop: '64px',
            paddingTop: '32px',
            borderTop: '1px solid #2a2a2a',
          }}
        >
          {[['3', 'verticals active'], ['10+', 'signal sources'], ['<24h', 'signal to send']].map(([n, l]) => (
            <div key={l}>
              <div className="font-mono" style={{ fontSize: '22px', color: '#C4972A', fontWeight: 400, letterSpacing: '-0.02em' }}>{n}</div>
              <div className="font-mono" style={{ fontSize: '10px', color: '#9A9188', marginTop: '6px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT: "Between the tables" editorial viz */}
      <div ref={vizRef} style={{ ...fadedStyle() }}>
        <div style={{ border: '1px solid #2a2a2a', overflow: 'hidden' }}>
          {/* Header row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', background: '#141414', borderBottom: '1px solid #2a2a2a' }}>
            <div className="font-mono" style={{ padding: '16px 24px', fontSize: '9px', color: '#9A9188', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Buyer</div>
            <div className="font-mono" style={{ padding: '16px 24px', fontSize: '9px', color: '#C4972A', letterSpacing: '0.14em', textTransform: 'uppercase', borderLeft: '1px solid #2a2a2a', borderRight: '1px solid #2a2a2a', textAlign: 'center' }}>nuBeam Gen</div>
            <div className="font-mono" style={{ padding: '16px 24px', fontSize: '9px', color: '#9A9188', letterSpacing: '0.14em', textTransform: 'uppercase', textAlign: 'right' }}>Client</div>
          </div>

          {/* Rows */}
          {[
            { buyer: 'RIA / Family Office', client: 'FinTech Operator', active: true },
            { buyer: 'Pharma BD Team', client: 'Biotech Firm', active: false },
            { buyer: 'Series B SaaS Firm', client: 'Tech Recruiter', active: true },
            { buyer: 'Growth-Stage Fund', client: 'B2B Operator', active: false },
            { buyer: 'Regional Bank', client: 'FinTech Vendor', active: false },
          ].map((row, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '1fr auto 1fr',
              borderBottom: '1px solid #1a1a1a',
              background: row.active ? 'rgba(196,151,42,0.025)' : 'transparent',
              transition: 'background 0.2s',
            }}>
              <div className="font-display" style={{ padding: '20px 24px', fontSize: '16px', fontWeight: 400, color: row.active ? '#F0EBE1' : '#9A9188', letterSpacing: '-0.01em' }}>{row.buyer}</div>
              <div style={{
                padding: '20px 28px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderLeft: '1px solid #2a2a2a', borderRight: '1px solid #2a2a2a',
              }}>
                {row.active ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '20px', height: '1px', background: '#8A6A1E' }} />
                    <div className="live-dot" style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#C4972A' }} />
                    <div style={{ width: '20px', height: '1px', background: '#8A6A1E' }} />
                  </div>
                ) : (
                  <div style={{ width: '48px', height: '1px', background: '#2a2a2a' }} />
                )}
              </div>
              <div className="font-display" style={{ padding: '20px 24px', fontSize: '16px', fontWeight: 400, color: row.active ? '#F0EBE1' : '#9A9188', letterSpacing: '-0.01em', textAlign: 'right' }}>{row.client}</div>
            </div>
          ))}

          {/* Footer */}
          <div style={{ padding: '16px 24px', background: '#141414', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="font-mono" style={{ fontSize: '9px', color: '#2a2a2a', letterSpacing: '0.1em' }}>ACCESS ROUTING</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div className="live-dot" style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#C4972A' }} />
              <span className="font-mono" style={{ fontSize: '9px', color: '#9A9188', letterSpacing: '0.1em' }}>LIVE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
