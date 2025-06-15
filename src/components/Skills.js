"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"

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

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", level: 90, icon: "🟨" },
        { name: "Python", level: 85, icon: "🐍" },
        { name: "C++", level: 80, icon: "⚡" },
        { name: "C", level: 75, icon: "🔧" },
        { name: "HTML/CSS", level: 95, icon: "🌐" },
        { name: "SQL", level: 70, icon: "🗄️" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js", level: 90, icon: "⚛️" },
        { name: "Flask", level: 75, icon: "🌶️" },
        { name: "React Native", level: 80, icon: "📱" },
        { name: "GSAP", level: 85, icon: "🎬" },
        { name: "Framer Motion", level: 88, icon: "🎭" },
        { name: "TensorFlow", level: 70, icon: "🧠" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 85, icon: "🔀" },
        { name: "VS Code", level: 95, icon: "💻" },
        { name: "OpenCV", level: 75, icon: "👁️" },
        { name: "MATLAB", level: 70, icon: "📊" },
        { name: "Appwrite", level: 80, icon: "🔥" },
        { name: "WebGL", level: 75, icon: "🎮" },
      ],
    },
    {
      title: "Specializations",
      skills: [
        { name: "Full Stack Development", level: 88, icon: "🚀" },
        { name: "UI/UX Design", level: 85, icon: "🎨" },
        { name: "Machine Learning", level: 75, icon: "🤖" },
        { name: "IoT Systems", level: 80, icon: "🌐" },
        { name: "3D Visualization", level: 78, icon: "📐" },
        { name: "Embedded Systems", level: 82, icon: "⚙️" },
      ],
    },
  ]

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

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="category-title">{category.title}</h3>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item interactive"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>

                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                      <div className="skill-glow"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

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
      </div>
    </section>
  )
}
