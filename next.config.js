require('dotenv').config();

module.exports = {
    env: {
        'API': process.env.API,
    },
    experimental: { scss: true }
};
