import type { Meta, StoryObj } from '@storybook/vue3-vite';
import type { Color } from './PieProgress.types';
import PieProgress from './PieProgress.vue';

type Story = StoryObj<typeof PieProgress>;

const colors: Record<Color, string> = {
  success: 'Зеленый',
  error: 'Красный',
  info: 'Синий',
  warning: 'Желтый',
};

/**
 * Компонент для отображения прогресса в виде круговой диаграммы.
 */
const meta: Meta<typeof PieProgress> = {
  component: PieProgress,
  argTypes: {
    size: {
      description: 'Размер элемента',
    },
    value: {
      description: 'Процент заполнения элемента',
    },
    borderWidth: {
      description: 'Ширина границы элемента',
    },
    color: {
      description: 'Цвет элемента',
      options: Object.keys(colors),
      control: {
        type: 'select',
        labels: colors,
      },
    },
  },
  args: {
    value: 42,
    size: 60,
    borderWidth: 4,
    color: 'warning',
  },
};

export default meta;

export const InfoColor: Story = {
  args: {
    color: 'info',
  },
};
export const WarningColor: Story = {
  args: {
    color: 'warning',
  },
};
export const SuccessColor: Story = {
  args: {
    color: 'success',
  },
};
export const ErrorColor: Story = {
  args: {
    color: 'error',
  },
};
