import { useEffect, useState } from "react";
import "./Carrusel.css";

const techs = [
  { name: "Wix", image: "/icons/shopify.webp" },
  { name: "HTML", image: "/icons/HTML.webp" },
  { name: "Figma", image: "/icons/Figma.webp" },
  { name: "CSS", image: "/icons/CSS.webp" },
  { name: "JavaScript", image: "/icons/JavaScrip.webp" },
  { name: "React", image: "/icons/react.webp" },
  { name: "React Native", image: "/icons/native.webp" },
  { name: "Stripe", image: "/icons/stripe.webp" },
  { name: "Vercel", image: "/icons/vercel.webp" },
  { name: "Cloudflare", image: "/icons/cloudflar.webp" },
  { name: "Google Search Console", image: "/icons/console.webp" },
  { name: "Google SEO", image: "/icons/seo.webp" },
  { name: "Google Business Profile", image: "/icons/business.webp" },
  { name: "Google Workspace", image: "/icons/workspace.webp" },
  { name: "Google Workspace For Education", image: "/icons/education.webp" },
  { name: "C+", image: "/icons/cplusplus.webp" },
  { name: "Python", image: "/icons/python.webp" },
  { name: "MATLAB", image: "/icons/matlab.webp" },
  { name: "R", image: "/icons/R.webp" },
  { name: "R Studio", image: "/icons/R-Studio.webp" },
  { name: "Node.js", image: "/icons/node.webp" },
  { name: "Git", image: "/icons/git.webp" },
  { name: "SQL", image: "/icons/SQL.webp" },
  { name: "MongoDB", image: "/icons/MongoDB.webp" },
  { name: "MySQL", image: "/icons/MySQL.webp" },
];

export default function TechCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? techs.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === techs.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === techs.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
    <section className="tech-section">
      <h2 className="tech-title">
        My Tech <span>Stack</span>
      </h2>

      <div className="tech-card">
        <button className="nav-btn nav-btn-left" onClick={prevSlide}>
          <span>‹</span>
        </button>

        <div className="tech-track">
          {visibleTechs.map((tech) => {
            const isActive = tech.realIndex === activeIndex;

            return (
              <div
                key={`${tech.name}-${tech.realIndex}`}
                className={`tech-item ${isActive ? "active" : ""}`}
              >
                <div className="tech-icon-box">
                  <img src={tech.image} alt={tech.name} className="tech-icon" />
                </div>
                <p className="tech-name">{tech.name}</p>
              </div>
            );
          })}
        </div>

        <button className="nav-btn nav-btn-right" onClick={nextSlide}>
          <span>›</span>
        </button>
      </div>
    </section>
  );
}