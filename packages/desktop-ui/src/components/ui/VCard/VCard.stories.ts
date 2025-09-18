import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { PieProgress } from '@/components/Elements/PieProgress';
import VCard from './VCard.vue';

type Story = StoryObj<typeof VCard>;

/** Простой компонент-обертка. Через слот добавляется нужный контент. */
const meta: Meta<typeof VCard> = {
  component: VCard,
  argTypes: {
    title: {
      description: 'Заголовок карточки',
    },
    stretch: {
      description: 'Растягиваться на всего родителя',
      control: 'boolean',
    },
    default: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    title: '',
    stretch: true,
  },
};

export default meta;

export const WithTitle: Story = {
  args: {
    title: 'Название карточки',
  },
};

export const Stretch: Story = {
  render: (args) => ({
    components: { VCard },
    setup() {
      return {
        args,
      };
    },
    template: `
      <v-card v-bind="args">Контент карточки</v-card>`,
  }),
};

export const NoStretch: Story = {
  args: {
    stretch: false,
  },
  render: (args) => ({
    components: { VCard, PieProgress },
    setup() {
      return {
        args,
      };
    },
    template: `
      <v-card v-bind="args">
        <pie-progress size="60"/>
      </v-card>`,
  }),
};
