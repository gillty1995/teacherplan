import { defineConfig } from "@playwright/test";

const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? "https://teacherplan-web.vercel.app";
const isLocalTarget = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/?$/.test(baseURL);

export default defineConfig({
  testDir: "./tests",
  use: {
    baseURL
  },
  ...(isLocalTarget
    ? {
        webServer: {
          command: "npm run develop",
          url: baseURL,
          reuseExistingServer: true,
          timeout: 120000
        }
      }
    : {})
});
