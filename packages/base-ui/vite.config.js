import * as path from "node:path";
import { URL, fileURLToPath } from "node:url";
import { quasar } from "@quasar/vite-plugin";
import vue from "@vitejs/plugin-vue";
/// <reference types='vitest' />
import { defineConfig } from "vite";

export default defineConfig({
    root: __dirname,
    cacheDir: "./node_modules/.vite/base-ui",
    plugins: [vue(), quasar()],

    // Configuration for building your library.
    // See: https://vitejs.dev/guide/build.html#library-mode
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points.
            entry: path.resolve(__dirname, "src/index.js"),
            name: "base-ui",
            fileName: (format) => `base-ui.${format}.js`,
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
    resolve: {
        alias: [
            { find: "@", replacement: fileURLToPath(new URL("./src/", import.meta.url)) },
            { find: "@stories", replacement: fileURLToPath(new URL("./src/stories/", import.meta.url)) },
            { find: "@components", replacement: fileURLToPath(new URL("./src/components/", import.meta.url)) },
            { find: "@css", replacement: fileURLToPath(new URL("./src/css/", import.meta.url)) },
            { find: "@assets", replacement: fileURLToPath(new URL("./src/assets/", import.meta.url)) },
        ],
    },
});
