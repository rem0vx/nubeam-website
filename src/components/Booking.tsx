import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'

export default function Booking() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.innerHTML = `
      (function (C, A, L) {
        let p = function (a, ar) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal; let ar = arguments;
          if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; }
          if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "outbound", {origin:"https://app.cal.com"});
      Cal.ns.outbound("inline", {
        elementOrSelector:"#my-cal-inline-outbound",
        config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
        calLink: "nubeam-gen/outbound",
      });
      Cal.ns.outbound("ui", {"hideEventTypeDetails":false,"layout":"month_view","cssVarsPerTheme":{"dark":{"cal-brand":"#C4972A","cal-bg":"#080808","cal-text":"#F0EBE1","cal-border":"#2E2E30"}}});
    `
    document.body.appendChild(script)
    return () => { document.body.removeChild(script) }
  }, [])

  return (
    <section id="booking" ref={ref} style={{ padding: '160px 60px', background: '#0D1520' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="grid grid-cols-2 gap-20 items-start">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-7 h-px bg-aged-gold" />
              <span className="font-mono text-xs text-muted tracking-widest uppercase">Request access</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="font-display font-semibold leading-tight tracking-tight mb-8"
              style={{ fontSize: 'clamp(44px, 5vw, 72px)' }}
            >
              Let's see<br />
              if the fit<br />
              <em className="not-italic text-gold">is right.</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="text-muted leading-relaxed mb-10"
              style={{ fontSize: '15px', lineHeight: '1.75', maxWidth: '380px' }}
            >
              We work with a small number of operators at a time. If you're running signal-based deal flow across fintech, biotech, or tech — book a call. We'll know within 20 minutes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="space-y-4"
            >
              {[
                'Qualified operators only',
                'No experiments. No early-stage pilots.',
                'You pay for conversations that close.',
              ].map((line, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                  <span className="font-mono text-xs text-muted">{line}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Cal.com embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <div
              id="my-cal-inline-outbound"
              style={{ width: '100%', height: '600px', overflow: 'scroll', border: '1px solid #2E2E30', borderRadius: '4px' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
