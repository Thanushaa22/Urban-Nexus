import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AIEngine from "../components/AIEngine";
import Outcomes from "../components/Outcomes";
import DashboardPreview from "../components/DashboardPreview";
import Footer from "../components/Footer";
import PlatformCapabilities from "../components/PlatformCapabilities";
import ContactSection from "../components/ContactSection";

function Home() {
  return (
    <div className="bg-black text-white overflow-x-hidden">

      <Navbar />

      <Hero />

      <section id="platform">
        <PlatformCapabilities />
      </section>

      <section id="solutions">
        <AIEngine />
      </section>

      <section id="pricing">
        <DashboardPreview />
      </section>

      <section id="industries">
        <Outcomes />
      </section>

      <ContactSection />

      <Footer />

    </div>
  );
}

export default Home;