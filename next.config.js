/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  async rewrites() {
    return [
      {
        destination: 'http://localhost:3000/api/:path*',
        source: '/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
