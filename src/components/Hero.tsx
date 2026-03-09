import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
})

export default function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-2 gap-20 items-center px-15 pt-40 pb-24 max-w-[1280px] mx-auto" style={{ padding: '160px 60px 96px' }}>
      {/* Left: copy */}
      <div>
        <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-8">
          <div className="w-7 h-px bg-aged-gold" />
          <span className="font-mono text-xs text-muted tracking-widest uppercase">nuBeam Gen</span>
        </motion.div>

        <motion.h1 {...fadeUp(0.2)} className="font-display font-semibold leading-[0.92] tracking-tight" style={{ fontSize: 'clamp(64px, 8vw, 104px)' }}>
          We sit between<br />
          <em className="not-italic text-gold">the tables.</em>
        </motion.h1>

        <motion.p {...fadeUp(0.35)} className="mt-9 text-muted leading-relaxed max-w-[420px]" style={{ fontSize: '16px', lineHeight: '1.75' }}>
          nuBeam Gen operates at the intersection of buyers and sellers across fintech, biotech, and tech.
          We don't pitch on your behalf — we introduce. Both sides already know us.
          When the fit is right, we make the call.
        </motion.p>

        <motion.div {...fadeUp(0.5)} className="flex items-center gap-7 mt-12">
          <a
            href="#booking"
            className="px-8 py-3.5 bg-gold text-void font-ui font-medium text-xs tracking-widest uppercase hover:bg-[#d4a73a] transition-colors rounded-sm"
          >
            Request Access
          </a>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-gold live-dot" />
            <span className="font-mono text-xs text-muted tracking-wider">Active introductions</span>
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.65)} className="flex items-center gap-10 mt-14 pt-8 border-t border-graphite">
          {[
            { num: '3', label: 'verticals active' },
            { num: '10+', label: 'signal sources' },
            { num: '<24h', label: 'signal to send' },
          ].map(({ num, label }) => (
            <div key={label}>
              <div className="font-mono text-gold text-xl font-medium">{num}</div>
              <div className="font-mono text-xs text-muted mt-1 tracking-wide">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right: SVG network visualization */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="relative"
      >
        <svg viewBox="0 0 480 520" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2E2E30" strokeWidth="0.4" />
            </pattern>
            {/* Paths for animated particles */}
            <path id="pb1" d="M 120,80 C 170,80 195,230 240,250" />
            <path id="pb2" d="M 120,160 C 175,160 205,240 240,250" />
            <path id="pb3" d="M 120,240 L 240,250" />
            <path id="pb4" d="M 120,320 C 175,320 205,260 240,250" />
            <path id="ps1" d="M 360,120 C 310,120 285,240 240,250" />
            <path id="ps2" d="M 360,200 C 310,200 285,245 240,250" />
            <path id="ps3" d="M 360,280 C 310,280 285,255 240,250" />
            <path id="ps4" d="M 360,360 C 310,360 285,260 240,250" />
          </defs>

          <rect width="480" height="520" fill="url(#grid)" opacity="0.5" />

          {/* LEFT: Buyer nodes */}
          {[
            { y: 58, label: 'RIA / Family Office' },
            { y: 138, label: 'Pharma BD' },
            { y: 218, label: 'Series B SaaS' },
            { y: 298, label: 'Growth-Stage Fund' },
          ].map(({ y, label }, i) => (
            <g key={i}>
              <rect x="10" y={y} width="110" height="40" rx="3" fill="#1C1C1E" stroke="#2E2E30" />
              <text x="22" y={y + 14} fontFamily="IBM Plex Mono" fontSize="7.5" fill="#8A6A1E" letterSpacing="1">BUYER</text>
              <text x="22" y={y + 28} fontFamily="IBM Plex Mono" fontSize="11" fill="#F0EBE1">{label}</text>
            </g>
          ))}

          {/* RIGHT: Seller nodes */}
          {[
            { y: 98, label: 'FinTech Operator' },
            { y: 178, label: 'Biotech Firm' },
            { y: 258, label: 'Tech Recruiter' },
            { y: 338, label: 'B2B Operator' },
          ].map(({ y, label }, i) => (
            <g key={i}>
              <rect x="350" y={y} width="118" height="40" rx="3" fill="#1C1C1E" stroke="#C4972A" strokeWidth="0.8" />
              <text x="362" y={y + 14} fontFamily="IBM Plex Mono" fontSize="7.5" fill="#8A6A1E" letterSpacing="1">CLIENT</text>
              <text x="362" y={y + 28} fontFamily="IBM Plex Mono" fontSize="11" fill="#F0EBE1">{label}</text>
            </g>
          ))}

          {/* Static connection lines - buyers */}
          {['pb1','pb2','pb3','pb4'].map((id, i) => (
            <path key={id} d={[
              "M 120,78 C 170,78 195,230 240,250",
              "M 120,158 C 175,158 205,240 240,250",
              "M 120,238 L 240,250",
              "M 120,318 C 175,318 205,260 240,250",
            ][i]} stroke="#2E2E30" strokeWidth="1" strokeDasharray="5 6" fill="none" />
          ))}

          {/* Static connection lines - sellers */}
          {['ps1','ps2','ps3','ps4'].map((id, i) => (
            <path key={id} d={[
              "M 350,118 C 300,118 275,240 240,250",
              "M 350,198 C 300,198 275,245 240,250",
              "M 350,278 C 305,278 280,255 240,250",
              "M 350,358 C 305,358 285,262 240,250",
            ][i]} stroke="#8A6A1E" strokeWidth="1" strokeDasharray="5 6" fill="none" strokeOpacity="0.5" />
          ))}

          {/* Animated particles - buyers to center */}
          {['pb1','pb2','pb3','pb4'].map((id, i) => (
            <circle key={id} r="3" fill="#C4972A" opacity="0.85">
              <animateMotion dur="3s" repeatCount="indefinite" begin={`${i * 0.7}s`}>
                <mpath href={`#${id}`} />
              </animateMotion>
            </circle>
          ))}

          {/* Animated particles - sellers to center (reverse) */}
          {['ps1','ps2','ps3','ps4'].map((id, i) => (
            <circle key={id} r="3" fill="#8A6A1E" opacity="0.7">
              <animateMotion dur="3s" repeatCount="indefinite" begin={`${i * 0.7 + 0.35}s`} keyPoints="1;0" keyTimes="0;1" calcMode="linear">
                <mpath href={`#${id}`} />
              </animateMotion>
            </circle>
          ))}

          {/* Central node: nuBeam Gen */}
          <circle cx="240" cy="250" r="62" fill="#0D1520" stroke="#8A6A1E" strokeWidth="1" />
          <circle cx="240" cy="250" r="70" fill="none" stroke="#8A6A1E" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="4 8">
            <animateTransform attributeName="transform" type="rotate" from="0 240 250" to="360 240 250" dur="20s" repeatCount="indefinite" />
          </circle>
          <text x="240" y="240" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="14" fontWeight="600" fill="#F0EBE1">nuBeam</text>
          <text x="240" y="257" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="14" fontWeight="600" fill="#F0EBE1">Gen</text>
          <text x="240" y="275" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="8.5" fill="#C4972A" letterSpacing="1.5">● LIVE</text>

          {/* Footer stats */}
          <rect x="10" y="448" width="460" height="1" fill="#2E2E30" />
          <text x="10" y="468" fontFamily="IBM Plex Mono" fontSize="9.5" fill="#9A9188">Buyers</text>
          <text x="200" y="468" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="9.5" fill="#C4972A">nuBeam Gen</text>
          <text x="468" y="468" textAnchor="end" fontFamily="IBM Plex Mono" fontSize="9.5" fill="#9A9188">Clients</text>
        </svg>
      </motion.div>
    </section>
  )
}
