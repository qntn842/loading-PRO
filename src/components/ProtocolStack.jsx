import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Cpu, Activity, CheckCircle, Navigation } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Animation 1: Motif géométrique en rotation lente (Cercles concentriques + double hélice / radar)
function GeometricRotatingRings() {
  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-full border border-mousse/30 border-dashed animate-[spin_40s_linear_infinite]" />
      
      {/* Middle ring with ticks */}
      <div className="absolute inset-6 rounded-full border-2 border-argile/40 animate-[spin_25s_linear_infinite_reverse]">
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-argile" />
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-argile" />
      </div>

      {/* Inner geometric ring */}
      <div className="absolute inset-14 rounded-full border border-mousse/60 animate-[spin_15s_linear_infinite]" />

      {/* Central compass core */}
      <div className="relative z-10 w-24 h-24 rounded-full bg-mousse text-creme flex flex-col items-center justify-center shadow-lg border border-creme/20">
        <Cpu className="w-8 h-8 text-argile mb-1" />
        <span className="font-mono text-[9px] uppercase tracking-widest text-creme/70">
          INDEX #01
        </span>
      </div>

      {/* Pulsing aura */}
      <div className="absolute inset-10 rounded-full bg-mousse/10 animate-ping opacity-25" />
    </div>
  );
}

