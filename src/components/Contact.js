"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("")

  const formRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("gv1tD_n7b3c1zbYFT") // Replace with your EmailJS public key

    gsap.fromTo(
      ".contact-form",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      },
    )

    gsap.fromTo(
      ".contact-info",
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("")

    try {
      // EmailJS configuration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "sagarmaddi1402@gmail.com", // Your email
      }

      await emailjs.send(
        "service_7nj9wgv", // Replace with your EmailJS service ID
        "template_i4jh15j", // Replace with your EmailJS template ID
        templateParams,
      )

      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Success animation
      gsap.to(".success-message", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
      })
    } catch (error) {
      console.error("Email send failed:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "sagarmaddi1402@gmail.com",
      link: "mailto:sagarmaddi1402@gmail.com",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+91 8310233078",
      link: "tel:+918310233078",
    },
    {
      icon: "🤝",
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://linkedin.com/in/sagar-maddi",
    },
    {
      icon: "💻",
      label: "GitHub",
      value: "View my code",
      link: "https://github.com/sagar141202",
    },
  ]

  return (
    <section id="contact" className="contact-section" ref={contactRef}>
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Let's collaborate and create something amazing together</p>
        </motion.div>

        <div className="contact-content">
          <div className="contact-form-container">
            <motion.form
              ref={formRef}
              className="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="form-group">
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input interactive"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div className="form-group">
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input interactive"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div className="form-group">
                <motion.input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="form-input interactive"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div className="form-group">
                <motion.textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className="form-textarea interactive"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="submit-button interactive"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <div className="button-glow"></div>
              </motion.button>

              {submitStatus === "success" && (
                <motion.div className="success-message" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  ✅ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div className="error-message" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  ❌ Failed to send message. Please try again.
                </motion.div>
              )}
            </motion.form>
          </div>

          <div className="contact-info-container">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="contact-info-title">Let's Connect</h3>
              <p className="contact-info-text">
                I'm always excited to discuss new opportunities, innovative projects, or just have a chat about
                technology and development.
              </p>

              <div className="contact-methods">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    className="contact-method interactive"
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="contact-icon">{info.icon}</span>
                    <div className="contact-details">
                      <span className="contact-label">{info.label}</span>
                      <span className="contact-value">{info.value}</span>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="contact-availability">
                <div className="availability-indicator">
                  <div className="status-dot"></div>
                  <span>Available for new opportunities</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="contact-bg-effects">
        <div className="contact-orb orb-1"></div>
        <div className="contact-orb orb-2"></div>
      </div>
    </section>
  )
}
