import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
