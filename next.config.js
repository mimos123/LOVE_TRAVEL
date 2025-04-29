/** @type {import('next').NextConfig} */
module.exports = {
  // ...existing config...
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  allowedDevOrigins: [
    "localhost",
    "192.168.1.8"
  ],
  turbopack: {
    // Example: add custom aliases or extensions if needed
    // resolveAlias: { underscore: 'lodash' },
    // resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.json'],
    // memoryLimit: 2 * 1024 * 1024 * 1024, // 2GB
  },
};
