import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  stories: ['../README.stories.ts'],
  addons: ['@chromatic-com/storybook', '@storybook/addon-docs', '@storybook/addon-a11y'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      builder: {
        viteConfigPath: 'vite.config.js',
      },
    },
  },
  refs: {
    baseui: {
      title: 'Base UI',
      url: 'https://provirtys.github.io/test-build/base-ui/iframe.html',
    },
    desktop: {
      title: 'Desktop',
      url: 'https://provirtys.github.io/test-build/desktop-ui/iframe.html',
    },
    mobile: {
      title: 'Mobile',
      url: 'https://provirtys.github.io/test-build/mobile-ui/iframe.html',
    },
    tablet: {
      title: 'Tablet',
      url: 'https://provirtys.github.io/test-build/tablet-ui/iframe.html',
    },
  },
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
