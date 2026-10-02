import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { getLocalizedSeoData, getOrganizationSchema, getBreadcrumbsSchema } from '../data/seoData';
import Contact from '../components/Contact';
import { IslamicStarDeco, IslamicDivider } from '../components/IslamicPattern';
import { HelpCircle } from 'lucide-react';

export default function ContactPage() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const seo = getLocalizedSeoData('contact', lang);

  const breadcrumbItems = [
    { name: t('nav.contact'), url: '/contact' }
  ];

  const schemas = [
    getOrganizationSchema(),
    getBreadcrumbsSchema(breadcrumbItems)
  ];

  const contactFaqs = lang === 'ur' ? [
    {
      q: "میں کسی کورس میں داخلہ کیسے حاصل کر سکتا/سکتی ہوں؟",
      a: "آپ کسی بھی کورس کے صفحے پر 'سجّل الآن' یا 'Enroll Now' پر کلک کر سکتے ہیں، یا ہمارے واٹس ایپ کوآرڈینیٹر (+92 301 4226909) پر براہِ راست رابطہ کر سکتے ہیں۔"
    },
    {
      q: "کیا کلاسز مختلف ٹائم زونز کے طلبہ کے لیے موزوں ہیں؟",
      a: "جی ہاں، ہمارے پاس صبح، شام اور ویک اینڈ کے متعدد اوقات موجود ہیں، نیز اگر کوئی لائیو کلاس رہ جائے تو مکمل ریکارڈنگز بھی دستیاب ہوتی ہیں۔"
    },
    {
      q: "خواتین کی کلاسز کا نظام کس طرح ہوتا ہے؟",
      a: "خواتین کی کلاسز کے لیے الگ ورچوئل فصول، معلمات اور مکمل باحجاب و نجی ماحول فراہم کیا جاتا ہے۔"
    },
    {
      q: "فیس کی ادائیگی کے کیا طریقے دستیاب ہیں؟",
      a: "داخلے کی تصدیق کے وقت ہمارا ایڈمیشن کوآرڈینیٹر مقامی اور بین الاقوامی طلبہ کے لیے آسان اور محفوظ ادائیگی کی تفصیلات فراہم کرے گا۔"
    }
  ] : lang === 'ar' ? [
    {
      q: "كيف يمكنني التسجيل في إحدى الدورات؟",
      a: "يمكنك الضغط على زر 'سجّل الآن' في أي صفحة دورة، أو مراسلة منسق القبول عبر واتساب مباشرة (+92 301 4226909) لتأكيد تسجيلك."
    },
    {
      q: "هل تناسب مواعيد الفصول الطلاب من مختلف الدول وفروق التوقيت؟",
      a: "نعم، نوفر فترات صباحية ومسائية متعددة بالإضافة إلى تسجيلات كاملة ومؤرشفة لكافة الدروس في حال تعذر الحضور المباشر."
    },
    {
      q: "كيف يتم تنظيم فصول الأخوات والنساء؟",
      a: "تُدار فصول النساء في بيئة تعليمية خاصة تراعي الحشمة والخصوصية التامة بإشراف معلمات متخصصات."
    },
    {
      q: "ما هي وسائل الدفع والرسوم المتاحة؟",
      a: "سيوفر منسق القبول خيارات دفع إلكترونية ميسرة وآمنة للطلاب المحليين والدوليين عند إتمام طلب التسجيل."
    }
  ] : [
    {
      q: "How do I register for a course?",
      a: "You can click on 'Enroll Now' on any course page or message our WhatsApp coordinator directly at +92 301 4226909 with your desired course."
    },
    {
      q: "Are the classes suitable for international students in different time zones?",
      a: "Yes. We offer multiple batches (including evening and weekend slots) and provide full access to lecture recordings if you ever miss a live class."
    },
    {
      q: "How are women's classes organized?",
      a: "Women's classes have dedicated online classrooms, female instructors/coordinators, and respectful private settings."
    },
    {
      q: "What payment methods are accepted?",
      a: "Our admissions coordinator will provide simple, secure local and international payment details upon enrollment."
    }
  ];

  return (
    <div className="animate-fade-in text-start">
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        keywords={seo.keywords}
        ogImage={seo.ogImage}
        schemas={schemas}
      />

      {/* Page Header */}
      <section className="relative py-20 bg-emerald-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-islamic-stars-dark opacity-30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex justify-center">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900 border border-gold-500/30 text-gold-300 text-xs font-semibold uppercase tracking-wider">
            <IslamicStarDeco className="w-3.5 h-3.5 shrink-0" />
            <span>{t('contact.supportBadge')}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight">
            {t('contact.pageHeading')}
          </h1>

          <p className="text-emerald-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {t('contact.pageDescription')}
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <Contact />

      {/* Admissions FAQ Section */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">
              {t('contact.faqHeading')}
            </h2>
            <IslamicDivider showArabic={false} />
            <p className="text-xs sm:text-sm text-slate-600">
              {t('contact.faqSubheading')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-sand-50 border border-slate-200/90 space-y-2 text-start"
              >
                <h3 className="text-sm font-bold text-slate-900 flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed ps-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
