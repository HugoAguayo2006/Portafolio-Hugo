import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <section className="not-found-page" aria-labelledby="not-found-title">
      <div className="not-found-card">
        <p className="not-found-label">{t("ERROR · PAGE NOT FOUND")}</p>
        <p className="not-found-code" aria-hidden="true">
          404
        </p>
        <h1 id="not-found-title">{t("This URL is not valid")}</h1>
        <p className="not-found-description">
          {" "}
          {t(
            "The page you are looking for does not exist or has moved. You can return home or keep exploring my projects.",
          )}{" "}
        </p>
        <div className="not-found-actions">
          <Link to="/" className="not-found-button not-found-button-primary">
            {" "}
            {t("Back to Home")} <span aria-hidden="true">→</span>
          </Link>
          <Link
            to="/projects"
            className="not-found-button not-found-button-secondary"
          >
            {" "}
            {t("View Projects")}{" "}
          </Link>
        </div>
      </div>
    </section>
  );
}
