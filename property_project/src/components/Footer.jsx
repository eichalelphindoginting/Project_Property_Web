import React from 'react';

function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-lg font-bold text-white tracking-wider mb-4 md:mb-0">
            AETHER
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white">Properties</a>
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          <p>&copy; 2025 AETHER. All Rights Reserved. A modern real estate experience.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;