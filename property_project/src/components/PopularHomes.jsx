import React from 'react';
import PropertyCard from './PropertyCard';

// Sample data (seperti sebelumnya, bisa dari API)
const properties = [
  { id: 1, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', title: 'The Glass Pavilion', location: 'Montecito, California', price: 'Contact for price' },
  { id: 2, image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914', title: 'Orum Residence', location: 'Bel Air, California', price: '$42,000,000' },
  { id: 3, image: 'https://images.unsplash.com/photo-1605276374104-5de67d606b85', title: 'Serenity House', location: 'Bali, Indonesia', price: '$15,000,000' },
];

function FeaturedProperties() {
  return (
    <section id="properties" className="bg-brand-dark py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-light">Featured Listings</h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">Hand-selected properties that define modern luxury and comfort.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {properties.map(property => (
            <PropertyCard
              key={property.id}
              image={property.image}
              title={property.title}
              location={property.location}
              price={property.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProperties;