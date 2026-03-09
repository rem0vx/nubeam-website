import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const verticals = [
  {
    tag: 'FinTech',
    headline: 'The AUM is there.\nThe access isn\'t.',
    body: 'You\'re selling to RIAs and family offices managing $100M–$5B. The relationship is everything — and you don\'t have it yet. We do. We introduce when the fit is right.',
    signals: ['Form D filings', 'FDIC activity', 'SEC 8-K exec changes', 'News RSS'],
    buyers: 'RIAs & Family Offices',
  },
  {
    tag: 'Biotech',
    headline: 'Pharma BD moves\non relationships.',
    body: 'BD timelines run 18–36 months. The firms that close fast got in early, introduced by someone already trusted on both sides. That\'s the seat we hold.',
    signals: ['Clinical trial milestones', 'FDA clearances', 'Series B/C rounds', 'Executive moves'],
    buyers: 'Pharma BD Teams',
  },
  {
    tag: 'Tech Recruiting',
    headline: 'Series B just closed.\nThey\'re hiring now.',
    body: 'When a SaaS firm closes a funding round, they\'re building out leadership in 90 days. We see the filing before the job posting goes up. We make the call first.',
    signals: ['Form D filings', 'SEC 8-K material events', 'Funding news', 'LinkedIn signals'],
    buyers: 'Series A–C SaaS Firms',
  },
]

export default function Verticals() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="verticals" ref={ref} style={{ padding: '120px 60px', maxWidth: '1280px', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="w-7 h-px bg-aged-gold" />
        <span className="font-mono text-xs text-muted tracking-widest uppercase">Who we serve</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="font-display font-semibold leading-tight tracking-tight mb-16"
        style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
      >
        3 verticals.<br />All signal-driven.
      </motion.h2>

      <div className="grid grid-cols-3 gap-px bg-graphite border border-graphite rounded-sm overflow-hidden">
        {verticals.map((v, i) => (
          <motion.div
            key={v.tag}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="bg-void p-10 group hover:bg-smoke transition-colors duration-200"
          >
            <div className="font-mono text-xs text-aged-gold tracking-widest uppercase mb-7">{`0${i + 1} / ${v.tag}`}</div>
            <h3 className="font-display font-semibold leading-tight mb-5" style={{ fontSize: '26px', whiteSpace: 'pre-line' }}>
              {v.headline}
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-8">{v.body}</p>

            <div className="pt-6 border-t border-graphite">
              <div className="font-mono text-xs text-muted tracking-wider uppercase mb-3">Signals we watch</div>
              <div className="flex flex-wrap gap-2">
                {v.signals.map(s => (
                  <span key={s} className="font-mono text-xs text-muted border border-graphite px-3 py-1.5 rounded-sm">{s}</span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-graphite flex items-center justify-between">
              <span className="font-mono text-xs text-muted">Buyers</span>
              <span className="font-mono text-xs text-gold">{v.buyers}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
