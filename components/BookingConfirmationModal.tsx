'use client';

import React from 'react';
import {
  CheckCircle2,
  X,
  MessageCircle,
  Copy,
  Check,
  ArrowRight,
} from 'lucide-react';
import { BookingResult } from '@/types';
import { useLanguage } from '@/context/LanguageContext';

interface BookingConfirmationModalProps {
  booking: BookingResult | null;
  onClose: () => void;
}

export default function BookingConfirmationModal({
  booking,
  onClose,
}: BookingConfirmationModalProps) {
  const { lang, t } = useLanguage();
  const [copied, setCopied] = React.useState(false);

  if (!booking) return null;

  // Format WhatsApp message URL using official WhatsApp number (+62 878-2088-0547)
  const formatWaMessage = () => {
    const text = `Halo Admin Lombok Partner! 🌴✨%0A%0ASaya ingin konfirmasi pesanan paket wisata saya:%0A%0A*Kode Booking:* ${booking.bookingCode}%0A*Paket:* ${booking.packageItem.name.id}%0A*Nama Pemesan:* ${booking.customerName}%0A*No. WhatsApp:* ${booking.whatsapp}%0A*Tanggal Berangkat:* ${booking.travelDate}%0A*Peserta:* ${booking.adults} Dewasa${booking.children > 0 ? `, ${booking.children} Anak` : ''}%0A${booking.hotelOption ? `*Pilihan Hotel:* ${booking.hotelOption}%0A` : ''}*Catatan:* ${booking.note || '-'}%0A*Total Estimasi:* Rp ${booking.totalPrice.toLocaleString('id-ID')}%0A%0AMohon petunjuk untuk konfirmasi jadwal dan pembayaran DP. Terima kasih! 🙏`;
    return `https://wa.me/6287820880547?text=${text}`;
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(booking.bookingCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 p-6 sm:p-8 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Icon */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4 shadow-inner">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mb-2">
            {t('Pemesanan Berhasil Dicatat', 'Booking Successfully Recorded')}
          </span>

          <h3 className="text-2xl font-black text-slate-900 tracking-tight">
            {t('Terima Kasih,', 'Thank You,')} {booking.customerName}!
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-sm">
            {t(
              'Kode booking resmi Anda telah diterbitkan. Silakan konfirmasi pesanan ke WhatsApp Admin kami.',
              'Your official booking code has been generated. Please confirm your reservation via WhatsApp.'
            )}
          </p>
        </div>

        {/* Booking Code Highlight Card */}
        <div className="my-6 bg-slate-50 border border-slate-200/90 rounded-2xl p-4 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              {t('Kode Booking Resmi', 'Official Booking Code')}
            </span>
            <span className="text-xl sm:text-2xl font-black text-sky-600 tracking-wider">
              {booking.bookingCode}
            </span>
          </div>

          <button
            onClick={handleCopyCode}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-600">{t('Tersalin', 'Copied')}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-500" />
                <span>{t('Salin', 'Copy')}</span>
              </>
            )}
          </button>
        </div>

        {/* Booking Details Summary */}
        <div className="space-y-2.5 text-xs sm:text-sm border-t border-b border-slate-100 py-4 mb-6">
          <div className="flex justify-between">
            <span className="text-slate-500">{t('Paket Wisata:', 'Tour Package:')}</span>
            <span className="font-bold text-slate-800 text-right max-w-[220px] truncate">
              {booking.packageItem.name[lang]}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-500">{t('Tanggal Berangkat:', 'Departure Date:')}</span>
            <span className="font-semibold text-slate-800">{booking.travelDate}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-500">{t('Jumlah Peserta:', 'Participants:')}</span>
            <span className="font-semibold text-slate-800">
              {booking.adults} Dewasa{booking.children > 0 ? `, ${booking.children} Anak` : ''}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-500">{t('Status Awal:', 'Initial Status:')}</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
              {booking.status}
            </span>
          </div>

          <div className="flex justify-between pt-2 border-t border-slate-100 text-sm font-black">
            <span className="text-slate-800">{t('Total Biaya Estimasi:', 'Total Price:')}</span>
            <span className="text-sky-600 text-base">
              Rp {booking.totalPrice.toLocaleString('id-ID')}
            </span>
          </div>
        </div>

        {/* WhatsApp Direct Confirmation Button */}
        <div className="space-y-3">
          <a
            href={formatWaMessage()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-sm sm:text-base py-3.5 px-6 rounded-full shadow-lg shadow-emerald-600/30 transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>{t('Konfirmasi Pesanan ke WhatsApp', 'Confirm Booking via WhatsApp')}</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>

          <button
            onClick={onClose}
            className="w-full py-2.5 text-xs sm:text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors"
          >
            {t('Kembali ke Beranda', 'Back to Home')}
          </button>
        </div>

      </div>
    </div>
  );
}
