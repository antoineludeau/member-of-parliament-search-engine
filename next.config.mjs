/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.nosdeputes.fr',
        port: '',
        pathname: '/depute/photo/**',
      },
    ],
  },
};

export default nextConfig;
