/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['static.wixstatic.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;