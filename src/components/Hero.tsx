"use client";

import { useInView } from "@/hooks/useInView";
import { Phone, ArrowDown } from "lucide-react";

export default function Hero() {
  const ref = useInView(0.1);

  return (
    <section className="relative min-h-screen flex items-center bg-charcoal overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-brand/20 rounded-full blur-[80px] blur-mobile-safe" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-brand/10 rounded-full blur-[80px] blur-mobile-safe" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="max-w-3xl">
          <span
            data-animate="fade-up-lg"
            className="inline-block text-xs tracking-[0.3em] uppercase text-brand font-medium mb-6"
          >
            Think Smart — Think SmartInstall
          </span>

          <h1
            data-animate="fade-up-lg"
            className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-6"
          >
            Votre partenaire en <span className="text-brand">installation</span>
          </h1>

          <p
            data-animate="fade-up-lg"
            className="text-lg md:text-xl text-white/60 max-w-xl mb-10 leading-relaxed"
          >
            Qu&#39;il s&#39;agisse d&#39;une petite installation résidentielle ou d&#39;un immeuble
            entier, vous pouvez toujours compter sur l&#39;expertise de SmartInstall.
          </p>

          <div data-animate="fade-up-lg" className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center h-11 bg-brand hover:bg-brand-dark text-charcoal rounded-lg px-8 tracking-[0.15em] uppercase text-sm font-semibold transition-colors"
            >
              Demander un devis
            </a>
            <a
              href="tel:+32460228100"
              className="inline-flex items-center justify-center h-11 border border-brand/30 text-brand hover:bg-brand hover:text-charcoal rounded-lg px-8 tracking-[0.15em] uppercase text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              +32 460 22 81 00
            </a>
          </div>

          <div data-animate className="mt-16 flex gap-12 md:gap-16">
            <div>
              <p className="font-display text-3xl md:text-4xl text-brand font-bold">10+</p>
              <p className="text-sm text-white/40 mt-1">Ans d&#39;expérience</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl text-brand font-bold">500+</p>
              <p className="text-sm text-white/40 mt-1">Projets réalisés</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl text-brand font-bold">100%</p>
              <p className="text-sm text-white/40 mt-1">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ArrowDown className="w-5 h-5 text-brand animate-bounce" />
      </div>
    </section>
  );
}