import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { staggerContainer, fadeUp, EASE } from '../lib/motion'

// Hero loads immediately — animate, not whileInView (same as myoprocess)
const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.13, delayChildren: 0.15 },
  },
}
const heroItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

// "Between the tables" — rows pulse gold like myoprocess node activation
function TableViz() {
  const [activeRow, setActiveRow] = useState(0)
  const rows = [
    { buyer: 'RIA / Family Office',   client: 'FinTech Operator' },
    { buyer: 'Pharma BD Team',        client: 'Biotech Firm' },
    { buyer: 'Series B SaaS Firm',    client: 'Tech Recruiter' },
    { buyer: 'Growth-Stage Fund',     client: 'B2B Operator' },
    { buyer: 'Regional Bank',         client: 'FinTech Vendor' },
  ]

  useEffect(() => {
    const t = setInterval(() => {
      setActiveRow(prev => (prev + 1) % rows.length)
    }, 1800)
    return () => clearInterval(t)
  }, [])

  return (
    <motion.div
      variants={staggerContainer(0.3, 0.08)}
      initial="hidden"
      animate="visible"
      style={{ border: '1px solid #2a2a2a' }}
    >
      {/* Header */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', background: '#141414', borderBottom: '1px solid #2a2a2a' }}>
        <span className="font-mono" style={{ padding: '14px 22px', fontSize: '9px', color: '#9A9188', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Buyer</span>
        <span className="font-mono" style={{ padding: '14px 22px', fontSize: '9px', color: '#C4972A', letterSpacing: '0.14em', textTransform: 'uppercase', borderLeft: '1px solid #2a2a2a', borderRight: '1px solid #2a2a2a', textAlign: 'center' }}>nuBeam Gen</span>
        <span className="font-mono" style={{ padding: '14px 22px', fontSize: '9px', color: '#9A9188', letterSpacing: '0.14em', textTransform: 'uppercase', textAlign: 'right' }}>Client</span>
      </div>

      {rows.map((row, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          style={{
            display: 'grid', gridTemplateColumns: '1fr auto 1fr',
            borderBottom: i < rows.length - 1 ? '1px solid #1a1a1a' : 'none',
            background: activeRow === i ? 'rgba(196,151,42,0.04)' : 'transparent',
            transition: 'background 0.6s',
          }}
        >
          <span className="font-display" style={{ padding: '18px 22px', fontSize: '15px', fontWeight: 400, color: activeRow === i ? '#F0EBE1' : '#52504d', letterSpacing: '-0.01em', transition: 'color 0.6s' }}>{row.buyer}</span>
          <div style={{ padding: '18px 22px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderLeft: '1px solid #2a2a2a', borderRight: '1px solid #2a2a2a' }}>
            {activeRow === i ? (
              <svg width="56" height="12" viewBox="0 0 56 12">
                <line x1="0" y1="6" x2="20" y2="6" stroke="#8A6A1E" strokeWidth="1"/>
                <circle cx="28" cy="6" r="3" fill="#C4972A">
                  <animate attributeName="r" values="3;5;3" dur="1.8s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="1;0.6;1" dur="1.8s" repeatCount="indefinite"/>
                </circle>
                <circle cx="28" cy="6" r="3" fill="none" stroke="#C4972A" strokeWidth="1">
                  <animate attributeName="r" values="3;10;14" dur="1.8s" repeatCount="1"/>
                  <animate attributeName="opacity" values="0.8;0.3;0" dur="1.8s" repeatCount="1"/>
                </circle>
                <line x1="36" y1="6" x2="56" y2="6" stroke="#8A6A1E" strokeWidth="1"/>
              </svg>
            ) : (
              <div style={{ width: '48px', height: '1px', background: '#2a2a2a' }} />
            )}
          </div>
          <span className="font-display" style={{ padding: '18px 22px', fontSize: '15px', fontWeight: 400, color: activeRow === i ? '#F0EBE1' : '#52504d', letterSpacing: '-0.01em', textAlign: 'right', transition: 'color 0.6s' }}>{row.client}</span>
        </motion.div>
      ))}

      {/* Footer */}
      <div style={{ padding: '14px 22px', background: '#141414', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="font-mono" style={{ fontSize: '9px', color: '#2a2a2a', letterSpacing: '0.1em' }}>ACCESS ROUTING</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div className="live-dot" style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#C4972A' }} />
          <span className="font-mono" style={{ fontSize: '9px', color: '#9A9188', letterSpacing: '0.1em' }}>LIVE</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Hero() {
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
      {/* LEFT — staggered text reveal, same as myoprocess hero */}
      <motion.div variants={heroContainer} initial="hidden" animate="visible">
        <motion.div variants={heroItem} style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '40px' }}>
          <div style={{ width: '32px', height: '1px', background: '#8A6A1E' }} />
          <span className="font-mono" style={{ fontSize: '10px', color: '#9A9188', letterSpacing: '0.14em', textTransform: 'uppercase' }}>nuBeam Gen</span>
          <div className="live-dot" style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#C4972A', marginLeft: '6px' }} />
        </motion.div>

        <motion.h1 variants={heroItem} className="font-display" style={{ fontSize: 'clamp(64px, 7.5vw, 104px)', fontWeight: 600, lineHeight: 0.92, letterSpacing: '-0.025em' }}>
          We sit<br />between<br /><em style={{ fontStyle: 'italic', color: '#C4972A' }}>the tables.</em>
        </motion.h1>

        <motion.p variants={heroItem} className="font-ui" style={{ marginTop: '36px', fontSize: '15px', fontWeight: 300, color: '#9A9188', lineHeight: 1.8, maxWidth: '400px', letterSpacing: '0.01em' }}>
          nuBeam Gen operates at the intersection of buyers and sellers across fintech,
          biotech, and tech. We don't pitch — we introduce. Both sides already know us.
          When the fit is right, we make the call.
        </motion.p>

        <motion.div variants={heroItem} style={{ display: 'flex', alignItems: 'center', gap: '28px', marginTop: '48px' }}>
          <a href="#booking" className="font-ui" style={{ padding: '14px 34px', background: '#C4972A', color: '#080808', fontSize: '10px', fontWeight: 400, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', transition: `background 0.2s` }}
            onMouseEnter={e => (e.currentTarget.style.background = '#d4a73a')}
            onMouseLeave={e => (e.currentTarget.style.background = '#C4972A')}
          >Request Access</a>
          <span className="font-mono" style={{ fontSize: '11px', color: '#9A9188', letterSpacing: '0.06em' }}>Qualified operators only</span>
        </motion.div>

        <motion.div variants={heroItem} style={{ display: 'flex', gap: '48px', marginTop: '60px', paddingTop: '32px', borderTop: '1px solid #2a2a2a' }}>
          {[['3', 'verticals active'], ['10+', 'signal sources'], ['<24h', 'signal to send']].map(([n, l]) => (
            <div key={l}>
              <div className="font-mono" style={{ fontSize: '22px', color: '#C4972A', fontWeight: 400, letterSpacing: '-0.02em' }}>{n}</div>
              <div className="font-mono" style={{ fontSize: '9px', color: '#9A9188', marginTop: '6px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{l}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* RIGHT — table viz */}
      <TableViz />
    </section>
  )
}
