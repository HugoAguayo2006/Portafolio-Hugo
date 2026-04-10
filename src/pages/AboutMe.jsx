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
                        This is <span className='secondary-text'>Me</span>
                    </h1>
                </div>

                <div className="contactMe-bottom">
                    {/* COLUMNA IZQUIERDA */}


                    {/* COLUMNA DERECHA */}
                    <div className="contact-right">


                    </div>

                </div>

            </section>

            <section>

                CITA
            </section>

            <div className="line"></div>
                <TechCarousel /> 
            <div className="line"></div>

            <p>CERTIFICADOS</p>
        </div>
    </>
    );
}

export default AboutMe