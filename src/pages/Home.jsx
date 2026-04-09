import { Link } from "react-router";
import TechCarousel from "../components/Carrusel";

import "./Home.css";
const Home = () => {
    return(
        <>
        <div className="home-intro">
            <div class="text-column">
                <p className="letras-pequenas">AVAILABLE FOR NEW VENTURES</p>
                <h1 className="main-text">
                    FULL-STACK <span className='secondary-text'>DEVELOPER</span> / 
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

            <div class="image-column">
                <img src="/images/home/jose-hugo-aguayo-mendoza.webp" alt="Foto de Jose Hugo Aguayo Mendoza" />
            </div>
            
        </div>

            <div className="line"></div>
                <TechCarousel /> 
            <div className="line"></div>

        <div className="home-projects">
            
        </div>

        </>
    );
};

export default Home;