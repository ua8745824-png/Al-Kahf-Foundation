import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { coursesData } from '../data/courses';
import { CheckCircle2, ArrowRight, BookOpen, Sparkles, MessageCircle, Users } from 'lucide-react';
import { foundationInfo } from '../data/foundationInfo';
import { getLocalizedCourse } from '../utils/courseLocalization';

export default function FeaturedCourse({ onOpenEnrollment }) {
  const { t, i18n } = useTranslation();
  const rawFeatured = coursesData.find(
    (c) => c.id === "islamic-history-ideological-war" || c.id === "islamic-history-and-ideological-war"
  ) || coursesData[0];

  const featured = getLocalizedCourse(rawFeatured, i18n.language);

  const getInquiryText = () => {
    if (i18n.language === 'ur') {
      return `السلام علیکم، میں الکہف فاؤنڈیشن کے نمایاں کورس "${featured.title}" میں داخلے کے لیے معلومات حاصل کرنا چاہتا/چاہتی ہوں۔`;
    }
    if (i18n.language === 'ar') {
      return `السلام عليكم، أود الاستفسار عن التسجيل في الدورة المتميزة "${featured.title}" لدى مؤسسة الكهف.`;
    }
    return `Assalamu Alaikum, I would like to enroll in the featured course: "${featured.title}". Please send registration details.`;
  };

  const whatsappInquiryUrl = `https://wa.me/${foundationInfo.whatsappClean}?text=${encodeURIComponent(getInquiryText())}`;

  const whoIsThisFor = i18n.language === 'ur' ? [
    "فکری و نظریاتی بصیرت کے متلاشی طلبہ",
    "جدید دور میں بچوں کی اسلامی تربیت کرنے والے والدین",
    "تاریخِ اسلام اور اس کے عروج و زوال کو سمجھنے کے خواہشمند",
    "جدید شبہات اور افکار کا مدلل جواب جاننے کے متمنی نوجوان"
  ] : i18n.language === 'ar' ? [
    "الباحثون عن البصيرة الفكرية والوضوح المنهجي",
    "الآباء الساعون لتربية أبنائهم في ظل التحديات المعاصرة",
    "طلاب العلم الراغبون في فهم التاريخ برؤية تحليلية رصينة",
    "الشباب الباحثون عن إجابات وافية للشبهات الفكرية المعاصرة"
  ] : [
    "Seekers wanting deep intellectual clarity",
    "Parents raising children in secular/modern environments",
    "Students of Islamic studies wanting historical perspective",
    "Youth navigating contemporary doubts & ideologies"
  ];

  const keyBenefits = i18n.language === 'ur' ? [
    "تاریخِ اسلام کے سنہری ادوار، اسبابِ عروج اور زوال کا تجزیہ",
    "مستشرقین اور جدید الحادی افکار کا علمی و تحقیقی رد",
    "اسلامی تشخص اور غیرتِ ایمانی کی بحالی کا فکری لائحہ عمل"
  ] : i18n.language === 'ar' ? [
    "تحليل عصور الحضارة الإسلامية المشرقة وعوامل النهوض والتراجع",
    "تفكيك شبهات الاستشراق والمذاهب الفكرية المعاصرة بالأدلة",
    "بناء الهوية الإسلامية والاعتزاز بالانتماء الحضاري للأمة"
  ] : [
    "Clear historical chronology of the Caliphate and pivotal battles",
    "Deconstruct orientalist misconceptions with scholarly evidence",
    "Build unshakeable Islamic identity in the modern globalized world"
  ];

  return (
    <section className="py-20 bg-emerald-950 text-white relative overflow-hidden">
      {/* Visual Accents & Background */}
      <div className="absolute inset-0 bg-islamic-stars-dark opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-emerald-800/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Spotlight Card */}
        <div className="rounded-3xl bg-gradient-to-br from-emerald-900/90 via-emerald-950 to-emerald-980 border-2 border-gold-500/40 p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl text-start">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Course Details, Target Audience & Benefits */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3.5 py-1 rounded-full bg-gold-500 text-slate-950 text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                  <Sparkles className="w-3.5 h-3.5 text-slate-950 shrink-0" />
                  <span>{t('featured.flagshipBadge')}</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-semibold border border-emerald-700">
                  {t('featured.cohortOpen')}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  {featured.title}
                </h2>
                <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
                  {featured.shortDescription}
                </p>
              </div>

              {/* Who Should Take This Course */}
              <div className="space-y-2.5 pt-1">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gold-400 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>{t('featured.whoShouldTake')}</span>
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-emerald-100/90">
                  {whoIsThisFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Course Key Benefits */}
              <div className="space-y-2.5 pt-1">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gold-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>{t('featured.keyBenefits')}</span>
                </h3>
                <ul className="space-y-1.5 text-xs text-emerald-200">
                  {keyBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-gold-400 font-bold">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3.5">
                <Link
                  to={`/courses/${rawFeatured.slug}`}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 hover:from-gold-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-xl shadow-gold-950/40 hover:shadow-gold-500/30 transition-all flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-emerald-950 shrink-0" />
                  <span>{t('featured.enrollBtn')}</span>
                  <ArrowRight className="w-4 h-4 text-emerald-950 rtl:rotate-180 shrink-0" />
                </Link>

                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-emerald-800/80 hover:bg-emerald-800 text-emerald-100 font-medium text-sm border border-emerald-700/80 flex items-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-green-400 shrink-0" />
                  <span>{t('featured.inquireBtn')}</span>
                </a>
              </div>

            </div>

            {/* Right Column: Visual Artwork & Key Highlights */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-gold-500/30 shadow-2xl group">
                <img
                  src={featured.image || "/images/al-kahf-foundation-islamic-education.jpg"}
                  alt={featured.title}
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-980/90 via-transparent to-transparent" />
                
                {/* Floating Quick Info Pill */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-emerald-950/90 backdrop-blur-md border border-gold-500/30 text-xs text-emerald-200 space-y-1.5">
                  <div className="flex items-center justify-between font-bold text-gold-400">
                    <span>{t('featured.structuredPill')}</span>
                    <span>{t('featured.classroomPill')}</span>
                  </div>
                  <p className="text-[11px] text-emerald-300">
                    {t('featured.roadmapDesc')}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
