import React from 'react';

export const IslamicArchDeco = ({ className = "w-6 h-6 text-gold-500 opacity-60" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 21V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V21" strokeLinecap="round" />
    <path d="M8 21V13C8 10.7909 9.79086 9 12 9C14.2091 9 16 10.7909 16 13V21" strokeLinecap="round" />
    <circle cx="12" cy="5.5" r="1" fill="currentColor" />
  </svg>
);

export const IslamicStarDeco = ({ className = "w-5 h-5 text-gold-500" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L14.4 7.6L20 6.4L17.2 11.6L22 14.8L16.4 16.4L16 22L12 18L8 22L7.6 16.4L2 14.8L6.8 11.6L4 6.4L9.6 7.6L12 2Z" />
  </svg>
);

export const IslamicDivider = ({ text = "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", showArabic = true }) => (
  <div className="flex items-center justify-center gap-4 my-6">
    <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-gold-500/40 to-gold-500"></div>
    <div className="flex items-center gap-2 text-gold-600 font-arabic text-sm sm:text-base">
      <IslamicStarDeco className="w-3.5 h-3.5 text-gold-500/80" />
      {showArabic && <span className="text-emerald-900 font-arabic text-sm sm:text-base tracking-wide px-1">{text}</span>}
      <IslamicStarDeco className="w-3.5 h-3.5 text-gold-500/80" />
    </div>
    <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-gold-500/40 to-gold-500"></div>
  </div>
);
