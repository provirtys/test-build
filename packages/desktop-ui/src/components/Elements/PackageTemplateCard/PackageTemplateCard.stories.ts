import type { Meta, StoryObj } from '@storybook/vue3-vite';
import PackageTemplateCard from './PackageTemplateCard.vue';

type Story = StoryObj<typeof PackageTemplateCard>;

/** Комопонент карточки шаблона упаковки/палета. В качестве пропсов принимает размерность шаблона и заголовок.  */
const meta: Meta<typeof PackageTemplateCard> = {
  component: PackageTemplateCard,
  argTypes: {
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
      description: 'Количество слоев в сетке <br/> Если < 1, то не показывается в карточке',
    },
    name: {
      description: 'Заголовок карточки',
    },
  },
  args: {
    name: 'Вода-палет-1',
    x: 4,
    y: 3,
    layers: 2,
  },
};

export default meta;

export const Standard: Story = {};

export const OneLayer: Story = {
  args: {
    layers: 1,
    x: 7,
    y: 5,
  },
};
