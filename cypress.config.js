const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: false,
  retries: 0,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'marvin test report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    debug: false,
  },
  e2e: {

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      switch(config.env.base_url) {
        case 'qa':
          return {baseUrl: "https://www.amazon.in/"}
        case 'dev':
          return {baseUrl: "https://someotherURLcanbeaddedhere"}
        default:
          return {baseUrl: "https://www.amazon.in/"}
      };
    },

  },
});
