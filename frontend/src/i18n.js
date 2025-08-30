import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ro from "./locales/ro.json";

// get saved language or fallback to 'en'
const savedLang = localStorage.getItem("lang") || "en";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ro: { translation: ro }
    },
    lng: savedLang,       // 👈 load from localStorage
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

// whenever language changes, save it
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("lang", lng);
});

export default i18n;
