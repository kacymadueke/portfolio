"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Technology = {
  name: string;
  imgSrc: string;
  description: string;
};

export default function Technologies() {
  const technologies: Technology[] = [
    { name: "React", imgSrc: "/images/react.png", description: "JavaScript library for building user interfaces." },
    { name: "Node.js", imgSrc: "/images/nodejs.png", description: "JavaScript runtime for server-side development." },
    { name: "Python", imgSrc: "/images/python.png", description: "Programming language for various applications." },
    { name: "Object-Oriented Programming", imgSrc: "/images/oop.png", description: "Programming paradigm based on objects." },
    { name: "Data Structures & Algorithms", imgSrc: "/images/data-structures.png", description: "Core concepts for organizing and manipulating data." },
    { name: "HTML & CSS", imgSrc: "/images/html-css.png", description: "Standard markup and styling languages for web pages." },
    { name: "JavaScript", imgSrc: "/images/javascript.png", description: "Programming language for web development." },
    { name: "AWS", imgSrc: "/images/aws.png", description: "Cloud computing services by Amazon." },
    { name: "Microsoft Services", imgSrc: "/images/microsoft.png", description: "Suite of applications and cloud services." },
    { name: "Swift", imgSrc: "/images/swift.png", description: "Programming language for iOS development." },
    { name: "Java", imgSrc: "/images/banking-system.png", description: "Widely-used programming language for various applications." },
    { name: "C, C#", imgSrc: "/images/c-sharp.png", description: "Programming languages for systems and app development." },
    { name: "SQL", imgSrc: "/images/sql.png", description: "Language for managing and querying databases." },
  ];  const [selectedTechnology, setSelectedTechnology] = useState<Technology | null>(null);

  const handleTechnologyClick = (tech: Technology) => {
    setSelectedTechnology(tech);
  };

  return (
    <section id="technologies" className="w-full bg-black text-white py-8">
      <h2 className="text-2xl font-semibold mb-6">Technologies</h2>

      <div className="relative w-full">
        <div 
          className="flex gap-6 overflow-x-scroll pb-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="relative flex-shrink-0 w-[250px] h-[140px] bg-gray-800 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => handleTechnologyClick(tech)}
            >
              <div className="relative h-full w-full">
                <Image
                  src={tech.imgSrc}
                  alt={tech.name}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-lg font-bold text-white truncate">{tech.name}</h3>
                  <p className="text-sm text-gray-300 line-clamp-2">{tech.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedTechnology && (
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
                onClick={() => setSelectedTechnology(null)}
              >
                &times;
              </button>
              <div className="mb-4">
                <h3 className="text-2xl font-bold">{selectedTechnology.name}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {selectedTechnology.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
