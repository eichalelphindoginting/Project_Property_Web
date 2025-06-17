import React from 'react';
// Ganti dengan gambar latar berkualitas tinggi dari Unsplash, Pexels, dll.
import heroImage from '../assets/bg-hitam.jpg'; 

function HeroSection() {
  return (
    <section 
      id="hero" 
      className="h-screen w-full relative flex items-center justify-center text-center text-white"
    >
      {/* Background Image */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Overlay Gelap */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Konten Teks */}
      <div className="relative z-10 px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-shadow-lg">
          Find Your Next Chapter
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
          Discover architecturally inspiring properties in the world's most desirable locations.
        </p>
        <button className="mt-8 bg-brand-accent text-brand-dark font-semibold px-8 py-3 rounded-md hover:opacity-90 transition-opacity">
          EXPLORE LISTINGS
        </button>
      </div>
    </section>
  );
}

export default HeroSection;