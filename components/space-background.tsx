"use client"

import { useEffect, useRef } from "react"

type Props = {
  cursorPosition: { x: number; y: number }
}

export function SpaceBackground({ cursorPosition }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return // ✅ extra null check

    let width = window.innerWidth
    let height = window.innerHeight
    canvas.width = width
    canvas.height = height

    // Resize listener
    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }
    window.addEventListener("resize", handleResize)

    // Star field
    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5,
      speed: Math.random() * 0.3 + 0.1,
    }))

    let frameId: number

    function animate() {
      if (!ctx) return // ✅ safeguard

      ctx.clearRect(0, 0, width, height)

      // Background gradient (dark matter feel)
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        100,
        width / 2,
        height / 2,
        Math.max(width, height) / 1.2
      )
      gradient.addColorStop(0, "#0a0a0f") // deep dark center
      gradient.addColorStop(1, "#000000") // black edges
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      // Stars
      ctx.fillStyle = "#ffffff"
      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fill()
        star.y += star.speed
        if (star.y > height) {
          star.y = 0
          star.x = Math.random() * width
        }
      })

      // Eclipse effect (dark circle over glowing ring)
      const centerX = width / 2
      const centerY = height / 2
      const radius = 150

      // Glow ring
      const glow = ctx.createRadialGradient(centerX, centerY, radius * 0.8, centerX, centerY, radius * 1.2)
      glow.addColorStop(0, "rgba(200,0,50,0.2)") // reddish glow
      glow.addColorStop(1, "rgba(0,0,0,0)")
      ctx.fillStyle = glow
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius * 1.3, 0, Math.PI * 2)
      ctx.fill()

      // Dark matter core (black circle)
      ctx.fillStyle = "#000000"
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.fill()

      frameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
      style={{ background: "black" }}
    />
  )
}
