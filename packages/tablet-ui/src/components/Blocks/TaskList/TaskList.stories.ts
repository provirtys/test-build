import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { tasks } from '@/mocks/tasks';
import { TaskList } from './index';

type Story = StoryObj<typeof TaskList>;

/** Компонент списка заданий*/
const meta: Meta<typeof TaskList> = {
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
export default meta;

export const Standard: Story = {};

export const VerticalAndBackgrounded: Story = {
  args: {
    isVertical: true,
    alwaysShowBackgrounds: true,
  },
};
