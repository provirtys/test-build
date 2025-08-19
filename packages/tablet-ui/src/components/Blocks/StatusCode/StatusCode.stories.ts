import type { Meta, StoryObj } from '@storybook/vue3-vite';
import type { CodeColor, CodeStatus, CodeType } from '@/components/Blocks/StatusCode/StatusCode.types';
import { StatusCode } from './index';

type Story = StoryObj<typeof StatusCode>;

const types: Record<CodeType, string> = {
  barcode: 'Barcode',
  dataMatrix: 'Data Matrix',
};

const colors: Record<CodeColor, string> = {
  info: 'Синий',
  success: 'Зеленый',
  error: 'Красный',
  warning: 'Желтый',
};

const statuses: Record<CodeStatus, string> = {
  hidden: 'Скрыто',
  active: 'Отображается',
  processing: 'В процессе',
};

/** Компонент отображает иконку с кодом и её статус. Поддерживает DataMatrix и Barcode, 4 цветовых палитры (синий, желтый, зеленый, красный) и статус. Статус показывается, если задан цвет. */
const meta: Meta<typeof StatusCode> = {
  component: StatusCode,
  argTypes: {
    type: {
      description: 'Тип кода',
      options: Object.keys(types),
      control: {
        type: 'radio',
        labels: types,
      },
    },
    color: {
      description: 'Цвет статуса',
      options: Object.keys(colors),
      control: {
        type: 'select',
        labels: colors,
      },
    },
    status: {
      description: 'Статус кода',
      options: Object.keys(statuses),
      control: {
        type: 'select',
        labels: statuses,
      },
    },
  },
  args: {
    type: 'dataMatrix',
    color: 'success',
    status: 'hidden',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
};
export default meta;

export const DataMatrix: Story = {
  name: 'DataMatrix',
};

export const Barcode: Story = {
  args: {
    type: 'barcode',
  },
};

export const ColorSuccessSimple: Story = {
  args: {
    color: 'success',
  },
};

export const ColorSuccessWithPoint: Story = {
  args: {
    color: 'success',
    status: 'active',
  },
};

export const ColorSuccess: Story = {
  args: {
    color: 'success',
    status: 'processing',
  },
};

export const ColorError: Story = {
  args: {
    color: 'error',
    status: 'processing',
  },
};

export const ColorInfo: Story = {
  args: {
    color: 'info',
    status: 'processing',
  },
};

export const ColorWarning: Story = {
  args: {
    color: 'warning',
    status: 'processing',
  },
};
