import React from 'react';
import { Phone, MessageCircle, MapPin, Globe } from 'lucide-react';
import { Language } from '../types/index.ts';
import { CONTACT_INFO } from '../data/transportData.ts';
import { QuickNavigationMenu } from './QuickNavigationMenu.tsx';
import { ChakanLogo } from './ChakanLogo.tsx';

interface NavbarProps {
  language: Language;
  onToggleLanguage: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ language, onToggleLanguage }) => {
  const isMr = language === 'mr';

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top Contact Strip */}
      <div className="bg-[#102b55] text-white text-xs md:text-sm py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-medium">
            <span className="text-amber-400 font-bold">
              {isMr ? '📞 प्रोप्रायटर:' : '📞 Owner:'}
            </span>
            <span className="font-semibold tracking-wide">
              {isMr ? CONTACT_INFO.ownerNameMr : CONTACT_INFO.ownerName}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <a 
              href={`tel:+91${CONTACT_INFO.primaryPhone}`} 
              className="hover:text-amber-300 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{CONTACT_INFO.primaryPhone}</span>
            </a>
            <span className="text-blue-300">/</span>
            <a 
              href={`tel:+91${CONTACT_INFO.secondaryPhone}`} 
              className="hover:text-amber-300 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{CONTACT_INFO.secondaryPhone}</span>
            </a>
            <span className="hidden sm:inline text-blue-300">|</span>
            <span className="hidden sm:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{isMr ? 'चाकण, पुणे' : 'Chakan, Pune'}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 gap-3">
          {/* Brand Wordmark with Official Logo */}
          <a href="#home" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <ChakanLogo size="sm" withContainer className="shrink-0" />
            <div>
              <span className="block text-[10px] sm:text-xs font-bold tracking-wider text-slate-500 uppercase">
                {isMr ? 'न्यू श्री स्वामी समर्थ' : 'NEW SHREE SWAMI SAMARTH'}
              </span>
              <span className="block text-base sm:text-xl font-black tracking-tight text-[#10264a] font-serif leading-none group-hover:text-red-700 transition-colors">
                TRANSPORT
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5 text-sm font-semibold text-slate-700">
            <a href="#options" className="hover:text-red-700 transition-colors">
              {isMr ? 'सेवा पर्याय' : 'Options'}
            </a>
            <a href="#booking" className="hover:text-red-700 transition-colors">
              {isMr ? 'बुकिंग फॉर्म' : 'Book Your Goods'}
            </a>
            <a href="#routes" className="hover:text-red-700 transition-colors">
              {isMr ? 'मार्ग व शहरे' : 'Area Routes'}
            </a>
            <a href="#calculator" className="hover:text-red-700 transition-colors">
              {isMr ? 'दर अंदाज' : 'Rate Guide'}
            </a>
            <a href="#fleet" className="hover:text-red-700 transition-colors">
              {isMr ? 'गाड्या' : 'Fleet'}
            </a>
            <a href="#reviews" className="hover:text-red-700 transition-colors">
              {isMr ? 'रिव्ह्यूज' : 'Reviews'}
            </a>
            <a href="#contact" className="hover:text-red-700 transition-colors">
              {isMr ? 'संपर्क' : 'Contact'}
            </a>
          </nav>

          {/* Right Action Cluster With Prominent 'Options / सर्व विषय' Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* THE REQUESTED PROMINENT OPTIONS BUTTON (DIRECT JUMP MENU) */}
            <QuickNavigationMenu language={language} />

            {/* Language Switcher */}
            <button
              onClick={onToggleLanguage}
              type="button"
              className="hidden md:flex px-3 py-1.5 rounded-full text-xs font-bold border border-slate-300 hover:border-slate-400 bg-slate-100 hover:bg-slate-200 text-slate-800 transition-all items-center gap-1 whitespace-nowrap cursor-pointer"
              title={isMr ? 'Switch to English' : 'मराठीत पहा'}
            >
              <Globe className="w-3.5 h-3.5 text-slate-600" />
              <span>{isMr ? 'EN' : 'मराठी'}</span>
            </button>

            {/* Direct WhatsApp CTA */}
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                isMr 
                  ? 'नमस्कार, मला चाकण येथून ट्रान्सपोर्ट/गाडी बुकिंग करायची आहे.' 
                  : 'Hello, I want to book transport/parcel service from Chakan.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 px-3.5 py-2 text-xs md:text-sm font-bold text-white bg-[#138a45] hover:bg-[#0f7239] rounded-xl shadow-sm transition-all whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{isMr ? 'WhatsApp' : 'WhatsApp'}</span>
            </a>

            {/* Direct Call Button */}
            <a
              href={`tel:+91${CONTACT_INFO.primaryPhone}`}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 text-xs md:text-sm font-black text-white bg-[#d83a2e] hover:bg-[#b92c22] rounded-xl shadow-sm transition-all whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>{CONTACT_INFO.primaryPhone}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
