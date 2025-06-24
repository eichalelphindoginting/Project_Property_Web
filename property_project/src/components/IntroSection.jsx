import React from 'react';
import { IoBusinessOutline, IoLocationOutline} from 'react-icons/io5';
import { GoLaw } from "react-icons/go";
import { FaPeopleCarry } from "react-icons/fa";
import HomeDesign from '../assets/Home Designs & Floor Plans _ South East QLD _ Hallmark Homes.jpeg'; // Pastikan path gambar benar

const IntroSection = () => {
  const features = [
    { icon: <IoBusinessOutline />, title: "Pilihan Properti Beragam", desc: "Tersedia pilihan rumah, tanah, dan properti komersial." },
    { icon: <GoLaw />, title: "Bantuan Legalitas Profesional", desc: "Memastikan setiap transaksi aman dan terjamin." },
    { icon: <IoLocationOutline />, title: "Lokasi Strategis Terpilih", desc: "Rekomendasi properti di lokasi dengan nilai terbaik." },
    { icon: <FaPeopleCarry/>, title: "Tim Profesional dan Terpercaya", desc: "Kami mengutamakan kepuasan klien dalam jual-beli properti." },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Kolom Kiri: Fitur */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-2">Apa keunggulan Sarolangun Properti?</h2>
            <p className="text-gray-600 mb-8">Bersama Sarolangun Properti, Anda mendapatkan keuntungan lebih dari yang Anda harapkan</p>
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
            <img src={HomeDesign} alt="Desain Rumah" className="w-full rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;