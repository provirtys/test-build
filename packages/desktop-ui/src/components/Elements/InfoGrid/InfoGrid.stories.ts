import type { Meta, StoryObj } from '@storybook/vue3-vite';
import InfoGrid from './InfoGrid.vue';

type Story = StoryObj<typeof InfoGrid>;

/** Компонент для отображения сетки из ячеек. Можно задавать количество колонок, столбцов, высоту и фон у ячеек. */
const meta: Meta<typeof InfoGrid> = {
  component: InfoGrid,
  argTypes: {
    x: {
      description: 'Количество строк в сетке',
    },
    y: {
      description: 'Количество колонок в сетке',
    },
    height: {
      description: 'Высота сетки',
    },
    isLight: {
      description: 'Светлый задний фон у элементов',
    },
  },
  args: {
    x: 4,
    y: 5,
    height: '160px',
    isLight: false,
  },
};

export default meta;

export const Standard: Story = {};

export const Light: Story = {
  args: {
    isLight: true,
  },
};

export const BigHeight: Story = {
  args: {
    height: '300px',
  },
};
