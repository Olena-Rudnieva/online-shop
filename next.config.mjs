/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n: {
    locales: ['en', 'ua'],
    defaultLocale: 'en',
  },

  webpack(config, { isServer }) {

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  
};

export default nextConfig;