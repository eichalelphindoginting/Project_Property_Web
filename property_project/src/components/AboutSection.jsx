// src/components/AboutSection.jsx

import React from 'react';
import { FaHandshake, FaStar, FaTrophy } from 'react-icons/fa';

import aboutImageUrl from '../assets/about.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Kolom Kiri: Gambar */}
          <div className="flex justify-center">
            <img 
              src={aboutImageUrl} 
              alt="Tim Properti Kami" 
              className="rounded-xl shadow-2xl w-full object-cover h-auto"
            />
          </div>

          {/* Kolom Kanan: Teks Deskripsi */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4 ">
              Mitra Anda Menuju Kepemilikan Properti yang Tepat
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-justify">
              Selamat datang di Sarolangun Properti. Kami lahir dari pemahaman mendalam akan kebutuhan masyarakat Sarolangun dalam Jual-Beli properti. 
              Misi kami sederhana yaitu membantu Anda, baik sebagai penjual maupun pembeli, untuk menavigasi proses jual-beli properti dengan mudah, transparan, dan aman. 
              Bagi kami, setiap klien adalah prioritas. 
              Kami tidak hanya menjual properti, kami membangun kepercayaan dan mewujudkan impian.
            </p>
            
            {/* Nilai-nilai Inti */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <FaHandshake className="text-teal-500 text-2xl mr-4" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Integritas & Kepercayaan</h3>
                  <p className="text-gray-500">Fondasi utama dari setiap transaksi yang kami lakukan.</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaStar className="text-teal-500 text-2xl mr-4" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Layanan Prima</h3>
                  <p className="text-gray-500">Kami selalu berusaha melebihi ekspektasi Anda.</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaTrophy className="text-teal-500 text-2xl mr-4" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Hasil Terbaik</h3>
                  <p className="text-gray-500">Mencapai kesepakatan terbaik untuk Anda adalah prioritas kami.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;