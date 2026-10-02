import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { getLocalizedSeoData, getOrganizationSchema, getBreadcrumbsSchema } from '../data/seoData';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { IslamicDivider, IslamicStarDeco } from '../components/IslamicPattern';
import CTA from '../components/CTA';

export default function AboutPage({ onOpenEnrollment }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const seo = getLocalizedSeoData('about', lang);

  const breadcrumbItems = [
    { name: t('nav.about'), url: '/about' }
  ];

  const schemas = [
    getOrganizationSchema(),
    getBreadcrumbsSchema(breadcrumbItems)
  ];

  const disciplines = [
    {
      name: lang === 'ur' ? 'قرآن و تجوید' : lang === 'ar' ? 'القرآن والتجويد' : 'Quran & Tajweed',
      desc: lang === 'ur' ? 'تلاوت، حفظ اور مخارج کی تصحیح' : lang === 'ar' ? 'التلاوة، الحفظ وضبط مخارج الحروف' : 'Recitation, memorization and foundational Tajweed rules.'
    },
    {
      name: lang === 'ur' ? 'تفسیر و ترجمہ' : lang === 'ar' ? 'التفسير ومعاني القرآن' : 'Tafseer & Translation',
      desc: lang === 'ur' ? 'قرآنی آیات کا فہم، ترجمہ اور تدبر' : lang === 'ar' ? 'فهم معاني الآيات وأسباب النزول والتدبر' : 'Word-by-word translation and classical commentary.'
    },
    {
      name: lang === 'ur' ? 'علوم الحدیث' : lang === 'ar' ? 'علوم الحديث الشريف' : 'Hadith Sciences',
      desc: lang === 'ur' ? 'احادیثِ مبارکہ کا فہم اور اخلاقی رہنمائی' : lang === 'ar' ? 'شرح أحاديث النبي ﷺ واستنباط الآداب النبوية' : 'Authentic Sunnah, prophetic sayings, and moral insights.'
    },
    {
      name: lang === 'ur' ? 'تاریخِ اسلام و فکری چیلنجز' : lang === 'ar' ? 'التاريخ والفكر الإسلامي' : 'Islamic History & Ideology',
      desc: lang === 'ur' ? 'مسلم تہذیب کے عروج و زوال کا تجزیہ' : lang === 'ar' ? 'دراسة محطات التاريخ الإسلامي وتفكيك الشبهات' : 'Civilizational milestones and modern intellectual challenges.'
    },
    {
      name: lang === 'ur' ? 'سیرت النبی ﷺ' : lang === 'ar' ? 'السيرة النبوية العطرة' : 'Seerah Nabawiyyah',
      desc: lang === 'ur' ? 'حیاتِ طیبہ اور نبوی حکمتوں کا مطالعہ' : lang === 'ar' ? 'دراسة حياة المصطفى ﷺ والاقتداء بهديه الشريف' : 'The blessed life of the Prophet ﷺ and prophetic leadership.'
    },
    {
      name: lang === 'ur' ? 'فقہ و روزمرہ مسائل' : lang === 'ar' ? 'الفقه الإسلامي الميسر' : 'Fiqh & Daily Rulings',
      desc: lang === 'ur' ? 'طہارت، عبادات اور معاملات کے احکام' : lang === 'ar' ? 'أحكام العبادات والمعاملات والحلال والحرام' : 'Practical rulings for worship, financial integrity, and family.'
    },
    {
      name: lang === 'ur' ? 'نماز و عبادات' : lang === 'ar' ? 'فقه الصلاة والخشوع' : 'Namaz & Ibadah',
      desc: lang === 'ur' ? 'سنت کے مطابق نماز اور خشوع کی تربیت' : lang === 'ar' ? 'إتقان صفة الصلاة المسنونة وتحصيل الخشوع' : 'Mastering Salah postures, translations, and Khushu.'
    },
    {
      name: lang === 'ur' ? 'رمضان و احکامِ صوم' : lang === 'ar' ? 'أحكام الصيام ورمضان' : 'Ramadan & Fasting',
      desc: lang === 'ur' ? 'ماہِ مبارک کی روحانی و فقہی تیاری' : lang === 'ar' ? 'الاستعداد الروحي والفقهي للشهر الفضيل' : 'Intensive pre-Ramadan preparation and Quranic goals.'
    },
    {
      name: lang === 'ur' ? 'رہنمائے حج و عمرہ' : lang === 'ar' ? 'مناسك الحج والعمرة' : 'Hajj & Umrah Guidance',
      desc: lang === 'ur' ? 'حج و عمرہ کا تصویری و عملی طریقہ کار' : lang === 'ar' ? 'دليل عملي ومصور لأداء المناسك على هدي السنة' : 'Step-by-step visual roadmap for sacred pilgrimages.'
    }
  ];

  return (
    <div className="bg-sand-50 animate-fade-in text-start">
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        keywords={seo.keywords}
        ogImage={seo.ogImage}
        schemas={schemas}
      />

      {/* Page Header Banner */}
      <section className="relative py-20 bg-emerald-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-islamic-stars-dark opacity-30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex justify-center">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900 border border-gold-500/30 text-gold-300 text-xs font-semibold uppercase tracking-wider">
            <IslamicStarDeco className="w-3.5 h-3.5 shrink-0" />
            <span>{t('about.badge')}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight">
            {t('about.heading')}
          </h1>

          <p className="text-emerald-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {t('about.descParagraph')}
          </p>
        </div>
      </section>

      {/* Main Narrative & Story */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 text-xs font-semibold uppercase">
                <Sparkles className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                <span>{t('about.guidingPrinciple')}</span>
              </div>
              
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-serif leading-snug">
                {t('about.storyTitle')}
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {t('about.storyP1')}
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {t('about.storyP2')}
              </p>

              <div className="pt-2 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong>{t('about.point1Title')}</strong> {t('about.point1Desc')}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong>{t('about.point2Title')}</strong> {t('about.point2Desc')}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong>{t('about.point3Title')}</strong> {t('about.point3Desc')}
                  </p>
                </div>
              </div>

            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-sand-100">
                <img
                  src="/images/about-mosque.jpg"
                  alt="Islamic foundation and classical academy courtyard for authentic knowledge"
                  loading="lazy"
                  className="w-full h-[280px] sm:h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 inset-x-6 p-5 rounded-2xl bg-emerald-950/90 backdrop-blur-md text-white border border-gold-500/30 text-xs sm:text-sm italic leading-relaxed">
                  &ldquo;{t('about.quote')}&rdquo;
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9 Core Knowledge Pillars */}
      <section className="py-16 sm:py-20 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-serif">
              {t('about.allDisciplinesTitle')}
            </h2>
            <IslamicDivider showArabic={false} />
            <p className="text-sm sm:text-base text-slate-600">
              {t('about.allDisciplinesDesc')}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {disciplines.map((pillar, idx) => (
              <div
                key={pillar.name}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-soft-card hover:border-emerald-700 hover:shadow-card-hover transition-all text-start"
              >
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-850 font-bold flex items-center justify-center text-xs">
                    0{idx + 1}
                  </span>
                  <IslamicStarDeco className="w-4 h-4 text-gold-500" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mt-4">
                  {pillar.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <CTA onOpenEnrollment={onOpenEnrollment} />
    </div>
  );
}
