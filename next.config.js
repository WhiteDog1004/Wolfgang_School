/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

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
