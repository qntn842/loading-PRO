import React, { useRef, useEffect } from "react";
import { Compass, Sparkles, Activity } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Manifesto() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const statementOneRef = useRef(null);
  const statementTwoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split/Line reveal style for the contrasting statements
      gsap.from(statementOneRef.current, {
        scrollTrigger: {
          trigger: statementOneRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(statementTwoRef.current, {
        scrollTrigger: {
          trigger: statementTwoRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 40,
        duration: 1.1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="manifesto"
      className="relative w-full py-28 sm:py-40 px-6 sm:px-10 md:px-16 lg:px-24 bg-charbon text-creme overflow-hidden"
    >
      {/* Background Organic Parallax Botanical Texture */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none mix-blend-luminosity">
        <img
          src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=2400&q=85"
          alt="Texture forêt organique sombre"
          className="w-full h-full object-cover object-center filter saturate-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charbon via-transparent to-charbon" />
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-mousse/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-argile/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Monospace Badge */}
        <div className="flex items-center gap-2 mb-10">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-creme/70 uppercase tracking-widest backdrop-blur-sm">
            <Activity className="w-3.5 h-3.5 text-argile" />
            <span>02 // LE MANIFESTE DE PRÉCISION</span>
          </div>
        </div>

        {/* Contrasting Statements */}
        <div ref={textRef} className="space-y-12 sm:space-y-16">
          {/* Statement 1: Standard industry approach (neutral, smaller) */}
          <div ref={statementOneRef} className="max-w-3xl">
            <p className="font-mono text-xs sm:text-sm text-creme/50 uppercase tracking-wider mb-2">
              L'approche conventionnelle
            </p>
            <p className="font-sans text-xl sm:text-2xl md:text-3xl text-creme/60 font-light leading-relaxed">
              La plupart des services de livraison urbaine se concentrent sur :{" "}
              <span className="text-creme/90 font-normal">
                l'accumulation aveugle de volume, les coursiers précarisés sans
                mandat et une incertitude horaire acceptée comme inévitable.
              </span>
            </p>
          </div>

          {/* Statement 2: Our differentiated approach (massive, dramatic serif italic, accent colored keyword) */}
          <div
            ref={statementTwoRef}
            className="pt-8 border-t border-white/10 max-w-5xl"
          >
            <p className="font-mono text-xs sm:text-sm text-argile uppercase tracking-wider mb-4 font-semibold">
              Le standard LivrExpress
            </p>
            <h3 className="font-serif italic font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.12] text-creme">
              Nous nous concentrons sur :{" "}
              <span className="text-argile underline decoration-argile/40 decoration-1 underline-offset-8">
                la rigueur télémétrique absolue
              </span>
              , l'intégrité scellée de chaque pli et le respect sacré du{" "}
              <span className="text-creme font-semibold">
                pacte des 120 minutes
              </span>
              .
            </h3>
          </div>
        </div>

        {/* Manifesto Sign-off Footer */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 font-mono text-xs text-creme/50">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-argile" />
            <span className="uppercase tracking-widest text-creme/80">
              PRESQU'ÎLE DE DAKAR • PROTOCOLE OPÉRATIONNEL EN VIGUEUR
            </span>
          </div>
          <div>HORLOGERIE LOGISTIQUE INDÉPENDANTE</div>
        </div>
      </div>
    </section>
  );
}
