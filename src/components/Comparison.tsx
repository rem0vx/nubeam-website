import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const rows = [
  { attr: 'Positioning', them: 'Vendor selling a product', us: 'Operator with access on both sides' },
  { attr: 'Outreach style', them: 'Cold email volume campaigns', us: 'Event-triggered introductions, connector frame' },
  { attr: 'Signal source', them: 'Bought lists, manual research', us: '10+ live public sources monitored 24/7' },
  { attr: 'Copy approach', them: 'Generic templates, no context', us: 'Pain-specific, tied to a real event, always fresh' },
  { attr: 'Time to market', them: 'Days to weeks to send anything', us: '<24 hours from signal to live campaign' },
  { attr: 'What you pay for', them: 'Leads — you close them yourself', us: 'Qualified conversations that already took place' },
]

export default function Comparison() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} style={{ padding: '120px 60px', maxWidth: '1280px', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="w-7 h-px bg-aged-gold" />
        <span className="font-mono text-xs text-muted tracking-widest uppercase">Why we're different</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="font-display font-semibold leading-tight tracking-tight mb-16"
        style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
      >
        Not an agency.<br />An operator.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="border border-graphite rounded-sm overflow-hidden"
      >
        {/* Header */}
        <div className="grid bg-smoke border-b border-graphite" style={{ gridTemplateColumns: '200px 1fr 1fr' }}>
          <div className="px-7 py-4" />
          <div className="px-7 py-4 border-l border-graphite font-mono text-xs text-muted tracking-widest uppercase">Everyone else</div>
          <div className="px-7 py-4 border-l border-graphite font-mono text-xs text-gold tracking-widest uppercase" style={{ background: 'rgba(196,151,42,0.05)' }}>nuBeam Gen</div>
        </div>

        {rows.map((r) => (
          <div
            key={r.attr}
            className="grid border-b border-graphite/50 last:border-b-0 hover:bg-white/[0.01] transition-colors"
            style={{ gridTemplateColumns: '200px 1fr 1fr' }}
          >
            <div className="px-7 py-5 font-mono text-xs text-muted uppercase tracking-wider flex items-center">{r.attr}</div>
            <div className="px-7 py-5 border-l border-graphite text-muted text-sm flex items-center">{r.them}</div>
            <div className="px-7 py-5 border-l border-graphite text-sm flex items-center gap-3" style={{ background: 'rgba(196,151,42,0.04)' }}>
              <span className="font-mono text-gold text-xs flex-shrink-0">→</span>
              <span className="text-bone">{r.us}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
