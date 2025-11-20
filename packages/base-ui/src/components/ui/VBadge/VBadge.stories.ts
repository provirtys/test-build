import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { computed } from 'vue';
import type { VBadgeColor, VBadgeSize } from './index';
import { VBadge } from './index';

type Story = StoryObj<typeof VBadge>;

const colors: Record<VBadgeColor, string> = {
  success: 'Зеленый',
  error: 'Красный',
  info: 'Синий',
  warning: 'Желтый',
};

const sizes: Record<VBadgeSize, string> = {
  lg: 'Большой',
  md: 'Средний',
  sm: 'Маленький',
};

const meta: Meta<typeof VBadge> = {
  component: VBadge,
  argTypes: {
    label: {
      description: 'Текст элемента',
    },
    size: {
      description: 'Размер элемента',
      options: Object.keys(sizes),
      control: {
        type: 'select',
        labels: sizes,
      },
    },
    color: {
      description: 'Цвет элемента',
      options: Object.keys(colors),
      control: {
        type: 'select',
        labels: colors,
      },
    },
    isInverted: {
      description: 'Поменять местами цвета',
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    label: 'Название',
    size: 'lg',
    color: 'info',
    isInverted: false,
  },
  render: (args) => ({
    components: { VBadge },
    setup() {
      const bindingArgs = computed(() => {
        const { label, ...restArgs } = args;
        return restArgs;
      });

      const label = computed(() => args.label);

      return {
        bindingArgs,
        label,
      };
    },
    template: `
      <v-badge v-bind="bindingArgs">{{ label }}</v-badge>`,
  }),
};
export default meta;

export const Large: Story = {
  args: {
    label: 'Новое',
    size: 'lg',
  },
};

export const Medium: Story = {
  args: {
    label: 'Новое',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    label: 'Новое',
    size: 'sm',
  },
};

export const ColorInfoInverted: Story = {
  args: {
    label: 'Новое',
    isInverted: true,
  },
};

export const ColorSuccess: Story = {
  args: {
    label: 'Завершено',
    color: 'success',
  },
};

export const ColorSuccessInverted: Story = {
  args: {
    label: 'Завершено',
    color: 'success',
    isInverted: true,
  },
};

export const ColorError: Story = {
  args: {
    label: 'Отменено',
    color: 'error',
  },
};

export const ColorErrorInverted: Story = {
  args: {
    label: 'Отменено',
    color: 'error',
    isInverted: true,
  },
};

export const ColorWarning: Story = {
  args: {
    label: 'Маркировка',
    color: 'warning',
  },
};

export const ColorWarningInverted: Story = {
  args: {
    label: 'Маркировка',
    color: 'warning',
    isInverted: true,
  },
};
