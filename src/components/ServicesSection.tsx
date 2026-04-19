"use client";

import { useInView } from "@/hooks/useInView";
import { ArrowRight } from "lucide-react";

const services = [
  {
    emoji: "🔒",
    title: "Vidéophonie",
    description:
      "Interphones vidéo, contrôle à distance, reconnaissance faciale. La sécurité commence à la porte d'entrée.",
    href: "/videophonie",
  },
  {
    emoji: "📹",
    title: "Vidéosurveillance",
    description:
      "Caméras HD, monitoring 24/7, accès à distance. Gardez un œil sur votre propriété à tout moment.",
    href: "/videosurveillance",
  },
  {
    emoji: "🔧",
    title: "Rénovation",
    description:
      "Rénovation électrique, mise aux normes, installation complète. Donnez une nouvelle vie à votre habitat.",
    href: "/renovation",
  },
];

export default function ServicesSection() {
  const ref = useInView(0.1);

  return (
    <section className="py-32 bg-secondary/30" id="services">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <span
            data-animate
            className="text-xs tracking-[0.3em] uppercase text-brand font-medium block mb-4"
          >
            Nos Services
          </span>
          <h2 data-animate className="font-display text-5xl md:text-6xl text-foreground mb-4">
            Une solution pour <span className="text-brand">chaque projet</span>
          </h2>
          <p data-animate className="text-muted-foreground max-w-xl mx-auto">
            De la maison individuelle à l&#39;immeuble complet, nous avons l&#39;expertise qu&#39;il vous
            faut
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service) => (
            <div key={service.title} data-animate className="animate-delay-2">
              <a
                href={service.href}
                className="group block p-8 rounded-2xl bg-card border border-border/50 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5 transition-all duration-300"
              >
                <span className="text-4xl mb-4 block">{service.emoji}</span>
                <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-brand transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-brand group-hover:gap-3 transition-all">
                  En savoir plus <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}