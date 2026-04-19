import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SmartInstall — Vidéophonie, Vidéosurveillance et Rénovation",
  description:
    "Installation de systèmes de vidéophonie, vidéosurveillance et rénovation pour résidentiel et immeubles. Think Smart - Think SmartInstall.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js-loading');document.addEventListener('DOMContentLoaded',function(){document.documentElement.classList.remove('js-loading');document.documentElement.classList.add('js-loaded');});`,
          }}
        />
      </head>
      <body className="font-body bg-background text-foreground">{children}</body>
    </html>
  );
}