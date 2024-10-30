"use client";

import { motion } from "framer-motion";
import React from "react";

export default function SectionDivider() {
  return (
    <motion.div
      className="sm:my-20 my-32 h-48 w-1 relative overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2 }}
    >
      <div className="absolute inset-0 bg-gray-200/20 rounded-full " />
      <motion.div
        className="absolute w-full h-[50%] bg-gradient-to-b from-transparent via-white/50 to-transparent"
        animate={{
          y: ["-100%", "100%"],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
}