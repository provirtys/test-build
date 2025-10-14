import * as path from 'node:path';
import svgSpritePlugin from '@pivanov/vite-plugin-svg-sprite';
import { quasar } from '@quasar/vite-plugin';
import vue from '@vitejs/plugin-vue';
/// <reference types='vitest' />
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import createPackageConfig from '../../vite.shared';

export default defineConfig({
  root: __dirname,
  cacheDir: './node_modules/.vite/tablet-ui',
  plugins: [
    vue(),
    quasar(),
    dts({
      insertTypesEntry: true,
      include: ['**/src/components/**/*', '**/src/index.ts'],
      exclude: '**/*.stories.ts',
    }),
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
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'tablet-ui',
      fileName: (format) => `tablet-ui.${format}.js`,
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
  ...createPackageConfig('tablet-ui'),
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import '@base/css/variables.scss';
          @import '@base/css/mixins.scss';
          @import '@base/css/quasar.classes.scss';
          @import '@/css/main.scss';
        `,
      },
    },
  },
});
