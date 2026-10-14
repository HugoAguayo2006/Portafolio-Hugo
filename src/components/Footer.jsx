import { useTranslation } from "react-i18next";
import React from "react";
import "./Footer.css";

function Footer() {
  const { t } = useTranslation();

  return (
    <div className="container-footer">
      <div className="footer-left">
        {" "}
        {t("© 2026 JOSE HUGO AGUAYO MENDOZA - PART OF")}{" "}
        <a
          href="https://www.nivostech.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-nivos"
        >
          {" "}
          {t("NIVOSTECH")}{" "}
        </a>
        <span> {t("- BUILT WITH PRECISION.")}</span>
      </div>
      <div className="footer-right"></div>
      <div className="contenedor-botones">
        <a
          href="https://www.linkedin.com/in/josehugoaguayomendoza/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedln"
        >
          <img
            src="/icons/linkedin.webp"
            alt={t("linkdln")}
            className="linkedln-icon"
          />{" "}
          {t("LinkedIn")}{" "}
        </a>
        <a
          href="https://github.com/HugoAguayo2006"
          target="_blank"
          rel="noopener noreferrer"
          className="github"
        >
          <img
            src="/icons/github.webp"
            alt={t("github")}
            className="github-icon"
          />{" "}
          {t("GitHub")}{" "}
        </a>

        <a
          href={`https://wa.me/523310392675?text=${encodeURIComponent(t("Hello Hugo, I saw your portfolio and I’m interested in speaking with you."))}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp"
        >
          <img
            src="/icons/WhatsApp.webp"
            alt={t("WhatsApp")}
            className="whatsapp-icon"
          />{" "}
          {t("WhatsApp")}{" "}
        </a>
      </div>
    </div>
  );
}

export default Footer;
