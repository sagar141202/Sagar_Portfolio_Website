"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"

export default function About() {
  const aboutRef = useRef(null)

  useEffect(() => {
    // Disable animations on mobile for performance
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
      gsap.fromTo(
        ".about-content",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".about-section",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      gsap.fromTo(
        ".about-stats",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".about-stats",
            start: "top 80%",
          },
        },
      )
    }
  }, [])

  const stats = [
    { number: "8.23", label: "CGPA", suffix: "" },
    { number: "2+", label: "Internships", suffix: "" },
    { number: "5+", label: "Projects", suffix: "" },
    { number: "91.5", label: "PU %", suffix: "%" },
  ]

  return (
    <section id="about" className="about-section" ref={aboutRef}>
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="about-content">
          <div className="about-text">
            <motion.p
              className="about-paragraph"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I&apos;m a passionate Electronics & Communication Engineering student at NIT Kurukshetra with a strong
              foundation in full-stack development and emerging technologies. My journey spans from embedded systems to
              modern web applications, always driven by curiosity and innovation.
            </motion.p>

            <motion.p
              className="about-paragraph"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              With hands-on experience at industry leaders like BOSCH and SEG Automotive, I&apos;ve developed expertise in
              React.js, Python, and IoT systems. I thrive on creating solutions that bridge the gap between hardware and
              software, bringing ideas to life through code and creativity.
            </motion.p>

            <motion.div
              className="about-highlights"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="highlight-item">
                <span className="highlight-icon">🎓</span>
                <span>NIT Kurukshetra Student</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🛠️</span>
                <span>Industry Experience</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🚀</span>
                <span>Innovation Enthusiast</span>
              </div>
            </motion.div>
          </div>

          <div className="about-stats-container">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="about-stats interactive"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="stat-number">
                  {stat.number}
                  <span className="stat-suffix">{stat.suffix}</span>
                </div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-glow"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
