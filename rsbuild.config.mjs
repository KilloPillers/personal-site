import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  env: {
    RSBUILD_DEV_API_URL: import.meta.env.RSBUILD_DEV_API_URL,
    RSBUILD_PROD_API_URL: import.meta.env.RSBUILD_PROD_API_URL,
  },
  html: {
    title: 'Juan Alvarez Portfolio',
    meta: [
      {
        description:
          'Full-stack Software Developer, Project Manager, Game Developer... find out more inside!',
      },
      {
        image:
          'https://jfalvarez-portfolio-assets.s3.us-east-2.amazonaws.com/pfp.jpg',
      },
      { type: 'website' },
    ],
  },
});
