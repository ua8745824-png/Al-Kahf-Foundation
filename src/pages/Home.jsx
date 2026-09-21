import React from 'react';
import SEO from '../components/SEO';
import { staticSeoData, getOrganizationSchema, getWebSiteSchema } from '../data/seoData';
import Hero from '../components/Hero';
import TrustSection from '../components/TrustSection';
import About from '../components/About';
import Courses from '../components/Courses';
import FeaturedCourse from '../components/FeaturedCourse';
import Programs from '../components/Programs';
import MenWomenSection from '../components/MenWomenSection';
import WhyChooseUs from '../components/WhyChooseUs';
import HowItWorks from '../components/HowItWorks';
import Teachers from '../components/Teachers';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Contact from '../components/Contact';

export default function Home({ onOpenEnrollment }) {
  const schemas = [
    getOrganizationSchema(),
    getWebSiteSchema()
  ];

  return (
    <div>
      {/* Home Dynamic SEO Metadata & JSON-LD Schemas */}
      <SEO
        title={staticSeoData.home.title}
        description={staticSeoData.home.description}
        canonical={staticSeoData.home.canonical}
        keywords={staticSeoData.home.keywords}
        ogImage={staticSeoData.home.ogImage}
        schemas={schemas}
      />

      <Hero onOpenEnrollment={onOpenEnrollment} />
      <TrustSection />
      <About />
      <FeaturedCourse onOpenEnrollment={onOpenEnrollment} />
      <Courses onQuickEnroll={onOpenEnrollment} />
      <Programs />
      <MenWomenSection onOpenEnrollment={onOpenEnrollment} />
      <WhyChooseUs />
      <HowItWorks onOpenEnrollment={onOpenEnrollment} />
      <Teachers />
      <Testimonials />
      <CTA onOpenEnrollment={onOpenEnrollment} />
      <Contact />
    </div>
  );
}
