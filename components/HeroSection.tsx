'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  MapPin,
  ArrowRight,
  Play,
  Star,
  Plane,
  Users,
  Compass,
  Headphones,
  CheckCircle2,
  Building2,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface HeroSectionProps {
  onExploreClick: () => void;
  onWatchVideoClick?: () => void;
  onCheckHotelsClick?: () => void;
  onSelectFeaturedPackage?: () => void;
}

export default function HeroSection({
  onExploreClick,
  onWatchVideoClick,
  onCheckHotelsClick,
  onSelectFeaturedPackage,
}: HeroSectionProps) {
  const { lang, t } = useLanguage();

  // Rotating Headline Words Loop:
  // 1. Mulai Petualangan -> 2. Nikmati Momen -> 3. Ciptakan Kenangan
  const HEADLINE_ROTATION = {
    id: ['Mulai Petualangan', 'Nikmati Momen', 'Ciptakan Kenangan'],
    en: ['Start Adventure', 'Enjoy the Moment', 'Create Memories'],
  };

  const words = HEADLINE_ROTATION[lang] || HEADLINE_ROTATION.id;
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const currentTargetText = words[currentWordIndex % words.length];
  const [displayText, setDisplayText] = useState(words[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setDisplayText(words[currentWordIndex % words.length]);
    setIsDeleting(false);
  }, [lang]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentTargetText) {
      // Selesai ditulis penuh: tahan selama 2.2 detik agar dapat dibaca dengan jelas
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && displayText === '') {
      // Selesai terhapus: jeda 300ms sebelum masuk ke kata berikutnya
      timeout = setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsDeleting(false);
      }, 300);
    } else if (isDeleting) {
      // Efek menghapus karakter demi karakter
      timeout = setTimeout(() => {
        setDisplayText(currentTargetText.slice(0, displayText.length - 1));
      }, 45);
    } else {
      // Efek mengetik karakter demi karakter
      timeout = setTimeout(() => {
        setDisplayText(currentTargetText.slice(0, displayText.length + 1));
      }, 95);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTargetText, words.length]);

  return (
    <div className="relative w-full">
      {/* 1. Main Hero Stage */}
      <section
        id="home"
        className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 sm:pt-28 md:pt-32 pb-24 sm:pb-28 overflow-hidden"
      >
        {/* Background Image: Responsive Ultra-Sharp HD Images (Mobile 9:16 & Desktop 16:9) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Mobile Background (Vertical Portrait 9:16 - 1080x1920 Ultra Sharp, Zero Blur) */}
          <div className="block md:hidden absolute inset-0">
            <Image
              src="/hero-lombok-beach-mobile.webp"
              alt="Pantai Tropis Lombok Partner"
              fill
              priority
              unoptimized
              className="object-cover object-center"
            />
          </div>

          {/* Desktop/Tablet Background (Widescreen 16:9 - 2560x1440 QHD Ultra Sharp) */}
          <div className="hidden md:block absolute inset-0">
            <Image
              src="/hero-lombok-beach.webp"
              alt="Pantai Tropis Lombok Partner"
              fill
              priority
              unoptimized
              className="object-cover object-center"
            />
          </div>

          {/* Natural daylight & cinematic readability gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-950/25 to-transparent z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-slate-950/20 z-[1]" />
        </div>

        {/* Hero Content: 2-Column Layout matching reference image */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 sm:pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: Main Headline, Subtitle, Dual CTAs & Social Proof Rating */}
            <div className="lg:col-span-7 text-left max-w-2xl">
              
              {/* Top Location Pill (Glassmorphism) */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md mb-5 hover:bg-white/30 transition-all cursor-default">
                <MapPin className="w-3.5 h-3.5 text-sky-300 fill-sky-300" />
                <span>Lombok, Indonesia</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-1" />
                <span className="text-[11px] text-emerald-300 font-bold hidden sm:inline">
                  {t('Trip Resmi Tersedia', 'Official Trips Available')}
                </span>
              </div>

              {/* Huge Bold Headline dengan Animasi Tulisan Tangan Berganti Terus Menerus */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.14] mb-5 drop-shadow-lg">
                <span className="block mb-1">{t('Jelajahi Lombok,', 'Travel Further,')}</span>
                
                {/* Container Terkunci: Ghost Text mempertahankan tinggi & dimensi konstan */}
                <span className="relative inline-block font-dearing font-bold whitespace-nowrap text-[1.12em] sm:text-[1.18em] xl:text-[1.22em] leading-none">
                  {/* 1. Ghost text (invisible) - Menjaga lebar h1 tetap permanen dari kata terpanjang */}
                  <span className="invisible select-none opacity-0 pointer-events-none inline-flex items-center" aria-hidden="true">
                    <span>Mulai Petualangan</span>
                    <span className="inline-block w-[3.5px] h-[0.75em] ml-1.5" />
                  </span>

                  {/* 2. Teks aktif yang sedang diketik & berganti secara continue */}
                  <span className="absolute inset-0 flex items-center text-orange-500 whitespace-nowrap drop-shadow-[0_4px_22px_rgba(249,115,22,0.75)]">
                    <span>{displayText}</span>
                    <span className="inline-block w-[3.5px] h-[0.75em] bg-orange-500 ml-1.5 rounded-full animate-pulse shadow-[0_0_14px_#f97316] flex-shrink-0" />
                  </span>
                </span>
              </h1>

              {/* Subtitle Description - Tetap diam dan stabil */}
              <p className="text-sm sm:text-base md:text-lg text-slate-100/95 font-normal leading-relaxed mb-8 max-w-xl drop-shadow-sm">
                {t(
                  'Temukan surga tropis Lombok dengan pengalaman premium: Private Snorkeling 3 Gili, keindahan Sirkuit Mandalika & Pantai Kuta, kesejukan air terjun Senaru Sembalun, serta pilihan hotel rekanan bintang 2–5 terlengkap.',
                  'Discover unique tropical paradise with premium experiences designed for discerning travelers. Explore 3 Gili private snorkeling, iconic Mandalika beach, and scenic waterfalls with Lombok Partner.'
                )}
              </p>

              {/* Dual Action CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8">
                {/* Primary Blue Button */}
                <button
                  onClick={onExploreClick}
                  className="inline-flex items-center gap-2.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 active:from-sky-600 active:to-blue-700 text-white font-bold text-xs sm:text-sm md:text-base px-7 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-xl shadow-sky-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group cursor-pointer"
                >
                  <span>{t('Jelajahi Paket Wisata', 'Explore Destinations')}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                {/* Secondary Frosted Glass Pill Button: Cek Pilihan Hotel */}
                <button
                  onClick={onCheckHotelsClick || onWatchVideoClick}
                  className="inline-flex items-center gap-2.5 bg-white/15 hover:bg-white/25 active:bg-white/35 text-white font-semibold text-xs sm:text-sm md:text-base px-6 sm:px-7 py-3.5 sm:py-4 rounded-full border border-white/60 backdrop-blur-md shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group cursor-pointer"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/25 flex items-center justify-center text-white group-hover:bg-white group-hover:text-sky-600 transition-colors">
                    <Building2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </div>
                  <span>{t('Cek Pilihan Hotel', 'Explore Hotels')}</span>
                </button>
              </div>

              {/* Social Proof: 4 Overlapping Avatars + 5 Stars Rating */}
              <div className="inline-flex items-center gap-3.5 p-2 sm:p-2.5 pr-4 rounded-full glass-pill backdrop-blur-md shadow-lg">
                <div className="flex -space-x-2.5">
                  <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                      alt="Traveler avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                      alt="Traveler avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <Image
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                      alt="Traveler avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
                      alt="Traveler avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] sm:text-xs text-white/95 font-semibold mt-0.5">
                    <strong>4.9 / 5</strong> · {t('+25.000 Wisatawan Puas', '+25,000 Happy Guests')}
                  </span>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Floating Card Glassmorphism dengan Garis Sinar Berjalan */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-sm relative rounded-[28px] p-[2.5px] overflow-hidden shadow-2xl group transform hover:-translate-y-1 transition-all duration-300">
                
                {/* Layer 1: Ambient Glowing Halo di belakang garis bersinar */}
                <div
                  className="absolute inset-[-150%] animate-border-beam pointer-events-none blur-md opacity-90"
                  style={{
                    background:
                      'conic-gradient(from 0deg, transparent 0deg 300deg, rgba(249, 115, 22, 0.8) 330deg, #38bdf8 348deg, #ffffff 360deg)',
                  }}
                />

                {/* Layer 2: Garis Bersinar Tajam (Radiant Laser Line) Berputar Memutari Kotak */}
                <div
                  className="absolute inset-[-150%] animate-border-beam pointer-events-none"
                  style={{
                    background:
                      'conic-gradient(from 0deg, transparent 0deg 315deg, #0284c7 335deg, #38bdf8 350deg, #ffffff 360deg)',
                  }}
                />

                {/* Layer 3: Konten Kartu Kaca Asli (True Frosted Glassmorphism) */}
                <div className="relative rounded-[26px] bg-white/20 hover:bg-white/25 backdrop-blur-2xl p-6 sm:p-7 text-white border border-white/40 shadow-2xl h-full w-full">
                  
                  {/* Top Badge: Airplane Icon + Best Seller in Orange */}
                  <div className="flex items-center justify-between text-xs text-white/95 mb-4 pb-3 border-b border-white/25">
                    <div className="flex items-center gap-1.5 font-bold tracking-wider uppercase text-sky-100">
                      <Plane className="w-4 h-4 text-sky-200" />
                      <span>{t('Paket Favorit', 'Featured Trip')}</span>
                    </div>
                    <span className="bg-orange-500 text-white text-[10px] font-extrabold px-3 py-0.5 rounded-full shadow-sm tracking-wide">
                      BEST SELLER
                    </span>
                  </div>

                  {/* Package Title */}
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-sky-200 uppercase tracking-wider mb-1">
                    <MapPin className="w-3.5 h-3.5 text-sky-300" />
                    <span>Mandalika, 3 Gili & Mataram</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight tracking-tight mb-2 drop-shadow-sm">
                    {t('Paket Wisata Lombok 3D2N', 'Lombok Tour Package 3D2N')}
                  </h3>

                  {/* Highlights Bullet List (Matches 3D2N card) */}
                  <div className="space-y-1.5 mb-4 text-[11px] sm:text-xs text-white/95">
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-300 mt-1.5 flex-shrink-0" />
                      <span>{t('Kombinasi sempurna: Pantai Selatan + Snorkeling 3 Gili', 'Best combination: South Coast + 3 Gili Snorkeling')}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-300 mt-1.5 flex-shrink-0" />
                      <span>{t('Spot Patung Bawah Laut The Nest & Penyu Liar', 'The Nest Underwater Statues & Wild Turtles')}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-300 mt-1.5 flex-shrink-0" />
                      <span>{t('Tersedia pilihan Tanpa Hotel & Bintang 2 s/d Bintang 5', 'Available: No Hotel & 2-Star to 5-Star Hotel')}</span>
                    </div>
                  </div>

                  {/* Price Display */}
                  <div className="pt-2 border-t border-white/20">
                    <span className="text-[10px] uppercase tracking-wider text-slate-100/90 font-bold block">
                      {t('HARGA PAKET RESMI', 'OFFICIAL PACKAGE PRICE')}
                    </span>
                    <div className="flex items-baseline gap-1 mt-0.5 mb-0.5">
                      <span className="text-3xl sm:text-4xl font-black text-white tracking-tight drop-shadow-md">
                        Rp 900.000
                      </span>
                    </div>
                    <span className="text-xs text-slate-100/95 font-medium block">
                      {t('/ orang (mulai dari)', '/ person (starting from)')}
                    </span>
                  </div>

                  {/* Detail & Pesan Button */}
                  <button
                    onClick={onSelectFeaturedPackage || onExploreClick}
                    className="w-full mt-5 bg-white hover:bg-sky-50 active:bg-sky-100 text-slate-900 font-extrabold text-sm py-3 px-6 rounded-full shadow-xl hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{t('Detail & Pesan', 'Details & Book')}</span>
                    <ArrowRight className="w-4 h-4 text-sky-600" />
                  </button>

                </div>
              </div>
            </div>

          </div>
        </div>

        {/* FADE GRADASI ANTARA SECTION DI BAWAHNYA (Smooth gradient fade into destination section) */}
        <div className="absolute bottom-0 left-0 right-0 h-40 sm:h-52 bg-gradient-to-b from-transparent via-white/70 to-white pointer-events-none z-10" />
      </section>

      {/* 2. Floating Glassmorphism Quick Stats Bar (Bridging Hero and Section Below) */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 -mt-10 sm:-mt-14 mb-8 sm:mb-12">
        <div className="glass-panel rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border border-white/60 backdrop-blur-2xl grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/20 text-slate-900">
          
          {/* Stat 1 */}
          <div className="flex items-center gap-3 sm:gap-4 p-2 sm:px-4">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-sky-500/20 text-sky-700 flex items-center justify-center flex-shrink-0 border border-sky-400/40">
              <Users className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight block">
                +25,000
              </span>
              <span className="text-xs text-slate-600 font-semibold block leading-tight">
                {t('Wisatawan Puas', 'Happy Guests')}
              </span>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-3 sm:gap-4 p-2 sm:px-4 pt-3 sm:pt-2">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-amber-500/20 text-amber-700 flex items-center justify-center flex-shrink-0 border border-amber-400/40">
              <Star className="w-6 h-6 fill-amber-500 text-amber-500" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight block">
                99%
              </span>
              <span className="text-xs text-slate-600 font-semibold block leading-tight">
                {t('Tingkat Kepuasan', 'Satisfaction Rate')}
              </span>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-3 sm:gap-4 p-2 sm:px-4 pt-3 sm:pt-2">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-emerald-500/20 text-emerald-700 flex items-center justify-center flex-shrink-0 border border-emerald-400/40">
              <Compass className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight block">
                150+
              </span>
              <span className="text-xs text-slate-600 font-semibold block leading-tight">
                {t('Pilihan Destinasi & Hotel', 'Destinations & Hotels')}
              </span>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center gap-3 sm:gap-4 p-2 sm:px-4 pt-3 sm:pt-2">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-purple-500/20 text-purple-700 flex items-center justify-center flex-shrink-0 border border-purple-400/40">
              <Headphones className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight block">
                24/7
              </span>
              <span className="text-xs text-slate-600 font-semibold block leading-tight">
                {t('Layanan Siaga', 'Premium Support')}
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
