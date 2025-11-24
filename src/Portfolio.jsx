import React from "react";
import "./Portfolio.css";
import myCV from './assets/CV Saif.pdf';


export default function Portfolio() {
    return (
        <div>
            {/* ======= NAVBAR ======= */}
            <nav className="nav">
                <div className="nav-left">Gazi Shahariar Hasan</div>
                <ul className="nav-right">
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#research">Research</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            {/* ======= HERO ======= */}
            <section className="hero">
                <h1>
                    Hi — I'm <span className="highlight">Gazi Shahariar Hasan</span>
                </h1>
                <p className="hero-text">
                    Front-End Developer specializing in JavaScript, React.js, HTML, CSS, and modern web
                    development. EEE graduate applying engineering analytical skills to software development.
                </p>


                <a className="download-btn" href={myCV}>Download CV</a>
                <a className="email-link" href="mailto:gssaif.tm@gmail.com">Email</a>
            </section>


            {/* ======= ABOUT ======= */}
            <section id="about" className="section">
                <h2>About</h2>
                <p>
                    I am a B.Sc. in EEE (SUST) graduate (2020–2025). I build responsive and functional
                    web applications using React.  Passionate about continuous learning and transitioning academic analytical skills into real‑world software development.
                </p>


                <h3>Education</h3>
                <p ><strong >S.S.C from Tala B.Dey Govt High School</strong> (GPA: 5.00)</p>
                <p><strong>H.S.C from Khulna Public College</strong> (GPA: 5.00)</p>
                <p ><strong>B.Sc. in EEE — SUST</strong> (CGPA: 3.34)(recent-3.64,3.83)</p>


                <h3>Experience</h3>
                <p>Trainee — Training Institute for Chemical Industries (Nov–Dec 2024)</p>
                <p>Private Tutor (2020–2024)</p>
            </section>
            {/* ======= SKILLS ======= */}
            <section id="skills" className="section">
                <h2>Skills</h2>

                {/* Web Development */}
                <h3>Web Development:</h3>
                <div className="skills-box">
                    {[
                        "HTML", "CSS", "C", "JavaScript", "React.js", "LaTeX", "Linux",
                        "React Router", "React ToolKits", "Python", "MySQL"
                    ].map((s) => (
                        <span className="skill-item" key={s}>
                            {s}
                        </span>
                    ))}
                </div>

                {/* Electrical Engineering */}
                <h3 style={{ marginTop: "35px" }}>Electrical Engineering:</h3>
                <div className="skills-box">
                    {[
                        "SCAPS-1D", "LTspice", "Verilog (learning)", "Python", "Excel",
                        "Academic Research", "Event Organization", "Leadership",
                        "Teamwork", "Critical Thinking", "Communication", "English",
                        "Bengali", "Hindi (conversational)"
                    ].map((s) => (
                        <span className="skill-item" key={s}>
                            {s}
                        </span>
                    ))}
                </div>
            </section>


            {/* ======= PROJECTS ======= */}
            <section id="projects" className="section">
                <h2>Projects</h2>
                <ul className="project-list">
                    <li><u><a href="https://quickshoppingsaif.netlify.app/">Quick Shopping (Redux Toolkit)</a></u></li>
                    <li><u><a href="https://rockpaperscissorsaifsproject.netlify.app/">Rock Paper Scissor (JS)</a></u></li>
                    <li><u><a href="https://routinginterfacesaifshahariar.netlify.app/">Routing Interface (React Router)</a></u></li>
                    <li><u><a href="https://weatherappsaif.netlify.app/">Weather App (JavaScript)</a></u></li>
                </ul>
            </section>


            {/* ======= RESEARCH ======= */}
            <section id="research" className="section">
                <h2>Research</h2>
                <ul>
                    <li><u><a href="https://www.researchgate.net/publication/394007855_Analytical_Modeling_and_Validation_of_Threshold_Voltage_and_Depletion_Width_in_p-Channel_Double-Gate_Junctionless_FETs_with_and_without_Stack_Oxide">Analytical Modeling and Threshold Voltage (p-Channel DG-JLFET)</a></u></li>
                    <li><u><a href="https://www.researchgate.net/publication/391007249_Analytical_Modeling_and_Validation_of_Threshold_Voltage_in_p-_Channel_Double-Gate_Junction_less_Filed_Effect_Transistors">Analytical Model Validation — Junctionless FETs</a></u></li>
                </ul>
            </section>

            {/* =======  Professional Experience ======= */}
            <section id=" Experience" className="section">
                <h2> Professional Experience </h2>

                <h3 style={{ marginTop: "35px" }}> Trainee (Nov 2024–Dec 2024)</h3>
                <p>
                    Training Institute for Chemical Industries
                    Polash, Narsingdi, Bangladesh.
                </p>
                <h3 style={{ marginTop: "35px" }}> Private Tutor (2020–2024)</h3>
                <p>
                    Taught physics, chemistry and mathematics to students
                    of the HSC and SSC to support family finances.I used to
                    take Physics classes occasionally at Orbit Coaching Cen
                    ter,Sylhet.
                </p>
            </section>


            {/* ======= CONTACT ======= */}
            <section id="contact" className="section">
                <h2>Contact</h2>
                <p>Email: <u><a href="mailto:gssaif.tm@gmail.com">gssaif.tm@gmail.com</a></u></p>
                <p>GitHub: <u><a href="https://github.com/Shaharia66">github.com/Shaharia66</a></u></p>
                <p>LinkedIn: <u><a href="https://www.linkedin.com/in/gazi-shahariar-hasan-77807a373/">LinkedIn Profile</a></u></p>
            </section>


            <footer className="footer">© {new Date().getFullYear()} Gazi Shahariar Hasan</footer>
        </div>
    );
}