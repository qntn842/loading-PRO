import React from "react";
import { Compass, ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";

export default function Footer({ onOpenOrderModal }) {
  return (
    <footer className="w-full bg-charbon text-creme rounded-t-[4rem] px-6 sm:px-10 md:px-16 lg:px-24 pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-mousse/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-80 h-80 bg-argile/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand & Slogan */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-mousse flex items-center justify-center text-creme border border-creme/20">
                <Compass className="w-5 h-5 text-argile" />
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-creme">
                LIVR<span className="text-argile">EXPRESS</span>
              </span>
            </div>

            <p className="font-sans text-sm text-creme/70 font-light max-w-sm leading-relaxed">
              L'infrastructure logistique haute précision de la presqu'île de Dakar. Vos plis et colis remis en mains propres en moins de 120 minutes chrono.
            </p>

            <div className="pt-2 flex flex-col gap-2 font-mono text-xs text-creme/60">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-argile" />
                <span>Siège Opérationnel : 14 Boulevard de la République, Dakar Plateau</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-argile" />
                <span>Dispatch Urgent : +221 33 800 12 00 // 24/7</span>
              </div>
            </div>
          </div>

          {/* Navigation Column 1 */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-creme/50 mb-4">
              Infrastructure
            </h4>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <a href="#features" className="text-creme/80 hover:text-argile link-lift">
                  Mélangeur Diagnostique
                </a>
              </li>
              <li>
                <a href="#features" className="text-creme/80 hover:text-argile link-lift">
                  Télémétrie en Direct
                </a>
              </li>
              <li>
                <a href="#protocol" className="text-creme/80 hover:text-argile link-lift">
                  Protocole de Scellement
                </a>
              </li>
              <li>
                <a href="#protocol" className="text-creme/80 hover:text-argile link-lift">
                  Couverture Dakar 360°
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column 2 */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-creme/50 mb-4">
              Services & B2B
            </h4>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <a href="#pricing" className="text-creme/80 hover:text-argile link-lift">
                  Course Éclair (120 min)
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-creme/80 hover:text-argile link-lift">
                  Flotte Dédiée VIP
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-creme/80 hover:text-argile link-lift">
                  API Corporatif & E-commerce
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenOrderModal("Entreprise")}
                  className="text-argile hover:underline flex items-center gap-1 font-medium"
                >
                  <span>Devenir Entreprise Partenaire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation Column 3: Legal & Certification */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-creme/50 mb-4">
              Sécurité & Légal
            </h4>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <span className="text-creme/70">Agrément Postes Sénégal #2026-DK</span>
              </li>
              <li>
                <span className="text-creme/70">Police d'Assurance AXA Sénégal</span>
              </li>
              <li>
                <span className="text-creme/70">Politique de Confidentialité</span>
              </li>
              <li>
                <span className="text-creme/70">Conditions Générales T-120</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Operational Status & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Operational Status (Fixed Requirement) */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 font-mono text-xs backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-emerald-400 font-semibold tracking-wider">
              SYSTÈME OPÉRATIONNEL
            </span>
            <span className="text-creme/40">•</span>
            <span className="text-creme/80">
              99.98% DISPONIBILITÉ RÉSEAU DAKAR // 42 COURSIERS ACTIFS
            </span>
          </div>

          {/* Copyright */}
          <div className="font-mono text-xs text-creme/50 text-center md:text-right">
            © 2026 LivrExpress SARL Dakar. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
}
