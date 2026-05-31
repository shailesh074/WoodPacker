import React, { useState, useEffect } from "react";
import { Compass, Menu, X, Phone, CalendarRange } from "lucide-react";

interface HeaderProps {
  onScrollTo: (elementId: string) => void;
}

export default function Header({ onScrollTo }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Our Vibe", id: "community" },
    { label: "Solo Life", id: "solo-life" },
    { label: "Nomad Oasis", id: "workation" },
    { label: "Rooms & Spaces", id: "stay" },
    { label: "Explore Auroville", id: "explore" },
    { label: "Gatherings", id: "gatherings" },
    { label: "Memories", id: "stories" },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-4 md:px-12 py-4 ${
        isScrolled
          ? "bg-[#0c0c0c]/80 backdrop-blur-xl shadow-2xl py-3 border-b border-white/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => onScrollTo("hero")}
          className="flex items-baseline gap-2 cursor-pointer group"
          id="brand-logo"
        >
          <span className="text-2xl font-black tracking-tighter uppercase italic text-white transition-all group-hover:text-amber-400">
            WoodPacker
          </span>
          <span className="text-[9px] uppercase tracking-[0.25em] text-white/50 block font-mono font-bold">
            Hostel • Auroville
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8" id="desktop-nav">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onScrollTo(item.id)}
                  className="font-display text-[11px] uppercase tracking-widest font-semibold text-white/75 hover:text-amber-400 transition-colors cursor-pointer relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://wa.me/918027470438?text=Hi%20Woodpacker%20Hostel!%20I'd%20love%20to%20inquire%20about%20booking%20a%20stay.%20"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-white/20 hover:border-white/40 rounded-full text-[10px] font-mono tracking-widest uppercase font-semibold text-white/90 hover:bg-white/10 transition-all backdrop-blur-md"
            id="header-contact-btn"
          >
            <Phone className="w-3 h-3 text-[#25D366]" />
            WHATSAPP US
          </a>
          <button
            onClick={() => onScrollTo("booking")}
            className="flex items-center gap-2 px-5 py-2 bg-orange-500 hover:bg-orange-400 text-black rounded-full text-[10px] font-mono tracking-widest uppercase font-black shadow-lg shadow-orange-500/15 hover:shadow-orange-500/30 transition-all cursor-pointer"
            id="header-book-btn"
          >
            <CalendarRange className="w-3.5 h-3.5" />
            BOOK STAY
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => onScrollTo("booking")}
            className="sm:hidden px-3.5 py-1.5 bg-orange-500 text-black rounded-full text-[10px] font-mono tracking-wider font-extrabold"
          >
            BOOK
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 bg-white/5 hover:bg-white/10 text-white rounded-full border border-white/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-[66px] left-0 w-full bg-[#0c0c0c]/98 backdrop-blur-2xl border-b border-white/10 shadow-2xl z-40 transition-all p-6" id="mobile-nav-panel">
          <ul className="flex flex-col gap-4 mb-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    onScrollTo(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className="font-display text-[13px] uppercase tracking-widest font-semibold text-white/80 hover:text-orange-400 transition-colors block w-full text-left py-2 border-b border-white/5"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/918027470438?text=Hi%20Woodpacker%20Hostel!%20I'd%20love%20to%20inquire%20about%20booking%20a%20stay.%20"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 border border-white/20 rounded-xl text-xs font-mono tracking-widest font-bold text-white uppercase"
            >
              <Phone className="w-4 h-4 text-[#25D366]" />
              WHATSAPP US
            </a>
            <button
              onClick={() => {
                onScrollTo("booking");
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 py-3 bg-orange-500 text-black rounded-xl text-xs font-mono tracking-widest font-bold uppercase cursor-pointer"
            >
              <CalendarRange className="w-4 h-4" />
              INQUIRE DIRECTLY
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
