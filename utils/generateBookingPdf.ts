import jsPDF from 'jspdf';
import { BookingResult } from '@/types';

/**
 * Helper to get clean human-readable hotel label
 */
export function getHotelOptionLabel(option?: string): string {
  if (!option) return 'Sesuai Standar Paket';
  switch (option) {
    case 'tanpa':
      return 'Tanpa Penginapan (Land Tour Only)';
    case 'bintang2':
      return 'Hotel Bintang 2';
    case 'bintang3':
      return 'Hotel Bintang 3 (Rekomendasi)';
    case 'bintang4':
      return 'Hotel Bintang 4 (Premium)';
    case 'bintang5':
      return 'Hotel Bintang 5 (Luxury Resort)';
    default:
      return option;
  }
}

/**
 * Format currency in Indonesian Rupiah
 */
function formatRupiah(amount: number): string {
  return 'Rp ' + amount.toLocaleString('id-ID');
}

/**
 * Generates and downloads an ultra-clean, professional PDF voucher for a booking
 */
export function generateBookingPdf(booking: BookingResult): jsPDF {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 210;
  const margin = 14;
  const contentWidth = pageWidth - margin * 2; // 182mm

  // 1. Top Decorative Brand Banner
  doc.setFillColor(2, 132, 199); // Sky 600
  doc.rect(0, 0, pageWidth, 5, 'F');

  // 2. Header: Logo & Company Info
  doc.setTextColor(15, 23, 42); // Slate 900
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.text('LOMBOK PARTNER', margin, 18);

  doc.setTextColor(2, 132, 199); // Sky 600
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.text('TOUR & TRAVEL ORGANIZER LOMBOK', margin, 23);

  doc.setTextColor(100, 116, 139); // Slate 500
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text('Sahabat Resmi & Terpercaya Liburan Anda di Pulau Lombok', margin, 27.5);

  // Right Header: Voucher Badge & WhatsApp Info
  doc.setFillColor(16, 185, 129); // Emerald 500
  doc.roundedRect(pageWidth - margin - 52, 11, 52, 9, 2, 2, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('OFFICIAL E-VOUCHER', pageWidth - margin - 26, 16.8, { align: 'center' });

  doc.setTextColor(51, 65, 85); // Slate 700
  doc.setFontSize(7.5);
  doc.setFont('helvetica', 'normal');
  doc.text('WhatsApp: +62 878-2088-0547', pageWidth - margin, 24, { align: 'right' });
  doc.text('Web: lombokpartner-bay.vercel.app', pageWidth - margin, 28, { align: 'right' });

  // Divider
  doc.setDrawColor(226, 232, 240); // Slate 200
  doc.setLineWidth(0.4);
  doc.line(margin, 32, pageWidth - margin, 32);

  // 3. Highlighted Booking Code Card
  doc.setFillColor(240, 249, 255); // Sky 50
  doc.setDrawColor(186, 230, 253); // Sky 200
  doc.roundedRect(margin, 35, contentWidth, 24, 3, 3, 'FD');

  // Booking Code Left Side
  doc.setTextColor(3, 105, 161); // Sky 700
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.text('KODE BOOKING RESMI / BOOKING ID', margin + 6, 42);

  doc.setTextColor(2, 132, 199); // Sky 600
  doc.setFontSize(19);
  doc.setFont('helvetica', 'bold');
  doc.text(booking.bookingCode, margin + 6, 52);

  // Booking Meta Right Side
  doc.setTextColor(71, 85, 105); // Slate 600
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.text('STATUS: TERKONFIRMASI (MENUNGGU DP)', pageWidth - margin - 6, 42, { align: 'right' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  const issuedDate = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  doc.text(`Tanggal Terbit: ${issuedDate}`, pageWidth - margin - 6, 47, { align: 'right' });
  doc.text('Layanan Pelanggan 24 Jam Siaga', pageWidth - margin - 6, 52, { align: 'right' });

  // 4. Section 1: Customer Details
  let currentY = 64;
  doc.setFillColor(241, 245, 249); // Slate 100
  doc.rect(margin, currentY, 3, 6, 'F');
  doc.setTextColor(15, 23, 42); // Slate 900
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('1. DATA PEMESAN & KONTAK', margin + 6, currentY + 4.5);

  currentY += 8;
  doc.setFillColor(248, 250, 252); // Slate 50
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(margin, currentY, contentWidth, 24, 2, 2, 'FD');

  const colWidth = contentWidth / 2;

  // Row 1
  doc.setTextColor(100, 116, 139); // Label
  doc.setFontSize(7.5);
  doc.setFont('helvetica', 'normal');
  doc.text('Nama Lengkap Pemesan:', margin + 5, currentY + 6);
  doc.text('Nomor WhatsApp / HP:', margin + colWidth + 5, currentY + 6);

  doc.setTextColor(15, 23, 42); // Value
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.text(booking.customerName, margin + 5, currentY + 11);
  doc.text(booking.whatsapp, margin + colWidth + 5, currentY + 11);

  // Row 2
  doc.setTextColor(100, 116, 139);
  doc.setFontSize(7.5);
  doc.setFont('helvetica', 'normal');
  doc.text('Catatan Khusus / Permintaan:', margin + 5, currentY + 17);
  doc.text('Email:', margin + colWidth + 5, currentY + 17);

  doc.setTextColor(15, 23, 42);
  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'bold');
  const noteDisplay = booking.note && booking.note.trim() ? booking.note.trim() : '-';
  doc.text(noteDisplay.length > 45 ? noteDisplay.substring(0, 42) + '...' : noteDisplay, margin + 5, currentY + 21.5);
  doc.text(booking.email || '-', margin + colWidth + 5, currentY + 21.5);

  // 5. Section 2: Tour Package Details
  currentY += 28;
  doc.setFillColor(2, 132, 199);
  doc.rect(margin, currentY, 3, 6, 'F');
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('2. RINCIAN PAKET WISATA LOMBOK', margin + 6, currentY + 4.5);

  currentY += 8;
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(margin, currentY, contentWidth, 36, 2, 2, 'FD');

  // Package Name
  doc.setTextColor(100, 116, 139);
  doc.setFontSize(7.5);
  doc.setFont('helvetica', 'normal');
  doc.text('Nama Paket Wisata:', margin + 5, currentY + 6);
  doc.text('Destinasi & Lokasi:', margin + colWidth + 5, currentY + 6);

  doc.setTextColor(2, 132, 199);
  doc.setFontSize(9.5);
  doc.setFont('helvetica', 'bold');
  const pkgName = booking.packageItem.name.id;
  doc.text(pkgName.length > 40 ? pkgName.substring(0, 38) + '...' : pkgName, margin + 5, currentY + 11);

  doc.setTextColor(15, 23, 42);
  doc.setFontSize(9);
  doc.text(booking.packageItem.location.id || 'Lombok, NTB', margin + colWidth + 5, currentY + 11);

  // Date & Duration
  doc.setTextColor(100, 116, 139);
  doc.setFontSize(7.5);
  doc.setFont('helvetica', 'normal');
  doc.text('Tanggal Keberangkatan:', margin + 5, currentY + 18);
  doc.text('Durasi Perjalanan:', margin + colWidth + 5, currentY + 18);

  doc.setTextColor(15, 23, 42);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.text(booking.travelDate, margin + 5, currentY + 23);
  doc.text(booking.packageItem.duration.id || 'Sesuai Paket', margin + colWidth + 5, currentY + 23);

  // Pax & Accommodation
  doc.setTextColor(100, 116, 139);
  doc.setFontSize(7.5);
  doc.setFont('helvetica', 'normal');
  doc.text('Jumlah Peserta Tour:', margin + 5, currentY + 29);
  doc.text('Pilihan Akomodasi Hotel:', margin + colWidth + 5, currentY + 29);

  doc.setTextColor(15, 23, 42);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  const paxText = `${booking.adults} Dewasa${booking.children > 0 ? `, ${booking.children} Anak` : ''}`;
  doc.text(paxText, margin + 5, currentY + 34);
  doc.text(getHotelOptionLabel(booking.hotelOption), margin + colWidth + 5, currentY + 34);

  // 6. Section 3: Pricing & Payment Summary
  currentY += 40;
  doc.setFillColor(16, 185, 129);
  doc.rect(margin, currentY, 3, 6, 'F');
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('3. ESTIMASI BIAYA & METODE PEMBAYARAN', margin + 6, currentY + 4.5);

  currentY += 8;
  doc.setFillColor(236, 253, 245); // Emerald 50
  doc.setDrawColor(167, 243, 208); // Emerald 200
  doc.roundedRect(margin, currentY, contentWidth, 26, 2, 2, 'FD');

  doc.setTextColor(6, 95, 70); // Emerald 800
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.text('TOTAL ESTIMASI BIAYA PAKET:', margin + 6, currentY + 7);

  doc.setTextColor(5, 150, 105); // Emerald 600
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text(formatRupiah(booking.totalPrice), margin + 6, currentY + 16);

  doc.setTextColor(51, 65, 85);
  doc.setFontSize(7.5);
  doc.setFont('helvetica', 'normal');
  doc.text('*Estimasi final dapat disesuaikan dengan kebutuhan penjemputan khusus / upgrade kamar.', margin + 6, currentY + 22);

  // DP Info Box on right
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(pageWidth - margin - 75, currentY + 4, 70, 18, 1.5, 1.5, 'F');
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(7.5);
  doc.setFont('helvetica', 'bold');
  doc.text('Uang Muka (DP):', pageWidth - margin - 71, currentY + 9);
  doc.setFont('helvetica', 'normal');
  doc.text('Minimal 30% setelah konfirmasi Admin', pageWidth - margin - 71, currentY + 14);
  doc.text('Pelunasan: Saat kedatangan di Lombok', pageWidth - margin - 71, currentY + 18.5);

  // 7. Section 4: Instructions & Terms
  currentY += 31;
  doc.setFillColor(245, 158, 11); // Amber 500
  doc.rect(margin, currentY, 3, 6, 'F');
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('4. PANDUAN KONFIRMASI & KETENTUAN PERJALANAN', margin + 6, currentY + 4.5);

  currentY += 8;
  doc.setFillColor(254, 252, 232); // Amber 50
  doc.setDrawColor(254, 240, 138); // Amber 200
  doc.roundedRect(margin, currentY, contentWidth, 38, 2, 2, 'FD');

  const instructions = [
    '1. File PDF E-Voucher ini telah resmi terbit dan tersimpan otomatis di perangkat Anda.',
    '2. Silakan kirim file PDF ini bersama pesan WhatsApp ke Admin Resmi kami di +62 878-2088-0547.',
    '3. Tim Lombok Partner akan mengunci jadwal tanggal tur, memproses armada, dan memberikan nomor rekening resmi.',
    '4. Titik penjemputan resmi: Bandara Internasional Lombok (LOP), Pelabuhan Lembar/Bangsal, atau hotel tempat menginap.',
    '5. Pembatalan atau perubahan jadwal wajib diinformasikan minimal 3 hari sebelum tanggal keberangkatan.',
  ];

  doc.setTextColor(69, 26, 3); // Amber 950
  doc.setFontSize(7.5);
  doc.setFont('helvetica', 'normal');
  let lineY = currentY + 6;
  instructions.forEach((line) => {
    doc.text(line, margin + 5, lineY);
    lineY += 6.5;
  });

  // 8. Official Signature & Footer
  currentY += 44;
  doc.setDrawColor(226, 232, 240);
  doc.line(margin, currentY, pageWidth - margin, currentY);

  currentY += 5;
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'bold');
  doc.text('LOMBOK PARTNER INDONESIA', margin, currentY);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text('Jl. Raya Pariwisata Kuta Mandalika - Senggigi, Nusa Tenggara Barat', margin, currentY + 4.5);
  doc.text('Hotline / WhatsApp: +62 878-2088-0547 | Email: info@lombokpartner.com', margin, currentY + 8.5);

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(16, 185, 129);
  doc.text('VERIFIKASI RESMI SISTEM', pageWidth - margin, currentY, { align: 'right' });
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 116, 139);
  doc.text(`Kode Otentikasi: ${booking.bookingCode}-${Date.now().toString(36).toUpperCase()}`, pageWidth - margin, currentY + 4.5, { align: 'right' });
  doc.text('Dokumen Sah & Berlaku Tanpa Tanda Tangan Fisik', pageWidth - margin, currentY + 8.5, { align: 'right' });

  // Bottom Accent Bar
  doc.setFillColor(2, 132, 199);
  doc.rect(0, 297 - 4, pageWidth, 4, 'F');

  return doc;
}

/**
 * Convenience function to generate and trigger the download of the PDF
 */
export function downloadBookingPdf(booking: BookingResult): void {
  const doc = generateBookingPdf(booking);
  const fileName = `Voucher_LombokPartner_${booking.bookingCode}.pdf`;
  doc.save(fileName);
}
