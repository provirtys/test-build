import { expect } from 'storybook/test';
import { computed } from 'vue';
import { StatusBar } from './index.js';

const home = 'home';
const back = 'back';
const logout = 'logout';
const actions = { home, back, logout };

const testElements = (iconName, buttonText, statusText, isStatusSuccess, isLabelBackgroundShown, settingsDisabled) => {
  const buttonIconEl = document.querySelector('.status-line .v-button__icon-container use');
  const buttonTextEl = document.querySelector('.status-line .v-button__text');
  const statusLabelEl = document.querySelector('.status-line .status-label');
  const statusIndicatorEl = statusLabelEl.querySelector('.status-indicator__dot');
  const settingsIconEl = document.querySelector('.status-line__settings-button');

  const colorSettings = {
    true: {
      label: isLabelBackgroundShown ? 'rgba(116, 200, 32, 0.25)' : 'rgba(0, 0, 0, 0)',
      dot: 'rgb(116, 200, 32)',
    },
    false: {
      label: isLabelBackgroundShown ? 'rgba(200, 52, 32, 0.25)' : 'rgba(0, 0, 0, 0)',
      dot: 'rgb(200, 52, 32)',
    },
  };

  expect(buttonIconEl.getAttribute('xlink:href')).toBe(iconName);
  expect(buttonTextEl.textContent).toBe(buttonText);
  expect(statusLabelEl.textContent.trim()).toBe(statusText);
  expect(window.getComputedStyle(statusLabelEl).backgroundColor).toBe(colorSettings[isStatusSuccess].label);
  expect(window.getComputedStyle(statusIndicatorEl).backgroundColor).toBe(colorSettings[isStatusSuccess].dot);
  expect(settingsIconEl.classList.contains('disabled')).toBe(settingsDisabled);
};

/** Компонент верхней части приложения. <br>
 * Содержит:
 *  - Одну из кнопок действия - `Домой`, `Назад`, `Выход`
 *  - Заголовок текущего контекста приложения
 *  - Статус бэкенда
 *  - Кнопку для вывода дебаг панели
 * */
export default {
  component: StatusBar,
  argTypes: {
    action: {
      description: 'Тип кнопки перехода',
      options: Object.keys(actions),
      control: {
        type: 'select',
        labels: {
          home: 'Домой',
          back: 'Назад',
          logout: 'Выйти',
        },
      },
    },
    statusIsReady: {
      description: 'Статус - `Готово`/`Не готово`',
      control: {
        type: 'boolean',
      },
    },
    statusIsAnimated: {
      description: 'Статус - анимация',
      control: {
        type: 'boolean',
      },
    },
    statusShowBackground: {
      description: 'Статус - показывать задний фон',
      control: {
        type: 'boolean',
      },
    },
    title: {
      description: 'Наименование задачи',
    },
    isDisabled: {
      description: 'Неактивное состояние.',
      options: [true, false],
      control: { type: 'boolean' },
    },
    status: {
      description:
        'Статус подключения. Меняется через аргументы `statusIsReady`, `statusIsAnimated` и `statusShowBackground`',
      table: {
        readonly: true,
      },
    },
  },
  args: {
    title: 'Список заданий',
    action: home,
    statusIsReady: false,
    statusIsAnimated: false,
    statusShowBackground: false,
    isDisabled: false,
  },
};

const BaseComponent = (args) => ({
  components: { StatusBar },
  setup() {
    const status = computed(() => ({
      type: args.statusIsReady ? 'success' : 'error',
      sync: args.statusIsAnimated,
      active: args.statusShowBackground,
    }));

    return {
      args,
      status,
    };
  },
  template: `<StatusBar :action="args.action" :title="args.title" :status="status" :is-disabled="args.isDisabled" />`,
});

export const HomeNotReady = BaseComponent.bind({});

HomeNotReady.play = () => {
  testElements('#icon-home', 'Домой', 'Не готово', false, false, false);
};

export const BackReadySettingsDisabled = BaseComponent.bind({});
BackReadySettingsDisabled.args = {
  statusIsReady: true,
  action: back,
  isDisabled: true,
};

BackReadySettingsDisabled.play = () => {
  testElements('#icon-arrow-back', 'Назад', 'Готово', true, false, true);
};

export const LogoutReadyWithBackgroundAndAnimation = BaseComponent.bind({});
LogoutReadyWithBackgroundAndAnimation.args = {
  statusIsReady: true,
  statusIsAnimated: true,
  statusShowBackground: true,
  action: logout,
};

LogoutReadyWithBackgroundAndAnimation.play = () => {
  testElements('#icon-logout-dark', 'Выход', 'Готово', true, true, false);
};
