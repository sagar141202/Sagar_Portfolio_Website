"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"

export default function Experience() {
  const experienceRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      ".timeline-item",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".experience-section",
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  const experiences = [
    {
      title: "Summer Intern",
      company: "SEG Automotive India Private Limited",
      location: "Bengaluru, Karnataka",
      period: "June 2025 – Present",
      description: [
        "Building real-time front-end dashboards using React.js and Tailwind CSS to interface with ESP32 microcontroller data",
        "Developed visualizations for dynamic CAN messages sent from ESP32 devices, optimized for performance and responsiveness",
        "Integrated WebSocket-based communication for real-time telemetry monitoring",
      ],
      current: true,
    },
    {
      title: "Summer Intern",
      company: "Robert BOSCH Automotive Electronics India Private Limited",
      location: "Bangalore, Karnataka",
      period: "June 2024 – July 2024",
      description: [
        "Coordinated weekly stakeholder meetings, reducing project revisions by 30% and achieving alignment with goals",
        "Delivered a final product model with 95% precision, contributing to a 20% cost reduction",
        "Collaborated across teams, completing the project two weeks early with 98% quality compliance",
      ],
      current: false,
    },
  ]

  const education = [
    {
      title: "Bachelor of Technology",
      institution: "National Institute of Technology Kurukshetra",
      field: "Electronics and Communication Engineering",
      period: "2022 - 2026",
      grade: "CGPA: 8.08",
    },
    {
      title: "Pre-University Education",
      institution: "NTR Pre-University College, Bengaluru",
      field: "Science Stream",
      period: "2020 - 2022",
      grade: "Percentage: 91.5%",
    },
  ]

  return (
    <section id="experience" className="experience-section" ref={experienceRef}>
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="gradient-text">Experience & Education</span>
          </h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="experience-content">
          <div className="experience-column">
            <h3 className="column-title">Professional Experience</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`timeline-item ${exp.current ? "current" : ""} interactive`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="timeline-marker">
                    <div className="marker-dot"></div>
                    <div className="marker-glow"></div>
                  </div>

                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4 className="timeline-title">{exp.title}</h4>
                      <span className="timeline-period">{exp.period}</span>
                    </div>

                    <div className="timeline-company">
                      <span className="company-name">{exp.company}</span>
                      <span className="company-location">{exp.location}</span>
                    </div>

                    <ul className="timeline-description">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>

                    {exp.current && <div className="current-badge">Current</div>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="experience-column">
            <h3 className="column-title">Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <motion.div key={index} className="timeline-item interactive" whileHover={{ scale: 1.02 }}>
                  <div className="timeline-marker">
                    <div className="marker-dot"></div>
                    <div className="marker-glow"></div>
                  </div>

                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4 className="timeline-title">{edu.title}</h4>
                      <span className="timeline-period">{edu.period}</span>
                    </div>

                    <div className="timeline-company">
                      <span className="company-name">{edu.institution}</span>
                      <span className="company-location">{edu.field}</span>
                    </div>

                    <div className="timeline-grade">{edu.grade}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
