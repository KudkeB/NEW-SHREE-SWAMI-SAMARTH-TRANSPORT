import React from 'react';

interface VehicleGraphicProps {
  type: string;
  className?: string;
}

export const VehicleGraphic: React.FC<VehicleGraphicProps> = ({ type, className = '' }) => {
  // Tata Ace / Pickup
  if (type === 'v1') {
    return (
      <div className={`relative w-full h-32 rounded-xl overflow-hidden bg-gradient-to-b from-sky-100 to-amber-50 flex items-center justify-center border border-slate-200 ${className}`}>
        <svg viewBox="0 0 240 120" className="w-full h-full p-2" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Road */}
          <line x1="10" y1="105" x2="230" y2="105" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
          <line x1="40" y1="105" x2="90" y2="105" stroke="#ffffff" strokeWidth="2" strokeDasharray="6 6" />
          <line x1="120" y1="105" x2="190" y2="105" stroke="#ffffff" strokeWidth="2" strokeDasharray="6 6" />
          
          {/* Pickup Cargo Body (White / Silver with orange stripe) */}
          <rect x="25" y="48" width="105" height="42" rx="3" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
          <line x1="25" y1="62" x2="130" y2="62" stroke="#ea580c" strokeWidth="4" />
          <rect x="35" y="32" width="85" height="20" fill="#93c5fd" opacity="0.6" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" />
          <text x="77" y="45" fill="#1e3a8a" fontSize="8" fontWeight="bold" textAnchor="middle">CARGO / 1.5T</text>
          
          {/* Cabin (Tata White / Blue) */}
          <path d="M130 48 L175 48 L195 72 L202 78 L202 90 L130 90 Z" fill="#ffffff" stroke="#334155" strokeWidth="2" />
          {/* Windshield */}
          <path d="M165 52 L178 52 L192 70 L165 70 Z" fill="#38bdf8" opacity="0.85" stroke="#0284c7" strokeWidth="1.5" />
          {/* Door line */}
          <line x1="162" y1="52" x2="162" y2="88" stroke="#cbd5e1" strokeWidth="1.5" />
          {/* Bumper */}
          <rect x="195" y="82" width="12" height="8" rx="2" fill="#0f172a" />
          {/* Headlight */}
          <circle cx="200" cy="76" r="3" fill="#facc15" />
          
          {/* Wheels */}
          <circle cx="58" cy="95" r="13" fill="#1e293b" />
          <circle cx="58" cy="95" r="6" fill="#94a3b8" />
          <circle cx="168" cy="95" r="13" fill="#1e293b" />
          <circle cx="168" cy="95" r="6" fill="#94a3b8" />
          
          {/* Tag */}
          <rect x="32" y="70" width="80" height="12" rx="2" fill="#10264a" />
          <text x="72" y="79" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">CHAKAN EXPRESS</text>
        </svg>
      </div>
    );
  }

  // Tata 407 / 14 Ft Truck
  if (type === 'v2') {
    return (
      <div className={`relative w-full h-32 rounded-xl overflow-hidden bg-gradient-to-b from-amber-50 to-orange-50 flex items-center justify-center border border-slate-200 ${className}`}>
        <svg viewBox="0 0 240 120" className="w-full h-full p-2" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Road */}
          <line x1="10" y1="105" x2="230" y2="105" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
          
          {/* 14 Ft Cargo Box with Tarpaulin Cover */}
          <path d="M20 32 L140 32 L140 90 L20 90 Z" fill="#d97706" stroke="#b45309" strokeWidth="2" />
          {/* Ropes on tarp */}
          <line x1="35" y1="32" x2="35" y2="90" stroke="#78350f" strokeWidth="1" strokeDasharray="4 3" />
          <line x1="65" y1="32" x2="65" y2="90" stroke="#78350f" strokeWidth="1" strokeDasharray="4 3" />
          <line x1="95" y1="32" x2="95" y2="90" stroke="#78350f" strokeWidth="1" strokeDasharray="4 3" />
          <line x1="125" y1="32" x2="125" y2="90" stroke="#78350f" strokeWidth="1" strokeDasharray="4 3" />
          
          <rect x="32" y="52" width="95" height="16" rx="2" fill="#ffffff" />
          <text x="80" y="63" fill="#b91c1c" fontSize="8" fontWeight="900" textAnchor="middle">॥ श्री स्वामी समर्थ ॥</text>
          
          {/* Tata 407 Red Cabin */}
          <path d="M140 40 L180 40 L198 62 L206 72 L206 90 L140 90 Z" fill="#dc2626" stroke="#991b1b" strokeWidth="2" />
          {/* Windshield */}
          <path d="M170 44 L178 44 L194 62 L170 62 Z" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
          {/* Chrome Grill */}
          <rect x="195" y="70" width="10" height="12" fill="#334155" />
          <line x1="195" y1="73" x2="205" y2="73" stroke="#f8fafc" strokeWidth="1" />
          <line x1="195" y1="76" x2="205" y2="76" stroke="#f8fafc" strokeWidth="1" />
          <line x1="195" y1="79" x2="205" y2="79" stroke="#f8fafc" strokeWidth="1" />
          {/* Headlights */}
          <circle cx="203" cy="84" r="2.5" fill="#facc15" />
          
          {/* Double Wheels Rear, Single Front */}
          <circle cx="48" cy="95" r="14" fill="#0f172a" />
          <circle cx="48" cy="95" r="7" fill="#64748b" />
          <circle cx="78" cy="95" r="14" fill="#0f172a" />
          <circle cx="78" cy="95" r="7" fill="#64748b" />
          <circle cx="178" cy="95" r="14" fill="#0f172a" />
          <circle cx="178" cy="95" r="7" fill="#64748b" />
        </svg>
      </div>
    );
  }

  // 17 Ft - 20 Ft Closed Container
  if (type === 'v3') {
    return (
      <div className={`relative w-full h-32 rounded-xl overflow-hidden bg-gradient-to-b from-blue-50 to-slate-100 flex items-center justify-center border border-slate-200 ${className}`}>
        <svg viewBox="0 0 240 120" className="w-full h-full p-2" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Road */}
          <line x1="10" y1="105" x2="230" y2="105" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
          
          {/* Metal Container Body (Heavy Duty Blue) */}
          <rect x="18" y="24" width="135" height="66" rx="2" fill="#1e3a8a" stroke="#172554" strokeWidth="2" />
          {/* Corrugation ribs */}
          {[30, 42, 54, 66, 78, 90, 102, 114, 126, 138].map((x, i) => (
            <line key={i} x1={x} y1="26" x2={x} y2="88" stroke="#3b82f6" strokeWidth="1.5" opacity="0.6" />
          ))}
          
          {/* Container Shield & Waterproof Tag */}
          <rect x="35" y="44" width="85" height="22" rx="3" fill="#ffffff" />
          <text x="77.5" y="55" fill="#10264a" fontSize="7.5" fontWeight="900" textAnchor="middle">SWAMI SAMARTH</text>
          <text x="77.5" y="62" fill="#15803d" fontSize="6" fontWeight="bold" textAnchor="middle">✓ WATERPROOF CONTAINER</text>
          
          {/* Modern Heavy Cabin */}
          <path d="M155 35 L190 35 L208 60 L212 72 L212 90 L155 90 Z" fill="#ea580c" stroke="#c2410c" strokeWidth="2" />
          {/* Cabin Windshield */}
          <path d="M178 38 L188 38 L204 58 L178 58 Z" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.5" />
          {/* Roof Spoiler */}
          <path d="M155 33 L185 28 L185 35 L155 35 Z" fill="#c2410c" />
          {/* Headlights */}
          <rect x="204" y="78" width="6" height="7" rx="1" fill="#facc15" />
          
          {/* Wheels (3 axles) */}
          <circle cx="45" cy="95" r="14" fill="#0f172a" />
          <circle cx="45" cy="95" r="7" fill="#cbd5e1" />
          <circle cx="75" cy="95" r="14" fill="#0f172a" />
          <circle cx="75" cy="95" r="7" fill="#cbd5e1" />
          <circle cx="185" cy="95" r="14" fill="#0f172a" />
          <circle cx="185" cy="95" r="7" fill="#cbd5e1" />
        </svg>
      </div>
    );
  }

  // 24 Ft - 32 Ft Multi-Axle / Trailer
  return (
    <div className={`relative w-full h-32 rounded-xl overflow-hidden bg-gradient-to-b from-slate-100 to-amber-50 flex items-center justify-center border border-slate-200 ${className}`}>
      <svg viewBox="0 0 240 120" className="w-full h-full p-2" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Road */}
        <line x1="10" y1="105" x2="230" y2="105" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
        
        {/* Long Multi-Axle Trailer Cargo Body */}
        <rect x="12" y="28" width="145" height="62" rx="2" fill="#0f172a" stroke="#334155" strokeWidth="2" />
        <line x1="12" y1="58" x2="157" y2="58" stroke="#eab308" strokeWidth="3" />
        
        {/* Logo Text on trailer */}
        <rect x="28" y="38" width="105" height="16" rx="2" fill="#ffffff" />
        <text x="80.5" y="49" fill="#10264a" fontSize="7.5" fontWeight="900" textAnchor="middle">CHAKAN HEAVY FREIGHT • 32FT</text>
        
        {/* Prime Mover / Multi-Axle Heavy Cabin */}
        <path d="M160 22 L198 22 L216 52 L222 68 L222 90 L160 90 Z" fill="#b91c1c" stroke="#7f1d1d" strokeWidth="2" />
        {/* Sun Visor */}
        <line x1="192" y1="26" x2="216" y2="48" stroke="#1e293b" strokeWidth="3" />
        {/* Windshield */}
        <path d="M185 26 L196 26 L212 50 L185 50 Z" fill="#93c5fd" opacity="0.8" stroke="#0284c7" strokeWidth="1.5" />
        {/* Chrome Front Grill */}
        <rect x="210" y="66" width="10" height="15" fill="#e2e8f0" stroke="#475569" strokeWidth="1" />
        <line x1="210" y1="70" x2="220" y2="70" stroke="#0f172a" strokeWidth="1" />
        <line x1="210" y1="74" x2="220" y2="74" stroke="#0f172a" strokeWidth="1" />
        <line x1="210" y1="78" x2="220" y2="78" stroke="#0f172a" strokeWidth="1" />
        
        {/* Heavy Multi-Axle Wheels (4 axles total) */}
        <circle cx="34" cy="96" r="12" fill="#0f172a" />
        <circle cx="34" cy="96" r="5" fill="#f8fafc" />
        <circle cx="60" cy="96" r="12" fill="#0f172a" />
        <circle cx="60" cy="96" r="5" fill="#f8fafc" />
        <circle cx="86" cy="96" r="12" fill="#0f172a" />
        <circle cx="86" cy="96" r="5" fill="#f8fafc" />
        
        <circle cx="178" cy="96" r="12" fill="#0f172a" />
        <circle cx="178" cy="96" r="5" fill="#f8fafc" />
        <circle cx="204" cy="96" r="12" fill="#0f172a" />
        <circle cx="204" cy="96" r="5" fill="#f8fafc" />
      </svg>
    </div>
  );
};
