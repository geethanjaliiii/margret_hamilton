"use client"

import { useEffect, useState } from "react"

export function CodeLegacy() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      setScrollPosition(position)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section id="legacy" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-xs font-mono text-teal-500"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `translateY(${scrollPosition * 0.05 * ((i % 3) - 1)}px)`,
            }}
          >
            {`IF (${String.fromCharCode(65 + (i % 26))}) THEN GO TO ${10 * ((i % 9) + 1)}`}
          </div>
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-3xl font-mono text-center mb-16">Modern Impact</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Software Engineering", icon: "🔧", color: "from-blue-500 to-blue-600" },
            { title: "Error Prevention", icon: "🛡️", color: "from-teal-500 to-teal-600" },
            { title: "Systems Thinking", icon: "🔄", color: "from-purple-500 to-purple-600" },
          ].map((item) => (
            <div
              key={item.title}
              className={`p-6 rounded-lg bg-gradient-to-br ${item.color} hover:scale-105 transition-transform`}
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-mono mb-2">{item.title}</h3>
              <p className="text-gray-100 text-sm">
                Hamilton&apos;s pioneering work established core principles still used in modern software development.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-slate-800 rounded-lg">
          <h3 className="text-xl font-mono text-teal-300 mb-4">Try It Yourself: Debug Challenge</h3>
          <p className="text-gray-300 mb-6">
            Experience Hamilton&apos;s error detection principles in this interactive challenge.
          </p>
          <div className="p-4 bg-slate-900 rounded font-mono text-sm text-gray-300">
            <div className="text-teal-400">// Coming soon</div>
            <div>{"function checkLandingParameters() {"}</div>
            <div className="pl-4">{"if (fuel < threshold && !emergency) {"}</div>
            <div className="pl-8 text-yellow-300">{"// Can you spot the potential error?"}</div>
            <div className="pl-4">{"}"}</div>
            <div>{"}"}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

