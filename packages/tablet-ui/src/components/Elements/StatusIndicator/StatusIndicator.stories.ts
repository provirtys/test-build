import type { Meta, StoryObj } from '@storybook/vue3-vite';
import type { Color } from '@/components/Elements/StatusIndicator/StatusIndicator.types';
import { StatusIndicator } from './index';

type Story = StoryObj<typeof StatusIndicator>;

const colors: Record<Color, string> = {
  info: 'Info (Синий)',
  success: 'Success (Зеленый)',
  error: 'Error (Красный)',
  warning: 'Warning (Желтый)',
};

/** Компонент для отображения статуса сервиса. Можно регулировать цвет и включать/отключать анимацию. */
const meta: Meta<typeof StatusIndicator> = {
  component: StatusIndicator,
  argTypes: {
    color: {
      description: 'Цвет статуса',
      options: Object.keys(colors),
      control: {
        type: 'radio',
        labels: colors,
      },
    },
    isAnimate: {
      description: 'Анимированное состояние иконки',
      options: [true, false],
    },
  },
  args: {
    isAnimate: true,
  },
  parameters: {
    backgrounds: {
      default: 'white',
      values: [
        { name: 'dark', value: '#242a2b' },
        { name: 'white', value: '#ffffff' },
        { name: 'light', value: '#ededed' },
        { name: 'light-gray', value: '#f1f1f1' },
      ],
    },
  },
};
export default meta;

export const Info: Story = {
  args: {
    color: 'info',
  },
};

export const Warning: Story = {
  args: {
    color: 'warning',
  },
};

export const Success: Story = {
  args: {
    color: 'success',
  },
};

export const _Error: Story = {
  args: {
    color: 'error',
  },
};
