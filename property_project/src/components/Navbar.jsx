import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import Logo from '../assets/Logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Dijual', href: '#popular' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Kontak', href: '#footer' },
  ];
    const handleLinkClick = () => {
      setIsOpen(false)
    };
    
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <img src={Logo} alt="Logo Properti" className="h-10" />

          {/* Menu untuk Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/6281373381797"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 hover:bg-blue-950 text-yellow-500 font-bold py-2 px-6 rounded-lg transition-colors"
            >
              Hubungi Kami
            </a>
          </div>

          {/* Tombol Menu untuk Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <HiX className="h-6 w-6 text-gray-700" />
              ) : (
                <HiMenuAlt3 className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        
        {/* Menu untuk Mobile (Dropdown) */}
          <div 
            className={`
              md:hidden absolute top-full left-0 w-full bg-white shadow-md z-50
              transition-all duration-300 ease-in-out
              ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
            `}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block py-2 px-3 text-base text-gray-700 hover:bg-teal-50 rounded"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/6281367937941"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full mt-2 bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Hubungi Kami
              </a>
            </div>
          </div>

      </div>
    </nav>
  );
};

export default Navbar;