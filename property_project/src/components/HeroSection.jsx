/* eslint-disable no-unused-vars */
import React from 'react';
import HeroImage from '../assets/rm1.jpeg'; // Ganti dengan gambar rumah yang cerah dan menarik
import { IoSearchCircle, IoHomeOutline, IoBusinessOutline, IoLocationOutline } from 'react-icons/io5';

const HeroSection = () => {
  // Fungsi ini hanya placeholder, perlu dihubungkan dengan logika state nanti
  const handleSearch = (e) => {
    e.preventDefault();
    alert('Fungsi pencarian akan diimplementasikan di sini!');
  };

  return (
    <div 
      id="home"
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center p-4 pt-20" // pt-20 untuk memberi ruang bagi navbar
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Konten Utama */}
      <div className="relative z-10 w-full max-w-4xl text-center text-white">
        
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-wide text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)] animate-fade-in-up">
          <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-500 bg-clip-text text-transparent">
            Temukan Hunian Terbaik
          </span>
          <br />
          <span className="text-white">
            untuk Masa Depan Anda
          </span>
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-200 font-medium max-w-2xl mx-auto drop-shadow-md animate-fade-in-up delay-100 text-center">
          Platform terpercaya untuk membantu Anda menemukan properti impian dengan mudah dan terpercaya.
        </p>


        {/* Statistik / Social Proof */}
        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4 text-gray-200">
          <div className="flex items-center gap-2">
            <IoHomeOutline className="text-teal-400" />
            <span>Banyak Properti Tersedia</span>
          </div>
          <div className="flex items-center gap-2">
            <IoBusinessOutline className="text-teal-400" />
            <span>Terjamin dan Terpercaya</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;