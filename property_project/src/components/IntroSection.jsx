import React from 'react';

const HouseIcon = (
  <svg
    className="w-24 h-24 text-brand-accent"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z" />
  </svg>
);

function IntroSection() {
  return (
    <div className="relative bg-blue-500">
      {/* Wavy Background SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[150px]"
        >
          {/* Ganti warna fill agar tidak hitam */}
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
            82.39-16.72,168.19-17.73,250.45-.39C823.78,31,
            906.67,72,985.66,92.83c70.05,18.48,146.53,
            26.09,214.34,3V0H0V27.35A600.21,600.21,
            0,0,0,321.39,56.44Z"
            className="fill-blue-400"
          />
        </svg>
      </div>

      {/* Konten Section */}
      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Kolom Kiri: Teks */}
          <div className="text-black text-justify">
            <h2 className="text-3xl font-bold leading-snug">
              We Are A Dedicated Team Committed To Delivering The Best Solutions Through Innovation And Integrity. 
              With A Strong Focus On Collaboration And Continuous Improvement, 
              We Aim To Meet The Evolving Needs Of Our Clients And Community.
            </h2>
          </div>

          {/* Kolom Kanan: Ikon Rumah */}
          <div className="flex justify-center md:justify-end">
            {HouseIcon}
          </div>
        </div>
      </section>
    </div>
  );
}

export default IntroSection;
