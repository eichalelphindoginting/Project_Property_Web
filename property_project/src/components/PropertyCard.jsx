import React from 'react';

// Ikon-ikon
const BedIcon = <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>;
const AreaIcon = <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v4m0 0h-4m4 0l-5-5" /></svg>;
const PriceIcon = <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>;


function PropertyCard({ image, title, location, beds, area, price }) {
  return (
    <div className="bg-brand-light-gray rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 bg-white">
        <h3 className="text-2xl font-bold text-brand-dark">{title}</h3>
        <p className="text-gray-500 text-sm mt-1">{location}</p>
        <div className="mt-4 flex flex-wrap text-sm">
          <span className="flex items-center mr-4 mb-2">{BedIcon} {beds} Bed</span>
          <span className="flex items-center mb-2">{AreaIcon} {area}</span>
        </div>
        <div className="flex items-center mt-2 mb-4">
          {PriceIcon}
          <span className="text-xl font-bold text-brand-dark">{price}</span>
        </div>
        <button className="w-full bg-brand-dark text-white font-bold py-2 rounded-lg hover:bg-black transition-colors">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default PropertyCard;