import React from 'react';

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <div className="text-xl font-bold text-white tracking-wider">
          LOGO NAME
        </div>
        <ul className="flex items-center space-x-8">
          <li>
            <a href="#" className="text-brand-accent font-semibold text-sm">
              HOME
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-brand-accent text-sm font-semibold">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-brand-accent text-sm font-semibold">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;