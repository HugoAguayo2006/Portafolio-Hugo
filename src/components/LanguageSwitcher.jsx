import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  return (
    <div
      className="language-switcher"
      role="group"
      aria-label={t("Change language")}
    >
      {["en", "es"].map((language) => (
        <button
          key={language}
          type="button"
          lang={language}
          aria-label={language === "en" ? "English" : "Español"}
          aria-pressed={i18n.resolvedLanguage === language}
          onClick={() => i18n.changeLanguage(language)}
        >
          {language.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
