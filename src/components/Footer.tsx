import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="relative group">
              <Image
                src="/logo.webp"
                alt="SmartInstall"
                width={180}
                height={56}
                className="h-14 object-contain"
              />
            </Link>
            <p className="text-white/40 mt-4 max-w-md leading-relaxed text-sm">
              Votre partenaire en installation de systèmes de vidéophonie. De la maison individuelle
              à l&#39;immeuble complet, nous assurons sécurité, confort et innovation.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-wider uppercase text-white/60 mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-sm text-white/40 hover:text-brand transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#avantages" className="text-sm text-white/40 hover:text-brand transition-colors">
                  Avantages
                </Link>
              </li>
              <li>
                <Link href="#pourquoi" className="text-sm text-white/40 hover:text-brand transition-colors">
                  Pourquoi nous
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-white/40 hover:text-brand transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-wider uppercase text-white/60 mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/40">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand" />
                <a href="tel:+32460228100" className="hover:text-brand transition-colors">
                  +32 460 22 81 00
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand" />
                <a href="mailto:info@smart-install.be" className="hover:text-brand transition-colors">
                  info@smart-install.be
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand" />
                <span>Belgique</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} SmartInstall — Tous droits réservés
          </p>
          <p className="text-xs text-white/30">Think Smart — Think SmartInstall</p>
        </div>
      </div>
    </footer>
  );
}