import { useEffect, useRef } from 'react'

const verticals = [
  {
    num: '001',
    vertical: 'FinTech',
    headline: 'The AUM is there.\nThe access isn\'t.',
    body: 'You\'re selling to RIAs and family offices managing $100M–$5B. The relationship is everything — and you don\'t have it yet. We do. When the fit is right, we make the call.',
    buyer: 'RIAs & Family Offices',
    signals: ['Form D filings', 'FDIC activity', 'SEC 8-K exec changes'],
  },
  {
    num: '002',
    vertical: 'Biotech',
    headline: 'Pharma BD moves\non relationships.',
    body: 'BD timelines run 18–36 months. The firms that close fast got in early — introduced by someone already trusted on both sides. That\'s the seat we hold.',
    buyer: 'Pharma BD Teams',
    signals: ['FDA clearances', 'Series B/C raises', 'Clinical milestones'],
  },
  {
    num: '003',
    vertical: 'Tech Recruiting',
    headline: 'Series B closed.\nThey\'re hiring now.',
    body: 'When a SaaS firm closes a funding round, they\'re building out leadership in 90 days. We see the Form D filing before the job post goes live. We make the introduction first.',
    buyer: 'Series A–C SaaS Firms',
    signals: ['Form D filings', 'SEC 8-K events', 'Funding news RSS'],
  },
]

export default function Verticals() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 100)
          })
        }
      })
    }, { threshold: 0.1, rootMargin: '-60px' })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="verticals" ref={ref} style={{ padding: '128px 64px', maxWidth: '1320px', margin: '0 auto' }}>
      {/* Section label */}
      <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '48px' }}>
        <div style={{ width: '32px', height: '1px', background: '#8A6A1E' }} />
        <span className="font-mono" style={{ fontSize: '10px', color: '#9A9188', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Who we serve</span>
      </div>

      <h2 className="font-display reveal d1" style={{
        fontSize: 'clamp(40px, 5vw, 64px)',
        fontWeight: 600, lineHeight: 1.0,
        letterSpacing: '-0.025em',
        marginBottom: '80px',
      }}>
        3 verticals.<br />
        <em style={{ fontStyle: 'italic', color: '#9A9188' }}>All signal-driven.</em>
      </h2>

      {/* Verticals — no cards, just ruled columns */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1px solid #2a2a2a' }}>
        {verticals.map((v, i) => (
          <div
            key={v.num}
            className="reveal"
            style={{
              padding: '48px 40px 48px 0',
              borderRight: i < 2 ? '1px solid #2a2a2a' : 'none',
              paddingLeft: i > 0 ? '40px' : '0',
              transitionDelay: `${i * 0.12}s`,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
              <span className="font-mono" style={{ fontSize: '10px', color: '#8A6A1E', letterSpacing: '0.14em' }}>{v.num} / {v.vertical.toUpperCase()}</span>
            </div>

            <h3 className="font-display" style={{
              fontSize: '28px', fontWeight: 600,
              lineHeight: 1.1, letterSpacing: '-0.02em',
              color: '#F0EBE1', marginBottom: '20px',
              whiteSpace: 'pre-line',
            }}>{v.headline}</h3>

            <p className="font-ui" style={{ fontSize: '14px', fontWeight: 300, color: '#9A9188', lineHeight: 1.8, marginBottom: '40px', letterSpacing: '0.01em' }}>
              {v.body}
            </p>

            {/* Signals */}
            <div style={{ paddingTop: '28px', borderTop: '1px solid #1a1a1a' }}>
              <div className="font-mono" style={{ fontSize: '9px', color: '#9A9188', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '14px' }}>Signals we watch</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {v.signals.map(s => (
                  <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#8A6A1E', flexShrink: 0 }} />
                    <span className="font-mono" style={{ fontSize: '11px', color: '#9A9188' }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid #1a1a1a', display: 'flex', justifyContent: 'space-between' }}>
              <span className="font-mono" style={{ fontSize: '9px', color: '#9A9188', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Buyer</span>
              <span className="font-mono" style={{ fontSize: '9px', color: '#C4972A', letterSpacing: '0.1em' }}>{v.buyer}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
