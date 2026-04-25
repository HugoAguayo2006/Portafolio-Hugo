import { Link } from "react-router";
import "./AboutMe.css"
import TechCarousel from "../components/Carrusel";

const AboutMe = () =>{
    return(
    <>
        <div className="aboutme-page">

            <section className="aboutme-container">
                <div className="aboutme-top">
                    <p className="letras-pequenas-arriba-centrado">
                        /* Jose Hugo Aguayo Mendoza */
                    </p>
                    <h1 className="aboutme-title-text">
                        This is <span className='tercero-text'>Me</span>
                    </h1>
                </div>

                <div className="aboutme-bottom">
                    {/* COLUMNA IZQUIERDA */}
                    <div className="aboutme-izquieda">
                    <img src="/images/aboutme/yo-aboutme.webp" alt="Sobre mí" />
                    </div>

                    {/* COLUMNA DERECHA */}
                    <div className="aboutme-derecha">
                        
                        <p>
                        Hello, I’m Jose Hugo Aguayo Mendoza, but you can call me Hugo. I am a Computer Engineering student at Tecnológico de Monterrey, with a strong passion for technology and continuous learning.
                        </p>

                        <p>
                        My skill set includes programming in C++, Python, and React (JavaScript), combining solid software development fundamentals with modern, scalable web applications.
                        </p>

                        <p>
                        I enjoy collaborating in team environments to solve problems while continuously strengthening my abilities across different programming languages and digital tools.
                        </p>

                        <p>
                        Outside of academics and professional work, I am passionate about soccer—my favorite team is Chivas. I also enjoy playing video games, especially Fortnite and Minecraft, as well as listening to music.
                        </p>

                        <p>
                        Currently, I am seeking opportunities to grow in the software field, and I’m excited to connect with people who share my interest in continuous learning.
                        </p>

                    </div>

                </div>

            </section>

            <div className="line"></div>

            <section className="aboutme-fondo-cita">
                  <span className="quote-icon">“</span>

                <h1 className="quote-text">
                    DO OR DO NOT. THERE IS NO TRY.
                </h1>

                <span className="quote-author">— MASTER YODA</span>
            </section>

            <div className="line"></div>
                <TechCarousel /> 
            <div className="line"></div>

            <div className="certificados-top">
                <h1 className="aboutme-title-text">
                    Certifications  <span className='tercero-text'>&</span>  Diplomas
                </h1>
            </div>

                <div className="certificates-grid">
                    <div className="certificate-card">
                        <img src="/images/aboutme/diplomas/expo.webp" alt="1st place at Tec de Monterrey’s Expo Ingenierías (physical prototype category)" />
                        <div className="texto">
                            <p className="certificado-titulo">1st place at Tec de Monterrey’s Expo Ingenierías (physical prototype category)</p>
                            <p className="certificado-institucion">Instituto Tecnológico y de Estudios Superiores de Monterrey</p>
                            <p className="certificado-ano">2025</p>
                            <div className="btn-certificados">
                                <a
                                href="/pdf/Expo-ingenierias-1-lugar-prototipo-fisico.pdf" 
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                See diploma
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="certificate-card">
                        <img src="/images/aboutme/diplomas/hackmty.webp" alt="HackMTY 2025 participation certificate" />
                        <div className="texto">
                            <p className="certificado-titulo">HackMTY 2025 participation certificate </p>
                            <p className="certificado-institucion">Instituto Tecnológico y de Estudios Superiores de Monterrey</p>
                            <p className="certificado-ano">2025</p>
                            <div className="btn-certificados">
                                <a
                                href="/pdf/CertificadoHackMTY2025HugoAguayo.pdf" 
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                See certificate
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="certificate-card">
                        <img src="/images/aboutme/diplomas/mentoria.webp" alt="Peer Mentoring Program" />
                        <div className="texto">
                            <p className="certificado-titulo">Peer Mentoring Program</p>
                            <p className="certificado-institucion">Instituto Tecnológico y de Estudios Superiores de Monterrey</p>
                            <p className="certificado-ano">2025</p>
                            <div className="btn-certificados">
                                <a
                                href="/pdf/mentoria.pdf" 
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                See certificate
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="certificate-card">
                        <img src="/images/aboutme/diplomas/renison.webp" alt="Summer English Immersion with Robotics Program at Renison University College" />
                        <div className="texto">
                            <p className="certificado-titulo">Certificate of participation in the Summer English Immersion with Robotics Program</p>
                            <p className="certificado-institucion">Renison University College, University of Waterloo</p>
                            <p className="certificado-ano">2023</p>
                            <div className="btn-certificados">
                                <a
                                href="/pdf/Renison-University-College.pdf" 
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                See certificate
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="certificate-card">
                        <img src="/images/aboutme/diplomas/diploma-prepa.webp" alt="High School diploma from PrepaTec Santa Anita" />
                        <div className="texto">
                            <p className="certificado-titulo">High school diploma</p>
                            <p className="certificado-institucion">PrepaTec Santa Anita</p>
                            <p className="certificado-ano">2024</p>
                            <div className="btn-certificados">
                                <a
                                href="/pdf/Diploma-Prepa.pdf" 
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                See diploma
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
  
        </div>
    </>
    );
}

export default AboutMe
