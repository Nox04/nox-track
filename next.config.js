require('dotenv').config();
const withPWA = require('next-pwa');

const ENV_VARS = {
  SITE_NAME: process.env.SITE_NAME,
  BACKEND_URL: process.env.BACKEND_URL,
};

module.exports = withPWA({
  env: ENV_VARS,
  publicRuntimeConfig: ENV_VARS,
  pwa: {
    dest: 'public',
  },
});
