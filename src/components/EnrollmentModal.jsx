import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, MessageCircle, Mail, CheckCircle2, Shield, Copy, Check, ExternalLink, Send } from 'lucide-react';
import { coursesData } from '../data/courses';
import { foundationInfo } from '../data/foundationInfo';
import { IslamicStarDeco } from './IslamicPattern';
import { getLocalizedCourse } from '../utils/courseLocalization';

export default function EnrollmentModal({ isOpen, onClose, defaultCourseSlug = "" }) {
  const { t, i18n } = useTranslation();
  const [submissionMethod, setSubmissionMethod] = useState('whatsapp'); // 'whatsapp' | 'email'
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    gender: 'brother',
    courseId: defaultCourseSlug || coursesData[0].id,
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submittedMethod, setSubmittedMethod] = useState('whatsapp');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCourseChange = (e) => {
    setFormData({ ...formData, courseId: e.target.value });
  };

  const rawCourse = coursesData.find((c) => c.id === formData.courseId) || coursesData[0];
  const selectedCourse = getLocalizedCourse(rawCourse, i18n.language);

  const genderText = formData.gender === 'brother' 
    ? (i18n.language === 'ur' ? 'شعبہ مرد / برادران' : i18n.language === 'ar' ? 'فصل الرجال (الإخوة)' : "Brother (Men's Cohort)")
    : (i18n.language === 'ur' ? 'شعبہ خواتین / بہنیں' : i18n.language === 'ar' ? 'فصل النساء (الأخوات)' : "Sister (Women's Cohort)");

  // Formatted inquiry message
  const getEnrollmentMessage = () => {
    if (i18n.language === 'ur') {
      return `*الکہف فاؤنڈیشن - داخلہ فارم*\n\n` +
        `*کورس:* ${selectedCourse.title}\n` +
        `*نام:* ${formData.name}\n` +
        `*کلاس کا انتخاب:* ${genderText}\n` +
        `*فون / موبائل:* ${formData.phone || 'فراہم نہیں کیا گیا'}\n` +
        `*ای میل:* ${formData.email || 'فراہم نہیں کی گئی'}\n` +
        `*اضافی تفصیل:* ${formData.notes || 'کوئی نہیں'}\n\n` +
        `تاریخ: ${new Date().toLocaleDateString('en-GB')}`;
    } else if (i18n.language === 'ar') {
      return `*مؤسسة الكهف - استمارة التسجيل في الدورة*\n\n` +
        `*الدورة:* ${selectedCourse.title}\n` +
        `*الاسم:* ${formData.name}\n` +
        `*الفصل الدراسي:* ${genderText}\n` +
        `*الهاتف / الجوال:* ${formData.phone || 'غير محدد'}\n` +
        `*البريد الإلكتروني:* ${formData.email || 'غير محدد'}\n` +
        `*ملاحظات:* ${formData.notes || 'لا توجد'}\n\n` +
        `التاريخ: ${new Date().toLocaleDateString('en-GB')}`;
    }
    return `Course Enrollment Application - Al Kahf Foundation\n\n` +
      `Course: ${selectedCourse.title}\n` +
      `Full Name: ${formData.name}\n` +
      `Learning Cohort: ${genderText}\n` +
      `Phone/WhatsApp: ${formData.phone || 'Not provided'}\n` +
      `Email: ${formData.email || 'Not provided'}\n` +
      `Additional Notes: ${formData.notes || 'None'}\n\n` +
      `Date: ${new Date().toLocaleDateString('en-GB')}`;
  };

  const getEmailSubject = () => {
    if (i18n.language === 'ur') {
      return `[درخواست داخلہ] ${selectedCourse.title} - ${formData.name}`;
    }
    if (i18n.language === 'ar') {
      return `[طلب تسجيل دورة] ${selectedCourse.title} - ${formData.name}`;
    }
    return `[Enrollment Application] ${selectedCourse.title} - ${formData.name}`;
  };

  const enrollmentMsg = getEnrollmentMessage();
  const emailSubject = getEmailSubject();

  const mailtoUrl = `mailto:${foundationInfo.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(enrollmentMsg)}`;
  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(foundationInfo.email)}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(enrollmentMsg)}`;
  const whatsappUrl = `https://wa.me/${foundationInfo.whatsappClean}?text=${encodeURIComponent(enrollmentMsg)}`;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (submissionMethod === 'email') {
      // Trigger default mail client
      window.location.href = mailtoUrl;
      setSubmittedMethod('email');
      setSubmitted(true);
    } else {
      // Trigger WhatsApp
      window.open(whatsappUrl, '_blank');
      setSubmittedMethod('whatsapp');
      setSubmitted(true);
    }
  };

  const handleCopy = () => {
    const fullClipboardText = `To: ${foundationInfo.email}\nSubject: ${emailSubject}\n\n${enrollmentMsg}`;
    navigator.clipboard.writeText(fullClipboardText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const resetForm = () => {
    setSubmitted(false);
    setCopied(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-gold-500/30 overflow-hidden my-8 animate-slide-up text-start">
        
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 end-5 p-2 rounded-full bg-emerald-900/80 text-emerald-200 hover:text-white hover:bg-emerald-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-wider">
              <IslamicStarDeco className="w-3.5 h-3.5 shrink-0" />
              <span>{t('enrollmentModal.directBadge')}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
              {t('enrollmentModal.title')}
            </h3>
            <p className="text-xs text-emerald-200">
              {t('enrollmentModal.subtitle')}
            </p>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-4 space-y-5 animate-fade-in">
              
              {submittedMethod === 'email' ? (
                <>
                  <div className="w-16 h-16 mx-auto rounded-full bg-amber-50 text-gold-700 flex items-center justify-center border-2 border-gold-400 shadow-sm">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold text-slate-900">
                      {t('enrollmentModal.emailSuccessTitle')}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      {t('enrollmentModal.emailSuccessDesc')}
                    </p>
                  </div>

                  {/* Official Email Display Box */}
                  <div className="p-3.5 rounded-2xl bg-sand-50 border border-slate-200 text-start space-y-1.5 max-w-md mx-auto">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      {t('enrollmentModal.officialEmailLabel')}
                    </span>
                    <a
                      href={`mailto:${foundationInfo.email}`}
                      className="text-sm font-bold text-emerald-900 hover:text-gold-700 break-all flex items-center gap-1.5"
                    >
                      <Mail className="w-4 h-4 text-gold-600 shrink-0" />
                      <span>{foundationInfo.email}</span>
                    </a>
                  </div>

                  {/* Quick Action Buttons for Email */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-2 max-w-md mx-auto">
                    <a
                      href={gmailWebUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs shadow transition-all"
                    >
                      <ExternalLink className="w-4 h-4 shrink-0" />
                      <span>{t('enrollmentModal.openGmailBtn')}</span>
                    </a>

                    <a
                      href={mailtoUrl}
                      className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs border border-slate-300 transition-all"
                    >
                      <Mail className="w-4 h-4 text-slate-700 shrink-0" />
                      <span>{t('enrollmentModal.openDefaultMailBtn')}</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopy}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-sand-100 hover:bg-sand-200 text-slate-700 font-semibold text-xs border border-slate-300 transition-all"
                      title={t('enrollmentModal.copyApplicationBtn')}
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-700" />
                          <span className="text-emerald-700 font-bold">{t('enrollmentModal.copied')}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>{t('enrollmentModal.copyApplicationBtn')}</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* WhatsApp Alternative Link */}
                  <div className="pt-2 border-t border-slate-100">
                    <p className="text-[11px] text-slate-500 mb-2">
                      {i18n.language === 'ur'
                        ? 'کیا آپ واٹس ایپ پر بھی بھیجنا چاہتے ہیں؟'
                        : i18n.language === 'ar'
                        ? 'هل تفضل الإرسال عبر واتساب أيضاً؟'
                        : 'Would you like to send via WhatsApp instead?'}
                    </p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-green-700 underline"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-green-600" />
                      <span>{t('enrollmentModal.submit')}</span>
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center border-2 border-emerald-500 shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold text-slate-900">
                      {t('enrollmentModal.successTitle')}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      {t('enrollmentModal.successDesc')}
                    </p>
                  </div>

                  {/* Re-open WhatsApp CTA */}
                  <div className="pt-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-xs shadow-md transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp (+92 301 4226909)</span>
                    </a>
                  </div>

                  {/* Alternative Email Option */}
                  <div className="pt-2 border-t border-slate-100 text-xs text-slate-500">
                    <p className="mb-1.5">
                      {i18n.language === 'ur'
                        ? 'واٹس ایپ اوپن نہیں ہو سکا؟ ای میل کے ذریعے ارسال کریں:'
                        : i18n.language === 'ar'
                        ? 'لم يفتح تطبيق واتساب؟ أرسل عبر البريد:'
                        : "WhatsApp didn't open? Send via Email:"}
                    </p>
                    <a
                      href={mailtoUrl}
                      className="inline-flex items-center gap-1.5 font-bold text-emerald-900 hover:text-gold-700 underline"
                    >
                      <Mail className="w-3.5 h-3.5 text-gold-600" />
                      <span>{foundationInfo.email}</span>
                    </a>
                  </div>
                </>
              )}

              <div className="pt-3 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 font-semibold text-xs transition-colors"
                >
                  {i18n.language === 'ur' ? 'نیا فارم بھریں' : i18n.language === 'ar' ? 'تعبئة استمارة أخرى' : 'Edit Application'}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-emerald-950 text-white font-semibold text-xs hover:bg-emerald-900 transition-colors shadow-sm"
                >
                  {t('enrollmentModal.closeBtn')}
                </button>
              </div>

            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Submission Channel Selection Tabs */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {t('enrollmentModal.methodLabel')}
                </label>
                <div className="grid grid-cols-2 gap-2.5 p-1 rounded-2xl bg-slate-100 border border-slate-200">
                  <button
                    type="button"
                    onClick={() => setSubmissionMethod('whatsapp')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      submissionMethod === 'whatsapp'
                        ? 'bg-white text-emerald-950 shadow-sm border border-emerald-700/20'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <MessageCircle className={`w-4 h-4 ${submissionMethod === 'whatsapp' ? 'text-green-600' : 'text-slate-400'}`} />
                    <span>{t('enrollmentModal.methodWhatsApp')}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSubmissionMethod('email')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      submissionMethod === 'email'
                        ? 'bg-white text-emerald-950 shadow-sm border border-gold-500/30'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Mail className={`w-4 h-4 ${submissionMethod === 'email' ? 'text-gold-600' : 'text-slate-400'}`} />
                    <span>{t('enrollmentModal.methodEmail')}</span>
                  </button>
                </div>

                {submissionMethod === 'email' && (
                  <p className="text-[11px] text-emerald-800 bg-emerald-50/80 border border-emerald-200/80 rounded-xl p-2.5 mt-2 flex items-start gap-1.5">
                    <IslamicStarDeco className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                    <span>{t('enrollmentModal.emailNotice')}</span>
                  </p>
                )}
              </div>

              {/* Select Course */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t('enrollmentModal.chooseCourse')}
                </label>
                <select
                  value={formData.courseId}
                  onChange={handleCourseChange}
                  className="w-full px-4 py-2.5 text-sm bg-sand-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none text-slate-900 font-medium"
                >
                  {coursesData.map((course) => {
                    const loc = getLocalizedCourse(course, i18n.language);
                    return (
                      <option key={course.id} value={course.id}>
                        {loc.title}
                      </option>
                    );
                  })}
                </select>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t('enrollmentModal.fullName')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t('enrollmentModal.namePlaceholder')}
                  className="w-full px-4 py-2.5 text-sm bg-sand-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                />
              </div>

              {/* Gender Cohort Choice */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t('enrollmentModal.learningCohort')}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label className={`p-2.5 rounded-xl border text-xs font-semibold cursor-pointer flex items-center justify-center gap-2 transition-all ${
                    formData.gender === 'brother'
                      ? 'bg-emerald-50 border-emerald-700 text-emerald-900 shadow-sm'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}>
                    <input
                      type="radio"
                      name="gender"
                      value="brother"
                      checked={formData.gender === 'brother'}
                      onChange={() => setFormData({ ...formData, gender: 'brother' })}
                      className="hidden"
                    />
                    <span>{t('enrollmentModal.brotherCohort')}</span>
                  </label>

                  <label className={`p-2.5 rounded-xl border text-xs font-semibold cursor-pointer flex items-center justify-center gap-2 transition-all ${
                    formData.gender === 'sister'
                      ? 'bg-gold-50 border-gold-600 text-gold-950 shadow-sm'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}>
                    <input
                      type="radio"
                      name="gender"
                      value="sister"
                      checked={formData.gender === 'sister'}
                      onChange={() => setFormData({ ...formData, gender: 'sister' })}
                      className="hidden"
                    />
                    <span>{t('enrollmentModal.sisterCohort')}</span>
                  </label>
                </div>
              </div>

              {/* Contact Inputs: Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {submissionMethod === 'whatsapp' ? (
                      <>
                        {t('enrollmentModal.phone')} <span className="text-red-500">*</span>
                      </>
                    ) : (
                      <span>{t('enrollmentModal.phoneOptional')}</span>
                    )}
                  </label>
                  <input
                    type="tel"
                    required={submissionMethod === 'whatsapp'}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+92 300 0000000"
                    className="w-full px-4 py-2.5 text-sm bg-sand-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {submissionMethod === 'email' ? (
                      <>
                        {t('enrollmentModal.emailRequired')} <span className="text-red-500">*</span>
                      </>
                    ) : (
                      <span>{t('enrollmentModal.email')}</span>
                    )}
                  </label>
                  <input
                    type="email"
                    required={submissionMethod === 'email'}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t('enrollmentModal.emailPlaceholder')}
                    className="w-full px-4 py-2.5 text-sm bg-sand-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                  />
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t('enrollmentModal.notes')}
                </label>
                <textarea
                  rows="2"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={t('enrollmentModal.notesPlaceholder')}
                  className="w-full px-4 py-2.5 text-sm bg-sand-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                {submissionMethod === 'email' ? (
                  <button
                    type="submit"
                    className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-emerald-900 via-emerald-850 to-emerald-950 hover:from-emerald-800 hover:to-emerald-900 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 group transition-all"
                  >
                    <Mail className="w-4 h-4 text-gold-400 shrink-0 group-hover:scale-110 transition-transform" />
                    <span>{t('enrollmentModal.submitEmail')}</span>
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 hover:from-gold-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-md flex items-center justify-center gap-2 group transition-all"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-950 shrink-0 group-hover:scale-110 transition-transform" />
                    <span>{t('enrollmentModal.submit')}</span>
                  </button>
                )}
              </div>

              <div className="text-center">
                <p className="text-[11px] text-slate-400 flex items-center justify-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>{t('enrollmentModal.privacy')}</span>
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
