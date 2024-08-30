/** @type { import('@storybook/vue3').Preview } */
import { setup } from '@storybook/vue3';
import { createI18n } from 'vue-i18n';

import en from '../i18n/en.json';
import ru from '../i18n/ru.json';

function loadLocaleMessages () {
  const locales = [{ en }, { ru }];
  const messages = {};
  locales.forEach(lang => {
    const key = Object.keys(lang)
    messages[key] = lang[key]
  })
  return messages
}

const i18n = createI18n({
    locale: navigator.language.split('-')[0] || 'en',
    fallbackLocale: 'en',
    globalInjection: true,
    legacy: false,
    messages: loadLocaleMessages()
});

setup((app) => {
    app.use(i18n);
})

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
