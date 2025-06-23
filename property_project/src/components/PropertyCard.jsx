// src/components/PropertyCard.jsx

import React, { useState } from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { FaBuilding, FaRulerCombined } from 'react-icons/fa';

// Ikon panah untuk slider gambar internal
const PrevIcon = <svg className="w-6 h-6 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>;
const NextIcon = <svg className="w-6 h-6 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>;

const PropertyCard = ({ property }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = property.property_images || [];

    const goToPrevious = (e) => {
        e.stopPropagation();
        const isFirstImage = currentImageIndex === 0;
        const newIndex = isFirstImage ? images.length - 1 : currentImageIndex - 1;
        setCurrentImageIndex(newIndex);
    };

    const goToNext = (e) => {
        e.stopPropagation();
        const isLastImage = currentImageIndex === images.length - 1;
        const newIndex = isLastImage ? 0 : currentImageIndex + 1;
        setCurrentImageIndex(newIndex);
    };
    
    const activeImageUrl = images.length > 0 
        ? images[currentImageIndex].image_url 
        : 'https://via.placeholder.com/400x250?text=Belum+Ada+Gambar';

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
            <div className="relative group cursor-pointer">
                {/* <<< PERUBAHAN 1: Mengubah tinggi gambar dari h-56 menjadi h-72 >>> */}
                <img src={activeImageUrl} alt={property.nama} className="w-full h-72 object-cover" />
                
                {images.length > 1 && (
                    <>
                        <button onClick={goToPrevious} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none">
                            {PrevIcon}
                        </button>
                        <button onClick={goToNext} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none">
                            {NextIcon}
                        </button>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                            {images.map((_, index) => (
                                <div key={index} className={`w-2 h-2 rounded-full transition-all duration-300 ${currentImageIndex === index ? 'bg-white scale-125' : 'bg-white/50'}`}></div>
                            ))}
                        </div>
                    </>
                )}

                 <div className="absolute top-2 right-2 bg-teal-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                    {property.tipe_properti || 'Properti'}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <p className="text-teal-600 font-semibold text-lg">Rp {new Intl.NumberFormat('id-ID').format(property.harga)}</p>
                <h3 className="text-xl font-bold text-gray-800 mt-1 truncate" title={property.nama}>{property.nama}</h3>
                
                {/* <<< PERUBAHAN 2: Membuat alamat menjadi link jika URL Maps_url ada >>> */}
                {property.Maps_url ? (
                    <a 
                        href={property.Maps_url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center text-gray-500 mt-2 text-sm hover:text-teal-600 hover:underline transition-colors"
                        title="Lihat di Google Maps"
                    >
                        <IoLocationOutline className="flex-shrink-0" />
                        <p className="ml-2 truncate">{property.alamat}</p>
                    </a>
                ) : (
                    <div className="flex items-center text-gray-500 mt-2 text-sm">
                        <IoLocationOutline className="flex-shrink-0" />
                        <p className="ml-2 truncate">{property.alamat}</p>
                    </div>
                )}

                <div className="flex-grow"></div>
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200 text-gray-600">
                    <div className="flex items-center" title="Luas Tanah">
                        <FaRulerCombined className="text-lg" />
                        <span className="ml-2">{property.luas_tanah} m² (LT)</span>
                    </div>
                    <div className="flex items-center" title="Luas Bangunan">
                        <FaBuilding className="text-lg" />
                        <span className="ml-2">{property.luas_bangunan} m² (LB)</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;