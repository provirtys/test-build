import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { TaskDetailPage } from './index';

type Story = StoryObj<typeof TaskDetailPage>;

/**
 * Страница с детальной информацией о задании. Здесь можно посмотреть все характеристики задания, сбросить статистику и перейти на страницу агрегирования, удержав кнопку "Начать упаковку"
 */
const meta: Meta<typeof TaskDetailPage> = {
  component: TaskDetailPage,
  parameters: {
    layout: 'fullscreen',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
};
export default meta;

export const Standard: Story = {};
