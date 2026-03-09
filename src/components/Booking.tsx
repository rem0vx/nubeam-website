import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, fadeLeft, fadeRight, vp } from '../lib/motion'

export default function Booking() {
  const calLoaded = useRef(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !calLoaded.current) {
          calLoaded.current = true
          const s = document.createElement('script')
          s.type = 'text/javascript'
          s.innerHTML = `
            (function (C, A, L) {
              let p = function (a, ar) { a.q.push(ar); };
              let d = C.document;
              C.Cal = C.Cal || function () {
                let cal = C.Cal; let ar = arguments;
                if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; }
                if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return; } p(cal, ar);
              };
            })(window, "https://app.cal.com/embed/embed.js", "init");
            Cal("init", "outbound", {origin:"https://app.cal.com"});
            Cal.ns.outbound("inline", {
              elementOrSelector:"#cal-embed",
              config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"},
              calLink: "nubeam-gen/outbound",
            });
            Cal.ns.outbound("ui", {
              "hideEventTypeDetails": false,
              "layout": "month_view",
              "cssVarsPerTheme": {
                "dark": {
                  "cal-brand": "#C4972A",
                  "cal-bg": "#080808",
                  "cal-bg-emphasis": "#141414",
                  "cal-text": "#F0EBE1",
                  "cal-text-subtle": "#9A9188",
                  "cal-border": "#2a2a2a",
                  "cal-border-emphasis": "#2a2a2a"
                }
              }
            });
          `
          document.body.appendChild(s)
        }
      })
    }, { threshold: 0.05, rootMargin: '-40px' })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="booking" ref={sectionRef} style={{ background: '#0D1520', padding: '160px 64px' }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '100px', alignItems: 'start' }}>

        {/* Left copy */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={staggerContainer(0.05, 0.12)}
        >
          <motion.div variants={fadeLeft} style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '48px' }}>
            <div style={{ width: '32px', height: '1px', background: '#8A6A1E' }} />
            <span className="font-mono" style={{ fontSize: '10px', color: '#9A9188', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Request access</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display"
            style={{ fontSize: 'clamp(44px, 5.5vw, 76px)', fontWeight: 600, lineHeight: 0.95, letterSpacing: '-0.025em', marginBottom: '36px' }}
          >
            Let's see<br />if the fit<br />
            <em style={{ fontStyle: 'italic', color: '#C4972A' }}>is right.</em>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-ui"
            style={{ fontSize: '15px', fontWeight: 300, color: '#9A9188', lineHeight: 1.8, maxWidth: '360px', letterSpacing: '0.01em', marginBottom: '52px' }}
          >
            We work with a small number of operators at a time. If you're running
            signal-based deal flow across fintech, biotech, or tech — book a call.
            We'll know in 20 minutes.
          </motion.p>

          <motion.div
            variants={fadeUp}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '32px', borderTop: '1px solid #1C2A3A' }}
          >
            {[
              'Qualified operators only',
              'No experiments. No pilots.',
              'You pay for conversations that close.',
            ].map((line, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#C4972A', flexShrink: 0 }} />
                <span className="font-mono" style={{ fontSize: '11px', color: '#9A9188', letterSpacing: '0.06em' }}>{line}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Cal embed */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={fadeRight}
        >
          <div
            id="cal-embed"
            style={{
              width: '100%',
              height: '640px',
              overflow: 'scroll',
              border: '1px solid #1C2A3A',
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
