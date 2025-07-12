"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"

export default function Projects() {
  const projectsRef = useRef(null)
  const [hoveredProject, setHoveredProject] = useState(null)

  useEffect(() => {
    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 50, rotationX: 15 },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".projects-section",
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  const projects = [
    {
      title: "WebSocket Integrated Dashboard",
      description:
        "Real-time telemetry dashboard using React.js with WebSocket and CAN communication from ESP32. Features dynamic UI and graphing modules for monitoring sensor data and system alerts.",
      technologies: ["React.js", "WebSocket", "CAN", "Arduino", "Telemetry"],
      features: ["Real-time Monitoring", "Dynamic UI", "Graphing Modules", "Scalable Architecture"],
      link: "#",
      github: "https://github.com/maddisagar/Dynamic_Message_Integrated",
      image: "/websocketintegrateddashboard.png",
      category: "Full Stack",
      showGithub: true,
    },
    {
      title: "FarmTrade Model",
      description:
        "Full-stack platform connecting 150+ farmers with investors, achieving 200% increase in engagement with advanced authentication and optimized UI.",
      technologies: ["JavaScript", "HTML", "Flask", "ReactJS", "Appwrite"],
      features: ["Real-time Communication", "Secure Authentication", "Investment Tracking", "Farmer Dashboard"],
      link: "#",
      github: "https://github.com/DeependraVarshney/farmtrade2",
      image: "/farmtrade.png",
      category: "Full Stack",
      showGithub: true,
    },
    {
      title: "Hand Gesture Control Game",
      description:
        "Innovative hand gesture recognition system with 50% faster response time and 30% better interaction accuracy using computer vision.",
      technologies: ["Python", "OpenCV", "Machine Learning"],
      features: ["Real-time Recognition", "Gesture Mapping", "Game Integration", "Performance Optimization"],
      link: "#",
      github: "https://github.com/Sagarmaddi1412/Hand-Gesture-Controlled-Game",
      image: "/handgesturecontrolgame.png",
      category: "AI/ML",
      showGithub: true,
    },
    {
      title: "Complete Fruits Ecommerce",
      description:
        "Modern ecommerce platform increasing fruit sales by 30% in first month with improved mobile retention by 30%.",
      technologies: ["ReactJS", "Framer Motion", "CSS3"],
      features: ["Responsive Design", "Smooth Animations", "Shopping Cart", "Payment Integration"],
      link: "#",
      github: "https://github.com/example/complete-fruits-ecommerce",
      image: "/placeholder.svg?height=300&width=400",
      category: "E-commerce",
      showGithub: false,
    },
    {
      title: "Temperature Converter",
      description:
        "React Native app supporting 4+ temperature scales with 15% accuracy boost and 20% faster conversions.",
      technologies: ["React Native", "JavaScript", "Mobile Development"],
      features: ["Multi-scale Support", "Real-time Conversion", "Intuitive UI", "Cross-platform"],
      link: "#",
      github: "https://github.com/example/temperature-converter",
      image: "/temperatureconverter.png",
      category: "Mobile",
      showGithub: false,
    },
    {
      title: "3D CHARCON Visualization",
      description:
        "Advanced 3D product plant visualization improving accuracy by 60% and reducing design cycle by 25%.",
      technologies: ["3D Modeling", "WebGL", "Three.js"],
      features: ["Interactive 3D Models", "Real-time Rendering", "Product Visualization", "Performance Optimization"],
      link: "#",
      github: "https://github.com/example/3d-charcon-visualization",
      image: "/charcon.png",
      category: "3D/Visualization",
      showGithub: false,
    },
  ]

  return (
    <section id="projects" className="projects-section" ref={projectsRef}>
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Showcasing innovative solutions and creative implementations</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card interactive"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-image-container">
                <img src={project.image || "/placeholder.svg"} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.showGithub && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link interactive"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>GitHub</span>
                      </motion.a>
                    )}
                  </div>
                </div>
                <div className="project-category">{project.category}</div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  {project.features.map((feature, i) => (
                    <span key={i} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-glow"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
