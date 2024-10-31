"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect to change header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 ${isScrolled ? "bg-black" : "bg-gradient-to-b from-black to-transparent"} transition duration-300`}>
      <div className="flex items-center justify-between px-8 py-4 max-w-[1440px] mx-auto">
        
        {/* Left side: Logo and navigation links */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <Link href="/">
            <Image src="/images/logo.png" alt="Kelechi Logo" width={80} height={20} />
          </Link>

          {/* Navigation Links */}
          <nav className="flex space-x-6 text-white font-semibold text-base tracking-wide" style={{ fontFamily: "inherit" }}>
            <Link href="#experience" className="hover:text-gray-400 transition duration-200">Experience</Link>
            <Link href="#projects" className="hover:text-gray-400 transition duration-200">Projects</Link>
            <Link href="#skills" className="hover:text-gray-400 transition duration-200">Skills</Link>
            <Link href="#technologies" className="hover:text-gray-400 transition duration-200">Technologies</Link>
            <Link href="#organizations" className="hover:text-gray-400 transition duration-200">Organizations</Link>
          </nav>
        </div>

        {/* Right side: Icons and profile image */}
        <div className="flex items-center space-x-6 text-white">
          {/* Search Icon with transparent background */}
        
            <Image src="/images/Search-2.png" alt="Search" width={24} height={24} className="cursor-pointer opacity-70 hover:opacity-100" />
         

          {/* Notifications Icon with transparent background */}

            <div className="relative">
              <Image src="/images/notifications.png" alt="Notifications" width={27} height={27} className="cursor-pointer opacity-70 hover:opacity-100" />
            </div>
        

          {/* Profile Icon */}
        
            <Image src="/images/kelechi.png" alt="Profile" width={32} height={32} className="rounded cursor-pointer opacity-70 hover:opacity-100" />
        
        </div>
      </div>
    </header>
  );
}
