import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { Notify } from 'quasar';
import VButtonMenu from './VButtonMenu.vue';

type Story = StoryObj<typeof VButtonMenu>;

/** Простой компонент кнопки, при нажатии на которую выводится меню */
const meta: Meta<typeof VButtonMenu> = {
  component: VButtonMenu,
  argTypes: {
    items: {
      description: 'Список элементов',
    },
    dense: {
      description: 'Уменьшить размер',
    },
  },
  args: {
    items: [
      {
        icon: 'pencil',
        label: 'Редактировать',
        handler: () => {
          Notify.create({
            message: 'Нажатие на кнопку',
          });
        },
      },
      {
        icon: 'trash',
        iconColor: 'primary',
        label: 'Удалить',
        topDivider: true,
        handler: () => {
          Notify.create({
            message: 'Нажатие на кнопку',
          });
        },
      },
    ],
    dense: false,
  },
};

export default meta;

export const Standard: Story = {};

export const Dense: Story = {
  args: {
    dense: true,
  },
};
