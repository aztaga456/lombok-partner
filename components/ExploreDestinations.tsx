'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { MapPin, ArrowRight, Star, Clock, Users, Table } from 'lucide-react';
import { PackageItem } from '@/types';
import { LOMBOK_PACKAGES } from '@/data/packages';
import { useLanguage } from '@/context/LanguageContext';

interface ExploreDestinationsProps {
  onSelectPackage: (pkg: PackageItem) => void;
  onOpenPriceMatrix: () => void;
}

export default function ExploreDestinations({
  onSelectPackage,
  onOpenPriceMatrix,
}: ExploreDestinationsProps) {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
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
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredPackages =
    activeCategory === 'all'
      ? LOMBOK_PACKAGES
      : LOMBOK_PACKAGES.filter((p) => p.category === activeCategory);

  const categories = [
    { id: 'all', label: t('Semua Paket Resmi', 'All Official Packages') },
    { id: 'stay', label: t('Paket Menginap (2D1N – 5D4N)', 'Stay Tours (2D1N – 5D4N)') },
    { id: 'snorkeling', label: t('Private Snorkeling (3 Gili)', 'Private Snorkeling') },
    { id: 'oneday', label: t('One Day Trip', 'One Day Trips') },
  ];

  return (
    <section id="packages" ref={sectionRef} className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section: Eyebrow + Title + Table Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="w-7 h-[2.5px] bg-sky-600 rounded-full" />
              <span className="text-xs md:text-sm font-bold tracking-widest text-sky-600 uppercase">
                {t('PAKET & PRICELIST RESMI', 'OFFICIAL PACKAGES & PRICELIST')}
              </span>
            </div>

            {/* Section Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {t('Paket Wisata Pilihan', 'Explore Your Favorite')}{' '}
              <span className="text-sky-600">
                {t('Lombok Partner', 'Destinations')}
              </span>
            </h2>
          </div>

          {/* Action Button: View Full Price Matrix Table */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenPriceMatrix}
              className="inline-flex items-center gap-2 border-2 border-sky-500 text-sky-600 hover:bg-sky-500 hover:text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all duration-200 cursor-pointer shadow-xs"
            >
              <Table className="w-4 h-4" />
              <span>{t('Tabel Pricelist (2D1N – 5D4N)', 'Full Price Tables (2D1N – 5D4N)')}</span>
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-sky-600 text-white shadow-sm shadow-sky-500/30'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* EXACT PACKAGES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {filteredPackages.map((pkg, idx) => (
            <div
              key={pkg.id}
              onClick={() => onSelectPackage(pkg)}
              style={{ transitionDelay: `${idx * 150}ms` }}
              className={`group bg-white/95 backdrop-blur-md rounded-[28px] overflow-hidden border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_rgba(14,165,233,0.12)] transition-all duration-700 ease-out flex flex-col cursor-pointer transform hover:-translate-y-1.5 ${
                isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-8'
              }`}
            >
              {/* Card Photo (Top Half) */}
              <div className="relative h-60 sm:h-68 w-full overflow-hidden bg-slate-100">
                <Image
                  src={pkg.image}
                  alt={pkg.name[lang]}
                  fill
                  className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                />

                {/* Gradient vignette for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  {/* Min / Max Pax Badge + Best Seller Badge */}
                  <div className="flex items-center gap-1.5">
                    <div className="bg-sky-600/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                      {pkg.minPax ? `Min. ${pkg.minPax} Peserta` : `Maks. ${pkg.maxPax} Orang`}
                    </div>
                    {pkg.id === 'paket-3d2n' && (
                      <span className="bg-orange-500 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-md tracking-wider">
                        BEST SELLER
                      </span>
                    )}
                  </div>

                  {/* Rating + Heart Favorite Button */}
                  <div className="flex items-center gap-2 pointer-events-auto">
                    <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-sm border border-white/60">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="text-xs font-bold text-slate-800">{pkg.rating}</span>
                      <span className="text-[10px] text-slate-400">({pkg.reviewsCount})</span>
                    </div>
                  </div>
                </div>

                {/* Duration Badge Bottom Left */}
                <div className="absolute bottom-4 left-4 bg-slate-900/75 backdrop-blur-md text-white px-3 py-1 rounded-full flex items-center gap-1.5 text-xs font-medium border border-white/20">
                  <Clock className="w-3.5 h-3.5 text-sky-400" />
                  <span>{pkg.duration[lang]}</span>
                </div>
              </div>

              {/* Card Bottom Area */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div>
                  {/* Location Title */}
                  <div className="flex items-center gap-1.5 text-xs font-bold text-sky-600 uppercase tracking-wider mb-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{pkg.location[lang]}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-sky-600 transition-colors">
                    {pkg.name[lang]}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {pkg.shortDescription[lang]}
                  </p>

                  {/* Highlights checklist from flyer */}
                  {pkg.highlights && (
                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                      {pkg.highlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0" />
                          <span className="truncate">{hl[lang]}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Price and CTA Section (Neat 2-tier layout) */}
                <div className="mt-5 pt-4 border-t border-slate-100/90 flex flex-col gap-3">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase font-bold tracking-wider leading-none mb-1.5">
                      {t('Harga Paket Resmi', 'Official Package Price')}
                    </span>
                    <div className="flex items-baseline gap-1.5 flex-wrap">
                      <span className="text-2xl sm:text-3xl font-black text-sky-600 tracking-tight">
                        Rp {pkg.price.toLocaleString('id-ID')}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {pkg.priceUnit[lang]}
                      </span>
                    </div>
                  </div>

                  <div className="w-full py-2.5 sm:py-3 px-4 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 group-hover:from-sky-600 group-hover:to-blue-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-sky-500/20 group-hover:shadow-lg transition-all duration-200 cursor-pointer">
                    <span>{t('Detail & Pesan', 'View & Book')}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
