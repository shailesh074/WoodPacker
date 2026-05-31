import React, { useState } from "react";
import { Flame, Wifi, Leaf, Bike, Compass, Sofa, Briefcase, Coffee, CalendarClock, UserCheck } from "lucide-react";
import { ROOMS, AMENITIES } from "../data";

interface StayExperienceProps {
  onScrollTo: (elementId: string) => void;
}

export default function StayExperience({ onScrollTo }: StayExperienceProps) {
  const [selectedRoom, setSelectedRoom] = useState<string>(ROOMS[0].id);

  // Helper to map string to actual Lucide component
  const getIconComponent = (iconName: string, className: string) => {
    switch (iconName) {
      case "Flame":
        return <Flame className={className} />;
      case "Wifi":
        return <Wifi className={className} />;
      case "Leaf":
        return <Leaf className={className} />;
      case "Bike":
        return <Bike className={className} />;
      case "Compass":
        return <Compass className={className} />;
      case "Sofa":
        return <Sofa className={className} />;
      case "Briefcase":
        return <Briefcase className={className} />;
      case "Coffee":
        return <Coffee className={className} />;
      default:
        return <Compass className={className} />;
    }
  };

  const activeRoomData = ROOMS.find((r) => r.id === selectedRoom) || ROOMS[0];

  return (
    <section
      id="stay"
      className="py-24 md:py-32 bg-[#0c0c0c] text-white overflow-hidden px-4 md:px-12 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Title Section */}
        <div className="text-center md:text-left max-w-3xl mb-16 md:mb-20">
          <span className="font-mono text-xs tracking-[0.3em] text-[#f3a663] font-bold uppercase block mb-3">
            // SANCTUARY & RESTING SLEEP QUARTERS
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-tight uppercase">
            Designed for deep rest, prepared for freedom.
          </h2>
          <p className="font-serif italic text-2xl text-orange-400 mt-2">
            Warm brickwork, acoustic isolation, and crisp teak ventilation
          </p>
          <p className="text-white/70 text-sm md:text-base font-light mt-4 leading-relaxed">
            Our rooms are not designed to lock you away from the world. They are comforting spaces of complete surrender, crafted to guarantee you wake up completely revitalized, ready for tomorrow's red-dirt explorations.
          </p>
        </div>

        {/* Interactive Double-Pane Experience layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-24">
          
          {/* Left Block: Room selection and deep details */}
          <div className="lg:col-span-5 flex flex-col justify-between" id="room-picker-container">
            <div className="space-y-4">
              <span className="font-mono text-[9px] text-[#f3a663] tracking-widest uppercase font-bold block">
                SELECT A SANCTUARY TYPE
              </span>
              
              {/* Room tabs */}
              <div className="flex flex-col gap-3">
                {ROOMS.map((room) => {
                  const isActive = room.id === selectedRoom;
                  return (
                    <button
                      key={room.id}
                      onClick={() => setSelectedRoom(room.id)}
                      className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden flex items-center justify-between cursor-pointer ${
                        isActive
                          ? "bg-white/15 border-orange-500 shadow-2xl pl-6 text-white"
                          : "bg-white/5 border-white/10 hover:bg-[#111] pl-5 text-white/85"
                      }`}
                    >
                      <div>
                        <h4 className="font-display font-bold text-base">
                          {room.name}
                        </h4>
                        <p className="text-xs text-orange-400 font-mono mt-0.5 font-bold">
                          {room.pricing}
                        </p>
                      </div>
                      <span className={`text-[10px] uppercase font-mono font-black tracking-wider px-2.5 py-1 rounded-sm ${isActive ? "bg-orange-500 text-black" : "bg-white/10 text-orange-400 border border-white/5"}`}>
                        {room.capacity}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected room storytelling writeup */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl mt-8">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#f3a663] block mb-2 font-bold">
                EXPERIENCE VIBE NOTE
              </span>
              <p className="font-serif italic text-base inline-block text-white/90 leading-relaxed mb-4">
                "{activeRoomData.tagline}"
              </p>
              <p className="text-xs text-white/70 leading-relaxed font-sans font-light mb-4">
                {activeRoomData.description}
              </p>
              <div className="flex items-center gap-2.5 text-xs text-orange-400 font-mono">
                <UserCheck className="w-4 h-4 text-orange-400" />
                <span className="font-bold">{activeRoomData.vibe}</span>
              </div>
            </div>
          </div>

          {/* Right Block: High fidelity picture window */}
          <div className="lg:col-span-12 xl:col-span-7 relative h-[380px] lg:h-auto min-h-[400px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl" id="room-viewframe">
            <img
              src={activeRoomData.image}
              alt={activeRoomData.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 scale-100"
              referrerPolicy="no-referrer"
            />
            
            {/* Smooth Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent flex flex-col justify-end p-8 md:p-10" />

            <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 text-white flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <span className="font-mono text-[10px] text-orange-400 tracking-widest uppercase block mb-1 font-bold">
                  ROOM PREVIEW IMAGE
                </span>
                <h3 className="font-display font-medium text-2xl text-white">
                  {activeRoomData.name}
                </h3>
              </div>
              <button
                onClick={() => onScrollTo("booking")}
                className="px-6 py-3 bg-orange-500 hover:bg-orange-400 text-black font-mono text-[11px] font-black uppercase tracking-widest rounded-sm shadow-2xl transition-all hover:scale-[1.02]"
              >
                REQUEST BOOKING ({activeRoomData.pricing})
              </button>
            </div>
          </div>
        </div>

        {/* Essential features of the hotel layout (8 pieces) */}
        <div className="border-t border-white/10 pt-20">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs text-orange-400 tracking-widest uppercase block mb-2 font-bold">
              HOSTEL FACILITIES & COMFORTS
            </span>
            <h3 className="font-display font-black text-3xl text-white uppercase tracking-tight">
              Equipped for long ventures, curated for safety
            </h3>
            <p className="text-xs text-white/70 leading-relaxed font-light mt-1">
              Every detail optimized so you can focus strictly on exploration, creations, and building core memories with friends.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="amenity-grid-block">
            {AMENITIES.map((item) => (
              <div
                key={item.id}
                className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-orange-500/35 hover:shadow-2xl hover:scale-[1.01] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-white/15 text-orange-400 border border-white/10 flex items-center justify-center mb-4">
                  {getIconComponent(item.iconName, "w-5 h-5")}
                </div>
                <h4 className="font-display font-bold text-xs tracking-wider text-white uppercase mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs text-white/60 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
