import { TaskDetailPage } from '@tablet/pages.js';

/**
 * Страница с детальной информацией о задании. Здесь можно посмотреть все характеристики задания, сбросить статистику и перейти на страницу агрегирования, удержав кнопку "Начать упаковку"
 */

export default {
  component: TaskDetailPage,
  parameters: {
    layout: 'fullscreen',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
};

export const Standard = {};
