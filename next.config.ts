import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.0.26', 'localhost:3000'],
  images: {
    domains: ['api.escuelajs.co', 'localhost', 'i.imgur.com'],
  }

  
  /* config options here */
};
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};


export default nextConfig;
