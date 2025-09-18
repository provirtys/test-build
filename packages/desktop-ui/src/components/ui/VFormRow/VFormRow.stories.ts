import type { Meta, StoryObj } from '@storybook/vue3-vite';
import VFormRow from './VFormRow.vue';

type Story = StoryObj<typeof VFormRow>;

/** Компонент для вывода полей формы в одной строке в несколько равных колонок */
const meta: Meta<typeof VFormRow> = {
  component: VFormRow,
  argTypes: {
    columns: {
      description: 'Количество колонок',
    },
  },
  args: {
    columns: 1,
  },
};

export default meta;

export const OneColumn: Story = {};

export const TwoColumns: Story = {
  args: {
    columns: 2,
  },
};
