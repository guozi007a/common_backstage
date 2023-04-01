import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translation_en from './en.json';
import translation_cn from './cn.json';

const resources = {
    en: {
        translation: translation_en,
    },
    cn: {
        translation: translation_cn,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'cn',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
