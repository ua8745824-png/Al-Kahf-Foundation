import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en/translation.json';
import urTranslation from './locales/ur/translation.json';
import arTranslation from './locales/ar/translation.json';

const STORAGE_KEY = 'alKahfLanguage';
const SUPPORTED_LANGUAGES = ['en', 'ur', 'ar'];

const getSavedLanguage = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED_LANGUAGES.includes(saved)) {
      return saved;
    }
  } catch (e) {
    console.warn('Unable to access localStorage for language preference:', e);
  }

  // Detect browser language
  if (typeof navigator !== 'undefined' && navigator.language) {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('ur')) return 'ur';
    if (browserLang.startsWith('ar')) return 'ar';
    if (browserLang.startsWith('en')) return 'en';
  }

  return 'en';
};

const initialLanguage = getSavedLanguage();

// Apply HTML direction and lang attribute immediately
const applyDocumentDirection = (lng) => {
  if (typeof document !== 'undefined') {
    const isRtl = lng === 'ur' || lng === 'ar';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
    
    // Add RTL / LTR class for CSS scoping if needed
    if (isRtl) {
      document.documentElement.classList.add('is-rtl');
      document.documentElement.classList.remove('is-ltr');
    } else {
      document.documentElement.classList.add('is-ltr');
      document.documentElement.classList.remove('is-rtl');
    }
  }
};

applyDocumentDirection(initialLanguage);

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      ur: { translation: urTranslation },
      ar: { translation: arTranslation }
    },
    lng: initialLanguage,
    fallbackLng: 'en',
    supportedLngs: SUPPORTED_LANGUAGES,
    interpolation: {
      escapeValue: false // React already escapes values
    },
    react: {
      useSuspense: false
    }
  });

i18n.on('languageChanged', (lng) => {
  try {
    localStorage.setItem(STORAGE_KEY, lng);
  } catch (e) {
    console.warn('Failed to save language preference:', e);
  }
  applyDocumentDirection(lng);
});

export default i18n;
