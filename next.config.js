/** @type {import('next').NextConfig} */
const path = require('path');
const nextTranslate = require('next-translate-plugin');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    // This is all for Tailwind Images
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'staging-cdn.casestatus.com',
        port: '',
        pathname: '/img/**',
      },
    ],
  },
};

module.exports = nextTranslate(nextConfig);
