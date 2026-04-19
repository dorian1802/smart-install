"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/videophonie", label: "Vidéophonie" },
  { href: "/videosurveillance", label: "Vidéosurveillance" },
  { href: "/renovation", label: "Rénovation" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-sm py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="relative group">
          <Image
            src="/logo.webp"
            alt="SmartInstall"
            width={180}
            height={48}
            className="h-12 object-contain"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                i === 0 ? "text-brand" : "text-muted-foreground hover:text-brand"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+32460228100"
            className="inline-flex items-center justify-center gap-2 border bg-background h-10 px-4 py-2 border-brand/30 text-brand hover:bg-brand hover:text-charcoal rounded-lg text-sm font-medium transition-colors"
          >
            <Phone className="w-4 h-4 mr-2" />
            +32 460 22 81 00
          </a>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+32460228100"
              className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-charcoal rounded-lg px-6 py-3 text-sm font-semibold"
            >
              <Phone className="w-4 h-4" />
              +32 460 22 81 00
            </a>
          </div>
        </div>
      )}
    </header>
  );
}