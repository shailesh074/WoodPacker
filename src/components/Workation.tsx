import React from "react";
import { Laptop, Wifi, Coffee, Users, Target, BookOpen, Compass } from "lucide-react";
import { IMAGES } from "../data";

interface WorkationProps {
  onScrollTo: (elementId: string) => void;
}

export default function Workation({ onScrollTo }: WorkationProps) {
  const nomadFeatures = [
    {
      icon: <Wifi className="w-5 h-5 text-orange-400" />,
      title: "Gigabit Fiber Mesh",
      desc: "Fast, reliable, enterprise mesh network enveloping the terrace, lounge, and cafe nodes."
    },
    {
      icon: <Laptop className="w-5 h-5 text-[#f3a663]" />,
      title: "Boho Standing Desks",
      desc: "Organic solid-teakwood work bars overlooking the garden with ample sockets."
    },
    {
      icon: <Coffee className="w-5 h-5 text-orange-400" />,
      title: "Nomad Coffee Culture",
      desc: "Unlimited complimentary estate-grown South Indian filter brew on active tap."
    },
    {
      icon: <Users className="w-5 h-5 text-[#f3a663]" />,
      title: "Indie Creator Sprints",
      desc: "Connect with builders, founders, and abstract designers in spontaneous peer-masterminds."
    }
  ];

  return (
    <section
      id="workation"
      className="py-24 md:py-32 bg-[#0c0c0c] text-white overflow-hidden px-4 md:px-12 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 md:mb-24">
          <div className="lg:col-span-7">
            <span className="font-mono text-xs tracking-[0.3em] text-[#f3a663] font-bold uppercase block mb-3">
              // DESIGNED FOR NOMADS & CREATIVE MINDS
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-tight uppercase">
              A South Indian Canggu Vibe.
            </h2>
            <p className="font-serif italic text-2xl text-orange-400 mt-2 block">
              Where digital freedom meets organic community.
              <span className="text-white/60 block text-base md:text-lg font-mono font-sans font-light not-italic mt-4">
                No dreary fluorescent cubicles. No boring corporate lounges.
              </span>
            </p>
          </div>
          <div className="lg:col-span-5">
            <p className="text-white/75 text-sm font-light leading-relaxed">
              Whether you are coding a smart contract, sketching your next graphics sequence, writing a memoir, or editing cinematic vlogs—the terrace at Woodpacker offers the exact creative friction and high-speed silence you need to build your best work.
            </p>
          </div>
        </div>

        {/* Bento/Split Grid Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Side: Bento Feature blocks */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl flex-grow flex flex-col justify-between backdrop-blur-md">
              <div>
                <span className="font-mono text-[10px] text-orange-400 tracking-widest uppercase block mb-4 font-bold">
                  REDEFINING THE WORKPLACE
                </span>
                <h3 className="font-display font-medium text-xl text-white tracking-tight mb-4">
                  Wander far. Build local. Connect deeply.
                </h3>
                <p className="text-xs text-white/70 leading-relaxed font-light mb-6">
                  Join structural creators who choose to leave behind grey cities to code, draw, and write amidst birdsong, lush foliage, and direct afternoon sea breezes.
                </p>
              </div>

              {/* Nomad stat list */}
              <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6 font-mono">
                <div>
                  <span className="text-xl md:text-2xl font-bold font-display text-orange-400 block">250+</span>
                  <span className="text-[9px] text-white/40 uppercase tracking-widest font-bold">NOMADS YEARLY</span>
                </div>
                <div>
                  <span className="text-xl md:text-2xl font-bold font-display text-white block">150+</span>
                  <span className="text-[9px] text-white/40 uppercase tracking-widest font-bold font-sans">MBPS SYMMETRIC</span>
                </div>
                <div>
                  <span className="text-xl md:text-2xl font-bold font-display text-white block">08+</span>
                  <span className="text-[9px] text-white/40 uppercase tracking-widest font-bold font-sans">COFFEE REFILLS</span>
                </div>
              </div>
            </div>

            {/* Feature lists */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {nomadFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 hover:border-white/20 transition-all text-white"
                >
                  <div className="mb-3.5 p-2 bg-white/5 rounded-xl border border-white/10 inline-block">
                    {feat.icon}
                  </div>
                  <h4 className="font-display font-bold text-xs tracking-widest text-white uppercase mb-1.5">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-white/60 font-light leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: The Living Interactive Space Canvas */}
          <div className="lg:col-span-7 relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden p-6 md:p-8 flex flex-col justify-between min-h-[450px]">
            {/* Absolute background image with light overlay */}
            <div className="absolute inset-0 z-0 opacity-40">
              <img
                src={IMAGES.terraceWorkation}
                alt="Woodpacker Nomad Space"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/40 to-transparent" />
            </div>

            {/* Float Badge */}
            <div className="relative z-10 self-start bg-orange-500 text-black px-3.5 py-1.5 rounded-sm text-[10px] font-mono tracking-widest font-extrabold uppercase">
              • LIVE FROM THE NOMAD TERRACE
            </div>

            {/* Bottom Panel with details of remote-crew */}
            <div className="relative z-10 bg-[#0c0c0c]/85 backdrop-blur-xl p-6 rounded-2xl border border-white/10 max-w-xl">
              <span className="font-mono text-xs text-orange-400 block uppercase mb-1 font-bold">
                CO-LIVING STORIES
              </span>
              <p className="font-serif italic text-base md:text-lg text-white/90 leading-relaxed mb-4">
                "At major co-working spots in Goa or Bali, you network over cold business cards. At Woodpacker, we network by collaborating on a side project at 1 AM on the terrace while sharing a bag of local Auroville cookies."
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Nomad Portrait"
                  className="w-9 h-9 rounded-full object-cover border border-orange-500/30"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <span className="font-display font-bold text-xs block text-white">
                    Maya Lin
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-white/40">
                    Product Designer & Surf Enthusiast
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
