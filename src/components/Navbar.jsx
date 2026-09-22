import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"


const Navbar = ({children}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setIsMenuOpen(false);
            }
        };
        const handleHistoryNavigation = () => setIsMenuOpen(false);

        window.addEventListener("keydown", handleEscape);
        window.addEventListener("popstate", handleHistoryNavigation);
        return () => {
            window.removeEventListener("keydown", handleEscape);
            window.removeEventListener("popstate", handleHistoryNavigation);
        };
    }, []);

    return(
        <>
            <header className={`container-navbar ${isMenuOpen ? "menu-open" : ""}`}>
                <button
                    type="button"
                    className="menu-toggle"
                    aria-label={isMenuOpen ? "Cerrar menu de navegacion" : "Abrir menu de navegacion"}
                    aria-expanded={isMenuOpen}
                    aria-controls="primary-navigation"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                  <div className="nav-left">

                    <NavLink to="/" className="logo" onClick={closeMenu}>HUGO'S_PORTAFOLIO</NavLink>
                </div>


                <nav
                    id="primary-navigation"
                    aria-label="Navegación principal"
                    className={`nav-center ${isMenuOpen ? "nav-center-open" : ""}`}
                >
                        <NavLink to="/" className="link" onClick={closeMenu}>HOME</NavLink>
                        <NavLink to="/about-me" className="link" onClick={closeMenu}>ABOUT ME</NavLink>
                        <NavLink to="/experience" className="link" onClick={closeMenu}>EXPERIENCE</NavLink>
                        <NavLink to="/projects" className="link" onClick={closeMenu}>PROJECTS</NavLink>
                        <NavLink to="/contact-me" className="link" onClick={closeMenu}>CONTACT ME</NavLink>
                </nav>

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
            </header>
            {children}
        </>
    );
};

export default Navbar
