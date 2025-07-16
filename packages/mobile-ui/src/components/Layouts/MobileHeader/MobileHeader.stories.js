import { MobileHeader } from './index.js';

/** Компонент шапки, используемый на мобильных устройствах. Содержит кнопку "назад", заголовок и иконку оффлайн режима
 *  при необходимости. Кнопка "назад" перенаправляет пользователя на другую страницу в зависимости от текущей.
 * Цвета в шапке могут меняться в зависимости от цвета фона на выбранной странице. */
export default {
  component: MobileHeader,
  argTypes: {
    page: {
      description: 'На какой странице находится пользователь?',
      control: {
        type: 'select',
      },
      options: [
        'Index',
        'FrontPage',
        'Checking',
        'CheckScan',
        'CheckResult',
        'History',
        'Profile',
        'ProfileAuth',
        'ProfileRegister',
        'ProfileEdit',
        'BindingCodeScan',
        'BindingCodeConfirm',
      ],
    },
    showBackButton: {
      description: 'Должна ли отображаться кнопка "назад"?',
    },
    isBackgroundDark: {
      description: 'Фон на странице темный?',
    },
    isOffline: {
      description: 'Пользователь в оффлайн режиме?',
    },
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'dark', value: '#242a2b' },
        { name: 'light', value: '#f4f4f4' },
      ],
    },
  },
};

/** Базовый вид шапки страницы. */
export const BaseHeader = {
  args: {
    showBackButton: true,
    isBackgroundDark: false,
    isOffline: false,
    page: 'Index',
  },
};

/** Шапка страницы при оффлайн режиме. */
export const OfflineMode = {
  args: {
    showBackButton: true,
    isBackgroundDark: false,
    isOffline: true,
    page: 'Index',
  },
};

/** Шапка страницы на главной. */
export const FrontPageHeader = {
  args: {
    showBackButton: false,
    isBackgroundDark: false,
    isOffline: false,
    page: 'FrontPage',
  },
};

/** Шапка страницы "Профиль". На странице регистрации также отображается название страницы. */
export const ProfileHeader = {
  args: {
    showBackButton: true,
    isBackgroundDark: false,
    isOffline: false,
    page: 'Profile',
  },
};

/** Шапка страницы сканирования, на которой предусмотрен темный фон. */
export const CheckScanHeader = {
  args: {
    showBackButton: false,
    isBackgroundDark: true,
    isOffline: false,
    page: 'CheckScan',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#242a2b' },
        { name: 'light', value: '#f4f4f4' },
      ],
    },
  },
};

/** Шапка страницы авторизации, на которой предусмотрен темный фон. Аналогичная шапка соответствует странице привязки кода. */
export const ProfileAuthHeader = {
  args: {
    showBackButton: true,
    isBackgroundDark: true,
    isOffline: false,
    page: 'ProfileAuth',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#242a2b' },
        { name: 'light', value: '#f4f4f4' },
      ],
    },
  },
};
