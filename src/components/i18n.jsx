import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import global_en from '../translations/en/global.json';
import global_es from '../translations/es/global.json';

i18next
  .use(LanguageDetector)
  .init({
    fallbackLng: 'es',
    interpolation: { escapeValue: false },
    resources: {
      en: { global: global_en },
      es: { global: global_es }
    }
  });

export default i18next;
