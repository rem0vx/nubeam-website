const items = [
  'FinTech → RIAs & Family Offices',
  'Biotech → Pharma BD',
  'Tech Recruiting → Series A–C',
  '10+ Signal Sources',
  '<24h Signal to Conversation',
  'Connector Frame. Not Sales.',
  'nuBeam Gen',
]

export default function Marquee() {
  return (
    <div style={{
      borderTop: '1px solid #2a2a2a',
      borderBottom: '1px solid #2a2a2a',
      overflow: 'hidden',
      padding: '18px 0',
      background: '#141414',
    }}>
      <div className="marquee-inner" style={{ display: 'flex', whiteSpace: 'nowrap', gap: '0' }}>
        {[0, 1].map(k => (
          <span key={k} className="font-mono" style={{ fontSize: '11px', color: '#9A9188', letterSpacing: '0.12em', textTransform: 'uppercase', paddingRight: '80px' }}>
            {items.map((item, i) => (
              <span key={i}>
                <span style={{ color: i % 3 === 0 ? '#C4972A' : '#9A9188' }}>{item}</span>
                <span style={{ color: '#2a2a2a', margin: '0 24px' }}>·</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  )
}
