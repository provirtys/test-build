import type { Meta, StoryObj } from '@storybook/vue3-vite';
import type { PackageTemplateCardProps } from '../../Elements/PackageTemplateCard';
import PackageTemplateCards from './PackageTemplateCards.vue';

type Story = StoryObj<typeof PackageTemplateCards>;

const cards: PackageTemplateCardProps[] = [
  {
    title: 'Вода-палет-1',
    columnsCount: 5,
    rowsCount: 3,
    layersCount: 3,
  },
  {
    title: 'Вода-упаковка-1',
    columnsCount: 5,
    rowsCount: 2,
    layersCount: 2,
  },
  {
    title: 'Вода-палет-2',
    columnsCount: 7,
    rowsCount: 5,
    layersCount: 3,
  },
  {
    title: 'Вода-упаковка-2',
    columnsCount: 4,
    rowsCount: 3,
    layersCount: 5,
  },
  {
    title: 'Вода-упаковка-3',
    columnsCount: 7,
    rowsCount: 5,
  },
  {
    title: 'Вода-палет-3',
    columnsCount: 7,
    rowsCount: 3,
    layersCount: 3,
  },
];

/** Компонент для вывода списка шаблонов упаковок/палет  */
const meta: Meta<typeof PackageTemplateCards> = {
  component: PackageTemplateCards,
  argTypes: {
    cards: {
      description: 'Массив с информацией о шаблонах',
    },
  },
  args: {
    cards: cards,
  },
};

export default meta;

export const Standard: Story = {};

export const TwoCards: Story = {
  args: {
    cards: cards.slice(0, 2),
  },
};
