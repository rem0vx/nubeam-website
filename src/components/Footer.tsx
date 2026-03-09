export default function Footer() {
  return (
    <footer className="border-t border-graphite" style={{ padding: '40px 60px' }}>
      <div className="flex items-center justify-between max-w-[1280px] mx-auto">
        <img src="/logo-mark-white.png" alt="nuBeam Gen" className="h-5 opacity-50" />
        <div className="font-mono text-xs text-muted">nuBeam Gen © 2026</div>
        <div className="flex items-center gap-6">
          <a href="mailto:remo@nubeam.io" className="font-mono text-xs text-muted hover:text-bone transition-colors">remo@nubeam.io</a>
          <a href="https://linkedin.com/in/remoduzkale" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-muted hover:text-bone transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
