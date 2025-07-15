import { VAlert } from './index.js';

const info = 'info';
const success = 'success';
const error = 'error';
const warning = 'warning';

const colors = { info, warning, success, error };
/**
 * Компонент отображает информацию, на которую стоит обратить внимание пользователю. Фон может быть белым или с непрозрачностью 10% для выбранного цвета.
 */
export default {
  component: VAlert,
  argTypes: {
    color: {
      description: 'Цвет элемента - `success`, `error`, `info`, `warning`',
      options: Object.keys(colors),
      control: {
        type: 'select',
        labels: {
          success: 'Зеленый',
          error: 'Красный',
          info: 'Синий',
          warning: 'Желтый',
        },
      },
    },
    text: {
      description: 'Текст уведомления',
    },
    isBackgroundWhite: {
      description: 'Прозрачность фона',
      control: { type: 'boolean' },
    },
  },
  args: {
    color: info,
    text: 'Обычное уведомление',
    isBackgroundWhite: false,
  },
};

export const ColorInfo = {};

export const ColorSuccess = {
  args: {
    color: success,
  },
};

export const ColorError = {
  args: {
    color: error,
  },
};

export const ColorWarning = {
  args: {
    color: warning,
  },
};

export const WhiteBackground = {
  args: {
    color: error,
    isBackgroundWhite: true,
  },
  globals: {
    backgrounds: {
      value: 'red',
    },
  },
};
