'use client';

import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function FloatingWhatsApp() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = encodeURIComponent(
      message.trim() || 'Halo Lombok Partner! Saya ingin konsultasi paket wisata ke Lombok.'
    );
    window.open(`https://wa.me/6287820880547?text=${encoded}`, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Quick Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-emerald-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
                  LP
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-300 border-2 border-emerald-600" />
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">Lombok Partner</h4>
                <p className="text-[11px] text-emerald-100">
                  {t('Online · Respons Cepat', 'Online · Fast Response')}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-lg"
              aria-label="Tutup Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-slate-50 space-y-3">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-xs text-xs text-slate-700 leading-relaxed border border-slate-100">
              👋 {t(
                'Halo! Ada yang bisa kami bantu seputar Paket 2D1N, Gili Snorkeling, Senaru Sembalun, atau Rekomendasi Hotel?',
                'Hello! How can we assist you with our 2D1N Tour, Gili Snorkeling, Senaru waterfalls, or Hotel recommendations?'
              )}
            </div>
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input
              type="text"
              placeholder={t('Ketik pertanyaan Anda...', 'Type your question...')}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 text-xs px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
              aria-label="Kirim Pesan"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="relative group">
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-40 animate-ping pointer-events-none group-hover:opacity-0" />
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-lg shadow-emerald-500/30 transition-all duration-300 transform hover:scale-105 cursor-pointer"
          aria-label="Chat WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white text-emerald-500" />
          <span className="text-xs sm:text-sm font-bold tracking-wide hidden sm:inline-block">
            {t('Chat WhatsApp', 'WhatsApp Chat')}
          </span>
        </button>
      </div>

    </div>
  );
}
