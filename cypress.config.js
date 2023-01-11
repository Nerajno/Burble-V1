const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
