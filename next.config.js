require('dotenv').config();
const path = require('path');
module.exports = {
  reactStrictMode: true,
  env: {
    API: process.env.API,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['localhost','http://localhost:1337','api.tropicalt.ca', 'http://localhost:3000/', 'http://localhost:3001/'],
  },
  experimental: {scrollRestoration: true,
      
    esmExternals: false,
    appDir: true,
  },
  // issues with Preact and Next 13
  // webpack: (config, { dev, isServer }) => {
  //   // Note, preact is only enabled for production builds (`next build`)
  //   if (!dev && !isServer) {
  //     config.resolve.alias = {
  //       ...config.resolve.alias,
  //       'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
  //       'react': 'preact/compat',
  //       'react-dom/test-utils': 'preact/test-utils',
  //       'react-dom': 'preact/compat',
  //     };
  //   }
  //   return config;
  // },
};
