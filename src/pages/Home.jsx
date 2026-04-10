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
                            src="/images/home/smart-mirror.webp"
                            alt="Kinetic Dash"
                            className="project-image"
                        />

                        <div className="project-content">
                            <div className="project-tags">
                            <span className="tag active">• Completed</span>
                            <span className="tag">IoT</span>
                            </div>

                            <div className="project-bottom">
                            <div className="project-header">
                                <h3 className="project-title">SMART MIRROR</h3>
                                <button className="arrow-btn">→</button>
                            </div>

                            <p className="project-text">
                                Smart mirror built with React, Node.js, OpenCV, Python, Raspberry Pi, MongoDB, MySQL, and more, featuring facial and voice
                                recognition, IoT connectivity, and personalized information display. Winner of 1st Place at the Engineering Expo, Tec de Monterrey
                                (Physical Prototype).
                            </p>
                            </div>
                        </div>
                        </article>

                        <article className="project-card right-card">
                        <img
                            src="/images/home/omega-cover.webp"
                            alt="Neural Grid"
                            className="project-image"
                        />

                        <div className="project-content">
                            <div className="project-tags">
                            <span className="tag active">• Completed</span>
                            <span className="tag">Fintech App</span>
                            </div>

                            <div className="project-bottom">
                            <div className="project-header">
                                <h3 className="project-title">OMEGA</h3>
                                <button className="arrow-btn">→</button>
                            </div>

                            <p className="project-text">
                                A React Native fintech app developed during HackMTY 2025, under Capital One’s challenge, designed to manage credit cards and optimize
                                payment strategies using TypeScript and Supabase.
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
