import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  env: {
    RSBUILD_DEV_API_URL: import.meta.env.RSBUILD_DEV_API_URL,
    RSBUILD_PROD_API_URL: import.meta.env.RSBUILD_PROD_API_URL,
  },
});
