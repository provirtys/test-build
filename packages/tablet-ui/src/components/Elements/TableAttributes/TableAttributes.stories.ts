import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { taskDetailRows } from '@/mocks/tasks.js';
import { TableAttributes } from './index';

type Story = StoryObj<typeof TableAttributes>;
/**
 * Компонент-обертка над компонентом VTable, задающая колонки по умолчанию.
 */
const meta: Meta<typeof TableAttributes> = {
  component: TableAttributes,
  args: {
    rows: taskDetailRows,
  },
};
export default meta;

export const Standard: Story = {};
