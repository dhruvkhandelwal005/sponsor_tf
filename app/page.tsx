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

      {/* Top-right social icons */}
      <div className="absolute top-6 right-6 z-40 flex items-center gap-3">
        <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-white/6 hover:bg-white/10 transition-transform duration-300 ease-[cubic-bezier(.2,.9,.2,1)] transform hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-white">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="3.2" />
            <circle cx="17.5" cy="6.5" r="0.5" />
          </svg>
        </a>

        <a href="#" aria-label="YouTube" className="p-2 rounded-full bg-white/6 hover:bg-white/10 transition-transform duration-300 ease-[cubic-bezier(.2,.9,.2,1)] transform hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-white">
            <rect x="2.5" y="6.5" width="19" height="11" rx="2.5" />
            <path d="M10 9l5 3-5 3z" />
          </svg>
        </a>

        <a href="#" aria-label="GitHub" className="p-2 rounded-full bg-white/6 hover:bg-white/10 transition-transform duration-300 ease-[cubic-bezier(.2,.9,.2,1)] transform hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-white">
            <path d="M12 2a10 10 0 0 0-3.16 19.5c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.36-1.33-3.36-1.33-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.25.1-2.6 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.35.2 2.35.1 2.6.64.7 1.03 1.6 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
          </svg>
        </a>

        <a href="#" aria-label="LinkedIn" className="p-2 rounded-full bg-white/6 hover:bg-white/10 transition-transform duration-300 ease-[cubic-bezier(.2,.9,.2,1)] transform hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-white">
            <rect x="2" y="2" width="20" height="20" rx="2" />
            <path d="M7 11v7M7 7v2M12 11v7M12 7a2 2 0 0 1 2 2v0M17 11v7" />
          </svg>
        </a>
      </div>

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
          <h1 className="text-5xl font-bold text-foreground tracking-wider">Tantra Fiesta 2025</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto px-6 text-balance">
          TantraFiesta is the prestigious National Level Annual Technical Fest of the Indian Institute of Information Technology, Nagpur, which is back on the stage with a big bang! TantraFiesta
        
        TantraFiesta 2025, the flagship annual technical fest of the Indian Institute of Information Technology (IIIT) Nagpur, unfolded from October 9 to 11, 2025, under the captivating theme “Dark Matter Eclipse: Exploring the Unexplored”. This year's edition marked a significant evolution, blending innovation, creativity, and the boundless potential of technology to delve into the mysteries of the cosmos.
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
                transition: "transform 0.45s cubic-bezier(.2,.9,.2,1)",
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

      {/* History section (moved below cards) */}
      <section className="relative z-10 w-full max-w-4xl mx-auto px-6 mb-12">
        <article
          className="group relative bg-gradient-to-tr from-slate-900/60 via-slate-800/50 to-black/40 text-white p-8 rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl"
          style={{ backdropFilter: "blur(6px)", transition: "transform 0.45s cubic-bezier(.2,.9,.2,1), box-shadow 0.45s cubic-bezier(.2,.9,.2,1)" }}
        >
          <span className="absolute -inset-px rounded-3xl bg-gradient-to-r from-pink-500 via-violet-400 to-cyan-400 opacity-20 blur-xl group-hover:opacity-40 transition-opacity pointer-events-none" />
          <h2 className="relative text-3xl font-semibold mb-4">History of TantraFiesta</h2>
          <div className="relative space-y-4 text-sm md:text-base leading-relaxed">
            <p>The Evolution of TantraFiesta: A Journey of Innovation</p>
            <p>TantraFiesta stands as the flagship annual technical festival of the Indian Institute of Information Technology, Nagpur (IIIT Nagpur). Since its inception in 2018, it has evolved from a modest gathering into a premier national-level event, celebrated for its commitment to fostering innovation, creativity, and technological advancement.</p>
            <p><strong>2018: Humble Beginnings</strong></p>
            <p>In 2018, TantraFiesta embarked on its journey with a vision to provide a platform for students to showcase their technical prowess and creativity. The inaugural edition laid a strong foundation, setting the stage for future growth and success.</p>
            <p><strong>2019: Conquering the Space</strong></p>
            <p>The 2019 edition, themed "Conquering the Space," drew inspiration from India's space endeavors, particularly Chandrayaan 2. This year marked a significant milestone, with over 10,000 participants engaging in various competitions and workshops, reflecting the growing reach and impact of the festival (nagpurtoday.in).</p>
            <p><strong>2020: Navigating Challenges</strong></p>
            <p>Despite the global challenges posed by the COVID-19 pandemic, TantraFiesta adapted by hosting virtual events, ensuring the continuity of innovation and learning. The festival maintained its commitment to providing a platform for students to explore and expand their technical skills.</p>
            <p><strong>2021: Life in Future</strong></p>
            <p>The 2021 theme, "Life in Future," introduced a dedicated AI/ML track, allowing participants to delve into the next frontier of intelligence through workshops and tech challenges. This edition highlighted the festival's adaptability and forward-thinking approach.</p>
            <p><strong>2022: Greener Tomorrow</strong></p>
            <p>With "Greener Tomorrow," TantraFiesta returned to campus life, focusing on sustainability and the integration of green technologies. The festival emphasized the importance of environmentally conscious innovation, bringing together students to collaborate on solutions for a sustainable future.</p>
            <p><strong>2023: Genesis Unleashed</strong></p>
            <p>The 2023 edition, themed "Genesis Unleashed," embraced the digital realm with a fully virtual format. AI-powered challenges and interactive workshops connected innovators from across the globe, showcasing the festival's ability to transcend geographical boundaries and foster a global community of technologists.</p>
            <p><strong>2024: Digital Big Bang</strong></p>
            <p>TantraFiesta 2024 marked a significant milestone with its first dedicated website launch, themed "Digital Big Bang." This edition brought the fest closer to every innovator nationwide, expanding its reach and accessibility, and solidifying its position in the digital era.</p>
            <p><strong>2025: Dark Matter Eclipse</strong></p>
            <p>The 2025 edition, themed "Dark Matter Eclipse: Exploring the Unexplored," delved deep into the mysteries of the cosmos. This year marked a rebirth of innovation, where creativity met the unseen power of technology, pushing boundaries to discover what lies beyond the visible spectrum.</p>
          </div>
        </article>
      </section>

      {/* Footer */}
<footer className="w-full bg-slate-900/70 text-white mt-8">
  <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
    <div>
      <h3 className="text-lg font-semibold">TantraFiesta</h3>
      <p className="text-sm text-muted-foreground mt-1">IIIT Nagpur — annual technical festival.</p>
    </div>

    <nav className="flex gap-4 text-sm text-muted-foreground">
      <a href="#">Events</a>
      <a href="#">Workshops</a>
      <a href="#">Sponsors</a>
      <a href="#">Team</a>
    </nav>

    <div className="flex items-center gap-3">
      <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
        <input aria-label="Email" placeholder="Email" className="px-3 py-2 rounded-md bg-white/5 text-sm outline-none focus:ring-2 focus:ring-primary" />
        <button className="px-3 py-2 rounded-md bg-primary text-sm">Subscribe</button>
      </form>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="px-3 py-2 rounded-md bg-white/6 text-sm">Top</button>
    </div>
  </div>

  <div className="border-t border-white/6">
    <div className="max-w-6xl mx-auto px-6 py-4 text-xs text-muted-foreground flex items-center justify-between">
      <span>© {new Date().getFullYear()} TantraFiesta · IIIT Nagpur</span>
      <span>Built with care</span>
    </div>
  </div>
</footer>
    </div>
  )
}