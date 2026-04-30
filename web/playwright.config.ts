import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  use: {
    baseURL: "http://127.0.0.1:8000"
  },
  webServer: {
    command: "npm run develop",
    url: "http://127.0.0.1:8000",
    reuseExistingServer: true,
    timeout: 120000
  }
});
