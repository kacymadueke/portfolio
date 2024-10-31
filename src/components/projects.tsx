"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Project = {
  name: string;
  imgSrc: string;
  description: string;
  duration: string;
  role: string;
  details: string[];
};

export default function Projects() {
  const projects: Project[] = [
    {
      name: "AfroRank",
      imgSrc: "/images/afrorank.png",
      description: "A college ranking app for African students.",
      duration: "April - May 2024",
      role: "Software Developer",
      details: [
        "Developed AfroRank, a web application for African students to find and review universities in the U.S., using React for the frontend and Node.js with Express for the backend.",
        "Implemented secure user authentication and authorization with JWT and bcrypt for password hashing.",
        "Utilized MongoDB as the database to store user data, using Mongoose for database modeling and queries.",
        "Enhanced user experience and interface design with Tailwind CSS for responsive and modern styling.",
        "Configured project setup and development environment with tools such as Create React App, craco, and Postman for API testing and debugging.",
      ],
    },
    {
      name: "Centaur",
      imgSrc: "/images/centaur.png",
      description: "A healthcare management system.",
      duration: "July - September 2024",
      role: "Full-Stack and Software Engineer",
      details: [
        "Modernized Centaur, a medical education platform, by migrating the frontend from PHP to React, improving user interface and interactivity for medical trainees and professionals.",
        "Integrated existing PHP backend with the new React frontend, ensuring seamless data flow and maintaining compatibility with the SQL Server database.",
        "Utilized React Router for client-side routing and Tailwind CSS for responsive design enhancing user experience.",
        "Collaborated with backend developers to refine API endpoints for data retrieval and submission for user modules.",
      ],
    },
    {
      name: "Friendly Foodie",
      imgSrc: "/images/friendlyfoodie.png",
      description: "A kitchen inventory management tool.",
      duration: "January - March 2023",
      role: "UI/UX and Full-Stack Developer",
      details: [
        "Led UI/UX design and full-stack development for Friendly Foodie, a kitchen inventory management platform, enhancing user experience in tracking and managing kitchen essentials.",
        "Innovated on back-end infrastructure by adapting open-source solutions for a comprehensive user account and management system.",
        "Utilized HTML, CSS, JavaScript, and GitHub for responsive design and seamless version control.",
      ],
    },
    {
      name: "Banking System",
      imgSrc: "/images/banking-system.png",
      description: "A secure online banking platform.",
      duration: "September - December 2023",
      role: "Java Developer",
      details: [
        "Designed and implemented a Java-based banking system to manage customer accounts, including features for account creation, deposits, and withdrawals.",
        "Utilized object-oriented programming principles to ensure scalability and maintainability.",
        "Wrote and carried out tests to validate each banking functionality to ensure the system's operations adhered to predefined specifications.",
      ],
    },
    {
      name: "Pump'd Fitness",
      imgSrc: "/images/fitness-webapp.png",
      description: "A fitness tracking app.",
      duration: "October 2023 - Present",
      role: "Software Developer",
      details: [
        "Developing a fitness app with features like workout tracking, progress visualization, and personalized routines.",
        "Integrating Axios for handling API requests and PostgreSQL for data storage and retrieval.",
        "Building the backend with Express for managing data flow and handling user-specific data.",
      ],
    },
  ];

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(selectedProject?.name === project.name ? null : project);
  };

  return (
    <section id="projects" className="w-full bg-black text-white py-8">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>

      {/* Horizontal Scroll Container */}
      <div className="relative w-full">
        <div
          className="flex gap-6 overflow-x-scroll pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative flex-shrink-0 w-[250px] h-[140px] bg-gray-800 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              {/* Image with Overlay */}
              <div className="relative h-full w-full">
                <Image
                  src={project.imgSrc}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-lg font-bold text-white truncate">{project.name}</h3>
                  <p className="text-sm text-gray-300 line-clamp-2">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup Modal for Project Details */}
      <AnimatePresence>
        {selectedProject && (
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
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </button>
              <div className="mb-4">
                <h3 className="text-2xl font-bold">{selectedProject.name}</h3>
                <p className="text-sm text-gray-400">{selectedProject.duration}</p>
                <p className="text-lg text-gray-300 mb-2">{selectedProject.role}</p>
                <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
                <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-300">
                  {selectedProject.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
