import React from 'react';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import PopularHomes from './components/PopularHomes';
import Footer from './components/Footer';
import Allright from './components/Allright';

function App() {
  return (
    <div className="font-sans bg-brand-dark">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <PopularHomes />
      <Footer />
      <Allright/>
    </div>
  );
}

export default App;