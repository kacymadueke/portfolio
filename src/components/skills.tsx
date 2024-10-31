"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Skill = {
  name: string;
  imgSrc: string;
  description: string;
};

export default function Skills() {
  const skills: Skill[] = [
    { name: "Communication Skills", imgSrc: "/images/communication.png", description: "Ability to convey ideas clearly and effectively." },
    { name: "Professionalism", imgSrc: "/images/professionalism.png", description: "Maintaining a high standard of conduct and ethics." },
    { name: "Punctuality and Time Management", imgSrc: "/images/time-management.png", description: "Efficient use of time to maximize productivity." },
    { name: "Leadership", imgSrc: "/images/leadership.png", description: "Guiding and motivating teams toward a common goal." },
    { name: "Organizational Skills", imgSrc: "/images/organizational-skills.png", description: "Keeping tasks and projects well-structured." },
    { name: "Problem-Solving", imgSrc: "/images/problem-solving.png", description: "Finding creative and effective solutions to challenges." },
    { name: "Flexibility", imgSrc: "/images/flexibility.png", description: "Adaptability to changing circumstances and requirements." },
    { name: "Collaboration", imgSrc: "/images/collaboration.png", description: "Working effectively in a team environment." },
    { name: "Customer Service", imgSrc: "/images/customer-service.png", description: "Ensuring a positive experience for customers." },
    { name: "Attention to Detail", imgSrc: "/images/attention-to-detail.png", description: "Careful and thorough approach to tasks." },
    { name: "Multi-tasking", imgSrc: "/images/multi-tasking.png", description: "Managing multiple responsibilities effectively." },
    { name: "Sales and Marketing", imgSrc: "/images/sales-marketing.png", description: "Promoting products and services effectively." },
  ];

  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill);
  };

  return (
    <section id="skills" className="w-full bg-black text-white py-8">
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>

      <div className="relative w-full">
        <div 
          className="flex gap-6 overflow-x-scroll pb-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative flex-shrink-0 w-[250px] h-[140px] bg-gray-800 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => handleSkillClick(skill)}
            >
              <div className="relative h-full w-full">
                <Image
                  src={skill.imgSrc}
                  alt={skill.name}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-lg font-bold text-white truncate">{skill.name}</h3>
                  <p className="text-sm text-gray-300 line-clamp-2">{skill.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedSkill && (
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
                onClick={() => setSelectedSkill(null)}
              >
                &times;
              </button>
              <div className="mb-4">
                <h3 className="text-2xl font-bold">{selectedSkill.name}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {selectedSkill.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
