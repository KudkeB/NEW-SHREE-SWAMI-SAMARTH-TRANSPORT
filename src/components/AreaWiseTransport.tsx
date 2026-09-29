import React, { useState, useMemo } from 'react';
import { Search, MapPin, Clock, CheckCircle2, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { Language } from '../types/index.ts';
import { ROUTES_DATA, CONTACT_INFO } from '../data/transportData.ts';

interface AreaWiseTransportProps {
  language: Language;
  onSelectDestination?: (cityName: string) => void;
}

export const AreaWiseTransport: React.FC<AreaWiseTransportProps> = ({ 
  language, 
  onSelectDestination 
}) => {
  const isMr = language === 'mr';
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRouteId, setSelectedRouteId] = useState<string>('all');

  const filteredRoutes = useMemo(() => {
    let routes = ROUTES_DATA;

    if (selectedRouteId !== 'all') {
      routes = routes.filter(r => r.id === selectedRouteId);
    }

    if (!searchQuery.trim()) {
      return routes;
    }

    const q = searchQuery.toLowerCase().trim();
    return routes.filter(route => {
      const matchName = (isMr ? route.nameMr : route.name).toLowerCase().includes(q);
      const matchOperator = (isMr ? route.operatorMr : route.operator).toLowerCase().includes(q);
      const matchEnCities = route.destinations.some(d => d.toLowerCase().includes(q));
      const matchMrCities = route.destinationsMr.some(d => d.includes(q));
      return matchName || matchOperator || matchEnCities || matchMrCities;
    });
  }, [searchQuery, selectedRouteId, isMr]);

  const handleCityClick = (city: string) => {
    if (onSelectDestination) {
      onSelectDestination(city);
    }
  };

  return (
    <section id="routes" className="py-16 bg-[#fff8ec] border-b border-[#e8dccb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs font-bold uppercase tracking-widest text-[#d83a2e] mb-1">
            {isMr ? 'महाराष्ट्र नेटवर्क' : 'Maharashtra Route Network'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#10264a] font-serif">
            {isMr ? 'भागांनुसार ट्रान्सपोर्ट नेटवर्क (Area Wise Transport)' : 'Area Wise Transport Network'}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            {isMr
              ? 'ग्राहकाने आपले डिलिव्हरी एरिया किंवा शहर पाहून संबंधित ट्रान्सपोर्ट व थेट संपर्क निवडावा.'
              : 'Find your destination district or industrial area and check the dedicated daily transport partner.'}
          </p>
        </div>

        {/* Live Search & Filter Bar */}
        <div className="max-w-2xl mx-auto mb-8 space-y-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isMr ? 'शहर किंवा तालुका शोधा (उदा. Nashik, Sinnar, Jalgaon, Latur...)' : 'Search city or town (e.g., Nashik, Sinnar, Jalgaon, Latur...)'}
              className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-amber-200 focus:border-amber-500 rounded-xl text-slate-800 placeholder-slate-400 shadow-xs outline-none text-sm md:text-base transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded"
              >
                Clear
              </button>
            )}
          </div>

          {/* Route filter selector */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold">
            <button
              onClick={() => setSelectedRouteId('all')}
              className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                selectedRouteId === 'all'
                  ? 'bg-[#10264a] text-white border-[#10264a]'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
              }`}
            >
              {isMr ? 'सर्व मार्ग (All)' : 'All Routes'}
            </button>
            {ROUTES_DATA.map((route) => (
              <button
                key={route.id}
                onClick={() => setSelectedRouteId(route.id)}
                className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                  selectedRouteId === route.id
                    ? 'bg-[#10264a] text-white border-[#10264a]'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                }`}
              >
                {isMr ? route.operatorMr.split('.')[1]?.trim() : route.operator.split('.')[1]?.trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredRoutes.length === 0 ? (
            <div className="col-span-full bg-white rounded-2xl p-8 text-center border border-dashed border-amber-300">
              <MapPin className="w-10 h-10 text-amber-500 mx-auto mb-2" />
              <div className="text-lg font-bold text-slate-800">
                {isMr ? 'कोणतेही शहर सापडले नाही' : 'No matching city found'}
              </div>
              <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
                {isMr 
                  ? 'आम्ही महाराष्ट्रातील इतरही गावांमध्ये विशेष गाडीने सेवा देतो. कृपया थेट 9881898635 वर चौकशी करा.' 
                  : 'We also provide special full load trucks to other parts of Maharashtra. Please call 9881898635 directly.'}
              </p>
              <a
                href={`tel:+91${CONTACT_INFO.primaryPhone}`}
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-[#d83a2e] text-white rounded-lg text-sm font-bold shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>{isMr ? 'थेट ॲडमिनला कॉल करा' : 'Call Admin Now'}</span>
              </a>
            </div>
          ) : (
            filteredRoutes.map((route) => {
              const operatorTitle = isMr ? route.operatorMr : route.operator;
              const routeTitle = isMr ? route.nameMr : route.name;
              const destinations = isMr ? route.destinationsMr : route.destinations;

              return (
                <div
                  key={route.id}
                  className="bg-white rounded-2xl border-2 border-[#e8dccb] hover:border-amber-400 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Route Header */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#d83a2e] block">
                          {routeTitle}
                        </span>
                        <h3 className="text-lg sm:text-xl font-black text-[#10264a] font-serif mt-0.5">
                          {operatorTitle}
                        </h3>
                      </div>
                      <span className="shrink-0 flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                        <Clock className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{isMr ? route.transitTimeMr : route.transitTime}</span>
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-slate-600 italic mb-4">
                      "{isMr ? route.taglineMr : route.tagline}"
                    </p>

                    {/* Destination Pills List */}
                    <div className="mb-5">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-600" />
                        <span>{isMr ? 'समाविष्ट शहरे व औद्योगिक क्षेत्रे:' : 'Covered Cities & Industrial Hubs:'}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 max-h-56 overflow-y-auto pr-1">
                        {destinations.map((dest, idx) => {
                          const isHighlighted = searchQuery.trim() && 
                            dest.toLowerCase().includes(searchQuery.toLowerCase().trim());
                          return (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => handleCityClick(dest)}
                              title={isMr ? `${dest} साठी बुकिंग करा` : `Book for ${dest}`}
                              className={`text-xs font-bold px-2.5 py-1 rounded-md transition-colors text-left cursor-pointer ${
                                isHighlighted
                                  ? 'bg-amber-300 text-amber-950 ring-2 ring-amber-500'
                                  : 'bg-slate-100 hover:bg-amber-100 text-slate-800 hover:text-amber-900 border border-slate-200'
                              }`}
                            >
                              {dest}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Suitable materials */}
                    <div className="text-xs text-slate-600 bg-amber-50/70 rounded-lg p-2.5 border border-amber-100 mb-4">
                      <span className="font-bold text-amber-900">
                        {isMr ? 'विशेष वाहतूक: ' : 'Ideal for: '}
                      </span>
                      <span>{isMr ? route.popularForMr : route.popularFor}</span>
                    </div>
                  </div>

                  {/* Route Actions */}
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <a
                      href={`tel:+91${CONTACT_INFO.primaryPhone}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[#d83a2e]"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#d83a2e]" />
                      <span>{CONTACT_INFO.primaryPhone}</span>
                    </a>

                    <a
                      href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                        isMr
                          ? `नमस्कार, मला ${operatorTitle} मार्गावरील वाहतुकीबाबत माहिती हवी आहे.`
                          : `Hello, I want to book transport for ${route.name} route.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#138a45] hover:bg-[#0f7239] text-white rounded-lg text-xs font-bold shadow-xs transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>{isMr ? 'या मार्गासाठी चौकशी' : 'Enquire Route'}</span>
                    </a>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
