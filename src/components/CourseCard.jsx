import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Clock, Users, ArrowRight, MessageCircle } from 'lucide-react';
import { IslamicStarDeco } from './IslamicPattern';
import { foundationInfo } from '../data/foundationInfo';
import { getLocalizedCourse } from '../utils/courseLocalization';

export default function CourseCard({ course, onQuickEnroll }) {
  const { t, i18n } = useTranslation();
  const locCourse = getLocalizedCourse(course, i18n.language);

  const getInquiryText = () => {
    if (i18n.language === 'ur') {
      return `السلام علیکم، میں الکہف فاؤنڈیشن کے کورس "${locCourse.title}" میں داخلے کے لیے معلومات حاصل کرنا چاہتا/چاہتی ہوں۔`;
    }
    if (i18n.language === 'ar') {
      return `السلام عليكم، أود الاستفسار عن التسجيل في دورة "${locCourse.title}" لدى مؤسسة الكهف.`;
    }
    return `Assalamu Alaikum, I would like to inquire about enrolling in the "${locCourse.title}" at Al Kahf Foundation. Please share details.`;
  };

  const whatsappInquiryUrl = `https://wa.me/${foundationInfo.whatsappClean}?text=${encodeURIComponent(getInquiryText())}`;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-emerald-700/60 shadow-soft-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between text-start">
      
      {/* Top Banner / Image & Badges */}
      <div className="relative h-48 overflow-hidden bg-emerald-950">
        <img
          src={locCourse.image || "/images/al-kahf-foundation-islamic-education.jpg"}
          alt={locCourse.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/30 to-transparent" />
        
        {/* Category & Badge */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2">
          <span className="px-2.5 py-1 rounded-md bg-emerald-950/85 backdrop-blur-md text-gold-300 text-xs font-semibold border border-gold-500/30 flex items-center gap-1 shrink-0 truncate max-w-[65%]">
            <IslamicStarDeco className="w-3 h-3 text-gold-400 shrink-0" />
            <span className="truncate">{locCourse.category}</span>
          </span>
          {locCourse.badge && (
            <span className="px-2.5 py-1 rounded-md bg-gold-500 text-slate-950 text-[11px] font-bold shadow shrink-0">
              {locCourse.badge}
            </span>
          )}
        </div>

        {/* Arabic Subtitle Overlay when viewing English or Urdu */}
        {i18n.language !== 'ar' && course.arabicTitle && (
          <div className="absolute bottom-2.5 end-3 text-gold-300/80 font-arabic text-sm tracking-wide">
            {course.arabicTitle}
          </div>
        )}
      </div>

      {/* Body Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        
        <div className="space-y-2.5">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-900 transition-colors leading-snug">
            {locCourse.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
            {locCourse.shortDescription}
          </p>
        </div>

        {/* Course Meta Info */}
        <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs text-slate-500">
          <div className="flex items-center gap-1.5 truncate">
            <Clock className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            <span className="truncate">{locCourse.duration}</span>
          </div>
          <div className="flex items-center gap-1.5 truncate">
            <Users className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            <span className="truncate">{locCourse.audience}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex items-center gap-2">
          <Link
            to={`/courses/${course.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-emerald-900 hover:bg-emerald-850 text-white font-semibold text-xs transition-all shadow-sm group-hover:shadow"
          >
            <span>{t('courses.viewCourse')}</span>
            <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 shrink-0" />
          </Link>

          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-green-50 hover:bg-green-100 text-green-800 border border-green-200 transition-colors"
            title={t('courses.inquireWhatsApp')}
          >
            <MessageCircle className="w-4 h-4 text-green-700" />
          </a>
        </div>

      </div>

    </div>
  );
}
