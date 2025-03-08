"use client"

import { useState } from "react"
import Image from "next/image"

const timelineItems = [
  {
    year: 1936,
    title: "Birth",
    description: "Margaret Hamilton was born on August 17, 1936, in Paoli, Indiana.",
    active: true,
  },
  {
    year: 1958,
    title: "Education",
    description:
      "Hamilton earned a B.A. in mathematics from Earlham College and began graduate studies in mathematics at Brandeis University.",
    active: true,
  },
  {
    year: 1965,
    title: "The Apollo Era Begins",
    description:
      "Hamilton joins the Charles Stark Draper Laboratory at MIT, where she would lead the team developing the onboard flight software for the Apollo space program.",
    active: true,
  },
  {
    year: 1969,
    title: "Apollo 11 Landing",
    description:
      "The software written by Hamilton's team played a crucial role in the successful moon landing of Apollo 11.",
    active: false,
  },
  {
    year: 1986,
    title: "Higher Order Software",
    description:
      "Hamilton founded Hamilton Technologies, Inc., focused on a system design language called Development Before the Fact.",
    active: false,
  },
]

export function Timeline() {
  const [selectedYear, setSelectedYear] = useState(1965)
  const selectedItem = timelineItems.find((item) => item.year === selectedYear)

  return (
    <section id="bio" className="relative py-24 px-6">
      <h2 className="text-3xl font-mono text-center mb-16">A Pioneering Journey</h2>
      <div className="max-w-6xl mx-auto">
        <div className="relative h-1 bg-gray-700 mb-16">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-teal-400 transition-all duration-300"
            style={{
              width: `${((timelineItems.findIndex((item) => item.year === selectedYear) + 1) / timelineItems.length) * 100}%`,
            }}
          />

          {timelineItems.map((item, index) => (
            <button
              key={item.year}
              className={`absolute top-0 w-6 h-6 rounded-full -mt-2.5 border-2 transition-all duration-300 hover:scale-150 cursor-pointer ${
                item.year <= selectedYear ? "bg-teal-400 border-teal-200" : "bg-gray-600 border-gray-400"
              }`}
              style={{ left: `${(index / (timelineItems.length - 1)) * 100}%` }}
              onClick={() => setSelectedYear(item.year)}
            >
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-mono">{item.year}</div>
            </button>
          ))}
        </div>

        {selectedItem && (
          <div className="bg-slate-800 bg-opacity-70 backdrop-blur-sm p-8 rounded-lg">
            <h3 className="text-xl font-mono text-teal-300 mb-4">
              {selectedItem.year}: {selectedItem.title}
            </h3>
            <p className="text-gray-300 mb-6">{selectedItem.description}</p>
            {selectedItem.year === 1965 && (
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2">
                  <div className="aspect-video relative bg-gray-700 rounded overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/margaret-hamilton-mit-apollo-code_0.jpg-J0nZA25YdZvOg7pRKRhiyyjPBFBaY6.jpeg"
                      alt="Margaret Hamilton with Apollo code"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-between">
                  <blockquote className="text-lg italic text-gray-300">
                    "There was no choice but to be pioneers."
                  </blockquote>
                  <div className="mt-4 p-4 bg-slate-700 rounded">
                    <h4 className="text-sm font-mono text-teal-300 mb-2">INNOVATION</h4>
                    <p className="text-sm text-gray-300">
                      Hamilton&apos;s team had to invent core software engineering concepts as they worked, creating
                      foundations that would influence computing for decades.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

