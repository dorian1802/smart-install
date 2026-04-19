import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactContent from "./ContactContent";

export const metadata = {
  title: "Contact — SmartInstall",
  description:
    "Contactez SmartInstall pour un devis gratuit en vidéophonie, vidéosurveillance ou rénovation. Réponse rapide, sans engagement.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}