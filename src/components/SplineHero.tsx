'use client'

import { Link } from 'react-router-dom'
import { SplineScene } from "./ui/spline";
import { Card } from "./ui/card"
import { Spotlight } from "./ui/spotlight"
 
export function SplineHero() {
  return (
    <div className="w-full min-h-[80vh] bg-boomerang-black/[0.96] relative overflow-hidden rounded-2xl">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex h-full min-h-[80vh]">
        {/* Left content */}
        <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-boomerang-silver to-neutral-400 mb-6">
            Launch Your Startup
          </h1>
          <p className="text-xl md:text-2xl text-boomerang-silver max-w-2xl mb-8">
            Bring your innovative ideas to life with cutting-edge 3D technology. 
            Create immersive experiences that capture investor attention and accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary bg-boomerang-blue hover:bg-boomerang-navy text-white text-lg px-8 py-4">
              Get Started Today
            </Link>
            <Link to="/services" className="btn-secondary bg-transparent border-2 border-boomerang-silver text-boomerang-silver hover:bg-boomerang-silver hover:text-boomerang-black text-lg px-8 py-4">
              Learn More
            </Link>
          </div>
        </div>

        {/* Right content - Big Robot */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  )
} 