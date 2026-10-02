import React from 'react';
import { useTranslation } from 'react-i18next';
import { teachersData } from '../data/teachers';
import { IslamicDivider } from './IslamicPattern';
import { GraduationCap, User, Info } from 'lucide-react';

export default function Teachers() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const getLocalizedTeacher = (teacher) => {
    if (lang === 'ur') {
      if (teacher.id === 1) {
        return {
          name: "سینئر اسکالر (صدر شعبہ)",
          role: "شعبہ تاریخِ اسلام و فکری چیلنجز",
          qualification: "فاضل درسِ نظامی (عالمیہ / پی ایچ ڈی محقق)",
          expertise: "تاریخِ اسلام، فکری رد اور عقیدہ",
          bio: "متوازن اور تحقیقی انداز میں اسلامی علوم کی تدریس کے لیے وقف تجربہ کار استاد۔"
        };
      }
      if (teacher.id === 2) {
        return {
          name: "استاذ الحدیث و السیرۃ",
          role: "شعبہ سیرتِ نبوی ﷺ و مطالعہ حدیث",
          qualification: "تخصص فی علوم الحدیث و متونِ قدیمہ",
          expertise: "سیرتِ رسول ﷺ، اخلاق و تزکیہ نفس",
          bio: "نبی کریم ﷺ کی حیاتِ مبارکہ کو گہرے جذباتی ربط اور مستند دلائل کے ساتھ سکھانے کے ماہر۔"
        };
      }
      if (teacher.id === 3) {
        return {
          name: "استاذ الفقہ و التجوید",
          role: "شعبہ فقہِ عملی و دراساتِ تجوید",
          qualification: "سند و اجازت فی التجوید و الفقہ",
          expertise: "نماز، خشوع اور روزمرہ فقہی مسائل",
          bio: "تلاوت کی درستگی، ارکانِ نماز کی اصلاح اور فقہی مسائل کو آسان بنانے کے ماہر۔"
        };
      }
      if (teacher.id === 4) {
        return {
          name: "صدر معلمات (شعبہ خواتین)",
          role: "شعبہ اسلامی تعلیمات برائے خواتین",
          qualification: "سند یافتہ فاضلہ و معلمہ",
          expertise: "فقہ النساء، تربیتِ اولاد اور خاندانی رہنمائی",
          bio: "خواتین کے لیے مکمل پردے اور باوقار ماحول میں دینی و تربیتی رہنمائی فراہم کرنے والی معلمہ۔"
        };
      }
    }

    if (lang === 'ar') {
      if (teacher.id === 1) {
        return {
          name: "أستاذ باحث (رئيس القسم)",
          role: "قسم التاريخ والفكر الإسلامي",
          qualification: "خريج الدراسات الإسلامية العليا (العالمية / دكتوراه)",
          expertise: "التأريخ الإسلامي، رد الشبهات الفكرية، والعقيدة",
          bio: "أستاذ متخصص في تدريس العلوم الشرعية بمنهج علمي رصين وبصيرة معاصرة."
        };
      }
      if (teacher.id === 2) {
        return {
          name: "أستاذ الحديث والسيرة الشريفة",
          role: "قسم السيرة النبوية ودراسات الحديث",
          qualification: "متخصص في علوم الحديث الشريف وشروح المتون",
          expertise: "السيرة العطرة، الأخلاق الإسلامية والتزكية",
          bio: "متخصص في تدريس السيرة النبوية وربط الهدي النبوي بواقع الحياة المعاصرة."
        };
      }
      if (teacher.id === 3) {
        return {
          name: "أستاذ الفقه والتجويد المعتمد",
          role: "قسم الفقه التطبيقي وأحكام التلاوة",
          qualification: "إجازة مسندة في التجويد والقراءات والفقه",
          expertise: "فقه الصلاة، تحصيل الخشوع، وفقه العبادات",
          bio: "معلم متميز يركز على تصحيح التلاوة وضبط هيئات الصلاة وتيسير الأحكام الفقهية."
        };
      }
      if (teacher.id === 4) {
        return {
          name: "أستاذة ومشرفة قسم الأخوات",
          role: "قسم التعليم الشرعي للأخوات",
          qualification: "عالمة ومربية معتمدة في العلوم الشرعية",
          expertise: "فقه المرأة المسلمة، التربية الأسرية، والتزكية",
          bio: "توجيه الأخوات في بيئة تعليمية تفاعلية تتسم بالحشمة والخصوصية التامة."
        };
      }
    }

    return teacher;
  };

  return (
    <section className="py-20 bg-sand-50 relative overflow-hidden" id="teachers-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5 text-gold-600 shrink-0" />
            <span>{t('teachers.badge')}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight font-serif">
            {t('teachers.heading')}
          </h2>

          <IslamicDivider showArabic={false} />

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t('teachers.description')}
          </p>
        </div>

        {/* Client Notice Regarding Official Faculty Profiles */}
        <div className="mt-8 max-w-2xl mx-auto p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs flex items-center gap-3 text-start">
          <Info className="w-5 h-5 text-amber-600 shrink-0" />
          <p>
            <strong>{t('teachers.noticeTitle')}</strong> {t('teachers.noticeDesc')}
          </p>
        </div>

        {/* Teacher Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teachersData.map((rawTeacher) => {
            const teacher = getLocalizedTeacher(rawTeacher);

            return (
              <div
                key={rawTeacher.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-soft-card hover:shadow-card-hover hover:border-emerald-700/60 transition-all duration-300 flex flex-col justify-between group text-start"
              >
                <div className="space-y-4">
                  
                  {/* Photo Placeholder with Islamic Monogram */}
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-emerald-900 to-emerald-950 text-gold-300 flex items-center justify-center font-bold text-xl border-2 border-gold-500/40 shadow-md group-hover:scale-105 transition-transform">
                    <User className="w-9 h-9 text-gold-400" />
                  </div>

                  <div className="text-center space-y-1">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-900 transition-colors">
                      {teacher.name}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-800">
                      {teacher.role}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        {t('teachers.qualLabel')}
                      </span>
                      <p className="text-slate-700 font-medium">{teacher.qualification}</p>
                    </div>

                    <div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        {t('teachers.expLabel')}
                      </span>
                      <p className="text-slate-700 font-medium">{teacher.expertise}</p>
                    </div>

                    <p className="text-[11px] text-slate-500 italic pt-1 leading-relaxed">
                      {teacher.bio}
                    </p>
                  </div>

                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 text-center">
                  <span className="text-[11px] font-bold text-gold-700 bg-gold-50 px-2.5 py-1 rounded-md border border-gold-200 inline-block">
                    {t('teachers.verifiedLabel')}
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
