import "./Navbar.css"

import { Link } from "react-router";
import { NavLink } from "react-router-dom";



const Navbar = ({children}) => {
    return(
        <>
            <div className="container-navbar">

                  <div className="nav-left">

                    <NavLink to="/home" className="logo">HUGO'S_PORTAFOLIO</NavLink>
                </div>


                <div className="nav-center">
                    <p>
                        <NavLink to="/home" className="link">HOME</NavLink>
                    </p>
                    <p>
                        <NavLink to="/about-me" className="link" >ABOUT ME</NavLink>
                    </p>
                    <p>
                        <NavLink to="/projects" className="link">PROJECTS</NavLink>
                    </p>
                    <p>
                        <NavLink to="/contact-me" className="link">CONTACT ME</NavLink>
                    </p>

                </div>

                  <div className="nav-right">
                    <a 
                    href="/CV_Jose_Hugo_Aguayo_Mendoza.pdf" 
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