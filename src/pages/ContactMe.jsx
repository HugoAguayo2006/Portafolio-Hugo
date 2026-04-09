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
        const data = await fetch('api/server.js', {
            method: "POST",
            headers: {},
            body: JSON.stringify({
                name: form.name,
                email: form.email,
                message: form.message,
            }),
        });
        const res = await data.json();
        console.log(res);
    };


    return (
        <div className="contactMe-page">

                <section className="contactMe-container">

                    <div className="contactMe-top">
                        <h1 className="contactMe-main-text">Initiate Project</h1>
                        <p className="description">
                            Ready to transform complex requirments into
                            elegant digital architecture? Let's build
                            something that moves the needle.
                        </p>
                    </div>

                    <div className="contactMe-middle">
                        <div className="contactMe-form">

                            <form onSubmit={handleSendEmail}>
                                <div className="form-row">
                                    <div className="input-group">
                                        <label>FULL NAME</label>
                                        <input
                                            name="name"
                                            type="text"
                                            placeholder="Full Name"
                                            value={form.name}
                                            onChange={handleOnChange}
                                        />
                                    </div>

                                    <div className="input-group">
                                        <label>EMAIL ADDRESS</label>
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="email@example.com"
                                            value={form.email}
                                            onChange={handleOnChange}
                                        />
                                    </div>
                                </div>

                                <div className="input-group input-group-full">
                                    <label>PROJECT BRIEF</label>
                                    <textarea
                                        name="message"
                                        placeholder="Tell me about your vision, technical requirements, and goals..."
                                        value={form.message}
                                        onChange={handleOnChange}
                                    />
                                </div>

                                <button type="submit" className="send-btn">
                                    Send Message
                                </button>
                            </form>

                        </div>

                        <div className="contact-info">
                            <div className="info-block">
                                <p className="info-label">DIRECT COMMUNICATION</p>
                                <h3 className="info-main">guillermo.delatorreisunza@gmail.com</h3>
                            </div>
                            <div className="info-block">
                                <p className="info-label">CURRENT STATUS</p>
                                <h3 className="info-main">Available</h3>
                                <p className="info-sub">Available Worldwide</p>
                            </div>
                            <div className="info-block">
                                <p className="info-label">DIGITAL PRESENCE</p>
                                <div className="social-links">
                                    <a href="https://github.com/Guillermo-dlti" target="_blank" rel="noopener noreferrer">Github <span className="arrow">↗</span></a>
                                    <a href="https://www.linkedin.com/in/guillermo-de-la-torre-isunza/" target="_blank" rel="noopener noreferrer">LinkedIn <span className="arrow">↗</span></a>
                                    <a href="mailto:guillermo.delatorreisunza@gmail.com">Email <span className="arrow">↗</span></a>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>
        </div>
    );
}






{/* <h1>Contact Me</h1>
                            <div>
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <input name="name" type="text" value={form.name} onChange={handleOnChange} />
                                    <input name="email" type="email" value={form.email} onChange={handleOnChange} />
                                </div>
                                <div style={{ paddingTop: '20px' }}>
                                    <textarea name="message" rows="10" cols="50" value={form.message} onChange={handleOnChange}>Write something here</textarea>
                                </div>
                                <button onClick={handleSendEmail} style={{ width: '140px', height: '40px' }}>Contact Me</button>
                            </div> */}