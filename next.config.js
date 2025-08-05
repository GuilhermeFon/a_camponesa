/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true 
  },
  experimental: {
    turbo: {
      // Enable Turbopack for faster builds in development
    }
  }
};

export default nextConfig;
