import React from 'react';

interface BestBadgeProps {
  className?: string;
  size?: number;
}

export const BestBadge: React.FC<BestBadgeProps> = ({ className = '', size = 110 }) => {
  return (
    <div className={`relative inline-block select-none ${className}`} style={{ width: size, height: size * 0.9 }}>
      <svg
        viewBox="0 0 200 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-lg"
      >
        <defs>
          <linearGradient id="badgeGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="30%" stopColor="#facc15" />
            <stop offset="70%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#a16207" />
          </linearGradient>
          <linearGradient id="ribbonRed" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="50%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#991b1b" />
          </linearGradient>
        </defs>

        {/* Left Ribbon */}
        <g>
          <path d="M45 70 L10 100 L40 105 L20 125 L65 95 Z" fill="url(#ribbonRed)" />
          <path d="M45 70 L20 80 L35 90 Z" fill="#7f1d1d" opacity="0.6" />
        </g>

        {/* Right Ribbon */}
        <g>
          <path d="M155 70 L190 100 L160 105 L180 125 L135 95 Z" fill="url(#ribbonRed)" />
          <path d="M155 70 L180 80 L165 90 Z" fill="#7f1d1d" opacity="0.6" />
        </g>

        {/* Outer Gold Scalloped Ring */}
        <circle cx="100" cy="85" r="74" fill="url(#badgeGold)" stroke="#854d0e" strokeWidth="2" />
        
        {/* Scallop indentations effect */}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          const rad = (angle * Math.PI) / 180;
          const cx = 100 + Math.cos(rad) * 72;
          const cy = 85 + Math.sin(rad) * 72;
          return (
            <circle key={i} cx={cx} cy={cy} r="9" fill="url(#badgeGold)" stroke="#a16207" strokeWidth="1" />
          );
        })}

        {/* Inner Gold Ring */}
        <circle cx="100" cy="85" r="64" fill="url(#badgeGold)" />

        {/* Black Disc Center */}
        <circle cx="100" cy="85" r="58" fill="#121212" stroke="#eab308" strokeWidth="2" />

        {/* Crown at top */}
        <path
          d="M86 52 L91 62 L100 48 L109 62 L114 52 L116 66 L84 66 Z"
          fill="url(#badgeGold)"
          stroke="#ca8a04"
          strokeWidth="0.5"
        />

        {/* "Best" script text */}
        <text
          x="100"
          y="93"
          textAnchor="middle"
          fontSize="36"
          fontWeight="bold"
          fontStyle="italic"
          fontFamily="Georgia, serif"
          fill="url(#badgeGold)"
        >
          Best
        </text>

        {/* 5 Stars */}
        <g fill="url(#badgeGold)">
          {[-28, -14, 0, 14, 28].map((offset, i) => (
            <path
              key={i}
              transform={`translate(${100 + offset}, 112) scale(0.65)`}
              d="M0 -8 L2.4 -2.4 L8.2 -1.8 L3.8 2.2 L5.2 8 L0 5 L-5.2 8 L-3.8 2.2 L-8.2 -1.8 L-2.4 -2.4 Z"
            />
          ))}
        </g>
      </svg>
    </div>
  );
};
