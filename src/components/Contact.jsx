import React, { useState } from 'react';
import { MessageCircle, Mail, Send, CheckCircle2, Phone, Sparkles, AlertCircle, Clock, MapPin, ExternalLink } from 'lucide-react';
import { IslamicDivider, IslamicStarDeco } from './IslamicPattern';
import { foundationInfo } from '../data/foundationInfo';
import { coursesData } from '../data/courses';

export default function Contact({ preselectedCourse = "" }) {
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
      setError('Please provide your name and phone/WhatsApp number.');
      return;
    }

    // Auto-generate WhatsApp submission URL for instant messaging
    const msg = `*New Course Inquiry - Al Kahf Foundation*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email || 'N/A'}\n` +
      `*Phone/WhatsApp:* ${formData.phone}\n` +
      `*Selected Course:* ${formData.course || 'General Inquiry'}\n` +
      `*Message:* ${formData.message || 'No additional message.'}`;

    const waUrl = `https://wa.me/${foundationInfo.whatsappClean}?text=${encodeURIComponent(msg)}`;
    
    // Open WhatsApp in new tab
    window.open(waUrl, '_blank');
    
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-sand-50 relative overflow-hidden" id="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold uppercase tracking-wider">
            <MessageCircle className="w-3.5 h-3.5 text-gold-600" />
            <span>Admissions & Inquiries</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight font-serif">
            Get in Touch With Al Kahf Foundation
          </h2>

          <IslamicDivider showArabic={false} />

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Have questions about our courses, enrollment process, or schedules? Reach out to our admissions team directly via WhatsApp, email, or the form below.
          </p>
        </div>

        {/* 2 Column Layout: Direct Contact Info & Interactive Form */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Verified Contact Information & Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary WhatsApp Card */}
            <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 text-white rounded-3xl p-7 border border-gold-500/30 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-green-500/20 border border-green-400/40 text-green-400 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider bg-green-900/60 text-green-300 px-2.5 py-1 rounded-full border border-green-500/30">
                  Instant Support
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  WhatsApp Admissions
                </h3>
                <p className="text-xs text-emerald-200 mt-1">
                  Connect directly with our admissions coordinator for immediate course details and schedules.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={foundationInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold text-sm shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp: {foundationInfo.whatsapp}</span>
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-soft-card space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-gold-700 flex items-center justify-center border border-gold-200">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full">
                  Official Email
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Direct Email Inquiry
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Send your questions or formal inquiries to our academic office.
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
                Foundation Social Channels
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                
                {/* Active Channels */}
                <a
                  href={foundationInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-emerald-50 text-emerald-900 font-semibold flex items-center gap-2 hover:bg-emerald-100 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-green-600" />
                  <span>WhatsApp (Active)</span>
                </a>

                <a
                  href={foundationInfo.emailUrl}
                  className="p-2.5 rounded-xl bg-slate-50 text-slate-800 font-semibold flex items-center gap-2 hover:bg-slate-100 transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold-600" />
                  <span>Email (Active)</span>
                </a>

                {/* Placeholders clearly marked as coming soon per instructions */}
                <div
                  className="p-2.5 rounded-xl bg-slate-50 text-slate-400 font-medium flex items-center gap-2 cursor-not-allowed opacity-75"
                  title="Official Instagram account coming soon"
                >
                  <span className="w-2 h-2 rounded-full bg-slate-300" />
                  <span>Instagram (Soon)</span>
                </div>

                <div
                  className="p-2.5 rounded-xl bg-slate-50 text-slate-400 font-medium flex items-center gap-2 cursor-not-allowed opacity-75"
                  title="Official TikTok account coming soon"
                >
                  <span className="w-2 h-2 rounded-full bg-slate-300" />
                  <span>TikTok (Soon)</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 italic">
                Telegram: Not currently available. All official updates are shared via WhatsApp and Email.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Registration & Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-soft-card">
            
            <div className="space-y-2 mb-6">
              <h3 className="text-xl font-bold text-slate-900 font-serif">
                Send Course Registration Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Fill out this quick form. You can also submit directly to WhatsApp for instant verification.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fade-in">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-600 text-white flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-emerald-950">
                  Inquiry Initiated Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-emerald-800">
                  JazakAllah Khair for reaching out. We have opened WhatsApp with your course inquiry details. You may also expect an email response within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-bold text-emerald-900 underline"
                >
                  Send another inquiry
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
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Muhammad Abdullah or Sister Fatima"
                    className="w-full px-4 py-3 text-sm bg-sand-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/50 focus:border-emerald-700 transition-all"
                  />
                </div>

                {/* Phone & Email Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone / WhatsApp Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+92 300 1234567"
                      className="w-full px-4 py-3 text-sm bg-sand-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/50 focus:border-emerald-700 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 text-sm bg-sand-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/50 focus:border-emerald-700 transition-all"
                    />
                  </div>
                </div>

                {/* Select Course */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Select Desired Course / Program
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm bg-sand-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/50 focus:border-emerald-700 transition-all text-slate-800"
                  >
                    <option value="">-- Choose a course or general guidance --</option>
                    {coursesData.map((c) => (
                      <option key={c.id} value={c.title}>
                        {c.title}
                      </option>
                    ))}
                    <option value="Special Ramadan Program">Special Ramadan Program</option>
                    <option value="Hajj Preparation Program">Hajj Preparation Program</option>
                    <option value="Umrah Preparation Program">Umrah Preparation Program</option>
                    <option value="Other / General Consultation">Other / General Consultation</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Message / Specific Question
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your preferred timing, previous learning background, or any specific questions..."
                    className="w-full px-4 py-3 text-sm bg-sand-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/50 focus:border-emerald-700 transition-all"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-900 to-emerald-950 hover:from-emerald-850 hover:to-emerald-900 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
                  >
                    <Send className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
                    <span>Send Message (Connect via WhatsApp)</span>
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
