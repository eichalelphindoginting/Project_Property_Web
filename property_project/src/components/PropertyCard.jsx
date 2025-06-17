import React from 'react';

function PropertyCard({ image, title, location, price }) {
  return (
    <div className="group">
      {/* Gambar */}
      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      {/* Detail Teks */}
      <div className="mt-4 text-left">
        <h3 className="text-xl font-semibold text-brand-light">{title}</h3>
        <p className="text-gray-400 text-sm mt-1">{location}</p>
        <p className="text-lg font-medium text-brand-light mt-2">{price}</p>
        <a href="#" className="inline-block mt-4 text-brand-accent font-semibold text-sm hover:underline">
          View Details →
        </a>
      </div>
    </div>
  );
}

export default PropertyCard;