import React from 'react';
import { MessageCircle, Phone, MapPin, Mail, ArrowUp } from 'lucide-react';
import { Language } from '../types/index.ts';
import { CONTACT_INFO } from '../data/transportData.ts';
import { ChakanLogo } from './ChakanLogo.tsx';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const isMr = language === 'mr';
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b1426] text-white pt-14 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Pre-footer CTA banner */}
        <div className="bg-gradient-to-r from-[#10264a] to-[#1e3a6a] border border-slate-700 rounded-2xl p-6 sm:p-10 mb-12 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest block">
              {isMr ? 'आपल्या सेवेत सदैव तत्पर' : 'Reliable • Safe • Timely'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-serif text-white">
              NEW SHREE SWAMI SAMARTH TRANSPORT
            </h3>
            <p className="text-sm text-slate-300">
              {isMr
                ? 'पार्ट लोड • फुल लोड • महाराष्ट्रभर दररोज वाहतूक सेवा'
                : 'Part Load • Full Load • Daily Maharashtra Transport Connectivity'}
            </p>
            <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                  'Hello, I want to book transport service from Chakan.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#138a45] hover:bg-[#0f7239] text-white font-extrabold text-sm rounded-xl shadow-md transition-all active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{isMr ? '💬 व्हॉट्सअ‍ॅप 9881898635' : '💬 WhatsApp 9881898635'}</span>
              </a>

              <a
                href={`tel:+91${CONTACT_INFO.primaryPhone}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#d83a2e] hover:bg-[#b92c22] text-white font-extrabold text-sm rounded-xl shadow-md transition-all active:scale-[0.98]"
              >
                <Phone className="w-4 h-4" />
                <span>{CONTACT_INFO.primaryPhone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* 3-Column Footer Directory */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-slate-800 text-xs sm:text-sm">
          {/* Col 1: Brand Info with Official Logo */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <ChakanLogo size="sm" withContainer className="shrink-0" />
              <div>
                <div className="text-base font-black font-serif tracking-tight text-amber-400">
                  NEW SHREE SWAMI SAMARTH
                </div>
                <div className="text-xs font-black tracking-widest text-slate-300">
                  TRANSPORT • CHAKAN
                </div>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              {isMr
                ? 'चाकण, पुणे येथून संपूर्ण महाराष्ट्रातील प्रमुख औद्योगिक व व्यापारी केंद्रांसाठी विश्वासू वाहतूक सेवा.'
                : 'Trusted logistics backbone connecting Chakan MIDC to North Maharashtra, Khandesh, and Marathwada corridors.'}
            </p>
            <div className="text-slate-400 text-xs">
              <span className="font-bold text-slate-300">
                {isMr ? 'संचालक: ' : 'Proprietor: '}
              </span>
              <span>{isMr ? CONTACT_INFO.ownerNameMr : CONTACT_INFO.ownerName}</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
              {isMr ? 'महत्वाचे दुवे' : 'Quick Navigation'}
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#options" className="hover:text-amber-300 transition-colors">
                  {isMr ? '• सेवा पर्याय (Customer Options)' : '• Customer Service Options'}
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-amber-300 transition-colors">
                  {isMr ? '• पार्ट लोड व फुल लोड बुकिंग' : '• Book Part & Full Load'}
                </a>
              </li>
              <li>
                <a href="#routes" className="hover:text-amber-300 transition-colors">
                  {isMr ? '• भागांनुसार ट्रान्सपोर्ट (Area Network)' : '• Area Wise Transport Network'}
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-amber-300 transition-colors">
                  {isMr ? '• दर व अंतर अंदाज कॅल्क्युलेटर' : '• Freight Estimator'}
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-amber-300 transition-colors">
                  {isMr ? '• गाड्यांची माहिती (Fleet)' : '• Commercial Vehicle Fleet'}
                </a>
              </li>
              <li>
                <a href={CONTACT_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">
                  {isMr ? '• गूगल मॅप लोकेशन' : '• Google Maps Directions'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Desk */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
              {isMr ? 'संपर्क माहिती' : 'Logistics Desk'}
            </div>
            <p className="text-slate-400 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{isMr ? CONTACT_INFO.addressMr : CONTACT_INFO.address}</span>
            </p>
            <p className="text-slate-400 flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{CONTACT_INFO.primaryPhone} / {CONTACT_INFO.secondaryPhone}</span>
            </p>
            <p className="text-slate-400 flex items-center gap-2 break-all">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:underline">
                {CONTACT_INFO.email}
              </a>
            </p>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} NEW SHREE SWAMI SAMARTH TRANSPORT • Chakan, Pune. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-600">॥ श्री स्वामी समर्थ ॥</span>
            <button
              onClick={scrollToTop}
              type="button"
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
