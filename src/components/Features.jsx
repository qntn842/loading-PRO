import React, { useState, useEffect } from "react";
import {
  Clock,
  Radio,
  UserCheck,
  CheckCircle2,
  Navigation,
  ShieldAlert,
  Sparkles,
  MousePointer,
  RotateCcw,
} from "lucide-react";

// Carte 1: Mélangeur Diagnostique (Cycling Stack with elastic bounce)
function DiagnosticShuffler() {
  const initialCards = [
    {
      id: "card-1",
      route: "Plateau ➔ Les Almadies",
      delay: "38 min constatées",
      status: "Engagé sous scellé",
      zone: "Zone Aéro-Maritime",
      badge: "T-120 GARANTI",
      progress: "88%",
    },
    {
      id: "card-2",
      route: "Mermoz ➔ Point E & Fann",
      delay: "22 min constatées",
      status: "Traversée VDN express",
      zone: "Corridor Central",
      badge: "OPTIMISÉ IA",
      progress: "96%",
    },
    {
      id: "card-3",
      route: "Maristes ➔ Dakar Port Autonome",
      delay: "49 min constatées",
      status: "Dépêche Douanière VIP",
      zone: "Pôle Logistique Sud",
      badge: "URGENCE ABSOLUE",
      progress: "100%",
    },
  ];

  const [cards, setCards] = useState(initialCards);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const copy = [...prev];
        const last = copy.pop();
        copy.unshift(last);
        return copy;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[270px] flex items-center justify-center pt-2">
      {cards.map((item, index) => {
        // Stack styling: index 0 is front, index 1 is behind, index 2 is furthest
        const translateY = index === 0 ? 0 : index === 1 ? -16 : -30;
        const scale = index === 0 ? 1 : index === 1 ? 0.94 : 0.88;
        const zIndex = 30 - index * 10;
        const opacity = index === 0 ? 1 : index === 1 ? 0.75 : 0.5;

        return (
          <div
            key={item.id}
            style={{
              transform: `translateY(${translateY}px) scale(${scale})`,
              zIndex,
              opacity,
              transition: "all 700ms cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
            className="absolute inset-x-0 top-6 rounded-2xl bg-white/90 p-5 shadow-elevated border border-mousse/15 backdrop-blur-md"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-mousse/10 text-mousse font-semibold">
                {item.badge}
              </span>
              <div className="flex items-center gap-1.5 text-xs font-mono text-charbon/70">
                <Clock className="w-3.5 h-3.5 text-argile" />
                <span className="font-bold text-argile">{item.delay}</span>
              </div>
            </div>

            <div className="font-sans font-bold text-base text-charbon mb-1">
              {item.route}
            </div>

            <div className="flex items-center justify-between text-xs text-charbon/70 font-mono mt-2 pt-2 border-t border-creme-border">
              <span className="flex items-center gap-1 text-mousse">
                <Navigation className="w-3 h-3 text-argile" />
                {item.zone}
              </span>
              <span className="text-emerald-700 font-semibold">{item.status}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Carte 2: Machine à Écrire Télémétrie (Live Typing Feed with blinking accent cursor)
function TelemetryTypewriter() {
  const telemetryLines = [
    "[14:15] Prise en charge du pli à Dakar Plateau",
    "[14:28] Coursier #DK-088 en route via la Corniche",
    "[14:40] Arrivée estimée aux Almadies dans 15 min",
    "[14:55] Pli remis en mains propres au destinataire ✓",
    "[14:56] Code secret validé — Accusé de réception envoyé",
  ];

  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [history, setHistory] = useState([
    "DÉPÊCHE INITIALISÉE • COURSIER DÉDIÉ ASSIGNÉ",
    "SUIVI GPS EN DIRECT ACTIVÉ SUR VOTRE SMARTPHONE",
  ]);

  useEffect(() => {
    const currentFullLine = telemetryLines[lineIndex];

    if (charIndex < currentFullLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentFullLine.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 35);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setHistory((prev) => [...prev.slice(-3), currentFullLine]);
        setCharIndex(0);
        setDisplayedText("");
        setLineIndex((prev) => (prev + 1) % telemetryLines.length);
      }, 1800);
      return () => clearTimeout(pause);
    }
  }, [charIndex, lineIndex]);

  return (
    <div className="relative w-full h-[270px] rounded-2xl bg-charbon p-4 sm:p-5 flex flex-col justify-between border border-charbon-border text-creme overflow-hidden font-mono shadow-inner">
      {/* Feed Header */}
      <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-semibold text-emerald-400 tracking-wider">
            FLUX EN DIRECT
          </span>
        </div>
        <span className="text-[11px] text-creme/50">FRÉQ: 100Hz • GPS-L1</span>
      </div>

      {/* History and Typing Output */}
      <div className="flex-1 flex flex-col justify-end space-y-1.5 py-3 text-[11px] sm:text-xs text-creme/65 leading-relaxed overflow-hidden">
        {history.map((line, i) => (
          <div key={i} className="truncate opacity-50 font-mono">
            <span className="text-argile mr-1.5">›</span>
            {line}
          </div>
        ))}
        <div className="text-creme font-mono font-medium">
          <span className="text-argile mr-1.5 font-bold">›</span>
          <span>{displayedText}</span>
          <span className="inline-block w-2 h-3.5 ml-1 bg-argile animate-pulse align-middle" />
        </div>
      </div>

      {/* Status Bar */}
      <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] text-creme/40">
        <span>LATENCE: 12ms (DAKAR CLOUD NODE)</span>
        <span className="text-argile font-semibold">TÉLÉMÉTRIE 100%</span>
      </div>
    </div>
  );
}

// Carte 3: Planificateur Protocole Curseur (Animated Cursor selecting days and saving certification)
function CursorProtocolPlanner() {
  const days = ["L", "M", "M", "J", "V", "S", "D"];
  const [activeDay, setActiveDay] = useState(3); // Thursday active
  const [cursorPos, setCursorPos] = useState({ x: 20, y: 130 });
  const [isPressing, setIsPressing] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    // Animation loop: cursor glides to a day, clicks it, moves to Save, clicks Save
    let timeoutIds = [];

    const runSequence = () => {
      // 1. Move to day Wednesday (index 2)
      timeoutIds.push(
        setTimeout(() => {
          setCursorPos({ x: 95, y: 55 });
        }, 800)
      );

      // 2. Press down
      timeoutIds.push(
        setTimeout(() => {
          setIsPressing(true);
          setActiveDay(2);
        }, 1500)
      );

      // 3. Release
      timeoutIds.push(
        setTimeout(() => {
          setIsPressing(false);
        }, 1800)
      );

      // 4. Move to Save Button
      timeoutIds.push(
        setTimeout(() => {
          setCursorPos({ x: 210, y: 195 });
        }, 2400)
      );

      // 5. Press Save Button
      timeoutIds.push(
        setTimeout(() => {
          setIsPressing(true);
          setIsSaved(true);
        }, 3200)
      );

      // 6. Release & Reset for next loop
      timeoutIds.push(
        setTimeout(() => {
          setIsPressing(false);
        }, 3600)
      );

      timeoutIds.push(
        setTimeout(() => {
          setIsSaved(false);
          setCursorPos({ x: 20, y: 130 });
          setActiveDay(3);
        }, 4500)
      );
    };

    runSequence();
    const interval = setInterval(runSequence, 5200);

    return () => {
      clearInterval(interval);
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, []);

  return (
    <div className="relative w-full h-[270px] rounded-2xl bg-white/90 p-4 sm:p-5 flex flex-col justify-between border border-mousse/15 shadow-elevated overflow-hidden backdrop-blur-md">
      {/* Header Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-mousse text-creme flex items-center justify-center font-bold text-xs">
            CW
          </div>
          <div>
            <div className="font-sans font-bold text-xs text-charbon leading-tight">
              Cheikh Wade (Pilote #DK-409)
            </div>
            <div className="font-mono text-[10px] text-emerald-700 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>Certifié Conduite Défensive</span>
            </div>
          </div>
        </div>
        <span className="font-mono text-[11px] font-bold text-argile bg-argile/10 px-2 py-0.5 rounded-full">
          ★ 4.98/5
        </span>
      </div>

      {/* Week Grid */}
      <div className="my-2">
        <span className="font-mono text-[10px] text-charbon/50 uppercase tracking-wider block mb-1.5">
          Créneau d'Assignation Dakar Express
        </span>
        <div className="grid grid-cols-7 gap-1.5">
          {days.map((day, idx) => {
            const isActive = activeDay === idx;
            return (
              <div
                key={idx}
                className={`h-11 rounded-xl flex flex-col items-center justify-center transition-all duration-300 font-mono text-xs ${
                  isActive
                    ? "bg-argile text-white font-bold shadow-md scale-105"
                    : "bg-creme-card text-charbon/70 hover:bg-creme"
                }`}
              >
                <span className="text-[10px] opacity-70">{day}</span>
                <span className="text-xs">{idx + 12}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Save Button */}
      <div className="flex items-center justify-between pt-2 border-t border-creme-border">
        <div className="text-[11px] font-mono text-charbon/60">
          Casier vierge & Assurance VIP
        </div>
        <div
          className={`px-4 py-2 rounded-xl text-xs font-semibold font-sans transition-all duration-300 flex items-center gap-1.5 ${
            isSaved
              ? "bg-emerald-600 text-white shadow-md scale-95"
              : "bg-mousse text-white hover:bg-mousse-light"
          }`}
        >
          {isSaved ? (
            <>
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Assigné</span>
            </>
          ) : (
            <span>Sauvegarder</span>
          )}
        </div>
      </div>

      {/* Animated SVG Cursor */}
      <div
        className="pointer-events-none absolute z-40 transition-all duration-500 ease-out"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: isPressing ? "scale(0.85)" : "scale(1)",
        }}
      >
        <svg
          className="w-6 h-6 drop-shadow-md text-charbon fill-argile"
          viewBox="0 0 24 24"
        >
          <path
            d="M3 3l7 18 3-7 7-3L3 3z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 px-6 sm:px-10 md:px-16 lg:px-24 bg-creme relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mousse/10 border border-mousse/15 text-mousse font-mono text-xs tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-argile" />
              <span>01 // NOS 3 ENGAGEMENTS CLÉS</span>
            </div>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-charbon">
              Simple, rapide et <br />
              <span className="font-serif italic font-normal text-argile text-4xl sm:text-5xl md:text-6xl">
                100% garanti.
              </span>
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-charbon/75 max-w-md font-light leading-relaxed">
            Finies les promesses en l'air. Découvrez comment nous garantissons chaque livraison en moins de 120 minutes partout à Dakar.
          </p>
        </div>

        {/* 3 Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Argument 1 */}
          <div className="rounded-[2.5rem] bg-creme-card/70 border border-mousse/15 p-6 sm:p-8 flex flex-col justify-between shadow-subtle hover:shadow-elevated transition-shadow duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-mousse font-semibold uppercase tracking-wider">
                  01 // RAPIDITÉ CHRONO
                </span>
                <Clock className="w-5 h-5 text-argile" />
              </div>
              <h3 className="font-sans font-bold text-xl sm:text-2xl text-charbon mb-2">
                Livraison garantie en moins de 2h
              </h3>
              <p className="font-sans text-sm text-charbon/75 font-light mb-6">
                Un coursier dédié récupère votre colis sous 15 minutes. Si le délai de 120 minutes est dépassé, votre course est intégralement remboursée.
              </p>
            </div>
            <DiagnosticShuffler />
          </div>

          {/* Card 2: Argument 2 */}
          <div className="rounded-[2.5rem] bg-creme-card/70 border border-mousse/15 p-6 sm:p-8 flex flex-col justify-between shadow-subtle hover:shadow-elevated transition-shadow duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-mousse font-semibold uppercase tracking-wider">
                  02 // TRANSPARENCE TOTALE
                </span>
                <Radio className="w-5 h-5 text-argile" />
              </div>
              <h3 className="font-sans font-bold text-xl sm:text-2xl text-charbon mb-2">
                Suivi GPS en direct sur carte
              </h3>
              <p className="font-sans text-sm text-charbon/75 font-light mb-6">
                Recevez un lien par SMS pour suivre la position exacte du coursier dans les rues de Dakar en temps réel jusqu'à la remise en main propre.
              </p>
            </div>
            <TelemetryTypewriter />
          </div>

          {/* Card 3: Argument 3 */}
          <div className="rounded-[2.5rem] bg-creme-card/70 border border-mousse/15 p-6 sm:p-8 flex flex-col justify-between shadow-subtle hover:shadow-elevated transition-shadow duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-mousse font-semibold uppercase tracking-wider">
                  03 // SÉCURITÉ ABSOLUE
                </span>
                <UserCheck className="w-5 h-5 text-argile" />
              </div>
              <h3 className="font-sans font-bold text-xl sm:text-2xl text-charbon mb-2">
                Livreurs vérifiés & code secret
              </h3>
              <p className="font-sans text-sm text-charbon/75 font-light mb-6">
                Chauffeurs professionnels contrôlés avec casier vierge. Votre paquet est scellé et remis uniquement contre le code secret du destinataire.
              </p>
            </div>
            <CursorProtocolPlanner />
          </div>
        </div>
      </div>
    </section>
  );
}
