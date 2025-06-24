// src/components/Allright.jsx

import React from 'react';
// <<< 1. IMPORT Link DARI REACT-ROUTER-DOM
import { Link } from 'react-router-dom';

function Allright() {
  const currentYear = new Date().getFullYear(); // Tambahan agar tahun dinamis

  return (
    <div className="bg-black text-white text-sm py-4 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        {/* <<< 2. UBAH TEKS MENJADI SEBUAH LINK */}
        <Link to="/admin-login" className="font-bold hover:text-teal-600 transition-colors">
          Copyright © {currentYear} Sarolangun Properti. All Rights Reserved.
        </Link>
      </div>
    </div>
  );
}

export default Allright;