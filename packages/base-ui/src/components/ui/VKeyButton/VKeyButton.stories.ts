import type { Meta, StoryObj } from '@storybook/vue3-vite';
import type { VKeyButtonSize } from '@/components/ui/VKeyButton/VKeyButton.types';
import { VKeyButton } from './index';

const sizes: Record<VKeyButtonSize, string> = {
  lg: 'Большой',
  md: 'Средний',
  sm: 'Маленький',
};

const meta: Meta<typeof VKeyButton> = {
  component: VKeyButton,
  argTypes: {
    value: {
      options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'back'],
      control: { type: 'select' },
    },
    size: {
      options: Object.keys(sizes),
      control: {
        type: 'select',
        labels: sizes,
      },
    },
  },
  args: {
    value: '0',
    size: 'lg',
  },
};

export default meta;

/** Кнопка с цифрой*/
export const NumberPrimary: StoryObj<typeof VKeyButton> = {
  args: {
    value: '0',
  },
};
/** Кнопка с иконкой backspace*/
export const Backspace: StoryObj<typeof VKeyButton> = {
  args: {
    value: 'back',
  },
};

/** Средний размер*/
export const Middle: StoryObj<typeof VKeyButton> = {
  args: {
    value: '0',
    size: 'md',
  },
};

/** Маленький размер*/
export const Small: StoryObj<typeof VKeyButton> = {
  args: {
    value: '0',
    size: 'sm',
  },
};
