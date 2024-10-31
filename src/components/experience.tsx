"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Experience = {
  company: string;
  location: string;
  role: string;
  duration: string;
  description: string[];
  imgSrc: string;
};

export default function Experience() {
  const experiences: Experience[] = [
    {
      company: "Penn Medicine",
      location: "Philadelphia, PA",
      role: "Software Engineer",
      duration: "July – September 2024",
      description: [
        "Developed and documented web and database code using PHP, JavaScript, XML, JSON, and SQL to enhance a gamification platform aimed at improving radiology residents' understanding of image interpretation.",
        "Collaborated with radiologists and clinicians to design and iteratively refine UI and UX, optimizing the user experience and improving user interface features.",
        "Participated in project-related events such as platform trials, academic conferences, and radiologist shadowing, contributing to academic articles and presenting research findings.",
      ],
      imgSrc: "/images/centaur.png",
    },
    {
      company: "Solvay Specialty Polymers",
      location: "West Deptford, NJ",
      role: "Process Engineer",
      duration: "April – June 2024",
      description: [
        "Supported projects and operations through data gathering, analysis, and implementation of changes in a fluoropolymer manufacturing facility using PI technologies by OSISoft.",
        "Updated the Distribution Control Systems and Plant Information screens, supporting the conversion of control systems and editing of pre-existing plant structures on the database systems.",
        "Performed plant instrument troubleshooting procedures by analyzing trends of tags in the plant.",
      ],
      imgSrc: "/images/syensqo.png",
    },
    {
      company: "Morgan Lewis & Bockius",
      location: "Philadelphia, PA",
      role: "Software Developer",
      duration: "March – September 2023",
      description: [
        "Spearheaded the development of the Early Adopter App, an initiative to automate software adoption across the firm, enhancing workflow efficiency and user experience.",
        "Conducted comprehensive testing and quality assurance, utilizing analytical skills to identify performance challenges and streamline application workflows.",
      ],
      imgSrc: "/images/morgan-lewis.png",
    },
    {
      company: "Drexel Dragon Card Office",
      location: "Philadelphia, PA",
      role: "Office Representative",
      duration: "October 2022 - Present",
      description: [
        "Maintained high-level customer service with over 30 faculty members daily while executing administrative tasks, leading to an increase in customer satisfaction.",
        "Streamlined the ID card printing process in under 3 minutes, facilitating quicker access to essential school utilities for students.",
        "Enhanced office efficiency by executing clerical tasks such as mail handling and appointment scheduling.",
      ],
      imgSrc: "/images/dragon-card.png",
    },
    {
      company: "NAOIP Lebow Bridge",
      location: "Philadelphia, PA",
      role: "Assistant Lead Ambassador",
      duration: "October 2022 - Present",
      description: [
        "Advised 27 high school students on how to effectively plan and present their case study pitch for a potential building design.",
        "Collaborated in the orchestration of the summer program by planning and organizing a case study between high school students and Brandywine Apartments Realty Trust regarding a potential building design.",
        "Worked with industry leaders and professionals concerning the Commercial Real Estate market.",
      ],
      imgSrc: "/images/naiop.png",
    },
    {
      company: "Indey Groups",
      location: "Victoria Island, Nigeria",
      role: "Receptionist",
      duration: "June 2021 - October 2021",
      description: [
        "Utilized my Excel skills to handle and organize the company's data, making it accessible and readable to individuals.",
        "Wrote mail on behalf of the corporation and assisted with the day-to-day running of the firm, which made for an effective work system.",
        "Communicated with customers and assisted in finding solutions to any issues they encountered, leading to great customer service.",
      ],
      imgSrc: "/images/indev.png",
    },
  ];

  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  const handleExperienceClick = (experience: Experience) => {
    setSelectedExperience(experience);
  };

  return (
    <section id="experience" className="w-full bg-black text-white py-8">
        <h2 className="text-2xl font-semibold mb-6">Where I&apos;ve Worked...</h2>
        
        {/* Horizontal Scroll Container */}
        <div className="relative w-full">
          <div 
            className="flex gap-6 overflow-x-scroll pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                className="relative flex-shrink-0 w-[250px] h-[140px] bg-gray-800 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => handleExperienceClick(experience)}
              >
                {/* Image with Overlay */}
                <div className="relative h-full w-full">
                  <Image
                    src={experience.imgSrc}
                    alt={experience.company}
                    fill
                    className="object-cover transition-transform duration-300 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-lg font-bold text-white truncate">{experience.company}</h3>
                    <p className="text-sm text-gray-300">{experience.role}</p>
                    <p className="text-xs text-gray-400">{experience.duration}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Popup Modal for Job Details */}
        <AnimatePresence>
          {selectedExperience && (
            <motion.div
              key="details"
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
            >
                <div className="rounded-lg p-6 max-w-lg w-full relative" style={{ backgroundColor: '#181818' }}>
<button
                  className="absolute top-4 right-4 text-white text-xl"
                  onClick={() => setSelectedExperience(null)}
                >
                  &times;
                </button>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold">{selectedExperience.company}</h3>
                  <p className="text-lg text-gray-300">
                    {selectedExperience.role} - {selectedExperience.location}
                  </p>
                  <p className="text-sm text-gray-400">{selectedExperience.duration}</p>
                </div>
                <ul className="space-y-2 list-disc pl-5 text-gray-300">
                  {selectedExperience.description.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </section>
  );
}
