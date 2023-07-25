import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import configToAlias from '@astropub/config-to-alias/astro';
import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
    config: {
      applyBaseStyles: false
    }}), 
    react(), 
    configToAlias(),
  ],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});