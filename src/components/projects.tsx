"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Project = {
  name: string;
  imgSrc: string;
  description: string;
};

export default function Projects() {
  const projects: Project[] = [
    { name: "Centaur", imgSrc: "/images/centaur.png", description: "A healthcare management system." },
    { name: "AfroRank", imgSrc: "/images/afrorank.png", description: "A college ranking app for African students." },
    { name: "Pump'd Fitness", imgSrc: "/images/fitness-webapp.png", description: "A fitness tracking app." },
    { name: "Friendly Foodie", imgSrc: "/images/friendlyfoodie.png", description: "A kitchen inventory management tool." },
    { name: "Banking System", imgSrc: "/images/banking-system.png", description: "A secure online banking platform." },
  ];

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(selectedProject?.name === project.name ? null : project);
  };

  return (
    <section id="projects" className="w-full bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        
        {/* Container with hidden scrollbar */}
        <div className="relative w-full">
          <div 
            className="flex gap-4 overflow-x-auto pb-4 scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`flex-shrink-0 w-[280px] bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl cursor-pointer
                  ${selectedProject?.name === project.name ? 'ring-2 ring-blue-500' : ''}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative h-[160px] w-full bg-gray-700">
                  <Image
                    src={project.imgSrc}
                    alt={project.name}
                    fill
                    className="object-cover"
                    sizes="280px"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 truncate">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Project Details Section */}
        <AnimatePresence mode="wait">
          {selectedProject && (
            <motion.div
              key={selectedProject.name}
              className="mt-8 p-6 bg-gray-900 rounded-lg shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-4">
                {selectedProject.name}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {selectedProject.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}