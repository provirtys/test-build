import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { LabelingProgress } from './index';

type Story = StoryObj<typeof LabelingProgress>;

const meta: Meta<typeof LabelingProgress> = {
  component: LabelingProgress,
  argTypes: {
    total: {
      description: 'Общее число кодов',
    },
    mistakes: {
      description: 'Число кодов с ошибками',
    },
  },
};
export default meta;

export const NoErrors: Story = {
  args: {
    total: 250,
    mistakes: 0,
  },
};

export const Errors2: Story = {
  args: {
    total: 300,
    mistakes: 6,
  },
};

export const Errors5: Story = {
  args: {
    total: 300,
    mistakes: 15,
  },
};

export const Errors20: Story = {
  args: {
    total: 250,
    mistakes: 50,
  },
};

export const Errors50: Story = {
  args: {
    total: 400,
    mistakes: 200,
  },
};

export const Errors70: Story = {
  args: {
    total: 700,
    mistakes: 490,
  },
};

export const Errors90: Story = {
  args: {
    total: 500,
    mistakes: 450,
  },
};

export const Errors98: Story = {
  args: {
    total: 500,
    mistakes: 490,
  },
};

export const OnlyErrors: Story = {
  args: {
    total: 270,
    mistakes: 270,
  },
};
