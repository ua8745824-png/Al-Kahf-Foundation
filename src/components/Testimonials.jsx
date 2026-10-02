import React from 'react';
import { useTranslation } from 'react-i18next';
import { testimonialsData } from '../data/testimonials';
import { IslamicDivider } from './IslamicPattern';
import { Star, MessageSquare, Quote, Info } from 'lucide-react';

export default function Testimonials() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const getLocalizedFeedback = (item) => {
    if (lang === 'ur') {
      if (item.id === 1) {
        return {
          quote: "الکہف فاؤنڈیشن نے مجھے اسلامی تعلیمات کو آسان اور عملی انداز میں سمجھنے میں بہت مدد دی۔ منظم نصاب اور اساتذہ کے خلوص نے میری سوچ کو بدل دیا۔",
          student: "طالب علم کا تاثر",
          course: "صراطِ مستقیم کورس",
          location: "آن لائن طالب علم"
        };
      }
      if (item.id === 2) {
        return {
          quote: "تاریخِ اسلام اور فکری جنگ کے کورس نے میری آنکھیں کھول دیں۔ اس نے مجھے دین پر اعتماد اور جدید شبہات کے تسلی بخش جوابات دینے کے قابل بنایا۔",
          student: "طالب علم کا تاثر",
          course: "تاریخِ اسلام و فکری چیلنجز",
          location: "آن لائن طالب علم"
        };
      }
      if (item.id === 3) {
        return {
          quote: "نماز کورس نے میری عبادت کو مکمل طور پر نکھار دیا۔ دعاؤں کے معانی اور ارکان کی درستگی نے میری روزمرہ نماز میں حقیقی سکون اور خشوع پیدا کیا۔",
          student: "طالب علم کا تاثر",
          course: "نماز و خشوع کورس",
          location: "آن لائن طالب علم"
        };
      }
    }

    if (lang === 'ar') {
      if (item.id === 1) {
        return {
          quote: "ساعدتني مؤسسة الكهف على فهم العلوم الشرعية بأسلوب منهجي وميسر. لقد أحدث الوضوح العلمي والتربوي أثراً عميقاً في حياتي اليومية.",
          student: "انطباع أحد الطلاب",
          course: "برنامج الصراط المستقيم",
          location: "طالب عبر الإنترنت"
        };
      }
      if (item.id === 2) {
        return {
          quote: "دورة التاريخ الإسلامي والغزو الفكري فتحت بصيرتي على عمق حضارتنا الإسلامية ومكنتني من التعامل مع الشبهات المعاصرة بثقة واقتناع.",
          student: "انطباع أحد الطلاب",
          course: "التاريخ والفكر الإسلامي",
          location: "طالب عبر الإنترنت"
        };
      }
      if (item.id === 3) {
        return {
          quote: "حضور دورة فقه الصلاة غيّر صلاتي جذرياً. تصحيح الأركان ومعرفة معاني الأذكار جلب الخشوع والطمأنينة الحقيقية لصلواتي الخمس.",
          student: "انطباع أحد الطلاب",
          course: "دورة فقه الصلاة والخشوع",
          location: "طالب عبر الإنترنت"
        };
      }
    }

    return item;
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5 text-gold-600 shrink-0" />
            <span>{t('testimonials.badge')}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight font-serif">
            {t('testimonials.heading')}
          </h2>

          <IslamicDivider showArabic={false} />

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t('testimonials.description')}
          </p>
        </div>

        {/* Testimonials Framework Notice */}
        <div className="mt-8 max-w-2xl mx-auto p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 text-xs flex items-center gap-3 text-start">
          <Info className="w-5 h-5 text-slate-400 shrink-0" />
          <p>
            <strong>{t('testimonials.noticeTitle')}</strong> {t('testimonials.noticeDesc')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonialsData.map((rawItem) => {
            const item = getLocalizedFeedback(rawItem);

            return (
              <div
                key={rawItem.id}
                className="bg-sand-50/70 rounded-2xl p-7 border border-slate-200/90 shadow-soft-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between relative group text-start"
              >
                <Quote className="w-8 h-8 text-gold-500/20 absolute top-6 end-6 pointer-events-none" />

                <div className="space-y-4">
                  {/* 5 Star Rating */}
                  <div className="flex items-center gap-1 text-gold-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      {item.student}
                    </h4>
                    <p className="text-[11px] text-emerald-800 font-medium">
                      {item.course}
                    </p>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-200">
                    {item.location}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
