import i18n from 'i18next';
import * as welcomeEN from '../locales/en/translations.json';
import * as welcomePT from '../locales/pt/translations.json';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: welcomeEN,
    },
    pt: {
        translation: welcomePT,
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
