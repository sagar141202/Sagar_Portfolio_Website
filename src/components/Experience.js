import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, position }) => {
  const renderIcon = () => {
    if (experience.company === "SEG Automotive India Private Limited") {
      return <img src="/seg_logo.svg" alt="SEG Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />;
    } else if (
      experience.company === "Robert BOSCH Automotive Electronics India Private Limited"
    ) {
      return <img src="/bosch_logo.svg" alt="Bosch Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />;
      } else if (
        experience.institution === "National Institute of Technology Kurukshetra"
      ) {
        return <img src="/nit_logo.png" alt="NIT Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain border border-white" />;
      } else if (
        experience.institution === "NTR Pre-University College, Bengaluru"
      ) {
        return <img src="/ntr_pu_college.webp" alt="NTR PU College Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain border border-white" />;
      } else if (
        experience.company === "Outlier (AI Training Platform)"
      ) {
        return <img src="/outlier_logo.svg" alt="Outlier Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />;
      } else {
      return (
        <span className="text-white font-bold text-sm sm:text-base">
          {experience.company
            ? experience.company[0]
            : experience.institution
            ? experience.institution[0]
            : ""}
        </span>
      );
    }
  };

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.period}
      iconStyle={{ background: "#fff" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          {renderIcon()}
        </div>
      }
      position={position}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-white text-xl sm:text-2xl font-bold">{experience.title}</h3>
          <p
            className="text-secondary text-sm sm:text-base font-semibold"
            style={{ margin: 0 }}
          >
            {experience.company || experience.institution}
          </p>
          {experience.location && (
            <p className="text-secondary text-xs sm:text-sm">{experience.location}</p>
          )}
          {experience.field && (
            <p className="text-secondary text-xs sm:text-sm">{experience.field}</p>
          )}
        </div>
        {(experience.company === "SEG Automotive India Private Limited" || experience.company === "Robert BOSCH Automotive Electronics India Private Limited") && (
          <div className="relative w-full">
            <div className="absolute top-0 right-0">
              <button
                onClick={() =>
                  window.open(
                    experience.company === "SEG Automotive India Private Limited"
                      ? 'https://drive.google.com/file/d/1xnndxUzfjaT5SimMIZOywe5UY7FHuDtH/view?usp=drive_link'
                      : 'https://drive.google.com/file/d/1_4GnHQVQiBtIf2oDuXsMAFsWNiA0OUU7/view?usp=drive_link',
                    '_blank'
                  )
                }
                className="flex items-center justify-center gap-2 min-w-[120px] pl-[2px] pr-6 py-2
                           bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 
                           text-white text-sm font-semibold rounded-full shadow-lg 
                           hover:shadow-[0_0_18px_rgba(139,92,246,0.9)] hover:scale-105 
                           transition-transform duration-300"
              >
                <img src="/file.svg" alt="Certificate" className="w-4 h-4" />
                Certificate
              </button>
            </div>
          </div>
        )}
      </div>

      {experience.description && (
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.description.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-xs sm:text-sm pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      )}

      {experience.grade && (
        <p className="mt-5 text-white-100 text-xs sm:text-sm pl-1 tracking-wider">
          {experience.grade}
        </p>
      )}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Summer Intern",
      company: "SEG Automotive India Private Limited",
      location: "Bengaluru, Karnataka",
      period: "June 2025 – July 2025",
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
      {
        title: "Math Expert (Freelance)",
        company: "Outlier (AI Training Platform)",
        location: "Remote",
        period: "2025",
        description: [
          "Contributed to training advanced AI models by evaluating mathematical accuracy and improving reasoning.",
          "Designed and reviewed complex math problems across algebra, calculus, probability, and statistics.",
          "Assessed and ranked AI-generated responses for factual correctness, rigor, and clarity.",
          "Skills: Mathematics, Problem Solving, Analytical Thinking, AI Evaluation"
        ],
        current: false,
      },
  ];

  const education = [
    {
      title: "Bachelor of Technology",
      institution: "National Institute of Technology Kurukshetra",
      field: "Electronics and Communication Engineering",
      period: "2022 - 2026",
      grade: "CGPA: 8.23",
    },
    {
      title: "Pre-University Education",
      institution: "NTR Pre-University College, Bengaluru",
      field: "Science Stream",
      period: "2019 - 2021",
      grade: "Percentage: 91.5%",
    },
  ];

  return (
    <div id="experience" className="px-4 sm:px-10">
      <motion.div variants={textVariant()}>
        <p className="text-center text-gray-400 text-xs sm:text-sm mb-2">
          What I have done so far
        </p>
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-10">
          Work Experience & Education
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
      {education.map((edu, index) => (
        <ExperienceCard
          key={`education-${index}`}
          experience={edu}
          position={edu.title === "Bachelor of Technology" ? "right" : "left"}
        />
      ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
