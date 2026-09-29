import React, { useState } from 'react';
import { Phone, MessageCircle, Star, ShieldCheck, Clock, MapPin, User, ChevronRight, Maximize2, Minimize2, Sparkles, Navigation } from 'lucide-react';
import { Language } from '../types/index.ts';
import { CONTACT_INFO } from '../data/transportData.ts';
import { ChakanLogo } from './ChakanLogo.tsx';
import { BestBadge } from './BestBadge.tsx';
import { QuickNavigationMenu } from './QuickNavigationMenu.tsx';
import heroTruckAsset from '../assets/images/tata_highway_truck_1790620366029.jpg';

interface ExactDesignBannerProps {
  language: Language;
  onToggleLanguage: () => void;
}

export const ExactDesignBanner: React.FC<ExactDesignBannerProps> = ({ 
  language, 
  onToggleLanguage 
}) => {
  const isMr = language === 'mr';
  const [isFullscreenModal, setIsFullscreenModal] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-slate-900 border-b border-slate-200">
      {/* Top Sticky/Docked Owner Hotline Bar */}
      <div className="relative z-30 bg-[#102b55] text-white px-4 sm:px-8 py-3 border-b-2 border-amber-400 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-2.5">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <div className="text-lg sm:text-2xl font-black font-serif tracking-tight flex items-center gap-2">
              <span className="text-amber-400">📞</span>
              <span className="text-white">{isMr ? CONTACT_INFO.ownerNameMr : CONTACT_INFO.ownerName}</span>
            </div>
            <div className="text-base sm:text-xl font-mono font-black text-amber-300">
              MO:- {CONTACT_INFO.primaryPhone} / {CONTACT_INFO.secondaryPhone}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between sm:justify-end gap-2.5 text-xs sm:text-sm font-bold text-slate-200">
            <span className="hidden sm:flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>{isMr ? 'चाकण, पुणे • संपूर्ण महाराष्ट्र' : 'Chakan, Pune • All Maharashtra'}</span>
            </span>

            {/* Direct Options / All Subjects Quick Jump Button */}
            <QuickNavigationMenu language={language} />

            <button
              onClick={() => setIsFullscreenModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl border border-white/20 text-xs font-bold transition-all cursor-pointer"
              title={isMr ? 'गाडी फुल स्क्रीन वर पहा' : 'View Truck Fullscreen'}
            >
              <Maximize2 className="w-3.5 h-3.5 text-amber-300" />
              <span className="hidden sm:inline">{isMr ? 'फुल स्क्रीन' : 'Fullscreen'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* FULL SCREEN HERO DASHBOARD CONTAINER */}
      <div className="relative w-full min-h-[82vh] lg:min-h-[88vh] flex flex-col justify-between overflow-hidden">
        {/* BACKGROUND VEHICLE IMAGE ON OPEN HIGHWAY (SPANS ENTIRE DASHBOARD) */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroTruckAsset}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (!target.dataset.tried1) {
                target.dataset.tried1 = 'true';
                target.src = '/hero_truck.jpg';
              } else if (!target.dataset.tried2) {
                target.dataset.tried2 = 'true';
                target.src = '/hero_truck.png';
              }
            }}
            alt="New Shree Swami Samarth Transport Tata Truck driving on Maharashtra highway"
            className="w-full h-full object-cover object-center lg:object-[80%_center]"
            loading="eager"
          />

          {/* Gradients to guarantee text readability on the left while keeping the truck visible on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent lg:w-[62%] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10264a]/90 via-transparent to-black/20 lg:hidden pointer-events-none" />
          
          {/* Subtle vignette on edges */}
          <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.25)] pointer-events-none" />
        </div>

        {/* Floating Best Badge & Truck Details On the Vehicle (Desktop) */}
        <div className="hidden lg:block absolute right-8 top-12 z-20 pointer-events-none">
          <div className="flex flex-col items-center">
            <BestBadge size={145} className="drop-shadow-2xl" />
            <div className="mt-2 bg-black/85 backdrop-blur-md text-amber-300 font-mono text-xs font-black px-4 py-1.5 rounded-full border border-amber-400/50 shadow-lg">
              CHAKAN • MH 14 • 24/7 LOGISTICS
            </div>
          </div>
        </div>

        {/* MAIN DASHBOARD CONTENT (LEFT / CENTER ALIGNED) */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-8 py-8 lg:py-12 flex-1 flex flex-col justify-center">
          <div className="max-w-2xl">
            {/* Brand Header with Official Emblem Logo */}
            <div className="flex items-center gap-3.5 sm:gap-4 mb-4 bg-white/90 backdrop-blur-md p-3 sm:p-4 rounded-3xl border-2 border-amber-300 shadow-md inline-flex">
              <ChakanLogo size="md" withContainer showSubtitle={false} className="shrink-0" />
              <div>
                <div className="text-[11px] sm:text-xs font-black tracking-widest text-slate-600 uppercase font-sans">
                  NEW SHREE SWAMI SAMARTH
                </div>
                <div className="text-2xl sm:text-4xl font-black font-serif tracking-tight text-[#d83a2e] leading-none my-0.5">
                  TRANSPORT
                </div>
                <div className="text-[11px] sm:text-xs font-extrabold text-[#10264a]">
                  विश्वासाची वाहतूक • वेळेवर सेवा • सुरक्षित डिलिव्हरी
                </div>
              </div>
            </div>

            {/* Transport & Location Super-title */}
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping inline-block" />
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#10264a] font-sans">
                {isMr 
                  ? 'ट्रान्सपोर्ट आणि लॉजिस्टिक्स • चाकण, पुणे' 
                  : 'TRANSPORT & LOGISTICS • CHAKAN, PUNE'}
              </span>
            </div>

            {/* Main Headline: "आपला माल. आमची जबाबदारी." */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-serif text-[#10264a] leading-[1.05] tracking-tight drop-shadow-xs">
              {isMr ? 'आपला माल.' : 'Your Goods.'}{' '}
              <span className="text-[#d83a2e] block sm:inline">
                {isMr ? 'आमची जबाबदारी.' : 'Our Responsibility.'}
              </span>
            </h1>

            {/* Sub-headline description */}
            <p className="mt-4 text-base sm:text-xl font-bold text-slate-800 leading-snug max-w-xl bg-white/60 backdrop-blur-xs p-2 rounded-xl">
              {isMr
                ? 'चाकण एमआयडीसी ते संपूर्ण महाराष्ट्रातील सर्व प्रमुख शहरांसाठी दररोज पार्ट लोड व फुल लोड सुरक्षित वाहतूक सेवा.'
                : 'Part Load & Full Load transport services from Chakan to Maharashtra destinations.'}
            </p>

            {/* CTA Buttons: Primary Call + Secondary Call + WhatsApp */}
            <div className="mt-6 space-y-3.5 max-w-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:+91${CONTACT_INFO.primaryPhone}`}
                  className="flex items-center justify-center gap-2.5 px-6 py-4 bg-[#d83a2e] hover:bg-[#b92c22] text-white font-black text-lg sm:text-xl rounded-2xl shadow-lg transition-all active:scale-[0.98] border border-red-500 hover:shadow-red-600/30"
                >
                  <Phone className="w-5 h-5 fill-white shrink-0" />
                  <span>{CONTACT_INFO.primaryPhone}</span>
                </a>

                <a
                  href={`tel:+91${CONTACT_INFO.secondaryPhone}`}
                  className="flex items-center justify-center gap-2.5 px-6 py-4 bg-white hover:bg-slate-50 text-[#10264a] font-black text-lg sm:text-xl rounded-2xl border-2 border-slate-300 shadow-md transition-all active:scale-[0.98]"
                >
                  <Phone className="w-5 h-5 text-[#10264a] shrink-0" />
                  <span>{CONTACT_INFO.secondaryPhone}</span>
                </a>
              </div>

              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                  isMr 
                    ? 'नमस्कार, मला चाकण येथून मालाची चौकशी व बुकिंग करायची आहे.' 
                    : 'Hello, I want to make an enquiry for transport booking from Chakan.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-[#138a45] hover:bg-[#0f7239] text-white font-black text-lg sm:text-xl rounded-2xl shadow-xl transition-all active:scale-[0.98] border border-emerald-600 hover:shadow-emerald-600/30"
              >
                <MessageCircle className="w-6 h-6 fill-white shrink-0" />
                <span>{isMr ? 'व्हॉट्सअ‍ॅप चौकशी (WhatsApp Enquiry)' : 'WhatsApp Enquiry'}</span>
              </a>
            </div>

            {/* Quick Badges below buttons */}
            <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-extrabold text-slate-700">
              <span className="bg-white/90 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{isMr ? '१५,०००+ सुरक्षित फेऱ्या' : '15,000+ Safe Trips'}</span>
              </span>
              <span className="bg-white/90 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>{isMr ? '२४/७ थेट डिस्पॅच' : '24/7 Fast Dispatch'}</span>
              </span>
              <button
                onClick={() => setIsFullscreenModal(true)}
                className="bg-amber-100 hover:bg-amber-200 text-amber-900 px-3 py-1.5 rounded-lg border border-amber-300 shadow-xs flex items-center gap-1.5 cursor-pointer transition-colors"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>{isMr ? 'रोडवरील गाडी फुल स्क्रीन पहा ⛶' : 'View Full Highway Truck ⛶'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM FEATURE STRIP DOCKED TO DASHBOARD (Safe Transport | On Time | All Maharashtra) */}
        <div className="relative z-20 w-full bg-[#10264a] text-white py-3.5 px-4 sm:px-8 border-t-2 border-amber-400 shadow-xl">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* 3 Core Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 w-full lg:w-auto text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2.5 font-black text-sm sm:text-base">
                <span className="text-xl">🚚</span>
                <span>{isMr ? 'सुरक्षित वाहतूक (Safe Transport)' : 'Safe Transport'}</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2.5 font-black text-sm sm:text-base sm:border-x sm:border-slate-600 sm:px-6">
                <span className="text-xl">🛡️</span>
                <span>{isMr ? 'वेळेवर पोहोच (On Time Delivery)' : 'On Time Delivery'}</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2.5 font-black text-sm sm:text-base">
                <span className="text-xl">📍</span>
                <span>{isMr ? 'सर्व महाराष्ट्र (All Maharashtra)' : 'All Maharashtra Destinations'}</span>
              </div>
            </div>

            {/* Owner & Google Reviews Summary Card inside the strip */}
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-amber-400 text-[#10264a] font-bold flex items-center justify-center text-sm">
                  BK
                </div>
                <div className="text-left text-xs">
                  <span className="text-amber-300 font-bold block">{isMr ? 'संचालक / मालक' : 'Owner'}</span>
                  <span className="font-extrabold text-white">{isMr ? CONTACT_INFO.ownerNameMr : CONTACT_INFO.ownerName}</span>
                </div>
              </div>

              <div className="h-6 w-px bg-white/20" />

              <a href="#reviews" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                <div className="text-right text-xs">
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-slate-200">5.0/5 (35 Reviews)</span>
                </div>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FULLSCREEN MODAL (HIGH-DEFINITION ROAD VIEW) */}
      {isFullscreenModal && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-6 animate-fadeIn backdrop-blur-sm">
          {/* Modal Header */}
          <div className="flex items-center justify-between text-white pb-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-serif font-black text-xl">
                S
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black font-serif text-white">
                  NEW SHREE SWAMI SAMARTH TRANSPORT • CHAKAN
                </h3>
                <p className="text-xs text-amber-300 font-medium">
                  {isMr ? 'हायवेवर धावणारी गाडी - थेट दृश्य' : 'Full Screen View: Tata Transport Vehicle on Highway'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsFullscreenModal(false)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title="Close Fullscreen"
            >
              <Minimize2 className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Center Vehicle Showcase */}
          <div className="relative flex-1 my-4 rounded-2xl overflow-hidden border border-white/20 flex items-center justify-center bg-black">
            <img
              src={heroTruckAsset}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/hero_truck.jpg';
              }}
              alt="Tata Highway Truck Fullscreen"
              className="w-full h-full object-contain max-h-[80vh]"
            />

            {/* Truck Top Banner Overlay */}
            <div className="absolute top-6 left-0 right-0 text-center pointer-events-none">
              <span className="inline-block bg-white/95 text-[#d83a2e] text-sm sm:text-base font-black px-6 py-2 rounded-lg shadow-2xl border-2 border-red-300">
                ॥ श्री स्वामी समर्थ ॥
              </span>
            </div>

            {/* Best Badge Overlay */}
            <div className="absolute top-4 right-4 pointer-events-none">
              <BestBadge size={130} />
            </div>

            {/* Plate & GPS Overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none">
              <span className="bg-black/85 text-amber-300 font-mono text-xs sm:text-sm font-black px-4 py-2 rounded-lg border border-amber-400">
                CHAKAN • MH 14 • LIVE TRANSPORT
              </span>
              <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-md shadow">
                ✓ SAFE HIGHWAY FREIGHT
              </span>
            </div>
          </div>

          {/* Modal Footer Quick Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
            <div className="text-white text-xs sm:text-sm font-bold flex items-center gap-2">
              <span className="text-amber-400">📞 {CONTACT_INFO.ownerName}:</span>
              <span>{CONTACT_INFO.primaryPhone} / {CONTACT_INFO.secondaryPhone}</span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`tel:+91${CONTACT_INFO.primaryPhone}`}
                className="px-4 py-2 bg-[#d83a2e] hover:bg-[#b92c22] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>

              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                  'Hello, I want to book this transport truck from Chakan.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#138a45] hover:bg-[#0f7239] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Booking</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
