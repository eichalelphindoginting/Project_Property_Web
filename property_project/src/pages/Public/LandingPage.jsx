import React from "react";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import IntroSection from "../../components/IntroSection";
import PopularHomes from "../../components/PopularHomes";
import Footer from "../../components/Footer";
import Allright from "../../components/Allright";
import AboutSection from "../../components/AboutSection";

function LandingPage() {
  return (
    <div className="font-sans bg-brand-dark">
      <Navbar />
      <main>
        <HeroSection />
        <IntroSection />
        <PopularHomes />
        <AboutSection />
      </main>
      <Footer />
      <Allright />
    </div>
  );
}

export default LandingPage;
