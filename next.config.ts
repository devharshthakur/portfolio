import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["upf2833czf.ufs.sh", "github.com", "raw.githubusercontent.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
