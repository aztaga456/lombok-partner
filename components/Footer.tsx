'use client';

import React from 'react';
import Image from 'next/image';
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  ShieldCheck,
  CreditCard,
  Globe,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { lang, t } = useLanguage();

  return (
    <footer id="contact" className="bg-slate-950 text-slate-300 pt-10 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pre-Footer Glassmorphic CTA Banner - Exactly matching reference image */}
        <div className="relative rounded-[32px] overflow-hidden border border-white/20 shadow-2xl p-8 sm:p-12 md:p-16 mb-16 text-center text-white">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=2200&q=85')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-slate-950/80" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-sky-300 uppercase mb-2">
              {t('LIBURAN IMPIAN DI DEPAN MATA', 'YOUR ISLAND PARADISE AWAITS')}
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-3">
              {t('Surga Tropis Anda Sedang Menanti', 'Your Next Paradise is Waiting For You')}
            </h3>
            <p className="text-slate-200/90 text-sm sm:text-base font-normal max-w-lg mb-8 leading-relaxed">
              {t(
                'Konsultasikan jadwal wisata impian Anda bersama kami hari ini dan dapatkan penawaran terbaik untuk rombongan maupun private trip.',
                'Book today and enjoy exclusive offers for family getaways, private snorkeling, or corporate gatherings.'
              )}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
              <a
                href="#packages"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-xl shadow-sky-500/30 hover:scale-105 transition-all"
              >
                <span>{t('Pesan Sekarang', 'Book Now')}</span>
                <span className="text-lg leading-none">→</span>
              </a>

              <a
                href="https://wa.me/6287820880547"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white border border-white/50 backdrop-blur-md font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-lg hover:scale-105 transition-all"
              >
                <span>{t('Chat WhatsApp Kami', 'Chat on WhatsApp')}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Info (Cols 1 & 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 overflow-hidden rounded-full bg-white p-1 flex-shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="Lombok Partner Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl tracking-tight text-white leading-none">
                  Lombok<span className="text-sky-400">Partner</span>
                </span>
                <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mt-0.5">
                  TOUR & TRAVEL
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {t(
                'Mitra resmi dan terpercaya perjalanan wisata Anda di Pulau Lombok. Menyediakan Paket Wisata Menginap 2D1N s/d 5D4N, Gili Trilogy Private Snorkeling, Senaru & Sembalun, Sasak Tour Mandalika, dan Pilihan Hotel Terlengkap.',
                'Your official and trusted travel partner in Lombok Island. Providing 2D1N to 5D4N Tour Packages, Gili Trilogy Private Snorkeling, Senaru & Sembalun trips, Sasak Mandalika tours, and curated Hotel & Resort choices.'
              )}
            </p>

            <div className="pt-2 flex items-center gap-3 text-slate-400">
              <a
                href="https://instagram.com/lombok.partner"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-sky-500 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-sky-500 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-sky-500 hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links: Official Packages Only */}
          <div>
            <h4 className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
              {t('Paket Wisata Resmi', 'Official Tour Packages')}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#packages" className="hover:text-sky-400 transition-colors">
                  Paket Wisata 2 Hari 1 Malam (2D1N)
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-sky-400 transition-colors">
                  Paket Wisata 3 Hari 2 Malam (3D2N)
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-sky-400 transition-colors">
                  Paket Wisata 4 Hari 3 Malam (4D3N)
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-sky-400 transition-colors">
                  Paket Wisata 5 Hari 4 Malam (5D4N)
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-sky-400 transition-colors">
                  Gili Trilogy Private Snorkeling
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-sky-400 transition-colors">
                  One Day Trip: Senaru & Sembalun
                </a>
              </li>
            </ul>
          </div>

          {/* Database Hotel Regions */}
          <div>
            <h4 className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
              {t('Wilayah Hotel Mitra', 'Partner Hotel Regions')}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#hotels" className="hover:text-sky-400 transition-colors">
                  Hotel Kuta Mandalika (Bintang 2–5)
                </a>
              </li>
              <li>
                <a href="#hotels" className="hover:text-sky-400 transition-colors">
                  Hotel Mataram City (Bintang 2–4)
                </a>
              </li>
              <li>
                <a href="#hotels" className="hover:text-sky-400 transition-colors">
                  Hotel Senggigi (Bintang 2–5)
                </a>
              </li>
              <li>
                <a href="#hotels" className="hover:text-sky-400 transition-colors">
                  Resort Gili Trawangan (Bintang 2–5)
                </a>
              </li>
            </ul>
          </div>

          {/* Official Contacts from Flyers */}
          <div>
            <h4 className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
              {t('Kontak Resmi', 'Official Contacts')}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="https://wa.me/6287820880547" className="hover:text-white font-medium">
                  +62 878-2088-0547 (WhatsApp Pemesanan)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span className="text-slate-300">www.lombokpartner.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-pink-400 flex-shrink-0" />
                <span className="text-slate-300">@lombok.partner</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Slogan & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            <p className="font-semibold text-slate-400">
              &ldquo;Liburan Terbaik, Bersama Lombok Partner&rdquo;
            </p>
            <p className="mt-1">© {new Date().getFullYear()} Lombok Partner Tour & Travel. All rights reserved.</p>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              Official Licensed Travel Agency
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <CreditCard className="w-4 h-4 text-sky-400" />
              100% Harga Resmi & Transparan
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
