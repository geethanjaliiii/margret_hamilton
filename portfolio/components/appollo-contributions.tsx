import Image from "next/image"

export function ApolloContribution() {
  return (
    <section id="apollo" className="py-24 px-6 bg-slate-800">
      <h2 className="text-3xl font-mono text-center mb-16">The Apollo Legacy</h2>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2 aspect-square relative flex items-center justify-center">
          <div className="absolute w-64 h-64 border-2 border-blue-500/30 rounded-full animate-pulse"></div>
          <div className="absolute w-40 h-40 border-2 border-teal-500/40 rounded-full"></div>
          <div className="w-80 h-80 rounded-full relative overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/margaret-hamilton-mit-apollo-code_0.jpg-J0nZA25YdZvOg7pRKRhiyyjPBFBaY6.jpeg"
              alt="Margaret Hamilton with the printed Apollo guidance computer code"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 320px"
            />
          </div>
          <div className="absolute bottom-10 right-16 bg-slate-900 p-3 rounded">
            <div className="text-xs font-mono text-teal-300">AGC SOFTWARE</div>
            <div className="text-sm">Explore the code →</div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-8">
          <h3 className="text-2xl font-mono text-teal-300">Error Detection & Recovery</h3>
          <p className="text-gray-300">
            Hamilton&apos;s most critical innovation was designing software that could detect errors and recover from
            them - a revolutionary concept that saved the Apollo 11 mission.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["Priority Displays", "Asynchronous Processing", "Human-in-the-Loop Design", "Systems Integration"].map(
              (feature) => (
                <div
                  key={feature}
                  className="p-4 bg-slate-700 bg-opacity-50 rounded hover:bg-slate-600 cursor-pointer transition-colors"
                >
                  <h4 className="font-mono text-sm text-teal-300">{feature}</h4>
                  <div className="mt-2 text-gray-300 text-sm">Explore →</div>
                </div>
              ),
            )}
          </div>

          <blockquote className="p-6 border-l-4 border-teal-400 bg-slate-900 italic">
            "The computer knew what to do when we didn&apos;t."
            <cite className="block mt-2 text-sm text-gray-400">- Apollo 11 Astronaut</cite>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

