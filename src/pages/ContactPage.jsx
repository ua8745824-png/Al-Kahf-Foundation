import React from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { staticSeoData, getOrganizationSchema, getBreadcrumbsSchema } from '../data/seoData';
import Contact from '../components/Contact';
import { IslamicStarDeco, IslamicDivider } from '../components/IslamicPattern';
import { MessageCircle, Mail, Clock, HelpCircle, MapPin, CheckCircle2 } from 'lucide-react';
import { foundationInfo } from '../data/foundationInfo';

export default function ContactPage() {
  const breadcrumbItems = [
    { name: 'Contact Us', url: '/contact' }
  ];

  const schemas = [
    getOrganizationSchema(),
    getBreadcrumbsSchema(breadcrumbItems)
  ];

  const contactFaqs = [
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
    <div className="animate-fade-in">
      <SEO
        title={staticSeoData.contact.title}
        description={staticSeoData.contact.description}
        canonical={staticSeoData.contact.canonical}
        keywords={staticSeoData.contact.keywords}
        ogImage={staticSeoData.contact.ogImage}
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
            <IslamicStarDeco className="w-3.5 h-3.5" />
            <span>Admissions & Support</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight">
            Contact Al Kahf Foundation
          </h1>

          <p className="text-emerald-200 text-sm sm:text-base max-w-2xl mx-auto">
            We are here to assist you with course inquiries, enrollment guidance, schedules, and spiritual learning paths.
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
              Common Admissions Questions
            </h2>
            <IslamicDivider showArabic={false} />
            <p className="text-xs sm:text-sm text-slate-600">
              Quick answers regarding enrollment, schedule flexibility, and online class formats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-sand-50 border border-slate-200/90 space-y-2"
              >
                <h3 className="text-sm font-bold text-slate-900 flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
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
