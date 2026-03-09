import { useEffect, useRef } from 'react'

const stages = [
  {
    num: '01',
    name: 'Signal',
    headline: 'The event already\nhappened. We saw it.',
    body: '10+ public sources monitored continuously. SEC 8-K filings, Form D rounds, NLRB complaints, OSHA violations, WARN Act notices, FDIC activity, CFPB enforcement, federal contracts. Every event surfaces before your competition sees it.',
    stat: '10+ sources',
    unit: 'live',
  },
  {
    num: '02',
    name: 'Qualify',
    headline: 'Full context\nbefore a word is written.',
    body: 'Every company hit gets enriched. Pain points, competitor landscape, customer profile, leadership context. We build the picture before a word of outreach is written. No generic angles. No guessing.',
    stat: '100%',
    unit: 'enriched',
  },
  {
    num: '03',
    name: 'Introduce',
    headline: 'An introduction.\nNot a pitch.',
    body: 'Event → observation → connection → qualifying question. Written in the connector frame. The prospect is offered access, not sold to. Every email is tied to something that just happened to their company.',
    stat: 'CXO-Lang',
    unit: 'always',
  },
  {
    num: '04',
    name: 'Close',
    headline: 'You review replies.\nWe handled the rest.',
    body: 'Qualified conversations forwarded immediately. You don\'t touch the keyboard until a real human is on the other end asking how to move forward.',
    stat: '<24h',
    unit: 'turnaround',
  },
]

export default function HowItWorks() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 120)
          })
        }
      })
    }, { threshold: 0.08, rootMargin: '-60px' })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="how-it-works" ref={ref} style={{ background: '#0a0a0a', padding: '128px 64px' }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '48px' }}>
          <div style={{ width: '32px', height: '1px', background: '#8A6A1E' }} />
          <span className="font-mono" style={{ fontSize: '10px', color: '#9A9188', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Infrastructure, not agency</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '80px' }}>
          <h2 className="font-display reveal d1" style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 600, lineHeight: 1.0, letterSpacing: '-0.025em' }}>
            From signal<br />
            to conversation.
          </h2>
          <div className="reveal d2" style={{ textAlign: 'right' }}>
            <div className="font-mono" style={{ fontSize: '56px', fontWeight: 400, color: '#C4972A', lineHeight: 1, letterSpacing: '-0.03em' }}>24h</div>
            <div className="font-mono" style={{ fontSize: '10px', color: '#9A9188', marginTop: '8px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>average turnaround</div>
          </div>
        </div>

        {/* Steps — horizontal ruled layout, no boxes */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid #2a2a2a' }}>
          {stages.map((s, i) => (
            <div
              key={s.num}
              className="reveal"
              style={{
                padding: '48px 36px 48px 0',
                borderRight: i < 3 ? '1px solid #2a2a2a' : 'none',
                paddingLeft: i > 0 ? '36px' : '0',
                transitionDelay: `${i * 0.12}s`,
                position: 'relative',
              }}
            >
              {/* Step number */}
              <div className="font-mono" style={{ fontSize: '10px', color: '#8A6A1E', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '28px' }}>
                {s.num} / {s.name}
              </div>

              {/* Headline */}
              <h3 className="font-display" style={{
                fontSize: '24px', fontWeight: 600,
                lineHeight: 1.15, letterSpacing: '-0.02em',
                marginBottom: '18px', whiteSpace: 'pre-line',
              }}>{s.headline}</h3>

              <p className="font-ui" style={{ fontSize: '13px', fontWeight: 300, color: '#9A9188', lineHeight: 1.8, letterSpacing: '0.01em', marginBottom: '40px' }}>
                {s.body}
              </p>

              {/* Stat */}
              <div style={{ paddingTop: '24px', borderTop: '1px solid #1a1a1a' }}>
                <span className="font-mono" style={{ fontSize: '22px', color: '#C4972A', letterSpacing: '-0.02em', fontWeight: 400 }}>{s.stat}</span>
                <span className="font-mono" style={{ fontSize: '11px', color: '#9A9188', marginLeft: '8px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.unit}</span>
              </div>

              {/* Arrow connector */}
              {i < 3 && (
                <div className="font-mono" style={{
                  position: 'absolute', top: '50%', right: '-12px',
                  transform: 'translateY(-50%)',
                  fontSize: '11px', color: '#C4972A',
                  background: '#0a0a0a', padding: '4px',
                  zIndex: 1,
                }}>→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
