'use client';

import React, { useState } from 'react';
import { X, Check, XCircle, Phone, MessageCircle, Calendar } from 'lucide-react';
import { ALL_PACKAGE_PRICE_MATRICES } from '@/data/packages';
import { useLanguage } from '@/context/LanguageContext';

interface PriceMatrixModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackageId?: string;
}

export default function PriceMatrixModal({
  isOpen,
  onClose,
  initialPackageId = '2d1n',
}: PriceMatrixModalProps) {
  const { lang, t } = useLanguage();
  const [activePackageId, setActivePackageId] = useState<string>(initialPackageId);

  if (!isOpen) return null;

  const currentMatrix =
    ALL_PACKAGE_PRICE_MATRICES.find((m) => m.id === activePackageId) ||
    ALL_PACKAGE_PRICE_MATRICES[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col border border-slate-100">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 bg-gradient-to-r from-sky-800 via-sky-700 to-sky-800 text-white sticky top-0 z-30">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-sky-200 block">
                Lombok Partner Tour & Travel Organizer
              </span>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white mt-0.5">
                {currentMatrix.name}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Tutup"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* 4 Package Duration Navigation Tabs */}
          <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-1 scrollbar-none">
            {ALL_PACKAGE_PRICE_MATRICES.map((pkg) => {
              const isActive = pkg.id === activePackageId;
              return (
                <button
                  key={pkg.id}
                  onClick={() => setActivePackageId(pkg.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-amber-400 text-slate-950 shadow-md scale-102 ring-2 ring-amber-300'
                      : 'bg-white/15 text-white hover:bg-white/25 border border-white/20'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{pkg.durationLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-5 sm:p-6 md:p-8 space-y-6">
          
          {/* Subheader info pill */}
          <div className="flex flex-wrap items-center justify-between gap-2 bg-sky-50 border border-sky-100 px-4 py-2.5 rounded-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-black text-sky-900">
                Pricelist Resmi · {currentMatrix.durationLabel}
              </span>
            </div>
            <span className="bg-amber-400 text-slate-950 text-xs font-black px-3 py-1 rounded-full shadow-2xs">
              {currentMatrix.minPaxNote}
            </span>
          </div>

          {/* Dynamic Price Table matching the flyers */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-sky-900 text-white font-extrabold text-center">
                  <th className="p-3 sm:p-3.5 border-r border-sky-800 text-left min-w-[110px]">
                    Jumlah Peserta
                  </th>
                  <th className="p-3 sm:p-3.5 border-r border-sky-800 bg-sky-800 min-w-[105px]">
                    Tanpa Hotel
                  </th>
                  <th className="p-3 sm:p-3.5 border-r border-sky-800 min-w-[105px]">
                    Bintang 2
                  </th>
                  <th className="p-3 sm:p-3.5 border-r border-sky-800 min-w-[105px]">
                    Bintang 3
                  </th>
                  <th className="p-3 sm:p-3.5 border-r border-sky-800 min-w-[105px]">
                    Bintang 4
                  </th>
                  <th className="p-3 sm:p-3.5 min-w-[105px] bg-sky-950">
                    Bintang 5
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-center font-bold text-slate-700">
                {currentMatrix.tiers.map((tier, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? 'bg-white hover:bg-sky-50/70' : 'bg-slate-50/70 hover:bg-sky-50/70'}
                  >
                    <td className="p-3 sm:p-3.5 text-left font-black text-slate-900 border-r border-slate-200">
                      {tier.paxRange}
                    </td>
                    <td className="p-3 sm:p-3.5 border-r border-slate-200 text-slate-800">
                      Rp {tier.tanpaHotel.toLocaleString('id-ID')}
                    </td>
                    <td className="p-3 sm:p-3.5 border-r border-slate-200 text-slate-800">
                      Rp {tier.bintang2.toLocaleString('id-ID')}
                    </td>
                    <td className="p-3 sm:p-3.5 border-r border-slate-200 text-sky-700 font-extrabold bg-sky-50/40">
                      Rp {tier.bintang3.toLocaleString('id-ID')}
                    </td>
                    <td className="p-3 sm:p-3.5 border-r border-slate-200 text-slate-800">
                      Rp {tier.bintang4.toLocaleString('id-ID')}
                    </td>
                    <td className="p-3 sm:p-3.5 text-slate-950 font-black bg-amber-50/60">
                      Rp {tier.bintang5.toLocaleString('id-ID')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Includes, Excludes & Catatan - IDENTICAL TO FLYERS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-1">
            
            {/* INCLUDE */}
            <div className="bg-emerald-50/60 p-5 rounded-2xl border border-emerald-100">
              <h4 className="text-xs font-black uppercase tracking-wider text-emerald-800 mb-3 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                INCLUDE:
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                <li>✔ Transportasi (All New Avanza / Menyesuaikan)</li>
                <li>✔ BBM (Bahan Bakar Minyak)</li>
                <li>✔ Driver Berpengalaman & Ramah</li>
                <li>✔ Parkir Seluruh Lokasi</li>
                <li>✔ Air Mineral Selama Tur</li>
                <li>✔ Tiket Masuk Objek Wisata</li>
                <li>✔ Akomodasi Hotel (Sesuai Pilihan)</li>
                <li>✔ Airport Transfer (PP)</li>
              </ul>
            </div>

            {/* EXCLUDE */}
            <div className="bg-rose-50/60 p-5 rounded-2xl border border-rose-100">
              <h4 className="text-xs font-black uppercase tracking-wider text-rose-800 mb-3 flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-rose-600" />
                EXCLUDE:
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                <li>✖ Tiket Pesawat ke/dari Lombok</li>
                <li>✖ Makan (Lunch & Dinner)</li>
                <li>✖ Pengeluaran Pribadi</li>
                <li>✖ Tip Driver (Sukarela)</li>
                <li>✖ Biaya Tambahan Diluar Itinerary</li>
              </ul>
            </div>

            {/* CATATAN */}
            <div className="bg-amber-50/60 p-5 rounded-2xl border border-amber-100 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-amber-900 mb-3">
                  CATATAN:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                  <li>• Harga berlaku untuk <strong>Minimal 2 Peserta</strong></li>
                  <li>• Harga dapat berubah pada periode High Season, Peak Season, dan Hari Libur Nasional</li>
                  <li>• Harga per orang (IDR)</li>
                  <li>• Itinerary dapat disesuaikan dengan kebutuhan</li>
                </ul>
              </div>

              <div className="mt-4 pt-3.5 border-t border-amber-200/80">
                <span className="text-[10px] uppercase font-bold text-slate-500 block">Booking & Konsultasi:</span>
                <span className="text-sm sm:text-base font-black text-slate-900 flex items-center gap-1.5 mt-0.5">
                  <Phone className="w-4 h-4 text-emerald-600" />
                  +62 878-2088-0547
                </span>
              </div>
            </div>

          </div>

          {/* Action CTA */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
            <span className="text-xs italic text-slate-500">
              Liburan Nyaman, Bersama Lombok Partner · Sahabat Resmi Liburan Anda
            </span>
            <a
              href={`https://wa.me/6287820880547?text=Halo%20Admin%20Lombok%20Partner!%20%F0%9F%8C%B4%20Saya%20tertarik%20dengan%20${encodeURIComponent(currentMatrix.name)}.%20Mohon%20info%20ketersediaan%20jadwal%20dan%20hotelnya.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md shadow-emerald-600/25 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat WhatsApp Admin (+62 878-2088-0547)</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
