import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  const renderIcon = () => {
    if (experience.company === "SEG Automotive India Private Limited") {
      return <img src="/seg_logo.svg" alt="SEG Logo" className="w-10 h-10 object-contain" />;
    } else if (
      experience.company === "Robert BOSCH Automotive Electronics India Private Limited"
    ) {
      return <img src="/bosch_logo.svg" alt="Bosch Logo" className="w-10 h-10 object-contain" />;
      } else if (
        experience.institution === "National Institute of Technology Kurukshetra"
      ) {
        return <img src="/nit_logo.png" alt="NIT Logo" className="w-10 h-10 object-contain border border-white" />;
      } else {
      return (
        <span className="text-white font-bold">
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
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company || experience.institution}
        </p>
        {experience.location && (
          <p className="text-secondary text-[14px]">{experience.location}</p>
        )}
        {experience.field && (
          <p className="text-secondary text-[14px]">{experience.field}</p>
        )}
      </div>

      {experience.description && (
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.description.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      )}

      {experience.grade && (
        <p className="mt-5 text-white-100 text-[14px] pl-1 tracking-wider">
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
  ];

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
  ];

  return (
    <div id="experience">
      <motion.div variants={textVariant()}>
        <p className="text-center text-gray-400 text-sm mb-2">
          What I have done so far
        </p>
        <h2 className="text-center text-3xl font-bold mb-10">
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
            <ExperienceCard key={`education-${index}`} experience={edu} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
