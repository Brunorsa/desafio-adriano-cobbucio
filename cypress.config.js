// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },

//   },
// });

// const { defineConfig } = require('cypress');

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       require('cypress-mochawesome-reporter/plugin')(on);
//       return config;
//     },
//     baseUrl: 'https://seubarriga.wcaquino.me/'
//   },
//   reporter: 'cypress-mochawesome-reporter',
//   reporterOptions: {
//     reportDir: 'cypress/reports', // Diretório de saída dos relatórios
//     overwrite: false,
//     html: true,
//     json: true,
//     charts: true,
//   },
// });

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "cypress/results",
    overwrite: false,
    html: true,
    json: true,
    charts: true
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://seubarriga.wcaquino.me/'
  },
});
