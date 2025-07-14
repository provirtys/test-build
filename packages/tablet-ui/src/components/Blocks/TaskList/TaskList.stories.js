import { TaskList } from './index.js';

/** Компонент списка заданий*/
export default {
  component: TaskList,
  argTypes: {
    tasks: {
      description: 'Список задач',
    },
  },
  args: {
    tasks: [
      {
        id: '1',
        name: '红17＊2.0-500米+17-003+6000米',
        status: 'new',
        properties: [
          {
            name: 'Количество',
            value: '10',
          },
          {
            name: 'Дата и время:',
            value: '2024-03-19 17:07:09',
          },
        ],
      },
      {
        id: '2',
        name: 'ТУ 16.К71-335-2004',
        status: 'labeling',
        properties: [
          {
            name: 'Количество',
            value: '25',
          },
          {
            name: 'Дата и время',
            value: '2024-03-19 17:07:09',
          },
        ],
      },
      {
        id: '3',
        name: 'ТУ 16.К71-335-2004',
        status: 'new',
        properties: [
          {
            name: 'Количество',
            value: '1500',
          },
          {
            name: 'Дата и время:',
            value: '2024-03-19 17:07:09',
          },
        ],
        priority: 2,
      },
      {
        id: '4',
        name: 'АПвПу2г 1х240мк/70-10',
        status: 'new',
        properties: [
          {
            name: 'Количество',
            value: '250',
          },
          {
            name: 'Дата и время',
            value: '2024-03-19 17:07:09',
          },
        ],
      },
      {
        id: '5',
        name: '红17＊2.0-500米+17-003+6000米',
        status: 'ready',
        properties: [
          {
            name: 'Количество',
            value: '30',
          },
          {
            name: 'Дата и время:',
            value: '2024-03-19 17:07:09',
          },
        ],
      },
      {
        id: '6',
        name: 'ТУ 16.К71-335-2004',
        status: 'ready',
        properties: [
          {
            name: 'Количество',
            value: '10',
          },
          {
            name: 'Дата и время',
            value: '2024-03-19 17:07:09',
          },
        ],
      },
      {
        id: '7',
        name: '红17＊2.0-500米+17-003+6000米',
        status: 'ready',
        properties: [
          {
            name: 'Количество',
            value: '10',
          },
          {
            name: 'Дата и время:',
            value: '2024-03-19 17:07:09',
          },
        ],
      },
      {
        id: '8',
        name: 'ТУ 16.К71-335-2004',
        status: 'canceled',
        properties: [
          {
            name: 'Количество',
            value: '150',
          },
          {
            name: 'Дата и время',
            value: '2024-03-19 17:07:09',
          },
        ],
      },
    ],
  },
};

export const Standard = {};
