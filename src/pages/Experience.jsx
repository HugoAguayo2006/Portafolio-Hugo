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
                <img src="/images/experience/schools/tec-gdl.webp" alt="Tecnológico de Monterrey" />
              </div>

              <div className="education-card-content">
                <p className="education-card-years">2024 — Present</p>
                <h3 className="education-card-title">B.S. in Computer Engineering</h3>
                <p className="education-card-school">Tecnológico de Monterrey  (Campus Guadalajara)</p>

                <div className="education-card-info">
                  <p>✦ Strong foundation in computer engineering, covering software development, networking, data science, and core engineering disciplines such as physics, chemistry, and advanced mathematics.</p>
                  <p>✦ Experienced in building and applying solutions using React, Python, and C++ through academic and practical projects.</p>
                  <p>✦ Worked with industry partners including Uyu Beauty, Pasitos Health Education, and Kueski Pay, contributing to real-world projects and strengthening teamwork and problem-solving skills.</p>
                </div>
              </div>
            </div>

            <div className="education-card">
              <div className="education-card-image">
                <img src="/images/experience/schools/renison.webp" alt="Renison University College, University of Waterloo" />
              </div>

              <div className="education-card-content">
                <p className="education-card-years">May 30 — June 23, 2023</p>
                <h3 className="education-card-title">Summer English Immersion with Robotics Program</h3>
                <p className="education-card-school">Renison University College, University of Waterloo (Ontario, Canada)</p>

                <div className="education-card-info">
                  <p>✦ Participated in an international summer program through PrepaTec Santa Anita, combining intensive English immersion with robotics and technology-based learning.</p>
                  <p>✦ Strengthened communication skills in an academic English environment while engaging in hands-on robotics projects and collaborative problem-solving activities.</p>
                  <p>✦ Developed independence, adaptability, and global perspective through cultural exchange and international academic experience.</p>
                </div>
              </div>
            </div>


            <div className="education-card">
              <div className="education-card-image">
                <img src="/images/experience/schools/tec-sta.webp" alt="PrepaTec Santa Anita" />
              </div>

              <div className="education-card-content">
                <p className="education-card-years">2021 — 2024</p>
                <h3 className="education-card-title">High School</h3>
                <p className="education-card-school">PrepaTec Santa Anita</p>

                <div className="education-card-info">
                  <p>✦ Developed a strong academic foundation through a multidisciplinary educational model, integrating science, mathematics, and critical thinking.</p>
                  <p>✦ Participated in project-based learning, strengthening problem-solving, collaboration, and communication skills.</p>
                  <p>✦ Member of the representative soccer team, becoming champion in multiple tournaments and reinforcing discipline, teamwork, and leadership.</p>
                </div>
              </div>
            </div>

            <div className="education-card">
              <div className="education-card-image">
                <img src="/images/experience/schools/galicia.webp" alt="Instituto Nueva Galicia Tlajomulco" />
              </div>

              <div className="education-card-content">
                <p className="education-card-years">2009 — 2020</p>
                <h3 className="education-card-title">Elementary & Middle School Education</h3>
                <p className="education-card-school">Instituto Nueva Galicia (Campus Tlajomulco and Campus Centro)</p>

                <div className="education-card-info">
                  <p>✦ Developed a strong academic and personal foundation within a faith-based educational environment, focused on values, discipline, and integral human formation.</p>
                  <p>✦ Educated under a holistic model emphasizing academic excellence, personalized learning, and the development of critical thinking and social responsibility.</p>
                  <p>✦ Participated in sports and extracurricular activities, reinforcing teamwork, commitment, and personal growth from an early age.</p>
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
                        <a 
                        href="/pdf/CV_Jose_Hugo_Aguayo_Mendoza.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-proyecto"
                        >
                        View My Work
                        </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
