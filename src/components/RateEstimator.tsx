import React, { useState } from 'react';
import { Calculator, Navigation, Clock, ShieldCheck, ArrowRight, MessageCircle } from 'lucide-react';
import { Language } from '../types/index.ts';
import { ESTIMATOR_CITIES, CONTACT_INFO } from '../data/transportData.ts';

interface RateEstimatorProps {
  language: Language;
}

export const RateEstimator: React.FC<RateEstimatorProps> = ({ language }) => {
  const isMr = language === 'mr';
  const [selectedCityName, setSelectedCityName] = useState<string>('Nashik');
  const [loadType, setLoadType] = useState<'part' | 'full'>('part');
  const [weightKg, setWeightKg] = useState<number>(500);

  const cityData = ESTIMATOR_CITIES.find(c => c.name === selectedCityName) || ESTIMATOR_CITIES[0];

  const estimatedCost = () => {
    if (loadType === 'part') {
      // Part load estimation logic: ~₹3.5 to ₹5.5 per kg depending on distance
      const distanceNum = parseInt(cityData.distance);
      const ratePerKg = distanceNum > 300 ? 5.2 : distanceNum > 200 ? 4.5 : 3.8;
      const baseMin = 450;
      const total = Math.max(baseMin, Math.round(weightKg * ratePerKg));
      return `₹${total.toLocaleString('en-IN')}`;
    } else {
      // Full load truck
      return cityData.baseRate;
    }
  };

  const cityNameDisplay = isMr ? cityData.nameMr : cityData.name;

  return (
    <section id="calculator" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="text-xs font-bold uppercase tracking-widest text-[#d83a2e] mb-1">
            {isMr ? 'दर व अंतर अंदाज' : 'Freight & Transit Estimator'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#10264a] font-serif">
            {isMr ? 'चाकण ते महाराष्ट्र दर व वेळ कॅल्क्युलेटर' : 'Chakan to Maharashtra Freight Calculator'}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            {isMr
              ? 'डिलिव्हरी शहर व लोड निवडून अंदाजे अंतर, वेळ व ट्रान्सपोर्ट दर जाणून घ्या.'
              : 'Estimate approximate transit duration and pricing guide from our Chakan hub.'}
          </p>
        </div>

        {/* Interactive Box */}
        <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Controls */}
            <div className="md:col-span-7 space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  1. {isMr ? 'डिलिव्हरी शहर निवडा (Select Destination)' : 'Select Destination City'}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {ESTIMATOR_CITIES.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setSelectedCityName(c.name)}
                      className={`px-3 py-2 rounded-lg text-xs font-bold text-left border transition-all cursor-pointer ${
                        selectedCityName === c.name
                          ? 'bg-[#10264a] text-white border-[#10264a] shadow-xs'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                      }`}
                    >
                      {isMr ? c.nameMr : c.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  2. {isMr ? 'लोड प्रकार निवडा (Load Type)' : 'Load Type'}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setLoadType('part')}
                    className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                      loadType === 'part'
                        ? 'bg-amber-500 text-white border-amber-600 shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    📦 {isMr ? 'पार्ट लोड (Part Load Parcel)' : 'Part Load (Loose/Boxes)'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setLoadType('full')}
                    className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                      loadType === 'full'
                        ? 'bg-[#d83a2e] text-white border-red-700 shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    🚛 {isMr ? 'फुल लोड (Dedicated Truck)' : 'Full Load (Full Truck)'}
                  </button>
                </div>
              </div>

              {loadType === 'part' && (
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      3. {isMr ? 'अंदाजे वजन (Approx Weight in KG)' : 'Approx Weight (KG)'}
                    </label>
                    <span className="font-mono text-sm font-black text-[#10264a]">
                      {weightKg} kg
                    </span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="5000"
                    step="50"
                    value={weightKg}
                    onChange={(e) => setWeightKg(Number(e.target.value))}
                    className="w-full accent-amber-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 font-semibold mt-1">
                    <span>50 kg</span>
                    <span>1,000 kg (1 Ton)</span>
                    <span>3,000 kg</span>
                    <span>5,000 kg</span>
                  </div>
                </div>
              )}
            </div>

            {/* Right Result Card */}
            <div className="md:col-span-5 bg-gradient-to-br from-[#10264a] to-[#0b1b36] text-white rounded-2xl p-6 sm:p-7 shadow-lg flex flex-col justify-between space-y-6">
              <div>
                <div className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
                  {isMr ? 'अंदाज सारांश' : 'Route Summary'}
                </div>
                <div className="text-xl sm:text-2xl font-black font-serif mt-1 flex items-center gap-2">
                  <span>Chakan</span>
                  <ArrowRight className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="text-amber-300">{cityNameDisplay}</span>
                </div>
                <p className="text-xs text-slate-300 mt-0.5">
                  {loadType === 'part' ? (isMr ? 'पार्ट लोड पार्सल' : 'Part Load Cargo') : (isMr ? 'फुल लोड थेट ट्रक' : 'Full Dedicated Vehicle')}
                </p>
              </div>

              <div className="space-y-3.5 py-4 border-y border-white/10 text-xs sm:text-sm">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-300">
                    <Navigation className="w-4 h-4 text-amber-400" />
                    <span>{isMr ? 'अंदाजे अंतर' : 'Approx Distance'}</span>
                  </span>
                  <span className="font-mono font-bold text-white text-sm">
                    {cityData.distance}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-300">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span>{isMr ? 'डिलिव्हरी वेळ' : 'Estimated Transit'}</span>
                  </span>
                  <span className="font-mono font-bold text-white text-sm">
                    {cityData.time}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                  <span className="flex items-center gap-2 text-slate-300 font-semibold">
                    <Calculator className="w-4 h-4 text-emerald-400" />
                    <span>{isMr ? 'मार्गदर्शक दर अंदाज' : 'Est. Freight Guide'}</span>
                  </span>
                  <span className="font-mono font-black text-emerald-400 text-lg sm:text-xl">
                    {estimatedCost()}
                  </span>
                </div>
              </div>

              <div>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                    isMr
                      ? `नमस्कार, मला चाकण ते ${cityNameDisplay} साठी ${loadType === 'part' ? 'पार्ट लोड (' + weightKg + ' kg)' : 'फुल लोड गाडी'} दर हवा आहे.`
                      : `Hello, please confirm freight rate from Chakan to ${cityData.name} for ${loadType === 'part' ? 'Part Load (' + weightKg + ' kg)' : 'Full Load truck'}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-[#138a45] hover:bg-[#0f7239] text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{isMr ? 'या दरासाठी व्हॉट्सअ‍ॅपवर बोला' : 'Get Confirmed Quote on WhatsApp'}</span>
                </a>
                <p className="text-[10px] text-slate-400 text-center mt-2">
                  * अंतिम दर मटेरियल प्रकार, पॅकिंग आणि लोडिंग पॉईंटनुसार निश्चित केला जातो.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
