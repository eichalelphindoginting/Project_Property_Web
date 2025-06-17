import React from 'react';

// Ikon
const PhoneIcon = <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const InstagramIcon = <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 21.828a4 4 0 01-5.656 0A4 4 0 016.172 19M12 12a4 4 0 014-4h.01M16 12a4 4 0 014 4h.01M12 12a4 4 0 01-4 4H7.99M12 12a4 4 0 01-4-4H7.99" /></svg>; // Placeholder for IG
const YoutubeIcon = <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold">LOGO</h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          <input type="text" placeholder="Check In" className="bg-gray-800 text-center px-6 py-3 rounded-md border border-gray-700 focus:outline-none focus:ring-1 focus:ring-brand-accent" />
          <input type="text" placeholder="Check Out" className="bg-gray-800 text-center px-6 py-3 rounded-md border border-gray-700 focus:outline-none focus:ring-1 focus:ring-brand-accent" />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <a href="#" className="flex items-center gap-3 hover:text-brand-accent">{PhoneIcon} +62 00000000</a>
          <a href="#" className="flex items-center gap-3 hover:text-brand-accent">{InstagramIcon} @blablabla</a>
          <a href="#" className="flex items-center gap-3 hover:text-brand-accent">{YoutubeIcon} blablabla</a>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-20 border-t border-gray-800 pt-8">
        All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;