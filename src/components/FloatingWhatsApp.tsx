import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { Language } from '../types/index.ts';
import { CONTACT_INFO } from '../data/transportData.ts';

interface FloatingWhatsAppProps {
  language: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ language }) => {
  const isMr = language === 'mr';

  return (
    <>
      {/* Floating WhatsApp Bubble */}
      <a
        href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
          isMr 
            ? 'नमस्कार बळीरामजी, मला चाकण येथून ट्रान्सपोर्ट चौकशी करायची आहे.' 
            : 'Hello, I want to inquire about transport booking from Chakan.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Enquiry"
        className="fixed right-5 bottom-5 z-40 w-14 h-14 rounded-full bg-[#138a45] hover:bg-[#0f7239] text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group active:scale-95"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white"></span>

        {/* Hover Tooltip */}
        <span className="absolute right-16 px-3 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-lg shadow-lg whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity">
          {isMr ? 'व्हॉट्सअ‍ॅपवर तात्काळ बोला' : 'Chat on WhatsApp'}
        </span>
      </a>

      {/* Mobile Sticky Quick Action Bar (compact, under 15% height limit) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 flex items-center justify-around gap-2 shadow-lg">
        <a
          href={`tel:+91${CONTACT_INFO.primaryPhone}`}
          className="flex-1 py-2.5 px-3 bg-[#d83a2e] text-white text-xs font-black rounded-lg flex items-center justify-center gap-1.5 shadow-xs"
        >
          <Phone className="w-3.5 h-3.5 fill-white" />
          <span>कॉल: {CONTACT_INFO.primaryPhone}</span>
        </a>

        <a
          href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
            'Hello, I want to book transport service.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 bg-[#138a45] text-white text-xs font-black rounded-lg flex items-center justify-center gap-1.5 shadow-xs"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white" />
          <span>व्हॉट्सअ‍ॅप</span>
        </a>
      </div>
    </>
  );
};
