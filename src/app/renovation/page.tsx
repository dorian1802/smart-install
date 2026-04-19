import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RenovationContent from "./RenovationContent";

export const metadata = {
  title: "Rénovation — SmartInstall",
  description:
    "Rénovation électrique, mise aux normes et installation complète. Donnez une nouvelle vie à votre habitat. SmartInstall Belgique.",
};

export default function RenovationPage() {
  return (
    <>
      <Navbar />
      <main>
        <RenovationContent />
      </main>
      <Footer />
    </>
  );
}