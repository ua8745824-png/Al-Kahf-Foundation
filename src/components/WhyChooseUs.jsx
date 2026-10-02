import React from 'react';
import { useTranslation } from 'react-i18next';
import { BookCheck, Layers, Award, Sparkles, Heart, Globe, CheckCircle } from 'lucide-react';
import { IslamicDivider } from './IslamicPattern';

export default function WhyChooseUs() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const benefits = [
    {
      number: "01",
      icon: BookCheck,
      title: lang === 'ur' ? 'مستند اور معتبر اسلامی نصاب' : lang === 'ar' ? 'مناهج إسلامية أصيلة ومعتمدة' : 'Authentic Islamic Curriculum',
      description: lang === 'ur' 
        ? 'ہمارا تمام مواد قرآن و سنت اور سلف صالحین کے متفقہ فہم پر سختی سے مبنی ہے۔' 
        : lang === 'ar'
        ? 'كافة المناهج مستمدة بدقة من القرآن الكريم والسنة النبوية على فهم سلف الأمة الصالح.'
        : 'All course material is strictly derived from the Holy Quran, authentic Sunnah, and classical consensus.'
    },
    {
      number: "02",
      icon: Layers,
      title: lang === 'ur' ? 'مرحلہ وار تعلیمی مسارات' : lang === 'ar' ? 'مسارات دراسية متدرجة وممنهجة' : 'Structured Academic Pathways',
      description: lang === 'ur'
        ? 'بنیادی سطح سے لے کر اعلیٰ درجے کے علوم تک کے لیے منظم اور مرحلہ وار نصاب۔'
        : lang === 'ar'
        ? 'خطط تعليمية واضحة ومدروسة تنقل الطالب من التأسيس إلى الإتقان والتخصص.'
        : 'From beginner foundations to advanced studies, each course follows clear milestones and learning outcomes.'
    },
    {
      number: "03",
      icon: Award,
      title: lang === 'ur' ? 'باصلاحیت اور سند یافتہ اساتذہ' : lang === 'ar' ? 'كفاءات علمية وإجازات معتمدة' : 'Qualified & Vetted Faculty',
      description: lang === 'ur'
        ? 'تجربہ کار، بااخلاق اور مستند دینی اداروں سے فارغ التحصیل اساتذہ کی زیرِ نگرانی تدریس۔'
        : lang === 'ar'
        ? 'نخبة من المعلمين المجازين وذوي الخبرة الأكاديمية والتربوية العالية.'
        : 'Instructors are thoroughly vetted for sound creed, pedagogical skill, academic depth, and compassionate character.'
    },
    {
      number: "04",
      icon: Sparkles,
      title: lang === 'ur' ? 'لائیو اور انٹرایکٹو تدریس' : lang === 'ar' ? 'فصول تفاعلية مباشرة' : 'Interactive & Engaging Format',
      description: lang === 'ur'
        ? 'براہِ راست ورچوئل کلاسز، لائیو سوال و جواب اور تفصیلی ریکارڈنگز کی سہولت۔'
        : lang === 'ar'
        ? 'دروس مرئية حية مع إمكانية النقاش وطرح الأسئلة وأرشيف كامل للتسجيلات.'
        : 'Live virtual classrooms with screen-sharing, direct Q&A, and full access to recorded study archives.'
    },
    {
      number: "05",
      icon: Heart,
      title: lang === 'ur' ? 'عملی روحانی و اخلاقی تربیت' : lang === 'ar' ? 'تزكية روحية وبناء قيمي عملي' : 'Practical Spiritual Nurturing',
      description: lang === 'ur'
        ? 'علم کو عمل، اخلاقِ حسنہ اور دل کی پاکیزگی میں تبدیل کرنے پر خصوصی توجہ۔'
        : lang === 'ar'
        ? 'التركيز على تحويل العلم الشرعي إلى خشوع وتزكية وأخلاق نبوية في السلوك اليومي.'
        : 'We emphasize turning academic knowledge into heart purification, daily worship, and exemplary moral character.'
    },
    {
      number: "06",
      icon: Globe,
      title: lang === 'ur' ? 'دنیا بھر سے آسان رسائی' : lang === 'ar' ? 'سهولة التعلم من كل مكان' : 'Accessible Worldwide',
      description: lang === 'ur'
        ? 'آپ دنیا کے کسی بھی کونے سے اپنے مناسب اور پسندیدہ وقت پر شامل ہو سکتے ہیں۔'
        : lang === 'ar'
        ? 'انضم إلينا من أي دولة في العالم بأوقات مرونة تراعي مختلف المناطق الزمنية.'
        : 'Study from anywhere across the globe with flexible time zones tailored for men, women, and families.'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="why-us-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-gold-600 shrink-0" />
            <span>{t('whyUs.badge')}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight font-serif">
            {t('whyUs.heading')}
          </h2>

          <IslamicDivider showArabic={false} />

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t('whyUs.description')}
          </p>
        </div>

        {/* 6 Benefits Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.number}
                className="group relative bg-sand-50/70 rounded-2xl p-7 border border-slate-200/90 hover:border-emerald-700/60 shadow-soft-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between text-start"
              >
                <div className="space-y-4">
                  
                  {/* Top Bar: Icon & Number */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-emerald-900 text-gold-400 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-300 group-hover:text-gold-500/40 transition-colors font-serif">
                      {benefit.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-900 transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-emerald-800 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                  <span>{t('whyUs.standardLabel')}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
