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
      title: "FarmTrade Model",
      description:
        "Full-stack platform connecting 150+ farmers with investors, achieving 200% increase in engagement with advanced authentication and optimized UI.",
      technologies: ["JavaScript", "HTML", "Flask", "ReactJS", "Appwrite"],
      features: ["Real-time Communication", "Secure Authentication", "Investment Tracking", "Farmer Dashboard"],
      link: "#",
      github: "#",
      image: "/farmtrade.png",
      category: "Full Stack",
    },
    {
      title: "Hand Gesture Control Game",
      description:
        "Innovative hand gesture recognition system with 50% faster response time and 30% better interaction accuracy using computer vision.",
      technologies: ["Python", "OpenCV", "Machine Learning"],
      features: ["Real-time Recognition", "Gesture Mapping", "Game Integration", "Performance Optimization"],
      link: "#",
      github: "#",
      image: "/handgesturecontrolgame.png",
      category: "AI/ML",
    },
    {
      title: "Complete Fruits Ecommerce",
      description:
        "Modern ecommerce platform increasing fruit sales by 30% in first month with improved mobile retention by 30%.",
      technologies: ["ReactJS", "Framer Motion", "CSS3"],
      features: ["Responsive Design", "Smooth Animations", "Shopping Cart", "Payment Integration"],
      link: "#",
      github: "#",
      image: "/placeholder.svg?height=300&width=400",
      category: "E-commerce",
    },
    {
      title: "Temperature Converter",
      description:
        "React Native app supporting 4+ temperature scales with 15% accuracy boost and 20% faster conversions.",
      technologies: ["React Native", "JavaScript", "Mobile Development"],
      features: ["Multi-scale Support", "Real-time Conversion", "Intuitive UI", "Cross-platform"],
      link: "#",
      github: "#",
      image: "/temperatureconverter.png",
      category: "Mobile",
    },
    {
      title: "3D CHARCON Visualization",
      description:
        "Advanced 3D product plant visualization improving accuracy by 60% and reducing design cycle by 25%.",
      technologies: ["3D Modeling", "WebGL", "Three.js"],
      features: ["Interactive 3D Models", "Real-time Rendering", "Product Visualization", "Performance Optimization"],
      link: "#",
      github: "#",
      image: "/charcon.png",
      category: "3D/Visualization",
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
                    <motion.a
                      href={project.link}
                      className="project-link interactive"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Live Demo</span>
                    </motion.a>
                    <motion.a
                      href={project.github}
                      className="project-link interactive"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>GitHub</span>
                    </motion.a>
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
