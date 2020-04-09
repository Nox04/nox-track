module.exports = {
  theme: {
    fontFamily: {
      body: ['Roboto', 'sans-serif'],
    },
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {},
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen xl': {
            maxWidth: '1600px',
          },
        },
      });
    },
  ],
};
