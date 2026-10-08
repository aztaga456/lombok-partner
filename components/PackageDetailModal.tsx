'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  X,
  MapPin,
  Clock,
  Star,
  CheckCircle2,
  XCircle,
  Calendar,
  Users,
  ShieldCheck,
  ArrowRight,
  Building2,
} from 'lucide-react';
import { PackageItem, BookingFormData, BookingResult } from '@/types';
import { useLanguage } from '@/context/LanguageContext';

interface PackageDetailModalProps {
  packageItem: PackageItem | null;
  onClose: () => void;
  onConfirmBooking: (result: BookingResult) => void;
}

export default function PackageDetailModal({
  packageItem,
  onClose,
  onConfirmBooking,
}: PackageDetailModalProps) {
  const { lang, t } = useLanguage();

  if (!packageItem) return null;

  // Booking Form State
  const [formData, setFormData] = useState<BookingFormData>({
    customerName: '',
    whatsapp: '',
    email: '',
    travelDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    adults: packageItem.minPax || 2,
    children: 0,
    hotelOption: 'bintang3',
    note: '',
  });

  const [activeTab, setActiveTab] = useState<'itinerary' | 'inclusions'>('itinerary');
  const [submitting, setSubmitting] = useState(false);

  // Calculate price dynamically based on package type
  const calculatePricing = () => {
    // 1. If it's a stay package with Tiered Matrix (2D1N, 3D2N, 4D3N, 5D4N)
    if (packageItem.tierPrices && packageItem.tierPrices.length > 0) {
      const totalParticipants = formData.adults + formData.children;
      // find tier
      const tier =
        packageItem.tierPrices.find(
          (tp) => totalParticipants >= tp.minPax && totalParticipants <= tp.maxPax
        ) || packageItem.tierPrices[0];

      let pricePerPax = tier.bintang3;
      if (formData.hotelOption === 'tanpa') pricePerPax = tier.tanpaHotel;
      if (formData.hotelOption === 'bintang2') pricePerPax = tier.bintang2;
      if (formData.hotelOption === 'bintang3') pricePerPax = tier.bintang3;
      if (formData.hotelOption === 'bintang4') pricePerPax = tier.bintang4;
      if (formData.hotelOption === 'bintang5') pricePerPax = tier.bintang5;

      const adultTotal = formData.adults * pricePerPax;
      const childTotal = formData.children * (pricePerPax * 0.5); // Children 50% discount per PRD
      return {
        unitPrice: pricePerPax,
        total: adultTotal + childTotal,
        isFixedPackage: false,
      };
    }

    // 2. If it's Gili Trilogy (Fixed Private Boat Package Rp 1.000.000 up to 6 pax)
    if (packageItem.id === 'gili-trilogy') {
      return {
        unitPrice: 1000000,
        total: 1000000, // Fixed private boat price
        isFixedPackage: true,
      };
    }

    // 3. One Day Trips (per pack)
    const adultTotal = formData.adults * packageItem.price;
    const childTotal = formData.children * (packageItem.price * 0.5);
    return {
      unitPrice: packageItem.price,
      total: adultTotal + childTotal,
      isFixedPackage: false,
    };
  };

  const pricing = calculatePricing();

  const generateBookingCode = () => {
    const randomDigits = Math.floor(10000 + Math.random() * 90000);
    return `LP-${randomDigits}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.customerName || !formData.whatsapp || !formData.travelDate) {
      alert(t('Harap lengkapi nama lengkap, nomor WhatsApp, dan tanggal.', 'Please fill out your name, WhatsApp number, and date.'));
      return;
    }

    setSubmitting(true);

    const bookingResult: BookingResult = {
      ...formData,
      bookingCode: generateBookingCode(),
      packageItem,
      totalPrice: pricing.total,
      status: 'Baru',
      createdAt: new Date().toISOString(),
    };

    setTimeout(() => {
      setSubmitting(false);
      onConfirmBooking(bookingResult);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col border border-slate-100">
        
        {/* Sticky Header with Close Button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white/95 backdrop-blur-md sticky top-0 z-30">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              {t('Detail Paket Resmi & Pemesanan', 'Official Package Details & Booking')}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Tutup"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 md:p-8 flex-grow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* LEFT COLUMN: Package Information */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              
              {/* Cover Image & Badges */}
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={packageItem.image}
                  alt={packageItem.name[lang]}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500 text-xs font-semibold mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{packageItem.location[lang]}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold leading-tight text-white drop-shadow-sm">
                    {packageItem.name[lang]}
                  </h3>
                </div>
              </div>

              {/* Highlights Pill Row */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-sky-50 text-sky-700 border border-sky-100">
                  <Clock className="w-4 h-4 text-sky-500" />
                  <span>{packageItem.duration[lang]}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>{packageItem.rating} / 5.0 ({packageItem.reviewsCount} review)</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>100% Legal & Terpercaya</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  {t('Tentang Paket Ini', 'About This Package')}
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {packageItem.shortDescription[lang]}
                </p>
              </div>

              {/* Navigation Tabs (Itinerary vs Inclusions) */}
              <div className="border-b border-slate-200 flex space-x-6">
                <button
                  onClick={() => setActiveTab('itinerary')}
                  className={`pb-3 text-sm font-bold tracking-wide transition-colors relative cursor-pointer ${
                    activeTab === 'itinerary'
                      ? 'text-sky-600'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {t('Rencana Perjalanan (Itinerary)', 'Itinerary Breakdown')}
                  {activeTab === 'itinerary' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-600 rounded-full" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('inclusions')}
                  className={`pb-3 text-sm font-bold tracking-wide transition-colors relative cursor-pointer ${
                    activeTab === 'inclusions'
                      ? 'text-sky-600'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {t('Fasilitas Include & Exclude', 'Included & Excluded')}
                  {activeTab === 'inclusions' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-600 rounded-full" />
                  )}
                </button>
              </div>

              {/* Tab 1: Itinerary List */}
              {activeTab === 'itinerary' && (
                <div className="space-y-3.5">
                  {packageItem.itinerary.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100"
                    >
                      <div className="w-20 flex-shrink-0 text-xs font-black text-sky-700 bg-sky-100/70 px-2.5 py-1 rounded-lg text-center">
                        {item.timeOrDay}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-800">
                          {item.title[lang]}
                        </span>
                        <span className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {item.desc[lang]}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab 2: Inclusions & Exclusions */}
              {activeTab === 'inclusions' && (
                <div className="space-y-5">
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      {t('Fasilitas Termasuk (Include):', 'Included Facilities:')}
                    </h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {packageItem.inclusions.map((inc, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-slate-700 bg-emerald-50/50 p-2.5 rounded-xl border border-emerald-100/60"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>{inc[lang]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-3 flex items-center gap-1.5">
                      <XCircle className="w-4 h-4 text-rose-500" />
                      {t('Tidak Termasuk (Exclude):', 'Excluded:')}
                    </h5>
                    <ul className="space-y-1.5">
                      {packageItem.exclusions.map((exc, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-slate-600 bg-rose-50/40 p-2 rounded-xl border border-rose-100/60"
                        >
                          <XCircle className="w-3.5 h-3.5 text-rose-500 mt-0.5 flex-shrink-0" />
                          <span>{exc[lang]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

            </div>

            {/* RIGHT COLUMN: Interactive Booking Form */}
            <div className="lg:col-span-5">
              <div className="bg-sky-50/60 border border-sky-100/80 rounded-3xl p-5 sm:p-6 shadow-sm sticky top-6">
                
                <div className="flex items-center justify-between pb-4 border-b border-sky-100 mb-5">
                  <div>
                    <span className="text-[11px] font-bold text-sky-600 uppercase tracking-wider block">
                      {t('Pemesanan Cepat Resmi', 'Official Fast Booking')}
                    </span>
                    <h4 className="text-lg font-extrabold text-slate-900">
                      {t('Pesan Paket Ini', 'Book This Package')}
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 block">
                      {pricing.isFixedPackage ? t('Paket Privat', 'Private Tour') : t('Tarif per orang', 'Per person')}
                    </span>
                    <span className="text-lg font-black text-sky-600">
                      Rp {pricing.unitPrice.toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Nama Lengkap */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t('Nama Lengkap Pemesan', 'Full Name')} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="contoh: Budi Santoso"
                      value={formData.customerName}
                      onChange={(e) =>
                        setFormData({ ...formData, customerName: e.target.value })
                      }
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t('Nomor WhatsApp', 'WhatsApp Number')} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="contoh: 081234567890"
                      value={formData.whatsapp}
                      onChange={(e) =>
                        setFormData({ ...formData, whatsapp: e.target.value })
                      }
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                    />
                  </div>

                  {/* Tanggal Berangkat */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t('Tanggal Keberangkatan', 'Departure Date')} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.travelDate}
                      onChange={(e) =>
                        setFormData({ ...formData, travelDate: e.target.value })
                      }
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                    />
                  </div>

                  {/* If Multi-Day Stay Package (2D1N, 3D2N, 4D3N, 5D4N): Hotel Option Selector */}
                  {(packageItem.category === 'stay' || (packageItem.tierPrices && packageItem.tierPrices.length > 0)) && (
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {t('Pilihan Akomodasi Hotel', 'Accommodation Choice')}
                      </label>
                      <select
                        value={formData.hotelOption}
                        onChange={(e: any) =>
                          setFormData({ ...formData, hotelOption: e.target.value })
                        }
                        className="w-full text-xs sm:text-sm px-3 py-2.5 rounded-xl border border-slate-200 bg-white font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      >
                        <option value="tanpa">Tanpa Hotel</option>
                        <option value="bintang2">Hotel Bintang 2</option>
                        <option value="bintang3">Hotel Bintang 3 (Rekomendasi)</option>
                        <option value="bintang4">Hotel Bintang 4</option>
                        <option value="bintang5">Hotel Bintang 5 (Luxury)</option>
                      </select>
                    </div>
                  )}

                  {/* Guests: Dewasa & Anak */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <label className="block text-[11px] font-bold text-slate-700">
                        {t('Dewasa (Adults)', 'Adults (12+ yo)')}
                      </label>
                      <div className="flex items-center justify-between mt-2">
                        <button
                          type="button"
                          onClick={() =>
                            setFormData({
                              ...formData,
                              adults: Math.max(packageItem.minPax || 1, formData.adults - 1),
                            })
                          }
                          className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 font-bold text-slate-700 flex items-center justify-center transition-colors"
                        >
                          -
                        </button>
                        <span className="text-sm font-bold text-slate-900">
                          {formData.adults}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            if (packageItem.maxPax && formData.adults + formData.children >= packageItem.maxPax) {
                              alert(`Maksimal ${packageItem.maxPax} orang untuk paket ini.`);
                              return;
                            }
                            setFormData({ ...formData, adults: formData.adults + 1 });
                          }}
                          className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 font-bold text-slate-700 flex items-center justify-center transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <label className="block text-[11px] font-bold text-slate-700">
                        {t('Anak (Diskon 50%)', 'Child (50% Off)')}
                      </label>
                      <div className="flex items-center justify-between mt-2">
                        <button
                          type="button"
                          onClick={() =>
                            setFormData({
                              ...formData,
                              children: Math.max(0, formData.children - 1),
                            })
                          }
                          className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 font-bold text-slate-700 flex items-center justify-center transition-colors"
                        >
                          -
                        </button>
                        <span className="text-sm font-bold text-slate-900">
                          {formData.children}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            if (packageItem.maxPax && formData.adults + formData.children >= packageItem.maxPax) {
                              alert(`Maksimal ${packageItem.maxPax} orang untuk paket ini.`);
                              return;
                            }
                            setFormData({ ...formData, children: formData.children + 1 });
                          }}
                          className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 font-bold text-slate-700 flex items-center justify-center transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Catatan Khusus */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t('Catatan Tambahan', 'Special Notes')}
                    </label>
                    <textarea
                      rows={2}
                      placeholder={t('contoh: Jemput di Bandara jam 09.00...', 'e.g. Airport pickup at 9 AM...')}
                      value={formData.note}
                      onChange={(e) =>
                        setFormData({ ...formData, note: e.target.value })
                      }
                      className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  {/* Price Calculation Box */}
                  <div className="bg-sky-100/70 p-3.5 rounded-2xl border border-sky-200 space-y-1.5">
                    {pricing.isFixedPackage ? (
                      <div className="flex justify-between text-xs text-slate-700">
                        <span>Paket Privat (Maks. 6 Orang):</span>
                        <span className="font-bold">Rp 1.000.000</span>
                      </div>
                    ) : (
                      <>
                        <div className="flex justify-between text-xs text-slate-600">
                          <span>Dewasa ({formData.adults}x):</span>
                          <span>Rp {(formData.adults * pricing.unitPrice).toLocaleString('id-ID')}</span>
                        </div>
                        {formData.children > 0 && (
                          <div className="flex justify-between text-xs text-slate-600">
                            <span>Anak ({formData.children}x @50%):</span>
                            <span>Rp {(formData.children * (pricing.unitPrice * 0.5)).toLocaleString('id-ID')}</span>
                          </div>
                        )}
                      </>
                    )}
                    <div className="pt-2 border-t border-sky-200 flex justify-between items-baseline font-black">
                      <span className="text-sm text-slate-800">{t('Total Biaya Estimasi:', 'Total Price:')}</span>
                      <span className="text-lg text-sky-700">
                        Rp {pricing.total.toLocaleString('id-ID')}
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-6 rounded-full bg-sky-600 hover:bg-sky-500 active:bg-sky-700 text-white font-bold text-sm shadow-md shadow-sky-600/25 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>{t('Memproses Kode Booking...', 'Generating Booking Code...')}</span>
                    ) : (
                      <>
                        <span>{t('Pesan & Terbitkan Kode Booking', 'Book & Get Booking Code')}</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-500">
                    🔒 {t('Harga resmi sesuai flyer. Konfirmasi cepat via WhatsApp.', 'Official rates as per flyers. Quick WhatsApp confirmation.')}
                  </p>
                </form>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
