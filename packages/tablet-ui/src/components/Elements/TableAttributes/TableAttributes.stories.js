import { taskDetailRows } from '@/mocks/tasks.js';
import { TableAttributes } from './index.js';

/**
 * Компонент-обертка над компонентом VTable, задающая колонки по умолчанию.
 */
export default {
  component: TableAttributes,
  args: {
    rows: taskDetailRows,
  },
};

export const Standard = {};
