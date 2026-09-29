import React, { useState, useEffect } from 'react';
import { Package, Truck, MessageSquare, Send, Check, Copy, Phone, ShieldCheck, MapPin } from 'lucide-react';
import { Language, PartLoadFormData, FullLoadFormData, AreaEnquiryFormData } from '../types/index.ts';
import { CONTACT_INFO } from '../data/transportData.ts';
import { ChakanLogo } from './ChakanLogo.tsx';

interface BookingFormsProps {
  language: Language;
  selectedCity?: string;
}

export const BookingForms: React.FC<BookingFormsProps> = ({ 
  language, 
  selectedCity 
}) => {
  const isMr = language === 'mr';
  const [activeTab, setActiveTab] = useState<'part' | 'full' | 'enquiry'>('part');
  const [copied, setCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Part Load State
  const [partData, setPartData] = useState<PartLoadFormData>({
    name: '',
    phone: '',
    pickup: 'Chakan, Pune',
    delivery: '',
    material: '',
    weight: '',
    packaging: '',
    notes: '',
  });

  // Full Load State
  const [fullData, setFullData] = useState<FullLoadFormData>({
    name: '',
    phone: '',
    pickup: 'Chakan MIDC, Pune',
    delivery: '',
    material: '',
    weight: '',
    packaging: '',
    vehicle: '14 Ft Eicher',
    date: 'Immediate / Today',
    notes: '',
  });

  // Area Enquiry State
  const [enquiryData, setEnquiryData] = useState<AreaEnquiryFormData>({
    name: '',
    phone: '',
    area: '',
    enquiry: '',
  });

  // Update delivery destination when selected from Route component
  useEffect(() => {
    if (selectedCity) {
      setPartData((prev) => ({ ...prev, delivery: selectedCity }));
      setFullData((prev) => ({ ...prev, delivery: selectedCity }));
      setEnquiryData((prev) => ({ ...prev, area: selectedCity }));
    }
  }, [selectedCity]);

  // Construct formatted text for Part Load
  const buildPartLoadMessage = () => {
    return [
      `📦 *नवीन पार्ट लोड बुकिंग चौकशी*`,
      `*न्यू श्री स्वामी समर्थ ट्रान्सपोर्ट (चाकण)*`,
      `--------------------------------------`,
      `👤 *ग्राहक / कंपनी नाव:* ${partData.name || 'Not provided'}`,
      `📞 *मोबाईल नंबर:* ${partData.phone || 'Not provided'}`,
      `📍 *पिकअप ठिकाण:* ${partData.pickup}`,
      `🏁 *डिलिव्हरी ठिकाण:* ${partData.delivery}`,
      `📦 *मालाचा प्रकार:* ${partData.material}`,
      `⚖️ *वजन / नग:* ${partData.weight}`,
      partData.packaging ? `📦 *पॅकेजिंग:* ${partData.packaging}` : '',
      partData.notes ? `📝 *सूचना:* ${partData.notes}` : '',
      `--------------------------------------`,
      `प्रोप्रा: श्री. बळीराम कुडके (${CONTACT_INFO.primaryPhoneDisplay})`,
    ].filter(Boolean).join('\n');
  };

  // Construct formatted text for Full Load
  const buildFullLoadMessage = () => {
    return [
      `🚛 *नवीन फुल लोड गाडी बुकिंग चौकशी*`,
      `*न्यू श्री स्वामी समर्थ ट्रान्सपोर्ट (चाकण)*`,
      `--------------------------------------`,
      `👤 *ग्राहक / कंपनी नाव:* ${fullData.name || 'Not provided'}`,
      `📞 *मोबाईल नंबर:* ${fullData.phone || 'Not provided'}`,
      `📍 *पिकअप ठिकाण:* ${fullData.pickup}`,
      `🏁 *डिलिव्हरी ठिकाण:* ${fullData.delivery}`,
      `📦 *मालाचा तपशील:* ${fullData.material}`,
      `⚖️ *अंदाजे वजन:* ${fullData.weight}`,
      `🚚 *गाडीचा प्रकार:* ${fullData.vehicle}`,
      `📅 *माल भरण्याची तारीख:* ${fullData.date}`,
      fullData.packaging ? `📦 *पॅकेजिंग:* ${fullData.packaging}` : '',
      fullData.notes ? `📝 *विशेष आवश्यकता:* ${fullData.notes}` : '',
      `--------------------------------------`,
      `प्रोप्रा: श्री. बळीराम कुडके (${CONTACT_INFO.primaryPhoneDisplay})`,
    ].filter(Boolean).join('\n');
  };

  // Construct formatted text for Area Enquiry
  const buildEnquiryMessage = () => {
    return [
      `📝 *नवीन ट्रान्सपोर्ट दर चौकशी*`,
      `*न्यू श्री स्वामी समर्थ ट्रान्सपोर्ट (चाकण)*`,
      `--------------------------------------`,
      `👤 *नाव:* ${enquiryData.name || 'Not provided'}`,
      `📞 *मोबाईल नंबर:* ${enquiryData.phone || 'Not provided'}`,
      `📍 *क्षेत्र / शहर:* ${enquiryData.area}`,
      `💬 *चौकशी:* ${enquiryData.enquiry}`,
      `--------------------------------------`,
      `प्रोप्रा: श्री. बळीराम कुडके (${CONTACT_INFO.primaryPhoneDisplay})`,
    ].filter(Boolean).join('\n');
  };

  const getActiveMessage = () => {
    if (activeTab === 'part') return buildPartLoadMessage();
    if (activeTab === 'full') return buildFullLoadMessage();
    return buildEnquiryMessage();
  };

  // Handle direct submission: opens WhatsApp with Baliram Kudke (+91 9881898635)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = getActiveMessage();
    const url = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsSubmitted(true);
  };

  const handleCopyMessage = () => {
    const message = getActiveMessage();
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="booking" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header with Official Logo */}
        <div className="text-center mb-8 flex flex-col items-center">
          <ChakanLogo size="md" withContainer className="mb-3" />
          <div className="text-xs font-black uppercase tracking-widest text-[#d83a2e] mb-1">
            {isMr ? 'ऑनलाईन ट्रान्सपोर्ट बुकिंग' : 'Online Transport Booking'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#10264a] font-serif">
            {isMr ? 'ट्रान्सपोर्ट व गाडी बुकिंग फॉर्म' : 'Book Your Goods'}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            {isMr
              ? 'खालील फॉर्म भरून थेट संचालक श्री. बळीराम कुडके यांच्याशी WhatsApp वर किंवा फोनवर संपर्क साधा.'
              : 'Fill in cargo details below and send directly to proprietor Baliram Kudke via WhatsApp or phone.'}
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:+91${CONTACT_INFO.primaryPhone}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#10264a] hover:bg-[#1a386b] text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>
                {isMr ? 'थेट फोन करा:' : 'Call Directly:'}{' '}
                <strong className="text-amber-300">{CONTACT_INFO.primaryPhoneDisplay}</strong> ({CONTACT_INFO.ownerNameMr})
              </span>
            </a>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex rounded-xl bg-slate-100 p-1.5 mb-8 border border-slate-200">
          <button
            type="button"
            onClick={() => {
              setActiveTab('part');
              setIsSubmitted(false);
            }}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-lg text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
              activeTab === 'part'
                ? 'bg-white text-[#10264a] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Package className="w-4 h-4 text-amber-600" />
            <span>{isMr ? 'पार्ट लोड (Part Load)' : 'Book Part Load'}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('full');
              setIsSubmitted(false);
            }}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-lg text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
              activeTab === 'full'
                ? 'bg-white text-[#10264a] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Truck className="w-4 h-4 text-[#d83a2e]" />
            <span>{isMr ? 'फुल लोड (Full Load)' : 'Book Full Load'}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('enquiry');
              setIsSubmitted(false);
            }}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-lg text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
              activeTab === 'enquiry'
                ? 'bg-white text-[#10264a] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>{isMr ? 'क्षेत्र चौकशी (Enquiry)' : 'Area Enquiry'}</span>
          </button>
        </div>

        {/* Success Confirmation Banner */}
        {isSubmitted && (
          <div className="mb-6 p-4 bg-emerald-50 border-2 border-emerald-300 text-emerald-950 rounded-2xl flex items-center justify-between gap-3 text-xs sm:text-sm font-bold shadow-xs">
            <div className="flex items-center gap-2.5">
              <Check className="w-5 h-5 text-emerald-700 shrink-0" />
              <span>
                {isMr
                  ? `आपली माहिती तयार झाली असून WhatsApp वर उघडली आहे. संचालक श्री. बळीराम कुडके लवकरच आपल्याशी संपर्क करतील.`
                  : `Your details are formatted and opened in WhatsApp. Transporter Baliram Kudke will connect with you shortly.`}
              </span>
            </div>
            <a
              href={`tel:+91${CONTACT_INFO.primaryPhone}`}
              className="px-3 py-1.5 bg-[#10264a] text-white rounded-lg text-xs font-black shrink-0 hover:bg-[#1a386b]"
            >
              कॉल करा
            </a>
          </div>
        )}

        {/* Form Container */}
        <div className="bg-slate-50/70 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* PART LOAD FORM */}
            {activeTab === 'part' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {isMr ? 'आपले नाव / कंपनीचे नाव *' : 'Your Name / Company Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={partData.name}
                    onChange={(e) => setPartData({ ...partData, name: e.target.value })}
                    placeholder={isMr ? 'उदा. राहुल पाटील / ओम ऑटो इंडस्ट्रीज' : 'e.g., Rahul Patil / Om Auto Industries'}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 focus:border-amber-500 rounded-lg text-sm text-slate-900 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {isMr ? 'मोबाईल नंबर (संपर्कासाठी) *' : 'Contact Phone Number *'}
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={partData.phone}
                    onChange={(e) => setPartData({ ...partData, phone: e.target.value })}
                    placeholder="98XXXXXXXX (१० अंकी नंबर)"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 focus:border-amber-500 rounded-lg text-sm text-slate-900 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {isMr ? 'पिकअप ठिकाण (Pickup) *' : 'Pickup Location *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={partData.pickup}
                    onChange={(e) => setPartData({ ...partData, pickup: e.target.value })}
                    placeholder="Chakan MIDC Phase 2 / Bhosari / Chimbali"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 focus:border-amber-500 rounded-lg text-sm text-slate-900 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {isMr ? 'डिलिव्हरी ठिकाण (Destination) *' : 'Delivery Destination *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={partData.delivery}
                    onChange={(e) => setPartData({ ...partData, delivery: e.target.value })}
                    placeholder={isMr ? 'उदा. Nashik, Sinnar, Jalgaon...' : 'e.g., Nashik, Sinnar, Jalgaon...'}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 focus:border-amber-500 rounded-lg text-sm text-slate-900 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {isMr ? 'मटेरियल प्रकार (Material Type) *' : 'Material Type *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={partData.material}
                    onChange={(e) => setPartData({ ...partData, material: e.target.value })}
                    placeholder={isMr ? 'ऑटो पार्ट्स / मशिनरी / स्पेअर्स' : 'Auto parts / Steel / Boxes / Agriculture'}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 focus:border-amber-500 rounded-lg text-sm text-slate-900 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {isMr ? 'वजन किंवा पार्सल संख्या (Weight/Qty) *' : 'Weight or Parcels *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={partData.weight}
                    onChange={(e) => setPartData({ ...partData, weight: e.target.value })}
                    placeholder="उदा. 250 kg / 15 Boxes / 1.5 Ton"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 focus:border-amber-500 rounded-lg text-sm text-slate-900 outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {isMr ? 'पॅकेजिंग प्रकार (Packaging Type)' : 'Packaging Type'}
                  </label>
                  <input
                    type="text"
                    value={partData.packaging}
                    onChange={(e) => setPartData({ ...partData, packaging: e.target.value })}
                    placeholder={isMr ? 'उदा. लाकडी बॉक्स / खोके / गोणी / बंडल' : 'e.g., Wooden Crate / Corrugated Boxes / Pallets / Bags'}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 focus:border-amber-500 rounded-lg text-sm text-slate-900 outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {isMr ? 'अतिरिक्त माहिती (Additional Details)' : 'Additional Notes / Timings'}
                  </label>
                  <textarea
                    rows={2}
                    value={partData.notes}
                    onChange={(e) => setPartData({ ...partData, notes: e.target.value })}
                    placeholder={isMr ? 'कोणतीही विशेष सूचना किंवा वेळेची माहिती...' : 'Any special handling instructions or specific delivery time...'}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 focus:border-amber-500 rounded-lg text-sm text-slate-900 outline-none"
                  />
                </div>
              </div>
            )}

            {/* FULL LOAD FORM */}
            {activeTab === 'full' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {isMr ? 'ग्राहकाचे / कंपनीचे नाव *' : 'Customer / Company Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={fullData.name}
                    onChange={(e) => setFullData({ ...fullData, name: e.target.value })}
                    placeholder="Enter full name / company name"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 focus:border-amber-500 rounded-lg text-sm text-slate-900 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {isMr ? 'मोबाईल नंबर (संपर्कासाठी) *' : 'Contact Phone Number *'}
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={fullData.phone}
                    onChange={(e) => setFullData({ ...fullData, phone: e.target.value })}
                    placeholder="98XXXXXXXX (१० अंकी नंबर)"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 focus:border-amber-500 rounded-lg text-sm text-slate-900 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {isMr ? 'पिकअप ठिकाण *' : 'Pickup Location *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={fullData.pickup}
                    onChange={(e) => setFullData({ ...fullData, pickup: e.target.value })}
                    placeholder="Chakan MIDC Phase 1/2/3"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 focus:border-amber-500 rounded-lg text-sm text-slate-900 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {isMr ? 'डिलिव्हरी ठिकाण *' : 'Delivery Destination *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={fullData.delivery}
                    onChange={(e) => setFullData({ ...fullData, delivery: e.target.value })}
                    placeholder="City / Destination MIDC"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 focus:border-amber-500 rounded-lg text-sm text-slate-900 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {isMr ? 'मटेरियल तपशील *' : 'Material Details *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={fullData.material}
                    onChange={(e) => setFullData({ ...fullData, material: e.target.value })}
                    placeholder="Industrial components / Sheet metal / Engineering"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 focus:border-amber-500 rounded-lg text-sm text-slate-900 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {isMr ? 'अंदाजे वजन *' : 'Approximate Weight *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={fullData.weight}
                    onChange={(e) => setFullData({ ...fullData, weight: e.target.value })}
                    placeholder="e.g., 2.5 Ton / 7 Ton / 14 Ton"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 focus:border-amber-500 rounded-lg text-sm text-slate-900 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {isMr ? 'गाडीचा प्रकार (Required Vehicle) *' : 'Required Vehicle *'}
                  </label>
                  <select
                    value={fullData.vehicle}
                    onChange={(e) => setFullData({ ...fullData, vehicle: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 focus:border-amber-500 rounded-lg text-sm text-slate-900 outline-none"
                  >
                    <option value="Bolero Pickup (1.5 Ton)">Bolero Pickup (1.5 Ton Open/Closed)</option>
                    <option value="14 Ft Eicher (3.5 - 4 Ton)">14 Ft Eicher (3.5 - 4 Ton)</option>
                    <option value="17 Ft Eicher (5 - 6 Ton)">17 Ft Eicher (5 - 6 Ton)</option>
                    <option value="20 Ft Truck (7 - 9 Ton)">20 Ft Truck (7 - 9 Ton)</option>
                    <option value="24 Ft / 32 Ft Multi-Axle Container">32 Ft Container / Multi-Axle (15-25 Ton)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {isMr ? 'माल भरण्याची तारीख *' : 'Loading Date *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={fullData.date}
                    onChange={(e) => setFullData({ ...fullData, date: e.target.value })}
                    placeholder="Immediate / Tomorrow morning"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 focus:border-amber-500 rounded-lg text-sm text-slate-900 outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {isMr ? 'काही विशेष सूचना?' : 'Special Loading/Unloading Instructions'}
                  </label>
                  <textarea
                    rows={2}
                    value={fullData.notes}
                    onChange={(e) => setFullData({ ...fullData, notes: e.target.value })}
                    placeholder="Forklift loading required / Specific gate entry timing..."
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 focus:border-amber-500 rounded-lg text-sm text-slate-900 outline-none"
                  />
                </div>
              </div>
            )}

            {/* AREA ENQUIRY FORM */}
            {activeTab === 'enquiry' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {isMr ? 'आपले नाव (Your Name) *' : 'Your Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={enquiryData.name}
                    onChange={(e) => setEnquiryData({ ...enquiryData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 focus:border-amber-500 rounded-lg text-sm text-slate-900 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {isMr ? 'मोबाईल नंबर (संपर्कासाठी) *' : 'Contact Phone Number *'}
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={enquiryData.phone}
                    onChange={(e) => setEnquiryData({ ...enquiryData, phone: e.target.value })}
                    placeholder="98XXXXXXXX (१० अंकी नंबर)"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 focus:border-amber-500 rounded-lg text-sm text-slate-900 outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {isMr ? 'चौकशीचे क्षेत्र किंवा शहर (Area / City) *' : 'Destination Area / City *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={enquiryData.area}
                    onChange={(e) => setEnquiryData({ ...enquiryData, area: e.target.value })}
                    placeholder="e.g., Sangamner, Dhule, Solapur, Barshi, Jalgaon"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 focus:border-amber-500 rounded-lg text-sm text-slate-900 outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {isMr ? 'आपली सविस्तर चौकशी (Your Enquiry) *' : 'Your Enquiry Details *'}
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={enquiryData.enquiry}
                    onChange={(e) => setEnquiryData({ ...enquiryData, enquiry: e.target.value })}
                    placeholder={isMr ? 'आम्हाला नियमित पार्ट लोडसाठी रेट हवे आहेत / गाडी उपलब्ध आहे का?' : 'Describe your cargo, monthly frequency, or rate inquiries...'}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 focus:border-amber-500 rounded-lg text-sm text-slate-900 outline-none"
                  />
                </div>
              </div>
            )}

            {/* Direct Contact Assurance Note */}
            <div className="bg-amber-50/80 border border-amber-300 rounded-2xl p-4 flex items-start gap-3 text-xs text-amber-950">
              <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-extrabold text-sm block text-[#10264a]">
                  {isMr ? 'थेट प्रोप्रायटर संपर्क हमी' : 'Direct Owner Contact Guarantee'}
                </span>
                <p className="leading-relaxed">
                  {isMr
                    ? `आपण फॉर्म सबमिट करताच संपूर्ण माहिती थेट संचालक श्री. बळीराम कुडके (${CONTACT_INFO.primaryPhoneDisplay}) यांच्याकडे WhatsApp वर पाठवली जाईल व ते तात्काळ संपर्क करून गाडी व भाडे निश्चित करतील.`
                    : `Submitting formats your requirement directly to proprietor Baliram Kudke (${CONTACT_INFO.primaryPhoneDisplay}) on WhatsApp for immediate confirmation.`}
                </p>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3 justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  {isMr
                    ? 'चाकण एमआयडीसी, पुणे येथून संपूर्ण महाराष्ट्र थेट सेवा.'
                    : 'Direct freight services across Maharashtra from Chakan MIDC.'}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="px-3.5 py-3 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs rounded-xl shadow-2xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  title="Copy details text"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
                  <span>{copied ? (isMr ? 'कॉपी झाले!' : 'Copied!') : (isMr ? 'मजकूर कॉपी' : 'Copy Text')}</span>
                </button>

                <a
                  href={`tel:+91${CONTACT_INFO.primaryPhone}`}
                  className="px-4 py-3 bg-[#10264a] hover:bg-[#1a386b] text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isMr ? 'कॉल करा' : 'Call Directly'}</span>
                </a>

                {/* PRIMARY ACTION: DIRECT WHATSAPP TO BALIRAM KUDKE */}
                <button
                  type="submit"
                  className="flex-1 sm:flex-initial px-7 py-3.5 bg-[#128C7E] hover:bg-[#075E54] text-white font-black text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] border border-emerald-400"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>
                    {activeTab === 'part'
                      ? (isMr ? '✅ पार्ट लोड WhatsApp वर पाठवा' : '✅ Send Part Load to WhatsApp')
                      : activeTab === 'full'
                      ? (isMr ? '✅ फुल लोड गाडी WhatsApp वर पाठवा' : '✅ Send Full Load to WhatsApp')
                      : (isMr ? '✅ चौकशी WhatsApp वर पाठवा' : '✅ Send Enquiry to WhatsApp')}
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
