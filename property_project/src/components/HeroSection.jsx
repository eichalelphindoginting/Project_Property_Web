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
      <div className="relative z-10 w-full max-w-6xl text-center text-white">
        
        <h1 className="md:text-6xl font-extrabold leading-tight tracking-wide text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)] animate-fade-in-up">
          <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 bg-clip-text text-transparent">
            Jual Beli Properti di Sarolangun?
          </span>
          <br />
        </h1>
        <h1 className="md:text-4xl font-extrabold leading-tight tracking-wide text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)] animate-fade-in-up">
          <span className="text-white">
             Sarolangun Properti Solusinya!!!
          </span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 font-medium mx-auto drop-shadow-md animate-fade-in-up delay-100 text-center">
          Sarolangun Properti adalah mitra tepercaya Anda untuk menemukan properti residensial, rumah, tanah/kebun, dan komersial paling strategis di Sarolangun dan sekitarnya.
        </p>


        {/* Statistik / Social Proof */}
        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4 text-gray-200">
          <div className="flex items-center gap-2">
            <IoHomeOutline className="text-teal-400" />
            <span>Pilihan Terlengkap di Sarolangun</span>
          </div>
          <div className="flex items-center gap-2">
            <IoBusinessOutline className="text-teal-400" />
            <span>Proses Aman & Legalitas Terjamin</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;