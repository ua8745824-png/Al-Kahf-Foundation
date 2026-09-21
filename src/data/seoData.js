export const SITE_URL = "https://alkahffoundation.org";
export const SITE_NAME = "Al Kahf Foundation";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/al-kahf-foundation-islamic-education.jpg`;

export const staticSeoData = {
  home: {
    title: "Al Kahf Foundation | Islamic Education & Online Courses",
    description: "Al Kahf Foundation provides structured Islamic education and authentic online courses for men and women, covering Quran, Seerah, Islamic history, and Salah.",
    canonical: `${SITE_URL}/`,
    keywords: "Islamic courses, Islamic education, online Islamic courses, Quran and Islamic education, Islamic learning for men and women, Islamic educational foundation",
    ogImage: DEFAULT_OG_IMAGE,
    type: "website"
  },
  about: {
    title: "About Al Kahf Foundation | Islamic Educational Foundation",
    description: "Learn about Al Kahf Foundation's mission to spread authentic Islamic knowledge, classical scholarship, and structured online learning for men and women worldwide.",
    canonical: `${SITE_URL}/about`,
    keywords: "About Al Kahf Foundation, Islamic educational foundation, authentic Islamic knowledge, Islamic academy, Quran and Sunnah education",
    ogImage: `${SITE_URL}/images/about-mosque.jpg`,
    type: "website"
  },
  courses: {
    title: "Islamic Courses Online | Al Kahf Foundation",
    description: "Explore authentic online Islamic courses designed for men and women. Study Islamic history, Seerah, Sirat-ul-Mustaqeem, Salah, Ramadan, Hajj and Umrah.",
    canonical: `${SITE_URL}/courses`,
    keywords: "Islamic courses online, online Islamic education, learn Islam online, Islamic courses for men, Islamic courses for women",
    ogImage: `${SITE_URL}/images/al-kahf-foundation-islamic-education.jpg`,
    type: "website"
  },
  programs: {
    title: "Special Islamic Programs & Workshops | Al Kahf Foundation",
    description: "Discover specialized Islamic workshops and seasonal preparation programs including Ramadan, Hajj, Umrah, and Namaz learning for brothers and sisters.",
    canonical: `${SITE_URL}/programs`,
    keywords: "Islamic programs, special Islamic workshops, Ramadan program, Hajj preparation workshop, Umrah guide program",
    ogImage: `${SITE_URL}/images/ramadan-course.jpg`,
    type: "website"
  },
  teachers: {
    title: "Our Teachers & Scholars | Al Kahf Foundation Faculty",
    description: "Meet the qualified scholars and Islamic educators dedicated to transmitting authentic Quranic and Prophetic knowledge at Al Kahf Foundation.",
    canonical: `${SITE_URL}/teachers`,
    keywords: "Islamic teachers, Islamic scholars, qualified Islamic faculty, Quran tutors, Seerah instructors",
    ogImage: `${SITE_URL}/images/about-mosque.jpg`,
    type: "website"
  },
  whyUs: {
    title: "Why Choose Al Kahf Foundation | Authentic Islamic Education",
    description: "Discover why students trust Al Kahf Foundation: authentic knowledge, structured curricula, experienced teachers, and separate learning cohorts for men and women.",
    canonical: `${SITE_URL}/why-us`,
    keywords: "Why Al Kahf Foundation, authentic Islamic learning, trusted Islamic foundation, structured Islamic courses",
    ogImage: `${SITE_URL}/images/al-kahf-foundation-islamic-education.jpg`,
    type: "website"
  },
  contact: {
    title: "Contact Al Kahf Foundation | Islamic Education & Admissions",
    description: "Get in touch with Al Kahf Foundation admissions on WhatsApp (+92 301 4226909) or email for course inquiries, batch schedules, and student support.",
    canonical: `${SITE_URL}/contact`,
    keywords: "Contact Al Kahf Foundation, Islamic course admissions, WhatsApp Islamic academy, Islamic education inquiry",
    ogImage: `${SITE_URL}/images/al-kahf-foundation-islamic-education.jpg`,
    type: "website"
  },
  notFound: {
    title: "Page Not Found (404) | Al Kahf Foundation",
    description: "The page you are looking for does not exist or has been moved. Explore our authentic Islamic courses and educational programs.",
    canonical: `${SITE_URL}/404`,
    keywords: "404, page not found, Al Kahf Foundation",
    ogImage: DEFAULT_OG_IMAGE,
    type: "website",
    noindex: true
  }
};

/**
 * Organization & EducationalOrganization JSON-LD Schema
 */
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Al Kahf Foundation",
  "alternateName": "مؤسسة الكهف",
  "url": SITE_URL,
  "logo": `${SITE_URL}/favicon.svg`,
  "image": DEFAULT_OG_IMAGE,
  "description": "Al Kahf Foundation provides structured Islamic education and authentic online courses for men and women, covering Quran, Seerah, Islamic history, and Salah.",
  "email": "k.onlinequranacademy@gmail.com",
  "telephone": "+923014226909",
  "sameAs": [
    "https://wa.me/923014226909"
  ]
});

/**
 * WebSite JSON-LD Schema
 */
export const getWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Al Kahf Foundation",
  "alternateName": "مؤسسة الكهف التعليمية",
  "url": SITE_URL,
  "description": "Structured Islamic education and courses for men and women."
});

/**
 * BreadcrumbList JSON-LD Schema Generator
 */
export const getBreadcrumbsSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url ? (item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`) : undefined
  }))
});

/**
 * Dynamic Course JSON-LD Schema Generator
 */
export const getCourseSchema = (course) => {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.shortDescription,
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Al Kahf Foundation",
      "url": SITE_URL
    },
    "url": `${SITE_URL}/courses/${course.slug}`,
    "educationalLevel": "Beginner to Intermediate",
    "inLanguage": "ur, en",
    "courseMode": "online",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "courseWorkload": course.duration
    }
  };
};
