"use client";

import { useInView } from "@/hooks/useInView";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Téléphone",
    value: "+32 460 22 81 00",
    href: "tel:+32460228100",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@smart-install.be",
    href: "mailto:info@smart-install.be",
  },
  {
    icon: MapPin,
    title: "Adresse",
    value: "Belgique",
    href: null,
  },
  {
    icon: Clock,
    title: "Horaires",
    value: "Lun–Ven : 8h–18h",
    href: null,
  },
];

export default function ContactContent() {
  const ref = useInView(0.1);

  return (
    <>
      <section className="relative min-h-[50vh] flex items-center bg-charcoal overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand/15 rounded-full blur-[80px] blur-mobile-safe" />
        <div className="container mx-auto px-6 relative z-10 pt-24 pb-16" ref={ref}>
          <span
            data-animate="fade-up-lg"
            className="inline-block text-xs tracking-[0.3em] uppercase text-brand font-medium mb-6"
          >
            Contact
          </span>
          <h1
            data-animate="fade-up-lg"
            className="font-display text-5xl md:text-7xl text-white leading-[0.95] mb-6"
          >
            Parlons de votre <span className="text-brand">projet</span>
          </h1>
          <p
            data-animate="fade-up-lg"
            className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed"
          >
            Un devis gratuit, une réponse rapide. Décrivez-nous votre projet et nous reviendons vers vous.
          </p>
        </div>
      </section>

      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact form */}
            <div>
              <h2 data-animate className="font-display text-3xl text-foreground mb-8">
                Envoyez-nous un <span className="text-brand">message</span>
              </h2>

              <form
                action="https://formsubmit.co/info@smart-install.be"
                method="POST"
                className="space-y-6"
              >
                <input type="hidden" name="_subject" value="Nouveau message depuis SmartInstall.be" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
                      placeholder="jean@exemple.be"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
                    placeholder="+32 ..."
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service souhaité
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
                  >
                    <option value="">Choisir un service</option>
                    <option value="videophonie">Vidéophonie</option>
                    <option value="videosurveillance">Vidéosurveillance</option>
                    <option value="renovation">Rénovation</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors resize-none"
                    placeholder="Décrivez votre projet..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-11 bg-brand hover:bg-brand-dark text-charcoal rounded-lg px-10 tracking-[0.15em] uppercase text-sm font-semibold transition-colors"
                >
                  Envoyer
                </button>
              </form>
            </div>

            {/* Contact info */}
            <div>
              <h2 data-animate className="font-display text-3xl text-foreground mb-8">
                Nos <span className="text-brand">coordonnées</span>
              </h2>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    data-animate
                    className="flex items-start gap-4 p-5 rounded-xl bg-secondary border border-border"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <h3 className="font-display text-foreground mb-1">{info.title}</h3>
                      {info.href ? (
                        <a href={info.href} className="text-muted-foreground hover:text-brand transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div data-animate className="mt-8 p-6 rounded-xl bg-charcoal text-white">
                <h3 className="font-display text-lg mb-2">Intervention rapide</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Besoin d&#39;une intervention urgente ? Appelez-nous directement au{" "}
                  <a href="tel:+32460228100" className="text-brand hover:text-brand-dark transition-colors">
                    +32 460 22 81 00
                  </a>
                  . Nous intervenons rapidement dans toute la Belgique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}