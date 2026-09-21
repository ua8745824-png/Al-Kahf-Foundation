import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { coursesData } from '../data/courses';
import { foundationInfo } from '../data/foundationInfo';
import { SITE_URL, getCourseSchema, getBreadcrumbsSchema } from '../data/seoData';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { IslamicDivider, IslamicStarDeco } from '../components/IslamicPattern';
import {
  BookOpen,
  Clock,
  Calendar,
  Users,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Shield,
  GraduationCap,
  HelpCircle,
  Share2,
  Globe,
  Award
} from 'lucide-react';

export default function CourseDetails({ onOpenEnrollment }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [openModuleIndex, setOpenModuleIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [copied, setCopied] = useState(false);

  // Match course by slug, id, or alias
  const course = coursesData.find(
    (c) => c.slug === slug || c.id === slug || (c.aliases && c.aliases.includes(slug))
  ) || coursesData[0];

  const canonicalUrl = `${SITE_URL}/courses/${course.slug}`;

  const breadcrumbItems = [
    { name: 'Courses', url: '/courses' },
    { name: course.title, url: `/courses/${course.slug}` }
  ];

  const schemas = [
    getCourseSchema(course),
    getBreadcrumbsSchema(breadcrumbItems)
  ];

  const whatsappInquiryUrl = `https://wa.me/${foundationInfo.whatsappClean}?text=${encodeURIComponent(
    `Assalamu Alaikum, I would like to enroll in "${course.title}". Please provide the syllabus, fee details, and upcoming cohort schedule.`
  )}`;

  const toggleModule = (index) => {
    setOpenModuleIndex(openModuleIndex === index ? null : index);
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${course.title} | Al Kahf Foundation`,
        text: course.shortDescription,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  // Other related courses
  const otherCourses = coursesData.filter((c) => c.id !== course.id).slice(0, 3);

  return (
    <div className="bg-sand-50 animate-fade-in">
      {/* Course Dynamic Page-Specific SEO & Course Schema.org JSON-LD */}
      <SEO
        title={course.seoTitle || `${course.title} | Al Kahf Foundation`}
        description={course.seoDescription || course.shortDescription}
        canonical={canonicalUrl}
        keywords={`${course.title}, ${course.category}, learn ${course.title} online, Islamic education, Al Kahf Foundation`}
        ogImage={course.image}
        schemas={schemas}
      />

      {/* Course Hero Section */}
      <section className="relative py-16 sm:py-24 bg-emerald-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={course.image || "/images/al-kahf-foundation-islamic-education.jpg"}
            alt={course.imageAlt || course.title}
            className="w-full h-full object-cover opacity-25 mix-blend-luminosity filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-980 via-emerald-950/95 to-emerald-900/85" />
          <div className="absolute inset-0 bg-islamic-stars-dark opacity-35 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Reusable Accessible Breadcrumb Component */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Hero Details */}
            <div className="lg:col-span-8 space-y-4 sm:space-y-6">
              
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full bg-emerald-900 border border-gold-500/40 text-gold-300 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <IslamicStarDeco className="w-3.5 h-3.5" />
                  <span>{course.category}</span>
                </span>
                {course.badge && (
                  <span className="px-3 py-1 rounded-full bg-gold-500 text-slate-950 text-xs font-bold shadow">
                    {course.badge}
                  </span>
                )}
                <span className="px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-200 text-xs">
                  Men & Women Cohorts
                </span>
              </div>

              {/* Single Primary H1 for Course Page */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif leading-tight">
                  {course.title}
                </h1>
                {course.arabicTitle && (
                  <p className="text-xl sm:text-2xl text-gold-400 font-arabic pt-1">
                    {course.arabicTitle}
                  </p>
                )}
              </div>

              <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed max-w-3xl">
                {course.fullDescription || course.shortDescription}
              </p>

              {/* Quick Info Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs text-emerald-200">
                <div className="p-3 rounded-xl bg-emerald-900/60 border border-emerald-800 backdrop-blur-sm flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-emerald-400 block font-semibold uppercase">Duration</span>
                    <span className="font-medium text-white">{course.duration}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-900/60 border border-emerald-800 backdrop-blur-sm flex items-center gap-2">
                  <Globe className="w-4 h-4 text-gold-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-emerald-400 block font-semibold uppercase">Language</span>
                    <span className="font-medium text-white">{course.language}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-900/60 border border-emerald-800 backdrop-blur-sm flex items-center gap-2">
                  <Users className="w-4 h-4 text-gold-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-emerald-400 block font-semibold uppercase">Audience</span>
                    <span className="font-medium text-white">Men & Women</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-900/60 border border-emerald-800 backdrop-blur-sm flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-gold-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-emerald-400 block font-semibold uppercase">Method</span>
                    <span className="font-medium text-white">Live Online</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 hover:from-gold-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-xl shadow-gold-950/40 hover:scale-105 transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-950" />
                  <span>Enroll in {course.title}</span>
                </a>

                <button
                  onClick={() => onOpenEnrollment(course.id)}
                  className="px-6 py-3.5 rounded-xl bg-emerald-850 hover:bg-emerald-800 text-emerald-100 font-semibold text-sm border border-gold-500/30 transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-gold-400" />
                  <span>Online Registration Form</span>
                </button>

                <button
                  onClick={handleShare}
                  className="p-3.5 rounded-xl bg-emerald-900/70 hover:bg-emerald-850 text-emerald-300 hover:text-white border border-emerald-800 transition-colors"
                  title="Share this course"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                {copied && (
                  <span className="text-xs text-gold-400 font-bold animate-fade-in">Link Copied!</span>
                )}
              </div>

            </div>

            {/* Right Course Summary Card */}
            <div className="lg:col-span-4">
              <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-200 space-y-5">
                <div className="relative rounded-2xl overflow-hidden h-44 bg-emerald-950">
                  <img
                    src={course.image || "/images/al-kahf-foundation-islamic-education.jpg"}
                    alt={course.imageAlt || course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-xs font-bold text-gold-400">Authentic Curriculum</span>
                    <h4 className="text-sm font-bold truncate">{course.title}</h4>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-500">Learning Cohorts:</span>
                    <span className="font-bold text-slate-900">Separate Men & Women</span>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-500">Prerequisites:</span>
                    <span className="font-bold text-slate-900">{course.prerequisites || 'None'}</span>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-500">Class Format:</span>
                    <span className="font-bold text-emerald-800">{course.learningMethod}</span>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <span className="text-slate-500">Fee & Timing:</span>
                    <span className="font-bold text-gold-700 bg-gold-50 px-2 py-0.5 rounded">Inquire on WhatsApp</span>
                  </div>
                </div>

                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-900 hover:bg-emerald-850 text-white font-bold text-center text-xs shadow flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-green-400" />
                  <span>Inquire for Upcoming Batch</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Course Detailed Body Sections */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content (Col 1-8) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* 1. What You Will Learn & Objectives */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 font-serif flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-gold-600" />
                  <span>What You Will Learn</span>
                </h2>
                <IslamicDivider showArabic={false} />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {course.courseBenefits?.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-sand-50 border border-slate-200/80 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Who This Course Is For */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 font-serif flex items-center gap-2">
                  <Users className="w-5 h-5 text-gold-600" />
                  <span>Who This Course Is For</span>
                </h2>
                <IslamicDivider showArabic={false} />

                <div className="space-y-2.5 pt-2">
                  {course.whoIsThisFor?.map((audience, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-100 flex items-center gap-3 text-xs sm:text-sm text-slate-800"
                    >
                      <span className="w-2 h-2 rounded-full bg-gold-600 shrink-0" />
                      <span>{audience}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Course Outline / Syllabus */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-slate-900 font-serif flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-gold-600" />
                    <span>Course Outline & Modules</span>
                  </h2>
                  <span className="text-xs text-slate-500 font-medium">
                    {course.outline?.length || 0} Key Modules
                  </span>
                </div>
                <IslamicDivider showArabic={false} />

                <div className="space-y-3 pt-2">
                  {course.outline?.map((mod, idx) => {
                    const isOpen = openModuleIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="rounded-2xl border border-slate-200 overflow-hidden bg-sand-50/60 transition-all"
                      >
                        <button
                          onClick={() => toggleModule(idx)}
                          className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-slate-100/60 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <span className="px-2.5 py-1 rounded-md bg-emerald-900 text-gold-300 font-bold text-xs shrink-0">
                              {mod.week}
                            </span>
                            <span className="font-bold text-sm sm:text-base text-slate-900">
                              {mod.title}
                            </span>
                          </div>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-emerald-800 shrink-0 ml-2" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 ml-2" />
                          )}
                        </button>

                        {isOpen && (
                          <div className="p-5 pt-2 bg-white border-t border-slate-100 space-y-2 animate-fade-in">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                              Module Topics:
                            </h4>
                            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                              {mod.topics?.map((topic, tIdx) => (
                                <li key={tIdx} className="flex items-start gap-2">
                                  <span className="text-emerald-700 font-bold">•</span>
                                  <span>{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 4. Teacher & Faculty Info */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 font-serif flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-gold-600" />
                  <span>Instructor & Faculty</span>
                </h2>
                <IslamicDivider showArabic={false} />

                <div className="p-6 rounded-2xl bg-sand-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-900 text-gold-300 flex items-center justify-center font-bold text-xl shrink-0 shadow-md">
                    <GraduationCap className="w-8 h-8 text-gold-400" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-slate-900">
                      {course.teacher?.name}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-800">
                      {course.teacher?.title}
                    </p>
                    <p className="text-xs text-slate-500 italic">
                      {course.teacher?.note}
                    </p>
                    <span className="inline-block mt-1 text-[11px] text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-medium">
                      Faculty Details Updating
                    </span>
                  </div>
                </div>
              </div>

              {/* 5. Frequently Asked Questions */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 font-serif flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-gold-600" />
                  <span>Frequently Asked Questions</span>
                </h2>
                <IslamicDivider showArabic={false} />

                <div className="space-y-3 pt-2">
                  {course.faqs?.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="rounded-2xl border border-slate-200 overflow-hidden bg-sand-50/40"
                      >
                        <button
                          onClick={() => toggleFaq(idx)}
                          className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-slate-100/50 transition-colors"
                        >
                          <span className="font-bold text-xs sm:text-sm text-slate-900">
                            {faq.q}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4 text-emerald-800 shrink-0 ml-2" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed animate-fade-in">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 6. Bottom Course Enrollment CTA */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-900 to-emerald-950 text-white border border-gold-500/30 text-center space-y-4 shadow-xl">
                <h3 className="text-2xl font-bold font-serif text-white">
                  Ready to Enroll in {course.title}?
                </h3>
                <p className="text-xs sm:text-sm text-emerald-200 max-w-lg mx-auto">
                  Contact our admissions team directly on WhatsApp to receive the complete schedule, study materials pack, and orientation details.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-amber-500 text-slate-950 font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire via WhatsApp: {foundationInfo.whatsapp}</span>
                  </a>
                  <button
                    onClick={() => onOpenEnrollment(course.id)}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-850 hover:bg-emerald-800 text-white font-semibold text-xs sm:text-sm border border-emerald-700"
                  >
                    Open Registration Form
                  </button>
                </div>
              </div>

            </div>

            {/* Sidebar (Col 9-12) */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Sticky Contact Widget */}
              <div className="sticky top-24 space-y-6">
                
                <div className="bg-sand-50 rounded-3xl p-6 border border-slate-200 shadow-soft-card space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-900">
                    <Shield className="w-4 h-4 text-gold-600" />
                    <span>Why Learn at Al Kahf</span>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>Authentic Quran & Sunnah methodology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>Dedicated, private cohorts for sisters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>Recorded video access for missed lectures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>Direct scholarly Q&A interaction</span>
                    </li>
                  </ul>

                  <div className="pt-2 border-t border-slate-200">
                    <a
                      href={foundationInfo.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-center text-xs flex items-center justify-center gap-2 shadow"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Quick Inquiry</span>
                    </a>
                  </div>
                </div>

                {/* Related Courses */}
                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-soft-card space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Other Recommended Courses
                  </h4>

                  <div className="space-y-3">
                    {otherCourses.map((other) => (
                      <Link
                        key={other.id}
                        to={`/courses/${other.slug}`}
                        className="block p-3 rounded-xl bg-sand-50 hover:bg-emerald-50/60 border border-slate-200 hover:border-emerald-700 transition-all group"
                      >
                        <span className="text-[10px] font-bold text-gold-700 uppercase block">
                          {other.category}
                        </span>
                        <h5 className="text-xs font-bold text-slate-900 group-hover:text-emerald-900 transition-colors">
                          {other.title}
                        </h5>
                      </Link>
                    ))}
                  </div>

                  <Link
                    to="/courses"
                    className="block text-center text-xs font-bold text-emerald-900 hover:underline pt-1"
                  >
                    View All 7 Courses →
                  </Link>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
