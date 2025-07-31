'use client'

import { Link } from 'react-router-dom'
import { SplineScene } from "./ui/spline";
import { Card } from "./ui/card"
import { Spotlight } from "./ui/spotlight"
 
export function SplineHero() {
  return (
    <Card className="w-full h-[500px] bg-boomerang-black/[0.96] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-boomerang-silver to-neutral-400">
            Launch Your Startup
          </h1>
          <p className="mt-4 text-boomerang-silver max-w-lg">
            Bring your innovative ideas to life with cutting-edge 3D technology. 
            Create immersive experiences that capture investor attention and accelerate your growth.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary bg-boomerang-blue hover:bg-boomerang-navy text-white">
              Get Started Today
            </Link>
            <Link to="/services" className="btn-secondary bg-transparent border-2 border-boomerang-silver text-boomerang-silver hover:bg-boomerang-silver hover:text-boomerang-black">
              Learn More
            </Link>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
} 