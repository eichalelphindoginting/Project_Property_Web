import React from 'react';
import PropertyCard from './PropertyCard';

// Sample data - nantinya ini bisa datang dari API
const properties = [
  { id: 1, image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070', title: 'Rumah 1', location: 'Jl. Permata Indah', beds: 3, area: '10x10 m', price: 'Rp 20.000.000' },
  { id: 2, image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070', title: 'Rumah 2', location: 'Jl. Permata Indah', beds: 3, area: '10x10 m', price: 'Rp 20.000.000' },
  { id: 3, image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2070', title: 'Rumah 3', location: 'Jl. Permata Indah', beds: 3, area: '10x10 m', price: 'Rp 20.000.000' },
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
          <p className="font-semibold text-brand-accent">POPULAR</p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Our Popular Homes</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map(property => (
            <PropertyCard
              key={property.id}
              image={property.image}
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