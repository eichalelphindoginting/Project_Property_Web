import React, { useState } from 'react';
import PropertyCard from './PropertyCard';

// Impor gambar-gambar properti Anda
import Rumah1_1 from '../assets/properti/CucianPolres/1.jpg';
import Rumah1_2 from '../assets/properti/CucianPolres/2.jpg';
import Rumah1_3 from '../assets/properti/CucianPolres/3.jpg';
import Rumah1_4 from '../assets/properti/CucianPolres/4.jpg';
import Rumah1_5 from '../assets/properti/CucianPolres/5.jpg';

import Rumah2_1 from '../assets/properti/SimpangRaya/1.jpg';
import Rumah2_2 from '../assets/properti/SimpangRaya/2.jpg';
import Rumah2_3 from '../assets/properti/SimpangRaya/3.jpg';

import Rumah3_1 from '../assets/properti/Sukasari/1.jpg';
import Rumah3_2 from '../assets/properti/Sukasari/2.jpg';
import Rumah3_3 from '../assets/properti/Sukasari/3.jpg';
import Rumah3_4 from '../assets/properti/Sukasari/4.jpg';
import Rumah3_5 from '../assets/properti/Sukasari/5.jpg';

import Rumah4_1 from '../assets/properti/Bangunan - Desa Pasar Singkut (Tasik)/1.jpg';
import Rumah4_2 from '../assets/properti/Bangunan - Desa Pasar Singkut (Tasik)/2.jpg';
import Rumah4_3 from '../assets/properti/Bangunan - Desa Pasar Singkut (Tasik)/3.jpg';

import Rumah5_1 from '../assets/properti/Batu Kucing/1.jpg';
import Rumah5_2 from '../assets/properti/Batu Kucing/2.jpg';
import Rumah5_3 from '../assets/properti/Batu Kucing/3.jpg';


const PrevSlideIcon = <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>;
const NextSlideIcon = <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>;

// Data properti (dalam aplikasi nyata, ini akan datang dari API)
const popularProperties = [
  { id: 1, images: [Rumah1_1,Rumah1_2, Rumah1_3, Rumah1_4, Rumah1_5], 
    name: "Villa Cempaka Putih", location: "Jakarta Pusat", price: "2.5 M", beds: 4, baths: 3, area: 220 },

  { id: 2, images: [Rumah2_1, Rumah2_2, Rumah2_3],
    name: "Cluster Harmoni", location: "Tangerang Selatan", price: "1.8 M", beds: 3, baths: 2, area: 180 },

  { id: 3, images: [Rumah3_1, Rumah3_2, Rumah3_3, Rumah3_4, Rumah3_5],
    name: "Greenland Residence", location: "Bekasi", price: "950 Jt", beds: 3, baths: 2, area: 150 },

  { id: 4, images: [Rumah4_1, Rumah4_2, Rumah4_3],
    name: "Rumah Minimalis Modern", location: "Bandung", price: "1.2 M", beds: 3, baths: 2, area: 200 },

  { id: 5, images: [Rumah5_1, Rumah5_2, Rumah5_3],
    name: "Apartemen Skyline", location: "Surabaya", price: "800 Jt", beds: 2, baths: 1, area: 80 },
];

const PopularHomes = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const cardsPerView = 3; // Tentukan berapa kartu yang terlihat sekaligus di layar besar
  const totalSlides = Math.ceil(popularProperties.length / cardsPerView); // Total "halaman" slider

  const goToPreviousSlide = () => {
    setCurrentSlideIndex(prevIndex => Math.max(0, prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlideIndex(prevIndex => Math.min(totalSlides - 1, prevIndex + 1));
  };

  // Menghitung nilai translateX untuk menggeser kartu
  // Setiap "slide" bergeser sejauh 100% dari lebar cardsPerView
  // Misalnya, jika cardsPerView = 3, maka setiap slide akan bergeser 33.33% * currentSlideIndex
  const transformValue = `translateX(-${currentSlideIndex * (100 / cardsPerView)}%)`;

  return (
    <section id="popular" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 relative"> {/* Tambah relative untuk tombol panah */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Pilihan Properti Populer</h2>
          <p className="text-gray-500 mt-2">Temukan properti yang paling banyak diminati oleh pelanggan kami.</p>
        </div>

        {/* Slider Kontainer Utama */}
        <div className="relative">
          <div className="overflow-hidden"> {/* overflow-hidden untuk menyembunyikan kartu di luar tampilan */}
            <div
              className="flex transition-transform duration-500 ease-in-out -mx-4" // -mx-4 untuk mengimbangi px-4 pada kartu
              style={{ transform: transformValue }} // Menggeser kontainer kartu
            >
              {popularProperties.map(property => (
                <div key={property.id} className="min-w-full md:min-w-[50%] lg:min-w-[33.33%] px-4"> {/* Atur lebar kartu di dalam slider */}
                  <PropertyCard
                    images={property.images}
                    name={property.name}
                    location={property.location}
                    price={property.price}
                    beds={property.beds}
                    baths={property.baths}
                    area={property.area}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Tombol Navigasi Slider Utama */}
          {/* Tombol Previous */}
          {currentSlideIndex > 0 && (
            <button
              onClick={goToPreviousSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 p-2 rounded-full z-10 focus:outline-none hover:bg-opacity-90 transition-opacity duration-200"
            >
              {PrevSlideIcon}
            </button>
          )}

          {/* Tombol Next */}
          {currentSlideIndex < totalSlides - 1 && (
            <button
              onClick={goToNextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 p-2 rounded-full z-10 focus:outline-none hover:bg-opacity-90 transition-opacity duration-200"
            >
              {NextSlideIcon}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default PopularHomes;