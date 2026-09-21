import React from 'react';
import { ShieldCheck, GraduationCap, Users, Laptop, Sparkles } from 'lucide-react';
import { IslamicDivider } from './IslamicPattern';
import { foundationInfo } from '../data/foundationInfo';

export default function TrustSection() {
  const iconMap = {
    ShieldCheck: ShieldCheck,
    GraduationCap: GraduationCap,
    Users: Users,
    Laptop: Laptop
  };

  return (
    <section className="py-16 sm:py-20 bg-sand-50 relative overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-islamic-grid-light opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Our Foundation's Vision</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight font-serif">
            Knowledge That Brings You Closer to Allah
          </h2>

          <IslamicDivider showArabic={false} />

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Al Kahf Foundation is dedicated to providing authentic Islamic knowledge, practical spiritual guidance, and structured online educational programs designed to help Muslims navigate modern life grounded in timeless Islamic principles.
          </p>
        </div>

        {/* 4 Trust Points Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {foundationInfo.trustPoints.map((point, index) => {
            const Icon = iconMap[point.icon] || ShieldCheck;
            return (
              <div
                key={point.id}
                className="group relative bg-white rounded-2xl p-7 shadow-soft-card border border-slate-100 hover:border-gold-400/50 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-6 right-6 h-[3px] bg-gradient-to-r from-emerald-800 via-gold-500 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                
                <div className="space-y-4">
                  <div className="w-13 h-13 w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center group-hover:bg-emerald-850 group-hover:text-gold-300 transition-colors shadow-sm">
                    <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-900 transition-colors">
                    {point.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-emerald-800 font-semibold">
                  <span>Pillar 0{index + 1}</span>
                  <span className="text-gold-600 opacity-0 group-hover:opacity-100 transition-opacity">✦ Verified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
