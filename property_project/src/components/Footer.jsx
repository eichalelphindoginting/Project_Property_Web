/* eslint-disable no-unused-vars */
import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import Logo from '../assets/Logo.png'; // Pastikan path logo benar

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Untuk copyright

  return (
    <footer id="footer" className="bg-teal-600 text-black">
      <div className="container mx-auto px-2 py-2">
        <div className="gap-4">
          {/* Kolom 1: Logo & Deskripsi */}
          <div className="md:col-span-1 flex flex-col md:flex-row items-center justify-center">
            <img src={Logo} alt="Logo" className="h-14 mt-2 mb-2 p-1 rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out" />
            <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-black mb-2 drop-shadow-md">
              Sarolangun Properti
            </p>
          </div>
          <div className="flex space-x-6 mt-6 mb-2 justify-center">
              <a 
              href="https://wa.me/6281373381797" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-white hover:text-green-500 transform hover:-translate-y-1">
              <FaWhatsapp size={30} className='drop-shadow-sm'/>
              <span className="text-lg font-semibold whitespace-nowrap">+6281373381797</span>
              </a>

              <a 
              href="https://www.facebook.com/sarolangun.properti/" 
              className="flex items-center space-x-2 text-white hover:text-blue-600 transform hover:-translate-y-1">
              <FaFacebook size={30} />
              <span className="text-lg font-semibold whitespace-nowrap">Sarolangun Properti</span>
              </a>

              <a 
              href="https://www.instagram.com/sarolangunproperti/" 
              className="flex items-center space-x-2 text-white hover:text-pink-500 transform hover:-translate-y-1">
              <FaInstagram size={30} />
              <span className="text-lg font-semibold whitespace-nowrap">@sarolangunproperti</span>
              </a>

              <a 
              href="https://www.tiktok.com/@sarolangunproperti" 
              className="flex items-center space-x-2 text-white hover:text-black transform hover:-translate-y-1">
              <FaTiktok size={30} />
              <span className="text-lg font-semibold whitespace-nowrap">@sarolangunproperti</span>
              </a>

              <a 
              href="https://www.youtube.com/@Sarolangunproperti" 
              className="flex items-center space-x-2 text-white hover:text-red-600 transform hover:-translate-y-1">
              <FaYoutube size={30} />
              <span className="text-lg font-semibold whitespace-nowrap">Sarolangun Properti</span>
              </a>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;