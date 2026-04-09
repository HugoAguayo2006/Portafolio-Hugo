import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='container-footer'>
        <div className='footer-left'>
        © 2026 JOSE HUGO AGUAYO MENDOZA - PART OF 
        <a 
            href="https://www.nivostech.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="link-nivos"
        >
            NIVOSTECH
        </a>
        <span> - BUILT WITH PRECISION.</span>
        </div>
      <div className='footer-right'></div>
        <div className="contenedor-botones">
            <a
            href="https://www.linkedin.com/in/josehugoaguayomendoza/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedln"
            >
            <img 
            src="/icons/linkedin.webp" 
            alt="WhatsApp" 
            className="linkedln-icon"
            />
            LinkedIn
            </a>
            <a
            href="https://github.com/HugoAguayo2006"
            target="_blank"
            rel="noopener noreferrer"
            className="github"
            >
            <img 
            src="/icons/github.webp" 
            alt="WhatsApp" 
            className="github-icon"
            />
            GitHub
            </a>

            <a
            href="https://wa.me/523310392675?text=Hello%20Hugo%2C%20I%20saw%20your%20portfolio%20and%20I%E2%80%99m%20interested%20in%20speaking%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp"
            >
            <img 
            src="/icons/WhatsApp.webp" 
            alt="WhatsApp" 
            className="whatsapp-icon"
            />
            WhatsApp
            </a>
        </div>
      </div>
  )
}

export default Footer
