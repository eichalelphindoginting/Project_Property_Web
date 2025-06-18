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
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center p-4 pt-20" // pt-20 untuk memberi ruang bagi navbar
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Konten Utama */}
      <div className="relative z-10 w-full max-w-4xl text-center text-white">
        
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
          Mulai Pencarian Properti Impian Anda
        </h1>
        <p className="mt-2 text-lg md:text-xl text-gray-200 drop-shadow-lg">
          Platform terpercaya untuk menemukan properti idaman Anda.
        </p>

        {/* Kotak Pencarian */}
        <form 
          onSubmit={handleSearch}
          className="mt-8 bg-white/20 backdrop-blur-sm p-6 rounded-xl shadow-2xl w-full max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Input Lokasi */}
            <div className="flex flex-col items-start">
              <label htmlFor="location" className="text-sm font-semibold mb-2">Lokasi</label>
              <div className="relative w-full">
                <IoLocationOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  id="location"
                  type="text" 
                  placeholder="Contoh: Jakarta Selatan"
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            {/* Pilihan Tipe Properti */}
            <div className="flex flex-col items-start">
              <label htmlFor="type" className="text-sm font-semibold mb-2">Tipe Properti</label>
              <div className="relative w-full">
                <IoHomeOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <select 
                  id="type"
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option>Rumah</option>
                  <option>Apartemen</option>
                  <option>Tanah</option>
                  <option>Ruko</option>
                </select>
              </div>
            </div>

            {/* Tombol Cari */}
            <div className="flex flex-col justify-end">
              <button 
                type="submit"
                className="w-full h-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <IoSearchCircle className="text-2xl mr-2" />
                Cari
              </button>
            </div>
          </div>
        </form>

        {/* Statistik / Social Proof */}
        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4 text-gray-200">
          <div className="flex items-center gap-2">
            <IoHomeOutline className="text-teal-400" />
            <span>1,200+ Properti Tersedia</span>
          </div>
          <div className="flex items-center gap-2">
            <IoBusinessOutline className="text-teal-400" />
            <span>200+ Agen Terpercaya</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;