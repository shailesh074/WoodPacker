import React, { useState, useEffect } from "react";
import { Compass, ChevronRight, MessageSquare, ArrowDown, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { IMAGES } from "../data";

interface HeroProps {
  onScrollTo: (elementId: string) => void;
}

const HERO_SLIDES = [
  {
    image: IMAGES.lodgeExterior,
    subtitle: "AUROVILLE, TAMIL NADU",
    title: "Strangers",
    italicized: "Become Stories.",
    quote: "Nobody arrives here knowing everyone. But that's usually how the story begins. One shared dinner. One rooftop conversation. One spontaneous trip."
  },
  {
    image: IMAGES.communityLounge,
    subtitle: "MEET THE SOULS OF THE PATH",
    title: "Shared dinners.",
    italicized: "Infinite vibes.",
    quote: "From one communal pot meals to deep debates on the timber deck under a blanket of cosmic stars."
  },
  {
    image: IMAGES.terraceWorkation,
    subtitle: "REMOTE FREEDOM",
    title: "Work with the wind.",
    italicized: "Create with the forest.",
    quote: "High-speed fiber connectivity draped in hanging green vines for engineers, artists, and digital wanderers."
  },
  {
    image: IMAGES.gardenReception,
    subtitle: "ORGANIC NATURE",
    title: "Dusty red trails.",
    italicized: "Chasing slow days.",
    quote: "Nestled beautifully inside Auroville's tranquil wilderness—just walking minutes to the Matrimandir."
  }
];

export default function Hero({ onScrollTo }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0c0c0c] text-white px-4 md:px-12 py-20"
    >
      {/* Background Slideshow with Ken Burns Zoom Effect */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          {HERO_SLIDES.map((slide, index) => {
            if (index !== currentSlide) return null;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 0.6, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <div className="absolute inset-y-0 inset-x-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-black/40 z-10" />
                <img
                  src={slide.image}
                  alt="Woodpacker Hostel Space"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Floating Design Accents */}
      <div className="absolute bottom-10 left-12 hidden xl:flex items-center gap-3 z-20 text-white/40 font-mono text-xs">
        <MapPin className="w-4 h-4 text-orange-400" />
        <span>11.9839° N, 79.8078° E • AUROVILLE, INDIA</span>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center justify-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
          <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-orange-400">
            {HERO_SLIDES[currentSlide].subtitle}
          </span>
        </motion.div>

        {/* Dynamic Storytelling Title */}
        <div className="h-auto md:min-h-[220px] lg:min-h-[260px] flex flex-col justify-center mb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center"
            >
              <h1 className="font-display font-black text-4xl sm:text-6xl md:text-[84px] leading-[0.9] tracking-tighter uppercase text-white">
                {HERO_SLIDES[currentSlide].title}
              </h1>
              <p className="font-serif italic font-light text-3xl sm:text-4xl md:text-6xl mt-2 block bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-orange-500 pb-2">
                {HERO_SLIDES[currentSlide].italicized}
              </p>
              <p className="max-w-2xl mx-auto text-white/80 text-sm sm:text-base md:text-lg font-serif italic italic mt-6 leading-relaxed">
                "{HERO_SLIDES[currentSlide].quote}"
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dynamic CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full justify-center max-w-md px-4"
        >
          <button
            onClick={() => onScrollTo("booking")}
            className="w-full sm:w-auto px-8 py-4 bg-orange-500 hover:bg-orange-400 text-black font-extrabold text-xs tracking-widest uppercase rounded-sm shadow-2xl shadow-orange-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            id="hero-book-cta"
          >
            <span>Begin Your Chapter</span>
            <ChevronRight className="w-4 h-4 text-black stroke-[3]" />
          </button>
          
          <a
            href="https://wa.me/918027470438?text=Hi%20Woodpacker%20Hostel!%20I'd%20love%20to%20inquire%20about%20booking%20a%20stay.%20"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-sm font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]"
            id="hero-whatsapp-cta"
          >
            <MessageSquare className="w-4 h-4 text-green-400" />
            <span>WhatsApp Vibe</span>
          </a>
        </motion.div>

        {/* Navigation Dots */}
        <div className="flex items-center gap-3.5 mt-12 md:mt-16 z-20">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-500 ${
                currentSlide === idx ? "w-8 bg-orange-400" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Floating Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          onClick={() => onScrollTo("community")}
          className="mt-10 cursor-pointer hidden sm:flex flex-col items-center gap-2 text-white/40 hover:text-white transition-colors"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase">Explore Spaces</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </div>

      {/* Aesthetic Border Trim (Earth tone ribbon) */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 z-20" />
    </section>
  );
}
