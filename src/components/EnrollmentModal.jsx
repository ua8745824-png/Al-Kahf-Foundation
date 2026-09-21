import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, MessageCircle, CheckCircle2, Shield } from 'lucide-react';
import { coursesData } from '../data/courses';
import { foundationInfo } from '../data/foundationInfo';
import { IslamicStarDeco } from './IslamicPattern';
import { getLocalizedCourse } from '../utils/courseLocalization';

export default function EnrollmentModal({ isOpen, onClose, defaultCourseSlug = "" }) {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    gender: 'brother',
    courseId: defaultCourseSlug || coursesData[0].id,
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleCourseChange = (e) => {
    setFormData({ ...formData, courseId: e.target.value });
  };

  const rawCourse = coursesData.find((c) => c.id === formData.courseId) || coursesData[0];
  const selectedCourse = getLocalizedCourse(rawCourse, i18n.language);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let msg = '';
    const genderText = formData.gender === 'brother' 
      ? (i18n.language === 'ur' ? 'شعبہ مرد / برادران' : i18n.language === 'ar' ? 'فصل الرجال (الإخوة)' : 'Brother (Men Cohort)')
      : (i18n.language === 'ur' ? 'شعبہ خواتین / بہنیں' : i18n.language === 'ar' ? 'فصل النساء (الأخوات)' : 'Sister (Women Cohort)');

    if (i18n.language === 'ur') {
      msg = `*الکہف فاؤنڈیشن - داخلہ فارم*\n\n` +
        `*کورس:* ${selectedCourse.title}\n` +
        `*نام:* ${formData.name}\n` +
        `*کلاس کا انتخاب:* ${genderText}\n` +
        `*فون / واٹس ایپ:* ${formData.phone}\n` +
        `*ای میل:* ${formData.email || 'فراہم نہیں کی گئی'}\n` +
        `*اضافی تفصیل:* ${formData.notes || 'کوئی نہیں'}`;
    } else if (i18n.language === 'ar') {
      msg = `*مؤسسة الكهف - استمارة التسجيل في الدورة*\n\n` +
        `*الدورة:* ${selectedCourse.title}\n` +
        `*الاسم:* ${formData.name}\n` +
        `*الفصل الدراسي:* ${genderText}\n` +
        `*الهاتف / واتساب:* ${formData.phone}\n` +
        `*البريد الإلكتروني:* ${formData.email || 'غير محدد'}\n` +
        `*ملاحظات:* ${formData.notes || 'لا توجد'}`;
    } else {
      msg = `*Course Enrollment Inquiry - Al Kahf Foundation*\n\n` +
        `*Course:* ${selectedCourse.title}\n` +
        `*Name:* ${formData.name}\n` +
        `*Gender Cohort:* ${genderText}\n` +
        `*Phone/WhatsApp:* ${formData.phone}\n` +
        `*Email:* ${formData.email || 'Not provided'}\n` +
        `*Additional Notes:* ${formData.notes || 'None'}`;
    }

    const waUrl = `https://wa.me/${foundationInfo.whatsappClean}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
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
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                {t('enrollmentModal.successTitle')}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                {t('enrollmentModal.successDesc')}
              </p>
              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-emerald-900 text-white font-semibold text-xs"
                >
                  {t('enrollmentModal.closeBtn')}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
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
                  <label className={`p-2.5 rounded-xl border text-xs font-semibold cursor-pointer flex items-center justify-center gap-2 ${
                    formData.gender === 'brother'
                      ? 'bg-emerald-50 border-emerald-700 text-emerald-900'
                      : 'border-slate-200 text-slate-600'
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

                  <label className={`p-2.5 rounded-xl border text-xs font-semibold cursor-pointer flex items-center justify-center gap-2 ${
                    formData.gender === 'sister'
                      ? 'bg-gold-50 border-gold-600 text-gold-950'
                      : 'border-slate-200 text-slate-600'
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

              {/* WhatsApp Number */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t('enrollmentModal.phone')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+92 300 0000000"
                  className="w-full px-4 py-2.5 text-sm bg-sand-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                />
              </div>

              {/* Email (Optional) */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t('enrollmentModal.email')}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t('enrollmentModal.emailPlaceholder')}
                  className="w-full px-4 py-2.5 text-sm bg-sand-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 hover:from-gold-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-md flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-950 shrink-0" />
                  <span>{t('enrollmentModal.submit')}</span>
                </button>
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
