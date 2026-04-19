"use client";

import { useInView } from "@/hooks/useInView";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const ref = useInView(0.1);

  return (
    <section className="py-32 bg-charcoal relative overflow-hidden" id="contact" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[80px] blur-mobile-safe" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div>
          <span
            data-animate="fade-up-lg"
            className="text-xs tracking-[0.3em] uppercase text-brand font-medium block mb-4"
          >
            Prêt à commencer ?
          </span>
          <h2
            data-animate="fade-up-lg"
            className="font-display text-5xl md:text-6xl text-white mb-6"
          >
            Demandez votre <span className="text-brand">devis gratuit</span>
          </h2>
          <p
            data-animate="fade-up-lg"
            className="text-white/50 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Sans engagement. Réponse rapide. Expertise garantie.
          </p>

          <div data-animate="fade-up-lg" className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center h-11 bg-brand hover:bg-brand-dark text-charcoal rounded-lg px-10 tracking-[0.15em] uppercase text-sm font-semibold transition-colors"
            >
              Nous contacter <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a
              href="tel:+32460228100"
              className="inline-flex items-center justify-center h-11 border border-brand/30 text-brand hover:bg-brand hover:text-charcoal rounded-lg px-10 tracking-[0.15em] uppercase text-sm font-medium transition-colors"
            >
              +32 460 22 81 00
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}