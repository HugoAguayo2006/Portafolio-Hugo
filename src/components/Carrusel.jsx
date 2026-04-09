import { useEffect, useState } from "react";
import "./Carrusel.css";

const techs = [
  { name: "C+", image: "/icons/logos/cplusplus.webp" },
  { name: "Python", image: "/icons/logos/python.webp" },
  { name: "JavaScript", image: "/icons/logos/JavaScrip.webp" },
  { name: "React", image: "/icons/logos/react.webp" },
  { name: "React Native", image: "/icons/logos/native.webp" },
  { name: "CSS", image: "/icons/logos/CSS.webp" },
  { name: "Tailwind css", image: "/icons/logos/tailwind.webp" },

  { name: "HTML", image: "/icons/logos/HTML.webp" },
  { name: "Figma", image: "/icons/logos/Figma.webp" },
  { name: "Wix", image: "/icons/logos/wix.webp" },


  { name: "Stripe", image: "/icons/logos/stripe.webp" },
  { name: "Cloudflare", image: "/icons/logos/cloudflare.webp" },


  { name: "Google SEO", image: "/icons/logos/seo.webp" },
  { name: "Google Business Profile", image: "/icons/logos/business.webp" },
  { name: "Google Workspace", image: "/icons/logos/workspace.webp" },
  { name: "Google Workspace For Education", image: "/icons/logos/education.webp" },

  { name: "MATLAB", image: "/icons/logos/matlab.webp" },
  { name: "R", image: "/icons/logos/R.webp" },
  { name: "R Studio", image: "/icons/logos/R-Studio.webp" },
  { name: "Node.js", image: "/icons/logos/node.webp" },
  { name: "MongoDB", image: "/icons/logos/MongoDB.webp" },
  { name: "MySQL", image: "/icons/logos/MySQL.webp" },
  { name: "Google Search Console", image: "/icons/logos/console.webp" },
  { name: "Vercel", image: "/icons/logos/vercel.webp" },
  { name: "Git", image: "/icons/logos/git.webp" },
  { name: "SQL", image: "/icons/logos/SQL.webp" },
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