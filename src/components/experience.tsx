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
      company: "NAOIP – Lebow Bridge",
      location: "Philadelphia, PA",
      role: "Assistant Lead Ambassador",
      duration: "October 2022 - Present",
      description: [
        "Advised 27 high school students on how to effectively plan and present their case study pitch for a potential building design.",
        "Collaborated in the orchestration of the summer program by planning and organizing a case study between high school students and Brandywine Apartments Realty Trust regarding a potential building design.",
        "Worked with industry leaders and professionals concerning the Commercial Real Estate market.",
      ],
      imgSrc: "/images/naiop.png", // No image provided, reusing dragon card
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
    setSelectedExperience(selectedExperience?.company === experience.company ? null : experience);
  };

  return (
    <section id="experience" className="w-full bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        
        {/* Container with hidden scrollbar */}
        <div className="relative w-full">
          <div 
            className="flex gap-4 overflow-x-auto pb-4 scroll-smooth"
            style={{
              scrollbarWidth: 'none',  // Firefox
              msOverflowStyle: 'none',  // IE/Edge
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[280px] bg-gray-800 rounded-lg overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                onClick={() => handleExperienceClick(experience)}
              >
                <div className="relative h-[160px] w-full">
                  <Image
                    src={experience.imgSrc}
                    alt={experience.company}
                    fill
                    className="object-cover"
                    sizes="280px"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold truncate">{experience.company}</h3>
                  <p className="text-sm text-gray-400 truncate">{experience.role}</p>
                  <p className="text-sm text-gray-400">{experience.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Details Section */}
        <AnimatePresence>
          {selectedExperience && (
            <motion.div
              key="details"
              className="mt-8 p-6 bg-gray-900 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-2">{selectedExperience.company}</h3>
              <p className="text-lg text-gray-300 mb-2">
                {selectedExperience.role} - {selectedExperience.location}
              </p>
              <p className="text-sm text-gray-400 mb-4">{selectedExperience.duration}</p>
              <ul className="space-y-2 list-disc pl-5">
                {selectedExperience.description.map((bullet, i) => (
                  <li key={i} className="text-gray-300">{bullet}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}