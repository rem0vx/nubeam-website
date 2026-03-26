'use client'

import { useEffect, useRef, useState } from 'react'
import { Radar, IconContainer } from '../components/ui/radar-effect'
import { BeamsBackground } from '../components/ui/beams-background'
import { GlobePulse } from '../components/ui/cobe-globe-pulse'
import { HiDocumentText } from 'react-icons/hi'
import { AiFillDollarCircle } from 'react-icons/ai'
import { BsClipboardDataFill, BsBuildingsFill } from 'react-icons/bs'
import { BiSolidBank, BiSolidChart } from 'react-icons/bi'
import { RiLineChartFill, RiFundsFill } from 'react-icons/ri'

const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK || 'https://cal.com/nubeam-gen/dealflow'

function useFadeUp() {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      ref.current.querySelectorAll('.fade-up').forEach((el) => el.classList.add('fade-up-visible'))
      return
    }
    const els = ref.current.querySelectorAll('.fade-up')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-up-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return ref
}

const SERVICES = [
  { num: '01', title: 'Raise Readiness & Positioning', desc: 'Determine capital type, stage, and investor targets — before entering any conversation.' },
  { num: '02', title: 'Investor Narrative Development', desc: 'Materials engineered for family offices, PE funds, and strategic investors — not a generic deck.' },
  { num: '03', title: 'Strategic Introductions', desc: 'Personal introductions to our network. Every connection carries our reputation.' },
  { num: '04', title: 'Materials & Diligence Preparation', desc: 'Stress-tested against institutional standards. Financials, data room, Q&A — ready when it matters.' },
  { num: '05', title: 'Investor Relationship Management', desc: 'Ongoing engagement — updates, follow-on conversations, positioning for future capital needs.' },
  { num: '06', title: 'Market Intelligence Reports', desc: 'Sector reports delivered to your network. Position as an operator who understands the landscape.' },
]

