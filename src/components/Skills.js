"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import Tech from "./Tech"

export default function Skills() {
  const skillsRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      ".skill-category",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".skills-section",
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      },
    )

    gsap.fromTo(
      ".skill-item",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 80%",
        },
      },
    )
  }, [])

  return (
    <section id="skills" className="skills-section" ref={skillsRef}>
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Expertise across multiple domains and technologies</p>
        </motion.div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="summary-stats">
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Major Projects</span>
            </div>
          </div>
        </motion.div>

        {/* Removed ball section below technical skills */}
      </div>
    </section>
  )
}
