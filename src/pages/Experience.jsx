import React from 'react'
import './Experience.css'

function Experience() {
  return (
    <section className="projects-page">

      {/* ARRIBA */}
      <div className="projects-top">
          <p className="projects-kicker">BUILDING MY STORY</p>
          <h1 className="projects-title">
            Where I <span className="projects-title-gradient">Learned</span> & Where I <span className="projects-title-gradient morado">Built</span>
          </h1>
      </div>

      {/* ABAJO */}
      <div className='experience-bottom'>
        {/* EDUCACION */}
        {/* COLUMNA DERECHA */}
        <div className="experience-education-section">
          <div className="experience-education-left">
            <div className='experience-eduation'>
              <p className="experience-title">Education</p>
            </div>
          </div>

          <div className="experience-education-right">
            <div className="education-card">
              <div className="education-card-image">
                <img src="/images/schools/tec1.webp" alt="Tecnológico de Monterrey" />
              </div>

              <div className="education-card-content">
                <p className="education-card-years">2023 — Present</p>
                <h3 className="education-card-title">B.S. in Computer Engineering</h3>
                <p className="education-card-school">Tecnológico de Monterrey</p>

                <div className="education-card-info">
                  <p>✦ Focus on software development and web technologies</p>
                  <p>✦ Academic projects in React, Python and C++</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* EXPERIENCE */}
        {/* COLUMNA DERECHA */}
        <div className="experience-education-section seccion-experiencia">
          <div className="experience-education-left">
            <div className='experience-eduation'>
              <p className="experience-title-morado">Experience</p>
            </div>
          </div>

          <div className="experience-education-right">
            <div className="education-card-morado">
              <div className="education-card-image">
                <img src="/images/schools/tec1.webp" alt="Tecnológico de Monterrey" />
              </div>

              <div className="education-card-content">
                <p className="education-card-years morado">2023 — Present</p>
                <h3 className="education-card-title">B.S. in Computer Engineering</h3>
                <p className="education-card-school">Tecnológico de Monterrey</p>

                <div className="education-card-info">
                  <p>✦ Focus on software development and web technologies</p>
                  <p>✦ Academic projects in React, Python and C++</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
