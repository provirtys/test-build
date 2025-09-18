import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { PieProgress } from '@/components/Elements/PieProgress';
import VCard from './VCard.vue';

type Story = StoryObj<typeof VCard>;

/** Простой компонент-обертка. Через слот добавляется нужный контент. */
const meta: Meta<typeof VCard> = {
  component: VCard,
  argTypes: {
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
    stretch: true,
  },
};

export default meta;

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
