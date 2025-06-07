/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
    stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: ["@chromatic-com/storybook", "@storybook/addon-docs", "@storybook/addon-a11y", "@storybook/addon-vitest"],
    framework: {
        name: "@storybook/vue3-vite",
        options: {
            builder: {
                viteConfigPath: "vite.config.js",
            },
        },
    },
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
