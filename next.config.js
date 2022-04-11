require('dotenv').config();
const path = require('path')
// const withPreact = require('next-plugin-preact');
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API: process.env.API,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['api.tropicalt.ca'],
  },
  webpack: (config, { dev, isServer }) => {
      // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }
  return config},
    strictPostcssConfiguration: true
};
