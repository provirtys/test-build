import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { NumericRatio } from './index';

type Story = StoryObj<typeof NumericRatio>;

/**
 * Компонент отображает числовую долю от целого значения. Есть вертикальное и горизонтальное разделение. Также поддерживает светлый режим, который используется когда задний фон становится темнее.
 */
const meta: Meta<typeof NumericRatio> = {
  component: NumericRatio,
  argTypes: {
    value: {
      description: 'Число над дробью до слэша',
    },
    secondaryValue: {
      description: 'Число над дробью после слэша',
      type: 'number',
    },
    total: {
      description: 'Число под дробью',
    },
    isLight: {
      description: 'Светлый режим',
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    value: 0,
    secondaryValue: 0,
    total: 0,
    isLight: false,
  },
};
export default meta;

export const AllValues: Story = {
  args: {
    value: 10,
    secondaryValue: 2,
    total: 42,
  },
};

export const OnlyTop: Story = {
  args: {
    value: 10,
    secondaryValue: 2,
  },
};

export const WithoutSecondary: Story = {
  args: {
    value: 4,
    total: 25,
  },
};

export const LightMode: Story = {
  args: {
    value: 10,
    secondaryValue: 2,
    total: 42,
    isLight: true,
  },
  globals: {
    backgrounds: { value: 'red' },
  },
};
