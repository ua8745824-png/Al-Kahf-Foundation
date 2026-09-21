import React from 'react';
import { MousePointerClick, MessageSquare, BookOpen, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import { IslamicDivider, IslamicStarDeco } from './IslamicPattern';
import { foundationInfo } from '../data/foundationInfo';

export default function HowItWorks({ onOpenEnrollment }) {
  const iconMap = {
    MousePointerClick: MousePointerClick,
    MessageSquareCheck: MessageSquare,
    MessageSquare: MessageSquare,
    BookOpenCheck: BookOpen,
    BookOpen: BookOpen,
    TrendingUp: TrendingUp
  };

  return (
    <section className="py-20 bg-emerald-950 text-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-islamic-stars-dark opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900 border border-gold-500/30 text-gold-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Simple Enrollment Process</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight font-serif">
            How It Works
          </h2>

          <IslamicDivider showArabic={false} />

          <p className="text-sm sm:text-base text-emerald-200/90 leading-relaxed">
            Begin your journey towards authentic Islamic knowledge in four simple, seamless steps.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {foundationInfo.howItWorksSteps.map((step, idx) => {
            const Icon = iconMap[step.icon] || Sparkles;
            return (
              <div
                key={step.step}
                className="relative bg-gradient-to-b from-emerald-900/70 to-emerald-950/90 rounded-2xl p-6 sm:p-7 border border-emerald-800 hover:border-gold-400/50 shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Step Number Top Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold text-gold-400/30 group-hover:text-gold-400/70 transition-colors font-serif">
                    {step.step}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-emerald-850 text-gold-300 flex items-center justify-center border border-gold-500/20 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="mt-5 space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-gold-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-emerald-200/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-emerald-850/80 text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                  <span>Phase {step.step}</span>
                  <ArrowRight className="w-3 h-3 text-gold-400" />
                </div>
              </div>
            );
          })}

        </div>

        {/* Bottom Fast Action Prompt */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenEnrollment}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 hover:from-gold-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-xl shadow-gold-950/50 hover:scale-105 transition-all"
          >
            <Sparkles className="w-4 h-4 text-emerald-950" />
            <span>Ready to Begin? Enroll Now</span>
          </button>
        </div>

      </div>
    </section>
  );
}
