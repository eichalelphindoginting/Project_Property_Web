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
    <section id="popular" className="bg-blue-500 py-20">
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