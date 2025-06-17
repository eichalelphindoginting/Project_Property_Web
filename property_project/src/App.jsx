import React from 'react';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import PopularHomes from './components/PopularHomes';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-brand-dark">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <PopularHomes />
      <Footer />
    </div>
  );
}

export default App;