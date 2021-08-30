require('dotenv').config();
const path = require('path')
module.exports = {
  env: {
    API: process.env.API,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
    strictPostcssConfiguration: true
};
