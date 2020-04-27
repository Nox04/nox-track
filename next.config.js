require('dotenv').config();

const ENV_VARS = {
  SITE_NAME: process.env.SITE_NAME,
  BACKEND_URL: process.env.BACKEND_URL,
  MIX_PANEL_ID: process.env.MIX_PANEL_ID,
};

module.exports = {
  env: ENV_VARS,
  publicRuntimeConfig: ENV_VARS,
  poweredByHeader: false,
};
