import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, Mail, Send, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react';
import { IslamicDivider } from './IslamicPattern';
import { foundationInfo } from '../data/foundationInfo';
import { coursesData } from '../data/courses';
import { getLocalizedCourse } from '../utils/courseLocalization';

export default function Contact({ preselectedCourse = "" }) {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: preselectedCourse || '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError(t('contact.errorPhoneName'));
      return;
    }

    let msg = '';
    if (i18n.language === 'ur') {
      msg = `*الکہف فاؤنڈیشن - داخلہ و معلوماتی فارم*\n\n` +
        `*نام:* ${formData.name}\n` +
        `*فون / واٹس ایپ:* ${formData.phone}\n` +
        `*ای میل:* ${formData.email || 'فراہم نہیں کی گئی'}\n` +
        `*منتخب کورس:* ${formData.course || 'عمومی رہنمائی'}\n` +
        `*پیغام:* ${formData.message || 'کوئی اضافی تفصیل نہیں'}`;
    } else if (i18n.language === 'ar') {
      msg = `*مؤسسة الكهف - طلب استفسار وتسجيل*\n\n` +
        `*الاسم:* ${formData.name}\n` +
        `*الهاتف / واتساب:* ${formData.phone}\n` +
        `*البريد الإلكتروني:* ${formData.email || 'غير محدد'}\n` +
        `*الدورة المطلوبة:* ${formData.course || 'استفسار عام'}\n` +
        `*الرسالة:* ${formData.message || 'لا توجد ملاحظات إضافية'}`;
    } else {
      msg = `*New Course Inquiry - Al Kahf Foundation*\n\n` +
        `*Name:* ${formData.name}\n` +
        `*Email:* ${formData.email || 'N/A'}\n` +
        `*Phone/WhatsApp:* ${formData.phone}\n` +
        `*Selected Course:* ${formData.course || 'General Inquiry'}\n` +
        `*Message:* ${formData.message || 'No additional message.'}`;
    }

    const waUrl = `https://wa.me/${foundationInfo.whatsappClean}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-sand-50 relative overflow-hidden" id="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold uppercase tracking-wider">
            <MessageCircle className="w-3.5 h-3.5 text-gold-600 shrink-0" />
            <span>{t('contact.badge')}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight font-serif">
            {t('contact.heading')}
          </h2>

          <IslamicDivider showArabic={false} />

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t('contact.description')}
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary WhatsApp Card */}
            <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 text-white rounded-3xl p-7 border border-gold-500/30 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-green-500/20 border border-green-400/40 text-green-400 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider bg-green-900/60 text-green-300 px-2.5 py-1 rounded-full border border-green-500/30">
                  {t('contact.whatsappCardBadge')}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  {t('contact.whatsappCardTitle')}
                </h3>
                <p className="text-xs text-emerald-200 mt-1 leading-relaxed">
                  {t('contact.whatsappCardDesc')}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={foundationInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold text-sm shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>{t('contact.whatsappBtn')} {foundationInfo.whatsapp}</span>
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-soft-card space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-gold-700 flex items-center justify-center border border-gold-200 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full">
                  {t('contact.emailCardBadge')}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {t('contact.emailCardTitle')}
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {t('contact.emailCardDesc')}
                </p>
              </div>

              <div className="pt-1">
                <a
                  href={foundationInfo.emailUrl}
                  className="inline-flex items-center gap-2 text-sm font-bold text-emerald-900 hover:text-gold-700 transition-colors break-all"
                >
                  <span>{foundationInfo.email}</span>
                  <ExternalLink className="w-4 h-4 shrink-0" />
                </a>
              </div>
            </div>

            {/* Social Media Channels Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-soft-card space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {t('contact.socialTitle')}
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href={foundationInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-emerald-50 text-emerald-900 font-semibold flex items-center gap-2 hover:bg-emerald-100 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-green-600 shrink-0" />
                  <span>WhatsApp ({t('contact.activeLabel')})</span>
                </a>

                <a
                  href={foundationInfo.emailUrl}
                  className="p-2.5 rounded-xl bg-slate-50 text-slate-800 font-semibold flex items-center gap-2 hover:bg-slate-100 transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Email ({t('contact.activeLabel')})</span>
                </a>

                <div className="p-2.5 rounded-xl bg-slate-50 text-slate-400 font-medium flex items-center gap-2 cursor-not-allowed opacity-75">
                  <span className="w-2 h-2 rounded-full bg-slate-300" />
                  <span>Instagram ({t('contact.soonLabel')})</span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 text-slate-400 font-medium flex items-center gap-2 cursor-not-allowed opacity-75">
                  <span className="w-2 h-2 rounded-full bg-slate-300" />
                  <span>TikTok ({t('contact.soonLabel')})</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 italic">
                {t('contact.telegramNotice')}
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Registration & Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-soft-card">
            
            <div className="space-y-2 mb-6">
              <h3 className="text-xl font-bold text-slate-900 font-serif">
                {t('contact.formTitle')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                {t('contact.formDesc')}
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fade-in">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-600 text-white flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-emerald-950">
                  {t('contact.successTitle')}
                </h4>
                <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                  {t('contact.successDesc')}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-bold text-emerald-900 underline"
                >
                  {t('contact.sendAnother')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {error && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t('contact.nameLabel')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t('contact.namePlaceholder')}
                    className="w-full px-4 py-3 text-sm bg-sand-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/50 focus:border-emerald-700 transition-all"
                  />
                </div>

                {/* Phone & Email Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {t('contact.phoneLabel')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder={t('contact.phonePlaceholder')}
                      className="w-full px-4 py-3 text-sm bg-sand-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/50 focus:border-emerald-700 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {t('contact.emailLabel')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('contact.emailPlaceholder')}
                      className="w-full px-4 py-3 text-sm bg-sand-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/50 focus:border-emerald-700 transition-all"
                    />
                  </div>
                </div>

                {/* Select Course */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t('contact.courseLabel')}
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm bg-sand-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/50 focus:border-emerald-700 transition-all text-slate-800"
                  >
                    <option value="">{t('contact.courseDefault')}</option>
                    {coursesData.map((c) => {
                      const loc = getLocalizedCourse(c, i18n.language);
                      return (
                        <option key={c.id} value={loc.title}>
                          {loc.title}
                        </option>
                      );
                    })}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t('contact.messageLabel')}
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact.messagePlaceholder')}
                    className="w-full px-4 py-3 text-sm bg-sand-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/50 focus:border-emerald-700 transition-all"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-900 to-emerald-950 hover:from-emerald-850 hover:to-emerald-900 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
                  >
                    <Send className="w-4 h-4 text-gold-400 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
                    <span>{t('contact.submitBtn')}</span>
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
