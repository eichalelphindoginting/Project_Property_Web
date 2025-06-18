import React, { useState } from 'react'; // <<< PERBAIKAN: import `useState`

// Import ikon-ikon react-icons
import { IoLocationOutline } from 'react-icons/io5';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

// Ikon panah (sesuai dengan yang sudah Anda definisikan)
const PrevIcon = <svg className="w-6 h-6 text-gray-600 hover:text-brand-dark cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>;
const NextIcon = <svg className="w-6 h-6 text-gray-600 hover:text-brand-dark cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>;

// Komponen ini menerima data properti melalui props (images sebagai array)
const PropertyCard = ({ images, name, location, price, beds, baths, area }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fungsi untuk berpindah ke gambar sebelumnya
  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (images && images.length > 0 ? (prevIndex > 0 ? prevIndex - 1 : images.length - 1) : 0));
  };

  // Fungsi untuk berpindah ke gambar berikutnya
  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (images && images.length > 0 ? (prevIndex < images.length - 1 ? prevIndex + 1 : 0) : 0));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      {/* --- BAGIAN SLIDER GAMBAR --- */}
      {/* Container untuk gambar dan tombol panah, harus relative */}
      <div className="relative">
        {/* Tampilkan gambar yang sedang aktif */}
        {images && images.length > 0 ? ( // Render gambar jika array images ada dan tidak kosong
          <img src={images[currentImageIndex]} alt={name} className="w-full h-[450px] object-cover" /> // <<< PERBAIKAN: Gunakan images[currentImageIndex]
        ) : (
          // Opsi: Tampilkan placeholder jika tidak ada gambar
          <div className="w-full h-56 bg-gray-200 flex items-center justify-center text-gray-500">
            No Image Available
          </div>
        )}

        {/* Tombol panah, hanya tampilkan jika ada lebih dari satu gambar */}
        {images && images.length > 1 && (
          <> {/* Fragment untuk membungkus dua tombol tanpa menambah node DOM */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 transition-opacity duration-200 hover:opacity-100 opacity-80"
            >
              {PrevIcon}
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 transition-opacity duration-200 hover:opacity-100 opacity-80"
            >
              {NextIcon}
            </button>
          </>
        )}
      </div>
      {/* --- AKHIR BAGIAN SLIDER GAMBAR --- */}

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