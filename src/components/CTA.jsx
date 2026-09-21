import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import { IslamicStarDeco } from './IslamicPattern';
import { foundationInfo } from '../data/foundationInfo';

export default function CTA({ onOpenEnrollment }) {
  return (
    <section className="py-20 bg-emerald-950 text-white relative overflow-hidden">
      {/* Background Islamic Accents */}
      <div className="absolute inset-0 bg-islamic-stars-dark opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-850/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        
        {/* Top Ornament */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900 border border-gold-500/40 text-gold-300 text-xs font-semibold uppercase tracking-wider">
          <IslamicStarDeco className="w-4 h-4 text-gold-400" />
          <span>Start Your Spiritual Transformation</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif leading-tight">
          Begin Your Journey of Islamic Learning
        </h2>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto font-normal leading-relaxed">
          Take the first step toward gaining authentic Islamic knowledge. Join dedicated cohorts for men and women with live scholar guidance.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/courses"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 hover:from-gold-400 hover:to-amber-500 text-slate-950 font-bold text-base shadow-xl shadow-gold-950/40 hover:scale-105 transition-all"
          >
            <BookOpen className="w-5 h-5 text-emerald-950" />
            <span>Explore Courses</span>
            <ArrowRight className="w-4 h-4 text-emerald-950" />
          </Link>

          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-900/80 hover:bg-emerald-850 text-white font-semibold text-base border border-gold-500/30 hover:border-gold-400/60 transition-all"
          >
            <MessageCircle className="w-5 h-5 text-gold-400" />
            <span>Contact Us</span>
          </Link>
        </div>

        {/* Admissions Coordinator Direct Notice */}
        <div className="pt-4 text-xs text-emerald-300/80">
          <span>Need guidance selecting the right course? Reach our coordinator directly at </span>
          <a
            href={foundationInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-400 font-bold underline hover:text-gold-300 ml-1"
          >
            {foundationInfo.whatsapp} (WhatsApp)
          </a>
        </div>

      </div>
    </section>
  );
}
