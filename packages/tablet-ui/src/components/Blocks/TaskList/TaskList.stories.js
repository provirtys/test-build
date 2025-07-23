import { tasks } from '@tablet/mocks/tasks.js';
import { TaskList } from './index.js';

/** Компонент списка заданий*/
export default {
  component: TaskList,
  argTypes: {
    tasks: {
      description: 'Список задач',
    },
    isVertical: {
      description: 'Отображение списка в одну колонку',
      control: {
        type: 'boolean',
      },
    },
    alwaysShowBackgrounds: {
      description: 'Белый background у всех карточек',
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    tasks: tasks,
    isVertical: false,
    alwaysShowBackgrounds: false,
  },
};

export const Standard = {};

export const VerticalAndBackgrounded = {
  args: {
    isVertical: true,
    alwaysShowBackgrounds: true,
  },
};
