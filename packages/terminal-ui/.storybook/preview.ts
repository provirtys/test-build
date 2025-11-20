import { i18n } from '@integrity/shared/locales';
import type { Preview } from '@storybook/vue3-vite';
import { setup } from '@storybook/vue3-vite';
import { createPinia } from 'pinia';
import { Dialog, Notify, Quasar } from 'quasar';

import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css';
import '@quasar/extras/material-symbols-outlined/material-symbols-outlined.css';
import 'quasar/dist/quasar.css';

import '@integrity/shared/reset.css';
import '@integrity/base-ui/style.css';
import '@/css/main.scss';

const pinia = createPinia();

setup((app) => {
  app.use(i18n);
  app.use(Quasar, {
    plugins: {
      Notify,
      Dialog,
    },
  });
  app.use(pinia);
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['ui', 'Elements', 'Blocks', 'Complexes', 'Layouts', 'Pages'],
      },
    },
    backgrounds: {
      options: {
        light: { name: 'light', value: '#F1F1F1' },
        dark: { name: 'dark', value: '#333333' },
        red: { name: 'red', value: '#D3141CD9' },
      },
    },
  },
  tags: ['autodocs'],
  initialGlobals: {
    backgrounds: { value: 'light' },
  },
};

export default preview;
