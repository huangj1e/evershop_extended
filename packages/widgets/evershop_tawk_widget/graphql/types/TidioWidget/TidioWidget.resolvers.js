module.exports = {
  Query: {
    tawkWidget(_, { settings }) {
      return { text: settings.text };
    },
  },
};
