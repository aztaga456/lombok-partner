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
          
          {/* LEFT COLUMN: PETA LOMBOK DI TENGAH (FULL COLOR) + 4 FOTO DESTINASI PRESISI DENGAN TINGGI SEIMBANG */}
          <div
            className={`lg:col-span-6 relative flex items-center justify-center min-h-[480px] sm:min-h-[500px] md:min-h-[520px] w-full max-w-[540px] mx-auto transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
          >
            
            {/* 1. Center Lombok Island Map (Non-transparan, Full Color Opaque Graphic) */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[290px] sm:w-[340px] md:w-[380px] aspect-[971/676] pointer-events-none z-10 transition-all duration-1000 ease-out delay-150 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
            >
              <Image
                src="/lombok-island-map.png"
                alt="Peta Pulau Lombok Full Color"
                fill
                className="object-contain filter drop-shadow-[0_12px_28px_rgba(16,185,129,0.22)]"
                priority
              />
            </div>

            {/* 2. Dotted Connecting Lines with Origin Pins to Destination Photos */}
            <div
              className={`absolute inset-0 pointer-events-none z-0 transition-all duration-1000 ease-out delay-200 ${
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
                  d="M 175,190 C 150,160 130,135 100,115"
                  stroke="#0284c7"
                  strokeWidth="2.2"
                  strokeDasharray="4 5"
                  strokeLinecap="round"
                />

                {/* Line 2: Northeast Map Pin -> Top-Right Photo (Sembalun & Rinjani) */}
                <path
                  d="M 345,180 C 370,155 390,135 405,115"
                  stroke="#0284c7"
                  strokeWidth="2.2"
                  strokeDasharray="4 5"
                  strokeLinecap="round"
                />

                {/* Line 3: Southwest Map Pin -> Bottom-Left Photo (Pantai Mandalika) */}
                <path
                  d="M 190,325 C 160,350 135,370 105,385"
                  stroke="#0284c7"
                  strokeWidth="2.2"
                  strokeDasharray="4 5"
                  strokeLinecap="round"
                />

                {/* Line 4: Southeast Map Pin -> Bottom-Right Photo (Pantai Pasir Putih) */}
                <path
                  d="M 330,330 C 355,355 375,370 395,385"
                  stroke="#0284c7"
                  strokeWidth="2.2"
                  strokeDasharray="4 5"
                  strokeLinecap="round"
                />

                {/* Origin Map Pins (Glowing interactive dot points) */}
                <circle cx="175" cy="190" r="5" fill="#0284c7" />
                <circle cx="175" cy="190" r="9" stroke="#38bdf8" strokeWidth="1.5" opacity="0.7" />

                <circle cx="345" cy="180" r="5" fill="#0284c7" />
                <circle cx="345" cy="180" r="9" stroke="#38bdf8" strokeWidth="1.5" opacity="0.7" />

                <circle cx="190" cy="325" r="5" fill="#0284c7" />
                <circle cx="190" cy="325" r="9" stroke="#38bdf8" strokeWidth="1.5" opacity="0.7" />

                <circle cx="330" cy="330" r="5" fill="#0284c7" />
                <circle cx="330" cy="330" r="9" stroke="#38bdf8" strokeWidth="1.5" opacity="0.7" />
              </svg>

              {/* Decorative flight airplane icon */}
              <div
                className={`absolute top-5 right-8 transform rotate-[-25deg] text-sky-500 transition-all duration-700 delay-500 ${
                  isVisible ? 'opacity-100 scale-100 translate-x-0 translate-y-0' : 'opacity-0 scale-0 -translate-x-12 translate-y-12'
                }`}
              >
                <Send className="w-5 h-5 fill-sky-500/20" />
              </div>
            </div>

            {/* 3. PHOTO DESTINASI SEKITAR PETA DENGAN UKURAN AGAK KECIL & PRESISI */}

            {/* Photo 1: KIRI ATAS - Snorkeling Patung Gili Meno */}
            <div
              className={`absolute top-4 sm:top-5 md:top-6 left-2 sm:left-4 z-20 w-[115px] sm:w-[130px] md:w-[145px] bg-white p-2 pb-2.5 rounded-2xl shadow-xl polaroid-card transition-all duration-700 ease-out transform ${
                isVisible
                  ? 'opacity-100 scale-100 -rotate-3 translate-x-0 translate-y-0'
                  : 'opacity-0 scale-50 rotate-0 -translate-x-12 -translate-y-12'
              } hover:rotate-0`}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-inner">
                <Image
                  src="/packages/gili-trilogy.jpg"
                  alt="3 Gili Snorkeling & The Nest Statues"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-1.5 text-center">
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-800 tracking-tight block">
                  3 Gili Snorkeling
                </span>
                <span className="text-[8px] sm:text-[8.5px] text-sky-600 font-semibold block">
                  Patung The Nest
                </span>
              </div>
            </div>

            {/* Photo 2: KANAN ATAS - Lembah Sembalun & Rinjani (AGAK KECIL) */}
            <div
              className={`absolute top-5 sm:top-6 md:top-7 right-2 sm:right-4 z-20 w-[110px] sm:w-[125px] md:w-[138px] bg-white p-2 pb-2.5 rounded-2xl shadow-xl polaroid-card transition-all duration-700 delay-150 ease-out transform ${
                isVisible
                  ? 'opacity-100 scale-100 rotate-3 translate-x-0 translate-y-0'
                  : 'opacity-0 scale-0 rotate-0 translate-x-12 -translate-y-12'
              } hover:rotate-0`}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-inner">
                <Image
                  src="/packages/senaru-sembalun.jpg"
                  alt="Sembalun Valley & Mount Rinjani View"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-1.5 text-center">
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-800 tracking-tight block">
                  Lembah Sembalun
                </span>
                <span className="text-[8px] sm:text-[8.5px] text-emerald-600 font-semibold block">
                  Gunung Rinjani
                </span>
              </div>
            </div>

            {/* Photo 3: KIRI BAWAH - Pantai Mandalika & Sade (MENGISI SUDUT AGAR TIDAK KOSONG) */}
            <div
              className={`absolute bottom-5 sm:bottom-7 md:bottom-8 left-2 sm:left-4 z-20 w-[115px] sm:w-[130px] md:w-[145px] bg-white p-2 pb-2.5 rounded-2xl shadow-xl polaroid-card transition-all duration-700 delay-300 ease-out transform ${
                isVisible
                  ? 'opacity-100 scale-100 -rotate-2 translate-x-0 translate-y-0'
                  : 'opacity-0 scale-0 rotate-0 -translate-x-12 translate-y-12'
              } hover:rotate-0`}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-inner">
                <Image
                  src="/packages/sasak-mandalika.jpg"
                  alt="Pantai Mandalika & Bukit Merese"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-1.5 text-center">
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-800 tracking-tight block">
                  Pantai Mandalika
                </span>
                <span className="text-[8px] sm:text-[8.5px] text-sky-600 font-semibold block">
                  Bukit Merese & Sade
                </span>
              </div>
            </div>

            {/* Photo 4: KANAN BAWAH - Pantai Pasir Putih & Perahu Kayu */}
            <div
              className={`absolute bottom-4 sm:bottom-6 md:bottom-7 right-2 sm:right-4 z-20 w-[115px] sm:w-[130px] md:w-[145px] bg-white p-2 pb-2.5 rounded-2xl shadow-xl polaroid-card transition-all duration-700 delay-500 ease-out transform ${
                isVisible
                  ? 'opacity-100 scale-100 rotate-2 translate-x-0 translate-y-0'
                  : 'opacity-0 scale-0 rotate-0 translate-x-12 translate-y-12'
              } hover:rotate-0`}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-inner">
                <Image
                  src="/packages/paket-3d2n.jpg"
                  alt="Pantai Tropis & Perahu Tradisional Lombok"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-1.5 text-center">
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-800 tracking-tight block">
                  Pantai Pasir Putih
                </span>
                <span className="text-[8px] sm:text-[8.5px] text-amber-600 font-semibold block">
                  Perahu Tradisional
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

            {/* 3 Circular Feature Icons -> 3D Spheres dengan Motion Bergerak & Teks di Samping */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 transition-all duration-700 ease-out delay-300 transform ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20 md:translate-x-28'
              }`}
            >
              
              {/* Item 1: Pantai Eksotis */}
              <div className="flex items-center gap-3 p-2.5 sm:p-2 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-sky-100 hover:shadow-md transition-all duration-300 group">
                <div className="relative flex-shrink-0 animate-float-3d-1">
                  {/* Soft ambient glow */}
                  <div className="absolute inset-0 rounded-full bg-sky-400/35 blur-md group-hover:bg-sky-400/60 transition-all duration-300" />
                  {/* 3D Orb */}
                  <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-cyan-300 via-sky-500 to-blue-700 flex items-center justify-center text-white shadow-[0_8px_16px_-3px_rgba(2,132,199,0.5),inset_0_3px_5px_rgba(255,255,255,0.75),inset_0_-3px_5px_rgba(0,0,0,0.3)] border-t border-l border-white/60 group-hover:scale-110 transition-transform duration-300">
                    <span className="absolute top-1.5 left-2 w-3.5 h-1.5 rounded-full bg-white/70 blur-[0.4px] -rotate-45 pointer-events-none" />
                    <Palmtree className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.2] drop-shadow-[0_2px_3px_rgba(0,0,0,0.35)]" />
                  </div>
                </div>
                <div className="flex flex-col text-left min-w-0">
                  <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-sky-600 transition-colors leading-tight">
                    {t('Pantai Eksotis', 'Beautiful Beaches')}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                    {t('Gili & Pasir Putih', 'Gili & White Sands')}
                  </span>
                </div>
              </div>

              {/* Item 2: Panorama Megah */}
              <div className="flex items-center gap-3 p-2.5 sm:p-2 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-teal-100 hover:shadow-md transition-all duration-300 group">
                <div className="relative flex-shrink-0 animate-float-3d-2">
                  {/* Soft ambient glow */}
                  <div className="absolute inset-0 rounded-full bg-teal-400/35 blur-md group-hover:bg-teal-400/60 transition-all duration-300" />
                  {/* 3D Orb */}
                  <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-emerald-300 via-teal-500 to-sky-700 flex items-center justify-center text-white shadow-[0_8px_16px_-3px_rgba(13,148,136,0.5),inset_0_3px_5px_rgba(255,255,255,0.75),inset_0_-3px_5px_rgba(0,0,0,0.3)] border-t border-l border-white/60 group-hover:scale-110 transition-transform duration-300">
                    <span className="absolute top-1.5 left-2 w-3.5 h-1.5 rounded-full bg-white/70 blur-[0.4px] -rotate-45 pointer-events-none" />
                    <Mountain className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.2] drop-shadow-[0_2px_3px_rgba(0,0,0,0.35)]" />
                  </div>
                </div>
                <div className="flex flex-col text-left min-w-0">
                  <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-teal-600 transition-colors leading-tight">
                    {t('Panorama Megah', 'Stunning Landscapes')}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                    {t('Rinjani & Lembah', 'Mount & Valleys')}
                  </span>
                </div>
              </div>

              {/* Item 3: Budaya Otentik */}
              <div className="flex items-center gap-3 p-2.5 sm:p-2 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-rose-100 hover:shadow-md transition-all duration-300 group">
                <div className="relative flex-shrink-0 animate-float-3d-3">
                  {/* Soft ambient glow */}
                  <div className="absolute inset-0 rounded-full bg-rose-400/35 blur-md group-hover:bg-rose-400/60 transition-all duration-300" />
                  {/* 3D Orb */}
                  <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-rose-300 via-pink-500 to-purple-600 flex items-center justify-center text-white shadow-[0_8px_16px_-3px_rgba(225,29,72,0.45),inset_0_3px_5px_rgba(255,255,255,0.75),inset_0_-3px_5px_rgba(0,0,0,0.3)] border-t border-l border-white/60 group-hover:scale-110 transition-transform duration-300">
                    <span className="absolute top-1.5 left-2 w-3.5 h-1.5 rounded-full bg-white/70 blur-[0.4px] -rotate-45 pointer-events-none" />
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white/20 stroke-[2.2] drop-shadow-[0_2px_3px_rgba(0,0,0,0.35)]" />
                  </div>
                </div>
                <div className="flex flex-col text-left min-w-0">
                  <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-rose-600 transition-colors leading-tight">
                    {t('Budaya Otentik', 'Rich Culture')}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                    {t('Desa Adat Sasak', 'Sasak Heritage')}
                  </span>
                </div>
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
