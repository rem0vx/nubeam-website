import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stages = [
  {
    num: '01',
    name: 'Signal',
    desc: '10+ public sources monitored around the clock. SEC 8-K filings, Form D rounds, NLRB complaints, OSHA violations, WARN Act notices, FDIC activity, CFPB enforcement, federal contracts, and news RSS. Every event surfaces before your competition sees it.',
    stat: '10+ sources live',
  },
  {
    num: '02',
    name: 'Qualify',
    desc: 'Every company hit gets enriched. Pain points, competitor landscape, customer profile, leadership context. We build the full picture before a word of outreach is written. No generic angles. No guessing.',
    stat: 'Full context. Always.',
  },
  {
    num: '03',
    name: 'Introduce',
    desc: 'CXO-Lang. Event → observation → connection → qualifying question. Written as an introduction, not a pitch. The prospect is offered access, not sold to. Every email is tied to something that just happened.',
    stat: 'Connector frame. Not sales.',
  },
  {
    num: '04',
    name: 'Close',
    desc: 'Qualified conversations forwarded to you immediately. You don\'t touch the keyboard until a real human is on the other end asking how to move forward. We handled everything before that moment.',
    stat: '<24h signal to conversation',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="how-it-works" ref={ref} style={{ background: '#060608', padding: '120px 60px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-7 h-px bg-aged-gold" />
          <span className="font-mono text-xs text-muted tracking-widest uppercase">Infrastructure, not agency</span>
        </motion.div>

        <div className="flex items-end justify-between mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="font-display font-semibold leading-tight tracking-tight"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
          >
            From signal<br />to conversation.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-right"
          >
            <div className="font-mono text-5xl font-medium text-gold" style={{ lineHeight: 1 }}>24h</div>
            <div className="font-mono text-xs text-muted mt-2 tracking-wider">average turnaround</div>
          </motion.div>
        </div>

        <div className="grid grid-cols-4 border border-graphite rounded-sm overflow-hidden">
          {stages.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="p-10 border-r border-graphite last:border-r-0 bg-void hover:bg-smoke transition-colors duration-200 relative group"
            >
              {i < stages.length - 1 && (
                <div className="absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-void border border-graphite flex items-center justify-center z-10">
                  <span className="font-mono text-gold text-xs">→</span>
                </div>
              )}
              <div className="font-mono text-xs text-aged-gold tracking-widest uppercase mb-7">{s.num} / {s.name}</div>
              <div className="font-display font-semibold text-bone mb-4" style={{ fontSize: '26px', lineHeight: 1.1 }}>{s.name}</div>
              <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-8 pt-6 border-t border-graphite font-mono text-xs text-gold">{s.stat}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
