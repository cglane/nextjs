/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // This is all for Tailwind Images
        dangerouslyAllowSVG: true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'tailwindui.com',
            port: '',
            pathname: '/img/logos/**',
          },
        ],
      },
};

module.exports = nextConfig;
