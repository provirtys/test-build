import type { Meta, StoryObj } from '@storybook/vue3-vite';
import type { TaskStatus } from '@/components/Blocks/TaskCard/TaskCard.types';
import { TaskCard } from './index';

type Story = StoryObj<typeof TaskCard>;

const statuses: Record<TaskStatus, string> = {
  new: 'Новое',
  labeling: 'Маркировка',
  ready: 'Завершено',
  canceled: 'Отменено',
};

/** Компонент карточки задания. Отображает статус, приоритет, название и свойства задачи. <br>
 * Есть 4 типа статуса - new, labeling, ready, canceled.<br>
 * Цвет заднего фона зависит от статуса задачи, если new или labeling - белый фон, иначе прозрачный.<br>
 * Имеет флаг активности, который влияет на границу карточки.*/
const meta: Meta<typeof TaskCard> = {
  component: TaskCard,
  argTypes: {
    title: {
      description: 'Наименование задачи/артикула',
    },
    status: {
      description: 'Статус маркировки',
      options: Object.keys(statuses),
      control: {
        type: 'select',
        labels: statuses,
      },
    },
    properties: {
      description: 'Информация об объекте (количество, дата и время)',
    },
    id: {
      description: 'id задачи',
    },
    priority: {
      description: 'Приоритет задачи',
      control: {
        type: 'number',
      },
    },
    isActive: {
      description: 'Активность задачи',
    },
    hasBackground: {
      description: 'Задний фон',
    },
  },
  args: {
    id: '',
    title: 'Название задачи',
    status: 'new',
    priority: undefined,
    properties: [],
    isActive: false,
    hasBackground: false,
  },
};
export default meta;

export const StatusNew: Story = {
  args: {
    properties: [
      { name: 'Количество', value: '50' },
      { name: 'Дата и время', value: '2024-03-19 17:07:15' },
    ],
  },
};

export const StatusLabeling: Story = {
  args: {
    status: 'labeling',
    properties: [
      { name: 'Количество', value: '50' },
      { name: 'Дата и время', value: '2024-03-19 17:07:15' },
    ],
  },
};

export const StatusReady: Story = {
  args: {
    status: 'ready',
    properties: [
      { name: 'Количество', value: '50' },
      { name: 'Дата и время', value: '2024-03-19 17:07:15' },
    ],
  },
};

export const StatusCanceled: Story = {
  args: {
    status: 'canceled',
    properties: [
      { name: 'Количество', value: '50' },
      { name: 'Дата и время', value: '2024-03-19 17:07:15' },
    ],
  },
};

export const StatusNewWithPriority: Story = {
  args: {
    properties: [
      { name: 'Количество', value: '50' },
      { name: 'Дата и время', value: '2024-03-19 17:07:15' },
    ],
    priority: 1,
  },
};

export const ActiveTask: Story = {
  args: {
    properties: [
      { name: 'Количество', value: '50' },
      { name: 'Дата и время', value: '2024-03-19 17:07:15' },
    ],
    isActive: true,
  },
};