const PROCESS = [
  { phase: '01', title: 'Situation Brief', posture: 'Private', desc: 'A structured session covering your raise, cap table, strategic priorities, and where prior conversations stalled. Confidential.' },
  { phase: '02', title: 'Network & Mandate Mapping', posture: 'Internal', desc: 'We cross-reference your opportunity against active mandates — who is deploying, what sectors, what structures, who holds authority.' },
  { phase: '03', title: 'Positioning & Materials', posture: 'Collaborative', desc: 'We develop your investor brief and narrative. You approve all language. Nothing moves without your sign-off.' },
  { phase: '04', title: 'Curated Introductions', posture: 'Live', desc: '3–7 personal introductions over a defined window. Full context on both sides. No spray. No mass outreach.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'nuBeam Gen',
  url: 'https://nubeam.io',
  description: 'Founder growth and market access advisory. Warm introductions to Family Offices, Venture Capital, Private Equity, and Hedge Funds worldwide.',
  areaServed: 'Worldwide',
  serviceType: [
    'Investor Introductions',
    'Capital Network Access',
    'Founder Advisory',
    'Deal Flow Sourcing',
    'Market Access Advisory',
  ],
  knowsAbout: [
    'Family Office Investing',
    'Venture Capital',
    'Private Equity',
    'Hedge Funds',
    'Founder Capital Raising',
    'Institutional Investor Relations',
  ],
}

export default function LeadMagnetPage() {
  const pageRef = useFadeUp()
  const [showFloating, setShowFloating] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openService, setOpenService] = useState(null)

  useEffect(() => {
    const onScroll = () => setShowFloating(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToApply = () => {
    setMobileOpen(false)
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div ref={pageRef} className="min-h-screen bg-[#0a0a0a] text-[#e2e2e2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; }
        body { font-family: 'DM Sans', system-ui, sans-serif; background: #0a0a0a; }

        .fade-up {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .fade-up-visible { opacity: 1; transform: translateY(0); }

        @media (prefers-reduced-motion: reduce) {
          .fade-up { transition: none; opacity: 1; transform: none; }
        }

        .cormorant { font-family: 'Cormorant', Georgia, serif; }

        .service-row {
          border-top: 1px solid #1c1c1c;
          transition: background 0.2s ease;
          cursor: pointer;
        }
        .service-row:last-child { border-bottom: 1px solid #1c1c1c; }
        .service-row:hover { background: #111111; }

        .service-desc {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
          opacity: 0;
        }
        .service-desc.open { max-height: 120px; opacity: 1; }

        ::selection { background: rgba(255,226,89,0.15); color: #fff; }
      `}</style>

      {/* ━━━ NAV ━━━ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between border-b border-[#1c1c1c]">
          <span className="cormorant font-medium text-xl tracking-widest text-white">
            nuBeam <span className="text-[#FFE259]">Gen</span>
          </span>

          <div className="hidden md:flex items-center gap-10 text-xs tracking-widest uppercase text-[#999] font-light">
            <a href="#services" className="hover:text-[#e2e2e2] transition-colors cursor-pointer">Services</a>
            <a href="#process" className="hover:text-[#e2e2e2] transition-colors cursor-pointer">Process</a>
            <a href="#who" className="hover:text-[#e2e2e2] transition-colors cursor-pointer">Who We Work With</a>
            <button
              onClick={scrollToApply}
              className="text-[#FFE259] border border-[#FFE259]/30 px-5 py-2 text-[10px] tracking-widest uppercase hover:bg-[#FFE259]/5 transition-colors cursor-pointer"
            >
              Apply
            </button>
          </div>

          <button
            className="md:hidden text-[#aaa] hover:text-white transition-colors cursor-pointer"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-b border-[#1c1c1c] bg-[#0a0a0a] px-8 py-6 flex flex-col gap-5 text-xs tracking-widest uppercase text-[#999]">
            <a href="#services" onClick={() => setMobileOpen(false)} className="hover:text-white transition-colors cursor-pointer">Services</a>
            <a href="#process" onClick={() => setMobileOpen(false)} className="hover:text-white transition-colors cursor-pointer">Process</a>
            <a href="#who" onClick={() => setMobileOpen(false)} className="hover:text-white transition-colors cursor-pointer">Who We Work With</a>
            <button onClick={scrollToApply} className="text-[#FFE259] text-left cursor-pointer">Apply →</button>
          </div>
        )}
      </nav>

      {/* ━━━ HERO ━━━ */}
      <BeamsBackground intensity="strong" className="pt-16 px-8">
      <section className="min-h-screen flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full py-24 md:py-32">
          {/* Eyebrow */}
          <div className="fade-up mb-12">
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#888] font-light">
              Founder Growth &nbsp;&middot;&nbsp; Market Access &nbsp;&middot;&nbsp; By Application Only
            </span>
          </div>

          {/* Main headline — exaggerated minimalism */}
          <h1
            className="cormorant fade-up font-light text-white leading-[0.92] tracking-tight mb-16"
            style={{
              fontSize: 'clamp(3.5rem, 9vw, 8.5rem)',
              transitionDelay: '0.1s',
            }}
          >
            Ushering in<br />
            the New Age<br />
            of Founder-<br />
            <span className="italic text-[#FFE259]">Focused Growth.</span>
          </h1>

          {/* Sub + CTA side by side on desktop */}
          <div
            className="fade-up flex flex-col md:flex-row md:items-end gap-10 md:gap-24 max-w-5xl"
            style={{ transitionDelay: '0.2s' }}
          >
            <p className="text-[#aaa] text-base md:text-lg font-light leading-relaxed max-w-md">
              We connect founders to relationships across $3 trillion in capital&nbsp;—
              Family Offices, Venture Capital, Private Equity, and Hedge Funds&nbsp;—
              worldwide. Our team carries $80B in transaction experience.
            </p>
            <div className="flex flex-col gap-4 shrink-0">
              <button
                onClick={scrollToApply}
                className="bg-[#FFE259] text-[#0a0a0a] px-10 py-4 text-xs tracking-widest uppercase font-medium hover:bg-[#FFE259]/90 active:scale-[0.98] transition-all duration-150 cursor-pointer whitespace-nowrap"
              >
                Apply to Work With Us
              </button>
              <span className="text-[10px] tracking-widest uppercase text-[#777] text-center">
                Selective &nbsp;&middot;&nbsp; Confidential &nbsp;&middot;&nbsp; Introduction-led
              </span>
            </div>
          </div>

          {/* Stat row — editorial, no boxes */}
          <div
            className="fade-up mt-20 pt-10 border-t border-[#1c1c1c] grid grid-cols-3 gap-0 max-w-lg"
            style={{ transitionDelay: '0.3s' }}
          >
            {[
              { num: '$80B', label: 'Team Track Record' },
              { num: '$3T+', label: 'Capital Network' },
              { num: '100+', label: 'Relationships' },
            ].map((s, i) => (
              <div key={s.label} className={`py-4 ${i > 0 ? 'pl-8 border-l border-[#1c1c1c]' : 'pr-8'}`}>
                <div
                  className="cormorant text-3xl md:text-4xl font-light text-white mb-1"
                >
                  {s.num}
                </div>
                <div className="text-[10px] tracking-widest uppercase text-[#888]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </BeamsBackground>

      {/* ━━━ SERVICES ━━━ */}
      <section id="services" className="px-8 py-28 border-t border-[#1c1c1c]">
        <div className="max-w-7xl mx-auto">
          <div className="fade-up mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#888] mb-5">What We Do</p>
              <h2
                className="cormorant font-light text-white leading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                Six capabilities.<br />
                <span className="italic">One mandate.</span>
              </h2>
            </div>
            <p className="text-sm text-[#999] max-w-xs leading-relaxed font-light">
              Every engagement is structured around the same goal: get you to the right table, prepared and positioned correctly.
            </p>
          </div>

          {/* Accordion list — not cards */}
          <div className="fade-up">
            {SERVICES.map((s, i) => (
              <div
                key={s.num}
                className="service-row"
                style={{ transitionDelay: `${i * 0.05}s` }}
                onClick={() => setOpenService(openService === i ? null : i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setOpenService(openService === i ? null : i)}
                aria-expanded={openService === i}
              >
                <div className="flex items-center justify-between py-5">
                  <div className="flex items-center gap-8 md:gap-16">
                    <span className="text-[10px] tracking-widest text-[#888] font-mono w-6">{s.num}</span>
                    <span
                      className="cormorant font-light text-white text-xl md:text-2xl"
                    >
                      {s.title}
                    </span>
                  </div>
                  <svg
                    className={`w-4 h-4 text-[#888] transition-transform duration-300 shrink-0 ${openService === i ? 'rotate-45' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
                <div className={`service-desc ${openService === i ? 'open' : ''}`}>
                  <p className="text-sm text-[#aaa] font-light leading-relaxed pb-5 pl-14 md:pl-24 max-w-2xl">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ CREDENTIALS ━━━ */}
      <section id="network" className="px-8 py-28 border-t border-[#1c1c1c] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

            {/* Left — copy */}
            <div>
              <div className="fade-up mb-6">
                <p className="text-[10px] tracking-[0.35em] uppercase text-[#888]">Track Record</p>
              </div>

              {/* Giant layered number */}
              <div className="fade-up relative mb-8" style={{ transitionDelay: '0.08s' }}>
                <span
                  className="cormorant font-light text-white block leading-none tracking-tight"
                  style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', opacity: 0.06, userSelect: 'none' }}
                  aria-hidden="true"
                >
                  $80B
                </span>
                <div className="absolute inset-0 flex flex-col justify-center">
                  <span
                    className="cormorant font-light text-white leading-none tracking-tight"
                    style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
                  >
                    $80B
                  </span>
                </div>
              </div>

              <div className="fade-up" style={{ transitionDelay: '0.16s' }}>
                <p className="text-[#999] text-sm font-light leading-relaxed mb-10 max-w-sm">
                  In total transactions across the careers of our team members and advisors&nbsp;—
                  spanning private debt &amp; equity and go-public transactions for private companies.
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {['Family Offices', 'Venture Capital', 'Private Equity', 'Hedge Funds'].map((t) => (
                    <span key={t} className="text-[10px] tracking-[0.3em] uppercase text-[#777]">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — interactive globe */}
            <div className="fade-up flex flex-col items-center" style={{ transitionDelay: '0.12s' }}>
              <GlobePulse className="w-full max-w-[420px]" speed={0.002} />
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#777] mt-6 text-center">
                London &nbsp;&middot;&nbsp; New York &nbsp;&middot;&nbsp; Dubai &nbsp;&middot;&nbsp; Singapore &nbsp;&middot;&nbsp; Zurich &nbsp;&middot;&nbsp; Tokyo
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ━━━ MARKET SIGNAL RADAR ━━━ */}
      <section className="px-8 py-28 border-t border-[#1c1c1c] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="fade-up mb-6">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#888] mb-5">How We Operate</p>
            <h2
              className="cormorant font-light text-white leading-tight mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Tracking mandates.<br />
              <span className="italic">Gauging market signals.</span>
            </h2>
            <p className="text-sm text-[#999] font-light leading-relaxed max-w-md">
              We monitor capital deployment activity, fund vintages, allocation mandates,
              and market conditions across our network — so every introduction is timed correctly.
            </p>
          </div>

          {/* Radar visual */}
          <div className="fade-up relative flex h-[420px] w-full items-center justify-center overflow-hidden" style={{ transitionDelay: '0.1s' }}>
            {/* Row 1 — top */}
            <div className="absolute top-0 left-0 right-0 flex justify-between items-start px-4 md:px-12 pt-6">
              <IconContainer
                text="Form D Filings"
                delay={0.2}
                icon={<HiDocumentText className="h-6 w-6 text-[#FFE259]" />}
              />
              <IconContainer
                delay={0.4}
                text="Capital Allocations"
                icon={<AiFillDollarCircle className="h-6 w-6 text-[#FFE259]" />}
              />
              <IconContainer
                text="Fund Mandates"
                delay={0.3}
                icon={<RiFundsFill className="h-6 w-6 text-[#FFE259]" />}
              />
            </div>

            {/* Row 2 — sides */}
            <div className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2">
              <IconContainer
                text="PE Activity"
                delay={0.5}
                icon={<BsBuildingsFill className="h-6 w-6 text-[#FFE259]" />}
              />
            </div>
            <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2">
              <IconContainer
                text="Market Signals"
                delay={0.6}
                icon={<BiSolidChart className="h-6 w-6 text-[#FFE259]" />}
              />
            </div>

            {/* Row 3 — bottom */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-between items-end px-4 md:px-20 pb-6">
              <IconContainer
                delay={0.7}
                text="Family Offices"
                icon={<BiSolidBank className="h-6 w-6 text-[#FFE259]" />}
              />
              <IconContainer
                delay={0.8}
                text="Vintage Timing"
                icon={<RiLineChartFill className="h-6 w-6 text-[#FFE259]" />}
              />
              <IconContainer
                delay={0.5}
                text="Fund Flow Data"
                icon={<BsClipboardDataFill className="h-6 w-6 text-[#FFE259]" />}
              />
            </div>

            {/* Radar centered */}
            <Radar className="absolute" />

            {/* Bottom fade line */}
            <div className="absolute bottom-0 z-40 h-px w-full bg-gradient-to-r from-transparent via-[#FFE259]/10 to-transparent" />
          </div>

          {/* Signal tags row */}
          <div className="fade-up flex flex-wrap gap-3 mt-4" style={{ transitionDelay: '0.2s' }}>
            {['Active Deployment Cycles', 'Sector Mandates', 'Fund Vintages', 'LP Allocation Windows', 'Co-Investment Appetite', 'Strategic M&A Interest'].map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-widest uppercase text-[#888] border border-[#1c1c1c] px-3 py-1.5 font-light"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ PROCESS ━━━ */}
      <section id="process" className="px-8 py-28 border-t border-[#1c1c1c]">
        <div className="max-w-7xl mx-auto">
          <div className="fade-up mb-16">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#888] mb-5">The Process</p>
            <h2
              className="cormorant font-light text-white leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Four phases.<br />
              <span className="italic">One focused window.</span>
            </h2>
          </div>

          {/* Process as editorial list, not cards */}
          <div className="space-y-0">
            {PROCESS.map((p, i) => (
              <div
                key={p.phase}
                className="fade-up border-t border-[#1c1c1c] py-8 grid grid-cols-1 md:grid-cols-[80px_1fr_120px] gap-4 md:gap-12 items-start"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <span className="text-[10px] tracking-widest text-[#888] font-mono pt-1">{p.phase}</span>
                <div>
                  <h3
                    className="cormorant font-light text-white text-2xl md:text-3xl mb-3"
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#999] font-light leading-relaxed max-w-lg">{p.desc}</p>
                </div>
                <span className="text-[10px] tracking-widest uppercase text-[#777] font-light pt-1 md:text-right">{p.posture}</span>
              </div>
            ))}
            <div className="border-t border-[#1c1c1c]" />
          </div>
        </div>
      </section>

      {/* ━━━ WHO WE WORK WITH ━━━ */}
      <section id="who" className="px-8 py-28 border-t border-[#1c1c1c]">
        <div className="max-w-7xl mx-auto">
          <div className="fade-up mb-16">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#888] mb-5">Selectivity</p>
            <h2
              className="cormorant font-light text-white leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              A small number of<br />
              <span className="italic">founders, at any one time.</span>
            </h2>
          </div>

          <div className="fade-up grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24" style={{ transitionDelay: '0.1s' }}>
            {/* Who fits */}
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#FFE259] mb-8">Who fits</p>
              <ul className="space-y-5">
                {[
                  'Raising $2M–$100M in debt, equity, or hybrid structures',
                  'Have traction or PMF but lack institutional network depth',
                  'Targeting Family Offices, PE, strategics, or Hedge Funds',
                  'Open to narrative guidance before approaching investors',
                  'Can move on a focused 30–60 day process',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-5 text-sm text-[#888] font-light leading-relaxed">
                    <span className="text-[#FFE259]/50 mt-1 shrink-0 text-xs">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Who doesn't fit */}
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#888] mb-8">Who doesn&apos;t fit</p>
              <ul className="space-y-5">
                {[
                  'Pre-product or pre-revenue',
                  'Seeking broad spray to 100+ investors simultaneously',
                  'Already working with a banker or placement agent',
                  'Not willing to run a structured, focused process',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-5 text-sm text-[#888] font-light leading-relaxed">
                    <span className="text-[#666] mt-1 shrink-0 text-xs">—</span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-12 text-[11px] tracking-widest uppercase text-[#777] font-light italic">
                If you&apos;re unsure, the application will tell us both.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ BOOK A CALL ━━━ */}
      <section id="apply" className="px-8 py-28 border-t border-[#1c1c1c]">
        <div className="max-w-7xl mx-auto">
          <div className="fade-up grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#888] mb-5">Work With Us</p>
              <h2
                className="cormorant font-light text-white leading-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                Ready to open<br />
                <span className="italic">the right doors?</span>
              </h2>
              <p className="text-sm text-[#999] font-light leading-relaxed max-w-sm">
                Schedule a private 30-minute conversation. We&apos;ll discuss
                your raise, your network gaps, and whether there&apos;s a fit
                for us to work together.
              </p>
              <div className="mt-10 space-y-3 text-[10px] tracking-widest uppercase text-[#777]">
                <p>— Confidential</p>
                <p>— No obligation</p>
                <p>— Selective engagements only</p>
              </div>
            </div>

            <div className="fade-up" style={{ transitionDelay: '0.12s' }}>
              <a
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-[#1c1c1c] p-10 hover:border-[#FFE259]/30 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <p className="text-[10px] tracking-widest uppercase text-[#888] mb-2">Book a Call</p>
                    <p
                      className="cormorant text-white font-light"
                      style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}
                    >
                      30-Minute Strategy Session
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-[#888] group-hover:text-[#FFE259] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200 shrink-0 mt-1"
                    fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>

                <div className="border-t border-[#1c1c1c] pt-8">
                  <p className="text-xs text-[#888] font-light leading-relaxed">
                    Walk us through your business, your raise structure, and where
                    prior conversations have stalled. We&apos;ll share whether our
                    network is the right fit.
                  </p>
                </div>

                <div className="mt-8">
                  <span className="inline-block bg-[#FFE259] text-[#0a0a0a] px-8 py-3.5 text-[10px] tracking-widest uppercase font-medium group-hover:bg-[#FFE259]/90 transition-colors duration-150">
                    Schedule Now →
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ FOOTER ━━━ */}
      <footer className="border-t border-[#1c1c1c] py-10 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="cormorant font-medium text-lg tracking-widest text-white">
            nuBeam <span className="text-[#FFE259]">Gen</span>
          </span>
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#666]">Founder Focused Growth Advisory</p>
          <p className="text-[10px] text-[#666] tracking-wider">&copy; {new Date().getFullYear()} nuBeam Gen</p>
        </div>
      </footer>

      {/* ━━━ FLOATING CTA ━━━ */}
      <div
        className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${
          showFloating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
        }`}
      >
        <button
          onClick={scrollToApply}
          className="flex items-center gap-3 bg-[#FFE259] text-[#0a0a0a] px-6 py-3.5 text-[10px] tracking-widest uppercase font-medium hover:bg-[#FFE259]/90 active:scale-[0.98] transition-all duration-150 cursor-pointer shadow-2xl"
        >
          Apply to Work With Us <span>→</span>
        </button>
      </div>
    </div>
  )
}
