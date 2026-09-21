import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Clock, Users, Sparkles, MessageCircle } from 'lucide-react';
import { IslamicStarDeco } from './IslamicPattern';
import { foundationInfo } from '../data/foundationInfo';

export default function CourseCard({ course, onQuickEnroll }) {
  const whatsappInquiryUrl = `https://wa.me/${foundationInfo.whatsappClean}?text=${encodeURIComponent(
    `Assalamu Alaikum, I would like to inquire about enrolling in the "${course.title}". Please share details.`
  )}`;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-emerald-700/60 shadow-soft-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between">
      
      {/* Top Banner / Image & Badges */}
      <div className="relative h-48 overflow-hidden bg-emerald-950">
        <img
          src={course.image || "/images/hero-quran.jpg"}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/30 to-transparent" />
        
        {/* Category & Badge */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-md bg-emerald-950/85 backdrop-blur-md text-gold-300 text-xs font-semibold border border-gold-500/30 flex items-center gap-1">
            <IslamicStarDeco className="w-3 h-3 text-gold-400" />
            <span>{course.category}</span>
          </span>
          {course.badge && (
            <span className="px-2.5 py-1 rounded-md bg-gold-500 text-slate-950 text-[11px] font-bold shadow">
              {course.badge}
            </span>
          )}
        </div>

        {/* Arabic Title Overlay */}
        {course.arabicTitle && (
          <div className="absolute bottom-2.5 right-3 text-gold-300/80 font-arabic text-sm tracking-wide">
            {course.arabicTitle}
          </div>
        )}
      </div>

      {/* Body Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        
        <div className="space-y-2.5">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-900 transition-colors leading-snug">
            {course.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
            {course.shortDescription}
          </p>
        </div>

        {/* Course Meta Info */}
        <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs text-slate-500">
          <div className="flex items-center gap-1.5 truncate">
            <Clock className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            <span className="truncate">{course.duration || 'Structured Modules'}</span>
          </div>
          <div className="flex items-center gap-1.5 truncate">
            <Users className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            <span className="truncate">Men & Women</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex items-center gap-2">
          <Link
            to={`/courses/${course.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-emerald-900 hover:bg-emerald-850 text-white font-semibold text-xs transition-all shadow-sm group-hover:shadow"
          >
            <span>View Course</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-green-50 hover:bg-green-100 text-green-800 border border-green-200 transition-colors"
            title="Inquire on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-green-700" />
          </a>
        </div>

      </div>

    </div>
  );
}
