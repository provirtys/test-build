import { setup } from '@storybook/vue3';
import { createI18n } from 'vue-i18n';

import '../assets/css/main.scss';

interface LanguageMessages {
    [key: string]: any;
}

import en from '../locales/en.json';
import ru from '../locales/ru.json';

function loadLocaleMessages () {
  const locales: Array<{ [key: string]: LanguageMessages }> = [{ en }, { ru }];
  const messages: { [key: string]: any } = {};
  locales.forEach(lang => {
    const key = Object.keys(lang)[0]
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