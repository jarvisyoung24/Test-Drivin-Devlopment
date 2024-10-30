import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    specPattern: "cypress/componet/**/*.cy.jsx",
    supportFile: "cypress/support/component.ts",
  },

  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: false
  },

  fixturesFolder: "cypress/fixtures",

  env: {
    API_URL: "http://localhost:3001",
  },

  
  
});
