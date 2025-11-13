import { PlaywrightTestConfig } from "@playwright/test";

const playwrightConfig: PlaywrightTestConfig = {
  testMatch: "acceptancetest/**/*.spec.ts",
  reporter: [["list"], ["junit", { outputFile: "reports/results.xml" }]],
  timeout: 60000,
  retries: 2,
  projects: [
    {
      name: "Edge",
      use: {
        browserName: "chromium",
        channel: "msedge",
        viewport: null,launchOptions:{
          args:['--start-maximized']
        },

      },
    },
      {
      name: "Chrome",
      use: {
        browserName: "chromium",
        channel: "msedge",
        viewport: null,launchOptions:{
          args:['--start-maximized']
        },

      },
    },

  ],
  use: {
    baseURL: "https://dariosji13.github.io/", //#{starwarsURl}#
    screenshot: "only-on-failure",
    video: "retry-with-video",
  },
};
export default playwrightConfig;