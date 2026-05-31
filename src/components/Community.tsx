import React from "react";
import { Coffee, MessageCircle, Heart, Flame } from "lucide-react";
import { motion } from "motion/react";
import { IMAGES } from "../data";

interface CommunityProps {
  onScrollTo: (elementId: string) => void;
}

export default function Community({ onScrollTo }: CommunityProps) {
  const communalPillars = [
    {
      num: "01",
      title: "Shared Dinner Plates",
      desc: "Weekly cook-offs where backpackers from six continents mix spices and recipes over one giant iron pot.",
      vibe: "Tastes like home"
    },
    {
      num: "02",
      title: "Rooftop Conversations",
      desc: "Loose acoustic jams that spin out into talks about philosophy, digital startup ideas, and travel maps.",
      vibe: "Under the stars"
    },
    {
      num: "03",
      title: "Spontaneous Trails",
      desc: "Waking up, renting bicycles together, and cycling into the red forests without a map or agenda.",
      vibe: "Free and wild"
    }
  ];

  return (
    <section
      id="community"
      className="relative py-24 md:py-32 bg-[#0c0c0c] overflow-hidden px-4 md:px-12 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Editorial Sub-headers */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-4">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-orange-400 font-bold uppercase block mb-3">
              // WOODPACKER SOCIAL PHILOSOPHY
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight text-white uppercase">
              Strangers on Arrival.
            </h2>
            <p className="font-serif italic text-2xl md:text-3xl text-orange-400 mt-1">
              Family by Sundown.
            </p>
          </div>
          <p className="max-w-md text-white/70 text-sm font-light leading-relaxed">
            We built Woodpacker because we got tired of cold hotel corridors and impersonal receptions. Here, your room is just where you sleep—the lounge, raw brick terraces, and kitchen are where you live.
          </p>
        </div>

        {/* Storytelling Canvas & Visual Layer Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Poetic typography of connecting */}
          <div className="lg:col-span-7 space-y-8" id="philosophical-story">
            <div className="relative group p-8 md:p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-black font-extrabold shadow-md">
                <Flame className="w-5 h-5 text-black stroke-[2.5]" />
              </div>
              
              <blockquote className="space-y-6">
                <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-tight text-white/95 font-medium italic">
                  “Nobody arrives here knowing everyone.”
                </p>
                <div className="h-[1px] bg-white/10 w-24 my-4" />
                
                <p className="font-display text-xl md:text-2xl text-orange-400 font-bold pl-4 border-l-2 border-orange-500">
                  But that’s usually how the story begins.
                </p>
                
                <p className="text-white/80 text-sm md:text-base font-light leading-relaxed pt-2">
                  One shared curry dinner around the teakwood table. One acoustic guitar session on the breezy rooftop. One spontaneous cycle ride down to the hidden forest trail. And without planning it, strangers slowly, beautifully become life companions.
                </p>
              </blockquote>
            </div>

            {/* Pillar Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              {communalPillars.map((p, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  <span className="font-mono text-[10px] tracking-widest text-[#f3a663] font-bold block mb-2 uppercase">
                    {p.num} // {p.vibe}
                  </span>
                  <h4 className="font-display font-bold text-xs text-white tracking-widest uppercase mb-2">
                    {p.title}
                  </h4>
                  <p className="text-xs text-white/60 leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Layered Artistic Frame */}
          <div className="lg:col-span-5 relative" id="layered-communal-gallery">
            {/* Ambient orange backing blur */}
            <div className="absolute -inset-4 bg-orange-500/10 rounded-[40px] rotate-3 blur-2xl z-0" />

            {/* Main Picture Card */}
            <div className="relative bg-white/5 backdrop-blur-2xl p-4 rounded-3xl border border-white/10 z-10 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="overflow-hidden rounded-2xl relative group aspect-[4/3]">
                <img
                  src={IMAGES.communityLounge}
                  alt="Woodpacker Communal Experience"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-xs font-mono tracking-wider text-orange-400 font-bold">
                    COZY TIMBER RETREAT • 10:45 PM
                  </p>
                </div>
              </div>
              <div className="pt-4 px-2 flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-base text-white leading-tight">
                    The Sacred Lounge
                  </h3>
                  <p className="font-mono text-[10px] tracking-widest text-orange-400 uppercase mt-0.5">
                    RECLAIMED ECO-ARCHITECTURE
                  </p>
                </div>
                <div className="flex gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 text-xs text-orange-400 font-mono">
                  <Coffee className="w-3.5 h-3.5" />
                  <span>Chai Daily</span>
                </div>
              </div>
            </div>

            {/* Float Badge */}
            <div className="absolute -bottom-6 -right-4 bg-orange-500 text-black p-4 rounded-2xl shadow-2xl border border-orange-600/20 z-20 max-w-[200px] transform rotate-3">
              <span className="font-serif italic text-sm font-semibold block leading-tight">
                “Strangers are only friends you haven't shared chai with yet.”
              </span>
              <span className="font-mono text-[8px] uppercase tracking-widest text-black/60 mt-2 block font-bold">
                — Auroville Legend
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
