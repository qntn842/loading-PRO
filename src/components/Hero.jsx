import React, { useRef } from "react";
import { ArrowRight, ShieldCheck, Clock, Zap, MapPin } from "lucide-react";

export default function Hero({ onOpenOrderModal }) {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[100dvh] w-full flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 md:pb-12 px-6 sm:px-10 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Background Cinematic Organic Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?auto=format&fit=crop&w=2400&q=85"
          alt="Atmosphère organique cinématique"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-[pulse_14s_ease-in-out_infinite]"
        />
        {/* Heavy gradient overlay: primary mousse to black */}
        <div className="absolute inset-0 bg-gradient-to-t from-charbon via-mousse/80 to-charbon/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-charbon/90 via-mousse-dark/70 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(204,88,51,0.15),transparent_60%)]" />
      </div>

      {/* Safety clearance for fixed navbar */}
      <div className="w-full h-1 pointer-events-none" aria-hidden="true" />

      {/* Main Content Block (Centered vertically with my-auto for perfect framing on PC) */}
      <div className="relative z-10 max-w-5xl my-auto py-2 sm:py-4">

        {/* Hero Typography: Preset A Title Pattern (Crystal Clear & Impactful) */}
        <div className="hero-item flex flex-col mb-4 sm:mb-6">
          <h1 className="flex flex-col">
            <span className="font-sans font-extrabold uppercase tracking-tight text-creme text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              LivrExpress est la
            </span>
            <span className="font-serif italic font-normal text-argile text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] xl:text-[6.75rem] tracking-tight leading-[0.92] mt-1 sm:mt-2 drop-shadow-lg">
              Livraison en 2h chrono.
            </span>
          </h1>
        </div>

        {/* Subtitle description: Straight to the point */}
        <p className="hero-item font-sans text-sm sm:text-base md:text-lg lg:text-xl text-creme/90 max-w-2xl font-light leading-relaxed mb-6 sm:mb-8">
          Envoyez vos plis, documents et colis urgents partout à Dakar.
          Un coursier dédié récupère votre paquet en 15 minutes et le remet
          en mains propres en moins de <strong className="text-white font-semibold">120 minutes chrono</strong> avec
          suivi GPS en direct.
        </p>

        {/* CTAs and Micro-indicators */}
        <div className="hero-item flex flex-wrap items-center gap-4 sm:gap-6">
          <button
            onClick={onOpenOrderModal}
            id="hero-cta-button"
            className="btn-magnetic px-7 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base font-semibold tracking-wide text-white bg-argile hover:bg-argile-hover shadow-magnetic"
          >
            <span className="btn-slide bg-charbon" />
            <span className="relative z-10 flex items-center gap-2">
              <span>Commander un coursier</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>

          <a
            href="#protocol"
            className="link-lift flex items-center gap-2.5 px-5 sm:px-6 py-3.5 sm:py-4 rounded-full border border-creme/25 bg-creme/5 hover:bg-creme/10 text-creme text-xs sm:text-sm font-medium backdrop-blur-sm transition-colors"
          >
            <span>Comment ça marche ?</span>
            <span className="font-mono text-xs text-creme/50">↓</span>
          </a>
        </div>
      </div>

      {/* Hero Bottom Telemetric Strip: Clear Consumer Guarantees */}
      <div className="relative z-10 hero-item pt-4 sm:pt-6 border-t border-creme/15 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-creme">
        <div className="flex flex-col">
          <span className="font-mono text-lg sm:text-2xl font-semibold text-creme">
            &lt; 120<span className="text-argile text-xs sm:text-sm ml-1">min</span>
          </span>
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-creme/70">
            Délai garanti ou remboursé
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-mono text-lg sm:text-2xl font-semibold text-creme">
            2 500<span className="text-argile text-xs sm:text-sm ml-1">FCFA</span>
          </span>
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-creme/70">
            Tarif fixe de départ
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-mono text-lg sm:text-2xl font-semibold text-creme">
            Suivi GPS<span className="text-emerald-400 text-xs sm:text-sm ml-1">●</span>
          </span>
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-creme/70">
            Lien en direct par SMS
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-mono text-lg sm:text-2xl font-semibold text-creme">
            100%<span className="text-argile text-xs sm:text-sm ml-1">sécurisé</span>
          </span>
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-creme/70">
            Code secret à la remise
          </span>
        </div>
      </div>
    </section>
  );
}
