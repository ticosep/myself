import i18n from 'i18next';
import * as enTranslations from '../locales/en/helloPage.json';
import * as ptTranslations from '../locales/pt/';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: enTranslations,
  },
  pt: {
    translation: ptTranslations,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
  debug: true,
});
