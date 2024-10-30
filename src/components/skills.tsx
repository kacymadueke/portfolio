"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Skill = {
  name: string;
  imgSrc: string;
  description: string;
};

export default function Skills() {
  const skills: Skill[] = [
    { name: "Communication Skills", imgSrc: "/images/communication-skills.png", description: "Ability to convey ideas clearly and effectively." },
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

  return (
    <section id="skills" className="w-full bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        
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
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[280px] bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative h-[160px] w-full bg-gray-700">
                  <Image
                    src={skill.imgSrc}
                    alt={skill.name}
                    fill
                    className="object-contain p-4"
                    sizes="280px"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 truncate">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}