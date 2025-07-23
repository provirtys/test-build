import { VDescriptionList } from './index.js';

/**
 * Компонент для вывода списка элементов - ключ:значение. Поддерживает html вывод для значения.
 */
export default {
  component: VDescriptionList,
  argTypes: {
    inline: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    items: [
      {
        term: 'Заголовок 1',
        definition: 'Значение 1',
      },
      {
        term: 'Заголовок 2',
        definition: 'Значение 2',
      },
    ],
    inline: false,
  },
};

export const Standard = {};
