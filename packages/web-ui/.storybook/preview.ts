import { setup } from '@storybook/vue3-vite';
import { Notify, Quasar } from 'quasar';
import { createI18n } from 'vue-i18n';

import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css';
import '@quasar/extras/material-symbols-outlined/material-symbols-outlined.css';
import 'quasar/dist/quasar.css';

import '@base/css/fonts.scss';
import '@base/css/main.scss';

import ru from '@integrity/base-ui/src/locales/ru.json';
import type { Preview } from '@storybook/vue3-vite';
import en from '../src/locales/en.json';

function loadLocaleMessages() {
  const locales = [{ en }, { ru }];
  const messages = {};
  for (const lang of locales) {
    const key = Object.keys(lang)[0];
    messages[key] = lang[key];
  }
  return messages;
}

const i18n = createI18n({
  locale: navigator.language.split('-')[0] || 'en',
  fallbackLocale: 'en',
  globalInjection: true,
  legacy: false,
  messages: loadLocaleMessages(),
});

setup((app) => {
  app.use(i18n);
  app.use(Quasar, {
    plugins: {
      Notify,
    },
  });
});

Notify.registerType('error', {
  position: 'top',
  classes: 'main-notification',
  timeout: 3000,
  color: 'error',
  textColor: 'white',
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
};

export default preview;
