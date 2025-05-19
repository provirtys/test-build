import type { StorybookConfig } from '@storybook/vue3-vite';
import createSvgSprite from 'vite-plugin-svg-sprite';

const config: StorybookConfig = {
  stories: ['../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      builder: {
        viteConfigPath: 'vite.config.ts',
      },
    },
  },
  viteFinal: async (config, { configType }) => {
    config.plugins = config.plugins || [];
    config.plugins.push(
      createSvgSprite({
        include: '**/icons/*.svg',
        symbolId: '[name]',
      })
    );
    return config;
  },
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
