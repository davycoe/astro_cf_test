import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  vite: {
    define: {
      "process.env.ENV_TEST_TWO": JSON.stringify(process.env.ENV_TEST_TWO),
    },
  },
});
