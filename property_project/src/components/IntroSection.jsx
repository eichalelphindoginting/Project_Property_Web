import React from 'react';
import { IoBusinessOutline, IoGridOutline, IoCarSportOutline, IoLocationOutline } from 'react-icons/io5';
import HomeDesign from '../assets/Home Designs & Floor Plans _ South East QLD _ Hallmark Homes.jpeg'; // Pastikan path gambar benar

const IntroSection = () => {
  const features = [
    { icon: <IoBusinessOutline />, title: "Bangunan Berkualitas", desc: "Arsitek dan material terpilih dan berkualitas." },
    { icon: <IoGridOutline />, title: "Desain Modern", desc: "Exterior dan interior minimalis dan modern." },
    { icon: <IoLocationOutline />, title: "Lokasi Strategis", desc: "Dekat dengan fasilitas umum, stasiun, dan tol." },
    { icon: <IoCarSportOutline />, title: "Akses Mudah", desc: "Jalan lebar yang bisa diakses 2 mobil." },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Kolom Kiri: Fitur */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-2">Pilihan Tepat untuk Masa Depan</h2>
            <p className="text-gray-500 mb-8">Empat alasan utama mengapa properti kami adalah investasi terbaik untuk Anda dan keluarga.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-teal-500 text-4xl mr-4 flex-shrink-0 mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800">{feature.title}</h3>
                    <p className="text-gray-500 mt-1">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Kolom Kanan: Gambar */}
          <div className="flex justify-center">
            <img src={HomeDesign} alt="Desain Rumah" className="max-w-md w-full rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;