import { computed } from 'vue';
import { StatusBar } from './index.js';

const home = 'home';
const back = 'back';
const logout = 'logout';
const actions = { home, back, logout };

/** Компонент верхней части приложения. <br>
 * Содержит: <br>
 * <ul>
 *   <li>Одну из кнопок действия - `Домой`, `Назад`, `Выход`</li>
 *   <li>Заголовок текущего контекста приложения</li>
 *   <li>Статус бэкенда</li>
 *   <li>Кнопку для вывода дебаг панели</li>
 * </ul>
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

export const BackReady = BaseComponent.bind({});
BackReady.args = {
  statusIsReady: true,
  action: back,
};

export const LogoutReadyWithBackgroundAndAnimation = BaseComponent.bind({});
LogoutReadyWithBackgroundAndAnimation.args = {
  statusIsReady: true,
  statusIsAnimated: true,
  statusShowBackground: true,
  action: back,
};
