import { motion } from 'framer-motion'
import { staggerContainer, fadeLeft, vp } from '../lib/motion'

const verticals = [
  { num: '001', vertical: 'FinTech', headline: 'The AUM is there.\nThe access isn\'t.', body: 'You\'re selling to RIAs and family offices managing $100M–$5B. The relationship is everything — and you don\'t have it yet. We do. When the fit is right, we make the call.', buyer: 'RIAs & Family Offices', signals: ['Form D filings', 'FDIC activity', 'SEC 8-K exec changes'] },
  { num: '002', vertical: 'Biotech', headline: 'Pharma BD moves\non relationships.', body: 'BD timelines run 18–36 months. The firms that close fast got in early — introduced by someone already trusted on both sides. That\'s the seat we hold.', buyer: 'Pharma BD Teams', signals: ['FDA clearances', 'Series B/C raises', 'Clinical milestones'] },
  { num: '003', vertical: 'Tech Recruiting', headline: 'Series B closed.\nThey\'re hiring now.', body: 'When a SaaS firm closes a funding round, they\'re building out leadership in 90 days. We see the Form D before the job post goes live. We make the introduction first.', buyer: 'Series A–C SaaS Firms', signals: ['Form D filings', 'SEC 8-K events', 'Funding news RSS'] },
]

export default function Verticals() {
  return (
    <section id="verticals" style={{ padding: '128px 64px', maxWidth: '1320px', margin: '0 auto' }}>
      <motion.div variants={staggerContainer(0.1, 0.14)} initial="hidden" whileInView="visible" viewport={vp}>
        <motion.div variants={fadeLeft} style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '48px' }}>
          <div style={{ width: '32px', height: '1px', background: '#8A6A1E' }} />
          <span className="font-mono" style={{ fontSize: '10px', color: '#9A9188', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Who we serve</span>
        </motion.div>

        <motion.h2 variants={fadeLeft} className="font-display" style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 600, lineHeight: 1.0, letterSpacing: '-0.025em', marginBottom: '80px' }}>
          3 verticals.<br /><em style={{ fontStyle: 'italic', color: '#9A9188' }}>All signal-driven.</em>
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1px solid #2a2a2a' }}>
          {verticals.map((v, i) => (
            <motion.div key={v.num} variants={fadeLeft} style={{ padding: '48px 40px 48px 0', borderRight: i < 2 ? '1px solid #2a2a2a' : 'none', paddingLeft: i > 0 ? '40px' : '0' }}>
              <div className="font-mono" style={{ fontSize: '10px', color: '#8A6A1E', letterSpacing: '0.14em', marginBottom: '28px' }}>{v.num} / {v.vertical.toUpperCase()}</div>
              <h3 className="font-display" style={{ fontSize: '26px', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '18px', whiteSpace: 'pre-line' }}>{v.headline}</h3>
              <p className="font-ui" style={{ fontSize: '14px', fontWeight: 300, color: '#9A9188', lineHeight: 1.8, marginBottom: '36px', letterSpacing: '0.01em' }}>{v.body}</p>
              <div style={{ paddingTop: '24px', borderTop: '1px solid #1a1a1a' }}>
                <div className="font-mono" style={{ fontSize: '9px', color: '#9A9188', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '12px' }}>Signals we watch</div>
                {v.signals.map(s => (
                  <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#8A6A1E', flexShrink: 0 }} />
                    <span className="font-mono" style={{ fontSize: '11px', color: '#9A9188' }}>{s}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '20px', paddingTop: '18px', borderTop: '1px solid #1a1a1a', display: 'flex', justifyContent: 'space-between' }}>
                <span className="font-mono" style={{ fontSize: '9px', color: '#9A9188', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Buyer</span>
                <span className="font-mono" style={{ fontSize: '9px', color: '#C4972A', letterSpacing: '0.1em' }}>{v.buyer}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
