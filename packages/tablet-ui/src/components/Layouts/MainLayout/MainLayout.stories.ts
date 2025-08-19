import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { MainLayout } from '@';

type Story = StoryObj<typeof MainLayout>;

const meta: Meta<typeof MainLayout> = {
  component: MainLayout,
  parameters: {
    layout: 'fullscreen',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
};
export default meta;

export const Standard: Story = {};
