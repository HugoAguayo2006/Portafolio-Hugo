import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import es from "./locales/es.json";

const storageKey = "portfolio-language";
let initialLanguage = "en";
try {
  const saved = localStorage.getItem(storageKey);
  if (saved === "en" || saved === "es") initialLanguage = saved;
} catch {
  // Language switching also works when browser storage is unavailable.
}

function synchronizeLanguage(language) {
  document.documentElement.lang = language;
  try {
    localStorage.setItem(storageKey, language);
  } catch {
    // The selection remains available for this session.
  }
}

i18n.on("languageChanged", synchronizeLanguage);
i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, es: { translation: es } },
  lng: initialLanguage,
  fallbackLng: "en",
  supportedLngs: ["en", "es"],
  keySeparator: false,
  nsSeparator: false,
  interpolation: { escapeValue: false },
});

export default i18n;
