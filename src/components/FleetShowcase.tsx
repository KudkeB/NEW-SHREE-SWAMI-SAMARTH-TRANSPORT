import React from 'react';
import { Truck, ShieldCheck, Box, Weight, ArrowRight } from 'lucide-react';
import { Language } from '../types/index.ts';
import { VEHICLES, CONTACT_INFO } from '../data/transportData.ts';
import { VehicleGraphic } from './VehicleGraphic.tsx';

interface FleetShowcaseProps {
  language: Language;
}

export const FleetShowcase: React.FC<FleetShowcaseProps> = ({ language }) => {
  const isMr = language === 'mr';

  return (
    <section id="fleet" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-[#d83a2e] mb-1">
            {isMr ? 'वाहनांचा ताफा' : 'Modern Transport Fleet'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#10264a] font-serif">
            {isMr ? 'सर्व प्रकारच्या मालासाठी गाड्या (Vehicle Fleet)' : 'Available Fleet & Truck Capacities'}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            {isMr
              ? '१ टनापासून ते ३२ टनांपर्यंतच्या बंद कंटेनर, पिकअप व ओपन बॉडी गाड्या २४ तास उपलब्ध.'
              : 'From 1-ton local pickups to 32ft multi-axle heavy trailers with complete goods security.'}
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VEHICLES.map((v) => (
            <div
              key={v.id}
              className="bg-slate-50 border border-slate-200 hover:border-amber-400 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Visual Graphic Representation */}
                <div className="mb-4">
                  <VehicleGraphic type={v.id} />
                </div>

                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 bg-white text-slate-700 border border-slate-200 rounded-md">
                    {v.badge}
                  </span>
                  <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{isMr ? 'उपलब्ध' : 'Active'}</span>
                  </span>
                </div>

                <h3 className="text-base font-black text-[#10264a] font-serif group-hover:text-[#d83a2e] transition-colors">
                  {isMr ? v.nameMr : v.name}
                </h3>

                <div className="mt-4 space-y-2 text-xs border-y border-slate-200 py-3">
                  <div className="flex items-center justify-between text-slate-600">
                    <span className="flex items-center gap-1.5">
                      <Weight className="w-3.5 h-3.5 text-amber-600" />
                      <span>{isMr ? 'क्षमता' : 'Payload'}</span>
                    </span>
                    <span className="font-bold text-[#10264a]">{v.capacity}</span>
                  </div>

                  <div className="flex items-center justify-between text-slate-600">
                    <span className="flex items-center gap-1.5">
                      <Box className="w-3.5 h-3.5 text-blue-600" />
                      <span>{isMr ? 'आकारमान' : 'Dimensions'}</span>
                    </span>
                    <span className="font-bold text-[#10264a]">{v.dimensions}</span>
                  </div>
                </div>

                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  <span className="font-bold text-slate-800">{isMr ? 'योग्य माल: ' : 'Best for: '}</span>
                  {isMr ? v.bestForMr : v.bestFor}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200">
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                    isMr 
                      ? `नमस्कार, मला ${v.nameMr} गाडीबाबत माहिती व बुकिंग हवी आहे.` 
                      : `Hello, I want to inquire about ${v.name} vehicle.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 bg-white hover:bg-amber-50 text-[#10264a] hover:text-[#d83a2e] font-extrabold text-xs rounded-xl border border-slate-300 hover:border-amber-400 transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  <span>{isMr ? 'ही गाडी बुक करा' : 'Inquire This Truck'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
