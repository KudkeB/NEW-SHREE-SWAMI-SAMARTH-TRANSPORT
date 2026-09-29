import React, { useState } from 'react';
import officialLogoImage from '../assets/images/ssst_chakan_logo_1790653088435.jpg';

interface ChakanLogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showSubtitle?: boolean;
  withContainer?: boolean;
}

export const ChakanLogo: React.FC<ChakanLogoProps> = ({ 
  className = '', 
  size = 'md',
  showSubtitle = false,
  withContainer = false
}) => {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    xs: 'w-8 h-8',
    sm: 'w-12 h-12',
    md: 'w-20 h-20 sm:w-24 sm:h-24',
    lg: 'w-28 h-28 sm:w-36 sm:h-36',
    xl: 'w-40 h-40 sm:w-48 sm:h-48',
    '2xl': 'w-56 h-56 sm:w-64 sm:h-64',
  };

  const containerClasses = withContainer 
    ? 'p-1.5 bg-white rounded-2xl shadow-md border-2 border-amber-400/60 ring-2 ring-amber-100'
    : '';

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <div className={`relative overflow-hidden flex items-center justify-center ${containerClasses} ${sizeClasses[size]}`}>
        {!imageError ? (
          <img
            src={officialLogoImage}
            alt="New Shree Swami Samarth Transport Official Logo"
            className="w-full h-full object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white font-serif font-black text-2xl shadow-md border border-amber-300">
            SS
          </div>
        )}
      </div>

      {showSubtitle && (
        <div className="text-center mt-2">
          <div className="flex items-center justify-center gap-2">
            <span className="h-[1.5px] w-6 bg-gradient-to-r from-transparent to-amber-700"></span>
            <span className="font-serif font-black tracking-widest text-[#7c2d12] text-xs sm:text-sm uppercase">
              CHAKAN
            </span>
            <span className="h-[1.5px] w-6 bg-gradient-to-l from-transparent to-amber-700"></span>
          </div>
          <p className="text-[10px] font-bold tracking-tight text-slate-700 uppercase mt-0.5 whitespace-nowrap">
            RELIABLE | SAFE | TIMELY LOGISTICS
          </p>
          <p className="text-[9px] font-black tracking-wider text-slate-900 uppercase">
            PUNE
          </p>
        </div>
      )}
    </div>
  );
};
