import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { TaskListPage } from '@/pages';

type Story = StoryObj<typeof TaskListPage>;

/**
 * Страница выбора заданий. Здесь можно выбрать задание и перейти на его детальную страницу, удержав кнопку в сайдбаре.
 */
const meta: Meta<typeof TaskListPage> = {
  component: TaskListPage,
  parameters: {
    layout: 'fullscreen',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
};
export default meta;

export const Standard: Story = {};
