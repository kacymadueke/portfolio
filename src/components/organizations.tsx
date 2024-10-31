"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  const [selectedOrganization, setSelectedOrganization] = useState<Organization | null>(null);

  const handleOrganizationClick = (organization: Organization) => {
    setSelectedOrganization(selectedOrganization?.name === organization.name ? null : organization);
  };

  return (
    <section id="organizations" className="w-full bg-black text-white py-8">
      <h2 className="text-2xl font-semibold mb-6">Organizations</h2>

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
          {organizations.map((organization, index) => (
            <motion.div
              key={index}
              className="relative flex-shrink-0 w-[250px] h-[140px] bg-gray-800 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => handleOrganizationClick(organization)}
            >
              {/* Image with Overlay */}
              <div className="relative h-full w-full">
                <Image
                  src={organization.imgSrc}
                  alt={organization.name}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-lg font-bold text-white truncate">{organization.name}</h3>
                  <p className="text-sm text-gray-300 line-clamp-2">{organization.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup Modal for Organization Details */}
      <AnimatePresence>
        {selectedOrganization && (
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
                onClick={() => setSelectedOrganization(null)}
              >
                &times;
              </button>
              <div className="mb-4">
                <h3 className="text-2xl font-bold">{selectedOrganization.name}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {selectedOrganization.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
