import React, { useState } from "react";
import { X, CheckCircle2, Navigation, Clock, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export default function OrderModal({ isOpen, onClose, selectedPlan = "Essentiel" }) {
  if (!isOpen) return null;

  const dakarDistricts = [
    "Dakar Plateau",
    "Les Almadies",
    "Mermoz / Sacré-Cœur",
    "Fann / Point E",
    "Ouakam / Mamelles",
    "Yoff / BCEAO",
    "Maristes / Hann",
    "Grand Dakar / Médina",
    "Parcelles Assainies",
    "Guédiawaye / Pikine",
  ];

  const [pickup, setPickup] = useState("Dakar Plateau");
  const [dropoff, setDropoff] = useState("Les Almadies");
  const [packageType, setPackageType] = useState("Documents confidentiels & Contrats");
  const [urgency, setUrgency] = useState(selectedPlan === "Performance" ? "VIP" : "Standard");
  const [phone, setPhone] = useState("+221 77 ");
  const [clientName, setClientName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState("");

  const calculateEstimate = () => {
    if (urgency === "VIP") {
      return { time: "42 minutes chrono", price: "6 500 FCFA", guarantee: "T-60 / T-90 VIP" };
    }
    return { time: "58 minutes chrono", price: "2 500 FCFA", guarantee: "T-120 Inviolable" };
  };

  const estimate = calculateEstimate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomId = "DK-" + Math.floor(100000 + Math.random() * 900000);
    setTrackingId(randomId);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#CC5833", "#2E4036", "#FAF9F5"],
      });
    } catch (err) {
      // Fallback
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charbon/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg rounded-[2.5rem] bg-white border border-mousse/20 shadow-2xl p-6 sm:p-8 text-charbon my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-creme-card text-charbon/70 hover:text-charbon hover:bg-creme flex items-center justify-center transition-colors"
          aria-label="Fermer la fenêtre"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-argile uppercase tracking-wider font-semibold">
              <Navigation className="w-3.5 h-3.5" />
              <span>TERMINAL DE DÉPÊCHE RAPIDE DAKAR</span>
            </div>

            <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-charbon tracking-tight mb-2">
              Commander une course express
            </h3>
            <p className="font-sans text-xs sm:text-sm text-charbon/70 font-light mb-6">
              Assignation instantanée d'un coursier certifié. Garantie de remise en moins de 120 minutes.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Pickup & Dropoff Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-charbon/60 mb-1">
                    Lieu d'enlèvement
                  </label>
                  <select
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-mousse/20 bg-creme-light text-xs font-medium text-charbon focus:outline-none focus:border-argile"
                  >
                    {dakarDistricts.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-charbon/60 mb-1">
                    Destination Dakar
                  </label>
                  <select
                    value={dropoff}
                    onChange={(e) => setDropoff(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-mousse/20 bg-creme-light text-xs font-medium text-charbon focus:outline-none focus:border-argile"
                  >
                    {dakarDistricts.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Package Type */}
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-charbon/60 mb-1">
                  Nature de la dépêche
                </label>
                <select
                  value={packageType}
                  onChange={(e) => setPackageType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-mousse/20 bg-creme-light text-xs font-medium text-charbon focus:outline-none focus:border-argile"
                >
                  <option value="Documents confidentiels & Contrats">
                    Documents confidentiels & Contrats (Scellé hermétique)
                  </option>
                  <option value="Colis express < 3kg">
                    Colis express (&lt; 3 kg)
                  </option>
                  <option value="Urgence médicale & Santé">
                    Urgence médicale / Prélèvement / Pharmacie
                  </option>
                  <option value="Clés & Objets haute valeur">
                    Clés & Objets précieux haute valeur
                  </option>
                </select>
              </div>

              {/* Urgency Formula */}
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-charbon/60 mb-1">
                  Niveau d'urgence
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setUrgency("Standard")}
                    className={`py-2 px-3 rounded-xl border text-xs font-medium text-left transition-all ${
                      urgency === "Standard"
                        ? "border-mousse bg-mousse/10 text-mousse font-bold"
                        : "border-mousse/20 bg-white text-charbon/70"
                    }`}
                  >
                    <div className="font-sans">Standard T-120</div>
                    <div className="font-mono text-[10px] opacity-70">2 500 FCFA</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setUrgency("VIP")}
                    className={`py-2 px-3 rounded-xl border text-xs font-medium text-left transition-all ${
                      urgency === "VIP"
                        ? "border-argile bg-argile/10 text-argile font-bold"
                        : "border-mousse/20 bg-white text-charbon/70"
                    }`}
                  >
                    <div className="font-sans">Prioritaire VIP T-60</div>
                    <div className="font-mono text-[10px] opacity-70">6 500 FCFA</div>
                  </button>
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-charbon/60 mb-1">
                    Votre nom
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Moussa Ndiaye"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-mousse/20 bg-creme-light text-xs font-medium text-charbon focus:outline-none focus:border-argile"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-charbon/60 mb-1">
                    Téléphone (WhatsApp / SMS)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+221 77 000 00 00"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-mousse/20 bg-creme-light text-xs font-mono font-medium text-charbon focus:outline-none focus:border-argile"
                  />
                </div>
              </div>

              {/* Telemetric Summary Box */}
              <div className="p-3.5 rounded-2xl bg-mousse/5 border border-mousse/15 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-argile" />
                  <div>
                    <div className="font-bold text-charbon">{estimate.time}</div>
                    <div className="font-mono text-[10px] text-charbon/60">
                      Itinéraire optimisé VDN / Corniche
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-mono font-extrabold text-base text-argile">
                    {estimate.price}
                  </div>
                  <div className="font-mono text-[10px] text-emerald-700">
                    Garantie Remboursement
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="btn-magnetic w-full py-4 px-6 rounded-full bg-argile text-white font-bold text-sm tracking-wide shadow-magnetic hover:bg-argile-hover mt-2"
              >
                <span className="btn-slide bg-charbon" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Valider et dépêcher le coursier</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="font-mono text-xs uppercase tracking-widest text-emerald-800 font-bold mb-1">
              COURSIER ASSIGNÉ AVEC SUCCÈS
            </div>
            <h3 className="font-sans font-extrabold text-2xl text-charbon mb-2">
              Dépêche #{trackingId} enclenchée
            </h3>
            <p className="font-sans text-xs text-charbon/70 font-light max-w-sm mx-auto mb-6">
              Le pilote <strong className="font-semibold text-charbon">Cheikh Wade</strong> a reçu votre ordre. Il se rend à{" "}
              <strong className="font-semibold text-charbon">{pickup}</strong> pour livraison vers{" "}
              <strong className="font-semibold text-charbon">{dropoff}</strong>.
            </p>

            {/* Live Progress Bar */}
            <div className="p-4 rounded-2xl bg-creme-card border border-mousse/15 mb-6 text-left font-mono text-xs">
              <div className="flex justify-between text-[11px] mb-1.5 text-charbon/70">
                <span>Délai garanti : &lt; 120 min</span>
                <span className="text-argile font-bold">Télémétrie active</span>
              </div>
              <div className="w-full h-2 rounded-full bg-white overflow-hidden">
                <div className="w-1/3 h-full bg-argile rounded-full animate-pulse" />
              </div>
              <div className="text-[10px] text-charbon/50 mt-2">
                Lien de suivi temps réel envoyé par SMS au {phone}.
              </div>
            </div>

            <button
              onClick={handleReset}
              className="btn-magnetic py-3 px-8 rounded-full bg-mousse text-white font-semibold text-sm hover:bg-mousse-light"
            >
              <span className="btn-slide bg-charbon" />
              <span className="relative z-10">Fermer la console</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
