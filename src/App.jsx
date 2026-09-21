import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import HadithBanner from './components/HadithBanner';
import Footer from './components/Footer';
import EnrollmentModal from './components/EnrollmentModal';
import { IslamicStarDeco } from './components/IslamicPattern';

// Code-split pages for Core Web Vitals performance optimization
const Home = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const CoursesPage = lazy(() => import('./pages/CoursesPage'));
const CourseDetails = lazy(() => import('./pages/CourseDetails'));
const ProgramsPage = lazy(() => import('./pages/ProgramsPage'));
const TeachersPage = lazy(() => import('./pages/TeachersPage'));
const WhyUsPage = lazy(() => import('./pages/WhyUsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Elegant spiritual page loading fallback
function PageLoader() {
  const { t } = useTranslation();
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-sand-50">
      <div className="text-center space-y-3">
        <div className="w-12 h-12 mx-auto rounded-2xl bg-emerald-900 border border-gold-500/40 text-gold-300 flex items-center justify-center animate-pulse shadow-lg">
          <IslamicStarDeco className="w-6 h-6 text-gold-400" />
        </div>
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-950 font-serif">
          {t('brand.fullName')}
        </p>
      </div>
    </div>
  );
}

// ScrollToTop on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [selectedCourseSlug, setSelectedCourseSlug] = useState('');

  const handleOpenEnrollment = (courseSlug = '') => {
    setSelectedCourseSlug(typeof courseSlug === 'string' ? courseSlug : '');
    setIsEnrollmentOpen(true);
  };

  const handleCloseEnrollment = () => {
    setIsEnrollmentOpen(false);
  };

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-sand-50 text-slate-800 font-sans selection:bg-emerald-800 selection:text-gold-300">
          
          {/* Top Hadith & Contact Ticker */}
          <HadithBanner />

          {/* Sticky Responsive Navbar */}
          <Navbar onOpenEnrollment={() => handleOpenEnrollment('')} />

          {/* Main Routed Content with Suspense Code Splitting */}
          <main className="flex-1">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home onOpenEnrollment={handleOpenEnrollment} />} />
                <Route path="/about" element={<AboutPage onOpenEnrollment={handleOpenEnrollment} />} />
                <Route path="/courses" element={<CoursesPage onOpenEnrollment={handleOpenEnrollment} />} />
                
                {/* Clean SEO Course Routes & Aliases */}
                <Route path="/courses/:slug" element={<CourseDetails onOpenEnrollment={handleOpenEnrollment} />} />
                
                <Route path="/programs" element={<ProgramsPage onOpenEnrollment={handleOpenEnrollment} />} />
                <Route path="/teachers" element={<TeachersPage onOpenEnrollment={handleOpenEnrollment} />} />
                <Route path="/why-us" element={<WhyUsPage onOpenEnrollment={handleOpenEnrollment} />} />
                <Route path="/contact" element={<ContactPage />} />
                
                {/* 404 Custom Error Route */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>

          {/* Global Branded Footer */}
          <Footer />

          {/* Global Accessible Enrollment Modal */}
          <EnrollmentModal
            isOpen={isEnrollmentOpen}
            onClose={handleCloseEnrollment}
            defaultCourseSlug={selectedCourseSlug}
          />

        </div>
      </Router>
    </HelmetProvider>
  );
}
