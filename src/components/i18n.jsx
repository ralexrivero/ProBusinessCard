
import i18next from 'i18next';
import global_en from '../traslations/en/global.json';
import global_es from '../traslations/es/global.json';


i18next.init({
  interpolation: {
    escapeValue: false},
    lng: "en",
    resources: {
      en: {
        global: global_en,
      },
      es: {
        global: global_es,
      },
    },
});

export default i18next;
