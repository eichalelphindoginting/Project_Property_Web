import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import Logo from '../assets/Logo.png'; // Pastikan path logo benar

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Beranda', href: '#' },
    { name: 'Properti', href: '#' },
    { name: 'Tentang Kami', href: '#' },
    { name: 'Kontak', href: '#' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <img src={Logo} alt="Logo Properti" className="h-10" />

          {/* Menu untuk Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                {link.name}
              </a>
            ))}
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">
              Hubungi Kami
            </button>
          </div>

          {/* Tombol Menu untuk Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <HiX className="h-6 w-6 text-gray-700" /> : <HiMenuAlt3 className="h-6 w-6 text-gray-700" />}
            </button>
          </div>
        </div>

        {/* Menu untuk Mobile (Dropdown) */}
        {isOpen && (
          <div className="md:hidden mt-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="block py-2 px-4 text-sm text-gray-700 hover:bg-teal-50 rounded">
                {link.name}
              </a>
            ))}
            <button className="w-full mt-2 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Hubungi Kami
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;