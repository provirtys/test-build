import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { PieProgress } from '@/components/Elements/PieProgress';
import type { Color } from './VCard.types';
import VCard from './VCard.vue';

type Story = StoryObj<typeof VCard>;

const colors: Record<Color, string> = {
  success: 'Зеленый',
  error: 'Красный',
  info: 'Синий',
  warning: 'Желтый',
};

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

export const Stretch: Story = {
  args: {
    title: 'Заголовок карточки',
    stretch: false,
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
