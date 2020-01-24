require('dotenv').config();

module.exports = {
    env: {
        'API': process.env.API,
        'STAGE_PORT': process.env.STAGE_PORT,
        'PROD_PORT': process.env.PROD_PORT,
    },
    experimental: { scss: true }
};