import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideophonieContent from "./VideophonieContent";

export const metadata = {
  title: "Vidéophonie — SmartInstall",
  description:
    "Installation de systèmes de vidéophonie : interphones vidéo, contrôle à distance, reconnaissance faciale. SmartInstall Belgique.",
};

export default function VideophoniePage() {
  return (
    <>
      <Navbar />
      <main>
        <VideophonieContent />
      </main>
      <Footer />
    </>
  );
}