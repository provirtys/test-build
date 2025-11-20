import { createI18n } from 'vue-i18n';
import en from './en';
import ru from './ru';

export type MessageLanguages = keyof typeof localeMessages;
export type MessageSchema = (typeof localeMessages)['ru'];

declare module 'vue-i18n' {
  export interface DefineLocaleMessage extends MessageSchema {}

  export interface DefineDateTimeFormat {}

  export interface DefineNumberFormat {}
}

export const localeMessages = {
  en,
  ru,
};

export const i18n = createI18n<{ message: MessageSchema }, MessageLanguages>({
  locale: navigator.language.split('-')[0] || 'en',
  fallbackLocale: 'en',
  globalInjection: true,
  legacy: false,
  messages: localeMessages,
});
