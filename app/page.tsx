"use client"

import { useEffect, useState, useRef } from "react"
import { SpaceBackground } from "@/components/space-background"
import { TimelineCard } from "@/components/timeline-card"
import { TimelineLine } from "@/components/timeline-line"

const sponsorData = [
  {
    name: "SpaceX",
    category: "AEROSPACE",
    title: "Leading Space Exploration",
    description: "Pioneering commercial spaceflight and Mars colonization missions",
    image: "/spacex-logo-space-company.jpg",
    side: "left",
  },
  {
    name: "NASA",
    category: "GOVERNMENT",
    title: "National Space Agency",
    description: "America's premier space exploration and research organization",
    image: "/nasa-logo-space-agency.jpg",
    side: "right",
  },
  {
    name: "Blue Origin",
    category: "AEROSPACE",
    title: "Space Tourism Pioneer",
    description: "Developing reusable rockets for commercial space travel",
    image: "/blue-origin-logo-rocket-company.jpg",
    side: "left",
  },
  {
    name: "Virgin Galactic",
    category: "TOURISM",
    title: "Suborbital Flights",
    description: "Making space accessible through commercial suborbital flights",
    image: "/virgin-galactic-logo-space-tourism.jpg",
    side: "right",
  },
  {
    name: "Starlink",
    category: "SATELLITE",
    title: "Global Internet Coverage",
    description: "Providing high-speed internet through satellite constellation",
    image: "/starlink-logo-satellite-internet.jpg",
    side: "left",
  },
]

export default function SpaceSponsorTimeline() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [activeTimeline, setActiveTimeline] = useState(0)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...new Set([...prev, index])])
            setActiveTimeline(index)
          }
        })
      },
      { threshold: 0.3 },
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SpaceBackground cursorPosition={cursorPosition} />

      {/* Custom cursor */}
      <div
        className="cursor-glow"
        style={{
          left: cursorPosition.x - 10,
          top: cursorPosition.y - 10,
        }}
      />

      {/* Header */}
      <header className="relative z-10 pt-20 pb-16 text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="w-8 h-8 mr-4">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
              <path
                d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                fill="currentColor"
                className="text-primary animate-pulse-glow"
              />
            </svg>
          </div>
          <h1 className="text-5xl font-bold text-foreground tracking-wider">SPACE SPONSORS</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto px-6 text-balance">
          Discover the leading organizations and companies driving innovation in space exploration and technology.
        </p>
      </header>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto px-6 pb-20">
        <TimelineLine activeIndex={activeTimeline} totalItems={sponsorData.length} />

        <div className="space-y-32">
          {sponsorData.map((item, index) => (
            <div key={index} ref={(el) => (cardRefs.current[index] = el)} data-index={index} className="relative">
              <TimelineCard {...item} index={index} isVisible={visibleCards.includes(index)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
