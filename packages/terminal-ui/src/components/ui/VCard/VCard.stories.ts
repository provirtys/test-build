import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { VCard } from './index';
import type { VCardBgColor } from './VCard.types';

type Story = StoryObj<typeof VCard>;

const colors: Record<VCardBgColor, string> = {
  white: 'Белый',
  gray: 'Серый',
};
/**
 * UI компонент карточки. Контент отображается через слот. Поддерживает выбор цвета заднего фона.
 * */
const meta: Meta<typeof VCard> = {
  component: VCard,
  argTypes: {
    bgColor: {
      description: 'Цвет заднего фона',
      options: Object.keys(colors),
      control: {
        type: 'select',
        labels: colors,
      },
    },
  },
  args: {
    bgColor: 'white',
  },
  render: (args) => ({
    components: { VCard },
    setup() {
      return {
        args,
      };
    },
    template: `
    <v-card v-bind="args">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aut consequatur cumque excepturi exercitationem numquam placeat quisquam repellendus, totam.
    </v-card>`,
  }),
};
export default meta;

export const White: Story = {};

export const Gray: Story = {
  args: {
    bgColor: 'gray',
  },
};
