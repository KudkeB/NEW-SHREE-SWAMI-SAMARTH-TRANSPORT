import React from 'react';
import { Package, Truck, MapPin, Navigation, PhoneCall, HelpCircle, ArrowUpRight } from 'lucide-react';
import { Language } from '../types/index.ts';
import { CONTACT_INFO } from '../data/transportData.ts';

interface CustomerOptionsProps {
  language: Language;
  onSelectOption?: (optionId: string) => void;
}

export const CustomerOptions: React.FC<CustomerOptionsProps> = ({ language }) => {
  const isMr = language === 'mr';

  const options = [
    {
      id: 'part-load',
      href: '#booking',
      icon: Package,
      iconColor: 'text-amber-600 bg-amber-50 border-amber-200',
      title: isMr ? 'पार्ट लोड बुकिंग' : 'BOOK PART LOAD',
      subtitle: isMr ? 'लहान ते मध्यम पार्सल, बॉक्सेस व मटेरियल' : 'Small to medium parcels, boxes & loose lots',
      description: isMr
        ? 'मटेरियल वजन व पत्ता भरून थेट व्हॉट्सअ‍ॅपवर तात्काळ बुकिंग पाठवा.'
        : 'Fill consignment details and send directly to Admin on WhatsApp.',
      badge: isMr ? 'दररोज सेवा' : 'Daily Dispatch',
      actionText: isMr ? 'फॉर्म उघडा' : 'Open Form',
    },
    {
      id: 'full-load',
      href: '#booking',
      icon: Truck,
      iconColor: 'text-red-600 bg-red-50 border-red-200',
      title: isMr ? 'फुल लोड गाडी बुकिंग' : 'BOOK FULL LOAD',
      subtitle: isMr ? 'संपूर्ण ट्रक / कंटेनर थेट फॅक्टरी ते फॅक्टरी' : 'Dedicated truck or container factory-to-factory',
      description: isMr
        ? 'गाडीचा प्रकार (१४ft, १७ft, ३२ft), वजन व तारीख निवडून बुकिंग करा.'
        : 'Select truck size (14ft, 17ft, 32ft), weight & date for booking.',
      badge: isMr ? 'थेट गाडी' : 'Direct Vehicle',
      actionText: isMr ? 'फॉर्म उघडा' : 'Open Form',
    },
    {
      id: 'area-wise',
      href: '#routes',
      icon: MapPin,
      iconColor: 'text-blue-600 bg-blue-50 border-blue-200',
      title: isMr ? 'भागांनुसार ट्रान्सपोर्ट' : 'AREA WISE TRANSPORT',
      subtitle: isMr ? 'नाशिक, खानदेश, मराठवाडा व इतर मार्ग' : 'Nashik, Khandesh, Marathwada & All Routes',
      description: isMr
        ? 'आपले डिलिव्हरी शहर निवडून संबंधित ट्रान्सपोर्ट व पार्सल नेटवर्क तपासा.'
        : 'Check corresponding transport line and transit times by destination.',
      badge: isMr ? '४०+ शहरे' : '40+ Towns',
      actionText: isMr ? 'मार्ग शोधा' : 'Browse Routes',
    },
    {
      id: 'location',
      href: CONTACT_INFO.googleMapsUrl,
      target: '_blank',
      rel: 'noopener noreferrer',
      icon: Navigation,
      iconColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      title: isMr ? 'चाकण ऑफिस लोकेशन' : 'CHAKAN LOCATION',
      subtitle: isMr ? 'पुणे-नाशिक हायवे, बर्गे वस्ती, चिंबळी' : 'Pune-Nashik Highway, Chimbali, Chakan',
      description: isMr
        ? 'गूगल मॅप्सवर आमचे चाकण ऑफिस थेट उघडून नेव्हिगेशन सुरू करा.'
        : 'Open verified Google Maps location for fast direct driving navigation.',
      badge: isMr ? 'गूगल मॅप' : 'Google Maps',
      actionText: isMr ? 'मॅप उघडा' : 'View on Map',
    },
    {
      id: 'contact',
      href: '#contact',
      icon: PhoneCall,
      iconColor: 'text-purple-600 bg-purple-50 border-purple-200',
      title: isMr ? 'थेट ॲडमिन संपर्क' : 'ADMIN CONTACT',
      subtitle: `${CONTACT_INFO.primaryPhone} / ${CONTACT_INFO.secondaryPhone}`,
      description: isMr
        ? 'बळीराम कुडके व ऑफिस टीमशी थेट फोन किंवा व्हॉट्सअ‍ॅपवर बोला.'
        : 'Call Mr. Baliram Kudke or operations desk directly for prompt assistance.',
      badge: isMr ? '२४/७ उपलब्ध' : 'Direct Call',
      actionText: isMr ? 'नंबर पहा' : 'Call Now',
    },
    {
      id: 'enquiry',
      href: '#enquiry',
      icon: HelpCircle,
      iconColor: 'text-teal-600 bg-teal-50 border-teal-200',
      title: isMr ? 'विशेष चौकशी अर्ज' : 'AREA ENQUIRY',
      subtitle: isMr ? 'नवीन शहर, नियमित कॉन्ट्रॅक्ट व रेट' : 'New towns, regular contracts & special rates',
      description: isMr
        ? 'कोणत्याही शहराच्या वाहतुकीबाबत विशेष दर व माहितीसाठी चौकशी पाठवा.'
        : 'Inquire for routes, contract freight rates, or recurring industrial logistics.',
      badge: isMr ? 'त्वरित उत्तर' : 'Instant Reply',
      actionText: isMr ? 'चौकशी करा' : 'Enquire',
    },
  ];

  return (
    <section id="options" className="py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-bold uppercase tracking-widest text-[#d83a2e] mb-1">
            {isMr ? 'जलद सेवा पर्याय' : 'Customer Service Hub'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#10264a] font-serif">
            {isMr ? 'ग्राहकांसाठी प्रमुख पर्याय' : 'Customer Options & Quick Access'}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            {isMr
              ? 'आपल्या गरजेनुसार बुकिंग, मार्ग शोधणे किंवा थेट फोनद्वारे सेवा निवडा.'
              : 'Direct links to book freight, inspect route networks, or get immediate support.'}
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {options.map((opt) => {
            const Icon = opt.icon;
            return (
              <a
                key={opt.id}
                href={opt.href}
                target={opt.target}
                rel={opt.rel}
                className="group relative bg-white border border-slate-200 hover:border-amber-400/80 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${opt.iconColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                      {opt.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#10264a] group-hover:text-[#d83a2e] transition-colors flex items-center gap-1.5 font-serif">
                    <span>{opt.title}</span>
                  </h3>
                  <div className="text-xs font-semibold text-amber-700 mt-0.5">
                    {opt.subtitle}
                  </div>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {opt.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#10264a] group-hover:text-[#d83a2e] transition-colors">
                  <span>{opt.actionText}</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
