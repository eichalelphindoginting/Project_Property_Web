import React from 'react';
import HeroImage from '../assets/bg_intro.jpg'; // Pastikan path gambar benar

const HeroSection = () => {
  return (
    <div 
      className="h-screen bg-cover bg-center flex items-center justify-center text-white pt-20" // pt-20 untuk memberi ruang bagi navbar
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Temukan Hunian Impian Anda Bersama Kami
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Menyediakan properti terbaik dengan lokasi strategis dan harga terjangkau.
        </p>
        <div className="mt-8">
          <a href="#popular" className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-10 rounded-lg text-lg transition-colors">
            Lihat Properti
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;