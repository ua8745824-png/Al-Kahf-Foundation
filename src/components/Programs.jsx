import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { specialPrograms } from '../data/programs';
import { IslamicDivider } from './IslamicPattern';
import { Moon, BookOpen, Compass, MapPin, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

export default function Programs() {
  const { t, i18n } = useTranslation();

  const iconMap = {
    Moon: Moon,
    BookOpen: BookOpen,
    Compass: Compass,
    MapPin: MapPin,
    ShieldCheck: ShieldCheck,
    Sparkles: Sparkles
  };

  const getLocalizedProgram = (prog) => {
    const lang = i18n.language;
    if (lang === 'ur') {
      if (prog.id === 'ramadan-program') {
        return {
          title: "رمضان المبارک خصوصی پروگرام",
          badge: "موسمی تربیتی کورس",
          shortDescription: "ماہِ مبارک کی برکات سے بھرپور فائدہ اٹھانے کے لیے روحانی، تعلیمی اور احکامِ صوم پر مشتمل خصوصی نصاب۔",
          features: ["روزانہ تفسیری و ایمانی پیغامات", "احکامِ صوم و نمازِ تراویح ورکشاپس", "قرآن مجید کا پارہ وار خلاصہ", "لیلۃ القدر کی دعائیں اور اعمال"]
        };
      }
      if (prog.id === 'seerah-program') {
        return {
          title: "سیرت النبی ﷺ پروگرام",
          badge: "اخلاق و قیادت",
          shortDescription: "رسول اللہ ﷺ کی حیاتِ طیبہ کا مطالعہ، عشقِ رسول ﷺ میں اضافہ، اور نبوی حکمتوں کا فہم۔",
          features: ["ولادت سے ہجرت اور فتحِ مکہ تک کا سفر", "اخلاقِ حسنہ اور جدید فتنوں کا حل", "قیادتِ نبوی پر علمی گفتگو", "خاندانی تربیت کے رہنما اصول"]
        };
      }
      if (prog.id === 'sirat-ul-mustaqeem') {
        return {
          title: "صراطِ مستقیم پروگرام",
          badge: "بنیادی اسلامی تربیت",
          shortDescription: "مردوں اور خواتین کے لیے عقائد، عبادات اور تزکیہ نفس پر مبنی جامع تعلیمی کورس۔",
          features: ["اہل السنۃ کا صحیح عقیدہ", "فرضِ عین فقہی مسائل", "باطنی بیماریوں کا علاج اور تزکیہ", "مردوں اور خواتین کے لیے الگ فصول"]
        };
      }
      if (prog.id === 'hajj-prep') {
        return {
          title: "تربیتِ حج پروگرام",
          badge: "حج مبرور کی تیاری",
          shortDescription: "سنتِ نبوی کے مطابق حج مبرور کی ادائیگی کے لیے مرحلہ وار تفصیلی اور تصویری رہنمائی۔",
          features: ["دن بہ دن مناسک کی عملی تربیت", "احرام کے احکام و پابندیاں", "طبی، سفری اور نقشہ جاتی معلومات", "براہِ راست فقہی سوال و جواب سیشن"]
        };
      }
      if (prog.id === 'umrah-prep') {
        return {
          title: "تربیتِ عمرہ پروگرام",
          badge: "عملی مسنون گائیڈ",
          shortDescription: "احرام، طواف، سعی اور حرمین شریفین کے آداب پر مشتمل مختصر اور جامع ماسٹر کلاس۔",
          features: ["طواف اور سعی کا تصویری مظاہرہ", "مسنون دعاؤں کی پاکٹ گائیڈ", "عام غلطیوں اور توہمات کی وضاحت", "مسجد نبوی کی حاضری کے آداب"]
        };
      }
      if (prog.id === 'namaz-learning') {
        return {
          title: "تعلیمِ نماز و خشوع پروگرام",
          badge: "نماز کی درستگی",
          shortDescription: "سنت کے مطابق نماز کے تمام ارکان، الفاظ کے ترجمے اور خشوع حاصل کرنے کی عملی تربیت۔",
          features: ["ارکانِ نماز کی عملی اصلاح", "تکبیر سے سلام تک دعاؤں کے معانی", "خیالات روکنے اور خشوع کے طریقے", "سجدہ سہو اور باجماعت نماز کے احکام"]
        };
      }
    }

    if (lang === 'ar') {
      if (prog.id === 'ramadan-program') {
        return {
          title: "برنامج رمضان الإيماني",
          badge: "دورة موسمية مكثفة",
          shortDescription: "برنامج تربوي شامل لاغتنام مواسم الخيرات وفقه الصيام والارتقاء الروحي في شهر القرآن.",
          features: ["خواطر إيمانية وتدبرات يومية", "ورش فقه الصيام وصلاة التراويح", "خلاصة الأجزاء القرآنية اليومية", "دليل أدعية وأعمال ليلة القدر"]
        };
      }
      if (prog.id === 'seerah-program') {
        return {
          title: "برنامج السيرة النبوية والأسوة",
          badge: "الأخلاق والقيادة النبوية",
          shortDescription: "دراسة شاملة لحياة النبي ﷺ لغرس محبته والاقتداء بأخلاقه الشريفة في واقعنا المعاصر.",
          features: ["رحلة زمنية موثقة من البعثة إلى الوفاة", "بناء الشخصية والأخلاق المحمدية", "حوارات في القيادة والتربية النبوية", "دروس أسرية مستخلصة من السيرة"]
        };
      }
      if (prog.id === 'sirat-ul-mustaqeem') {
        return {
          title: "برنامج الصراط المستقيم",
          badge: "المنهج الشرعي التأسيسي",
          shortDescription: "علوم شرعية أساسية للرجال والنساء تشمل العقيدة الصحيحة، فقه العبادات، وتزكية النفس.",
          features: ["أصول العقيدة الإسلامية السليمة", "فقه ما لا يسع المسلم جهله (فرض عين)", "تطهير القلوب ورياضة النفس", "فصول تفاعلية مستقلة للرجال والنساء"]
        };
      }
      if (prog.id === 'hajj-prep') {
        return {
          title: "برنامج الإعداد لمناسك الحج",
          badge: "دليل الحج المبرور",
          shortDescription: "تدريب عملي ومصور لأداء مناسك الحج خطوة بخطوة وفق الهدي النبوي الصحيح.",
          features: ["شرح المناسك يوماً بيوم بالتفصيل", "أحكام الإحرام ومحظوراته والسنن", "إرشادات صحية وخرائط لوجستية للحرمين", "جلسات إفتاء تفاعلية مباشرة"]
        };
      }
      if (prog.id === 'umrah-prep') {
        return {
          title: "برنامج مناسك العمرة الميسرة",
          badge: "دورة تطبيقية مركزة",
          shortDescription: "دورة شاملة لأداء العمرة بوعي وسكينة مع استحضار الأدعية وآداب المسجدين الشريفين.",
          features: ["تطبيق مرئي للطواف والسعي والإحرام", "دليل رقمي للأذكار والأدعية المأثورة", "تصحيح الأخطاء الشائعة في العمرة", "آداب زيارة الروضة الشريفة والمدينة"]
        };
      }
      if (prog.id === 'namaz-learning') {
        return {
          title: "برنامج إتقان الصلاة والخشوع",
          badge: "إقامة عمود الدين",
          shortDescription: "تعلّم صفة صلاة النبي ﷺ مع تصحيح الأركان ومعرفة معاني الأذكار وتحصيل الخشوع.",
          features: ["تصحيح عملي لهيئات الصلاة المسنونة", "شرح معاني تكبيرات وأدعية الصلاة", "وسائل عملية لطرد الوساوس والشرود", "أحكام سجود السهو وصلاة الجماعة"]
        };
      }
    }

    return prog;
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="programs-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-600 shrink-0" />
            <span>{t('programs.badge')}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight font-serif">
            {t('programs.heading')}
          </h2>

          <IslamicDivider showArabic={false} />

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t('programs.description')}
          </p>
        </div>

        {/* 6 Programs Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {specialPrograms.map((rawProg) => {
            const Icon = iconMap[rawProg.icon] || Sparkles;
            const program = getLocalizedProgram(rawProg);

            return (
              <div
                key={rawProg.id}
                className="group relative bg-sand-50/80 rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-emerald-700/60 shadow-soft-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between text-start"
              >
                {/* Subtle top decoration */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-emerald-900 text-gold-400 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white border border-slate-200 text-emerald-900">
                    {program.badge}
                  </span>
                </div>

                <div className="mt-5 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-900 transition-colors">
                      {program.title}
                    </h3>
                  </div>

                  {i18n.language !== 'ar' && rawProg.arabicTitle && (
                    <p className="text-xs text-gold-700 font-arabic">
                      {rawProg.arabicTitle}
                    </p>
                  )}

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {program.shortDescription}
                  </p>

                  <ul className="pt-2 space-y-1 text-xs text-slate-500">
                    {program.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80">
                  <Link
                    to={`/courses/${rawProg.targetSlug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-900 group-hover:text-gold-700 transition-colors"
                  >
                    <span>{t('programs.viewCurriculum')}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
