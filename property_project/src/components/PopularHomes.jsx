import React from 'react';
import PropertyCard from './PropertyCard';

// Impor gambar-gambar properti Anda
import Rumah1 from '../assets/properti/CucianPolres/1.jpg';
import Rumah2 from '../assets/properti/SimpangRaya/1.jpg';
import Rumah3 from '../assets/properti/Sukasari/1.jpg';

// Data properti (dalam aplikasi nyata, ini akan datang dari API)
const popularProperties = [
  { id: 1, image: Rumah1, name: "Villa Cempaka Putih", location: "Jakarta Pusat", price: "2.5 M", beds: 4, baths: 3, area: 220 },
  { id: 2, image: Rumah2, name: "Cluster Harmoni", location: "Tangerang Selatan", price: "1.8 M", beds: 3, baths: 2, area: 180 },
  { id: 3, image: Rumah3, name: "Greenland Residence", location: "Bekasi", price: "950 Jt", beds: 3, baths: 2, area: 150 },
];

const PopularHomes = () => {
  return (
    <section id="popular" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Pilihan Properti Populer</h2>
          <p className="text-gray-500 mt-2">Temukan properti yang paling banyak diminati oleh pelanggan kami.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularProperties.map(property => (
            <PropertyCard
              key={property.id}
              image={property.image}
              name={property.name}
              location={property.location}
              price={property.price}
              beds={property.beds}
              baths={property.baths}
              area={property.area}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularHomes;