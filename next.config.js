/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    unoptimized: true,
    domains: ['s3.ap-northeast-2.amazonaws.com'],
  },
  distDir: 'build',
  reactStrictMode: false,

  async redirects() {
    return [
      {
        source: '/school/:id',
        destination: '/',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
