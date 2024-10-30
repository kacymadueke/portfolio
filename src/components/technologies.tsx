"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
    { name: "Data Structures & Algorithms", imgSrc: "/images/data-structures-algorithms.png", description: "Core concepts for organizing and manipulating data." },
    { name: "HTML & CSS", imgSrc: "/images/html-css.png", description: "Standard markup and styling languages for web pages." },
    { name: "JavaScript", imgSrc: "/images/javascript.png", description: "Programming language for web development." },
    { name: "AWS", imgSrc: "/images/aws.png", description: "Cloud computing services by Amazon." },
    { name: "Microsoft Services", imgSrc: "/images/microsoft.png", description: "Suite of applications and cloud services." },
    { name: "Swift", imgSrc: "/images/swift.png", description: "Programming language for iOS development." },
    { name: "Java", imgSrc: "/images/java.png", description: "Widely-used programming language for various applications." },
    { name: "C, C#", imgSrc: "/images/c-csharp.png", description: "Programming languages for systems and app development." },
    { name: "SQL", imgSrc: "/images/sql.png", description: "Language for managing and querying databases." },
  ];

  return (
    <section id="technologies" className="w-full bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Technologies</h2>
        
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
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[250px] bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative h-[140px] w-full bg-gray-700">
                  <Image
                    src={tech.imgSrc}
                    alt={tech.name}
                    fill
                    className="object-contain p-4"
                    sizes="250px"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 truncate">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2">
                    {tech.description}
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