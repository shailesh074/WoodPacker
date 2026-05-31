/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Community from "./components/Community";
import SoloJourney from "./components/SoloJourney";
import Workation from "./components/Workation";
import StayExperience from "./components/StayExperience";
import ExplorePondicherry from "./components/ExplorePondicherry";
import Events from "./components/Events";
import GuestStories from "./components/GuestStories";
import BookingForm from "./components/BookingForm";
import { Compass, Mail, Phone, MapPin, Instagram, Anchor, Heart } from "lucide-react";

export default function App() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-[#0c0c0c] min-h-screen text-white flex flex-col justify-between selection:bg-orange-500 selection:text-black">
      {/* Dynamic Header */}
      <Header onScrollTo={handleScrollTo} />

      {/* Main Experience Layout */}
      <main className="flex-grow">
        {/* Unit 01: Immersive Hero slideshow */}
        <Hero onScrollTo={handleScrollTo} />

        {/* Unit 02: Community quote sequence */}
        <Community onScrollTo={handleScrollTo} />

        {/* Unit 03: Solo traveler connection journal */}
        <SoloJourney onScrollTo={handleScrollTo} />

        {/* Unit 04: Digital Nomad Workation oasis */}
        <Workation onScrollTo={handleScrollTo} />

        {/* Unit 05: Sanctuary rooms & essential features */}
        <StayExperience onScrollTo={handleScrollTo} />

        {/* Unit 06: Auroville interactive coordinates mandala map */}
        <ExplorePondicherry />

        {/* Unit 07: Unplugged musical events sunset terrace */}
        <Events onScrollTo={handleScrollTo} />

        {/* Unit 08: Polaroid traveler polaroid journal and stream */}
        <GuestStories />

        {/* Unit 09: WhatsApp direct bookings inquiry form */}
        <BookingForm />
      </main>

      {/* Awwwards Winner Style Footnotes & Accents */}
      <footer className="bg-[#0c0c0c] text-white border-t border-white/10 pt-20 pb-12 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/10 pb-16 mb-12">
          
          {/* Logo & Manifesto block */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-orange-400 shadow-2xl">
                <Compass className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <span className="font-display font-black text-xl tracking-widest text-white uppercase block leading-none">
                  WoodPacker
                </span>
                <span className="font-mono text-[9px] tracking-widest text-orange-400 font-bold uppercase block mt-1">
                  Auroville Hostel
                </span>
              </div>
            </div>
            <p className="text-xs text-white/60 font-light leading-relaxed max-w-sm">
              We aren’t in the business of booking beds; we are in the craft of cultivating real spaces of absolute trust, safety, exploration, and belonging.
            </p>
          </div>

          {/* Links column 1 */}
          <div className="md:col-span-2.5">
            <h5 className="font-mono text-[10px] tracking-widest uppercase text-orange-400 block mb-4 font-bold">
              THE EXPERIENCE PATHWAYS
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleScrollTo("community")} className="text-white/70 hover:text-[#f3a663] transition-colors cursor-pointer text-left">
                  The Soulful Vibe
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("solo-life")} className="text-white/70 hover:text-[#f3a663] transition-colors cursor-pointer text-left">
                  Solo Wanderer Safety
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("workation")} className="text-white/70 hover:text-[#f3a663] transition-colors cursor-pointer text-left">
                  Remote Nomad Terrace
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("stay")} className="text-white/70 hover:text-[#f3a663] transition-colors cursor-pointer text-left">
                  Sanctuary Bunk Dorms
                </button>
              </li>
            </ul>
          </div>

          {/* Links column 2 */}
          <div className="md:col-span-2.5">
            <h5 className="font-mono text-[10px] tracking-widest uppercase text-orange-400 block mb-4 font-bold">
              LOCAL COMMUNE RADIUS
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleScrollTo("explore")} className="text-white/70 hover:text-[#f3a663] transition-colors cursor-pointer text-left">
                  Interactive Mandala Blips
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("gatherings")} className="text-white/70 hover:text-[#f3a663] transition-colors cursor-pointer text-left">
                  Weekly Unplugged Sunset Jams
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("stories")} className="text-white/70 hover:text-[#f3a663] transition-colors cursor-pointer text-left">
                  Polaroid Guestbook Pages
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("booking")} className="text-white/70 hover:text-[#f3a663] transition-colors cursor-pointer text-left">
                  WhatsApp Direct Booking
                </button>
              </li>
            </ul>
          </div>

          {/* Core Contacts Block */}
          <div className="md:col-span-3 space-y-4 text-xs">
            <h5 className="font-mono text-[10px] tracking-widest uppercase text-orange-400 block mb-4 font-bold">
              VISIT OR TALK TO US
            </h5>
            
            <div className="space-y-2 text-white/70 font-sans">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Woodpacker Hostel, Auroville Main Rd, Auroville, Tamil Nadu 605101, India</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+91 80274 70438 / Inquiry line</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#f3a663] shrink-0" />
                <span>hello@woodpackerhostel.com</span>
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Woodpacker Instagram" className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors text-orange-400">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://wa.me/918027470438?text=Hi%20Woodpacker%20Hostel!" target="_blank" rel="noreferrer" aria-label="Woodpacker WhatsApp" className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors text-white hover:text-orange-400">
                <Anchor className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Lower row details */}
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-mono">
          <span>© 2026 WOODPACKER HOSTEL AUROVILLE. ALL RIGHTS RESERVED.</span>
          <div className="flex items-center gap-1">
            <span>Built for the Free Spirits & Creators with</span>
            <Heart className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
            <span>in Auroville</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
