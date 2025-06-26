import { URL, fileURLToPath } from "node:url";

export default function createPackageConfig(packageName) {
    const packageURL = new URL(`./packages/${packageName}/`, import.meta.url);

    return {
        resolve: {
            alias: [
                { find: "@", replacement: fileURLToPath(new URL("./src/", packageURL)) },
                { find: "@components", replacement: fileURLToPath(new URL("./src/components/", packageURL)) },
                { find: "@assets", replacement: fileURLToPath(new URL("./src/assets/", packageURL)) },
                { find: "@utils", replacement: fileURLToPath(new URL("./src/utils/", packageURL)) },
                { find: "@css", replacement: fileURLToPath(new URL("./src/css/", packageURL)) },
                { find: "@stories", replacement: fileURLToPath(new URL("./src/stories/", packageURL)) },

                // Глобальные алиасы
                {
                    find: "@integrity/base-ui",
                    replacement: fileURLToPath(new URL("./packages/base-ui/", import.meta.url)),
                },
                {
                    find: "@integrity/web-ui",
                    replacement: fileURLToPath(new URL("./packages/web-ui/", import.meta.url)),
                },
                {
                    find: "@integrity/tablet-ui",
                    replacement: fileURLToPath(new URL("./packages/tablet-ui/", import.meta.url)),
                },
                {
                    find: "@integrity/mobile-ui",
                    replacement: fileURLToPath(new URL("./packages/mobile-ui/", import.meta.url)),
                },

                // Межпакетные алиасы
                { find: "@base", replacement: fileURLToPath(new URL("./packages/base-ui/src/", import.meta.url)) },
                { find: "@web", replacement: fileURLToPath(new URL("./packages/web-ui/src/", import.meta.url)) },
                { find: "@tablet", replacement: fileURLToPath(new URL("./packages/tablet-ui/src/", import.meta.url)) },
                { find: "@mobile", replacement: fileURLToPath(new URL("./packages/mobile-ui/src/", import.meta.url)) },
            ],
        },
    };
}
