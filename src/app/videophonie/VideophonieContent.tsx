"use client";

import { useInView } from "@/hooks/useInView";
import { Shield, Smartphone, ScanFace, Wifi, ArrowRight, Phone, Check } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Interphones vidéo HD",
    description: "Communication audio et vidéo haute qualité avec vos visiteurs, jour et nuit.",
  },
  {
    icon: Smartphone,
    title: "Contrôle à distance",
    description: "Répondez à votre porte depuis votre smartphone, où que vous soyez.",
  },
  {
    icon: ScanFace,
    title: "Reconnaissance faciale",
    description: "Ouvrez les portes et portails par reconnaissance faciale (selon le modèle).",
  },
  {
    icon: Wifi,
    title: "Connexion flexible",
    description: "Installation par câble ou Wi-Fi, adaptée à chaque type de bâtiment.",
  },
];

const products = [
  {
    title: "Résidentiel",
    description: "Interphones vidéo élégants pour maisons individuelles. Design moderne, installation soignée.",
    items: ["Interphone vidéo couleur", "Moniteur tactile 7\"", "Déverrouillage à distance", "Enregistrement des visites"],
  },
  {
    title: "Immeubles",
    description: "Solutions complètes pour immeubles résidentiels. Gestion multi-appartements.",
    items: ["Platine de rue robuste", "Moniteurs individuels", "Gestion des badges", "Connexion gardiennage"],
  },
  {
    title: "Niko Home Control",
    description: "Intégration complète dans le système domotique Niko. Tout depuis une seule application.",
    items: ["Intégration domotique", "Commande vocale", "Scénarios automatiques", "Application mobile"],
  },
];

export default function VideophonieContent() {
  const heroRef = useInView(0.1);
  const featRef = useInView(0.1);
  const prodRef = useInView(0.1);
  const ctaRef = useInView(0.1);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-charcoal overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand/15 rounded-full blur-[80px] blur-mobile-safe" />
        <div className="container mx-auto px-6 relative z-10 pt-24 pb-16" ref={heroRef}>
          <span
            data-animate="fade-up-lg"
            className="inline-block text-xs tracking-[0.3em] uppercase text-brand font-medium mb-6"
          >
            Vidéophonie
          </span>
          <h1
            data-animate="fade-up-lg"
            className="font-display text-5xl md:text-7xl text-white leading-[0.95] mb-6"
          >
            La sécurité commence à <span className="text-brand">votre porte</span>
          </h1>
          <p
            data-animate="fade-up-lg"
            className="text-lg md:text-xl text-white/60 max-w-xl mb-8 leading-relaxed"
          >
            Interphones vidéo, contrôle à distance et reconnaissance faciale. Voyez qui est à votre porte avant d&#39;ouvrir.
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
        </div>
      </section>

      {/* Features */}
      <section className="py-32 bg-secondary/30">
        <div className="container mx-auto px-6" ref={featRef}>
          <div className="text-center mb-16">
            <span
              data-animate
              className="text-xs tracking-[0.3em] uppercase text-brand font-medium block mb-4"
            >
              Fonctionnalités
            </span>
            <h2 data-animate className="font-display text-5xl md:text-6xl text-foreground mb-4">
              Tout ce qu&#39;il vous <span className="text-brand">faut</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={f.title} data-animate className={`animate-delay-${Math.min(i + 1, 4)}`}>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-md h-full border-border/50 hover:border-brand/20 p-8">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-5">
                    <f.icon className="w-6 h-6 text-brand" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6" ref={prodRef}>
          <div className="text-center mb-16">
            <span
              data-animate
              className="text-xs tracking-[0.3em] uppercase text-brand font-medium block mb-4"
            >
              Nos solutions
            </span>
            <h2 data-animate className="font-display text-5xl md:text-6xl text-foreground mb-4">
              Adapté à <span className="text-brand">chaque projet</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {products.map((p) => (
              <div key={p.title} data-animate>
                <div className="rounded-2xl border border-border/50 bg-card p-8 h-full hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5 transition-all duration-300">
                  <h3 className="font-display text-xl text-foreground mb-3">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{p.description}</p>
                  <ul className="space-y-3">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-brand flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-charcoal relative overflow-hidden" ref={ctaRef}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[80px] blur-mobile-safe" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div>
            <span data-animate="fade-up-lg" className="text-xs tracking-[0.3em] uppercase text-brand font-medium block mb-4">
              Intéressé ?
            </span>
            <h2 data-animate="fade-up-lg" className="font-display text-5xl md:text-6xl text-white mb-6">
              Demandez votre <span className="text-brand">devis gratuit</span>
            </h2>
            <p data-animate="fade-up-lg" className="text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
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
                <Phone className="w-4 h-4 mr-2" />
                +32 460 22 81 00
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}