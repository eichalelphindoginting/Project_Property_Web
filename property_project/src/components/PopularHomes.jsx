import React, { useState, useRef, useEffect } from 'react'; // useRef dan useEffect masih akan digunakan untuk menghitung lebar secara dinamis
import PropertyCard from './PropertyCard';

// Impor gambar-gambar properti Anda (Pastikan path ini benar)
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

import Rumah6_1 from '../assets/properti/1,7M/1.jpg';
import Rumah6_2 from '../assets/properti/1,7M/2.jpg';
import Rumah6_3 from '../assets/properti/1,7M/3.jpg';

import Rumah7_1 from '../assets/properti/6M/1.jpg';
import Rumah7_2 from '../assets/properti/6M/2.jpg';
import Rumah7_3 from '../assets/properti/6M/3.jpg';
import Rumah7_4 from '../assets/properti/6M/4.jpg';

import Rumah8_1 from '../assets/properti/270 Juta/1.jpg';
import Rumah8_2 from '../assets/properti/270 Juta/2.jpg';


const PrevSlideIcon = <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>;
const NextSlideIcon = <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>;

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

  { id: 6, images: [Rumah6_1, Rumah6_2, Rumah6_3], 
    name: "Kost Eksklusif", location: "Yogyakarta", price: "300 Jt", beds: 1, baths: 1, area: 30 },

  { id: 7, images: [Rumah7_1, Rumah7_2, Rumah7_3, Rumah7_4],
    name: "Rumah Keluarga Bahagia", location: "Medan", price: "1.5 M", beds: 4, baths: 3, area: 250 },

  { id: 8, images: [Rumah8_1, Rumah8_2],
    name: "Villa Pantai Indah", location: "Bali", price: "3.5 M", beds: 5, baths: 4, area: 300 },
];

const PopularHomes = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const sliderTrackRef = useRef(null); // Ref untuk div yang akan digeser (track)
  const [slideWidth, setSlideWidth] = useState(0); // State untuk lebar satu "halaman" slide

  // Fungsi untuk menentukan berapa kartu yang terlihat sekaligus berdasarkan ukuran layar
  const getCardsPerView = () => {
    if (window.innerWidth >= 1024) return 3; // lg
    if (window.innerWidth >= 768) return 2; // md
    return 1; // default (sm)
  };

  const cardsPerView = getCardsPerView();
  const totalCards = popularProperties.length;
  // Hitung jumlah total "halaman" slide, dengan memastikan slide terakhir menunjukkan sisa kartu
  const totalSlides = Math.ceil(totalCards / cardsPerView);

  // useEffect untuk menghitung lebar satu "halaman" slide
  // Ini akan dijalankan saat komponen mount dan saat ukuran window berubah
  useEffect(() => {
    const calculateSlideWidth = () => {
      if (sliderTrackRef.current) {
        // Lebar kontainer `overflow-hidden` (yaitu lebar tampilan slider yang terlihat)
        const visibleContainerWidth = sliderTrackRef.current.parentElement.clientWidth; // Ambil lebar parent (overflow-hidden)
        setSlideWidth(visibleContainerWidth);
      }
    };

    calculateSlideWidth(); // Hitung saat pertama kali render
    window.addEventListener('resize', calculateSlideWidth); // Hitung ulang saat ukuran window berubah

    return () => {
      window.removeEventListener('resize', calculateSlideWidth); // Cleanup event listener
    };
  }, []); // [] agar hanya dijalankan sekali saat mount dan saat unmount

  // Fungsi untuk berpindah ke slide sebelumnya
  const goToPreviousSlide = () => {
    setCurrentSlideIndex(prevIndex => Math.max(0, prevIndex - 1));
  };

  // Fungsi untuk berpindah ke slide berikutnya
  const goToNextSlide = () => {
    setCurrentSlideIndex(prevIndex => Math.min(totalSlides - 1, prevIndex + 1));
  };

  // Menghitung nilai translateX untuk menggeser kartu
  // Transformasi dilakukan sejauh lebar satu "halaman" slide (slideWidth)
  const transformValue = `translateX(-${currentSlideIndex * slideWidth}px)`;

  return (
    <section id="popular" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Pilihan Properti Populer</h2>
          <p className="text-gray-500 mt-2">Temukan properti yang paling banyak diminati oleh pelanggan kami.</p>
        </div>

        {/* Slider Kontainer Utama */}
        <div className="relative">
          <div className="overflow-hidden"> {/* overflow-hidden untuk menyembunyikan kartu di luar tampilan */}
            <div
              ref={sliderTrackRef} // <<< Ref di sini, ini adalah div yang akan kita geser
              className="flex space-x-8 transition-transform duration-500 ease-in-out" // space-x-8 untuk jarak antar kartu
              style={{
                transform: transformValue, // Menerapkan pergeseran horizontal
                // Lebar total track harus cukup untuk semua kartu.
                // Setiap kartu memiliki lebar `w-1/N` dari parent (overflow-hidden) + space-x-8
                // Kita akan menghitung total lebar secara implisit oleh flexbox
                // Ini menghilangkan kebutuhan `width: `${totalSlides * 100}%``
              }}
            >
              {popularProperties.map(property => (
                <div
                  key={property.id}
                  // Lebar kartu: Sesuaikan agar 1, 2, atau 3 kartu terlihat sempurna
                  // flex-shrink-0 penting agar kartu tidak mengecil
                  className="flex-shrink-0 w-full md:w-[calc(50%-theme(spacing.8)/2)] lg:w-[calc(33.3333%-theme(spacing.8)*2/3)]"
                >
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
          {currentSlideIndex > 0 && ( // Tombol Prev hanya tampil jika bukan slide pertama
            <button
              onClick={goToPreviousSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 p-2 rounded-full z-10 focus:outline-none hover:bg-opacity-90 transition-opacity duration-200"
            >
              {PrevSlideIcon}
            </button>
          )}

          {currentSlideIndex < totalSlides - 1 && ( // Tombol Next hanya tampil jika bukan slide terakhir
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