// src/components/PopularHomes.jsx

import React, { useState, useRef, useEffect } from 'react';
import PropertyCard from './PropertyCard';
import { supabase } from '../lib/supabaseClient';

const PrevSlideIcon = <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>;
const NextSlideIcon = <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>;

const PopularHomes = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProperties = async () => {
            setLoading(true);

            // <<< PERUBAHAN UTAMA: Mengambil data properti beserta semua gambar terkaitnya
            const { data, error } = await supabase
                .from('properties')
                .select(`
                    *,
                    property_images (
                        id,
                        image_url
                    )
                `)
                .limit(8); // Ambil 8 properti terbaru

            if (error) {
                console.error('Error fetching properties with images:', error);
            } else {
                setProperties(data);
            }
            setLoading(false);
        };

        fetchProperties();
    }, []);

    // Bagian logika slider untuk kartu-kartu properti tidak ada perubahan
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const sliderTrackRef = useRef(null);
    const [slideWidth, setSlideWidth] = useState(0);

    const getCardsPerView = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth >= 1024) return 3;
            if (window.innerWidth >= 768) return 2;
        }
        return 1;
    };

    const cardsPerView = getCardsPerView();
    const totalCards = properties.length;
    const totalSlides = Math.ceil(totalCards / cardsPerView);

    useEffect(() => {
        const calculateSlideWidth = () => {
            if (sliderTrackRef.current?.parentElement) {
                const visibleContainerWidth = sliderTrackRef.current.parentElement.clientWidth;
                setSlideWidth(visibleContainerWidth);
            }
        };
        calculateSlideWidth();
        window.addEventListener('resize', calculateSlideWidth);
        return () => window.removeEventListener('resize', calculateSlideWidth);
    }, [properties]); // Tambahkan properties sebagai dependensi

    const goToPreviousSlide = () => setCurrentSlideIndex(prev => Math.max(0, prev - 1));
    const goToNextSlide = () => setCurrentSlideIndex(prev => Math.min(totalSlides - 1, prev + 1));
    const transformValue = `translateX(-${currentSlideIndex * slideWidth}px)`;
    
    if (loading) {
        return <div className="text-center py-20 bg-gray-50">Memuat Properti Pilihan...</div>;
    }

    if (properties.length === 0) {
        return (
            <section id="popular" className="bg-gray-50 py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-gray-800">SAROLANGUN PROPERTI</h2>
                    <p className="text-gray-500 mt-4">Belum ada properti yang tersedia saat ini.</p>
                </div>
            </section>
        );
    }
    
    return (
        <section id="popular" className="bg-gray-50 py-20">
            <div className="container mx-auto px-6 relative">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">SAROLANGUN PROPERTI</h2>
                    <p className="text-gray-500 mt-2">Temukan properti pilihan yang kami rekomendasikan untuk Anda.</p>
                </div>

                <div className="relative">
                    <div className="overflow-hidden">
                        <div
                            ref={sliderTrackRef}
                            className="flex space-x-8 transition-transform duration-500 ease-in-out"
                            style={{ transform: transformValue }}
                        >
                            {properties.map(property => (
                                <div
                                    key={property.id}
                                    className="flex-shrink-0 w-full md:w-[calc(50%-theme(spacing.8)/2)] lg:w-[calc(33.3333%-theme(spacing.8)*2/3)]"
                                >
                                    <PropertyCard property={property} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {totalSlides > 1 && (
                        <>
                            {currentSlideIndex > 0 && (
                                <button onClick={goToPreviousSlide} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gray-800 bg-opacity-70 p-2 rounded-full z-10 focus:outline-none hover:bg-opacity-90 transition-all duration-200">{PrevSlideIcon}</button>
                            )}
                            {currentSlideIndex < totalSlides - 1 && (
                                <button onClick={goToNextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gray-800 bg-opacity-70 p-2 rounded-full z-10 focus:outline-none hover:bg-opacity-90 transition-all duration-200">{NextSlideIcon}</button>
                            )}
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PopularHomes;