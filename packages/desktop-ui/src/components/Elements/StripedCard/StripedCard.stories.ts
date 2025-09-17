import type { Meta, StoryObj } from '@storybook/vue3-vite';
import type { Color } from './StripedCard.types';
import StripedCard from './StripedCard.vue';

type Story = StoryObj<typeof StripedCard>;

const colors: Record<Color & undefined, string> = {
  '': 'Без цвета',
  success: 'Зеленый',
  error: 'Красный',
  info: 'Синий',
  warning: 'Желтый',
};

/**
 * Компонент карточки с боковой вертикальной полоской. <br/> Может принимать 4 разных цвета - `success`, `error`, `info`, `warning` + цвет по умолчанию - серый.
 */
const meta: Meta<typeof StripedCard> = {
  component: StripedCard,
  argTypes: {
    title: {
      description: 'Заголовок карточки',
    },
    text: {
      description: 'Текст карточки',
    },
    color: {
      description: 'Цвет карточки',
      options: Object.keys(colors),
      control: {
        type: 'select',
        labels: colors,
      },
    },
  },
  args: {
    title: 'Заголовок карточки',
    text: 'Текст карточки',
    color: undefined,
  },
  globals: {
    backgrounds: { value: 'white' },
  },
};

export default meta;

export const Default: Story = {};

export const ErrorColor: Story = {
  args: {
    color: 'error',
  },
};

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
