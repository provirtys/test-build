import { VIcon } from '@base';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { MainHeader } from './index';

type Story = StoryObj<typeof MainHeader>;

/**
 * Компонент для отображения шапки приложения.
 * */
const meta: Meta<typeof MainHeader> = {
  component: MainHeader,
  argTypes: {
    showBackButton: {
      description: 'Отображать кнопку перехода назад',
    },
    default: {
      description: 'Слот для контента',
    },
  },
  args: {
    showBackButton: true,
  },
};
export default meta;

export const Standard: Story = {};

export const WithText: Story = {
  render: (args) => ({
    components: { MainHeader, VIcon },
    setup() {
      return {
        args,
      };
    },
    template: `
      <main-header :show-back-button="args.showBackButton">
        <div>Заголовок</div>
      </main-header>`,
  }),
};

export const WithIcon: Story = {
  render: (args) => ({
    components: { MainHeader, VIcon },
    setup() {
      return {
        args,
      };
    },
    template: `
      <main-header :show-back-button="args.showBackButton">
        <v-icon name="integrity-logo" width="110" height="20" style="color: #22292a"/>
      </main-header>`,
  }),
};
