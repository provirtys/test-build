import { fileURLToPath, URL } from 'node:url';

export default function createPackageConfig(packageName: string) {
  const packageURL = new URL(`./packages/${packageName}/`, import.meta.url);

  const res = {
    resolve: {
      alias: [
        { find: '@base', replacement: fileURLToPath(new URL('./packages/base-ui/src/', import.meta.url)) },
        { find: '@', replacement: fileURLToPath(new URL('./src/', packageURL)) },
      ],
    },
  };

  return res;
}
