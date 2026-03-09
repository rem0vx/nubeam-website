import { useEffect, useRef } from 'react'

const rows = [
  { attr: 'Positioning', them: 'Vendor with a product', us: 'Operator with access on both sides of the table' },
  { attr: 'Outreach', them: 'Cold email volume', us: 'Event-triggered introduction, connector frame' },
  { attr: 'Signal source', them: 'Bought lists, manual research', us: '10+ live public sources, monitored 24/7' },
  { attr: 'Copy', them: 'Generic templates, no context', us: 'Pain-specific, tied to a real event, always fresh' },
  { attr: 'Speed', them: 'Days to weeks', us: '<24 hours from signal to live Instantly campaign' },
  { attr: 'What you pay for', them: 'Leads you close yourself', us: 'Qualified conversations that already took place' },
]

export default function Comparison() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 80)
          })
        }
      })
    }, { threshold: 0.1, rootMargin: '-60px' })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} style={{ padding: '128px 64px', maxWidth: '1320px', margin: '0 auto' }}>
      <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '48px' }}>
        <div style={{ width: '32px', height: '1px', background: '#8A6A1E' }} />
        <span className="font-mono" style={{ fontSize: '10px', color: '#9A9188', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Why we're different</span>
      </div>

      <h2 className="font-display reveal d1" style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 600, lineHeight: 1.0, letterSpacing: '-0.025em', marginBottom: '80px' }}>
        Not an agency.<br />
        <em style={{ fontStyle: 'italic', color: '#9A9188' }}>An operator.</em>
      </h2>

      {/* Table — pure typography, no box */}
      <div className="reveal d2" style={{ borderTop: '1px solid #2a2a2a' }}>
        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr 1fr', borderBottom: '1px solid #2a2a2a', background: '#141414' }}>
          <div style={{ padding: '16px 0' }} />
          <div className="font-mono" style={{ padding: '16px 32px', fontSize: '10px', color: '#9A9188', letterSpacing: '0.12em', textTransform: 'uppercase', borderLeft: '1px solid #2a2a2a' }}>Everyone else</div>
          <div className="font-mono" style={{ padding: '16px 32px', fontSize: '10px', color: '#C4972A', letterSpacing: '0.12em', textTransform: 'uppercase', borderLeft: '1px solid #2a2a2a' }}>nuBeam Gen</div>
        </div>

        {rows.map((r) => (
          <div key={r.attr} style={{
            display: 'grid', gridTemplateColumns: '180px 1fr 1fr',
            borderBottom: '1px solid rgba(42,42,42,0.5)',
          }}>
            <div className="font-mono" style={{ padding: '22px 0', fontSize: '10px', color: '#9A9188', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'flex', alignItems: 'center' }}>{r.attr}</div>
            <div className="font-ui" style={{ padding: '22px 32px', fontSize: '14px', fontWeight: 300, color: '#9A9188', lineHeight: 1.6, borderLeft: '1px solid rgba(42,42,42,0.5)', display: 'flex', alignItems: 'center' }}>{r.them}</div>
            <div className="font-ui" style={{ padding: '22px 32px', fontSize: '14px', fontWeight: 300, color: '#F0EBE1', lineHeight: 1.6, borderLeft: '1px solid rgba(42,42,42,0.5)', display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(196,151,42,0.03)' }}>
              <span className="font-mono" style={{ color: '#C4972A', fontSize: '11px', flexShrink: 0 }}>→</span>
              {r.us}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
