import React from 'react';
import { Link } from 'react-router-dom';
import { Users, UserCheck, Shield, Clock, BookOpen, Sparkles, ArrowRight, Heart } from 'lucide-react';
import { IslamicDivider, IslamicStarDeco } from './IslamicPattern';

export default function MenWomenSection({ onOpenEnrollment }) {
  return (
    <section className="py-20 bg-sand-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-gold-600" />
            <span>Inclusive & Respectful Learning</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight font-serif">
            Islamic Education for Everyone
          </h2>

          <IslamicDivider showArabic={false} />

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Our programs are designed to help men and women learn, understand and practice Islam according to authentic Islamic teachings.
          </p>
        </div>

        {/* 2 Dedicated Visual Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: For Men */}
          <div className="relative bg-white rounded-3xl p-8 border border-slate-200 shadow-soft-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-900/5 rounded-bl-full pointer-events-none" />
            
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-emerald-900 text-gold-300 flex items-center justify-center shadow-md">
                  <UserCheck className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Dedicated Cohorts
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">
                For Men & Brothers
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Structured evening and weekend cohorts designed for working brothers, students, and fathers seeking depth in Islamic theology, history, and practical worship.
              </p>

              <ul className="space-y-2.5 pt-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Flexible evening schedules accommodating work and study</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Deep dives into ideological challenges, Fiqh, and leadership</span>
                </li>
                <li className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Live interactive scholarly discussions & Q&A clinics</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100">
              <Link
                to="/courses"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-900 hover:bg-emerald-850 text-white font-semibold text-xs transition-all shadow"
              >
                <span>Explore Brothers' Programs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: For Women */}
          <div className="relative bg-white rounded-3xl p-8 border border-slate-200 shadow-soft-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-bl-full pointer-events-none" />
            
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-emerald-850 text-gold-400 flex items-center justify-center shadow-md">
                  <Heart className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-gold-800 bg-gold-50 px-3 py-1 rounded-full border border-gold-200">
                  Sisters' Division
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">
                For Women & Sisters
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A comfortable, respectful, and dedicated online environment with female instructors and tailored timings addressing women's Fiqh, family values, and spiritual growth.
              </p>

              <ul className="space-y-2.5 pt-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Flexible morning and afternoon timings suited for homemakers & professionals</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Dedicated female scholars and complete privacy comfort</span>
                </li>
                <li className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Emphasis on Tazkiyah, Tarbiyah, and authentic Fiqh rulings</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100">
              <Link
                to="/courses"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gold-600 hover:bg-gold-500 text-slate-950 font-bold text-xs transition-all shadow"
              >
                <span>Explore Sisters' Programs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Global CTA Link below cards */}
        <div className="mt-10 text-center">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-900 hover:text-gold-700 transition-colors"
          >
            <span>Explore All Specialized Programs & Timings</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
