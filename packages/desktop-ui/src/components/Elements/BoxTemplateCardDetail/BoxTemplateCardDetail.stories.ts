import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { Notify } from 'quasar';
import BoxTemplateCardDetail from './BoxTemplateCardDetail.vue';

type Story = StoryObj<typeof BoxTemplateCardDetail>;

/** Компонент вывода информации по шаблону упаковки. Эмитит события `edit`, `export`, `delete` */
const meta: Meta<typeof BoxTemplateCardDetail> = {
  component: BoxTemplateCardDetail,
  argTypes: {
    name: {
      description: 'Заголовок карточки',
    },
    x: {
      description: 'Количество колонок в сетке',
      table: {
        category: 'props',
      },
    },
    y: {
      description: 'Количество строк в сетке',
      table: {
        category: 'props',
      },
    },
    layers: {
      description: 'Количество слоев в сетке',
    },
    onEdit: {
      table: {
        disable: true,
      },
    },
    onExport: {
      table: {
        disable: true,
      },
    },
    onDelete: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    name: 'Вода-палет-1',
    x: 5,
    y: 3,
    layers: 3,
    onEdit: () =>
      Notify.create({
        type: 'info',
        message: 'Событие редактирования',
      }),
    onExport: () =>
      Notify.create({
        type: 'info',
        message: 'Событие экспорта',
      }),
    onDelete: () =>
      Notify.create({
        type: 'negative',
        message: 'Событие удаления',
      }),
  },
};

export default meta;

export const Standard: Story = {};

export const MoreItems: Story = {
  name: '10x10',
  args: {
    name: 'Вода-палет-2',
    x: 10,
    y: 10,
    layers: 4,
  },
};
