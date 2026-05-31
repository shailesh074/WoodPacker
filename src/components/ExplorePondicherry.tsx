import React, { useState } from "react";
import { Compass, Footprints, Bike, ArrowRight, Eye, Sparkles, MapPin, Map } from "lucide-react";
import { LOCATION_SPOTS } from "../data";

export default function ExplorePondicherry() {
  const [selectedSpot, setSelectedSpot] = useState<string>("spot-matri");

  const spotData = LOCATION_SPOTS.find((s) => s.id === selectedSpot) || LOCATION_SPOTS[0];

  return (
    <section
      id="explore"
      className="py-24 md:py-32 bg-[#0c0c0c] text-white overflow-hidden px-4 md:px-12 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Title Module */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 md:mb-20">
          <div className="lg:col-span-7">
            <span className="font-mono text-xs tracking-[0.3em] text-[#f3a663] font-bold uppercase block mb-3">
              // NEIGHBORHOOD & COMMUNE LIFE
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-tight uppercase">
              Auroville In Its Purest Form.
            </h2>
            <p className="font-serif italic text-2xl text-orange-400 mt-1">
              Step off the concrete asphalt, step into the red soil
            </p>
          </div>
          <div className="lg:col-span-5">
            <p className="text-white/70 text-sm font-light leading-relaxed">
              Woodpacker lies beautifully in the central belt of Auroville forest commune—a pristine international township dedicated to unity. You aren't staying in a suburb; you're living inside a giant greenhouse filled with artists, organic bakers, and forest builders.
            </p>
          </div>
        </div>

        {/* Interactive Map & Detail Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Interactive Hand-drawn styled vector map */}
          <div className="lg:col-span-12 xl:col-span-7 bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col justify-between relative min-h-[420px] shadow-2xl backdrop-blur-xl">
            
            {/* Circular Mandala Guidelines overlaying the background */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-40">
              <div className="w-[85%] aspect-square rounded-full border border-dashed border-white/20 flex items-center justify-center">
                <div className="w-[65%] aspect-square rounded-full border border-dashed border-white/10 flex items-center justify-center">
                  <div className="w-[45%] aspect-square rounded-full border border-dashed border-white/5" />
                </div>
              </div>
            </div>

            {/* Map Header block */}
            <div className="relative z-10 flex justify-between items-center bg-[#0c0c0c]/85 p-4 rounded-xl border border-white/10">
              <div>
                <h4 className="font-display font-bold text-xs tracking-wider text-white uppercase flex items-center gap-2">
                  <Map className="w-4 h-4 text-[#f3a663]" />
                  MANDALA COMMUNE RADIUS MAP
                </h4>
                <p className="text-[10px] text-orange-400 font-bold uppercase tracking-widest font-mono">
                  Base camp: Woodpacker (Core center)
                </p>
              </div>
              <span className="font-mono text-[9px] uppercase font-bold text-orange-400 text-right max-w-[120px] block leading-normal hidden sm:block">
                CLICK A BLIP FOR DIRECTION & TIPS
              </span>
            </div>

            {/* The Plot Stage */}
            <div className="relative w-full h-[280px] my-6 z-10 overflow-hidden flex items-center justify-center">
              
              {/* Woodpacker Base Camp (The center Hearth) */}
              <div 
                className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center"
                id="base-camp-blip"
              >
                <div className="w-10 h-10 rounded-full bg-orange-500 text-black flex items-center justify-center shadow-2xl border-2 border-white animate-bounce font-black">
                  <Compass className="w-5 h-5 text-black" />
                </div>
                <span className="font-mono text-[9px] tracking-widest uppercase font-black text-black bg-white px-2 py-0.5 rounded shadow-xl mt-1">
                  WOODPACKER BASE
                </span>
              </div>

              {/* Dynamic Coordinate Spots */}
              {LOCATION_SPOTS.map((spot) => {
                const isActive = spot.id === selectedSpot;
                return (
                  <button
                    key={spot.id}
                    onClick={() => setSelectedSpot(spot.id)}
                    style={{ left: `${spot.coordinates.x}%`, top: `${spot.coordinates.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-10 p-2 group cursor-pointer"
                    aria-label={`Select ${spot.name}`}
                  >
                    <div className="relative flex items-center justify-center">
                      {/* Interactive Pulses if active */}
                      {isActive && (
                        <span className="absolute inline-flex h-10 w-10 rounded-full bg-orange-400/40 animate-ping" />
                      )}
                      
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center shadow-md transition-all border ${
                        isActive 
                          ? "bg-orange-500 text-black scale-125 border-white font-extrabold" 
                          : "bg-white/10 text-orange-400 border-white/20 hover:scale-110 group-hover:bg-white/20"
                      }`}>
                        <MapPin className="w-4 h-4" />
                      </div>
                    </div>
                    {/* Tiny hover tip label */}
                    <span className="absolute top-8 left-1/2 -translate-x-1/2 bg-[#0c0c0c] text-white text-[9px] font-mono whitespace-nowrap px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 z-30">
                      {spot.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Map footer detail */}
            <div className="relative z-10 flex items-center justify-between text-xs font-mono text-orange-400 pt-2 border-t border-white/10">
              <span>WOODPACKER ADDRESS: AUROVILLE MAIN RD, TAMIL NADU</span>
              <a 
                href="https://maps.google.com/?q=Woodpacker+Hostel+Auroville" 
                target="_blank" 
                rel="noreferrer"
                className="underline hover:text-orange-300 font-bold"
              >
                OPEN GOOGLE MAPS
              </a>
            </div>
          </div>

          {/* Right Column: Immersive spot details dashboard */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-between bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-xl">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/10 border border-white/10 rounded-xl text-orange-400">
                  <Footprints className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs text-orange-400 font-bold uppercase tracking-wider block">
                    NEIGHBORHOOD BLEND
                  </span>
                  <h3 className="font-display font-black text-2xl tracking-tight text-white uppercase">
                    {spotData.name}
                  </h3>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-sm text-xs text-orange-400 font-mono border border-white/10">
                <Bike className="w-3.5 h-3.5 text-orange-400" />
                <span>DISTANCE: {spotData.distance}</span>
              </div>

              <p className="text-sm text-white/80 leading-relaxed font-sans font-light">
                {spotData.description}
              </p>

              {/* Insider pro-tip box */}
              <div className="p-5 bg-white/5 rounded-2xl border border-white/10 space-y-2">
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#f3a663] uppercase block font-bold">
                  ★ INSIDER COMMUNE TRICK
                </span>
                <p className="text-xs text-white/95 leading-relaxed font-sans italic">
                  "{spotData.routeTip}"
                </p>
              </div>
            </div>

            {/* Fast direct shortcuts */}
            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
              <div className="text-xs text-white/50 font-mono">
                Explore Auroville & Pondicherry with Woodpackers
              </div>
              <button
                onClick={() => {
                  const el = document.getElementById("booking");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-xs font-mono font-bold tracking-wider text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-1.5 self-start group cursor-pointer"
              >
                <span>BOOK ADVENTURE BASE</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
