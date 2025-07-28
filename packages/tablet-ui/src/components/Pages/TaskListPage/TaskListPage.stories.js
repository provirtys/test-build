import { TaskListPage } from '@tablet/pages.js';

/**
 * Страница выбора заданий. Здесь можно выбрать задание и перейти на его детальную страницу, удержав кнопку в сайдбаре.
 */
export default {
  component: TaskListPage,
  parameters: {
    layout: 'fullscreen',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
};

export const Standard = {};
