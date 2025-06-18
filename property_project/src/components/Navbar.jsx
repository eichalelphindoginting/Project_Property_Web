import React from 'react';

import homeIcon from '../assets/Logo.png';
function Navbar() {
  return (
    <nav className="bg-blue-400 shadow-md absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto px-6 py-5 flex items-center">
        <div className="flex items-center">
          <img src={homeIcon} alt="Logo" className="w-10 h-10 mr-3" /> 
          <div className="text-3xl font-bold leading-tight bg-gradient-to-r 
          bg-clip-text tracking-wide drop-shadow-md font-[Cinzel]">
          SAROLANGUN PROPERTI
          </div>
        </div>

        <ul className="flex items-center space-x-20 ml-auto">
          <li>
            <a href="#" className="inline-block px-3 py-auto rounded-md 
                text-black font-bold border-b-2 border-black pb-1 text-2xl
                hover:bg-black/20 hover:text-white
                transition-all duration-200">
              HOME
            </a>
          </li>
          <li>
            <a href="#" className="inline-block px-3 py-auto rounded-md 
                text-black font-bold border-b-2 border-black pb-1 text-2xl
                hover:bg-black/20 hover:text-white
                transition-all duration-200">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#" className="inline-block px-3 py-auto rounded-md 
                text-black font-bold border-b-2 border-black pb-1 text-2xl
                hover:bg-black/20 hover:text-white
                transition-all duration-200">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;