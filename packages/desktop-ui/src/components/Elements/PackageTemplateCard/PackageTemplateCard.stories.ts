import type { Meta, StoryObj } from '@storybook/vue3-vite';
import PackageTemplateCard from './PackageTemplateCard.vue';

type Story = StoryObj<typeof PackageTemplateCard>;

/** Комопонент карточки шаблона упаковки/палета. В качестве пропсов принимает размерность шаблона и заголовок.  */
const meta: Meta<typeof PackageTemplateCard> = {
  component: PackageTemplateCard,
  argTypes: {
    columnsCount: {
      description: 'Количество колонок в сетке',
      table: {
        category: 'props',
      },
    },
    rowsCount: {
      description: 'Количество строк в сетке',
      table: {
        category: 'props',
      },
    },
    layersCount: {
      description: 'Количество слоев в сетке <br/> Если < 1, то не показывается в карточке',
    },
    title: {
      description: 'Заголовок карточки',
    },
  },
  args: {
    title: 'Вода-палет-1',
    columnsCount: 4,
    rowsCount: 3,
    layersCount: 2,
  },
};

export default meta;

export const Standard: Story = {};

export const OneLayer: Story = {
  args: {
    layersCount: 1,
    columnsCount: 7,
    rowsCount: 5,
  },
};
