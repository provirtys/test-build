import * as path from 'node:path';
import svgSpritePlugin from '@pivanov/vite-plugin-svg-sprite';
import { quasar } from '@quasar/vite-plugin';
import vue from '@vitejs/plugin-vue';
/// <reference types='vitest' />
import { defineConfig } from 'vite';
import createPackageConfig from '../../vite.shared.js';

export default defineConfig({
  root: __dirname,
  cacheDir: './node_modules/.vite/base-ui',
  plugins: [
    vue(),
    quasar(),
    svgSpritePlugin({
      iconDirs: [path.resolve(__dirname, '../icons/icons')],
      symbolId: 'icon-[name]',
      svgDomId: 'svg-sprite',
      inject: 'body-last',
      svgoConfig: {
        plugins: [
          {
            name: 'removeAttributesBySelector',
            params: {
              selectors: [
                {
                  selector: '*:not(svg)',
                },
              ],
            },
          },
        ],
      },
    }),
  ],
  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'base-ui',
      fileName: (format) => `base-ui.${format}.js`,
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
          quasar: 'quasar',
        },
      },
    },
  },
  ...createPackageConfig('base-ui'),
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import '@integrity/base-ui/src/css/fonts.scss';
          @import '@integrity/base-ui/src/css/variables.scss';
          @import '@integrity/base-ui/src/css/mixins.scss';
          @import '@integrity/base-ui/src/css/quasar.classes.scss';
        `,
      },
    },
  },
});
