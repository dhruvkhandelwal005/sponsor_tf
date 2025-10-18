"use client"

import { useEffect, useState } from "react"
import { SpaceBackground } from "@/components/space-background"
import Image from "next/image"

type Sponsor = {
  name: string
  category: string
  title: string
  description: string
  image: string
}

const sponsorData: Sponsor[] = [
  {
    name: "SpaceX",
    category: "AEROSPACE",
    title: "Leading Space Exploration",
    description: "Pioneering commercial spaceflight and Mars colonization missions",
    image: "/spacex-logo-space-company.jpg",
  },
  {
    name: "NASA",
    category: "GOVERNMENT",
    title: "National Space Agency",
    description: "America's premier space exploration and research organization",
    image: "/nasa-logo-space-agency.jpg",
  },
  {
    name: "Blue Origin",
    category: "AEROSPACE",
    title: "Space Tourism Pioneer",
    description: "Developing reusable rockets for commercial space travel",
    image: "/blue-origin-logo-rocket-company.jpg",
  },
  {
    name: "Virgin Galactic",
    category: "TOURISM",
    title: "Suborbital Flights",
    description: "Making space accessible through commercial suborbital flights",
    image: "/virgin-galactic-logo-space-tourism.jpg",
  },
  {
    name: "Starlink",
    category: "SATELLITE",
    title: "Global Internet Coverage",
    description: "Providing high-speed internet through satellite constellation",
    image: "/starlink-logo-satellite-internet.jpg",
  },
  // Additional cards for vertical scroll
  {
    name: "Rocket Lab",
    category: "AEROSPACE",
    title: "Small Satellite Launches",
    description: "Delivering satellites to orbit with Electron rockets.",
    image: "/placeholder-logo.png",
  },
  {
    name: "ESA",
    category: "GOVERNMENT",
    title: "European Space Agency",
    description: "Europe's gateway to space exploration and research.",
    image: "/placeholder-logo.png",
  },
  {
    name: "OneWeb",
    category: "SATELLITE",
    title: "Global Connectivity",
    description: "Building a global satellite internet network.",
    image: "/placeholder-logo.png",
  },
  {
    name: "Roscosmos",
    category: "GOVERNMENT",
    title: "Russian Space Agency",
    description: "Russia's official space exploration organization.",
    image: "/placeholder-logo.png",
  },
  {
    name: "ISRO",
    category: "GOVERNMENT",
    title: "Indian Space Research",
    description: "India's national space agency for research and launches.",
    image: "/placeholder-logo.png",
  },
]

export default function SpaceSponsorCards() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen transparent relative overflow-hidden">
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

      {/* Cards in grid: 3 per row */}
      <div className="relative max-w-6xl mx-auto px-6 pb-20 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center w-full">
          {/**
           * images array
           * Expanded with more sponsor images
           */}
          { [
            "/benq.png",
            "/lavie.jpg",
            "/ongc.jpg",
            "/sbi.png",
            "/ape.jpg",
            "/canara.png",
            "/cocaCola.png",
            "/decathlon.png",
            "/gfg.png",
            "/harleyDavidson.jpg",
            "/hitavada.jpg",
            "/ixigo.png",
            "/Kazo.png",
            "/skechers.png",
            "/trends.jpeg",
            // Added 5 more cards
            "/download.jpeg",
            "/benq.png",
            "/lavie.jpg",
            "/cocaCola.png",
            "/ixigo.png",
          ].map((img, index) => (
            <div
              key={index}
              className="relative rounded-3xl w-[320px] h-[200px] flex-shrink-0 flex items-center justify-center overflow-hidden p-4 bg-white/5"
              style={{
                transition: "transform 0.3s",
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.06)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
            >
              {/* Animated custom gradient border */}
              <span
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  border: "3px solid transparent",
                  background: "linear-gradient(270deg, #c3073f, #f3f3f3, #c3073f)",
                  backgroundSize: "600% 600%",
                  animation: "spaceBorderMove 6s linear infinite",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "exclude",
                  zIndex: 1,
                  boxShadow: "0 0 4px 1px #c3073f inset, 0 0 4px 1px #f3f3f3 inset",
                }}
              />
              <Image
                src={img}
                alt={`Sponsor ${index + 1}`}
                width={280}
                height={160}
                className="object-contain w-full h-full rounded-2xl relative z-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
