/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from './types/index.ts';
import { Navbar } from './components/Navbar.tsx';
import { ExactDesignBanner } from './components/ExactDesignBanner.tsx';
import { CustomerOptions } from './components/CustomerOptions.tsx';
import { BookingForms } from './components/BookingForms.tsx';
import { AreaWiseTransport } from './components/AreaWiseTransport.tsx';
import { RateEstimator } from './components/RateEstimator.tsx';
import { FleetShowcase } from './components/FleetShowcase.tsx';
import { ReviewsMarquee } from './components/ReviewsMarquee.tsx';
import { FAQSection } from './components/FAQSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('ssst_language');
      if (saved === 'mr' || saved === 'en') return saved;
    } catch {
      // fallback
    }
    return 'en';
  });

  const [selectedCity, setSelectedCity] = useState<string>('');

  const toggleLanguage = () => {
    setLanguage(prev => {
      const next: Language = prev === 'en' ? 'mr' : 'en';
      try {
        localStorage.setItem('ssst_language', next);
      } catch {
        // fallback
      }
      return next;
    });
  };

  const handleSelectDestination = (cityName: string) => {
    setSelectedCity(cityName);
    // Smooth scroll to booking section
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 pb-14 sm:pb-0" id="home">
      {/* Top Bar Navigation */}
      <Navbar language={language} onToggleLanguage={toggleLanguage} />

      {/* Hero: Exact Visual Design Replica Banner */}
      <main className="flex-1">
        <ExactDesignBanner language={language} onToggleLanguage={toggleLanguage} />

        {/* Customer Options Grid */}
        <CustomerOptions language={language} />

        {/* Area Wise Transport Routes & Search */}
        <AreaWiseTransport language={language} onSelectDestination={handleSelectDestination} />

        {/* Booking Forms (Part Load & Full Load) */}
        <BookingForms language={language} selectedCity={selectedCity} />

        {/* Rate Estimator / Freight Guide */}
        <RateEstimator language={language} />

        {/* Fleet & Trucks Available */}
        <FleetShowcase language={language} />

        {/* Customer Reviews & Live Marquee */}
        <ReviewsMarquee language={language} />

        {/* Transport FAQs: GST Invoicing, Payment Terms (Paid/To-Pay/TBB) & Safety Guarantee */}
        <FAQSection language={language} />

        {/* Contact Section & Google Maps */}
        <ContactSection language={language} />
      </main>

      {/* Footer */}
      <Footer language={language} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp language={language} />
    </div>
  );
}
