'use client';

import React from 'react';
import {
  CheckCircle2,
  X,
  MessageCircle,
  Copy,
  Check,
  ArrowRight,
  FileDown,
  DownloadCloud,
} from 'lucide-react';
import { BookingResult } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { downloadBookingPdf, getHotelOptionLabel } from '@/utils/generateBookingPdf';

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
  const [pdfDownloaded, setPdfDownloaded] = React.useState(false);

  if (!booking) return null;

  // Format WhatsApp message URL using official WhatsApp number (+62 878-2088-0547)
  const getWaUrl = () => {
    const hotelInfo = booking.hotelOption ? `*Pilihan Hotel:* ${getHotelOptionLabel(booking.hotelOption)}%0A` : '';
    const text = `Halo Admin Lombok Partner! 🌴✨%0A%0ASaya ingin konfirmasi pesanan paket wisata saya:%0A%0A*Kode Booking:* ${booking.bookingCode}%0A*Paket:* ${booking.packageItem.name.id}%0A*Nama Pemesan:* ${booking.customerName}%0A*No. WhatsApp:* ${booking.whatsapp}%0A*Tanggal Berangkat:* ${booking.travelDate}%0A*Peserta:* ${booking.adults} Dewasa${booking.children > 0 ? `, ${booking.children} Anak` : ''}%0A${hotelInfo}*Catatan:* ${booking.note || '-'}%0A*Total Estimasi:* Rp ${booking.totalPrice.toLocaleString('id-ID')}%0A%0A--------------------------------%0A📄 *E-VOUCHER RESMI PDF:*%0AFile *Voucher_LombokPartner_${booking.bookingCode}.pdf* telah saya unduh dan tersimpan di perangkat saya. Saya siap lampirkan file ini untuk validasi.%0A--------------------------------%0A%0AMohon petunjuk untuk konfirmasi jadwal armada dan pembayaran DP. Terima kasih! 🙏`;
    return `https://wa.me/6287820880547?text=${text}`;
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(booking.bookingCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Trigger PDF download only
  const handleDownloadPdf = () => {
    try {
      downloadBookingPdf(booking);
      setPdfDownloaded(true);
      setTimeout(() => setPdfDownloaded(false), 4000);
    } catch (err) {
      console.error('Error generating PDF:', err);
    }
  };

  // Main action: Auto-download PDF AND redirect to WhatsApp
  const handleConfirmToWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      // 1. Otomatis unduh file PDF ke local storage/device user
      downloadBookingPdf(booking);
      setPdfDownloaded(true);
    } catch (err) {
      console.error('Error downloading PDF:', err);
    }

    // 2. Langsung arahkan ke WhatsApp
    const waUrl = getWaUrl();
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 p-5 sm:p-7 my-auto animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Icon */}
        <div className="flex flex-col items-center text-center">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-3 shadow-inner">
            <CheckCircle2 className="w-9 h-9 sm:w-10 sm:h-10" />
          </div>

          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full mb-2 border border-emerald-200/60">
            {t('PEMESANAN BERHASIL DICATAT', 'BOOKING SUCCESSFULLY RECORDED')}
          </span>

          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
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
        <div className="my-4 sm:my-5 bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5 sm:p-4 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              {t('KODE BOOKING RESMI', 'OFFICIAL BOOKING CODE')}
            </span>
            <span className="text-xl sm:text-2xl font-black text-sky-600 tracking-wider">
              {booking.bookingCode}
            </span>
          </div>

          <button
            onClick={handleCopyCode}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer shadow-2xs"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-600 font-bold">{t('Tersalin', 'Copied')}</span>
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
        <div className="space-y-2 text-xs sm:text-sm border-t border-b border-slate-100 py-3.5 mb-4">
          <div className="flex justify-between items-center">
            <span className="text-slate-500">{t('Paket Wisata:', 'Tour Package:')}</span>
            <span className="font-bold text-slate-800 text-right max-w-[220px] truncate">
              {booking.packageItem.name[lang]}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-slate-500">{t('Tanggal Berangkat:', 'Departure Date:')}</span>
            <span className="font-semibold text-slate-800">{booking.travelDate}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-slate-500">{t('Jumlah Peserta:', 'Participants:')}</span>
            <span className="font-semibold text-slate-800">
              {booking.adults} Dewasa{booking.children > 0 ? `, ${booking.children} Anak` : ''}
            </span>
          </div>

          {booking.hotelOption && (
            <div className="flex justify-between items-center">
              <span className="text-slate-500">{t('Akomodasi Hotel:', 'Hotel Option:')}</span>
              <span className="font-semibold text-slate-800 text-right truncate max-w-[200px]">
                {getHotelOptionLabel(booking.hotelOption)}
              </span>
            </div>
          )}

          <div className="flex justify-between items-center">
            <span className="text-slate-500">{t('Status Awal:', 'Initial Status:')}</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
              {booking.status}
            </span>
          </div>

          <div className="flex justify-between items-center pt-2 border-t border-slate-100 text-sm font-black">
            <span className="text-slate-800">{t('Total Biaya Estimasi:', 'Total Price:')}</span>
            <span className="text-sky-600 text-base sm:text-lg">
              Rp {booking.totalPrice.toLocaleString('id-ID')}
            </span>
          </div>
        </div>

        {/* PDF Status / Information Notice */}
        <div className="mb-4 bg-sky-50/80 border border-sky-100 rounded-2xl p-3 flex items-start gap-2.5">
          <DownloadCloud className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-sky-900 leading-relaxed">
            <span className="font-bold">E-Voucher PDF Otomatis:</span>{' '}
            Saat Anda menekan tombol di bawah, file PDF bukti pemesanan{' '}
            <span className="font-semibold text-sky-700 underline">Voucher_LombokPartner_{booking.bookingCode}.pdf</span>{' '}
            akan otomatis terunduh ke perangkat Anda.
          </div>
        </div>

        {pdfDownloaded && (
          <div className="mb-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs px-3.5 py-2.5 rounded-xl flex items-center gap-2 animate-in fade-in duration-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span className="font-semibold">
              File PDF Voucher berhasil diunduh ke folder Downloads perangkat Anda!
            </span>
          </div>
        )}

        {/* WhatsApp Button & Action Group */}
        <div className="space-y-2.5">
          {/* Main Action: Send to WhatsApp + Auto-Download PDF */}
          <button
            onClick={handleConfirmToWhatsApp}
            className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-sm sm:text-base py-3.5 px-6 rounded-full shadow-lg shadow-emerald-600/30 transition-all duration-200 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>{t('Konfirmasi Pesanan ke WhatsApp', 'Confirm Booking via WhatsApp')}</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>

          {/* Secondary Action: Explicit Download PDF Button */}
          <button
            type="button"
            onClick={handleDownloadPdf}
            className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-700 font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-full transition-all duration-200 cursor-pointer border border-slate-200"
          >
            <FileDown className="w-4 h-4 text-sky-600" />
            <span>{t(`Unduh Voucher PDF (${booking.bookingCode})`, `Download PDF Voucher (${booking.bookingCode})`)}</span>
          </button>

          <button
            onClick={onClose}
            className="w-full py-2 text-xs sm:text-sm font-semibold text-slate-400 hover:text-slate-700 transition-colors cursor-pointer text-center"
          >
            {t('Kembali ke Beranda', 'Back to Home')}
          </button>
        </div>

      </div>
    </div>
  );
}
