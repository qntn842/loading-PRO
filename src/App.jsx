import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Manifesto from "./components/Manifesto";
import ProtocolStack from "./components/ProtocolStack";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import OrderModal from "./components/OrderModal";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Essentiel");
  const mainRef = useRef(null);

  const handleOpenOrderModal = (plan = "Essentiel") => {
    setSelectedPlan(typeof plan === "string" ? plan : "Essentiel");
    setIsOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
  };

  useEffect(() => {
    // GSAP context lifecycle as mandated in Fixed Design System (gemini.md)
    const ctx = gsap.context(() => {
      // Hero fade-up staggered animation
      gsap.from(".hero-item", {
        opacity: 0,
        y: 40,
        duration: 1.0,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.2,
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-creme text-charbon selection:bg-argile selection:text-white">
      {/* Floating Pill Navbar */}
      <Navbar onOpenOrderModal={() => handleOpenOrderModal("Essentiel")} />

      {/* Hero Opening Shot */}
      <main>
        <Hero onOpenOrderModal={() => handleOpenOrderModal("Essentiel")} />

        {/* Features: Interactive Functional Artifacts */}
        <Features />

        {/* Manifesto: The Differentiated Standard */}
        <Manifesto />

        {/* Protocol: Sticky Stacked Archive with unique SVG animations */}
        <ProtocolStack onOpenOrderModal={() => handleOpenOrderModal("Performance")} />

        {/* Pricing & Memberships */}
        <Pricing onOpenOrderModal={handleOpenOrderModal} />
      </main>

      {/* Cinematic Deep Dark Footer */}
      <Footer onOpenOrderModal={handleOpenOrderModal} />

      {/* Interactive Order & Dispatch Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={handleCloseOrderModal}
        selectedPlan={selectedPlan}
      />
    </div>
  );
}