// Animation 2: Ligne laser horizontale de balayage sur grille de points télémétriques
function LaserGridScanner() {
  const dakarDistricts = [
    "Plateau", "Almadies", "VDN", "Mermoz",
    "Fann", "Ouakam", "Yoff", "Maristes",
    "Ngor", "Hann", "Bel-Air", "Parcelles"
  ];

  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl bg-charbon p-5 border border-white/10 flex flex-col justify-between overflow-hidden shadow-2xl">
      {/* Grid of nodes */}
      <div className="grid grid-cols-4 gap-3 relative z-10 my-auto">
        {dakarDistricts.map((name, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/5 border border-white/5 text-center"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 mb-1" />
            <span className="font-mono text-[9px] text-creme/70 leading-none truncate w-full">
              {name}
            </span>
          </div>
        ))}
      </div>

      {/* Laser line moving vertically */}
      <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-argile to-transparent shadow-[0_0_15px_#CC5833] animate-laser pointer-events-none" />

      {/* Grid overlay background */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(204,88,51,0.4) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-creme/50 pt-2 border-t border-white/10">
        <span>SCAN RADAR DAKAR 360°</span>
        <span className="text-argile font-bold">12 NOEUDS ACTIFS</span>
      </div>
    </div>
  );
}

// Animation 3: Forme d'onde pulsante ECG (stroke-dashoffset SVG)
function PulsingECGWaveform() {
  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl bg-mousse-dark p-6 border border-creme/15 flex flex-col justify-between overflow-hidden shadow-2xl text-creme">
      <div className="flex items-center justify-between font-mono text-xs text-creme/60">
        <span className="flex items-center gap-1.5 text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          BIOMÉTRIE EN DIRECT
        </span>
        <span>SHA-256 SCELLEMENT</span>
      </div>

      {/* SVG Waveform with stroke dashoffset pulse */}
      <div className="relative my-auto w-full h-24 flex items-center">
        <svg
          viewBox="0 0 300 80"
          className="w-full h-full overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle baseline track */}
          <path
            d="M0 40 L60 40 L75 15 L90 65 L105 30 L115 45 L130 40 L190 40 L205 10 L220 70 L235 25 L245 50 L260 40 L300 40"
            stroke="rgba(242, 240, 233, 0.15)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Animated pulsing stroke */}
          <path
            d="M0 40 L60 40 L75 15 L90 65 L105 30 L115 45 L130 40 L190 40 L205 10 L220 70 L235 25 L245 50 L260 40 L300 40"
            stroke="#CC5833"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="400"
            strokeDashoffset="400"
            className="motion-safe:animate-[dash_2.8s_cubic-bezier(0.4,0,0.2,1)_infinite]"
            style={{
              filter: "drop-shadow(0 0 8px rgba(204, 88, 51, 0.8))",
            }}
          />
        </svg>
      </div>

      <div className="flex items-center justify-between text-[11px] font-mono text-creme/50 pt-2 border-t border-creme/10">
        <span>ÉMARGEMENT CLIENT SÉCURISÉ</span>
        <span className="text-creme font-semibold">OTP VALIDÉ</span>
      </div>

      <style>{`
        @keyframes dash {
          0% {
            stroke-dashoffset: 400;
            opacity: 0.2;
          }
          50% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
          100% {
            stroke-dashoffset: -400;
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
}

export default function ProtocolStack({ onOpenOrderModal }) {
  const containerRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = [card1Ref.current, card2Ref.current, card3Ref.current];

      cards.forEach((card, index) => {
        if (index < cards.length - 1) {
          const nextCard = cards[index + 1];

          ScrollTrigger.create({
            trigger: nextCard,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            onUpdate: (self) => {
              // When nextCard scrolls in, previous card scales down to 0.9, blurs to 20px, and fades to 0.5
              const progress = self.progress;
              const scale = 1 - progress * 0.1; // 1 -> 0.9
              const blur = progress * 16; // 0 -> 16px
              const opacity = 1 - progress * 0.5; // 1 -> 0.5

              gsap.set(card, {
                scale,
                filter: `blur(${blur}px)`,
                opacity,
              });
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="protocol"
      className="py-24 sm:py-32 px-6 sm:px-10 md:px-16 lg:px-24 bg-creme-card/40 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 sm:mb-24 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mousse/10 border border-mousse/20 text-mousse font-mono text-xs uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-argile" />
            <span>02 // COMMENT ÇA MARCHE ?</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-5xl tracking-tight text-charbon mb-4">
            Votre livraison en 3 étapes simples.
          </h2>
          <p className="font-sans text-charbon/75 font-light text-base sm:text-lg">
            Rien de plus simple : vous commandez, un coursier dédié arrive en 15 minutes, et votre pli est remis en mains propres en moins de 2 heures.
          </p>
        </div>

        {/* Stack of Cards (sticky on scroll) */}
        <div className="space-y-12 sm:space-y-16">
          {/* Card 1 */}
          <div
            ref={card1Ref}
            className="sticky top-28 sm:top-32 rounded-[3rem] bg-white border border-mousse/15 p-8 sm:p-12 md:p-16 shadow-elevated transition-transform duration-300 flex flex-col md:flex-row items-center justify-between gap-10 min-h-[460px]"
          >
            <div className="max-w-xl">
              <span className="font-mono text-xs sm:text-sm font-bold text-argile uppercase tracking-widest block mb-2">
                ÉTAPE 01 // ENLÈVEMENT EXPRESS
              </span>
              <h3 className="font-sans font-extrabold text-2xl sm:text-4xl text-charbon tracking-tight mb-4">
                1. Vous commandez en 1 minute
              </h3>
              <p className="font-sans text-charbon/75 font-light text-base sm:text-lg leading-relaxed mb-6">
                Renseignez le lieu de départ et d'arrivée. Un coursier certifié à proximité accepte immédiatement la mission et se rend chez vous pour récupérer votre paquet.
              </p>
              <div className="flex items-center gap-4 text-xs font-mono text-mousse font-semibold">
                <span className="px-3 py-1.5 rounded-full bg-creme border border-mousse/10">
                  Arrivée du coursier : en moins de 15 minutes
                </span>
              </div>
            </div>

            <GeometricRotatingRings />
          </div>

          {/* Card 2 */}
          <div
            ref={card2Ref}
            className="sticky top-32 sm:top-36 rounded-[3rem] bg-charbon border border-charbon-border p-8 sm:p-12 md:p-16 shadow-2xl text-creme transition-transform duration-300 flex flex-col md:flex-row items-center justify-between gap-10 min-h-[460px]"
          >
            <div className="max-w-xl">
              <span className="font-mono text-xs sm:text-sm font-bold text-argile uppercase tracking-widest block mb-2">
                ÉTAPE 02 // TRAJET OPTIMISÉ EN DIRECT
              </span>
              <h3 className="font-sans font-extrabold text-2xl sm:text-4xl text-creme tracking-tight mb-4">
                2. Suivez la course en temps réel
              </h3>
              <p className="font-sans text-creme/75 font-light text-base sm:text-lg leading-relaxed mb-6">
                Vous et votre destinataire recevez un lien SMS sécurisé pour suivre la position du coursier sur la carte. Nos pilotes évitent les ralentissements pour tenir le chrono.
              </p>
              <div className="flex items-center gap-4 text-xs font-mono text-creme/70 font-semibold">
                <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15">
                  Suivi GPS direct sur smartphone • Chauffeur joignable
                </span>
              </div>
            </div>

            <LaserGridScanner />
          </div>

          {/* Card 3 */}
          <div
            ref={card3Ref}
            className="sticky top-36 sm:top-40 rounded-[3rem] bg-mousse border border-mousse-light p-8 sm:p-12 md:p-16 shadow-2xl text-creme transition-transform duration-300 flex flex-col md:flex-row items-center justify-between gap-10 min-h-[460px]"
          >
            <div className="max-w-xl">
              <span className="font-mono text-xs sm:text-sm font-bold text-argile uppercase tracking-widest block mb-2">
                ÉTAPE 03 // REMISE SÉCURISÉE & CONFIRMATION
              </span>
              <h3 className="font-sans font-extrabold text-2xl sm:text-4xl text-creme tracking-tight mb-4">
                3. Remise en mains propres sécurisée
              </h3>
              <p className="font-sans text-creme/80 font-light text-base sm:text-lg leading-relaxed mb-6">
                Le destinataire confirme la réception grâce à un code secret unique à 4 chiffres. Vous recevez un accusé de réception instantané par SMS dès la remise terminée.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenOrderModal}
                  className="btn-magnetic px-6 py-3 rounded-full bg-argile text-white font-semibold text-sm shadow-magnetic hover:bg-argile-hover"
                >
                  <span className="btn-slide bg-charbon" />
                  <span className="relative z-10">Commander un coursier</span>
                </button>
                <span className="text-xs font-mono text-creme/70">
                  Délai garanti : moins de 120 minutes
                </span>
              </div>
            </div>

            <PulsingECGWaveform />
          </div>
        </div>
      </div>
    </section>
  );
}
