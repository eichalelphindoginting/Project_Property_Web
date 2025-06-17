import React from 'react';

// Anda bisa mendapatkan gambar rumah format PNG (tanpa background) dari situs seperti Pngwing, Pexels, dll.
import houseImage from '../assets/dyo_-removebg-preview.png'; // Pastikan Anda menaruh gambar di folder src/assets

/// Ikon
const LocationIcon = <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const BuildingIcon = <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>;
const WalletIcon = <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>;

function HeroSection() {
  return (
    <section id="hero" className="bg-brand-dark text-white pt-32 pb-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Kolom Kiri: Gambar */}
        <div>
          <img src={houseImage} alt="Modern House" className="w-full h-auto drop-shadow-2xl" />
        </div>

        {/* Kolom Kanan: Teks & Form */}
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold">Featured Properties<br />Just For You</h1>
          <p className="mt-4 text-gray-300 max-w-lg">
            Explore Our Top-Picked Properties Selected For Their Value, Location, And Lifestyle Benefits.
          </p>
          
          <h3 className="mt-8 font-semibold">Search For Available Properties:</h3>
          <div className="mt-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="relative"><span className="absolute left-3 top-2.5">{LocationIcon}</span><input type="text" placeholder="Location" className="w-full pl-10 pr-3 py-2 bg-white/20 rounded-md border border-white/20 focus:outline-none focus:ring-1 focus:ring-brand-accent" /></div>
              <div className="relative"><span className="absolute left-3 top-2.5">{BuildingIcon}</span><input type="text" placeholder="Property Type" className="w-full pl-10 pr-3 py-2 bg-white/20 rounded-md border border-white/20 focus:outline-none focus:ring-1 focus:ring-brand-accent" /></div>
              <div className="relative"><span className="absolute left-3 top-2.5">{WalletIcon}</span><input type="text" placeholder="Budget" className="w-full pl-10 pr-3 py-2 bg-white/20 rounded-md border border-white/20 focus:outline-none focus:ring-1 focus:ring-brand-accent" /></div>
            </div>
            <button className="w-full bg-brand-accent font-bold py-3 rounded-lg hover:bg-purple-700 transition-colors">SEARCH NOW</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;