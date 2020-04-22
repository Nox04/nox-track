require('dotenv').config();

const ENV_VARS = {
  SITE_NAME: process.env.SITE_NAME,
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
    // const collections = await getAllCollections();
    // collections.map((collection) => {
    //   pathMap[`/collection/${collection.slug}`] = {
    //     page: '/collection/[slug]',
    //     query: { slug: collection.slug },
    //   };
    // });
    return pathMap;
  },
};
