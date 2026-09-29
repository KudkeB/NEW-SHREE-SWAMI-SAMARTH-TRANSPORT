import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Navigation, Clock, User, ShieldCheck } from 'lucide-react';
import { Language } from '../types/index.ts';
import { CONTACT_INFO } from '../data/transportData.ts';

interface ContactSectionProps {
  language: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const isMr = language === 'mr';

  return (
    <section id="contact" className="py-16 bg-[#fff8ec] border-b border-[#e8dccb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-[#d83a2e] mb-1">
            {isMr ? 'थेट संपर्क व पत्ता' : 'Get in Touch'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#10264a] font-serif">
            {isMr ? 'ॲडमिन संपर्क व ऑफिस पत्ता' : 'Admin Contact & Chakan Hub Location'}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            {isMr
              ? 'ग्राहकाला दोन्ही ॲडमिन नंबर उपलब्ध; व्हॉट्सअ‍ॅप चौकशीसाठी 9881898635 वर संपर्क करा.'
              : 'Direct hotline numbers with primary WhatsApp dispatch and verified Google Maps office link.'}
          </p>
        </div>

        {/* 2-Column Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Admin 1 (Primary) */}
          <div className="bg-white border-2 border-[#e8dccb] hover:border-amber-400 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 bg-red-50 text-red-700 border border-red-200 rounded-md">
                  {isMr ? 'प्राथमिक संपर्क व व्हॉट्सअ‍ॅप' : 'Primary Admin & WhatsApp'}
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  24/7 Available
                </span>
              </div>

              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-[#10264a] text-amber-400 flex items-center justify-center">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#10264a]">
                    {isMr ? CONTACT_INFO.ownerNameMr : CONTACT_INFO.ownerName}
                  </h3>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                    {isMr ? 'संचालक / मालक' : 'Proprietor & Logistics Head'}
                  </div>
                </div>
              </div>

              <div className="font-mono text-2xl sm:text-3xl font-black text-[#10264a] my-4">
                📞 {CONTACT_INFO.primaryPhone}
              </div>

              <p className="text-xs text-slate-600 mb-6">
                {isMr
                  ? 'सर्व प्रकारच्या पार्ट लोड, फुल लोड आणि तातडीच्या गाड्यांसाठी थेट संपर्क करा.'
                  : 'Call or WhatsApp for immediate vehicle placement, load status, and custom quote.'}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100">
              <a
                href={`tel:+91${CONTACT_INFO.primaryPhone}`}
                className="py-3 px-4 bg-[#d83a2e] hover:bg-[#b92c22] text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>{isMr ? 'कॉल ॲडमिन १' : 'Call Admin 1'}</span>
              </a>

              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                  isMr ? 'नमस्कार बळीरामजी, मला गाडी बुकिंग करायची आहे.' : 'Hello, I want to book transport.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 bg-[#138a45] hover:bg-[#0f7239] text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Admin 2 */}
          <div className="bg-white border-2 border-[#e8dccb] hover:border-amber-400 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-md">
                  {isMr ? 'द्वितीय संपर्क लाईन' : 'Secondary Line'}
                </span>
                <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                  Voice Call
                </span>
              </div>

              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-slate-100 text-[#10264a] border border-slate-300 flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#10264a]">
                    {isMr ? 'ऑफिस व वाहन डेस्क' : 'Dispatch & Operations Desk'}
                  </h3>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                    {isMr ? 'चाकण ट्रान्सपोर्ट ऑफिस' : 'Chakan Transport Office'}
                  </div>
                </div>
              </div>

              <div className="font-mono text-2xl sm:text-3xl font-black text-[#10264a] my-4">
                📞 {CONTACT_INFO.secondaryPhone}
              </div>

              <p className="text-xs text-slate-600 mb-6">
                {isMr
                  ? 'हा नंबर अतिरिक्त कॉल संपर्क म्हणून वापरला जाईल. गाडी लोडिंग व पोच तपासणीसाठी फोन करा.'
                  : 'Secondary operational hotline for driver coordination, pickup status, and support.'}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <a
                href={`tel:+91${CONTACT_INFO.secondaryPhone}`}
                className="w-full py-3 px-4 bg-white hover:bg-slate-100 text-[#10264a] font-extrabold text-xs sm:text-sm rounded-xl border-2 border-slate-300 shadow-2xs transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#10264a]" />
                <span>{isMr ? 'कॉल ॲडमिन २ (Call Admin 2)' : 'Call Admin 2'}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Office & Maps Location Card */}
        <div className="bg-white border-2 border-[#e8dccb] rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-[#d83a2e] text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>{isMr ? 'अधिकृत ऑफिस पत्ता' : 'Physical Logistics Hub'}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#10264a] font-serif">
                NEW SHREE SWAMI SAMARTH TRANSPORT
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-slate-900 shrink-0">📍 {isMr ? 'पत्ता:' : 'Address:'}</span>
                  <span>{isMr ? CONTACT_INFO.addressMr : CONTACT_INFO.address}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="font-bold text-slate-900 shrink-0">✉️ {isMr ? 'ईमेल:' : 'Email:'}</span>
                  <a 
                    href={`mailto:${CONTACT_INFO.email}`} 
                    className="text-[#10264a] hover:text-[#d83a2e] underline font-semibold break-all"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="font-bold text-slate-900 shrink-0">⏰ {isMr ? 'वेळ:' : 'Hours:'}</span>
                  <span>{isMr ? '२४ तास गाडी बुकिंग व माल उतरवणे सेवा' : '24x7 Vehicle Placement & Unloading Support'}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={CONTACT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#10264a] hover:bg-[#1a3a6c] text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-xs transition-colors"
                >
                  <Navigation className="w-4 h-4 text-amber-400" />
                  <span>{isMr ? '📍 गूगल मॅप्सवर ऑफिस उघडा' : '📍 Open Chakan Google Maps'}</span>
                </a>

                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                    'Hello, please send exact location of Chakan office.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-slate-50 text-slate-800 font-extrabold text-xs sm:text-sm rounded-xl border border-slate-300 shadow-2xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#138a45]" />
                  <span>{isMr ? 'लोकेशन व्हॉट्सअ‍ॅपवर मागा' : 'Request Map Location on WhatsApp'}</span>
                </a>
              </div>
            </div>

            {/* Visual Location Preview */}
            <div className="lg:col-span-5 bg-slate-100 rounded-xl p-5 border border-slate-200 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-amber-100 border border-amber-300 text-amber-800 flex items-center justify-center mx-auto">
                <MapPin className="w-7 h-7" />
              </div>
              <h4 className="font-black text-base text-[#10264a] font-serif">
                {isMr ? 'चाकण - पुणे नाशिक महामार्ग' : 'Chakan - Pune Nashik Highway'}
              </h4>
              <p className="text-xs text-slate-600">
                {isMr
                  ? 'नायरा पेट्रोल पंपासमोर, बर्गे वस्ती, चिंबळी फाट्याजवळ, चाकण एमआयडीसी परिसरासाठी मध्यवर्ती स्थान.'
                  : 'Opposite Nayara Petroleum, Chimbali, near Chakan MIDC Phases 1, 2, 3, and Talegaon Industrial belt.'}
              </p>
              <div className="pt-1">
                <span className="inline-block text-[11px] font-mono font-bold bg-white text-slate-700 px-3 py-1 rounded border border-slate-300">
                  PIN CODE: 410501 (CHAKAN)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
