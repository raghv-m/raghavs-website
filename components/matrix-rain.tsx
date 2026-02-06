"use client"

import { useEffect, useRef } from "react"

const CHARS = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
const GREEN = "#00ff88"
const OPACITY = 0.2
const FPS = 30
const FRAME_MS = 1000 / FPS

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches
    if (isMobile) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let columns: number
    let drops: number[]
    const fontSize = 14

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      columns = Math.floor(canvas.width / fontSize)
      drops = Array(columns).fill(1)
    }

    function draw() {
      ctx.fillStyle = "rgba(10, 10, 15, 0.06)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = GREEN
      ctx.globalAlpha = OPACITY
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize
        ctx.fillText(char, x, y)
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
      ctx.globalAlpha = 1
    }

    function tick() {
      draw()
      animationId = window.setTimeout(tick, FRAME_MS)
    }

    resize()
    tick()
    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("resize", resize)
      window.clearTimeout(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      aria-hidden
    />
  )
}
