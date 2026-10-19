'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Palmtree, Mountain, Heart, MapPin, Send } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function PopularDestination() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Cek jika section sudah langsung terlihat saat load
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsVisible(true);
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="destinations"
      ref={sectionRef}
      className="py-20 md:py-28 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: FOTO POLAROID SEKETIKA ZOOM IN KELUAR */}
          <div
            className={`lg:col-span-6 relative flex items-center justify-center min-h-[460px] md:min-h-[520px] transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
          >
            
            {/* Background Dotted Flight Path & Airplane Icon (Zoom in & swoop) */}
            <div
              className={`absolute inset-0 pointer-events-none z-0 transition-all duration-1000 ease-out delay-100 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
            >
              <svg
                viewBox="0 0 500 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-sky-400"
              >
                <path
                  d="M 50,420 C 10,250 80,180 180,190 C 260,200 350,150 420,70"
                  stroke="#38bdf8"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                  fill="none"
                />
              </svg>
              
              {/* Airplane icon along path */}
              <div
                className={`absolute top-10 right-12 transform rotate-[-25deg] text-sky-500 transition-all duration-700 delay-500 ${
                  isVisible ? 'opacity-100 scale-100 translate-x-0 translate-y-0' : 'opacity-0 scale-0 -translate-x-12 translate-y-12'
                }`}
              >
                <Send className="w-7 h-7 fill-sky-500/20" />
              </div>

              {/* Decorative blue burst lines */}
              <div
                className={`absolute bottom-28 left-4 flex gap-1 transform -rotate-12 transition-all duration-500 delay-500 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}
              >
                <span className="w-1 h-3 bg-sky-400 rounded-full" />
                <span className="w-1 h-4 bg-sky-500 rounded-full" />
                <span className="w-1 h-3 bg-sky-400 rounded-full" />
              </div>
              <div
                className={`absolute top-36 right-4 flex gap-1 transform rotate-45 transition-all duration-500 delay-500 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}
              >
                <span className="w-1 h-3 bg-sky-400 rounded-full" />
                <span className="w-1 h-4 bg-sky-500 rounded-full" />
                <span className="w-1 h-3 bg-sky-400 rounded-full" />
              </div>
            </div>

            {/* Photo 1: Large Center Photo (Gili Meno Underwater Statues) */}
            <div
              className={`relative z-10 w-[240px] sm:w-[280px] md:w-[310px] bg-white p-2.5 sm:p-3 pb-4 rounded-xl shadow-xl polaroid-card transition-all duration-700 ease-out transform ${
                isVisible
                  ? 'opacity-100 scale-100 rotate-2'
                  : 'opacity-0 scale-50 rotate-0'
              } hover:rotate-0`}
            >
              <div className="relative h-44 sm:h-52 md:h-56 w-full overflow-hidden rounded-lg">
                <Image
                  src="/packages/gili-trilogy.jpg"
                  alt="Gili Meno Underwater Statues & Snorkeling"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Photo 2: Top Right Photo (Sembalun Valley & Mount Rinjani) */}
            <div
              className={`absolute -top-4 right-0 sm:right-6 md:right-8 z-20 w-[140px] sm:w-[170px] md:w-[190px] bg-white p-2 pb-3 rounded-xl shadow-lg polaroid-card transition-all duration-700 delay-150 ease-out transform ${
                isVisible
                  ? 'opacity-100 scale-100 rotate-6 translate-x-0 -translate-y-0'
                  : 'opacity-0 scale-0 rotate-0 translate-x-12 -translate-y-12'
              } hover:rotate-0`}
            >
              <div className="relative h-28 sm:h-32 md:h-36 w-full overflow-hidden rounded-lg">
                <Image
                  src="/packages/senaru-sembalun.jpg"
                  alt="Sembalun Valley & Mount Rinjani View"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Photo 3: Bottom Left Photo (Mandalika & Tanjung Aan Bay) */}
            <div
              className={`absolute -bottom-6 left-2 sm:left-6 md:left-8 z-20 w-[140px] sm:w-[170px] md:w-[190px] bg-white p-2 pb-3 rounded-xl shadow-lg polaroid-card transition-all duration-700 delay-300 ease-out transform ${
                isVisible
                  ? 'opacity-100 scale-100 -rotate-6 translate-x-0 translate-y-0'
                  : 'opacity-0 scale-0 rotate-0 -translate-x-12 translate-y-12'
              } hover:rotate-0`}
            >
              <div className="relative h-28 sm:h-32 md:h-36 w-full overflow-hidden rounded-lg">
                <Image
                  src="/packages/paket-4d3n.jpg"
                  alt="Pantai Tanjung Aan & Bukit Merese Mandalika"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Photo 4: Bottom Right Photo (Tropical Beach & White Boat) */}
            <div
              className={`absolute -bottom-4 right-4 sm:right-10 md:right-14 z-20 w-[130px] sm:w-[155px] md:w-[170px] bg-white p-2 pb-3 rounded-xl shadow-lg polaroid-card transition-all duration-700 delay-500 ease-out transform ${
                isVisible
                  ? 'opacity-100 scale-100 rotate-4 translate-x-0 translate-y-0'
                  : 'opacity-0 scale-0 rotate-0 translate-x-12 translate-y-12'
              } hover:rotate-0`}
            >
              <div className="relative h-26 sm:h-28 md:h-32 w-full overflow-hidden rounded-lg">
                <Image
                  src="/packages/paket-3d2n.jpg"
                  alt="Pantai Tropis & Perahu Tradisional Lombok"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: TEXT DESKRIPSI MASUK DARI KANAN KE KIRI */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left overflow-hidden">
            
            {/* Eyebrow & Headline (Slide dari Kanan) */}
            <div
              className={`transition-all duration-700 ease-out delay-100 transform ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20 md:translate-x-28'
              }`}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-7 h-[2.5px] bg-sky-600 rounded-full" />
                <span className="text-xs md:text-sm font-bold tracking-widest text-sky-600 uppercase">
                  {t('DESTINASI POPULER', 'POPULAR DESTINATION')}
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
                Lombok, <span className="text-sky-600">Indonesia</span>
              </h2>
            </div>

            {/* Body Paragraph (Slide dari Kanan dengan delay) */}
            <div
              className={`transition-all duration-700 ease-out delay-200 transform ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20 md:translate-x-28'
              }`}
            >
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                {t(
                  'Lombok adalah surga tropis berkelas dunia dengan panorama pantai pasir putih alami, kekayaan budaya suku Sasak yang autentik, dan lanskap alam spektakuler. Dari gemerlap terumbu karang di Tiga Gili hingga ketenangan spiritual Senggigi dan kemegahan Bukit Merese, Lombok Partner menghadirkan petualangan sempurna dan relaksasi tak tertandingi.',
                  'Lombok is a tropical paradise known for its stunning beaches, rich Sasak culture, and breathtaking landscapes. From the pristine coral reefs of the Gili Islands to the serene savannas of Bukit Merese and majestic waterfalls, Lombok offers the perfect blend of adventure, relaxation, and unforgettable experiences.'
                )}
              </p>
            </div>

            {/* 3 Circular Feature Icons (Slide dari Kanan) */}
            <div
              className={`grid grid-cols-3 gap-3 sm:gap-6 mb-8 transition-all duration-700 ease-out delay-300 transform ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20 md:translate-x-28'
              }`}
            >
              
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left group">
                <div className="w-12 h-12 rounded-full border-2 border-sky-400 bg-sky-50/60 flex items-center justify-center text-sky-600 mb-2.5 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-200">
                  <Palmtree className="w-6 h-6 stroke-[1.8]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                  {t('Pantai Eksotis', 'Beautiful Beaches')}
                </span>
              </div>

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left group">
                <div className="w-12 h-12 rounded-full border-2 border-sky-400 bg-sky-50/60 flex items-center justify-center text-sky-600 mb-2.5 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-200">
                  <Mountain className="w-6 h-6 stroke-[1.8]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                  {t('Panorama Megah', 'Stunning Landscapes')}
                </span>
              </div>

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left group">
                <div className="w-12 h-12 rounded-full border-2 border-sky-400 bg-sky-50/60 flex items-center justify-center text-sky-600 mb-2.5 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-200">
                  <Heart className="w-6 h-6 stroke-[1.8]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                  {t('Budaya Otentik', 'Rich Culture')}
                </span>
              </div>

            </div>

            {/* Location Highlight Card Box (Slide dari Kanan) */}
            <div
              className={`w-full bg-sky-50/80 border border-sky-100 rounded-2xl p-4 sm:p-5 flex items-center gap-4 transition-all duration-700 ease-out delay-500 transform ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20 md:translate-x-28'
              } hover:bg-sky-50`}
            >
              <div className="w-11 h-11 rounded-full bg-sky-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <MapPin className="w-5 h-5 fill-white text-sky-600" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-slate-900 text-base sm:text-lg leading-tight">
                  Lombok, Indonesia
                </span>
                <span className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  {t('Surga tropis untuk setiap penjelajah', 'A paradise for every traveler')}
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
