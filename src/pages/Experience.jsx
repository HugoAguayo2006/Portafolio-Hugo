import { useTranslation } from "react-i18next";
import React from "react";
import "./Experience.css";

const clientWork = [
  {
    name: "OVISS Global Website",
    period: "February 2026 — Present",
    url: "https://www.oviss.org/es",
  },
  {
    name: "Colegio Matel Chapalita",
    period: "January 2026 — Present",
    url: "https://www.matelgdl.edu.mx/",
  },
  {
    name: "Instituto Nueva Galicia Tlajomulco",
    period: "February — August 2026 · Maintenance ongoing",
    url: "https://www.ing.edu.mx/",
  },
  {
    name: "Colegio Colonial",
    period: "March 2024 — April 2026 · Maintenance ongoing",
    url: "https://www.colegiocolonial.edu.mx/",
  },
  {
    name: "Instituto Nueva Galicia",
    period: "September — November 2025 · Maintenance ongoing",
    url: "https://www.nuevagalicia.edu.mx/",
  },
];

function Experience() {
  const { t } = useTranslation();

  const skillGroups = [
    {
      title: "Programming",
      skills: [
        "Python",
        "C++",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "MATLAB",
        "R",
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "React",
        "React Native",
        "FastAPI",
        "SQLAlchemy",
        "Pydantic",
        "Tailwind CSS",
        "Plasmo",
        "Scikit-learn",
        "NetworkX",
        "OSMnx",
      ],
    },
    {
      title: "AI, APIs & Data",
      skills: [
        "Gemini API",
        "REST APIs",
        "WebSockets",
        "OpenStreetMap",
        "Leaflet",
        "SerpApi",
        "Google Maps API",
      ],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "SQL"],
    },
    {
      title: "Tools & Product",
      skills: [
        "Git / GitHub",
        "Node.js",
        "Vite",
        "Vercel",
        "Render",
        "Cloudflare",
        "Playwright",
        "Pytest",
        "Manifest V3",
        "SEO",
        "Google Search Console",
        "Figma",
      ],
    },
    {
      title: "Languages",
      skills: ["Spanish · Native", "English · B2 (PTE Academic, 2024)"],
    },
  ];

  return (
    <section className="projects-page experience-page">
      {/* ARRIBA */}
      <div className="projects-top">
        <p className="projects-kicker">{t("BUILDING MY STORY")}</p>
        <h1 className="projects-title">
          {" "}
          {t("Where I")}{" "}
          <span className="projects-title-gradient">{t("Learned")}</span>{" "}
          {t("& Where I")}{" "}
          <span className="projects-title-gradient morado">{t("Built")}</span>
        </h1>
      </div>

      {/* ABAJO */}
      <div className="experience-bottom">
        {/* EDUCACION */}
        {/* COLUMNA DERECHA */}
        <div className="experience-education-section">
          <div className="experience-education-left">
            <div className="experience-eduation">
              <p className="experience-title">{t("Education")}</p>
            </div>
          </div>

          <div className="experience-education-right">
            <div className="education-card">
              <div className="education-card-image">
                <img
                  src="/images/experience/schools/tec-gdl.webp"
                  alt={t("Tecnológico de Monterrey")}
                />
              </div>

              <div className="education-card-content">
                <p className="education-card-years">
                  {t("August 2024 — June 2028")}
                </p>
                <h3 className="education-card-title">
                  {t("B.S. in Computer Science and Technology Engineering")}
                </h3>
                <p className="education-card-school">
                  {t("Tecnológico de Monterrey (Campus Guadalajara)")}
                </p>

                <div className="education-card-info">
                  <p>
                    {t(
                      "✦ Expected graduation: June 2028 · Current GPA: 97.61/100.",
                    )}
                  </p>
                  <p>
                    {t(
                      "✦ Strong foundation in computer engineering, covering software development, networking, data science, and core engineering disciplines such as physics, chemistry, and advanced mathematics.",
                    )}
                  </p>
                  <p>
                    {t(
                      "✦ Experienced in building and applying solutions using React, Python, and C++ through academic and practical projects.",
                    )}
                  </p>
                  <p>
                    {t(
                      "✦ Worked with industry partners including Uyu Beauty, Pasitos Health Education, and Kueski Pay, contributing to real-world projects and strengthening teamwork and problem-solving skills.",
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="education-card">
              <div className="education-card-image">
                <img
                  src="/images/experience/schools/renison.webp"
                  alt={t("Renison University College, University of Waterloo")}
                />
              </div>

              <div className="education-card-content">
                <p className="education-card-years">
                  {t("May 30 — June 23, 2023")}
                </p>
                <h3 className="education-card-title">
                  {t("Summer English Immersion with Robotics Program")}
                </h3>
                <p className="education-card-school">
                  {t(
                    "Renison University College, University of Waterloo (Ontario, Canada)",
                  )}
                </p>

                <div className="education-card-info">
                  <p>
                    {t(
                      "✦ Participated in an international summer program through PrepaTec Santa Anita, combining intensive English immersion with robotics and technology-based learning.",
                    )}
                  </p>
                  <p>
                    {t(
                      "✦ Strengthened communication skills in an academic English environment while engaging in hands-on robotics projects and collaborative problem-solving activities.",
                    )}
                  </p>
                  <p>
                    {t(
                      "✦ Developed independence, adaptability, and global perspective through cultural exchange and international academic experience.",
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="education-card">
              <div className="education-card-image">
                <img
                  src="/images/experience/schools/tec-sta.webp"
                  alt={t("PrepaTec Santa Anita")}
                />
              </div>

              <div className="education-card-content">
                <p className="education-card-years">2021 — 2024</p>
                <h3 className="education-card-title">{t("High School")}</h3>
                <p className="education-card-school">
                  {t("PrepaTec Santa Anita")}
                </p>

                <div className="education-card-info">
                  <p>
                    {t(
                      "✦ Developed a strong academic foundation through a multidisciplinary educational model, integrating science, mathematics, and critical thinking.",
                    )}
                  </p>
                  <p>
                    {t(
                      "✦ Participated in project-based learning, strengthening problem-solving, collaboration, and communication skills.",
                    )}
                  </p>
                  <p>
                    {t(
                      "✦ Member of the representative soccer team, becoming champion in multiple tournaments and reinforcing discipline, teamwork, and leadership.",
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="education-card">
              <div className="education-card-image">
                <img
                  src="/images/experience/schools/galicia.webp"
                  alt={t("Instituto Nueva Galicia Tlajomulco")}
                />
              </div>

              <div className="education-card-content">
                <p className="education-card-years">2009 — 2020</p>
                <h3 className="education-card-title">
                  {t("Elementary & Middle School Education")}
                </h3>
                <p className="education-card-school">
                  {t(
                    "Instituto Nueva Galicia (Campus Tlajomulco and Campus Centro)",
                  )}
                </p>

                <div className="education-card-info">
                  <p>
                    {t(
                      "✦ Developed a strong academic and personal foundation within a faith-based educational environment, focused on values, discipline, and integral human formation.",
                    )}
                  </p>
                  <p>
                    {t(
                      "✦ Educated under a holistic model emphasizing academic excellence, personalized learning, and the development of critical thinking and social responsibility.",
                    )}
                  </p>
                  <p>
                    {t(
                      "✦ Participated in sports and extracurricular activities, reinforcing teamwork, commitment, and personal growth from an early age.",
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* EXPERIENCE */}
        {/* COLUMNA DERECHA */}
        <div className="experience-education-section seccion-experiencia">
          <div className="experience-education-left">
            <div className="experience-eduation">
              <p className="experience-title-morado">{t("Experience")}</p>
            </div>
          </div>

          <div className="experience-education-right">
            <div className="education-card-morado professional-card">
              <div className="experience-brand-media">
                <img
                  className="experience-brand-image"
                  src="/images/experience/nivos.webp"
                  alt={t("NIVOSTECH logo")}
                />
              </div>

              <div className="education-card-content">
                <p className="education-card-years morado">
                  {t("March 2024 — Present")}
                </p>
                <h3 className="education-card-title">
                  {t("Founder & Web Developer")}
                </h3>
                <p className="education-card-school">{t("NIVOSTECH")}</p>

                <div className="education-card-info">
                  <p>
                    {t(
                      "✦ Founded and operate a web development company delivering professional websites for schools and organizations.",
                    )}
                  </p>
                  <p>
                    {t(
                      "✦ Manage client requirements, development, deployment, SEO, domain configuration, and ongoing maintenance.",
                    )}
                  </p>
                  <p>
                    {t(
                      "✦ Build responsive and multilingual experiences with React, Vite, React Router, i18next, Framer Motion, EmailJS, Google Maps API, and Vercel.",
                    )}
                  </p>
                </div>

                <div className="client-work">
                  <h4>{t("Selected client work")}</h4>
                  <ul>
                    {clientWork.map((client) => (
                      <li key={client.name}>
                        <div className="client-work-details">
                          <strong>{t(client.name)}</strong>
                          <span>{t(client.period)}</span>
                        </div>
                        <a
                          href={client.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="client-work-link"
                          aria-label={t(
                            "Visit {{name}} website (opens in a new tab)",
                            { name: t(client.name) },
                          )}
                        >
                          {" "}
                          {t("Visit Website")}{" "}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="https://www.nivostech.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-proyecto"
                >
                  {" "}
                  {t("Visit NIVOSTECH")}{" "}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-education-section seccion-experiencia">
          <div className="experience-education-left">
            <p className="experience-title">{t("Leadership")}</p>
          </div>

          <div className="leadership-grid">
            <article className="leadership-card">
              <p className="education-card-years">
                {t("August 2025 — Present")}
              </p>
              <h3 className="education-card-title">{t("Peer Mentor")}</h3>
              <p className="education-card-school">
                {t("Tecnológico de Monterrey · Student Well-Being Department")}
              </p>
              <p>
                {t(
                  "Mentor younger students from Computer Science and related engineering programs through academic guidance, one-on-one support, and assistance with university integration.",
                )}
              </p>
            </article>

            <article className="leadership-card">
              <p className="education-card-years">
                {t("August 2023 — May 2024")}
              </p>
              <h3 className="education-card-title">
                {t("FIRST Robotics Competition")}
              </h3>
              <p className="education-card-school">
                {t("PrepaTec · StingBots #6702")}
              </p>
              <p>
                {t(
                  "Contributed across finance and robot assembly, strengthening collaboration, organization, and hands-on engineering skills.",
                )}
              </p>
            </article>
          </div>
        </div>

        <div className="experience-education-section seccion-experiencia skills-section">
          <div className="experience-education-left">
            <p className="experience-title-morado">{t("Technical Skills")}</p>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.title}>
                <h3>{t(group.title)}</h3>
                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span key={skill}>{t(skill)}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
