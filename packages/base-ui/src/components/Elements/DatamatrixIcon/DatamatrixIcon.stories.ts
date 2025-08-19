import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { DatamatrixIcon } from '@/components/Elements/DatamatrixIcon/index.js';

type Story = StoryObj<typeof DatamatrixIcon>;

/** Иконка Datamatrix с границей или без */
const meta: Meta<typeof DatamatrixIcon> = {
  component: DatamatrixIcon,
  argTypes: {
    border: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    border: true,
  },
};
export default meta;

export const WithBorder: Story = {};

export const WithoutBorder: Story = {
  args: {
    border: false,
  },
};
