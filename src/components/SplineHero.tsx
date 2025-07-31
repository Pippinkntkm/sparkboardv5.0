'use client'

import { Link } from 'react-router-dom'
import { SplineScene } from "./ui/spline";
import { Card } from "./ui/card"
import { Spotlight } from "./ui/spotlight"
import { BackgroundPathsHero } from "./BackgroundPathsHero"
 
export function SplineHero() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-boomerang-navy via-boomerang-blue to-boomerang-light-blue relative overflow-hidden">
      <BackgroundPathsHero />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col h-full">
          {/* Spacer to push content to 1/3 from top */}
          <div className="flex-shrink-0" style={{ flexBasis: '33%' }} />
          <div>
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-boomerang-silver mb-6">
              Boomerang Startups Sparkboard
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-2xl mb-8">
              Startup streamliner powered by AI
            </p>
          </div>
          {/* Stats Section at the bottom */}
          <div className="mt-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pb-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                150+
              </div>
              <div className="text-sm md:text-base text-boomerang-silver font-medium">
                Startups Launched
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                $50M+
              </div>
              <div className="text-sm md:text-base text-boomerang-silver font-medium">
                Funding Raised
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                95%
              </div>
              <div className="text-sm md:text-base text-boomerang-silver font-medium">
                Success Rate
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                24/7
              </div>
              <div className="text-sm md:text-base text-boomerang-silver font-medium">
                Support Available
              </div>
            </div>
          </div>
        </div>

        {/* Right content - Isolated Robot with Transparent Background */}
        <div className="flex-1 relative flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
} 