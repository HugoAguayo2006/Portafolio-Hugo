import "./ContactMe.css";
import React, { useState } from "react";

export default function ContactMe() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState(null);
    const [errors, setErrors] = useState({});

    const validateForm = (values) => {
        const nextErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!values.name.trim()) {
            nextErrors.name = "Your name is required.";
        }

        if (!values.email.trim()) {
            nextErrors.email = "Your email is required.";
        } else if (!emailRegex.test(values.email.trim())) {
            nextErrors.email = "Enter a valid email address.";
        }

        if (!values.message.trim()) {
            nextErrors.message = "Tell me a little about your project.";
        }

        return nextErrors;
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => {
            if (!prev[name]) {
                return prev;
            }

            const updatedErrors = { ...prev };
            delete updatedErrors[name];
            return updatedErrors;
        });
    };

    const handleSendEmail = async (e) => {
        e.preventDefault();
        const trimmedForm = {
            name: form.name.trim(),
            email: form.email.trim(),
            message: form.message.trim(),
        };
        const validationErrors = validateForm(trimmedForm);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setStatus(null);
            return;
        }

        setErrors({});

        setStatus("loading");

        try {
            const data = await fetch('/api/server', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: trimmedForm.name,
                    email: trimmedForm.email,
                    subject: "Portfolio contact form",
                    message: trimmedForm.message,
                }),
            });

            const res = await data.json();
            console.log(res);

            if (!data.ok) {
                throw new Error(res.message || "Error al enviar");
            }

            setStatus("success");

            // limpiar formulario
            setForm({
                name: '',
                email: '',
                message: ''
            });

        
            setTimeout(() => {
                setStatus(null);
            }, 4000);

        } catch (error) {
            console.error(error);
            setStatus("error");

            setTimeout(() => {
                setStatus(null);
            }, 4000);
        }
    };

    return (
        <div className="contactMe-page">

            <section className="contactMe-container">
                <div className="contactMe-top">
                    <h1 className="contactMe-title-text">
                        Let’s Build Something <span className='tercero-text'>Together</span>
                    </h1>
                    <p className="letras-pequenas-abajo">
                        // STATUS: OPEN TO COLLABORATION & NEW OPPORTUNITIES
                    </p>
                </div>

                <div className="contactMe-bottom">
                    {/* COLUMNA IZQUIERDA */}
                    <div className="contactMe-form">

                        <form onSubmit={handleSendEmail} noValidate>
                            <div className="form-row">
                                <div className="input-group">
                                    <label>FULL NAME</label>
                                    <input
                                        name="name"
                                        type="text"
                                        placeholder="Your Name"
                                        value={form.name}
                                        onChange={handleOnChange}
                                        aria-invalid={Boolean(errors.name)}
                                        aria-describedby={errors.name ? "name-error" : undefined}
                                        className={errors.name ? "input-error" : ""}
                                    />
                                    {errors.name && <span id="name-error" className="field-error">{errors.name}</span>}
                                </div>

                                <div className="input-group">
                                    <label>EMAIL ADDRESS</label>
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="youremail@example.com"
                                        value={form.email}
                                        onChange={handleOnChange}
                                        aria-invalid={Boolean(errors.email)}
                                        aria-describedby={errors.email ? "email-error" : undefined}
                                        className={errors.email ? "input-error" : ""}
                                    />
                                    {errors.email && <span id="email-error" className="field-error">{errors.email}</span>}
                                </div>
                            </div>

                            <div className="input-group input-group-full">
                                <label>PROJECT BRIEF</label>
                                <textarea
                                    name="message"
                                    placeholder="Tell me about your project..."
                                    value={form.message}
                                    onChange={handleOnChange}
                                    aria-invalid={Boolean(errors.message)}
                                    aria-describedby={errors.message ? "message-error" : undefined}
                                    className={errors.message ? "input-error" : ""}
                                />
                                {errors.message && <span id="message-error" className="field-error">{errors.message}</span>}
                            </div>

                            <button type="submit" className="send-btn" disabled={status === "loading"}>
                                {status === "loading" ? "Sending..." : "Send me your Message"}
                            </button>

                            {status === "loading" && (
                                <p className="form-status loading">Sending message...</p>
                            )}

                            {status === "success" && (
                                <p className="form-status success">✅ Message sent successfully!</p>
                            )}

                            {status === "error" && (
                                <p className="form-status error">❌ Something went wrong. Try again.</p>
                            )}
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
