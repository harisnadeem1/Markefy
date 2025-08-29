import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ro from "./locales/ro.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ro: { translation: ro }
    },
    lng: "en",            // default language
    fallbackLng: "en",    // fallback if translation missing
    interpolation: {
      escapeValue: false  // react already escapes by default
    }
  });

export default i18n;
