import React, { useState } from "react";
import { MessageSquare, Calendar, Compass, ShieldCheck, Flame, ClipboardCheck } from "lucide-react";
import { ROOMS } from "../data";

export default function BookingForm() {
  const [roomChoice, setRoomChoice] = useState<string>(ROOMS[0].id);
  const [arrivalDate, setArrivalDate] = useState<string>("2026-06-15");
  const [departureDate, setDepartureDate] = useState<string>("2026-06-22");
  const [travelerStyle, setTravelerStyle] = useState<string>("Solo Wanderer");
  const [adventureGoal, setAdventureGoal] = useState<string>("Coding & Sourdough");
  const [guestName, setGuestName] = useState<string>("");
  const [guestEmail, setGuestEmail] = useState<string>("");
  const [showDraft, setShowDraft] = useState<boolean>(false);

  // Math to figure out booking duration
  const date1 = new Date(arrivalDate || "2026-06-15");
  const date2 = new Date(departureDate || "2026-06-22");
  const diffTime = Math.abs(date2.getTime() - date1.getTime());
  const calculatedNights = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;

  const activeRoom = ROOMS.find((r) => r.id === roomChoice) || ROOMS[0];
  const rateNumeric = activeRoom.id === "private-boho-suite" ? 2200 : activeRoom.id === "earthy-dorm-6" ? 850 : 750;
  const totalPrice = rateNumeric * calculatedNights;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowDraft(true);
  };

  const getWhatsAppLink = () => {
    const defaultName = guestName || "Adventurer";
    const textMessage = `Hi Woodpacker! 🌴 I'm ${defaultName} (${travelerStyle}) and I'd love to request a stay:
🏡 Room: ${activeRoom.name}
📅 Dates: ${arrivalDate} to ${departureDate} (${calculatedNights} nights)
🎯 My Vibe Goal: ${adventureGoal}

Let me know if you have a bed available for these dates! 🎒`;
    
    return `https://wa.me/918027470438?text=${encodeURIComponent(textMessage)}`;
  };

  return (
    <section
      id="booking"
      className="py-24 md:py-32 bg-[#0c0c0c] text-white overflow-hidden px-4 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Text */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="font-mono text-xs tracking-[0.3em] text-[#f3a663] block mb-3 font-bold">
            // UNGUARD YOUR EXPERIENCE • BOOK TODAY
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight text-white uppercase">
            Secure Your Haven.
          </h2>
          <p className="font-serif italic text-xl md:text-2xl text-orange-400 mt-1">
            We preserve 85% of our beds directly for slow-travel builders
          </p>
          <p className="text-xs text-white/70 leading-relaxed font-light mt-4 max-w-2xl mx-auto">
            We do not automate booking confirmations via heartless channels. We manually review every single inquiry message to make sure we keep our hostel chemistry energetic, soulful, safe, and collaborative. Fill in your travel focus, generate your draft, and verify via WhatsApp!
          </p>
        </div>

        {/* Dual Panel Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Block: The Interactive Form */}
          <div className="lg:col-span-12 xl:col-span-6 bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-xl">
            <h3 className="font-display font-bold text-lg text-white tracking-wider uppercase mb-6 border-b border-white/10 pb-4">
              Enter Your Journey Information
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-[10px] uppercase text-[#f3a663] block mb-2 font-bold">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Clara, Maya"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full px-4 py-3 bg-[#0c0c0c]/60 border border-white/10 focus:border-orange-500 rounded-xl font-sans text-sm text-white outline-none placeholder-white/30 font-light"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] uppercase text-[#f3a663] block mb-2 font-bold">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-[#0c0c0c]/60 border border-white/10 focus:border-orange-500 rounded-xl font-sans text-sm text-white outline-none placeholder-white/30 font-light"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-[10px] uppercase text-[#f3a663] block mb-2 font-bold">
                    ARRIVAL DATE
                  </label>
                  <input
                    type="date"
                    required
                    value={arrivalDate}
                    onChange={(e) => setArrivalDate(e.target.value)}
                    className="w-full px-4 py-3 bg-[#0c0c0c]/60 border border-white/10 focus:border-orange-500 rounded-xl font-sans text-sm text-white outline-none font-light"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] uppercase text-[#f3a663] block mb-2 font-bold">
                    DEPARTURE DATE
                  </label>
                  <input
                    type="date"
                    required
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="w-full px-4 py-3 bg-[#0c0c0c]/60 border border-white/10 focus:border-orange-500 rounded-xl font-sans text-sm text-white outline-none font-light"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-[10px] uppercase text-[#f3a663] block mb-2 font-bold">
                  CHOOSE YOUR SANCTUARY BED
                </label>
                <select
                  value={roomChoice}
                  onChange={(e) => setRoomChoice(e.target.value)}
                  className="w-full px-4 py-3 bg-[#0c0c0c]/60 border border-white/10 focus:border-orange-500 rounded-xl font-sans text-sm text-white outline-none cursor-pointer font-light"
                >
                  {ROOMS.map((r) => (
                    <option key={r.id} value={r.id} className="bg-[#0c0c0c]">
                      {r.name} — ({r.pricing})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-[10px] uppercase text-[#f3a663] block mb-2 font-bold">
                    YOUR TRAVELER STYLE
                  </label>
                  <select
                    value={travelerStyle}
                    onChange={(e) => setTravelerStyle(e.target.value)}
                    className="w-full px-4 py-3 bg-[#0c0c0c]/60 border border-white/10 focus:border-orange-500 rounded-xl font-sans text-sm text-white outline-none cursor-pointer font-light"
                  >
                    <option value="Solo Backpacker" className="bg-[#0c0c0c]">Solo Backpacker</option>
                    <option value="Digital Nomad / Designer" className="bg-[#0c0c0c]">Digital Nomad / Designer</option>
                    <option value="Yoga & Contemplation seeker" className="bg-[#0c0c0c]">Yoga & Contemplation seeker</option>
                    <option value="Musician / Writer" className="bg-[#0c0c0c]">Musician / Writer</option>
                    <option value="Group of Explorers" className="bg-[#0c0c0c]">Group of Explorers</option>
                  </select>
                </div>
                <div>
                  <label className="font-mono text-[10px] uppercase text-[#f3a663] block mb-2 font-bold">
                    CORE CO-LIVING PURPOSE
                  </label>
                  <select
                    value={adventureGoal}
                    onChange={(e) => setAdventureGoal(e.target.value)}
                    className="w-full px-4 py-3 bg-[#0c0c0c]/60 border border-white/10 focus:border-orange-500 rounded-xl font-sans text-sm text-white outline-none cursor-pointer font-light"
                  >
                    <option value="Rest & Slow Forest Cycling" className="bg-[#0c0c0c]">Rest & Slow Forest Cycling</option>
                    <option value="Coding & Sourdough jams" className="bg-[#0c0c0c]">Coding & Sourdough jams</option>
                    <option value="Clay Potting & Deep Music" className="bg-[#0c0c0c]">Clay Potting & Deep Music</option>
                    <option value="Contemplating near Matrimandir" className="bg-[#0c0c0c]">Contemplating near Matrimandir</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-orange-500 hover:bg-orange-400 text-black font-mono text-[11px] font-black uppercase tracking-widest rounded-sm shadow-2xl transition-all hover:scale-[1.01] cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <ClipboardCheck className="w-4 h-4 text-black" />
                <span>GENERATE ITINERARY PLAN</span>
              </button>
            </form>
          </div>

          {/* Right Block: Live generated Itinerary proposal */}
          <div className="lg:col-span-12 xl:col-span-6 bg-[#0c0c0c]/90 text-white rounded-3xl p-8 md:p-10 border border-white/10 flex flex-col justify-between shadow-2xl backdrop-blur-xl" id="itinerary-draft-holder">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="font-mono text-[9px] text-orange-400 tracking-widest uppercase block mb-1 font-bold">
                    LIVE RESPONSE
                  </span>
                  <h4 className="font-display font-medium text-lg text-white">
                    Woodpacker Itinerary Proposal
                  </h4>
                </div>
                <div className="px-3.5 py-1 bg-orange-500 text-black font-mono text-[10px] font-black tracking-wider rounded-sm uppercase">
                  Est. Booking Total
                </div>
              </div>

              {/* Dynamic Draft Detail Box */}
              {!showDraft ? (
                <div className="py-12 text-center text-white/40 border border-dashed border-white/10 rounded-2xl p-6">
                  <Compass className="w-12 h-12 text-orange-400/20 mx-auto mb-4 animate-spin" />
                  <p className="font-serif italic text-base">
                    "Waiting to render your personal traveler plan..."
                  </p>
                  <p className="text-[11px] font-mono mt-1">
                    Fill the left parameters to compile your custom quote
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Proposal Metadata block */}
                  <div className="p-5 bg-white/5 border border-white/10 rounded-2xl space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="font-mono text-[9px] text-orange-400/70 block font-bold">CLIENT REFERENCE</span>
                        <span className="text-xs uppercase font-sans font-black text-white">
                          {guestName || "Lover of the Path"}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="font-mono text-[9px] text-orange-400/70 block font-bold">SELECTION BED</span>
                        <span className="text-xs block text-[#f3a663] font-bold uppercase tracking-wider">
                          {activeRoom.name}
                        </span>
                      </div>
                    </div>

                    <div className="h-px bg-white/10" />

                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-white/40 block text-[9px] font-mono font-bold">DATES SPAN</span>
                        <span className="text-white font-light">{arrivalDate} — {departureDate}</span>
                      </div>
                      <div>
                        <span className="text-white/40 block text-[9px] font-mono font-bold">NIGHTS TOTAL</span>
                        <span className="text-white font-light">{calculatedNights} nights</span>
                      </div>
                    </div>

                    <div className="h-px bg-white/10" />

                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-white/40 block text-[9px] font-mono font-bold">VIBE PROFILE</span>
                        <span className="text-orange-400 font-bold uppercase font-mono text-[10.5px]">{travelerStyle}</span>
                      </div>
                      <div>
                        <span className="text-white/40 block text-[9px] font-mono font-bold">TARGET OUTCOME</span>
                        <span className="text-orange-400 font-bold uppercase font-mono text-[10.5px]">{adventureGoal}</span>
                      </div>
                    </div>
                  </div>

                  {/* Poetic quote welcome based on style */}
                  <p className="font-serif italic text-base md:text-lg text-white/90 leading-relaxed border-l-2 border-orange-500 pl-4 py-1">
                    "Welcome, {guestName || "wanderer"}. You have selected {activeRoom.name} to focus your days on {adventureGoal}. We promise slow sunrises, woodfired organic baking sessions, and absolute safe space circles daily."
                  </p>

                  {/* Math pricing */}
                  <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/10">
                    <span className="font-mono text-xs text-white/60">
                      Rate {activeRoom.pricing} × {calculatedNights} Nights
                    </span>
                    <span className="font-mono font-bold text-[#7effa8] text-lg">
                      ₹{totalPrice.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Direct Send button */}
            <div className="pt-8 border-t border-white/10 space-y-4 mt-8">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className={`w-full py-4 rounded-sm font-mono text-[11px] font-black tracking-widest text-xs uppercase inline-flex items-center justify-center gap-2.5 transition-all cursor-pointer ${
                  showDraft
                    ? "bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl animate-pulse"
                    : "bg-white/5 border border-white/10 text-white/30 pointer-events-none"
                }`}
              >
                <MessageSquare className="w-4 h-4 fill-white text-white border-none" />
                <span>VERIFY & BOOK VIA WHATSAPP</span>
              </a>

              <div className="flex gap-2 items-center justify-center text-[10px] font-mono text-white/40">
                <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
                <span>NO PAYMENT DETAILS ARE COLLECTED IN THE DEMO</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
