"use client";

import Link from "next/link";
import Image from "next/image";

export default function Banner() {
  return (
    <section 
      className="relative min-h-screen w-full flex items-center bg-cover bg-center px-6 pt-0 pb-12"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      {/* Dimming overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content Container */}
      <div className="max-w-lg flex flex-col space-y-4 relative z-10">
        {/* Top 10 Label */}
        <div className="flex items-center space-x-2">
          <Image
            src="/images/top10.png"
            alt="Top 10 Logo"
            width={40}
            height={40}
            className="inline-block"
          />
          <span className="text-white-400 font-semibold text-lg">
            #1 in Software Development Today
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold">
          Kelechi Madueke
        </h1>

        {/* Bio Text */}
        <p className="text-lg md:text-xl text-gray-300 max-w-md">
          Inspired by a passion for technology and innovation, I specialize in creating impactful software solutions. With a focus on full-stack development, I bring ideas to life through code.
        </p>
        <p className="text-lg md:text-xl text-gray-300 max-w-md">School: Drexel University</p>
          <p className="text-lg md:text-xl text-gray-300 max-w-md">Expected Graduation: June 2026</p>
          <p className="text-lg md:text-xl text-gray-300 max-w-md">Major: Computer Science</p>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <Link
            href="/kelechi_madueke_2026.pdf"
            target="_blank"
            className="px-6 py-3 text-lg font-semibold bg-white text-black rounded hover:bg-gray-300 transition flex items-center gap-2"
          >
            <span>▶</span> Resumé
          </Link>
          <Link
            href="mailto:kacymaduk@gmail.com"
            className="px-6 py-3 text-lg font-semibold bg-gray-700 bg-opacity-70 text-white rounded hover:bg-opacity-90 transition flex items-center gap-2"
            style={{ backgroundColor: 'rgba(128, 128, 128, 0.6)' }}
          >
            <span></span> Email Me
          </Link>
        </div>
      </div>
    </section>
  );
}
