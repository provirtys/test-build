import type { Meta, StoryObj } from '@storybook/vue3-vite';
import type { PackageTemplateCardProps } from '../../Elements/PackageTemplateCard';
import PackageTemplateCards from './PackageTemplateCards.vue';

type Story = StoryObj<typeof PackageTemplateCards>;

const cards: PackageTemplateCardProps[] = [
  {
    title: 'Вода-палет-1',
    x: 5,
    y: 3,
    layers: 3,
  },
  {
    title: 'Вода-упаковка-1',
    x: 5,
    y: 2,
    layers: 2,
  },
  {
    title: 'Вода-палет-2',
    x: 7,
    y: 5,
    layers: 3,
  },
  {
    title: 'Вода-упаковка-2',
    x: 4,
    y: 3,
    layers: 5,
  },
  {
    title: 'Вода-упаковка-3',
    x: 7,
    y: 5,
  },
  {
    title: 'Вода-палет-3',
    x: 7,
    y: 3,
    layers: 3,
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
