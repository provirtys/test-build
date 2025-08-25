import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { GtinInfo } from './index';

type Story = StoryObj<typeof GtinInfo>;

const meta: Meta<typeof GtinInfo> = {
  component: GtinInfo,
  argTypes: {},
  args: {
    gtin: {
      id: '029000000001381',
      name: 'Вода Артезианская 5 литров',
      quantityInPackage: 6,
      quantityInPallet: 100,
    },
  },
};
export default meta;

export const Standard: Story = {
  args: {},
};
