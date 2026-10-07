import React, { useState, useEffect } from "react";
import { ArrowUpRight, Compass, ShieldCheck } from "lucide-react";

export default function Navbar({ onOpenOrderModal }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none transition-all duration-500">
      <nav
        aria-label="Navigation Principale"
        className={`pointer-events-auto flex items-center justify-between gap-4 md:gap-8 px-4 md:px-7 py-2.5 md:py-3 rounded-full transition-all duration-500 max-w-5xl w-full ${
          isScrolled
            ? "glass-pill shadow-elevated border border-mousse/15 text-charbon backdrop-blur-2xl"
            : "bg-charbon/75 border border-creme/20 text-creme backdrop-blur-xl shadow-2xl"
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group"
          id="nav-logo"
        >
          <div className="w-8 h-8 rounded-full bg-mousse flex items-center justify-center text-creme border border-creme/20 group-hover:bg-argile transition-colors duration-300">
            <Compass className="w-4 h-4 transition-transform duration-500 group-hover:rotate-45" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm md:text-base tracking-tight uppercase leading-none">
              Livr<span className="text-argile">Express</span>
            </span>
            <span className="font-mono text-[9px] tracking-widest opacity-75 uppercase mt-0.5">
              Dakar • Livraison &lt; 2h
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wide uppercase">
          <a
            href="#features"
            className="link-lift hover:text-argile transition-colors"
          >
            Avantages
          </a>
          <a
            href="#protocol"
            className="link-lift hover:text-argile transition-colors"
          >
            Comment ça marche
          </a>
          <a
            href="#pricing"
            className="link-lift hover:text-argile transition-colors"
          >
            Tarifs
          </a>
          <a
            href="#manifesto"
            className="link-lift hover:text-argile transition-colors"
          >
            Notre engagement
          </a>
        </div>

        {/* Live operational badge + CTA */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-mousse/10 border border-mousse/20 text-[10px] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-mousse dark:text-creme">VDN FLUIDE</span>
          </div>

          <button
            onClick={onOpenOrderModal}
            id="nav-cta-btn"
            className="btn-magnetic px-4 md:px-5 py-2 text-xs md:text-sm font-semibold tracking-wide text-white bg-argile hover:bg-argile-hover shadow-magnetic"
          >
            <span className="btn-slide bg-charbon" />
            <span className="relative z-10 flex items-center gap-1.5">
              <span>Commander</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
