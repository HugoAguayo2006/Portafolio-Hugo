import { useTranslation } from "react-i18next";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import "./Navbar.css";

const Navbar = ({ children }) => {
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasPassedLanguageRow, setHasPassedLanguageRow] = useState(false);
  const headerRef = useRef(null);
  const languageRowRef = useRef(null);

  const closeMenu = () => setIsMenuOpen(false);

  useLayoutEffect(() => {
    const header = headerRef.current;
    const updateHeight = () => {
      document.documentElement.style.setProperty(
        "--navbar-height",
        `${header.getBoundingClientRect().height}px`,
      );
    };
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(header);
    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty("--navbar-height");
    };
  }, []);

  useEffect(() => {
    const updateLanguageRowPosition = () => {
      const height = languageRowRef.current.offsetHeight;
      setHasPassedLanguageRow(height > 0 && window.scrollY >= height - 8);
    };
    updateLanguageRowPosition();
    window.addEventListener("scroll", updateLanguageRowPosition, { passive: true });
    window.addEventListener("resize", updateLanguageRowPosition);
    return () => {
      window.removeEventListener("scroll", updateLanguageRowPosition);
      window.removeEventListener("resize", updateLanguageRowPosition);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    const handleHistoryNavigation = () => setIsMenuOpen(false);

    window.addEventListener("keydown", handleEscape);
    window.addEventListener("popstate", handleHistoryNavigation);
    return () => {
      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("popstate", handleHistoryNavigation);
    };
  }, []);

  return (
    <>
      <header ref={headerRef} className={`container-navbar ${isMenuOpen ? "menu-open" : ""} ${hasPassedLanguageRow ? "navbar-language-passed" : ""}`}>
        <button
          type="button"
          className="menu-toggle"
          aria-label={
            isMenuOpen ? t("Close navigation menu") : t("Open navigation menu")
          }
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="nav-left">
          <NavLink to="/" className="logo" onClick={closeMenu}>
            {t("HUGO'S_PORTFOLIO")}
          </NavLink>
        </div>

        <nav
          id="primary-navigation"
          aria-label={t("Main navigation")}
          className={`nav-center ${isMenuOpen ? "nav-center-open" : ""}`}
        >
          <NavLink to="/" className="link" onClick={closeMenu}>
            {t("HOME")}
          </NavLink>
          <NavLink to="/about-me" className="link" onClick={closeMenu}>
            {t("ABOUT ME")}
          </NavLink>
          <NavLink to="/experience" className="link" onClick={closeMenu}>
            {t("EXPERIENCE")}
          </NavLink>
          <NavLink to="/projects" className="link" onClick={closeMenu}>
            {t("PROJECTS")}
          </NavLink>
          <NavLink to="/contact-me" className="link" onClick={closeMenu}>
            {t("CONTACT ME")}
          </NavLink>
        </nav>

        <div className="nav-actions">
          <LanguageSwitcher />
          <div className="nav-right">
          <a
            href="/pdf/CV_Jose_Hugo_Aguayo_Mendoza.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-CV"
          >
            {" "}
            {t("CV")}{" "}
          </a>
          </div>
        </div>
      </header>
      <div className="navbar-spacer" aria-hidden="true" />
      <div ref={languageRowRef} className="navbar-language-row">
        <LanguageSwitcher />
      </div>
      {children}
    </>
  );
};

export default Navbar;
