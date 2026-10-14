import { useEffect, useState } from "react";
import "./Carrusel.css";

const techs = [
    // Programming & backend
  { name: "Python", image: "/icons/logos/python.webp" },
  { name: "C++", image: "/icons/logos/cplusplus.webp" },
  { name: "FastAPI", image: "/icons/logos/fastapi.svg" },
  { name: "Node.js", image: "/icons/logos/node.webp" },
  { name: "Pydantic", image: "/favicon.svg" },
  { name: "REST APIs", image: "/favicon.svg" },
  { name: "WebSockets", image: "/favicon.svg" },
  { name: "Stripe", image: "/icons/logos/stripe.webp" },
  { name: "EmailJS", image: "/favicon.svg" },

  
  // Web development & design
  { name: "React", image: "/icons/logos/react.webp" },
  { name: "TypeScript", image: "/icons/logos/typescript.svg" },
  { name: "JavaScript", image: "/icons/logos/JavaScrip.webp" },
  { name: "HTML", image: "/icons/logos/HTML.webp" },
  { name: "CSS", image: "/icons/logos/CSS.webp" },
  { name: "Tailwind CSS", image: "/icons/logos/tailwind.webp" },
  { name: "Vite", image: "/icons/logos/vitejs.svg" },
  { name: "React Router", image: "/icons/logos/reactrouter.svg" },
  { name: "Framer Motion", image: "/icons/logos/framermotion.svg", lightSurface: true },
  { name: "i18next", image: "/favicon.svg" },
  { name: "Figma", image: "/icons/logos/Figma.webp" },
  { name: "Wix", image: "/icons/logos/wix.webp" },

  // Web visibility & SEO
  { name: "Google SEO", image: "/icons/logos/seo.webp" },
  { name: "Google Search Console", image: "/icons/logos/console.webp" },
  { name: "Google Business Profile", image: "/icons/logos/business.webp" },

  // Mobile & browser extensions
  { name: "React Native", image: "/icons/logos/native.webp" },
  { name: "Plasmo", image: "/favicon.svg" },
  { name: "Chrome Extensions (Manifest V3)", image: "/icons/logos/chrome.svg" },



  // Databases & persistence
  { name: "PostgreSQL", image: "/icons/logos/postgresql.svg" },
  { name: "SQL", image: "/icons/logos/SQL.webp" },
  { name: "Supabase", image: "/icons/logos/supabase.svg" },
  { name: "MySQL", image: "/icons/logos/MySQL.webp" },
  { name: "MongoDB", image: "/icons/logos/MongoDB.webp" },
  { name: "SQLAlchemy", image: "/icons/logos/sqlalchemy.svg", lightSurface: true },

  // AI & data analysis
  { name: "Gemini API", image: "/favicon.svg" },
  { name: "Scikit-learn", image: "/icons/logos/scikitlearn.svg" },
  { name: "OpenCV", image: "/icons/logos/opencv.svg" },
  { name: "MATLAB", image: "/icons/logos/matlab.webp" },
  { name: "R", image: "/icons/logos/R.webp" },
  { name: "R Studio", image: "/icons/logos/R-Studio.webp" },
  { name: "SerpApi", image: "/favicon.svg" },

  // Maps & route optimization
  { name: "Google Maps API", image: "/favicon.svg" },
  { name: "OpenStreetMap", image: "/favicon.svg" },
  { name: "Leaflet", image: "/favicon.svg" },
  { name: "NetworkX", image: "/icons/logos/networkx.svg" },
  { name: "OSMnx", image: "/favicon.svg" },

  // Hardware
  { name: "Raspberry Pi", image: "/icons/logos/raspberrypi.svg" },

  // Productivity & automation
  { name: "Google Workspace", image: "/icons/logos/workspace.webp" },
  { name: "Google Workspace For Education", image: "/icons/logos/education.webp" },
  { name: "VBA", image: "/favicon.svg" },
  { name: "ActiveX", image: "/favicon.svg" },

  // Development, deployment & testing
  { name: "Render", image: "/favicon.svg" },
  { name: "Playwright", image: "/icons/logos/playwright.svg" },
  { name: "Pytest", image: "/icons/logos/pytest.svg" },
  { name: "Git", image: "/icons/logos/git.webp" },
  { name: "GitHub", image: "/icons/github.webp" },
  { name: "Vercel", image: "/icons/logos/vercel.webp" },
  { name: "Cloudflare", image: "/icons/logos/cloudflare.webp" },



];

export default function TechCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? techs.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === techs.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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
        My Tech <span>Stack</span>
      </h2>

      <div
        className="tech-card"
        role="region"
        aria-roledescription="carousel"
        aria-label="Technologies"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
      >
        <button type="button" className="nav-btn nav-btn-left" onClick={prevSlide} aria-label="Previous technology">
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
                <div className={`tech-icon-box${tech.lightSurface ? " tech-icon-box-light" : ""}`}>
                  <img src={tech.image} alt={tech.name} className="tech-icon" />
                </div>
                <p className="tech-name">{tech.name}</p>
              </div>
            );
          })}
        </div>

        <button type="button" className="nav-btn nav-btn-right" onClick={nextSlide} aria-label="Next technology">
          <span>›</span>
        </button>
      </div>
    </section>
  );
}
