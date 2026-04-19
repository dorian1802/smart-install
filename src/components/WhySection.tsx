"use client";

import { useInView } from "@/hooks/useInView";
import { Check } from "lucide-react";

const points = [
  {
    title: "En toute transparence",
    description: "Devis et facturation clairs, sans surprises.",
  },
  {
    title: "Satisfaction clients",
    description: "Approche personnelle, chaque projet est unique.",
  },
  {
    title: "Indienstname & après-vente",
    description: "Suivi complet après l'installation.",
  },
  {
    title: "Qualité premium",
    description: "Uniquement des produits de marques reconnues.",
  },
];

export default function WhySection() {
  const ref = useInView(0.1);

  return (
    <section className="py-32 bg-secondary/30" id="pourquoi">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span
              data-animate="slide-left"
              className="text-xs tracking-[0.3em] uppercase text-brand font-medium block mb-4"
            >
              Pourquoi nous
            </span>
            <h2
              data-animate="slide-left"
              className="font-display text-5xl md:text-6xl text-foreground mb-6"
            >
              Think Smart. Think <span className="text-brand">SmartInstall</span>
            </h2>
            <p data-animate className="text-muted-foreground leading-relaxed mb-8">
              Nos gérants sont actifs sur le terrain. Cela signifie que vous bénéficiez toujours
              de l&#39;expertise de première main et d&#39;un service rapide et professionnel.
            </p>
          </div>

          <div data-animate="slide-right" className="space-y-4">
            {points.map((point, i) => (
              <div
                key={point.title}
                data-animate
                className={`animate-delay-${i + 1} flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50`}
              >
                <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <h3 className="font-display text-foreground mb-1">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}