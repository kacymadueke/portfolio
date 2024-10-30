import type { NextConfig } from "next";

const nextConfig = {
  output: "export",

  basePath: "/portfolio",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;