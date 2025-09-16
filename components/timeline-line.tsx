"use client"

import { useEffect, useState } from "react"

interface TimelineLineProps {
  activeIndex: number
  totalItems: number
}

export function TimelineLine({ activeIndex, totalItems }: TimelineLineProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const newProgress = ((activeIndex + 1) / totalItems) * 100
    setProgress(newProgress)
  }, [activeIndex, totalItems])

  return (
    <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-1">
      {/* Background line */}
      <div className="absolute inset-0 bg-muted/30 rounded-full"></div>

      {/* Animated progress line */}
      <div
        className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
        style={{ height: `${progress}%` }}
      >
        <div className="absolute inset-0 bg-primary/50 rounded-full animate-pulse-glow"></div>
      </div>

      {/* Timeline nodes */}
      {Array.from({ length: totalItems }).map((_, index) => (
        <div
          key={index}
          className={`
            absolute w-6 h-6 rounded-full border-4 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500
            ${
              index <= activeIndex
                ? "bg-primary border-primary shadow-[0_0_20px_rgba(0,255,0,0.6)] scale-110"
                : "bg-muted border-muted/50"
            }
          `}
          style={{
            top: `${(index / (totalItems - 1)) * 100}%`,
            left: "50%",
          }}
        >
          {index <= activeIndex && <div className="absolute inset-1 bg-primary rounded-full animate-pulse"></div>}
        </div>
      ))}
    </div>
  )
}
