import { setup } from '@storybook/vue3'
import { createI18n } from 'vue-i18n'
import { Quasar } from 'quasar'

import '../src/css/main.scss'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/material-symbols-outlined/material-symbols-outlined.css'
import 'quasar/dist/quasar.css'

interface LanguageMessages {
  [key: string]: any
}

import en from '../src/locales/en.json'
import ru from '../src/locales/ru.json'

function loadLocaleMessages() {
  const locales: Array<{ [key: string]: LanguageMessages }> = [{ en }, { ru }]
  const messages: { [key: string]: any } = {}
  locales.forEach((lang) => {
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
  messages: loadLocaleMessages(),
})

const modules = import.meta.glob('../src/assets/icons/*.svg')
Object.values(modules).forEach(async (el) => await el())

setup((app) => {
  app.use(i18n)
  app.use(Quasar, {})
})
