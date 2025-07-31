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
            Launch Your Startup
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl mb-8">
            Bring your innovative ideas to life with cutting-edge 3D technology. 
            Create immersive experiences that capture investor attention and accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary bg-white text-boomerang-blue hover:bg-boomerang-silver text-lg px-8 py-4">
              Get Started Today
            </Link>
            <Link to="/services" className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-boomerang-blue text-lg px-8 py-4">
              Learn More
            </Link>
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