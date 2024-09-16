/// <reference types='vitest' />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import { quasar } from '@quasar/vite-plugin'

export default defineConfig({
  root: __dirname,
  cacheDir: '../node_modules/.vite/mobile-ui',

  plugins: [
    vue(),
    quasar()
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: path.resolve(__dirname, "src/index.js"),
      name: 'mobile-ui',
      fileName: (format) => `mobile-ui.${format}.js`,
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
          'quasar': "quasar"
        }
      }
    },
  },
});