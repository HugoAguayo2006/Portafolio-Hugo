import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import "./AboutMe.css";
import TechCarousel from "../components/Carrusel";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="aboutme-page">
        <section className="aboutme-container">
          <div className="aboutme-top">
            <p className="letras-pequenas-arriba-centrado">
              {" "}
              {t("/* Jose Hugo Aguayo Mendoza */")}{" "}
            </p>
            <h1 className="aboutme-title-text">
              {" "}
              {t("This is")} <span className="tercero-text">{t("Me")}</span>
            </h1>
          </div>

          <div className="aboutme-bottom">
            {/* COLUMNA IZQUIERDA */}
            <div className="aboutme-izquieda">
              <img
                src="/images/aboutme/yo-aboutme.webp"
                alt={t("Portrait of Jose Hugo Aguayo Mendoza")}
              />
            </div>

            {/* COLUMNA DERECHA */}
            <div className="aboutme-derecha">
              <p>
                {" "}
                {t(
                  "Hello, I’m Jose Hugo Aguayo Mendoza, but you can call me Hugo. I am a Computer Science and Technology Engineering student at Tecnológico de Monterrey, graduating in June 2028, with a current GPA of 97.61/100.",
                )}{" "}
              </p>

              <p>
                {" "}
                {t(
                  "My skill set spans Python, C++, JavaScript, TypeScript, React, React Native, FastAPI, SQL databases, AI integrations, testing, and modern cloud deployment.",
                )}{" "}
              </p>

              <p>
                {" "}
                {t(
                  "I am the founder and web developer behind NIVOSTECH, where I build and maintain responsive, multilingual websites for schools and organizations while managing deployment, SEO, domains, and client requirements.",
                )}{" "}
              </p>

              <p>
                {" "}
                {t(
                  "I also enjoy hackathons, mentoring younger engineering students, and collaborating in team environments to solve real-world problems through software and hardware.",
                )}{" "}
              </p>

              <p>
                {" "}
                {t(
                  "Outside of academics and professional work, I am passionate about soccer—my favorite team is Chivas. I also enjoy playing video games, especially Fortnite and Minecraft, as well as listening to music.",
                )}{" "}
              </p>

              <p>
                {" "}
                {t(
                  "I speak Spanish natively and English at a B2 level, and I am currently seeking opportunities to continue growing in software engineering and technology.",
                )}{" "}
              </p>
            </div>
          </div>
        </section>

        <div className="line"></div>

        <section className="aboutme-fondo-cita">
          <span className="quote-icon">“</span>

          <h1 className="quote-text">
            {" "}
            {t("DO OR DO NOT. THERE IS NO TRY.")}{" "}
          </h1>

          <span className="quote-author">{t("— MASTER YODA")}</span>
        </section>

        <div className="line"></div>
        <TechCarousel />
        <div className="line"></div>

        <div className="certificados-top">
          <h1 className="aboutme-title-text">
            {" "}
            {t("Certifications")} <span className="tercero-text">{t("&")}</span>{" "}
            {t("Diplomas")}{" "}
          </h1>
        </div>

        <div className="certificates-grid">
          <div className="certificate-card">
            <img
              src="/images/aboutme/diplomas/expo.webp"
              alt={t(
                "1st place at Tec de Monterrey’s Engineering Expo (physical prototype category)",
              )}
            />
            <div className="texto">
              <p className="certificado-titulo">
                {t(
                  "1st place at Tec de Monterrey’s Engineering Expo (physical prototype category)",
                )}
              </p>
              <p className="certificado-institucion">
                {t(
                  "Instituto Tecnológico y de Estudios Superiores de Monterrey",
                )}
              </p>
              <p className="certificado-ano">2025</p>
              <div className="btn-certificados">
                <a
                  href="/pdf/Expo-ingenierias-1-lugar-prototipo-fisico.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  {t("See diploma")}{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="certificate-card">
            <img
              src="/images/aboutme/diplomas/hackmty.webp"
              alt={t("HackMTY 2025 participation certificate")}
            />
            <div className="texto">
              <p className="certificado-titulo">
                {t("HackMTY 2025 participation certificate")}{" "}
              </p>
              <p className="certificado-institucion">
                {t(
                  "Instituto Tecnológico y de Estudios Superiores de Monterrey",
                )}
              </p>
              <p className="certificado-ano">2025</p>
              <div className="btn-certificados">
                <a
                  href="/pdf/CertificadoHackMTY2025HugoAguayo.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  {t("See certificate")}{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="certificate-card">
            <img
              src="/images/aboutme/diplomas/mentoria.webp"
              alt={t("Peer Mentoring Program")}
            />
            <div className="texto">
              <p className="certificado-titulo">
                {t("Peer Mentoring Program")}
              </p>
              <p className="certificado-institucion">
                {t(
                  "Instituto Tecnológico y de Estudios Superiores de Monterrey",
                )}
              </p>
              <p className="certificado-ano">2025</p>
              <div className="btn-certificados">
                <a
                  href="/pdf/mentoria.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  {t("See certificate")}{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="certificate-card">
            <img
              src="/images/aboutme/diplomas/renison.webp"
              alt={t(
                "Summer English Immersion with Robotics Program at Renison University College",
              )}
            />
            <div className="texto">
              <p className="certificado-titulo">
                {t(
                  "Certificate of participation in the Summer English Immersion with Robotics Program",
                )}
              </p>
              <p className="certificado-institucion">
                {t("Renison University College, University of Waterloo")}
              </p>
              <p className="certificado-ano">2023</p>
              <div className="btn-certificados">
                <a
                  href="/pdf/Renison-University-College.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  {t("See certificate")}{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="certificate-card">
            <img
              src="/images/aboutme/diplomas/diploma-prepa.webp"
              alt={t("High School diploma from PrepaTec Santa Anita")}
            />
            <div className="texto">
              <p className="certificado-titulo">{t("High school diploma")}</p>
              <p className="certificado-institucion">
                {t("PrepaTec Santa Anita")}
              </p>
              <p className="certificado-ano">2024</p>
              <div className="btn-certificados">
                <a
                  href="/pdf/Diploma-Prepa.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  {t("See diploma")}{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="certificate-card">
            <img
              src="/images/aboutme/diplomas/copilot-santander.webp"
              alt={t(
                "Copilot: Master AI in Microsoft 365 completion certificate from Santander Open Academy",
              )}
            />
            <div className="texto">
              <p className="certificado-titulo">
                {t("Copilot: Master AI in Microsoft 365")}
              </p>
              <p className="certificado-institucion">
                {t("Santander Open Academy")}
              </p>
              <p className="certificado-ano">2026</p>
              <div className="btn-certificados">
                <a
                  href="/pdf/copilot-santander.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  {t("See certificate")}{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="certificate-card">
            <img
              src="/images/aboutme/diplomas/santander-f1.webp"
              alt={t("Lead at Full Speed: Lessons from Formula 1")}
            />
            <div className="texto">
              <p className="certificado-titulo">
                {t("Lead at Full Speed: Lessons from Formula 1")}
              </p>
              <p className="certificado-institucion">
                {t("Santander Open Academy")}
              </p>
              <p className="certificado-ano">2026</p>
              <div className="btn-certificados">
                <a
                  href="/pdf/Lidera-a-Toda-Velocidad-Lecciones-de-la-Formula-1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  {t("See certificate")}{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="certificate-card">
            <img
              src="/images/aboutme/diplomas/diploma-peer-generacion-25-26.webp"
              alt={t("Peer Mentoring Diploma — Class of 2025–2026")}
            />
            <div className="texto">
              <p className="certificado-titulo">
                {t("Peer Mentoring Diploma — Class of 2025–2026")}
              </p>
              <p className="certificado-institucion">
                {t(
                  "Instituto Tecnológico y de Estudios Superiores de Monterrey",
                )}
              </p>
              <p className="certificado-ano">2026</p>
              <div className="btn-certificados">
                <a
                  href="/pdf/diploma-peer-generacion-25-26.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  {t("See diploma")}{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="certificate-card">
            <img
              src="/images/aboutme/diplomas/FIFA World Cup 2026 Volunteer Certificate_EN.jpeg"
              alt={t("FIFA World Cup 2026 volunteer certificate in English")}
            />
            <div className="texto">
              <p className="certificado-titulo">
                {t("FIFA World Cup 2026 Volunteer Certificate — English")}
              </p>
              <p className="certificado-institucion">
                {t("FIFA World Cup 2026 Volunteer Program")}
              </p>
              <p className="certificado-ano">2026</p>
              <div className="btn-certificados">
                <a
                  href="/pdf/FIFA World Cup 2026 Volunteer Certificate_EN.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  {t("See certificate")}{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="certificate-card">
            <img
              src="/images/aboutme/diplomas/FIFA World Cup 2026 Volunteer Certificate_SPA.jpeg"
              alt={t("FIFA World Cup 2026 volunteer certificate in Spanish")}
            />
            <div className="texto">
              <p className="certificado-titulo">
                {t("FIFA World Cup 2026 Volunteer Certificate — Spanish")}
              </p>
              <p className="certificado-institucion">
                {t("FIFA World Cup 2026 Volunteer Program")}
              </p>
              <p className="certificado-ano">2026</p>
              <div className="btn-certificados">
                <a
                  href="/pdf/FIFA World Cup 2026 Volunteer Certificate_SPA.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  {t("See certificate")}{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="certificate-card">
            <img
              src="/images/aboutme/diplomas/FIFA World Cup 2026 Volunteer Letter of Recommendation (incl. hours).jpeg"
              alt={t("FIFA World Cup 2026 volunteer letter of recommendation")}
            />
            <div className="texto">
              <p className="certificado-titulo">
                {t("FIFA World Cup 2026 Volunteer Letter of Recommendation")}
              </p>
              <p className="certificado-institucion">
                {t("FIFA World Cup 2026 Volunteer Program")}
              </p>
              <p className="certificado-ano">
                {t("2026 · 32 volunteering hours")}
              </p>
              <div className="btn-certificados">
                <a
                  href="/pdf/FIFA World Cup 2026 Volunteer Letter of Recommendation (incl. hours).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  {t("See letter")}{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
