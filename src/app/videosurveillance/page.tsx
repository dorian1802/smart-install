import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideosurveillanceContent from "./VideosurveillanceContent";

export const metadata = {
  title: "Vidéosurveillance — SmartInstall",
  description:
    "Installation de caméras HD, monitoring 24/7, accès à distance. Gardez un œil sur votre propriété. SmartInstall Belgique.",
};

export default function VideosurveillancePage() {
  return (
    <>
      <Navbar />
      <main>
        <VideosurveillanceContent />
      </main>
      <Footer />
    </>
  );
}