'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PopularDestination from '@/components/PopularDestination';
import VideoBanner from '@/components/VideoBanner';
import ExploreDestinations from '@/components/ExploreDestinations';
import HotelDatabaseSection from '@/components/HotelDatabaseSection';
import WhyUsSection from '@/components/WhyUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PackageDetailModal from '@/components/PackageDetailModal';
import BookingConfirmationModal from '@/components/BookingConfirmationModal';
import PriceMatrixModal from '@/components/PriceMatrixModal';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import SearchModal from '@/components/SearchModal';
import Footer from '@/components/Footer';
import { PackageItem, BookingResult } from '@/types';
import { LOMBOK_PACKAGES } from '@/data/packages';
import { LanguageProvider, useLanguage } from '@/context/LanguageContext';

function MainApp() {
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null);
  const [confirmedBooking, setConfirmedBooking] = useState<BookingResult | null>(null);
  const [isPriceMatrixOpen, setIsPriceMatrixOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handlePlanTripClick = () => {
    const element = document.getElementById('packages');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = () => {
    const element = document.getElementById('packages');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (pkg: PackageItem) => {
    setSelectedPackage(pkg);
  };

  const handleConfirmBooking = (result: BookingResult) => {
    setSelectedPackage(null);
    setConfirmedBooking(result);
  };

  return (
    <main className="min-h-screen bg-white flex flex-col relative selection:bg-sky-500 selection:text-white">
      {/* 1. Hanging / Suspended Floating Navbar */}
      <Navbar
        onPlanTripClick={handlePlanTripClick}
        onSearchClick={() => setIsSearchOpen(true)}
      />

      {/* 2. Hero Section - Glassmorphic Tropical Beach */}
      <HeroSection
        onExploreClick={handleExploreClick}
        onWatchVideoClick={() => {
          const videoSection = document.getElementById('destinations');
          if (videoSection) {
            videoSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        onSelectFeaturedPackage={() => {
          const featured = LOMBOK_PACKAGES.find((p) => p.id === 'gili-trilogy') || LOMBOK_PACKAGES[0];
          handleSelectPackage(featured);
        }}
      />

      {/* 3. Popular Destination Section - IDENTICAL TO UI.jpg */}
      <PopularDestination />

      {/* 4. Panoramic Middle Video Banner - IDENTICAL TO UI.jpg */}
      <VideoBanner />

      {/* 5. Official Packages Only (from the 5 images) */}
      <ExploreDestinations
        onSelectPackage={handleSelectPackage}
        onOpenPriceMatrix={() => setIsPriceMatrixOpen(true)}
      />

      {/* 6. Database Hotel Lombok Partner (Image 5) */}
      <HotelDatabaseSection />

      {/* 7. Why Choose Us / Professional Standards */}
      <WhyUsSection />

      {/* 8. Testimonials & Social Proof */}
      <TestimonialsSection />

      {/* 9. Corporate Travel Footer with Flyer Contacts */}
      <Footer />

      {/* 10. Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* 11. Search Destinations Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectPackage={handleSelectPackage}
      />

      {/* 12. Full 2D1N Tiered Price List Modal (Image 1) */}
      <PriceMatrixModal
        isOpen={isPriceMatrixOpen}
        onClose={() => setIsPriceMatrixOpen(false)}
      />

      {/* 13. Interactive Package Detail & Booking Form Modal */}
      {selectedPackage && (
        <PackageDetailModal
          packageItem={selectedPackage}
          onClose={() => setSelectedPackage(null)}
          onConfirmBooking={handleConfirmBooking}
        />
      )}

      {/* 14. Booking Confirmation Modal with LP-XXXXX code & Direct WhatsApp */}
      {confirmedBooking && (
        <BookingConfirmationModal
          booking={confirmedBooking}
          onClose={() => setConfirmedBooking(null)}
        />
      )}
    </main>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
