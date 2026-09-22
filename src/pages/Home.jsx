import { Link } from "react-router";
import TechCarousel from "../components/Carrusel";
import Contacto from "../components/Contacto";
import "./Home.css";
const Home = () => {
    return(
        <>
        <section className="home-intro">
            <div className="text-column">
                <p className="letras-pequenas">AVAILABLE FOR NEW VENTURES</p>
                <h1 className="main-text">
                    FULL-STACK <span className='tercero-text'>DEVELOPER</span> / 
                    BUILDING FOR THE
                    FUTURE
                </h1>
                <p className="letras-medianas">
                    Treating code as a structural art form. I engineer scalable digital
                    systems that balance brutalist logic with sophisticated user
                    experiences.
                </p>

              <div className='btn-container'>
                <Link to="/projects" className="btn">
                View Projects
                </Link>

                <Link to="/about-me" className="btn-morado">
                About me
                </Link>

              </div>  
            </div>

            <div className="image-column">
                <img src="/images/home/jose-hugo-aguayo-mendoza-2.webp" alt="Foto de Jose Hugo Aguayo Mendoza" />
            </div>
            
        </section>

            <div className="line"></div>
                <TechCarousel /> 
            <div className="line"></div>

        <div className="home-projects">
            <div className="texto-recent-projects">

                <span className='degradado-text'>RECENT PROJECTS</span>


                <section className="projects-section">
                    <div className="projects-grid">
                        
                        <article className="project-card left-card">
                        <img
                            src="/favicon.svg"
                            alt="Courier AI"
                            className="project-image home-project-image"
                        />

                        <div className="project-content">
                            <div className="project-tags">
                            <span className="tag active">• Completed</span>
                            <span className="tag">HackMTY 2026</span>
                            </div>

                            <div className="project-bottom">
                            <div className="project-header">
                                <h3 className="project-title">COURIER AI</h3>
                                <a
                                href="https://github.com/HugoAguayo2006/RouteBoost"
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="arrow-btn"
                                >
                                →
                                </a>
                            </div>

                            <p className="project-text">
                                Real-time logistics platform built for the 36-hour HackMTY 2026 Infosys challenge. It combines React, TypeScript, FastAPI,
                                WebSockets, OpenStreetMap, NetworkX, OSMnx, and Gemini API to optimize courier order acceptance and routing.
                            </p>
                            </div>
                        </div>
                        </article>

                        <article className="project-card right-card">
                            
                        <img
                            src="/favicon.svg"
                            alt="WidKueski"
                            className="project-image home-project-image"
                        />

                        <div className="project-content">
                            <div className="project-tags">
                            <span className="tag active">• Completed</span>
                            <span className="tag">Chrome Extension</span>
                            </div>

                            <div className="project-bottom">
                            <div className="project-header">
                                <h3 className="project-title">WIDKUESKI</h3>
                                <a
                                href="https://github.com/HugoAguayo2006/widKueski"
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="arrow-btn"
                                >
                                →
                                </a>
                            </div>

                            <p className="project-text">
                                Chrome extension that integrates Kueski Pay financing into e-commerce sites. Built with Plasmo, React, TypeScript, SerpApi,
                                FastAPI, PostgreSQL, and SQLAlchemy.
                            </p>
                            </div>
                        </div>
                        </article>

                    </div>
                </section>
            </div>
            
        </div>

       <div className="line"></div>
        <Contacto/>

        </>
    );
};

export default Home;
