// src/components/AboutSection.jsx

import React from 'react';
import { FaHandshake, FaStar, FaTrophy } from 'react-icons/fa';

// Ganti dengan URL gambar tim, kantor, atau gambar ilustrasi yang relevan
const aboutImageUrl = 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop';

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
              className="rounded-xl shadow-2xl w-full max-w-md object-cover h-[500px]"
            />
          </div>

          {/* Kolom Kanan: Teks Deskripsi */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Membantu Anda Menemukan Rumah, Bukan Sekadar Properti.
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Kami lebih dari sekadar agen properti. Kami adalah tim profesional yang berdedikasi untuk memahami kebutuhan Anda dan memandu Anda melalui setiap langkah proses pembelian atau penjualan. Dengan pengalaman bertahun-tahun di industri ini, kami berkomitmen untuk memberikan layanan yang transparan, jujur, dan berorientasi pada kepuasan Anda.
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

            <a href="#contact" className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
              Hubungi Tim Kami
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;