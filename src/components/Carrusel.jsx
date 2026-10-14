import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import "./Carrusel.css";

const techs = [
  // Programming & backend
  { name: "Python", image: "/icons/logos/python.webp" },
  { name: "C++", image: "/icons/logos/cplusplus.webp" },
  { name: "FastAPI", image: "/icons/logos/fastapi.svg" },
  { name: "Node.js", image: "/icons/logos/node.webp" },
  { name: "Pydantic", image: "/icons/logos/pydantic.webp" },
  { name: "REST APIs", image: "/icons/logos/restapi-transparent.png" },
  { name: "WebSockets", image: "/icons/logos/websocket-transparent.png" },
  { name: "Stripe", image: "/icons/logos/stripe.webp" },
  { name: "EmailJS", image: "/icons/logos/email.webp" },

  // Web development & design
  { name: "React", image: "/icons/logos/react.webp" },
  { name: "TypeScript", image: "/icons/logos/typescript.svg" },
  { name: "JavaScript", image: "/icons/logos/JavaScrip.webp" },
  { name: "HTML", image: "/icons/logos/HTML.webp" },
  { name: "CSS", image: "/icons/logos/CSS.webp" },
  { name: "Tailwind CSS", image: "/icons/logos/tailwind.webp" },
  { name: "Vite", image: "/icons/logos/vitejs.svg" },
  { name: "React Router", image: "/icons/logos/reactrouter.svg" },
  { name: "Framer Motion", image: "/icons/logos/framermotion-light.svg" },
  { name: "i18next", image: "/icons/logos/i18next.webp" },
  { name: "Figma", image: "/icons/logos/Figma.webp" },
  { name: "Wix", image: "/icons/logos/wix.webp" },

  // Web visibility & SEO
  { name: "Google SEO", image: "/icons/logos/seo.webp" },
  { name: "Google Search Console", image: "/icons/logos/console.webp" },
  { name: "Google Business Profile", image: "/icons/logos/business.webp" },

  // Mobile & browser extensions
  { name: "React Native", image: "/icons/logos/native.webp" },
  { name: "Plasmo", image: "/icons/logos/plasmo-transparent.png" },
  { name: "Chrome Extensions (Manifest V3)", image: "/icons/logos/chrome.svg" },

  // Databases & persistence
  { name: "PostgreSQL", image: "/icons/logos/postgresql.svg" },
  { name: "SQL", image: "/icons/logos/SQL.webp" },
  { name: "Supabase", image: "/icons/logos/supabase.svg" },
  { name: "MySQL", image: "/icons/logos/MySQL.webp" },
  { name: "MongoDB", image: "/icons/logos/MongoDB.webp" },
  { name: "SQLAlchemy", image: "/icons/logos/sqlalchemy-light.svg" },

  // AI & data analysis
  { name: "Gemini API", image: "/icons/logos/geminiapi.webp" },
  { name: "Scikit-learn", image: "/icons/logos/scikitlearn.svg" },
  { name: "OpenCV", image: "/icons/logos/opencv.svg" },
  { name: "MATLAB", image: "/icons/logos/matlab.webp" },
  { name: "R", image: "/icons/logos/R.webp" },
  { name: "R Studio", image: "/icons/logos/R-Studio.webp" },
  { name: "SerpApi", image: "/icons/logos/serpapi.webp" },

  // Maps & route optimization
  { name: "Google Maps API", image: "/icons/logos/googlemaps-transparent.png" },
  {
    name: "OpenStreetMap",
    image: "/icons/logos/openstreetmap-transparent.png",
  },
  { name: "Leaflet", image: "/icons/logos/leaflet-transparent.png" },
  { name: "NetworkX", image: "/icons/logos/networkx.svg" },

  // Hardware
  { name: "Raspberry Pi", image: "/icons/logos/raspberrypi.svg" },

  // Productivity & automation
  { name: "Google Workspace", image: "/icons/logos/workspace.webp" },
  {
    name: "Google Workspace For Education",
    image: "/icons/logos/education-transparent.png",
  },
  { name: "VBA", image: "/icons/logos/vba-transparent.png" },
  { name: "ActiveX", image: "/icons/logos/activex-transparent.png" },

  // Development, deployment & testing
  { name: "Render", image: "/icons/logos/render-transparent.png" },
  { name: "Playwright", image: "/icons/logos/playwright.svg" },
  { name: "Pytest", image: "/icons/logos/pytest.svg" },
  { name: "Git", image: "/icons/logos/git.webp" },
  { name: "GitHub", image: "/icons/github.webp" },
  { name: "Vercel", image: "/icons/logos/vercel.webp" },
  { name: "Cloudflare", image: "/icons/logos/cloudflare.webp" },
];

export default function TechCarousel() {
  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? techs.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === techs.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (
      isPaused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return undefined;
    }

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === techs.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const getVisibleTechs = () => {
    const visible = [];
    const total = techs.length;

    for (let offset = -4; offset <= 4; offset++) {
      const index = (activeIndex + offset + total) % total;
      visible.push({
        ...techs[index],
        realIndex: index,
      });
    }

    return visible;
  };

  const visibleTechs = getVisibleTechs();

  return (
    <section className="tech-section" aria-labelledby="tech-stack-title">
      <h2 className="tech-title" id="tech-stack-title">
        {" "}
        {t("My Tech")} <span>{t("Stack")}</span>
      </h2>

      <div
        className="tech-card"
        role="region"
        aria-roledescription={t("carousel")}
        aria-label={t("Technologies")}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
      >
        <button
          type="button"
          className="nav-btn nav-btn-left"
          onClick={prevSlide}
          aria-label={t("Previous technology")}
        >
          <span>‹</span>
        </button>

        <div className="tech-track">
          {visibleTechs.map((tech) => {
            const isActive = tech.realIndex === activeIndex;

            return (
              <div
                key={`${tech.name}-${tech.realIndex}`}
                className={`tech-item ${isActive ? "active" : ""}`}
                aria-current={isActive ? "true" : undefined}
              >
                <div className="tech-icon-box">
                  <img
                    src={tech.image}
                    alt={t(tech.name)}
                    className="tech-icon"
                  />
                </div>
                <p className="tech-name">{t(tech.name)}</p>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          className="nav-btn nav-btn-right"
          onClick={nextSlide}
          aria-label={t("Next technology")}
        >
          <span>›</span>
        </button>
      </div>
    </section>
  );
}
