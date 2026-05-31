import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Heart, MapPin, Instagram } from "lucide-react";
import { TESTIMONIALS, IMAGES } from "../data";

export default function GuestStories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevStory = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextStory = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeStory = TESTIMONIALS[currentIndex];

  const instaGrid = [
    { img: IMAGES.lodgeExterior, caption: "Golden hour washing over our central terracotta dome... 🌇" },
    { img: IMAGES.communityLounge, caption: "Late-night melodies and tea debates. Conversations with no filters. 🎸" },
    { img: IMAGES.dormComfort, caption: "A quiet nook for deep post-travel rest. Cotton sheets, soft lighting. 💤" },
    { img: IMAGES.gardenReception, caption: "Deep in the green heart of Auroville. Breathe in, relax. 🌿" },
    { img: IMAGES.terraceWorkation, caption: "Our visual creators on duty. Drafting ideas under hanging ivies. 💻" }
  ];

  return (
    <section
      id="stories"
      className="py-24 md:py-32 bg-[#0c0c0c] text-white overflow-hidden px-4 md:px-12 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Title Module */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="font-mono text-xs tracking-[0.3em] text-[#f3a663] font-bold uppercase block mb-3">
            // SHARED MEMORIES FROM GLOBAL ROAMERS
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight text-white uppercase">
            The Polaroid Guestbook
          </h2>
          <p className="font-serif italic text-xl md:text-2xl text-orange-400 mt-1">
            Real scribbles from real wanderers
          </p>
        </div>

        {/* Dynamic Testimonials Journal Swipe Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Left Block: Handdrawn style polaroid image cards */}
          <div className="lg:col-span-12 xl:col-span-5 relative" id="polaroid-holder">
            <div className="absolute inset-0 bg-white/5 rounded-3xl transform rotate-2 -z-10 blur-sm" />
            
            <div className="bg-white/5 p-6 pb-20 rounded-2xl shadow-2xl border border-white/15 backdrop-blur-xl transform -rotate-1 relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-black/40 relative border border-white/10">
                <img
                  src={activeStory.image}
                  alt={activeStory.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/25" />
              </div>
              
              {/* Handwritten signature caption */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div>
                  <span className="font-serif italic text-xl text-white block leading-none">
                    {activeStory.name}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#f3a663] mt-1.5 block font-bold">
                    {activeStory.country} • {activeStory.date}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-500 shadow-sm border border-rose-500/35">
                  <Heart className="w-4 h-4 fill-rose-500" />
                </div>
              </div>
            </div>

            {/* Slider triggers */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-25 bg-[#0c0c0c]/90 text-white px-4 py-2 rounded-full border border-white/10 shadow-2xl">
              <button
                onClick={prevStory}
                className="hover:text-orange-400 transition-colors text-white cursor-pointer"
                aria-label="Previous Guest story"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="font-mono text-[10px] tracking-widest text-orange-400 font-bold">
                0{currentIndex + 1} / 0{TESTIMONIALS.length}
              </span>
              <button
                onClick={nextStory}
                className="hover:text-orange-400 transition-colors text-white cursor-pointer"
                aria-label="Next Guest story"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Block: Pure testimonial content */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-6" id="testimonial-quote-box">
            <Quote className="w-12 h-12 text-[#f3a663]/35 block" />
            <blockquote className="font-serif italic text-xl md:text-2xl lg:text-3xl text-slate-100 leading-relaxed font-light">
              "{activeStory.story}"
            </blockquote>
            
            <div className="h-px bg-white/10 w-24 my-6" />
            
            <div className="flex items-center gap-3">
              <img
                src={activeStory.avatar}
                alt={activeStory.name}
                className="w-12 h-12 rounded-full object-cover border border-white/20"
                referrerPolicy="no-referrer"
              />
              <div>
                <h4 className="font-display font-medium text-sm tracking-widest text-white uppercase leading-none">
                  {activeStory.name}
                </h4>
                <div className="flex items-center gap-1.5 mt-2.5 font-mono text-[10px] text-orange-400 uppercase font-bold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>TRAVEL FROM {activeStory.country}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Polaroid Traveler Instagram Stream */}
        <div className="border-t border-white/10 pt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="font-mono text-xs text-orange-400 uppercase block mb-1 font-bold">
                // @WOODPACKER_AUROVILLE
              </span>
              <h3 className="font-display font-black text-2xl md:text-3xl tracking-tight text-white uppercase">
                The Woodpacker Ambiance Stream
              </h3>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 bg-white/5 hover:bg-[#111] text-white border border-white/15 rounded-sm font-mono text-xs font-semibold tracking-wider inline-flex items-center gap-2 hover:scale-[1.02] transition-transform"
            >
              <Instagram className="w-4 h-4 text-orange-400" />
              FOLLOW INSTA MEMORIES
            </a>
          </div>

          {/* Gallery Row */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4" id="insta-strip">
            {instaGrid.map((post, idx) => (
              <div
                key={idx}
                className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden aspect-square hover:shadow-2xl transition-transform hover:-translate-y-1 duration-300 cursor-pointer"
              >
                <img
                  src={post.img}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-[#0c0c0c]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <Instagram className="w-5 h-5 text-orange-400 mb-2" />
                  <p className="text-[10px] text-white/90 font-light leading-normal">
                    {post.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
