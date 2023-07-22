import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";




i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: true,
    interpolation: {
        escapeValue: false
    },
    fallbackLang: "uz",
    languages: ["en", "uz", "ru"],
    lng: 'uz'
  });