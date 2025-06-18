import React from 'react';
import PropertyCard from './PropertyCard';

import rumah1_img1 from '../assets/properti/CucianPolres/1.jpg'; 
import rumah1_img2 from '../assets/properti/CucianPolres/2.jpg';
import rumah1_img3 from '../assets/properti/CucianPolres/3.jpg';
import rumah1_img4 from '../assets/properti/CucianPolres/4.jpg';
import rumah1_img5 from '../assets/properti/CucianPolres/5.jpg';

import rumah2_img1 from '../assets/properti/SimpangRaya/1.jpg'; 
import rumah2_img2 from '../assets/properti/SimpangRaya/2.jpg';
import rumah2_img3 from '../assets/properti/SimpangRaya/3.jpg';

import rumah3_img1 from '../assets/properti/Sukasari/1.jpg'; 
import rumah3_img2 from '../assets/properti/Sukasari/2.jpg';
import rumah3_img3 from '../assets/properti/Sukasari/3.jpg';
import rumah3_img4 from '../assets/properti/Sukasari/4.jpg';
import rumah3_img5 from '../assets/properti/Sukasari/5.jpg';

// Sample data - nantinya ini bisa datang dari API
const properties = [
  { id: 1, 
    images: [
      rumah1_img1,rumah1_img2, rumah1_img3, rumah1_img4, rumah1_img5
    ], 
    title: 'Rumah 1', location: 'Jl. Permata Indah', beds: 3, area: '10x10 m', price: 'Rp 20.000.000' },

  { id: 2, 
    images: [
      rumah2_img1,rumah2_img2, rumah2_img3
    ], 
    title: 'Rumah 1', location: 'Jl. Permata Indah', beds: 3, area: '10x10 m', price: 'Rp 20.000.000' },

  { id: 3, 
    images: [
      rumah3_img1,rumah3_img2, rumah3_img3, rumah3_img4, rumah3_img5
    ], 
    title: 'Rumah 1', location: 'Jl. Permata Indah', beds: 3, area: '10x10 m', price: 'Rp 20.000.000' },
];

function PopularHomes() {
  return (
    <section id="popular" className="relative bg-blue-500 pt-20"> {/* Sesuaikan pt-20 jika perlu */}
      {/* Wavy Background SVG di bagian atas section ini */}
      <div className="absolute left-0 w-full overflow-hidden leading-none z-10" style={{ top: '-1px' }}> {/* top: '-1px' untuk menghilangkan celah tipis */}
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[100px]" // Hapus rotate-180 agar gelombang menghadap ke bawah
        >
          {/* Path SVG gelombang Anda */}
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
            82.39-16.72,168.19-17.73,250.45-.39C823.78,31,
            906.67,72,985.66,92.83c70.05,18.48,146.53,
            26.09,214.34,3V0H0V27.35A600.21,600.21,
            0,0,0,321.39,56.44Z"
            style={{ fill: '#41ADDD' }}  // Pastikan warna ini cocok dengan section sebelumnya
          />
        </svg>
      </div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xl font-semibold text-brand-accent">Properti</p>
          <h2 className="text-5xl font-bold text-brand-dark">Our Properti</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map(property => (
            <PropertyCard
              key={property.id}
              images={property.images}
              title={property.title}
              location={property.location}
              beds={property.beds}
              area={property.area}
              price={property.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularHomes;