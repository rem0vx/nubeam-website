"use client"

import { useEffect, useRef, useCallback } from "react"
import createGlobe from "cobe"

// Major global financial hubs — Family Offices, PE, VC, Hedge Funds
const defaultMarkers = [
  { id: "london",    location: [51.51,  -0.13],   delay: 0    }, // London
  { id: "nyc",       location: [40.71,  -74.01],  delay: 0.5  }, // New York
  { id: "tokyo",     location: [35.68,  139.65],  delay: 1.0  }, // Tokyo
  { id: "dubai",     location: [25.20,  55.27],   delay: 1.5  }, // Dubai
  { id: "singapore", location: [1.35,   103.82],  delay: 0.3  }, // Singapore
  { id: "zurich",    location: [47.38,  8.54],    delay: 0.8  }, // Zurich
  { id: "hk",        location: [22.32,  114.17],  delay: 1.2  }, // Hong Kong
  { id: "sydney",    location: [-33.87, 151.21],  delay: 1.8  }, // Sydney
]

export function GlobePulse({
  markers = defaultMarkers,
  className = "",
  speed = 0.003,
}) {
  const canvasRef = useRef(null)
  const pointerInteracting = useRef(null)
  const dragOffset = useRef({ phi: 0, theta: 0 })
  const phiOffsetRef = useRef(0)
  const thetaOffsetRef = useRef(0)
  const isPausedRef = useRef(false)

  const handlePointerDown = useCallback((e) => {
    pointerInteracting.current = { x: e.clientX, y: e.clientY }
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing"
    isPausedRef.current = true
  }, [])

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current += dragOffset.current.phi
      thetaOffsetRef.current += dragOffset.current.theta
      dragOffset.current = { phi: 0, theta: 0 }
    }
    pointerInteracting.current = null
    if (canvasRef.current) canvasRef.current.style.cursor = "grab"
    isPausedRef.current = false
  }, [])

  useEffect(() => {
    const handlePointerMove = (e) => {
      if (pointerInteracting.current !== null) {
        dragOffset.current = {
          phi: (e.clientX - pointerInteracting.current.x) / 300,
          theta: (e.clientY - pointerInteracting.current.y) / 1000,
        }
      }
    }
    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("pointerup", handlePointerUp, { passive: true })
    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerup", handlePointerUp)
    }
  }, [handlePointerUp])

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    let globe = null
    let animationId
    let phi = 0

    function init() {
      const width = canvas.offsetWidth
      if (width === 0 || globe) return

      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width,
        height: width,
        phi: 0,
        theta: 0.2,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        // Landmass: very dark, barely visible — premium understated look
        baseColor: [0.08, 0.08, 0.08],
        // Markers: gold brand color (#FFE259 → r:1, g:0.886, b:0.349)
        markerColor: [1.0, 0.886, 0.349],
        // Glow: faint gold
        glowColor: [0.18, 0.16, 0.04],
        markerElevation: 0,
        markers: markers.map((m) => ({
          location: m.location,
          size: 0.04,
          id: m.id,
        })),
        arcs: [],
        arcColor: [1.0, 0.886, 0.349],
        arcWidth: 0.5,
        arcHeight: 0.25,
        opacity: 0.85,
      })

      function animate() {
        if (!isPausedRef.current) phi += speed
        globe.update({
          phi: phi + phiOffsetRef.current + dragOffset.current.phi,
          theta: 0.2 + thetaOffsetRef.current + dragOffset.current.theta,
        })
        animationId = requestAnimationFrame(animate)
      }

      animate()
      setTimeout(() => canvas && (canvas.style.opacity = "1"))
    }

    if (canvas.offsetWidth > 0) {
      init()
    } else {
      const ro = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          ro.disconnect()
          init()
        }
      })
      ro.observe(canvas)
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
      if (globe) globe.destroy()
    }
  }, [markers, speed])

  return (
    <div className={`relative aspect-square select-none ${className}`}>
      <style>{`
        @keyframes pulse-expand {
          0%   { transform: scale(0.3); opacity: 0.9; }
          100% { transform: scale(1.8); opacity: 0; }
        }
      `}</style>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          opacity: 0,
          transition: "opacity 1.2s ease",
          borderRadius: "50%",
          touchAction: "none",
        }}
      />
      {/* Gold pulse rings on each marker */}
      {markers.map((m) => (
        <div
          key={m.id}
          style={{
            position: "absolute",
            positionAnchor: `--cobe-${m.id}`,
            bottom: "anchor(center)",
            left: "anchor(center)",
            translate: "-50% 50%",
            width: 36,
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            opacity: `var(--cobe-visible-${m.id}, 0)`,
            filter: `blur(calc((1 - var(--cobe-visible-${m.id}, 0)) * 6px))`,
            transition: "opacity 0.4s, filter 0.4s",
          }}
        >
          <span style={{
            position: "absolute",
            inset: 0,
            border: "1.5px solid #FFE259",
            borderRadius: "50%",
            opacity: 0,
            animation: `pulse-expand 2.4s ease-out infinite ${m.delay}s`,
          }} />
          <span style={{
            position: "absolute",
            inset: 0,
            border: "1.5px solid #FFE259",
            borderRadius: "50%",
            opacity: 0,
            animation: `pulse-expand 2.4s ease-out infinite ${m.delay + 0.8}s`,
          }} />
          <span style={{
            width: 8,
            height: 8,
            background: "#FFE259",
            borderRadius: "50%",
            boxShadow: "0 0 0 2px #0a0a0a, 0 0 0 4px #FFE259",
          }} />
        </div>
      ))}
    </div>
  )
}
