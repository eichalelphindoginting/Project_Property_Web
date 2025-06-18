import React from 'react';

import interiorImage from '../assets/Logo.png';


function IntroSection() {
  return (
    <div className="relative min-h-[60vh] flex items-center" // Tambah min-h dan flex untuk centering konten
      style={{
        backgroundImage: 'linear-gradient(#41ADDD)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      {/* Wavy Background SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[100px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
            82.39-16.72,168.19-17.73,250.45-.39C823.78,31,
            906.67,72,985.66,92.83c70.05,18.48,146.53,
            26.09,214.34,3V0H0V27.35A600.21,600.21,
            0,0,0,321.39,56.44Z"
            className="fill-blue-300" // Sesuaikan warna fill ini
          />
        </svg>
      </div>

      {/* Konten Section */}
      <section className="relative container mx-auto px-6 py-20 z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Kolom Kiri: Teks */}
          <div className="text-black text-justify mt-16">
            <h2 className="text-3xl font-bold leading-snug max-w-5xl">
              Sarolangun Properti adalah mitra terpercaya Anda dalam perjalanan properti. 
              Dengan visi untuk masa depan yang lebih baik, kami menggabungkan keahlian mendalam dengan nilai-nilai inti keberlanjutan dan kebersamaan. 
            </h2>
            <h2 className="text-3xl font-bold leading-snug max-w-5xl">
              Logo mencerminkan filosofi kami: membangun rumah yang tidak hanya menjadi tempat berlindung, tetapi juga sumber pertumbuhan, kesejahteraan, dan harmoni dengan lingkungan sekitar. 
              Kami berkomitmen untuk memberikan layanan yang transparan dan inovatif, memastikan setiap klien menemukan properti yang sempurna untuk menumbuhkan impian mereka.
            </h2>
          </div>
          <div className="flex justify-center">
            <img 
              src={interiorImage} 
              alt="Interior Design" 
              className="w-full max-w-md rounded-lg"/>  
          </div>

        </div>
      </section>
    </div>
  );
}

export default IntroSection;
