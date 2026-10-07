import React from "react";
import { Check, Zap, Sparkles, Shield, ArrowRight } from "lucide-react";

export default function Pricing({ onOpenOrderModal }) {
  return (
    <section id="pricing" className="py-24 sm:py-32 px-6 sm:px-10 md:px-16 lg:px-24 bg-creme relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mousse/10 border border-mousse/20 text-mousse font-mono text-xs uppercase tracking-widest mb-3">
            <Zap className="w-3.5 h-3.5 text-argile" />
            <span>04 // TARIFICATION TRANSPARENTE</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-5xl tracking-tight text-charbon mb-4">
            Un barème clair, sans surprise horaire.
          </h2>
          <p className="font-sans text-charbon/70 font-light text-base sm:text-lg">
            Tarifs forfaitaires garantis partout à Dakar. Si le délai de 120 minutes est dépassé, votre course est automatiquement remboursée.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: Essentiel */}
          <div className="rounded-[2.5rem] bg-white border border-mousse/15 p-8 sm:p-10 flex flex-col justify-between shadow-subtle hover:shadow-elevated transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-mousse/70 uppercase tracking-widest font-semibold">
                  Course Éclair
                </span>
                <span className="px-2.5 py-1 rounded-full bg-creme font-mono text-[10px] text-charbon/60">
                  STANDARD
                </span>
              </div>
              <h3 className="font-sans font-bold text-2xl text-charbon mb-2">
                Essentiel
              </h3>
              <p className="font-sans text-xs text-charbon/70 font-light mb-6">
                Idéal pour les plis urgents, documents juridiques et petits colis de quotidien.
              </p>

              <div className="mb-8 pb-6 border-b border-creme-border flex items-baseline gap-2">
                <span className="font-mono font-extrabold text-4xl text-charbon">
                  2 500
                </span>
                <span className="font-mono text-xs text-charbon/60">
                  FCFA / course
                </span>
              </div>

              <ul className="space-y-3.5 text-sm font-sans text-charbon/80 mb-8">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-mousse shrink-0" />
                  <span>Livraison garantie sous 120 minutes</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-mousse shrink-0" />
                  <span>Pli ou colis jusqu'à 3 kg</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-mousse shrink-0" />
                  <span>Suivi télémétrique GPS par lien SMS</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-mousse shrink-0" />
                  <span>Assurance forfaitaire 50 000 FCFA</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onOpenOrderModal("Essentiel")}
              className="btn-magnetic w-full py-3.5 px-6 rounded-full border border-mousse/25 text-mousse hover:text-white bg-transparent hover:bg-mousse font-semibold text-sm transition-colors"
            >
              <span className="btn-slide bg-mousse" />
              <span className="relative z-10">Commander maintenant</span>
            </button>
          </div>

          {/* Card 2: Performance (STANDS OUT: Primary Mousse background, accent button, scale boost) */}
          <div className="rounded-[2.5rem] bg-mousse text-creme border-2 border-argile/40 p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative lg:-translate-y-3 lg:scale-105 z-10">
            {/* Recommended Tag */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-argile text-white font-mono text-[11px] font-bold tracking-widest uppercase shadow-magnetic">
              RECOMMANDÉ VIP
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-1">
                <span className="font-mono text-xs text-argile uppercase tracking-widest font-bold">
                  Haute Urgence & Valeur
                </span>
                <Sparkles className="w-4 h-4 text-argile" />
              </div>
              <h3 className="font-sans font-extrabold text-3xl text-creme mb-2">
                Performance
              </h3>
              <p className="font-sans text-xs text-creme/75 font-light mb-6">
                Pour matériel sensible, pièces bancaires, contrats scellés et impératifs absolus.
              </p>

              <div className="mb-8 pb-6 border-b border-creme/15 flex items-baseline gap-2">
                <span className="font-mono font-extrabold text-4xl text-creme">
                  6 500
                </span>
                <span className="font-mono text-xs text-creme/65">
                  FCFA / course prioritaire
                </span>
              </div>

              <ul className="space-y-3.5 text-sm font-sans text-creme/90 mb-8">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-argile shrink-0" />
                  <span className="font-medium">Priorité absolue T-60 à T-90 min</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-argile shrink-0" />
                  <span>Coursier élite dédié en scooter électrique</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-argile shrink-0" />
                  <span>Scellé cryptographique inviolable & code OTP</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-argile shrink-0" />
                  <span>Assurance valeur déclarée jusqu'à 500 000 FCFA</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-argile shrink-0" />
                  <span>Ligne WhatsApp prioritaire avec le dispatch</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onOpenOrderModal("Performance")}
              className="btn-magnetic w-full py-4 px-6 rounded-full bg-argile text-white hover:bg-argile-hover font-bold text-sm shadow-magnetic"
            >
              <span className="btn-slide bg-charbon" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>Commander maintenant</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>

          {/* Card 3: Entreprise */}
          <div className="rounded-[2.5rem] bg-white border border-mousse/15 p-8 sm:p-10 flex flex-col justify-between shadow-subtle hover:shadow-elevated transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-mousse/70 uppercase tracking-widest font-semibold">
                  Corporatif & B2B
                </span>
                <Shield className="w-4 h-4 text-mousse" />
              </div>
              <h3 className="font-sans font-bold text-2xl text-charbon mb-2">
                Entreprise
              </h3>
              <p className="font-sans text-xs text-charbon/70 font-light mb-6">
                Pour études notariales, cliniques médicales, banques et commerces premium.
              </p>

              <div className="mb-8 pb-6 border-b border-creme-border flex items-baseline gap-2">
                <span className="font-mono font-extrabold text-3xl text-charbon">
                  Sur Mesure
                </span>
                <span className="font-mono text-xs text-charbon/60">
                  / volume mensuel
                </span>
              </div>

              <ul className="space-y-3.5 text-sm font-sans text-charbon/80 mb-8">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-mousse shrink-0" />
                  <span>Intégration API directe & Webhooks</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-mousse shrink-0" />
                  <span>Flotte dédiée aux couleurs de votre marque</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-mousse shrink-0" />
                  <span>Facturation consolidée 30 jours fin de mois</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-mousse shrink-0" />
                  <span>Gestionnaire de compte logistique dédié</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onOpenOrderModal("Entreprise")}
              className="btn-magnetic w-full py-3.5 px-6 rounded-full border border-mousse/25 text-mousse hover:text-white bg-transparent hover:bg-mousse font-semibold text-sm transition-colors"
            >
              <span className="btn-slide bg-mousse" />
              <span className="relative z-10">Ouvrir un compte pro</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
