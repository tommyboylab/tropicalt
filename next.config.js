require('dotenv').config();
const path = require('path')
const withPreact = require('next-plugin-preact');
module.exports = withPreact({
  env: {
    API: process.env.API,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
    strictPostcssConfiguration: true
});
