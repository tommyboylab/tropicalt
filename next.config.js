require('dotenv').config();
const path = require('path');
const withPreact = require('next-plugin-preact');
module.exports = withPreact({
  reactStrictMode: true,
  env: {
    API: process.env.API,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['api.tropicalt.ca', 'http://localhost:3000/', 'http://localhost:3001/'],
  },
  experimental: {
    esmExternals: false,
  },
  // webpack: (config) => {
  //   // Replace React with Preact
  //   Object.assign(config.resolve.alias, {
  //     react: 'preact/compat',
  //     'react-dom/test-utils': 'preact/test-utils',
  //     'react-dom': 'preact/compat',
  //   });

  //   return config;
  // },
});
