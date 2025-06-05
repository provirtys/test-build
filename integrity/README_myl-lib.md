# MyWorkspace

## Запуск проекта

1. В папке Integrity установить все зависимости

```
npm install
```

2. В каждой библиотеке (в каждой библиотеке/папке base-ui, mobile-ui, tablet-ui, web-ui и новых созданных библиотеках) установить все зависимости

```
npm install
```

3. Запустить сторибук (tut-nazvanie - название библиотеки/папки)

```
nx run tut-nazvanie:storybook
```

## My-lib (создание библиотеки компонентов)

1. Убедитесь, что у вас установлен Node.js (рекомендуемая версия 14 или выше). Проверить установку можно с помощью команды:

```sh
node -v
```

2. Создание пространства nx (stack: none, package-based, vite):

```sh
npx create-nx-workspace
```

3. Добавление пакета Vue:

```sh
npm install @nx/vue
```

4. Создание библиотеки в nx (➕vite):

```sh
nx g @nx/vue:library tut-nazvanie в папке библиотеки
```

5. Наполнить src, заменить (взять из готовой библиотеки)

- package.json

```sh
"name": "tut-nazvanie",
  "version": "номер версии",
  "main": "./dist/tut-nazvanie.umd.js",
  "module": "./dist/tut-nazvanie.es.js",
  "exports": {
    ".": {
      "import": "./dist/tut-nazvanie.es.js",
      "require": "./dist/tut-nazvanie.umd.js"
    },
    "./style.css": "./dist/style.css"
  },
```

- vite.config.ts

```sh
/// <reference types='vitest' />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import { quasar } from '@quasar/vite-plugin'

export default defineConfig({
  root: __dirname,
  cacheDir: '../node_modules/.vite/tut-nazvanie',

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
      name: 'tut-nazvanie',
      fileName: (format) => `tut-nazvanie.${format}.js`,
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
```

6. Перейти в созданную папку библиотеки, установить зависимости

```sh
npm install
```

7. Добавить сторибук в основной папке (выбрать @storybook/vue3-vite). исправить для него preview.ts

```sh
nx add @nx/storybook
```

8. Далее в папке библиотеки

```sh
npx nx g @nx/storybook:configuration tut-nazvanie
```

9. Запустить сторибук

```sh
nx run tut-nazvanie:storybook
```

10. собрать библиотеку

```sh
nx build tut-nazvanie
```

11. войти в свой аккаунт npm

```sh
npm login
```

12. опубликовать библиотеку

```sh
  npm publish --access=public
```

- !!! в компонентах style должны быть не scoped
- а также dependencies и devdependencies (все библиотеки нужные для работы библиотеки компонентов, все что используется внутри)

## Использование библиотеки

- main.js файл в приложении vue, куда будет импортироваться библиотека компонентов

```sh
import { createApp } from 'vue'
import './css/style.css'
import App from './App.vue'
import i18n from './i18n'
import { Quasar } from 'quasar'

import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/material-symbols-outlined/material-symbols-outlined.css'
import 'quasar/dist/quasar.css'
import 'tut-nazvanie/style.css'

const app = createApp(App)

app.use(i18n).use(Quasar, {}).mount('#app')
```

- vite.config.js (файл в приложении vue, куда будет импортироваться библиотека компонентов)

```sh
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    quasar()
  ],
})
```

- html

```sh
<srcipt setup>
import { NazvanieComponenta } from 'tut-nazvanie'
</script>

<template>
   <NazvanieComponenta />
</template>
```
