"use client"

import { useState, useEffect } from "react"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY

      // Update active section based on scroll position
      if (position < 300) setActiveSection("hero")
      else if (position < 1000) setActiveSection("bio")
      else if (position < 1800) setActiveSection("apollo")
      else setActiveSection("legacy")
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const sections = ["hero", "bio", "apollo", "legacy", "impact"]

  return (
    <nav className="fixed top-0 right-0 z-50 p-6">
      <div className="relative w-16 h-16">
        {sections.map((section, index) => {
          const isActive = section === activeSection
          const angle = index * 72 * (Math.PI / 180)
          const radius = isActive ? 40 : 30
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius

          return (
            <button
              key={section}
              className={`absolute w-3 h-3 rounded-full transition-all duration-500 ${
                isActive ? "bg-teal-400 w-4 h-4" : "bg-gray-400"
              }`}
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
              onClick={() => {
                document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })
              }}
              aria-label={`Go to ${section} section`}
            />
          )
        })}
        <div className="absolute inset-0 m-auto w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
          <span className="text-xs">MH</span>
        </div>
      </div>
    </nav>
  )
}

