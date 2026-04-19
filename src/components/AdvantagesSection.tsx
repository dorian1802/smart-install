"use client";

import { useInView } from "@/hooks/useInView";
import { Shield, Palette, Smartphone, Wifi, ScanFace, House } from "lucide-react";

const advantages = [
  {
    icon: Shield,
    title: "Sécurité",
    description: "La sécurité commence dès la porte d'entrée. Solutions audio et vidéo pour chaque besoin.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Unités intérieures conçues pour s'intégrer dans n'importe quel environnement avec élégance.",
  },
  {
    icon: Smartphone,
    title: "Contrôle à distance",
    description: "Répondez à distance depuis votre smartphone, peu importe où vous vous trouvez.",
  },
  {
    icon: Wifi,
    title: "Installation flexible",
    description: "Connexion par câble ou Wi-Fi. Une solution adaptée à chaque situation.",
  },
  {
    icon: ScanFace,
    title: "Reconnaissance faciale",
    description: "Ouvrez portes et portails grâce à la reconnaissance faciale (selon le système).",
  },
  {
    icon: House,
    title: "Domotique",
    description: "Intégration complète dans Niko Home Control. Commande via panneau central et application.",
  },
];

export default function AdvantagesSection() {
  const ref = useInView(0.1);

  return (
    <section className="py-32 bg-background" id="avantages">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <span
            data-animate
            className="text-xs tracking-[0.3em] uppercase text-brand font-medium block mb-4"
          >
            Avantages
          </span>
          <h2 data-animate className="font-display text-5xl md:text-6xl text-foreground mb-4">
            Pourquoi <span className="text-brand">SmartInstall</span>
          </h2>
          <p data-animate className="text-muted-foreground max-w-xl mx-auto">
            Des solutions intelligentes pour une sécurité et un confort optimaux
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, i) => (
            <div
              key={adv.title}
              data-animate
              className={`animate-delay-${Math.min(i + 1, 4)}`}
            >
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-md h-full group border-border/50 hover:border-brand/20">
                <div className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-5">
                    <adv.icon className="w-6 h-6 text-brand" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2">{adv.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}