import type { Meta, StoryObj } from '@storybook/vue3-vite';
import type { BoxTemplateCardProps } from '../../Elements/BoxTemplateCard';
import BoxTemplateCards from './BoxTemplateCards.vue';

type Story = StoryObj<typeof BoxTemplateCards>;

const cards: BoxTemplateCardProps[] = [
  {
    name: 'Вода-палет-1',
    x: 5,
    y: 3,
    layers: 3,
  },
  {
    name: 'Вода-упаковка-1',
    x: 5,
    y: 2,
    layers: 2,
  },
  {
    name: 'Вода-палет-2',
    x: 7,
    y: 5,
    layers: 3,
  },
  {
    name: 'Вода-упаковка-2',
    x: 4,
    y: 3,
    layers: 5,
  },
  {
    name: 'Вода-упаковка-3',
    x: 7,
    y: 5,
  },
  {
    name: 'Вода-палет-3',
    x: 7,
    y: 3,
    layers: 3,
  },
];

/** Компонент для вывода списка шаблонов упаковок/палет  */
const meta: Meta<typeof BoxTemplateCards> = {
  component: BoxTemplateCards,
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
