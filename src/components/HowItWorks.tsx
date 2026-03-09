import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, vp } from '../lib/motion'

const stages = [
  { num: '01', name: 'Signal', headline: 'The event happened.\nWe saw it first.', body: '10+ public sources: SEC 8-K, Form D, NLRB, OSHA, WARN Act, FDIC, CFPB, USAspending, news RSS. Every filing. Every enforcement. Every deal.', stat: '10+', unit: 'sources live' },
  { num: '02', name: 'Qualify', headline: 'Full context before\na word is written.', body: 'Every company enriched with pain points, competitor landscape, and customer profile. Results cached. We don\'t re-enrich a company we already know.', stat: '100%', unit: 'enriched' },
  { num: '03', name: 'Introduce', headline: 'An introduction.\nNot a pitch.', body: 'Event → observation → connection → qualifying question. Connector frame. The prospect is offered access, not sold to. Tied to something that just happened.', stat: 'CXO-Lang', unit: 'always' },
  { num: '04', name: 'Close', headline: 'You review replies.\nWe handled the rest.', body: 'Qualified conversations forwarded immediately. You don\'t touch the keyboard until a real human is asking how to move forward.', stat: '<24h', unit: 'turnaround' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ background: '#0a0a0a', padding: '128px 64px' }}>
      <motion.div
        variants={staggerContainer(0.1, 0.14)}
        initial="hidden"
        whileInView="visible"
        viewport={vp}
        style={{ maxWidth: '1320px', margin: '0 auto' }}
      >
        <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '48px' }}>
          <div style={{ width: '32px', height: '1px', background: '#8A6A1E' }} />
          <span className="font-mono" style={{ fontSize: '10px', color: '#9A9188', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Infrastructure, not agency</span>
        </motion.div>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '80px' }}>
          <motion.h2 variants={fadeUp} className="font-display" style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 600, lineHeight: 1.0, letterSpacing: '-0.025em' }}>
            From signal<br />to conversation.
          </motion.h2>
          <motion.div variants={fadeUp} style={{ textAlign: 'right' }}>
            <div className="font-mono" style={{ fontSize: '56px', fontWeight: 400, color: '#C4972A', lineHeight: 1, letterSpacing: '-0.03em' }}>24h</div>
            <div className="font-mono" style={{ fontSize: '10px', color: '#9A9188', marginTop: '8px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>average turnaround</div>
          </motion.div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid #2a2a2a' }}>
          {stages.map((s, i) => (
            <motion.div key={s.num} variants={fadeUp} style={{ padding: '44px 32px 44px 0', borderRight: i < 3 ? '1px solid #2a2a2a' : 'none', paddingLeft: i > 0 ? '32px' : '0', position: 'relative' }}>
              {i < 3 && <div className="font-mono" style={{ position: 'absolute', top: '50%', right: '-10px', transform: 'translateY(-50%)', fontSize: '11px', color: '#C4972A', background: '#0a0a0a', padding: '4px', zIndex: 1 }}>→</div>}
              <div className="font-mono" style={{ fontSize: '10px', color: '#8A6A1E', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '24px' }}>{s.num} / {s.name}</div>
              <h3 className="font-display" style={{ fontSize: '22px', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '16px', whiteSpace: 'pre-line' }}>{s.headline}</h3>
              <p className="font-ui" style={{ fontSize: '13px', fontWeight: 300, color: '#9A9188', lineHeight: 1.8, letterSpacing: '0.01em', marginBottom: '36px' }}>{s.body}</p>
              <div style={{ paddingTop: '20px', borderTop: '1px solid #1a1a1a' }}>
                <span className="font-mono" style={{ fontSize: '20px', color: '#C4972A', letterSpacing: '-0.02em' }}>{s.stat}</span>
                <span className="font-mono" style={{ fontSize: '10px', color: '#9A9188', marginLeft: '8px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.unit}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
