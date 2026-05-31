import React, { useState } from "react";
import { Compass, Heart, Bike, Flame, MapPin, ChevronRight, Sparkles, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SOLO_JOURNEY_STEPS } from "../data";

interface SoloJourneyProps {
  onScrollTo: (elementId: string) => void;
}

export default function SoloJourney({ onScrollTo }: SoloJourneyProps) {
  const [activeStep, setActiveStep] = useState(0);

  // Map icon names to real Lucide components
  const getIcon = (name: string, className: string) => {
    switch (name) {
      case "MapPin":
        return <MapPin className={className} />;
      case "Flame":
        return <Flame className={className} />;
      case "Bike":
        return <Bike className={className} />;
      case "Heart":
        return <Heart className={className} />;
      case "Compass":
      default:
        return <Compass className={className} />;
    }
  };

  return (
    <section
      id="solo-life"
      className="py-24 md:py-32 bg-[#0c0c0c] overflow-hidden px-4 md:px-12 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-orange-400 mb-4">
            <ShieldCheck className="w-4 h-4 text-orange-400" />
            <span className="font-mono text-[10px] tracking-widest uppercase font-bold">
              SAFE, SACRED & SUPPORTIVE CO-HOUSING
            </span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight text-white uppercase">
            The Solo Traveler’s Evolution
          </h2>
          <p className="font-serif italic text-xl md:text-2xl text-orange-400 mt-2">
            A journey from quiet arrival to deep belonging
          </p>
          <p className="text-white/70 text-sm md:text-base font-light mt-4 leading-relaxed">
            Traveling on your own is terrifying—until you open our hand-carved main gates. We have custom-engineered every nook and event of Woodpacker to ensure solo wanderers feel absolutely secure, celebrated, and deeply integrated into the clan.
          </p>
        </div>

        {/* Dynamic Stepper Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          {/* Left Column: Interactive Timeline Navigation */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-4" id="timeline-steps">
            {SOLO_JOURNEY_STEPS.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={step.phase}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? "bg-white/10 border-orange-500 shadow-2xl pl-7"
                      : "bg-white/5 border-white/10 hover:bg-white/10 pl-5"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        isSelected
                          ? "bg-orange-500 text-black font-extrabold"
                          : "bg-white/10 text-orange-400"
                      }`}
                    >
                      {getIcon(step.iconName, "w-5 h-5")}
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#f3a663] block font-bold">
                        PHASE 0{idx + 1} • {step.phase}
                      </span>
                      <h3
                        className={`font-display font-bold text-base md:text-lg tracking-tight transition-colors ${
                          isSelected ? "text-white" : "text-white/75"
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 text-white/40 transition-transform ${
                      isSelected ? "rotate-90 text-orange-400 translate-x-1" : ""
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Immersive Animated Memory Diary Card */}
          <div className="lg:col-span-12 xl:col-span-7 h-full" id="timeline-detail-canvas">
            <AnimatePresence mode="wait">
              {SOLO_JOURNEY_STEPS.map((step, idx) => {
                if (idx !== activeStep) return null;
                return (
                  <motion.div
                    key={step.phase}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col justify-between h-full"
                  >
                    {/* Artistic Header */}
                    <div className="px-6 py-4 bg-white/5 border-b border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-orange-400" />
                        <span className="font-mono text-[11px] tracking-wider text-white/70 font-bold uppercase">
                          TRAVELER JOURNAL ENTRY
                        </span>
                      </div>
                      <span className="font-mono text-xs bg-orange-500 text-black border-none px-3 py-1 rounded-full font-bold">
                        Phase 0{idx + 1}
                      </span>
                    </div>

                    {/* Diary Body Content */}
                    <div className="p-8 md:p-10 space-y-6 flex-grow">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-orange-400">
                          {getIcon(step.iconName, "w-6 h-6")}
                        </div>
                        <div>
                          <span className="font-mono text-xs block text-[#f3a663] font-bold uppercase">
                            The Vibe Experience
                          </span>
                          <h4 className="font-display font-bold text-2xl tracking-tight text-white">
                            {step.title}
                          </h4>
                        </div>
                      </div>

                      <p className="font-serif italic text-lg text-white/90 leading-relaxed font-light pt-3">
                        "{step.story}"
                      </p>

                      <div className="p-4 bg-white/5 rounded-xl border border-white/10 mt-6">
                        <span className="font-mono text-[10px] tracking-widest text-[#f3a663] uppercase block font-semibold mb-1">
                          EMOTIONAL STATE
                        </span>
                        <p className="text-xs text-white/80 font-medium font-sans">
                          {step.feeling}
                        </p>
                      </div>
                    </div>

                    {/* Book Shortcut footer inside box */}
                    <div className="p-6 bg-[#0e0e0e]/50 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-center sm:text-left">
                        <p className="font-mono text-[10px] text-white/50 uppercase font-bold">
                          READY TO TAKE THIS PATH?
                        </p>
                        <p className="font-display text-xs text-white/80">
                          We preserve 60% of our beds purely for solo wanderers.
                        </p>
                      </div>
                      <button
                        onClick={() => onScrollTo("booking")}
                        className="w-full sm:w-auto px-5 py-2.5 bg-orange-500 hover:bg-orange-400 text-black rounded-sm text-xs font-mono tracking-widest font-extrabold uppercase transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
                      >
                        INQUIRE ABOUT THIS STAY
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
