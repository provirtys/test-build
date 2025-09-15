import type { Meta, StoryObj } from '@storybook/vue3-vite';
import StatusTimeline from './StatusTimeline.vue';

type Story = StoryObj<typeof StatusTimeline>;

/**
 * Компонент для отображения статуса сущности в течение определенного периода.
 */
const meta: Meta<typeof StatusTimeline> = {
  component: StatusTimeline,
  argTypes: {
    items: {
      description: 'Элементы для отображения',
    },
  },
};

export default meta;

export const ExampleWithLinks: Story = {
  args: {
    items: [
      {
        id: '1',
        name: 'Статус ',
        label: '20.09.2025 12:15:00',
      },
      {
        id: '2',
        name: 'Коды получены',
        label: '20.09.2025 12:15:00',
      },
      {
        id: '3',
        name: 'Ожидает выполнения',
        label: '20.09.2025 12:15:00',
      },
      {
        id: '4',
        name: 'Запущено/выполняется',
        label: '20.09.2025 12:15:00',
      },
      {
        id: '4',
        name: 'Запущено',
        label: '20.09.2025 12:15:00',
      },
      {
        id: '4',
        name: 'Отчет о нанесении отправлен',
        label: '20.09.2025 12:15:00',
      },
      {
        id: '4',
        name: 'Отчет о нанесении обработан ГИС МТ',
        label: '20.09.2025 12:15:00',
        color: 'warning',
        links: [
          {
            text: 'ГИС МТ',
            href: 'https://ya.ru',
          },
          {
            text: 'Список кодов XLSX',
            href: 'https://google.ru',
          },
        ],
      },
    ],
  },
};

export const InfoColor: Story = {
  args: {
    items: [
      {
        id: 'info1',
        name: 'Синий статус 1',
        label: new Date().toLocaleString(),
        color: 'info',
      },
      {
        id: 'info2',
        name: 'Синий статус 2',
        label: new Date().toLocaleString(),
        color: 'info',
      },
      {
        id: 'info3',
        name: 'Синий статус 3',
        label: new Date().toLocaleString(),
        color: 'info',
      },
    ],
  },
};

export const WarningColor: Story = {
  args: {
    items: [
      {
        id: 'warning1',
        name: 'Желтый статус 1',
        label: new Date().toLocaleString(),
        color: 'warning',
      },
      {
        id: 'warning2',
        name: 'Желтый статус 2',
        label: new Date().toLocaleString(),
        color: 'warning',
      },
      {
        id: 'warning3',
        name: 'Желтый статус 3',
        label: new Date().toLocaleString(),
        color: 'warning',
      },
    ],
  },
};

export const ErrorColor: Story = {
  args: {
    items: [
      {
        id: 'error1',
        name: 'Красный статус 1',
        label: new Date().toLocaleString(),
        color: 'error',
      },
      {
        id: 'error2',
        name: 'Красный статус 2',
        label: new Date().toLocaleString(),
        color: 'error',
      },
      {
        id: 'error3',
        name: 'Красный статус 3',
        label: new Date().toLocaleString(),
        color: 'error',
      },
    ],
  },
};
