"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Organization = {
  name: string;
  imgSrc: string;
  description: string;
};

export default function Organizations() {
  const organizations: Organization[] = [
    { name: "Code2040", imgSrc: "/images/code2040.png", description: "Advancing diversity in the tech industry." },
    { name: "ColorStack", imgSrc: "/images/colorstack.png", description: "Community for Black and Latinx CS students." },
    { name: "Rewriting the Code", imgSrc: "/images/rewriting-the-code.png", description: "Empowering women in tech through support and resources." },
    { name: "CodePath", imgSrc: "/images/codepath.png", description: "Nonprofit providing free tech education courses." },
    { name: "NSBE", imgSrc: "/images/nsbe.png", description: "National Society of Black Engineers." },
    { name: "AnitaBorg", imgSrc: "/images/anitaborg.png", description: "Promoting gender equality in tech fields." },
  ];

  return (
    <section id="organizations" className="w-full bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Organizations</h2>
        
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
            {organizations.map((org, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[280px] bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative h-[160px] w-full bg-gray-700">
                  <Image
                    src={org.imgSrc}
                    alt={org.name}
                    fill
                    className="object-contain p-4"
                    sizes="280px"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 truncate">
                    {org.name}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2">
                    {org.description}
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