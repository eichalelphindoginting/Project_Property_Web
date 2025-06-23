/* eslint-disable no-unused-vars */
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import Logo from '../assets/Logo.png'; // Pastikan path logo benar

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Untuk copyright

  return (
    <footer id="footer" className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Kolom 1: Logo & Deskripsi */}
          <div className="md:col-span-1">
            <img src={Logo} alt="Logo" className="h-10 mb-4 bg-white p-1 rounded" />
            <p className="text-sm">
              Platform properti terpercaya untuk menemukan rumah impian Anda.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-white"><FaFacebook size={20} /></a>
              <a href="#" className="hover:text-white"><FaInstagram size={20} /></a>
              <a href="#" className="hover:text-white"><FaTwitter size={20} /></a>
              <a href="https://wa.me/6281367937941" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaWhatsapp size={20} /></a>
            </div>
          </div>

          {/* Kolom 2, 3, 4: Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Jelajahi</h4>
            <ul>
              <li className="mb-2"><a href="#popular" className="hover:text-white">Properti Dijual</a></li>
              <li className="mb-2"><a href="#popular" className="hover:text-white">Properti Disewa</a></li>
              <li className="mb-2"><a href="#popular" className="hover:text-white">Agen</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Tentang</h4>
            <ul>
              <li className="mb-2"><a href="#about" className="hover:text-white">Tentang Kami</a></li>
              <li className="mb-2"><a href="#about" className="hover:text-white">Karir</a></li>
              <li className="mb-2"><a href="#about" className="hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Hubungi Kami</h4>
            <p>Jl. Properti No. 123, Jakarta, Indonesia</p>
            <p>contact@properti.com</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;