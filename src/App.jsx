import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Briefcase,
  Code2,
  Layers,
  GraduationCap,
  Menu,
  X,
} from "lucide-react";
import profileImage from "./assets/profile.jpeg";
import "./index.css";
import { useEffect, useState } from "react";

const skills = {
  "Front-End": [
    "React.js",
    "TypeScript",
    "JavaScript",
    "Redux",
    "Angular",
    "Ant Design",
    "Material UI",
    "Bootstrap",
    "HTML5",
    "CSS3",
    "SCSS",
  ],
  "Back-End & APIs": ["Node.js", "Express.js", "REST API Integration"],
  Database: ["MongoDB", "MySQL", "Oracle DB", "Firebase"],
  "Engineering Practices": [
    "Component-Based Architecture",
    "CMS Development",
    "Responsive UI",
    "Agile/Scrum",
    "Performance Optimization",
    "AI-Assisted Development",
  ],
};

const experiences = [
  {
    role: "Senior Software Engineer – Front-End",
    company: "Knowledge Outsource (Pvt) Ltd",
    period: "Apr 2025 – Present",
    desc: "Working as an outsourced contractor for DBS Bank projects through Knowledge Outsource, contributing to enterprise CMS platforms and public-facing banking web applications.",
    stack: "React.js, TypeScript, Redux, JavaScript, Ant Design",
  },
  {
    role: "Software Engineer – Front-End",
    company: "Knowledge Outsource (Pvt) Ltd",
    period: "Nov 2023 – Mar 2025",
    desc: "Joined as a Software Engineer and contributed to DBS Bank CMS and public UI development projects, building reusable UI components and enterprise front-end features.",
    stack: "React.js, TypeScript, Redux, Ant Design",
  },
  {
    role: "Visiting Consultant / Lecturer",
    company: "National Institute of Business Management (NIBM)",
    period: "Jun 2024 – Present",
    desc: "Conducting lectures and practical sessions in IT, web development, full-stack development, networking fundamentals, and software engineering concepts.",
    stack: "Teaching, Communication, Full-Stack Development, Academic Guidance",
  },
  {
    role: "Software Engineer – Front-End",
    company: "Treinetic (Pvt) Ltd",
    period: "Apr 2023 – Oct 2023",
    desc: "Worked on client and company projects including Pod Team, Foodie Bell, and Weleta, focusing on responsive UI development, API integration, and feature enhancements.",
    stack: "Angular, Bootstrap",
  },
  {
    role: "Associate Software Engineer",
    company: "XGen Group (Pvt) Ltd",
    period: "Oct 2022 – Mar 2023",
    desc: "Worked on a Loan Origination System for the banking domain, developing enterprise interfaces and reusable front-end components.",
    stack: "React.js, TypeScript, JavaScript, MUI, Oracle DB",
  },
];

