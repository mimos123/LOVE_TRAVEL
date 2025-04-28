/** @type {import('next').NextConfig} */
module.exports = {
  // ...existing config...
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  allowedDevOrigins: [
    "localhost",
    "192.168.1.8"
  ],
};
