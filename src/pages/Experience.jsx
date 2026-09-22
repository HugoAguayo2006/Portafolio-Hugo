import React from 'react'
import './Experience.css'

function Experience() {
  const skillGroups = [
    {
      title: 'Programming',
      skills: ['Python', 'C++', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'MATLAB', 'R'],
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React', 'React Native', 'FastAPI', 'SQLAlchemy', 'Pydantic', 'Tailwind CSS', 'Plasmo', 'Scikit-learn', 'NetworkX', 'OSMnx'],
    },
    {
      title: 'AI, APIs & Data',
      skills: ['Gemini API', 'REST APIs', 'WebSockets', 'OpenStreetMap', 'Leaflet', 'SerpApi', 'Google Maps API'],
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase', 'SQL'],
    },
    {
      title: 'Tools & Product',
      skills: ['Git / GitHub', 'Node.js', 'Vite', 'Vercel', 'Render', 'Cloudflare', 'Playwright', 'Pytest', 'Manifest V3', 'SEO', 'Google Search Console', 'Figma'],
    },
    {
      title: 'Languages',
      skills: ['Spanish · Native', 'English · B2 (PTE Academic, 2024)'],
    },
  ]

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
                <p className="education-card-years">August 2024 — June 2028</p>
                <h3 className="education-card-title">B.S. in Computer Science and Technology Engineering</h3>
                <p className="education-card-school">Tecnológico de Monterrey  (Campus Guadalajara)</p>

                <div className="education-card-info">
                  <p>✦ Expected graduation: June 2028 · Current GPA: 97.61/100.</p>
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
            <div className="education-card-morado professional-card">
              <img
                className="experience-brand-image"
                src="/favicon.svg"
                alt="NIVOSTECH logo"
              />

              <div className="education-card-content">
                <p className="education-card-years morado">March 2024 — Present</p>
                <h3 className="education-card-title">Founder & Web Developer</h3>
                <p className="education-card-school">NIVOSTECH</p>

                <div className="education-card-info">
                  <p>✦ Founded and operate a web development company delivering professional websites for schools and organizations.</p>
                  <p>✦ Manage client requirements, development, deployment, SEO, domain configuration, and ongoing maintenance.</p>
                  <p>✦ Build responsive and multilingual experiences with React, Vite, React Router, i18next, Framer Motion, EmailJS, Google Maps API, and Vercel.</p>
                </div>

                <div className="client-work">
                  <h4>Selected client work</h4>
                  <ul>
                    <li><strong>OVISS Global Website</strong><span>February 2026 — Present</span></li>
                    <li><strong>Colegio Matel Chapalita</strong><span>January 2026 — Present</span></li>
                    <li><strong>Instituto Nueva Galicia Tlajomulco</strong><span>February — August 2026 · Maintenance ongoing</span></li>
                    <li><strong>Colegio Colonial</strong><span>March 2024 — April 2026 · Maintenance ongoing</span></li>
                    <li><strong>Instituto Nueva Galicia</strong><span>September — November 2025 · Maintenance ongoing</span></li>
                  </ul>
                </div>

                <a
                  href="https://www.nivostech.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-proyecto"
                >
                  Visit NIVOSTECH
                </a>
              </div>
            </div>

          </div>
        </div>

        <div className="experience-education-section seccion-experiencia">
          <div className="experience-education-left">
            <p className="experience-title">Leadership</p>
          </div>

          <div className="leadership-grid">
            <article className="leadership-card">
              <p className="education-card-years">August 2025 — Present</p>
              <h3 className="education-card-title">Peer Mentor</h3>
              <p className="education-card-school">Tecnológico de Monterrey · Student Well-Being Department</p>
              <p>Mentor younger students from Computer Science and related engineering programs through academic guidance, one-on-one support, and assistance with university integration.</p>
            </article>

            <article className="leadership-card">
              <p className="education-card-years">August 2023 — May 2024</p>
              <h3 className="education-card-title">FIRST Robotics Competition</h3>
              <p className="education-card-school">PrepaTec · StingBots #6702</p>
              <p>Contributed across finance and robot assembly, strengthening collaboration, organization, and hands-on engineering skills.</p>
            </article>
          </div>
        </div>

        <div className="experience-education-section seccion-experiencia skills-section">
          <div className="experience-education-left">
            <p className="experience-title-morado">Technical Skills</p>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-list">
                  {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
