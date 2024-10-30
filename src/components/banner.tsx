"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Banner() {
  const name = "Kelechi Madueke".split("");

  return (
    <section className="min-h-[80vh] w-full bg-black text-white flex items-center justify-center px-4 pt-0 pb-12">
      <div className="max-w-4xl w-full mx-auto">
        {/* Name Animation Container */}
        <div className="relative flex flex-col items-center mb-8">
          {/* K Animation */}
          <div className="relative h-24 sm:h-32 overflow-hidden">
            <motion.span
              initial={{ x: 0, opacity: 1 }}
              animate={{ x: "-50vw" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute text-5xl sm:text-8xl font-bold text-red-600"
              style={{ left: "50%", transform: "translateX(-50%)" }}
            >
              K
            </motion.span>
          </div>

          {/* Name Animation */}
          <div className="flex justify-center">
            {name.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="text-4xl sm:text-6xl md:text-8xl font-bold text-red-600"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Subtitle and Profile Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="flex flex-col items-center space-y-6"
        >
          {/* Role Title */}
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 text-center">
            Full-Stack Developer
          </p>

          {/* Profile Content */}
          <div className="flex flex-col items-center space-y-6">
            {/* Profile Picture */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden">
              <Image
                src="/images/kelechi.png"
                alt="Kelechi Madueke"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Bio Text */}
            <p className="text-base sm:text-lg text-gray-300 max-w-md text-center px-4">
              Hi, I&apos;m Kacy Madueke! I&apos;m a passionate Full-Stack Developer with experience 
              in building impactful applications that bridge user experience and technical 
              functionality. I love learning and working with new technologies.
            </p>

          </div>

          {/* Resume Button */}
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 3, duration: 0.8 }}
  className="pt-4 flex gap-4 flex-wrap justify-center"
>
  <Link 
    href="/kelechi_madueke_2026.pdf" 
    target="_blank"
    className="inline-block px-6 py-3 text-base sm:text-lg font-medium text-white bg-red-600 rounded-lg 
      hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 
      focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
  >
    See My Resume
  </Link>
  
  <Link 
    href="mailto:kacymaduk@gmail.com" 
    className="inline-block px-6 py-3 text-base sm:text-lg font-medium text-red-600 border-2 border-red-600 
      bg-black rounded-lg hover:bg-red-600 hover:text-white transition-all duration-200 
      focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
  >
    Email Me
  </Link>
</motion.div>
        </motion.div>
      </div>
    </section>
  );
}