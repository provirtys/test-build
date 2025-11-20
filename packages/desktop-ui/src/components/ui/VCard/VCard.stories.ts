import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { Notify } from 'quasar';
import { PieProgress } from '@/components/Elements/PieProgress';
import type { VCardColor } from './VCard.types';
import VCard from './VCard.vue';

type Story = StoryObj<typeof VCard>;

const colors: Record<VCardColor, string> = {
  success: 'Зеленый',
  error: 'Красный',
  info: 'Синий',
  warning: 'Желтый',
  gray: 'Серый',
};

/** Простой компонент-обертка. Через слот добавляется нужный контент. Также поддерживает показ меню справа наверху - для этого необходимо передать массив пунктов через проп `menuItems` */
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
    color: {
      description: 'Цвет заднего фона карточки',
      options: Object.keys(colors),
      control: {
        type: 'select',
        labels: colors,
      },
    },
    paddingX: {
      description: 'Внутренний отступ по горизонтали',
    },
    paddingY: {
      description: 'Внутренний отступ по вертикали',
    },
    menuItems: {
      description: 'Список пунктов меню из компонента [VList](/?path=/docs/ui-vlist--docs)',
    },
    borderRadius: {
      description: 'Радиус границы',
    },
    isFlex: {
      description: 'Применить flex к контенту',
    },
    default: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    title: 'Заголовок карточки',
    stretch: true,
    paddingX: '20px',
    paddingY: '20px',
    menuItems: [],
    borderRadius: '8px',
    isFlex: false,
  },
};

export default meta;

export const WithTitle: Story = {};

export const InfoColor: Story = {
  args: {
    color: 'info',
  },
};

export const ErrorColor: Story = {
  args: {
    color: 'error',
  },
};

export const WarningColor: Story = {
  args: {
    color: 'warning',
  },
};

export const SuccessColor: Story = {
  args: {
    color: 'success',
  },
};

export const GrayColor: Story = {
  args: {
    color: 'gray',
  },
};

export const NoStretch: Story = {
  args: {
    title: '',
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

export const WithMenu: Story = {
  args: {
    title: 'Карточка с меню',
    menuItems: [
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
  },
};

export const WithBtn: Story = {
  args: {
    title: 'Карточка с кнопкой',
    btnConf: {
      icon: 'pencil',
      handler: () =>
        Notify.create({
          message: 'Нажатие на кнопку',
        }),
    },
  },
};
