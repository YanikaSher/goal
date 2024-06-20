/** @type {import('next').NextConfig} */
const nextConfig = {}
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: '127.0.0.1',
          port: '5000',
          pathname: '/api/uploads/*',
        },
      ],
    },
  }
module.exports = nextConfig