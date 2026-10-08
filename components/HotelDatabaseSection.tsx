'use client';

import React, { useState } from 'react';
import { Building2, Star, MapPin, CheckCircle, ShieldCheck, HeartHandshake, MessageCircle, Sparkles } from 'lucide-react';
import { HOTEL_DATABASE } from '@/data/packages';
import { useLanguage } from '@/context/LanguageContext';

export default function HotelDatabaseSection() {
  const { lang, t } = useLanguage();
  // Default to first location (Kuta Mandalika)
  const [selectedLocation, setSelectedLocation] = useState<string>(HOTEL_DATABASE[0]?.location || 'Kuta Mandalika');

  // Exactly 4 location tabs corresponding to the 4 places in data
  const locationTabs = HOTEL_DATABASE.map((loc) => ({
    id: loc.location,
    label: loc.location,
  }));

  // Find the single active location data to display below the buttons
  const activeLocationData =
    HOTEL_DATABASE.find((loc) => loc.location.toLowerCase() === selectedLocation.toLowerCase()) ||
    HOTEL_DATABASE[0];

  return (
    <section id="hotels" className="py-20 bg-slate-50 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-2.5">
            <span className="w-7 h-[2px] bg-sky-600 rounded-full" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-sky-600 uppercase">
              {t('REKANAN RESMI PENGINAPAN', 'OFFICIAL HOTEL PARTNERS')}
            </span>
            <span className="w-7 h-[2px] bg-sky-600 rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            {t('PILIHAN HOTEL & RESORT', 'RECOMMENDED HOTELS & RESORTS')}{' '}
            <span className="text-sky-600">LOMBOK PARTNER</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {t(
              'Temukan penginapan terbaik di Lombok sesuai kebutuhanmu — dari resort tepi pantai bintang 5 hingga hotel strategis ramah anggaran.',
              'Find the best accommodations in Lombok suited to your preferences — from 5-star beachfront luxury to budget-friendly stays.'
            )}
          </p>

          {/* 4 Location Filter Pills: 2 rows on mobile (2 atas, 2 bawah), flex row on desktop */}
          <div className="grid grid-cols-2 sm:flex sm:items-center sm:justify-center gap-2.5 sm:gap-3 mt-7 max-w-sm sm:max-w-none mx-auto w-full px-2 sm:px-0">
            {locationTabs.map((tab) => {
              const isActive = selectedLocation === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedLocation(tab.id)}
                  className={`text-xs sm:text-sm font-bold px-3 sm:px-5 py-2.5 rounded-full transition-all duration-200 cursor-pointer text-center justify-center flex items-center whitespace-nowrap ${
                    isActive
                      ? 'bg-sky-600 text-white shadow-md shadow-sky-500/25 ring-2 ring-sky-600/20 scale-102'
                      : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/90 shadow-2xs'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Display exactly 1 active location below the buttons */}
        <div className="max-w-4xl mx-auto">
          {activeLocationData && (
            <div
              key={activeLocationData.location}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 animate-fadeIn"
            >
              {/* Card Header with Location */}
              <div className="bg-gradient-to-r from-sky-600 via-sky-600 to-sky-700 px-6 sm:px-8 py-5 flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-xs flex-shrink-0 shadow-inner">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-sky-100 uppercase tracking-wider block">
                      {t('Kawasan Terpilih', 'Selected Region')}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black tracking-wide uppercase">
                      {activeLocationData.location}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] sm:text-xs font-bold px-3 py-1.5 rounded-full bg-white/20 text-white uppercase tracking-wider border border-white/25">
                    {t('Hotel Mitra Resmi', 'Official Partner Hotels')}
                  </span>
                </div>
              </div>

              {/* Tiers List */}
              <div className="p-6 sm:p-8 space-y-4 sm:space-y-5">
                {activeLocationData.tiers.map((tier, tIdx) => (
                  <div
                    key={tIdx}
                    className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 p-4 sm:p-4.5 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-sky-200/80 hover:bg-sky-50/30 transition-colors"
                  >
                    {/* Stars Badge */}
                    <div className="flex-shrink-0 flex items-center justify-between sm:justify-start gap-2 sm:w-36 bg-white px-3.5 py-2 rounded-xl border border-slate-200/80 shadow-2xs">
                      <span className="text-xs font-black text-slate-800">
                        {t(`Bintang ${tier.stars}`, `${tier.stars}-Star`)}
                      </span>
                      <div className="flex">
                        {[...Array(tier.stars)].map((_, s) => (
                          <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>

                    {/* Hotel Names as Pills */}
                    <div className="flex-grow flex flex-wrap gap-1.5 sm:gap-2">
                      {tier.hotels.map((hotelName, hIdx) => (
                        <span
                          key={hIdx}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200/70 text-xs sm:text-[13px] font-medium text-slate-800 shadow-2xs hover:border-sky-300 transition-colors"
                        >
                          <Building2 className="w-3 h-3 text-sky-600 flex-shrink-0" />
                          {hotelName}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Consultation / Booking CTA for this location */}
              <div className="px-6 sm:px-8 py-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-sky-600 flex-shrink-0" />
                  <span>
                    {t(
                      `Bisa request upgrade atau custom pilihan hotel di ${activeLocationData.location}.`,
                      `Custom or hotel upgrades in ${activeLocationData.location} available on request.`
                    )}
                  </span>
                </div>
                <a
                  href={`https://wa.me/6287820880547?text=${encodeURIComponent(
                    `Halo Admin Lombok Partner, saya ingin info ketersediaan paket dengan hotel di kawasan ${activeLocationData.location}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-sky-600 hover:text-sky-700 hover:underline flex-shrink-0 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t('Tanya Admin via WhatsApp', 'Inquire via WhatsApp')}
                </a>
              </div>
            </div>
          )}
        </div>

        {/* 4 Bottom Value Pillars */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
              <Building2 className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-snug">
                {t('Pilihan Hotel Terlengkap', 'Complete Hotel Choices')}
              </h4>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {t('Bintang 2 hingga resort bintang 5', '2-Star up to 5-Star luxury')}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-snug">
                {t('Harga Terbaik Berkualitas', 'Best Quality Rates')}
              </h4>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {t('Kontrak harga agen resmi', 'Direct official contract rates')}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
              <HeartHandshake className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-snug">
                {t('Layanan Ramah 24/7', 'Friendly 24/7 Support')}
              </h4>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {t('Pendampingan reservasi fleksibel', 'Flexible reservation assistance')}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-snug">
                {t('Booking Mudah & Aman', 'Easy & Safe Booking')}
              </h4>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {t('Konfirmasi cepat via WhatsApp', 'Instant WhatsApp confirmation')}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

