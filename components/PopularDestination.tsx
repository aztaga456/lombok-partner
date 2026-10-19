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
          
          {/* LEFT COLUMN: PETA LOMBOK TRANSPARAN DI TENGAH + FOTO DESTINASI DENGAN GARIS TITIK-TITIK PENGHUBUNG */}
          <div
            className={`lg:col-span-6 relative flex items-center justify-center min-h-[520px] sm:min-h-[580px] md:min-h-[640px] w-full max-w-[560px] mx-auto transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
          >
            
            {/* 1. Center Transparent Lombok Island Map Backdrop */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[360px] md:w-[410px] aspect-square pointer-events-none z-0 transition-all duration-1000 ease-out delay-150 ${
                isVisible ? 'opacity-35 scale-100' : 'opacity-0 scale-75'
              }`}
            >
              <Image
                src="/lombok-map-transparent.png"
                alt="Peta Pulau Lombok"
                fill
                className="object-contain filter drop-shadow-[0_10px_25px_rgba(14,165,233,0.18)]"
                priority
              />
            </div>

            {/* 2. Dotted Connecting Lines with Origin Pins to Destination Photos */}
            <div
              className={`absolute inset-0 pointer-events-none z-10 transition-all duration-1000 ease-out delay-200 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <svg
                viewBox="0 0 500 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-sky-500"
              >
                {/* Line 1: Northwest Map Pin -> Top-Left Photo (3 Gili Snorkeling) */}
                <path
                  d="M 185,170 C 150,140 120,110 85,90"
                  stroke="#0284c7"
                  strokeWidth="2.2"
                  strokeDasharray="4 5"
                  strokeLinecap="round"
                />

                {/* Line 2: Northeast Map Pin -> Top-Right Photo (Sembalun & Rinjani) */}
                <path
                  d="M 330,160 C 365,130 395,100 425,75"
                  stroke="#0284c7"
                  strokeWidth="2.2"
                  strokeDasharray="4 5"
                  strokeLinecap="round"
                />

                {/* Line 3: Southwest Map Pin -> Bottom-Left Photo (Pantai Mandalika) */}
                <path
                  d="M 195,330 C 165,365 130,400 95,420"
                  stroke="#0284c7"
                  strokeWidth="2.2"
                  strokeDasharray="4 5"
                  strokeLinecap="round"
                />

                {/* Line 4: Southeast Map Pin -> Bottom-Right Photo (Pantai Pasir Putih) */}
                <path
                  d="M 320,340 C 350,375 385,405 415,425"
                  stroke="#0284c7"
                  strokeWidth="2.2"
                  strokeDasharray="4 5"
                  strokeLinecap="round"
                />

                {/* Origin Map Pins (Glowing interactive dot points) */}
                {/* Pin 1: 3 Gili */}
                <circle cx="185" cy="170" r="5" fill="#0284c7" />
                <circle cx="185" cy="170" r="9" stroke="#38bdf8" strokeWidth="1.5" opacity="0.6" />

                {/* Pin 2: Sembalun / Rinjani */}
                <circle cx="330" cy="160" r="5" fill="#0284c7" />
                <circle cx="330" cy="160" r="9" stroke="#38bdf8" strokeWidth="1.5" opacity="0.6" />

                {/* Pin 3: Mandalika / Tanjung Aan */}
                <circle cx="195" cy="330" r="5" fill="#0284c7" />
                <circle cx="195" cy="330" r="9" stroke="#38bdf8" strokeWidth="1.5" opacity="0.6" />

                {/* Pin 4: Pantai Selatan */}
                <circle cx="320" cy="340" r="5" fill="#0284c7" />
                <circle cx="320" cy="340" r="9" stroke="#38bdf8" strokeWidth="1.5" opacity="0.6" />
              </svg>

              {/* Decorative flight airplane icon */}
              <div
                className={`absolute top-6 right-10 transform rotate-[-25deg] text-sky-500 transition-all duration-700 delay-500 ${
                  isVisible ? 'opacity-100 scale-100 translate-x-0 translate-y-0' : 'opacity-0 scale-0 -translate-x-12 translate-y-12'
                }`}
              >
                <Send className="w-6 h-6 fill-sky-500/20" />
              </div>
            </div>

            {/* 3. PHOTO DESTINASI SEKITAR PETA DENGAN UKURAN BERBEDA-BEDA */}

            {/* Photo 1: KIRI ATAS - Snorkeling Patung Gili Meno (Ukuran Menengah) */}
            <div
              className={`absolute top-2 left-0 sm:left-2 md:left-3 z-20 w-[185px] sm:w-[210px] md:w-[230px] bg-white p-2 sm:p-2.5 pb-3.5 rounded-2xl shadow-xl polaroid-card transition-all duration-700 ease-out transform ${
                isVisible
                  ? 'opacity-100 scale-100 -rotate-3 translate-x-0 translate-y-0'
                  : 'opacity-0 scale-50 rotate-0 -translate-x-12 -translate-y-12'
              } hover:rotate-0`}
            >
              <div className="relative h-32 sm:h-38 md:h-40 w-full overflow-hidden rounded-xl">
                <Image
                  src="/packages/gili-trilogy.jpg"
                  alt="3 Gili Snorkeling & The Nest Statues"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-2 text-center">
                <span className="text-[11px] font-bold text-slate-800 tracking-tight block">
                  3 Gili Snorkeling
                </span>
                <span className="text-[9px] text-sky-600 font-semibold block">
                  Patung The Nest & Penyu
                </span>
              </div>
            </div>

            {/* Photo 2: KANAN ATAS - Lembah Sembalun & Rinjani (UKURAN PALING BESAR) */}
            <div
              className={`absolute top-0 right-0 sm:right-2 md:right-3 z-20 w-[205px] sm:w-[235px] md:w-[260px] bg-white p-2 sm:p-2.5 pb-3.5 rounded-2xl shadow-2xl polaroid-card transition-all duration-700 delay-150 ease-out transform ${
                isVisible
                  ? 'opacity-100 scale-100 rotate-4 translate-x-0 -translate-y-0'
                  : 'opacity-0 scale-0 rotate-0 translate-x-12 -translate-y-12'
              } hover:rotate-0`}
            >
              <div className="relative h-34 sm:h-40 md:h-44 w-full overflow-hidden rounded-xl">
                <Image
                  src="/packages/senaru-sembalun.jpg"
                  alt="Sembalun Valley & Mount Rinjani View"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-2 text-center">
                <span className="text-[11px] font-bold text-slate-800 tracking-tight block">
                  Sembalun & Gunung Rinjani
                </span>
                <span className="text-[9px] text-emerald-600 font-semibold block">
                  Panorama Lembah Bintang
                </span>
              </div>
            </div>

            {/* Photo 3: KIRI BAWAH - Pantai Tanjung Aan / Mandalika (UKURAN PALING MUNGIL & MANIS) */}
            <div
              className={`absolute bottom-2 left-0 sm:left-2 md:left-4 z-20 w-[155px] sm:w-[175px] md:w-[190px] bg-white p-2 pb-3 rounded-2xl shadow-xl polaroid-card transition-all duration-700 delay-300 ease-out transform ${
                isVisible
                  ? 'opacity-100 scale-100 -rotate-6 translate-x-0 translate-y-0'
                  : 'opacity-0 scale-0 rotate-0 -translate-x-12 translate-y-12'
              } hover:rotate-0`}
            >
              <div className="relative h-26 sm:h-30 md:h-34 w-full overflow-hidden rounded-xl">
                <Image
                  src="/packages/paket-4d3n.jpg"
                  alt="Pantai Tanjung Aan & Bukit Merese Mandalika"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-1.5 text-center">
                <span className="text-[10px] font-bold text-slate-800 tracking-tight block">
                  Pantai Mandalika
                </span>
                <span className="text-[8.5px] text-sky-600 font-semibold block">
                  Teluk Toska & Pasir Merica
                </span>
              </div>
            </div>

            {/* Photo 4: KANAN BAWAH - Pantai Pasir Putih & Perahu Kayu (UKURAN SEDANG LEBAR) */}
            <div
              className={`absolute bottom-0 right-0 sm:right-2 md:right-3 z-20 w-[180px] sm:w-[210px] md:w-[225px] bg-white p-2 sm:p-2.5 pb-3.5 rounded-2xl shadow-xl polaroid-card transition-all duration-700 delay-500 ease-out transform ${
                isVisible
                  ? 'opacity-100 scale-100 rotate-3 translate-x-0 translate-y-0'
                  : 'opacity-0 scale-0 rotate-0 translate-x-12 translate-y-12'
              } hover:rotate-0`}
            >
              <div className="relative h-28 sm:h-34 md:h-38 w-full overflow-hidden rounded-xl">
                <Image
                  src="/packages/paket-3d2n.jpg"
                  alt="Pantai Tropis & Perahu Tradisional Lombok"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-2 text-center">
                <span className="text-[11px] font-bold text-slate-800 tracking-tight block">
                  Pantai Pasir Putih
                </span>
                <span className="text-[9px] text-amber-600 font-semibold block">
                  Perahu Kayu Tradisional
                </span>
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
