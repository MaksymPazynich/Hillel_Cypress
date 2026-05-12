import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  defaultCommandTimeout: 5000,
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",

  e2e: {
    baseUrl: "https://example.com",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    fixturesFolder: "cypress/fixtures",
    modifyObstructiveCode: false,

    setupNodeEvents(on, config) {
    },
  },
});
