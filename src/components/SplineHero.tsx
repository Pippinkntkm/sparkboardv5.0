'use client'

import { Link } from 'react-router-dom'
import { SplineScene } from "./ui/spline";
import { Card } from "./ui/card"
import { Spotlight } from "./ui/spotlight"
 
export function SplineHero() {
  return (
    <div className="w-full min-h-[90vh] bg-gradient-to-br from-boomerang-navy via-boomerang-blue to-boomerang-light-blue relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex h-full min-h-[90vh]">
        {/* Left content */}
        <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-boomerang-silver mb-6">
            Boomerang Startups Sparkboard
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl">
            Bring your innovative ideas to life with cutting-edge 3D technology. 
            Create immersive experiences that capture investor attention and accelerate your growth.
          </p>
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