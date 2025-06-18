import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

// Komponen ini menerima data properti melalui props
const PropertyCard = ({ image, name, location, price, beds, baths, area }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <img src={image} alt={name} className="w-full h-56 object-cover" />
      <div className="p-6">
        <p className="text-teal-600 font-semibold text-lg">Rp {price}</p>
        <h3 className="text-2xl font-bold text-gray-800 mt-1">{name}</h3>
        <div className="flex items-center text-gray-500 mt-2">
          <IoLocationOutline />
          <p className="ml-2">{location}</p>
        </div>
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200 text-gray-600">
          <div className="flex items-center">
            <BiBed className="text-xl" />
            <span className="ml-2">{beds}</span>
          </div>
          <div className="flex items-center">
            <BiBath className="text-xl" />
            <span className="ml-2">{baths}</span>
          </div>
          <div className="flex items-center">
            <BiArea className="text-xl" />
            <span className="ml-2">{area} m²</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;