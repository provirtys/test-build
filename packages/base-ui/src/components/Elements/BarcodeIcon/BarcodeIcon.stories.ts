import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { BarcodeIcon } from '@/components/Elements/BarcodeIcon/index.js';

type Story = StoryObj<typeof BarcodeIcon>;

/** Иконка Barcode с границей или без */
const meta: Meta<typeof BarcodeIcon> = {
  component: BarcodeIcon,
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
