import * as path from "node:path";
import { quasar } from "@quasar/vite-plugin";
import vue from "@vitejs/plugin-vue";
/// <reference types='vitest' />
import { defineConfig } from "vite";

export default defineConfig({
    root: __dirname,
    cacheDir: "../node_modules/.vite/web-ui",
    plugins: [vue(), quasar()],
    // Configuration for building your library.
    // See: https://vitejs.dev/guide/build.html#library-mode
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points.
            entry: path.resolve(__dirname, "src/index.js"),
            name: "web-ui",
            fileName: (format) => `web-ui.${format}.js`,
        },
        rollupOptions: {
            // External packages that should not be bundled into your library.
            external: ["vue"],
            output: {
                globals: {
                    vue: "Vue",
                    quasar: "quasar",
                },
            },
        },
    },
});
