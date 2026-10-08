'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, X, MapPin, ArrowRight } from 'lucide-react';
import { PackageItem } from '@/types';
import { LOMBOK_PACKAGES } from '@/data/packages';
import { useLanguage } from '@/context/LanguageContext';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPackage: (pkg: PackageItem) => void;
}

export default function SearchModal({
  isOpen,
  onClose,
  onSelectPackage,
}: SearchModalProps) {
  const { lang, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const results = LOMBOK_PACKAGES.filter((p) => {
    const term = searchTerm.toLowerCase();
    return (
      p.name[lang].toLowerCase().includes(term) ||
      p.location[lang].toLowerCase().includes(term) ||
      p.shortDescription[lang].toLowerCase().includes(term)
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-200">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-sky-600 flex-shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder={t(
              'Cari paket resmi (misal: 2D1N, 3D2N, 4D3N, 5D4N, Gili, Sembalun)...',
              'Search official packages (e.g. 2D1N, 3D2N, 4D3N, 5D4N, Gili, Sembalun)...'
            )}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-sm sm:text-base text-slate-800 placeholder-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-3">
          {results.length > 0 ? (
            results.map((pkg) => (
              <div
                key={pkg.id}
                onClick={() => {
                  onSelectPackage(pkg);
                  onClose();
                }}
                className="flex items-center gap-4 p-3 rounded-2xl hover:bg-sky-50/70 border border-transparent hover:border-sky-100 transition-colors cursor-pointer group"
              >
                <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={pkg.image}
                    alt={pkg.name[lang]}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 text-xs text-sky-600 font-semibold mb-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{pkg.location[lang]}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 truncate">
                    {pkg.name[lang]}
                  </h4>
                  <p className="text-xs text-slate-500 truncate mt-0.5">
                    {pkg.shortDescription[lang]}
                  </p>
                </div>
                <div className="text-right flex-shrink-0 flex items-center gap-2">
                  <div>
                    <span className="text-[11px] text-slate-400 block">{t('Mulai', 'From')}</span>
                    <span className="text-sm font-black text-sky-600">
                      Rp {pkg.price.toLocaleString('id-ID')}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-sky-600 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10 text-slate-400 text-sm">
              {t(
                `Tidak ada paket yang sesuai dengan pencarian "${searchTerm}".`,
                `No official package found matching "${searchTerm}".`
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
