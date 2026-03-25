import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MateriSection from "@/components/MateriSection";
import KalkulatorSection from "@/components/KalkulatorSection";
import QuizSection from "@/components/QuizSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <MateriSection />
        <KalkulatorSection />
        <QuizSection />
      </main>
      <Footer />
    </>
  );
}
