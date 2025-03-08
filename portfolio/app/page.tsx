// import Image from "next/image"
// import { MargartHamiltonHero } from "@/components/margret-hamilton-hero" 
// import { Timeline } from "@/components/timeline" 
// import { ApolloContribution } from "@/components/appollo-contributions" 
// import { CodeLegacy } from "@/components/code-legacy"
// import { Footer } from "@/components/footer"
// import { Navigation } from "@/components/navigation"

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
//       <Navigation />
//       <MargartHamiltonHero />
//       <Timeline />
//       <ApolloContribution />
//       <CodeLegacy />
//       <Footer />
//     </div>
//   )
// }


'use client'
import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      
      // Update active section based on scroll position
      // This would be more sophisticated in a real implementation
      if (position < 300) setActiveSection('hero');
      else if (position < 1000) setActiveSection('bio');
      else if (position < 1800) setActiveSection('apollo');
      else setActiveSection('legacy');
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 right-0 z-50 p-6">
        <div className="relative w-16 h-16">
          {['hero', 'bio', 'apollo', 'legacy', 'impact'].map((section, index) => {
            const isActive = section === activeSection;
            const angle = (index * 72) * (Math.PI / 180);
            const radius = isActive ? 40 : 30;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            return (
              <button 
                key={section}
                className={`absolute w-3 h-3 rounded-full transition-all duration-500 ${
                  isActive ? 'bg-teal-400 w-4 h-4' : 'bg-gray-400'
                }`}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
                aria-label={`Go to ${section} section`}
              />
            );
          })}
          <div className="absolute inset-0 m-auto w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-xs">MH</span>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/')",
            transform: `translateY(${scrollPosition * 0.2}px)`,
            filter: `brightness(${100 - scrollPosition/10}%)`
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" aria-hidden="true" />
        
        <div className="relative z-10 max-w-4xl px-6 text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold font-mono tracking-tight">
            <span className="typewriter-effect">Margaret Hamilton</span>
          </h1>
          <p className="text-xl md:text-3xl text-cyan-300 font-light">
            The Woman Who Helped Land Humans on the Moon
          </p>
          <p className="max-w-2xl mx-auto text-gray-300">
            Software engineering pioneer, programming innovator, and leader of the team that wrote the code for Apollo 11's historic moon landing.
          </p>
          <button className="mt-8 px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded-full font-mono text-sm tracking-wider transition-colors">
            EXPLORE HER LEGACY
          </button>
        </div>
      </section>
      
      {/* Interactive Timeline Preview */}
      <section className="relative py-24 px-6">
        <h2 className="text-3xl font-mono text-center mb-16">A Pioneering Journey</h2>
        <div className="max-w-6xl mx-auto">
          <div className="relative h-1 bg-gray-700 mb-16">
            <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-blue-500 to-teal-400" />
            
            {[1936, 1958, 1965, 1969, 1986].map((year, index) => (
              <div 
                key={year}
                className={`absolute top-0 w-6 h-6 rounded-full -mt-2.5 border-2 transition-all duration-300 hover:scale-150 cursor-pointer ${
                  index <= 2 ? 'bg-teal-400 border-teal-200' : 'bg-gray-600 border-gray-400'
                }`}
                style={{ left: `${index * 25}%` }}
              >
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-mono">
                  {year}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-slate-800 bg-opacity-70 backdrop-blur-sm p-8 rounded-lg">
            <h3 className="text-xl font-mono text-teal-300 mb-4">1965: The Apollo Era Begins</h3>
            <p className="text-gray-300 mb-6">
              Hamilton joins the Charles Stark Draper Laboratory at MIT, where she would lead the team developing the onboard flight software for the Apollo space program.
            </p>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2">
                <div className="aspect-video bg-gray-700 rounded flex items-center justify-center">
                  <img src="images/https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/15385703/Margaret_Hamilton_in_action.0.0.1540775705.jpg?quality=90&strip=all&crop=10.625%2C0%2C78.75%2C100&w=1080" alt="Margaret" className="rounded" />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <blockquote className="text-lg italic text-gray-300">
                  "There was no choice but to be pioneers."
                </blockquote>
                <div className="mt-4 p-4 bg-slate-700 rounded">
                  <h4 className="text-sm font-mono text-teal-300 mb-2">INNOVATION</h4>
                  <p className="text-sm text-gray-300">
                    Hamilton's team had to invent core software engineering concepts as they worked, creating foundations that would influence computing for decades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Apollo Contribution Preview */}
      <section className="py-24 px-6 bg-slate-800">
        <h2 className="text-3xl font-mono text-center mb-16">The Apollo Legacy</h2>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/2 aspect-square relative flex items-center justify-center">
            <div className="absolute w-64 h-64 border-2 border-blue-500/30 rounded-full animate-pulse"></div>
            <div className="absolute w-40 h-40 border-2 border-teal-500/40 rounded-full"></div>
            <div className="w-80 h-80 bg-gray-700 rounded-full flex items-center justify-center">
              <img src="https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads//file/15385703/Margaret_Hamilton_in_action.0.0.1540775705.jpg?quality=90&strip=all&crop=10.625%2C0%2C78.75%2C100&w=1080" alt="placeholder" className="rounded-full" />
            </div>
            <div className="absolute bottom-10 right-16 bg-slate-900 p-3 rounded">
              <div className="text-xs font-mono text-teal-300">AGC SOFTWARE</div>
              <div className="text-sm">Explore the code →</div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-8">
            <h3 className="text-2xl font-mono text-teal-300">Error Detection & Recovery</h3>
            <p className="text-gray-300">
              Hamilton's most critical innovation was designing software that could detect errors and recover from them - a revolutionary concept that saved the Apollo 11 mission.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Priority Displays', 'Asynchronous Processing', 'Human-in-the-Loop Design', 'Systems Integration'].map((feature) => (
                <div key={feature} className="p-4 bg-slate-700 bg-opacity-50 rounded hover:bg-slate-600 cursor-pointer transition-colors">
                  <h4 className="font-mono text-sm text-teal-300">{feature}</h4>
                  <div className="mt-2 text-gray-300 text-sm">Explore →</div>
                </div>
              ))}
            </div>
            
            <blockquote className="p-6 border-l-4 border-teal-400 bg-slate-900 italic">
              "The computer knew what to do when we didn't."
              <cite className="block mt-2 text-sm text-gray-400">- Apollo 11 Astronaut</cite>
            </blockquote>
          </div>
        </div>
      </section>
      
      {/* Code Legacy Preview */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute text-xs font-mono text-teal-500"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `translateY(${scrollPosition * 0.05 * (i % 3 - 1)}px)`
              }}
            >
              {`IF (${String.fromCharCode(65 + i % 26)}) THEN GO TO ${10 * (i % 9 + 1)}`}
            </div>
          ))}
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <h2 className="text-3xl font-mono text-center mb-16">Modern Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {title: 'Software Engineering', icon: '🔧', color: 'from-blue-500 to-blue-600'},
              {title: 'Error Prevention', icon: '🛡️', color: 'from-teal-500 to-teal-600'},
              {title: 'Systems Thinking', icon: '🔄', color: 'from-purple-500 to-purple-600'}
            ].map((item) => (
              <div 
                key={item.title} 
                className={`p-6 rounded-lg bg-gradient-to-br ${item.color} hover:scale-105 transition-transform`}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-mono mb-2">{item.title}</h3>
                <p className="text-gray-100 text-sm">
                  Hamilton's pioneering work established core principles still used in modern software development.
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 p-8 bg-slate-800 rounded-lg">
            <h3 className="text-xl font-mono text-teal-300 mb-4">Try It Yourself: Debug Challenge</h3>
            <p className="text-gray-300 mb-6">
              Experience Hamilton's error detection principles in this interactive challenge.
            </p>
            <div className="p-4 bg-slate-900 rounded font-mono text-sm text-gray-300">
              <div className="text-teal-400">// Coming soon</div>
              <div>{'function checkLandingParameters() {'}</div>
              <div className="pl-4">{'if (fuel < threshold && !emergency) {'}</div>
              <div className="pl-8 text-yellow-300">{'// Can you spot the potential error?'}</div>
              <div className="pl-4">{'}'}</div>
              <div>{'}'}</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer Preview */}
      <footer className="py-12 px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-xl font-mono mb-6">Margaret Hamilton's Legacy Lives On</h2>
          <p className="text-gray-400 mb-8">
            Designed with respect and admiration for one of computing's greatest pioneers.
          </p>
          <div className="flex justify-center space-x-4">
            {['Learn More', 'References', 'Timeline', 'Gallery'].map((item) => (
              <button 
                key={item}
                className="px-4 py-2 text-sm text-gray-400 hover:text-teal-300 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;