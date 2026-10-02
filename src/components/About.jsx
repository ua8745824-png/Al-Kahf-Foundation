import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BookOpen, CheckCircle, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { IslamicStarDeco } from './IslamicPattern';

export default function About() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const pillars = [
    {
      name: lang === 'ur' ? 'قرآن و تجوید' : lang === 'ar' ? 'القرآن والتجويد' : 'Quran & Tajweed',
      desc: lang === 'ur' ? 'تلاوت و درست مخارج' : lang === 'ar' ? 'إتقان التلاوة والمخارج' : 'Recitation & Articulation'
    },
    {
      name: lang === 'ur' ? 'تفسیر و ترجمہ' : lang === 'ar' ? 'التفسير والتدبر' : 'Tafseer & Translation',
      desc: lang === 'ur' ? 'فہمِ قرآن و تدبر' : lang === 'ar' ? 'فهم الآيات والبيان' : 'Understanding & Reflection'
    },
    {
      name: lang === 'ur' ? 'علوم الحدیث' : lang === 'ar' ? 'علوم الحديث النبوي' : 'Hadith Sciences',
      desc: lang === 'ur' ? 'ارشاداتِ نبوی ﷺ' : lang === 'ar' ? 'السنة النبوية الشريفة' : 'Prophetic Traditions'
    },
    {
      name: lang === 'ur' ? 'تاریخِ اسلام و فکری چیلنجز' : lang === 'ar' ? 'التاريخ والفكر الإسلامي' : 'Islamic History & Ideology',
      desc: lang === 'ur' ? 'تحقیقی و بصیرت افروز' : lang === 'ar' ? 'وعي تاريخي وبصيرة' : 'Civilization & Discernment'
    },
    {
      name: lang === 'ur' ? 'سیرت النبی ﷺ' : lang === 'ar' ? 'السيرة النبوية العطرة' : 'Seerah Nabawiyyah',
      desc: lang === 'ur' ? 'حیاتِ طیبہ کا مطالعہ' : lang === 'ar' ? 'القدوة والأسوة الحسنة' : 'The Living Exemplar'
    },
    {
      name: lang === 'ur' ? 'فقہ و روزمرہ مسائل' : lang === 'ar' ? 'الفقه الإسلامي الميسر' : 'Fiqh & Daily Rulings',
      desc: lang === 'ur' ? 'حلال و حرام کی حدود' : lang === 'ar' ? 'أحكام العبادات والمعاملات' : 'Practical Halal & Haram'
    },
    {
      name: lang === 'ur' ? 'نماز و عبادات' : lang === 'ar' ? 'الصلاة والخشوع' : 'Namaz & Ibadah',
      desc: lang === 'ur' ? 'مسنون طریقہ و خشوع' : lang === 'ar' ? 'تعظيم ركن الدين' : 'Method & Heartfelt Khushu'
    },
    {
      name: lang === 'ur' ? 'رمضان و احکامِ صوم' : lang === 'ar' ? 'أحكام الصيام ورمضان' : 'Ramadan & Fasting',
      desc: lang === 'ur' ? 'روحانی تیاری و فضائل' : lang === 'ar' ? 'اغتنام مواسم الطاعات' : 'Spiritual Transformation'
    },
    {
      name: lang === 'ur' ? 'رہنمائے حج و عمرہ' : lang === 'ar' ? 'مناسك الحج والعمرة' : 'Hajj & Umrah Guidance',
      desc: lang === 'ur' ? 'مرحلہ وار مسنون تربیت' : lang === 'ar' ? 'دليل عملي للحرمين' : 'Step-by-Step Training'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Visual Image with Islamic Frame & Accents */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-sand-100 group">
              <img
                src="/images/about-mosque.jpg"
                alt="Al Kahf Foundation Educational Sanctuary"
                className="w-full h-[260px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-950/20 to-transparent" />
              
              {/* Bottom Quote Overlay */}
              <div className="absolute bottom-6 inset-x-6 p-5 rounded-2xl bg-emerald-950/85 backdrop-blur-md border border-gold-500/30 text-white space-y-1.5 shadow-lg">
                <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-wider">
                  <IslamicStarDeco className="w-3.5 h-3.5 shrink-0" />
                  <span>{t('about.guidingPrinciple')}</span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-100/95 italic">
                  &ldquo;{t('about.quote')}&rdquo;
                </p>
              </div>
            </div>

            {/* Subtle Floating Stat Badge */}
            <div className="absolute -top-4 ltr:-left-4 rtl:-right-4 sm:-top-6 sm:ltr:-left-6 sm:rtl:-right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold-100 text-gold-700 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">{t('about.qualityLabel')}</p>
                <p className="text-sm font-bold text-slate-900">{t('about.qualityValue')}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Mission Content & 9 Knowledge Pillars */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2 text-start">
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider border border-emerald-200/60">
                <Sparkles className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                <span>{t('about.badge')}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight font-serif">
                {t('about.heading')}
              </h2>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {t('about.descParagraph')}
            </p>

            {/* 9 Knowledge Pillars Grid */}
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-950 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-gold-600 shrink-0" />
                <span>{t('about.disciplinesHeading')}</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {pillars.map((pillar) => (
                  <div
                    key={pillar.name}
                    className="p-3 rounded-xl bg-sand-50 border border-slate-200/80 hover:border-emerald-700 hover:bg-emerald-50/50 transition-all text-start"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span className="truncate">{pillar.name}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-900 hover:bg-emerald-850 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all"
              >
                <span>{t('about.learnMore')}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sand-100 hover:bg-sand-200 text-slate-800 font-semibold text-sm transition-all"
              >
                <span>{t('about.browseCourses')}</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
