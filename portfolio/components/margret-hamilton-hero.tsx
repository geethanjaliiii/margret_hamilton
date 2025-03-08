"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function MargartHamiltonHero() {
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
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-black/50"
        style={{
          transform: `translateY(${scrollPosition * 0.2}px)`,
          opacity: Math.max(0, 1 - scrollPosition / 500)
        }}
        aria-hidden="true"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" aria-hidden="true" />
      
      <div className="relative z-10 max-w-4xl px-6 text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold font-mono tracking-tight animate-fade-in">
          <span className="relative inline-block">
            Margaret Hamilton
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-400 animate-typing"></span>
          </span>
        </h1>
        <p className="text-xl md:text-3xl text-cyan-300 font-light">
          The Woman Who Helped Land Humans on the Moon
        </p>
        <p className="max-w-2xl mx-auto text-gray-300">
          Software engineering pioneer, programming innovator, and leader of the team that wrote the code for Apollo 11&apos;s historic moon landing.
        </p>
        <Button className="mt-8 px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded-full font-mono text-sm tracking-wider transition-colors">
          EXPLORE HER LEGACY
        </Button>
        
        <div className="mt-16 relative w-full max-w-lg mx-auto">
          <div className="aspect-[3/2] relative rounded-lg overflow-hidden shadow-2xl border border-slate-700">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/margaret-hamilton-mit-apollo-code_0.jpg-J0nZA25YdZvOg7pRKRhiyyjPBFBaY6.jpeg"
              alt="Margaret Hamilton standing next to the stack of Apollo Guidance Computer source code that she and her team developed at MIT"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 700px"
            />
          </div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-slate-800/90 backdrop-blur-sm py-2 px-4 rounded-full text-sm text-center max-w-[90%]">
            Margaret Hamilton standing next to Apollo Guidance Computer code listings
          </div>
        </div>
      </div>
    </section>
  )
}
