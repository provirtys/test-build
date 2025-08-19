import type { Meta, StoryObj } from '@storybook/vue3-vite';
import type { Color } from '@/components/ui/VAlert/VAlert.types';
import { VAlert } from './index';

type Story = StoryObj<typeof VAlert>;

const colors: Record<Color, string> = {
  success: 'Зеленый',
  error: 'Красный',
  info: 'Синий',
  warning: 'Желтый',
};

/**
 * Компонент отображает информацию, на которую стоит обратить внимание пользователю. Фон может быть белым или с непрозрачностью 10% для выбранного цвета.
 */
const meta: Meta<typeof VAlert> = {
  component: VAlert,
  argTypes: {
    color: {
      description: 'Цвет элемента - `success`, `error`, `info`, `warning`',
      options: Object.keys(colors),
      control: {
        type: 'select',
        labels: colors,
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
    color: 'info',
    text: 'Обычное уведомление',
    isBackgroundWhite: false,
  },
};
export default meta;

export const ColorInfo: Story = {};

export const ColorSuccess: Story = {
  args: {
    color: 'success',
  },
};

export const ColorError: Story = {
  args: {
    color: 'error',
  },
};

export const ColorWarning: Story = {
  args: {
    color: 'warning',
  },
};

export const WhiteBackground: Story = {
  args: {
    color: 'error',
    isBackgroundWhite: true,
  },
  globals: {
    backgrounds: {
      value: 'red',
    },
  },
};
