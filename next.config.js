/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  reactStrictMode: false,
  images: {
    loader: 'imgix',
    path: ['http://wolfgang.co.kr/'],
  },

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
