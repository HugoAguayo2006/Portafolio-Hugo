import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"


const Navbar = ({children}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return(
        <>
            <div className={`container-navbar ${isMenuOpen ? "menu-open" : ""}`}>
                <button
                    type="button"
                    className="menu-toggle"
                    aria-label={isMenuOpen ? "Cerrar menu de navegacion" : "Abrir menu de navegacion"}
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                  <div className="nav-left">

                    <NavLink to="/" className="logo" onClick={closeMenu}>HUGO'S_PORTAFOLIO</NavLink>
                </div>


                <div className={`nav-center ${isMenuOpen ? "nav-center-open" : ""}`}>
                    <p>
                        <NavLink to="/" className="link" onClick={closeMenu}>HOME</NavLink>
                    </p>
                    <p>
                        <NavLink to="/about-me" className="link" onClick={closeMenu}>ABOUT ME</NavLink>
                    </p>
                    <p>
                        <NavLink to="/experience" className="link" onClick={closeMenu}>EXPERIENCE</NavLink>
                    </p>
                    <p>
                        <NavLink to="/projects" className="link" onClick={closeMenu}>PROJECTS</NavLink>
                    </p>
                    <p>
                        <NavLink to="/contact-me" className="link" onClick={closeMenu}>CONTACT ME</NavLink>
                    </p>

                </div>

                  <div className="nav-right">
                        <a 
                        href="/pdf/CV_Jose_Hugo_Aguayo_Mendoza.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-CV"
                        >
                        CV
                        </a>
                    </div>
            </div>
            {children}
        </>
    );
};

export default Navbar
