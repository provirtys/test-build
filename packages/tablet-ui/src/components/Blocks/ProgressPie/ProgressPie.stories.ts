import type { Meta, StoryObj } from '@storybook/vue3-vite';
import type { ProgressPieSize } from '@/components/Blocks/ProgressPie/ProgressPie.types';
import { ProgressPie } from './index';

const sizes: Record<ProgressPieSize, string> = {
  sm: 'Маленький',
  lg: 'Большой',
};

type Story = StoryObj<typeof ProgressPie>;

/** Компонент отображает процент выполнения задачи/маркировки. Можно настроить размер компонента и процент выполнения */
const meta: Meta<typeof ProgressPie> = {
  component: ProgressPie,
  argTypes: {
    size: {
      description: 'Размер компонентна',
      options: Object.keys(sizes),
      control: {
        type: 'radio',
        labels: sizes,
      },
    },
    percentage: {
      description: 'Процент выполнения',
    },
  },
  parameters: {
    backgrounds: {
      default: 'white',
      values: [
        { name: 'dark', value: '#242a2b' },
        { name: 'light', value: '#f4f4f4' },
        { name: 'white', value: '#fff' },
      ],
    },
  },
};
export default meta;

export const Small0: Story = {
  args: {
    percentage: 0,
    size: 'sm',
  },
};
export const Small50: Story = {
  args: {
    percentage: 50,
    size: 'sm',
  },
};
export const Small100: Story = {
  args: {
    percentage: 100,
    size: 'sm',
  },
};
export const large0: Story = {
  args: {
    percentage: 0,
    size: 'lg',
  },
};
export const large50: Story = {
  args: {
    percentage: 50,
    size: 'lg',
  },
};
export const large100: Story = {
  args: {
    percentage: 100,
    size: 'lg',
  },
};
