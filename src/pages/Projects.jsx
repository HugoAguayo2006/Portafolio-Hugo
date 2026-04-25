import { useMemo, useState } from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "SMART MIRROR",
    category: "Physical prototype",
    tech: "IoT",
    year: "2025",
    status: "Completed",
    description:
      "Smart mirror built with React, Node.js, OpenCV, Python, Raspberry Pi, MongoDB, MySQL, and more, featuring facial and voice recognition, IoT connectivity, and personalized information display. Winner of 1st Place at the Engineering Expo, Tec de Monterrey (Physical Prototype).",
    image: "/images/home/smart-mirror.webp",
    link: "https://github.com/danihdz11/Smart-Mirror",
  },
  {
    id: 2,
    title: "OMEGA App",
    category: "Fintech App",
    tech: "React Native",
    year: "2025",
    status: "Completed",
    description:
      "A React Native fintech app developed during HackMTY 2025, under Capital One’s challenge, designed to manage credit cards and optimize payment strategies using TypeScript and Supabase.",
    image: "/images/home/omega-cover.webp",
    link: "https://github.com/HugoAguayo2006/omega",
  },
  {
    id: 3,
    title: "Calculator",
    category: "Web Development",
    tech: "HTML / JavaScript",
    year: "2025",
    status: "Completed",
    description:
      "Calculator built with HTML, CSS, and JavaScript, focused on practicing DOM manipulation, arithmetic logic, and a clean responsive interface for quick calculations.",
    image: "/images/proyectos/calculadora.webp",
    link: "https://calculator-gamma-seven-60.vercel.app",
  },
  {
    id: 4,
    title: "Nintendo Switch Pokemon Console",
    category: "Game Simulation",
    tech: "React / Pokemon API",
    year: "2025",
    status: "Completed",
    description:
      "Nintendo Switch inspired console made with React that simulates a Pokemon game experience using the Pokemon API to display dynamic creatures and game-style interactions.",
    image: "/images/proyectos/pokemon.webp",
    link: "https://console-reto-game-brown.vercel.app",
  },
  {
    id: 5,
    title: "Chatify",
    category: "Full Stack App",
    tech: "React / PostgreSQL",
    year: "2025",
    status: "Completed",
    description:
      "Chat application built with React and PostgreSQL, designed to manage conversations through a full-stack architecture with persistent data and a modern web interface.",
    image: "/images/proyectos/chat.webp",
    link: "https://chatify-five-ecru.vercel.app",
  },
];

export default function Projects() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTech, setSelectedTech] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase()) ||
        project.category.toLowerCase().includes(search.toLowerCase()) ||
        project.tech.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      const matchesTech =
        selectedTech === "All" || project.tech.includes(selectedTech);

      const matchesStatus =
        selectedStatus === "All" || project.status === selectedStatus;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesTech &&
        matchesStatus
      );
    });
  }, [search, selectedCategory, selectedTech, selectedStatus]);

  return (
    <section className="projects-page">

      <div className="projects-container">
        <div className="projects-top">
          <p className="projects-kicker">EXPLORE MY WORK</p>

          <h1 className="projects-title">
            Project <span className="projects-title-gradient">Search</span>
          </h1>

          <p className="projects-subtitle">
            Browse my work through categories, technologies, and keywords.
            This section is designed to make exploring my projects easier,
            cleaner, and more interactive.
          </p>
        </div>

        <div className="projects-toolbar">
          <div className="projects-search-box">
            <span className="projects-search-icon">⌕</span>
            <input
              type="text"
              placeholder="Search by title, description, category or technology..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="projects-filters">
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Web Development">Web Development</option>
              <option value="Software">Software</option>
              <option value="Physical prototype">Physical prototype</option>
              <option value="Game Simulation">Game Simulation</option>
              <option value="Full Stack App">Full Stack App</option>

            </select>

            <select
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
            >
              <option value="All">All Technologies</option>
              <option value="C++">C++</option>
              <option value="HTML">HTML</option>
              <option value="React">React</option>
              <option value="React Native">React Native</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="IoT">IoT</option>
              <option value="Pokemon API">Pokemon API</option>
              <option value="PostgreSQL">PostgreSQL</option>
            </select>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="All">All Status</option>
              <option value="Completed">Completed</option>
              <option value="In Progress">In Progress</option>
            </select>

            <button
              className="projects-clear-btn"
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
                setSelectedTech("All");
                setSelectedStatus("All");
              }}
            >
              Clear Filters
            </button>
          </div>
        </div>

        <div className="projects-results-bar">
          <p>
            Showing <span>{filteredProjects.length}</span> project
            {filteredProjects.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="projects-grid-1">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <article className="project-card-1" key={project.id}>
                <div className="project-card-image-wrapper">
                  <img src={project.image} alt={project.title} />
                  <div className="project-card-badges">
                    <span className="project-badge category-badge">
                      {project.category}
                    </span>
                    <span className="project-badge status-badge">
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="project-card-content">
                  <div className="project-card-topline">
                    <span className="project-tech">{project.tech}</span>
                    <span className="project-year">{project.year}</span>
                  </div>

                  <h2 className="project-title">{project.title}</h2>

                  <p className="project-description">{project.description}</p>

                  <div className="project-card-footer">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="projects-empty-state">
              <h3>No projects found</h3>
              <p>
                Try adjusting the filters or searching with different keywords.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
