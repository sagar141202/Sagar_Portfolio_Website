"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"

gsap.registerPlugin(TextPlugin)

export default function Hero() {
  const heroRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.5 })

    tl.fromTo(".hero-title", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
      .fromTo(".hero-subtitle", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
      .fromTo(
        ".hero-description",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.3",
      )
      .fromTo(
        ".hero-cta",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
        "-=0.2",
      )

    // Typing animation
    gsap.to(".typing-text", {
      duration: 3,
      text: "Full Stack Developer & UI/UX Enthusiast",
      ease: "none",
      delay: 3.5,
    })

    // Floating animation for hero elements
    gsap.to(".hero-float", {
      y: -20,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    })
  }, [])

  const scrollToProjects = () => {
    document.querySelector("#projects").scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="hero-section" ref={heroRef}>
      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <h1 className="hero-title">
              <span className="gradient-text">SAGAR</span>
              <br />
              <span className="gradient-text-alt">MADDI</span>
            </h1>

            <div className="hero-subtitle">
              <span className="typing-text"></span>
              <span className="cursor-blink">|</span>
            </div>

            <p className="hero-description">
              Passionate Electronics & Communication Engineering student at NIT Kurukshetra, crafting innovative digital
              experiences with modern web technologies and creative problem-solving.
            </p>

            <div className="hero-cta">
              <motion.button
                className="cta-button interactive"
                onClick={scrollToProjects}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 255, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore My Work</span>
                <div className="button-glow"></div>
              </motion.button>

              <motion.a href="#contact" className="cta-link interactive" whileHover={{ scale: 1.05 }}>
                Get In Touch
              </motion.a>
            </div>
          </motion.div>

          <div className="hero-visual">
            <div className="hero-float">
              <div className="profile-container">
                <div className="profile-glow"></div>
                <div className="profile-image">
                  {/* Replace the placeholder text "SM" with profile image */}
                  <img src="/profile.png" alt="Profile Image" className="profile-img" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <motion.div
            className="scroll-arrow"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            ↓
          </motion.div>
        </div>
      </div>

      <div className="hero-bg-effects">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
    </section>
  )
}
