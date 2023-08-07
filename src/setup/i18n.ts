import i18n from 'i18next';
import * as welcomeEN from '../locales/en/welcome.json';
import * as welcomePT from '../locales/pt/welcome.json';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: { welcome: welcomeEN },
    },
    pt: {
        translation: { welcome: welcomePT },
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
