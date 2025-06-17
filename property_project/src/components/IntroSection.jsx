import React from 'react';

function IntroSection() {
  return (
    // Section ini sekarang tidak memiliki warna latar sendiri, 
    // ia akan menyatu dengan latar belakang gelap dari App.jsx.
    // Padding vertikal (py) dibuat sangat besar untuk memberikan ruang.
    <section id="intro" className="bg-brand-dark py-24 sm:py-32">
      <div className="container mx-auto px-6 text-center">
        
        {/* Judul kecil sebagai pengantar dengan warna aksen */}
        <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-accent mb-4">
          Our Philosophy
        </h3>
        
        {/* Teks utama dibuat terpusat dan lebarnya dibatasi (max-w-3xl) agar nyaman dibaca */}
        <h2 className="text-3xl md:text-4xl font-medium leading-relaxed text-brand-light max-w-4xl mx-auto">
          "We are a dedicated team committed to delivering the best solutions through innovation and integrity. With a strong focus on collaboration and continuous improvement, we aim to meet the evolving needs of our clients and community."
        </h2>
        
      </div>
    </section>
  );
}

export default IntroSection;