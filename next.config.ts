import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com", "cdn.pixabay.com", "images.pexels.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allow all https domains
      },
    ], // add allowed domains
  },
};

export default nextConfig;
