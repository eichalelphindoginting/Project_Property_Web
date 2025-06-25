/* eslint-disable no-unused-vars */
import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'; // Menambahkan ikon untuk alamat, email, telepon
import Logo from '../assets/Logo.png'; // Pastikan path logo benar

const Footer = () => {
    const currentYear = new Date().getFullYear();

return (
    <footer id="footer" className="bg-gray-800 text-gray-300 py-12 md:py-20">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-1 text-center md:text-left mb-6 md:mb-0">
                    <img 
                        src={Logo} 
                        alt="Logo Sarolangun Properti" 
                        className="h-16 mx-auto md:mx-0 mb-4 p-1 rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out bg-white" 
                    />
                    <p className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2 drop-shadow-md">
                            Sarolangun Properti
                    </p>
                    <p className="text-sm leading-relaxed text-gray-400">
                        Situs jual-beli terbaik di Sarolangun.
                    </p>
                </div>

                <div className="text-center md:text-left">
                    <h4 className="text-lg font-semibold text-white mb-4 border-b-2 border-teal-500 pb-2 inline-block">Jelajahi</h4>
                    <ul className="space-y-3">
                        <li><a href="#home" className="text-gray-300 hover:text-white hover:underline transition-colors duration-300">Beranda</a></li>
                        <li><a href="#popular" className="text-gray-300 hover:text-white hover:underline transition-colors duration-300">Properti Dijual</a></li>
                    </ul>
                </div> 

                <div className="text-center md:text-left">
                    <h4 className="text-lg font-semibold text-white mb-4 border-b-2 border-teal-500 pb-2 inline-block">Tentang</h4>
                    <ul className="space-y-3">
                        <li><a href="#about" className="text-gray-300 hover:text-white hover:underline transition-colors duration-300">Tentang Kami</a></li>
                        <li><a href="https://wa.me/6281373381797" className="text-gray-300 hover:text-white hover:underline transition-colors duration-300">Daftar Jadi Agen</a></li>
                    </ul>
                </div>

                <div className="text-center md:text-left">
                    <h4 className="text-lg font-semibold text-white mb-4 border-b-2 border-teal-500 pb-2 inline-block">Hubungi Kami</h4>
                    <address className="not-italic text-sm space-y-3 text-gray-300">
                        <div className="flex items-start justify-center md:justify-start gap-3">
                            <FaMapMarkerAlt className="text-teal-400 mt-1 text-xl flex-shrink-0" />
                            <span>Jl. Remaja, RT 05, Kel. Sukasari, Kec. Sarolangun, Kab. Sarolangun, Prov. Jambi, Indonesia</span>
                        </div>
                        <a href="mailto:Sarolangunproperti@gmail.com" className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition-colors">
                            <FaEnvelope className="text-teal-400 text-xl flex-shrink-0" />
                            <span>Sarolangunproperti@gmail.com</span>
                        </a>
                        <a href="https://wa.me/6281373381797" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-3 hover:text-green-300 transition-colors">
                            <FaWhatsapp className="text-teal-400 text-xl flex-shrink-0" />                                <span>+6281373381797</span>
                        </a>
                    </address>

                    <div className="flex space-x-4 mt-6 justify-center md:justify-start">
                        <a 
                            href="https://www.facebook.com/sarolangun.properti/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-400 hover:text-blue-600 transform hover:-translate-y-1 transition-colors duration-300 ease-in-out" 
                            title="Kunjungi halaman Facebook kami"
                        >
                            <FaFacebook size={24} className="drop-shadow-sm" />
                        </a>
                        <a 
                            href="https://www.instagram.com/sarolangunproperti/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-400 hover:text-pink-500 transform hover:-translate-y-1 transition-colors duration-300 ease-in-out" 
                            title="Ikuti kami di Instagram"
                        >
                            <FaInstagram size={24} className="drop-shadow-sm" />
                        </a>
                        <a 
                            href="https://www.tiktok.com/@sarolangunproperti" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-400 hover:text-black transform hover:-translate-y-1 transition-colors duration-300 ease-in-out" 
                            title="Tonton kami di TikTok"
                        >
                            <FaTiktok size={24} className="drop-shadow-sm" />
                        </a>
                        <a 
                            href="https://www.youtube.com/@Sarolangunproperti" 
                            target="_blank"                                 
                            rel="noopener noreferrer" 
                            className="text-gray-400 hover:text-red-600 transform hover:-translate-y-1 transition-colors duration-300 ease-in-out" 
                            title="Tonton video kami di YouTube"
                        >
                            <FaYoutube size={24} className="drop-shadow-sm" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;