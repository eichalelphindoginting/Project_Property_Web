import React, { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'Properties', 'About', 'Contact'];

  return (
    <nav className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${scrolled ? 'bg-black shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <div className="text-white text-xl font-bold text-brand-light tracking-wider">
          AETHER
        </div>
        <ul className="text-white hidden md:flex items-center space-x-8">
          {links.map(link => (
            <li key={link}>
              <a href="#" className="text-brand-light text-sm font-medium hover:text-brand-accent transition-colors">
                {link.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;