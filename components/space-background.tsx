"use client"

import { useEffect, useRef } from "react"

interface SpaceBackgroundProps {
  cursorPosition: { x: number; y: number }
}

export function SpaceBackground({ cursorPosition }: SpaceBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gradient = ctx.createRadialGradient(
        cursorPosition.x,
        cursorPosition.y,
        0,
        cursorPosition.x,
        cursorPosition.y,
        400,
      )
      gradient.addColorStop(0, "rgba(64, 224, 208, 0.02)")
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    window.addEventListener("resize", resizeCanvas)
    return () => window.removeEventListener("resize", resizeCanvas)
  }, [cursorPosition])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)" }}
    />
  )
}
