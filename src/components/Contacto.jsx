import { useTranslation } from "react-i18next";
import "./Contacto.css";

import React, { useState } from "react";

export default function ContactMe() {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = (values) => {
    const nextErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values.name.trim()) {
      nextErrors.name = "Your name is required.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Your email is required.";
    } else if (!emailRegex.test(values.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!values.message.trim()) {
      nextErrors.message = "Tell me a little about your project.";
    }

    return nextErrors;
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => {
      if (!prev[name]) {
        return prev;
      }

      const updatedErrors = { ...prev };
      delete updatedErrors[name];
      return updatedErrors;
    });
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
    const trimmedForm = {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    };
    const validationErrors = validateForm(trimmedForm);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus(null);
      return;
    }

    setErrors({});

    setStatus("loading");

    try {
      const data = await fetch("/api/server", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: trimmedForm.name,
          email: trimmedForm.email,
          subject: t("Portfolio contact form"),
          message: trimmedForm.message,
        }),
      });

      const res = await data.json();
      console.log(res);

      if (!data.ok) {
        throw new Error(res.message || "Unable to send message");
      }

      setStatus("success");

      // limpiar formulario
      setForm({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setStatus(null);
      }, 4000);
    } catch (error) {
      console.error(error);
      setStatus("error");

      setTimeout(() => {
        setStatus(null);
      }, 4000);
    }
  };

  return (
    <div className="contactMe-page-1">
      <section className="contactMe-container">
        <div className="contactMe-top">
          <h1 className="contactMe-title-text">
            {" "}
            {t("Start Your Project With")}{" "}
            <span className="tercero-text">{t("withMe")}</span>
          </h1>
          <p className="letras-pequenas-abajo">
            {" "}
            {t("// CONTACT ME FOR COLLABORATIONS & OPPORTUNITIES")}{" "}
          </p>
        </div>

        <div className="contactMe-bottom">
          {/* COLUMNA IZQUIERDA */}
          <div className="contactMe-form-1">
            <form onSubmit={handleSendEmail} noValidate>
              <div className="form-row">
                <div className="input-group">
                  <label htmlFor="home-contact-name">{t("FULL NAME")}</label>
                  <input
                    id="home-contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder={t("Your Name")}
                    value={form.name}
                    onChange={handleOnChange}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={
                      errors.name ? "home-name-error" : undefined
                    }
                    className={errors.name ? "input-error" : ""}
                  />
                  {errors.name && (
                    <span
                      id="home-name-error"
                      className="field-error"
                      role="alert"
                    >
                      {t(errors.name)}
                    </span>
                  )}
                </div>

                <div className="input-group">
                  <label htmlFor="home-contact-email">
                    {t("EMAIL ADDRESS")}
                  </label>
                  <input
                    id="home-contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder={t("youremail@example.com")}
                    value={form.email}
                    onChange={handleOnChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={
                      errors.email ? "home-email-error" : undefined
                    }
                    className={errors.email ? "input-error" : ""}
                  />
                  {errors.email && (
                    <span
                      id="home-email-error"
                      className="field-error"
                      role="alert"
                    >
                      {t(errors.email)}
                    </span>
                  )}
                </div>
              </div>

              <div className="input-group input-group-full">
                <label htmlFor="home-contact-message">
                  {t("PROJECT BRIEF")}
                </label>
                <textarea
                  id="home-contact-message"
                  name="message"
                  rows="6"
                  placeholder={t("Tell me about your project...")}
                  value={form.message}
                  onChange={handleOnChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "home-message-error" : undefined
                  }
                  className={errors.message ? "input-error" : ""}
                />
                {errors.message && (
                  <span
                    id="home-message-error"
                    className="field-error"
                    role="alert"
                  >
                    {t(errors.message)}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="send-btn"
                disabled={status === "loading"}
              >
                {status === "loading"
                  ? t("Sending...")
                  : t("Send me your Message")}
              </button>

              {status === "loading" && (
                <p
                  className="form-status loading"
                  role="status"
                  aria-live="polite"
                >
                  {t("Sending message...")}
                </p>
              )}

              {status === "success" && (
                <p
                  className="form-status success"
                  role="status"
                  aria-live="polite"
                >
                  {t("✅ Message sent successfully!")}
                </p>
              )}

              {status === "error" && (
                <p className="form-status error" role="alert">
                  {t("❌ Something went wrong. Try again.")}
                </p>
              )}
            </form>
          </div>

          {/* COLUMNA DERECHA */}
          <div className="contact-right">
            <h2 className="connect-title">{t("Connect with me")}</h2>

            <div className="contact-cards-grid">
              <a
                href="https://github.com/HugoAguayo2006"
                className="contact-card-1"
                target="_blank"
                rel="noreferrer"
              >
                <div className="contact-card-icon">
                  <img
                    src="/icons/github.webp"
                    alt={t("github")}
                    className="github-icon-contactme"
                  />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-label">
                    {t("SOURCE CONTROL")}
                  </span>
                  <h3>{t("GitHub")}</h3>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/josehugoaguayomendoza/"
                className="contact-card-1"
                target="_blank"
                rel="noreferrer"
              >
                <div className="contact-card-icon">
                  <img
                    src="/icons/linkedin.webp"
                    alt={t("linkedln")}
                    className="linkedin-icon-contactme"
                  />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-label">
                    {t("PROFESSIONAL")}
                  </span>
                  <h3>{t("LinkedIn")}</h3>
                </div>
              </a>

              <a
                href={`https://wa.me/523310392675?text=${encodeURIComponent(t("Hello Hugo, I saw your portfolio and I’m interested in speaking with you."))}`}
                className="contact-card-1"
                target="_blank"
                rel="noreferrer"
              >
                <div className="contact-card-icon">
                  <img
                    src="/icons/WhatsApp.webp"
                    alt={t("whatsapp")}
                    className="whatsapp-icon-contactme"
                  />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-label">
                    {t("Instant messaging")}
                  </span>
                  <h3>{t("WhatsApp")}</h3>
                </div>
              </a>

              <a
                href="mailto:hugoaguayo50@gmail.com"
                className="contact-card-1"
              >
                <div className="contact-card-icon">
                  <img
                    src="/icons/Gmail.webp"
                    alt={t("Gmail")}
                    className="gmail-icon-contactme"
                  />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-label">{t("DIRECT LINE")}</span>
                  <h3>{t("Email")}</h3>
                </div>
              </a>
            </div>

            <div className="location-card-1">
              <h3 className="location-title">{t("Current Location")}</h3>
              <p className="location-coords">{t("GUADALAJARA, JAL, MX")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
