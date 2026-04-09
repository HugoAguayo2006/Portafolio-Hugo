import "./ContactMe.css";
import { Link } from "react-router";
import React, { useState } from "react";

export default function ContactMe() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleSendEmail = async (e) => {
        e.preventDefault();

        try {
            const data = await fetch('/api/server', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // 🔥 CLAVE
                },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    subject: form.subject,
                    message: form.message,
                }),
            });

            const res = await data.json();
            console.log(res);

            if (!data.ok) {
                throw new Error(res.message || "Error al enviar");
            }

            alert("Mensaje enviado correctamente ✅");

            // limpiar formulario
            setForm({
                name: '',
                email: '',
                subject: '',
                message: ''
            });

        } catch (error) {
            console.error(error);
            alert("Hubo un error al enviar ❌");
        }
    };


    return (
        <div className="contactMe-page">

                <section className="contactMe-container">
                    <div className="contactMe-top">
                        <h1 className="contactMe-title-text">Let’s Build Something <span className='secondary-text'>Together</span></h1>
                        <p className="letras-pequenas-abajo">
                            // STATUS: OPEN TO COLLABORATION & NEW OPPORTUNITIES
                        </p>
                    </div>

                    <div className="contactMe-bottom">
                        {/* COLUMNA IZQUIERDA */}
                        <div className="contactMe-form">

                            <form onSubmit={handleSendEmail}>
                                <div className="form-row">
                                    <div className="input-group">
                                        <label>FULL NAME</label>
                                        <input
                                            name="name"
                                            type="text"
                                            placeholder="Your Name"
                                            value={form.name}
                                            onChange={handleOnChange}
                                        />
                                    </div>

                                    <div className="input-group">
                                        <label>EMAIL ADDRESS</label>
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="youremail@example.com"
                                            value={form.email}
                                            onChange={handleOnChange}
                                        />
                                    </div>
                                </div>

                                <div className="input-group input-group-full">
                                    <label>PROJECT BRIEF</label>
                                    <textarea
                                        name="message"
                                        placeholder="Tell me about your project...  "
                                        value={form.message}
                                        onChange={handleOnChange}
                                    />
                                </div>

                                <button type="submit" className="send-btn">
                                    Send me your Message
                                </button>
                            </form>

                        </div>

                        {/* COLUMNA DERECHA */}

                        <div className="contact-right">
                            <h2 className="connect-title">Connect with me</h2>

                            <div className="contact-cards-grid">
                                <a href="https://github.com/HugoAguayo2006" className="contact-card" target="_blank" rel="noreferrer">
                                <div className="contact-card-icon">
                                    <img 
                                    src="/icons/github.webp" 
                                    alt="github" 
                                    className="github-icon-contactme"
                                    />
                                </div>
                                <div className="contact-card-text">
                                    <span className="contact-card-label">SOURCE CONTROL</span>
                                    <h3>GitHub</h3>
                                </div>
                                </a>

                                <a href="https://www.linkedin.com/in/josehugoaguayomendoza/" className="contact-card" target="_blank" rel="noreferrer">
                                <div className="contact-card-icon">
                                    <img 
                                    src="/icons/linkedin.webp" 
                                    alt="linkedln" 
                                    className="linkedin-icon-contactme"
                                    />
                                </div>
                                <div className="contact-card-text">
                                    <span className="contact-card-label">PROFESSIONAL</span>
                                    <h3>LinkedIn</h3>
                                </div>
                                </a>

                                <a href="https://wa.me/523310392675?text=Hello%20Hugo%2C%20I%20saw%20your%20portfolio%20and%20I%E2%80%99m%20interested%20in%20speaking%20with%20you" className="contact-card" target="_blank" rel="noreferrer">
                                <div className="contact-card-icon">
                                    <img 
                                    src="/icons/WhatsApp.webp" 
                                    alt="whatsapp" 
                                    className="whatsapp-icon-contactme"
                                    />
                                </div>
                                <div className="contact-card-text">
                                    <span className="contact-card-label">Instant messaging</span>
                                    <h3>WhatsApp</h3>
                                </div>
                                </a>

                                <a href="mailto:hugoaguayo50@gmail.com" className="contact-card">
                                <div className="contact-card-icon">
                                    <img 
                                    src="/icons/Gmail.webp" 
                                    alt="Gmail" 
                                    className="gmail-icon-contactme"
                                    />
                                </div>
                                <div className="contact-card-text">
                                    <span className="contact-card-label">DIRECT LINE</span>
                                    <h3>Email</h3>
                                </div>
                                </a>
                            </div>

                            <div className="location-card">
                                <h3 className="location-title">Current Location</h3>
                                <p className="location-coords">GUADALAJARA, JAL, MX</p>
                            </div>
                        </div>

                    </div>

                </section>
        </div>
    );
}