export function Footer() {
    return (
      <footer id="impact" className="py-12 px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-xl font-mono mb-6">Margaret Hamilton&apos;s Legacy Lives On</h2>
          <p className="text-gray-400 mb-8">
            Designed with respect and admiration for one of computing&apos;s greatest pioneers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Learn More", "References", "Timeline", "Gallery"].map((item) => (
              <button key={item} className="px-4 py-2 text-sm text-gray-400 hover:text-teal-300 transition-colors">
                {item}
              </button>
            ))}
          </div>
        </div>
      </footer>
    )
  }
  
  