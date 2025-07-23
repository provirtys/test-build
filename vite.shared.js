import { fileURLToPath, URL } from 'node:url';

export default function createPackageConfig(packageName) {
  const packageURL = new URL(`./packages/${packageName}/`, import.meta.url);

  const res = {
    resolve: {
      alias: [
        {
          find: '@integrity/base-ui',
          replacement: fileURLToPath(new URL('./packages/base-ui/', import.meta.url)),
        },
        { find: '@base', replacement: fileURLToPath(new URL('./packages/base-ui/src/', import.meta.url)) },
      ],
    },
  };

  if (packageName !== 'base-ui') {
    res.resolve.alias.push(
      { find: '@', replacement: fileURLToPath(new URL('./src/', packageURL)) },
      { find: '@components', replacement: fileURLToPath(new URL('./src/components/', packageURL)) },
      { find: '@assets', replacement: fileURLToPath(new URL('./src/assets/', packageURL)) },
      { find: '@utils', replacement: fileURLToPath(new URL('./src/utils/', packageURL)) },
      { find: '@css', replacement: fileURLToPath(new URL('./src/css/', packageURL)) },
      { find: '@mocks', replacement: fileURLToPath(new URL('./src/mocks/', packageURL)) },
      // Глобальные алиасы
      {
        find: '@integrity/web-ui',
        replacement: fileURLToPath(new URL('./packages/web-ui/', import.meta.url)),
      },
      {
        find: '@integrity/tablet-ui',
        replacement: fileURLToPath(new URL('./packages/tablet-ui/', import.meta.url)),
      },
      {
        find: '@integrity/mobile-ui',
        replacement: fileURLToPath(new URL('./packages/mobile-ui/', import.meta.url)),
      },

      // Межпакетные алиасы
      { find: '@web', replacement: fileURLToPath(new URL('./packages/web-ui/src/', import.meta.url)) },
      { find: '@tablet', replacement: fileURLToPath(new URL('./packages/tablet-ui/src/', import.meta.url)) },
      { find: '@mobile', replacement: fileURLToPath(new URL('./packages/mobile-ui/src/', import.meta.url)) },
    );
  }

  return res;
}
