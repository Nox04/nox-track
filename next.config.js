require('dotenv').config();

const { getAllCollections } = require('./deployment/DynamicCollections.js');

const ENV_VARS = {
  SITE_NAME: process.env.SITE_NAME,
  FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
};

module.exports = {
  env: ENV_VARS,
  publicRuntimeConfig: ENV_VARS,
  poweredByHeader: false,
  async exportPathMap(defaultPathMap) {
    const pathMap = {
      '/': { page: '/index' },
      '/about': { page: '/about' },
      '/login': { page: '/login' },
      '/profile': { page: '/profile' },
      '/collections': { page: '/index' },
    };
    const collections = await getAllCollections();
    collections.map((collection) => {
      pathMap[`/collection/${collection.slug}`] = {
        page: '/collection/[slug]',
        query: { slug: collection.slug },
      };
    });
    return pathMap;
  },
};
