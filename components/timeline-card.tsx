"use client"

import { useEffect, useState } from "react"

interface TimelineCardProps {
  name: string
  category: string
  title: string
  description: string
  image: string
  side: "left" | "right"
  index: number
  isVisible: boolean
}

export function TimelineCard({ name, category, title, description, image, side, index, isVisible }: TimelineCardProps) {
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShouldAnimate(true), index * 200)
      return () => clearTimeout(timer)
    }
  }, [isVisible, index])

  return (
    <div className={`flex items-center ${side === "right" ? "justify-end" : "justify-start"}`}>
      <div
        className={`
          relative max-w-md w-full mx-8 p-6 rounded-lg border-2 border-primary
          bg-card/80 backdrop-blur-sm transition-all duration-700 hover:scale-105
          hover:shadow-[0_0_30px_rgba(64,224,208,0.3)] group cursor-pointer
          ${
            shouldAnimate
              ? side === "left"
                ? "animate-slide-in-left opacity-100"
                : "animate-slide-in-right opacity-100"
              : "opacity-0"
          }
        `}
        style={{
          boxShadow: isVisible ? "0 0 20px rgba(64, 224, 208, 0.2)" : "none",
        }}
      >
        {/* Corner decorations */}
        <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary"></div>
        <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-primary"></div>
        <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-primary"></div>
        <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary"></div>

        {/* Content */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30 flex-shrink-0">
            <img src={image || "/placeholder.svg"} alt={`${name} logo`} className="w-full h-full object-cover" />
          </div>
          <div className="flex items-center gap-2 text-primary">
            <span className="font-mono text-lg font-bold">{name}</span>
          </div>
          <span className="px-3 py-1 bg-slate-800 text-primary text-sm font-semibold rounded-full border border-primary/50">
            {category}
          </span>
          <svg
            className="w-6 h-6 text-primary ml-auto group-hover:rotate-90 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{title}</h3>

        <p className="text-muted-foreground leading-relaxed">{description}</p>

        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    </div>
  )
}