export default function App() {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - 2022;

  return (
    <main className="portfolio">
      <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="#" className="logo">
            Dasun Jayanga
          </a>

          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

            <a className="cv-btn" href="/Dasun_Jayanga_CV.pdf" download>
              Download CV
            </a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-content"
        >
          <span className="badge">Senior Software Engineer</span>

          <h1>
            Building enterprise-grade <span>front-end applications</span> for
            banking, CMS, and SaaS platforms.
          </h1>

          <p>
            Front-End Engineer with {experienceYears}+ years of experience in React.js,
            TypeScript, Redux, Angular, Ant Design, API integration, reusable
            component architecture, and performance-focused UI development.
          </p>

          <div className="hero-actions">
            <a className="primary-btn" href="mailto:dasunjayangadj@gmail.com">
              Hire Me
            </a>
            <a
              className="secondary-btn"
              href="https://linkedin.com/in/dasunjayanga"
              target="_blank"
            >
              LinkedIn <ExternalLink size={16} />
            </a>
          </div>

          <div className="quick-info">
            <span>
              <MapPin size={16} /> Galle, Sri Lanka
            </span>
            <span>Open to Relocation & Remote Work</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="image-wrap"
        >
          <div className="image-card">
            <img src={profileImage} alt="Dasun Jayanga" />
          </div>

          <div className="floating-card">
            <Briefcase size={18} />
            <div>
              <strong>DBS Bank Projects</strong>
              <p>CMS & Public UI Development</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="stats">
        <div>
          <strong>{experienceYears}+</strong>
          <span>Years Experience</span>
        </div>
        <div>
          <strong>Banking</strong>
          <span>Enterprise Domain</span>
        </div>
        <div>
          <strong>React + TS</strong>
          <span>Main Stack</span>
        </div>
        <div>
          <strong>CMS</strong>
          <span>Platform Experience</span>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <Code2 />
          <h2>Core Expertise</h2>
        </div>

        <div className="expertise-grid">
          <div className="expertise-card">
            <Layers />
            <h3>Enterprise Front-End Engineering</h3>
            <p>
              Building scalable interfaces, reusable UI components, and
              maintainable front-end architectures for enterprise systems.
            </p>
          </div>

          <div className="expertise-card">
            <Briefcase />
            <h3>Banking & CMS Platforms</h3>
            <p>
              Experience in internal CMS systems and public-facing banking web
              applications through DBS Bank project contributions.
            </p>
          </div>

          <div className="expertise-card">
            <Code2 />
            <h3>React Ecosystem</h3>
            <p>
              Strong experience with React.js, TypeScript, Redux, Ant Design,
              API integration, validations, and performance-focused UI.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="section-title">
          <Briefcase />
          <h2>Professional Experience</h2>
        </div>

        <div className="timeline">
          {experiences.map((item, index) => (
            <motion.div
              key={item.role + item.period}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="timeline-item"
            >
              <div className="timeline-dot" />
              <div className="timeline-card">
                <span>{item.period}</span>
                <h3>{item.role}</h3>
                <h4>{item.company}</h4>
                <p>{item.desc}</p>
                <small>{item.stack}</small>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <Code2 />
          <h2>Technical Skills</h2>
        </div>

        <div className="skills-grid">
          {Object.entries(skills).map(([group, values]) => (
            <div className="skill-card" key={group}>
              <h3>{group}</h3>
              <div>
                {values.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-title">
          <Layers />
          <h2>Selected Projects</h2>
        </div>

        <div className="project-grid">
          <div className="project-card">
            <span>Learning Platform</span>
            <h3>Smart ICT Zone LMS</h3>
            <p>
              Web-based Learning Management System for ICT students featuring
              course delivery, student dashboards, payment handling, and
              role-based access management.
            </p>
            <a href="https://smartictzone.com" target="_blank">
              Visit Website <ExternalLink size={16} />
            </a>
          </div>

          <div className="project-card">
            <span>Business Application</span>
            <h3>React CRM Application</h3>
            <p>
              Customer and order management system with Firebase integration,
              reusable components, scalable structure, and business workflow
              management.
            </p>
          </div>
        </div>
      </section>

      <section className="section education">
        <div className="section-title">
          <GraduationCap />
          <h2>Education</h2>
        </div>

        <div className="education-card">
          <h3>Bachelor of Industrial Information Technology Honors</h3>
          <p>Uva Wellassa University of Sri Lanka</p>
          <span>2022</span>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Let's build something meaningful.</h2>
        <p>
          Available for front-end engineering, React development, enterprise
          application development, and remote opportunities.
        </p>

        <div className="contact-links">
          <a href="mailto:dasunjayangadj@gmail.com">
            <Mail size={18} /> Email
          </a>
          <a href="tel:+94776951037">
            <Phone size={18} /> Call
          </a>
          <a href="https://linkedin.com/in/dasunjayanga" target="_blank">
            LinkedIn
          </a>
          <a href="https://github.com/DJayanga" target="_blank">
            GitHub
          </a>
        </div>
      </section>
      <footer className="footer">
        © {currentYear} Dasun Jayanga. All Rights Reserved.
      </footer>
    </main>
  );
}