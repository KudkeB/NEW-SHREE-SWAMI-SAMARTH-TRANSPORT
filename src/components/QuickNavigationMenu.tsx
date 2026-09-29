import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronRight, Home, Truck, Package, MapPin, 
  Calculator, Star, Phone, MessageCircle, Navigation, 
  HelpCircle, ShieldCheck, Search, Sparkles
} from 'lucide-react';
import { Language } from '../types/index.ts';
import { CONTACT_INFO } from '../data/transportData.ts';
import { ChakanLogo } from './ChakanLogo.tsx';

interface QuickNavigationMenuProps {
  language: Language;
}

export interface SubjectItem {
  id: string;
  targetId: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  iconBg: string;
  titleMr: string;
  titleEn: string;
  descMr: string;
  descEn: string;
  badgeMr?: string;
  badgeEn?: string;
  isExternal?: boolean;
  externalUrl?: string;
}

export const QuickNavigationMenu: React.FC<QuickNavigationMenuProps> = ({ language }) => {
  const isMr = language === 'mr';
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const subjects: SubjectItem[] = [
    {
      id: 'sub-home',
      targetId: 'home',
      icon: Home,
      iconColor: 'text-amber-600',
      iconBg: 'bg-amber-50 border-amber-200',
      titleMr: '१. मुख्य डॅशबोर्ड व हायवे गाडी',
      titleEn: '1. Home Dashboard & Highway Truck',
      descMr: 'फुल स्क्रीन टाटा हायवे गाडी, मालक संपर्क (९८८१८९८६३५), चाकण ब्रँडिंग',
      descEn: 'Full screen highway truck view, owner contact & branding banner',
      badgeMr: 'मुख्य दृश्य',
      badgeEn: 'Hero View',
    },
    {
      id: 'sub-options',
      targetId: 'options',
      icon: Package,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-50 border-blue-200',
      titleMr: '२. ६ मुख्य सेवा पर्याय (Customer Options)',
      titleEn: '2. Customer Service Options',
      descMr: 'पार्ट लोड, फुल लोड, मार्ग, ऑफिस लोकेशन व थेट ॲडमिन संपर्क पर्याय',
      descEn: 'Part load, full load, route lookup & direct office coordinates',
      badgeMr: 'जलद पर्याय',
      badgeEn: 'Quick Hub',
    },
    {
      id: 'sub-routes',
      targetId: 'routes',
      icon: Navigation,
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-50 border-emerald-200',
      titleMr: '३. महाराष्ट्र मार्ग व शहरे (Routes & Towns)',
      titleEn: '3. Maharashtra Routes & Towns',
      descMr: 'नाशिक, संभाजीनगर, जळगाव, नागपूर, सोलापूर, कोल्हापूर इ. ४०+ शहरे',
      descEn: 'Direct lines to Nashik, Chh. Sambhajinagar, Jalgaon & 40+ destinations',
      badgeMr: '४०+ शहरे',
      badgeEn: '40+ Towns',
    },
    {
      id: 'sub-booking',
      targetId: 'booking',
      icon: Truck,
      iconColor: 'text-red-600',
      iconBg: 'bg-red-50 border-red-200',
      titleMr: '४. ऑनलाईन माल व गाडी बुकिंग फॉर्म',
      titleEn: '4. Book Your Goods (Online Booking)',
      descMr: 'पार्ट लोड व फुल लोड नोंदणी फॉर्म सबमिट करून अधिकृत टोकन पावती मिळवा',
      descEn: 'Submit part load or full load cargo details and get instant official booking receipt',
      badgeMr: 'टोकन पावती',
      badgeEn: 'Official Slip',
    },
    {
      id: 'sub-calculator',
      targetId: 'calculator',
      icon: Calculator,
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-50 border-purple-200',
      titleMr: '५. भाडे दर अंदाज / कॅल्क्युलेटर (Rate Guide)',
      titleEn: '5. Rate Estimator & Freight Guide',
      descMr: 'वजन, अंतर आणि वाहनाच्या प्रकारानुसार अंदाजे वाहतूक भाडे तपासा',
      descEn: 'Estimate freight costs based on payload, destination & vehicle selection',
      badgeMr: 'दर अंदाज',
      badgeEn: 'Estimator',
    },
    {
      id: 'sub-fleet',
      targetId: 'fleet',
      icon: ShieldCheck,
      iconColor: 'text-orange-600',
      iconBg: 'bg-orange-50 border-orange-200',
      titleMr: '६. वाहनांचा ताफा व गाड्यांची माहिती',
      titleEn: '6. Vehicle Fleet & Truck Capacities',
      descMr: 'पिकअप/छोटा हत्ती, १४ फूट ट्रक, वॉटरप्रूफ बंद कंटेनर व ३२ फूट हेवी ट्रेलर',
      descEn: 'Pickups, 14ft medium haulers, sealed containers & 32ft heavy trailers',
      badgeMr: 'सर्व गाड्या',
      badgeEn: 'All Trucks',
    },
    {
      id: 'sub-reviews',
      targetId: 'reviews',
      icon: Star,
      iconColor: 'text-amber-500',
      iconBg: 'bg-amber-50 border-amber-300',
      titleMr: '७. ५.०★ Google Reviews व ३५ अभिप्राय',
      titleEn: '7. 5.0★ Google Reviews & Testimonials',
      descMr: 'ग्राहकांचे वास्तविक Google Reviews, स्लायडर आणि थेट गुगल रिव्ह्यू देण्याची सोय',
      descEn: '35 verified Google customer reviews, marquee slider and review links',
      badgeMr: '५.० ★ रेटिंग',
      badgeEn: '5.0★ Rating',
    },
    {
      id: 'sub-faq',
      targetId: 'faq',
      icon: HelpCircle,
      iconColor: 'text-indigo-600',
      iconBg: 'bg-indigo-50 border-indigo-200',
      titleMr: '८. जीएसटी बिलिंग, पेमेंट व सुरक्षा हमी (FAQ)',
      titleEn: '8. GST Invoicing, Payments & Safety FAQs',
      descMr: 'जीएसटी बिल, Paid/To-Pay/TBB पेमेंट पद्धती, पोहोच वेळ आणि झिरो-डॅमेज हमी',
      descEn: 'GST billing, Paid/To-Pay/TBB credit accounts, transit timing & safety warranty',
      badgeMr: 'शंका समाधान',
      badgeEn: 'FAQ & Trust',
    },
    {
      id: 'sub-contact',
      targetId: 'contact',
      icon: MapPin,
      iconColor: 'text-teal-600',
      iconBg: 'bg-teal-50 border-teal-200',
      titleMr: '९. संपर्क पत्ता व Google Maps लोकेशन',
      titleEn: '9. Office Location & Google Maps',
      descMr: 'गट नं १५८ पुणे-नाशिक रोड, चिंबळी, चाकण ऑफिस, नकाशा व फोन संपर्क',
      descEn: 'Gat No 158 Pune-Nashik Road, Chimbali, Chakan office address & maps',
      badgeMr: 'चाकण ऑफिस',
      badgeEn: 'Chakan HQ',
    },
    {
      id: 'sub-call-direct',
      targetId: '',
      isExternal: true,
      externalUrl: `tel:+91${CONTACT_INFO.primaryPhone}`,
      icon: Phone,
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-50 border-emerald-200',
      titleMr: '१०. थेट फोन कॉल (Call Admin Now)',
      titleEn: '10. Direct Phone Call: 9881898635',
      descMr: `श्री. बळीराम कुडके: ${CONTACT_INFO.primaryPhone} / ${CONTACT_INFO.secondaryPhone}`,
      descEn: `Direct call to Mr. Baliram Kudke: ${CONTACT_INFO.primaryPhone} / ${CONTACT_INFO.secondaryPhone}`,
      badgeMr: '२४/७ कॉल',
      badgeEn: 'Call Now',
    },
    {
      id: 'sub-wa-direct',
      targetId: '',
      isExternal: true,
      externalUrl: `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
        isMr ? 'नमस्कार, मला चाकण येथून मालाची चौकशी व बुकिंग करायची आहे.' : 'Hello, I want to inquire about transport booking.'
      )}`,
      icon: MessageCircle,
      iconColor: 'text-green-600',
      iconBg: 'bg-green-50 border-green-200',
      titleMr: '११. थेट व्हॉट्सअ‍ॅप चौकशी (WhatsApp Dispatch)',
      titleEn: '11. Direct WhatsApp Dispatch',
      descMr: 'कागदपत्रे, वजन व पत्ता व्हॉट्सअ‍ॅपवर पाठवून तात्काळ गाडी लावा',
      descEn: 'Send parcel dimensions, weight or booking notes directly on WhatsApp',
      badgeMr: 'तात्काळ उत्तर',
      badgeEn: 'Instant Chat',
    },
  ];

  const handleJump = (item: SubjectItem) => {
    setIsOpen(false);
    if (item.isExternal && item.externalUrl) {
      window.open(item.externalUrl, '_self');
      return;
    }

    if (item.targetId) {
      setTimeout(() => {
        const el = document.getElementById(item.targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Highlight flash
          el.classList.add('ring-4', 'ring-amber-400', 'transition-all');
          setTimeout(() => {
            el.classList.remove('ring-4', 'ring-amber-400');
          }, 1800);
        }
      }, 150);
    }
  };

  const filteredSubjects = subjects.filter((s) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      s.titleMr.toLowerCase().includes(q) ||
      s.titleEn.toLowerCase().includes(q) ||
      s.descMr.toLowerCase().includes(q) ||
      s.descEn.toLowerCase().includes(q)
    );
  });

  return (
    <>
      {/* TRIGGER BUTTON (Placed in top navigation / header) */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group relative inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95 border border-amber-300/40 cursor-pointer"
        title={isMr ? 'सर्व विषय व थेट जाण्यासाठी पर्याय' : 'All subjects & quick jump options'}
      >
        <div className="w-5 h-5 rounded-md bg-white/20 flex items-center justify-center">
          <Menu className="w-3.5 h-3.5 text-white" />
        </div>
        <span className="font-serif tracking-tight">
          {isMr ? 'Options / सर्व विषय' : 'Options / All Subjects'}
        </span>
        <span className="px-1.5 py-0.2 bg-black/25 text-[10px] font-black rounded-full font-mono">
          {subjects.length}
        </span>
      </button>

      {/* MODAL / DRAWER OVERLAY */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center sm:justify-end bg-black/60 backdrop-blur-xs p-0 sm:p-4 animate-fadeIn">
          {/* Backdrop click to close */}
          <div 
            className="absolute inset-0" 
            onClick={() => setIsOpen(false)} 
          />

          {/* Drawer Container (Side panel on desktop, full height on mobile) */}
          <div className="relative z-10 w-full sm:max-w-lg md:max-w-xl h-full sm:h-[92vh] sm:my-auto bg-white sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 animate-slideInRight">
            {/* Drawer Header */}
            <div className="bg-[#10264a] text-white p-4 sm:p-5 flex items-center justify-between border-b-2 border-amber-400">
              <div className="flex items-center gap-3">
                <ChakanLogo size="sm" withContainer className="shrink-0" />
                <div>
                  <h3 className="text-base sm:text-lg font-black font-serif tracking-tight text-white flex items-center gap-1.5">
                    <span>{isMr ? 'सर्व विषय सूची (Options)' : 'All Subjects & Quick Jump'}</span>
                    <Sparkles className="w-4 h-4 text-amber-300" />
                  </h3>
                  <p className="text-[11px] sm:text-xs text-amber-200/90 font-medium">
                    {isMr 
                      ? 'एका क्लिकवर थेट हव्या त्या विभागावर जा' 
                      : 'Click any subject to jump directly to that section'}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Search Filter */}
            <div className="p-3 bg-slate-100 border-b border-slate-200">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={isMr ? 'विषय शोधा (उदा. बुकिंग, दर, गाड्या, रिव्ह्यूज, संपर्क)...' : 'Search subject (e.g., booking, rate, fleet, contact)...'}
                  className="w-full pl-9 pr-4 py-2 bg-white rounded-xl border border-slate-300 text-xs sm:text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Subjects List Scroll Area */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2.5 divide-y divide-slate-100">
              {filteredSubjects.map((subject) => {
                const IconComponent = subject.icon;
                return (
                  <button
                    key={subject.id}
                    onClick={() => handleJump(subject)}
                    className="w-full text-left pt-2.5 first:pt-0 group flex items-start gap-3.5 p-3 rounded-2xl hover:bg-amber-50/70 border border-transparent hover:border-amber-200 transition-all cursor-pointer active:scale-[0.99]"
                  >
                    {/* Icon */}
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl shrink-0 flex items-center justify-center border shadow-xs ${subject.iconBg} ${subject.iconColor} group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs sm:text-sm font-black text-[#10264a] font-serif group-hover:text-[#d83a2e] transition-colors truncate">
                          {isMr ? subject.titleMr : subject.titleEn}
                        </span>

                        {(subject.badgeMr || subject.badgeEn) && (
                          <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 group-hover:bg-amber-200 group-hover:text-amber-900 shrink-0">
                            {isMr ? subject.badgeMr : subject.badgeEn}
                          </span>
                        )}
                      </div>

                      <p className="text-[11px] sm:text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                        {isMr ? subject.descMr : subject.descEn}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="self-center pl-1 text-slate-400 group-hover:text-[#d83a2e] group-hover:translate-x-1 transition-all">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </button>
                );
              })}

              {filteredSubjects.length === 0 && (
                <div className="py-12 text-center text-slate-500 text-sm">
                  {isMr ? 'कोणताही विषय सापडला नाही.' : 'No matching subject found.'}
                </div>
              )}
            </div>

            {/* Drawer Footer Hotline */}
            <div className="bg-slate-50 p-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="text-slate-700 font-bold text-center sm:text-left">
                <span className="text-[#d83a2e] font-black">📞 {CONTACT_INFO.ownerName}:</span>{' '}
                <span className="font-mono">{CONTACT_INFO.primaryPhone}</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={`tel:+91${CONTACT_INFO.primaryPhone}`}
                  className="flex-1 sm:flex-initial text-center px-3.5 py-2 bg-[#d83a2e] hover:bg-[#b92c22] text-white font-bold rounded-xl shadow-xs transition-colors"
                >
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial text-center px-3.5 py-2 bg-[#138a45] hover:bg-[#0f7239] text-white font-bold rounded-xl shadow-xs transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
