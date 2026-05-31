import React, { useState } from "react";
import { Music, Sun, Utensils, Palette, Calendar, Hourglass, HelpCircle, ArrowRight } from "lucide-react";
import { EVENTS } from "../data";

interface EventsProps {
  onScrollTo: (elementId: string) => void;
}

export default function Events({ onScrollTo }: EventsProps) {
  const [activeEvent, setActiveEvent] = useState<string>(EVENTS[0].id);

  const getEventIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "Music":
        return <Music className={className} />;
      case "Sun":
        return <Sun className={className} />;
      case "Utensils":
        return <Utensils className={className} />;
      case "Palette":
        return <Palette className={className} />;
      default:
        return <Calendar className={className} />;
    }
  };

  const selectedEventData = EVENTS.find((e) => e.id === activeEvent) || EVENTS[0];

  return (
    <section
      id="gatherings"
      className="py-24 md:py-32 bg-[#0c0c0c] text-white overflow-hidden px-4 md:px-12 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Dynamic Story Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="font-mono text-xs tracking-[0.3em] text-[#f3a663] font-bold uppercase block mb-3">
            // UNPLUGGED ROOFTOP & WOODLAND MOMENTS
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-tight uppercase">
            Sunsets arrive slowly here.
          </h2>
          <p className="font-serif italic text-2xl text-orange-400 mt-2">
            And that is when the magic starts
          </p>
          <p className="text-white/70 text-sm md:text-base font-light mt-4 leading-relaxed">
            We don't manage forced, repetitive holiday games. We craft atmospheric conditions where conversations flow organically, someone starts playing a guitar, and moments morph into memories that stay long after checkout.
          </p>
        </div>

        {/* Cinematic Split Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block: Quick-fire moment selectors */}
          <div className="lg:col-span-12 xl:col-span-4 flex flex-col justify-between" id="events-scheduler-column">
            <div className="space-y-4">
              <span className="font-mono text-[9px] text-[#f3a663] tracking-widest uppercase font-bold block">
                WEEKLY HAPPENINGS SCHEDULE
              </span>
              <div className="flex flex-col gap-3">
                {EVENTS.map((evt) => {
                  const isActive = evt.id === activeEvent;
                  return (
                    <button
                      key={evt.id}
                      onClick={() => setActiveEvent(evt.id)}
                      className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 cursor-pointer ${
                        isActive
                          ? "bg-white/15 border-orange-500 text-white shadow-2xl"
                          : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10"
                      }`}
                    >
                      <div className={`p-2.5 rounded-xl border transition-colors ${isActive ? "bg-orange-500 text-black border-white/20" : "bg-white/5 text-orange-400 border-white/10"}`}>
                        {getEventIcon(evt.iconName, "w-5 h-5")}
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-sm md:text-base text-white">
                          {evt.title}
                        </h4>
                        <span className="font-mono text-[10px] text-white/40 uppercase block mt-0.5">
                          {evt.day}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Micro quote below list */}
            <div className="hidden lg:block p-6 border-l-2 border-orange-500/20 text-xs text-white/55 font-sans italic pt-6 leading-relaxed mt-8">
              "Some memories stay long after checkout. It’s not about the activity; it's about the people you end up chopping chili's with."
            </div>
          </div>

          {/* Right Block: Pure atmospheric storytelling card */}
          <div className="lg:col-span-12 xl:col-span-8 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col justify-between min-h-[420px] shadow-2xl backdrop-blur-xl transform transition-all duration-300" id="gatherings-story-board">
            <div className="space-y-8">
              
              {/* Event meta card labels */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 bg-white/5 border border-white/10 rounded-lg text-orange-400">
                    {getEventIcon(selectedEventData.iconName, "w-5 h-5")}
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-white/40 uppercase font-semibold">
                      ATMOSPHERIC MOODS
                    </span>
                    <h3 className="font-display font-medium text-lg text-white">
                      {selectedEventData.title}
                    </h3>
                  </div>
                </div>
                
                <div className="flex gap-4 font-mono text-xs">
                  <div>
                    <span className="text-white/40 block text-[9px] uppercase">GATHERING HOUR</span>
                    <span className="text-orange-400 font-bold">{selectedEventData.time}</span>
                  </div>
                  <div>
                    <span className="text-white/40 block text-[9px] uppercase">FREQUENCY</span>
                    <span className="text-orange-400 font-bold">{selectedEventData.day}</span>
                  </div>
                </div>
              </div>

              {/* Event cinematic copy text */}
              <div className="space-y-4">
                <blockquote className="font-serif italic text-2xl md:text-3xl lg:text-4xl text-slate-100 font-light leading-snug">
                  "{selectedEventData.description}"
                </blockquote>
                
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-white/10 border border-white/10 text-xs font-mono text-[#f3a663] font-bold">
                  <Hourglass className="w-3.5 h-3.5" />
                  <span>ATMOSPHERE: {selectedEventData.vibe}</span>
                </div>
              </div>
            </div>

            {/* Direct Booking Link Shortcut */}
            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-12">
              <div className="text-xs text-white/55 font-sans">
                Our social events are always free and exclusive for staying Woodpackers.
              </div>
              <button
                onClick={() => onScrollTo("booking")}
                className="w-full sm:w-auto px-6 py-3 bg-orange-500 hover:bg-orange-400 text-black font-mono text-[11px] font-black uppercase tracking-widest rounded-sm inline-flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-[1.02] shadow-2xl cursor-pointer"
              >
                <span>Live this Moment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
