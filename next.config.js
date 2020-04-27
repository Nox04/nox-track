require('dotenv').config();

const ENV_VARS = {
  SITE_NAME: process.env.SITE_NAME,
  BACKEND_URL: process.env.BACKEND_URL,
  GA_ID: process.env.GA_ID,
};

module.exports = {
  env: ENV_VARS,
  publicRuntimeConfig: ENV_VARS,
  poweredByHeader: false,
};
