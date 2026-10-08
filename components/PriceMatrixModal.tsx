'use client';

import React from 'react';
import { X, Check, XCircle, Phone, Sparkles, MessageCircle } from 'lucide-react';
import { PRICE_TIERS_2D1N } from '@/data/packages';
import { useLanguage } from '@/context/LanguageContext';

interface PriceMatrixModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTier?: (tier: string) => void;
}

export default function PriceMatrixModal({ isOpen, onClose }: PriceMatrixModalProps) {
  const { lang, t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col border border-slate-100">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-sky-700 text-white sticky top-0 z-30">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-sky-200 block">
              Lombok Partner Tour & Travel
            </span>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              Price List PAKET WISATA LOMBOK 2 HARI 1 MALAM
            </h3>
            <span className="inline-block mt-1 bg-amber-400 text-slate-900 text-xs font-black px-2.5 py-0.5 rounded-full">
              Minimal 2 Peserta
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Tutup"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-6">
          
          {/* Price Table - EXACT COPY OF FLYER 1 */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-sky-900 text-white font-extrabold text-center">
                  <th className="p-3 sm:p-3.5 border-r border-sky-800 text-left">Jumlah Peserta</th>
                  <th className="p-3 sm:p-3.5 border-r border-sky-800 bg-sky-800">Tanpa Hotel</th>
                  <th className="p-3 sm:p-3.5 border-r border-sky-800">Bintang 2</th>
                  <th className="p-3 sm:p-3.5 border-r border-sky-800">Bintang 3</th>
                  <th className="p-3 sm:p-3.5 border-r border-sky-800">Bintang 4</th>
                  <th className="p-3 sm:p-3.5">Bintang 5</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-center font-bold text-slate-700">
                {PRICE_TIERS_2D1N.map((tier, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? 'bg-white hover:bg-sky-50/60' : 'bg-slate-50/70 hover:bg-sky-50/60'}
                  >
                    <td className="p-3 sm:p-3.5 text-left font-black text-slate-900 border-r border-slate-200">
                      {tier.paxRange}
                    </td>
                    <td className="p-3 sm:p-3.5 border-r border-slate-200 text-slate-800">
                      {tier.tanpaHotel.toLocaleString('id-ID')}
                    </td>
                    <td className="p-3 sm:p-3.5 border-r border-slate-200 text-slate-800">
                      {tier.bintang2.toLocaleString('id-ID')}
                    </td>
                    <td className="p-3 sm:p-3.5 border-r border-slate-200 text-sky-700 font-extrabold">
                      {tier.bintang3.toLocaleString('id-ID')}
                    </td>
                    <td className="p-3 sm:p-3.5 border-r border-slate-200 text-slate-800">
                      {tier.bintang4.toLocaleString('id-ID')}
                    </td>
                    <td className="p-3 sm:p-3.5 text-slate-900 font-black bg-amber-50/40">
                      {tier.bintang5.toLocaleString('id-ID')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Includes, Excludes & Catatan - EXACT FROM FLYER 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            
            {/* INCLUDE */}
            <div className="bg-emerald-50/60 p-5 rounded-2xl border border-emerald-100">
              <h4 className="text-xs font-black uppercase tracking-wider text-emerald-800 mb-3 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                INCLUDE:
              </h4>
              <ul className="space-y-2 text-xs text-slate-700 font-medium">
                <li>✔ Transportasi (All New Avanza / Menyesuaikan)</li>
                <li>✔ BBM</li>
                <li>✔ Driver Berpengalaman</li>
                <li>✔ Parkir</li>
                <li>✔ Air Mineral</li>
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
              <ul className="space-y-2 text-xs text-slate-700 font-medium">
                <li>✖ Tiket Pesawat</li>
                <li>✖ Makan (Lunch & Dinner)</li>
                <li>✖ Pengeluaran Pribadi</li>
                <li>✖ Tip Driver</li>
                <li>✖ Biaya Tambahan Diluar Itinerary</li>
              </ul>
            </div>

            {/* CATATAN */}
            <div className="bg-amber-50/60 p-5 rounded-2xl border border-amber-100 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-amber-900 mb-3">
                  CATATAN:
                </h4>
                <ul className="space-y-2 text-xs text-slate-700 font-medium">
                  <li>• Harga berlaku untuk <strong>Minimal 2 Peserta</strong></li>
                  <li>• Harga dapat berubah pada periode High Season, Peak Season, dan Hari Libur Nasional</li>
                  <li>• Harga per orang (IDR)</li>
                  <li>• Itinerary dapat disesuaikan dengan kebutuhan</li>
                </ul>
              </div>

              <div className="mt-4 pt-4 border-t border-amber-200">
                <span className="text-[10px] uppercase font-bold text-slate-500 block">Booking Sekarang:</span>
                <span className="text-base font-black text-slate-900 flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-emerald-600" />
                  +62 878-2088-0547
                </span>
              </div>
            </div>

          </div>

          {/* Action CTA */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs italic text-slate-500">
              Liburan Nyaman, Bersama Lombok Partner
            </span>
            <a
              href="https://wa.me/6287820880547?text=Halo%20Lombok%20Partner,%20saya%20tertarik%20dengan%20Paket%20Wisata%202%20Hari%201%20Malam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-6 py-3 rounded-full shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat WhatsApp: +62 878-2088-0547</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
